import { QSsrContext } from '@quasar/app-webpack';
import { Cookies } from 'quasar';
import { isDev } from './utils';

export enum CookieName {
  Consent = 'consent',
  Necessary = 'necessary',
  Functional = 'functional',
  Analysis = 'analysis',
  Marketing = 'marketing',
}

export interface CategoryData {
  category: CookieName;
  accepted: boolean;
  optional: boolean;
  cookies: string[];
}

const categories = [
  CookieName.Necessary,
  CookieName.Functional,
  CookieName.Analysis,
  CookieName.Marketing,
];

const optionalCategories = [
  CookieName.Functional,
  CookieName.Analysis,
  CookieName.Marketing,
];

enum CookieValue {
  No = 'no',
  Yes = 'yes',
}

const PREFIX = 'cookie-';
export class CookieService {
  private accepted: { [type: string]: boolean };
  private consent?: boolean;
  private cookies: { [category: string]: string[] };
  private requests: { category: CookieName, resolve: (a: boolean) => void }[];
  private globalCookies: Cookies;

  constructor(ssrContext?: QSsrContext | null) {
    this.accepted = {};
    this.cookies = {};
    this.requests = [];

    this.globalCookies = process.env.SERVER
      ? Cookies.parseSSR(ssrContext)
      : Cookies;

    this.addCookie(this.getName(CookieName.Consent), CookieName.Necessary);
  }

  /**
   * Returns whether the user consented the cookie banner.
   */
  public hasConsent() {
    return this.consent;
  }

  /**
   * Used by every cookie to request the use of a cookie.
   *
   * @param name The name of the cookie.
   * @param category The category the cookie is in.
   */
  public requestUsage(name: string, category: CookieName): Promise<boolean> {
    this.addCookie(name, category);

    if (this.hasConsent() || !optionalCategories.includes(category)) {
      return Promise.resolve(!!this.accepted[category]);
    }

    // user did not consent for cookie usage
    return new Promise<boolean>((resolve) => {
      this.requests.push({ category, resolve });
    });
  }

  /**
   * Responds with all available categories including name, the acceptance state
   * and whether it is optional and can be declined.
   */
  public listCategories(): CategoryData[] {
    return categories.map((category) => ({
      category,
      accepted: this.accepted[category],
      optional: optionalCategories.includes(category),
      cookies: this.getCookiesOfCategory(category),
    }));
  }

  /**
   * Lists all used cookie per category.
   *
   * @param category The name of the category that should be listet.
   */
  public getCookiesOfCategory(category: CookieName): string[] {
    return [...(this.cookies[category] || [])];
  }

  /**
   * Used for responses of acceptance from the cookie banner or dialog.
   *
   * @param accept Whether the user accepted cookies or an array of categories.
   */
  public updateConsent(accept: boolean | CategoryData[]) {
    if (Array.isArray(accept)) {
      accept.forEach((item) => {
        this.accepted[item.category] = item.accepted;
        this.saveCategory(item.category);
      });
    } else {
      optionalCategories.forEach((category) => {
        this.accepted[category] = accept;
        this.saveCategory(category);
      });
    }
    this.consent = true;
    this.saveBoolean(CookieName.Consent, this.consent);

    this.flushRequests();
  }

  public async updateCookie(name: string, value: string, category: CookieName) {
    const isPermitted = await this.requestUsage(name, category);

    if (isPermitted && !process.env.SERVER) {
      this.globalCookies.set(name, value, {
        expires: 365,
        // sameSite: 'Strict',
        path: '/',
        httpOnly: false,
        secure: !isDev(),
      });
    }

    return isPermitted;
  }

  public deleteCookie(name: string) {
    this.globalCookies.remove(name);
  }

  /**
   * Initializes the cookie service and check whether the user already consented the usage.
   */
  public init() {
    this.consent = CookieValue.Yes === this.loadCookie(CookieName.Consent);

    this.accepted = {};

    categories.forEach((category) => {
      const value = this.loadCookie(category);
      this.addCookie(this.getName(category), CookieName.Necessary);

      if (value) {
        this.accepted[category] = CookieValue.Yes === value;
      } else {
        this.accepted[category] = !optionalCategories.includes(category);
      }
      this.saveCategory(category);
    });

    this.flushRequests();
  }

  private addCookie(name: string, category: CookieName) {
    this.cookies[category] = this.cookies[category] || [];
    if (!this.cookies[category].includes(name)) {
      this.cookies[category].push(name);
    }
  }

  private flushRequests() {
    if (this.hasConsent()) {
      while (this.requests.length) {
        const request = this.requests.shift()!;
        request.resolve(!!this.accepted[request.category]);
      }
    }
  }

  private saveBoolean(name: CookieName, value: boolean) {
    if (!process.env.SERVER) {
      this.globalCookies.set(
        this.getName(name),
        value ? CookieValue.Yes : CookieValue.No,
        {
          expires: 365,
          // sameSite: 'Strict',
          path: '/',
          httpOnly: false,
          secure: !isDev(),
        },
      );
    }
  }

  private saveCategory(category: CookieName) {
    this.deleteCookie(this.getName(category));
    this.addCookie(this.getName(category), CookieName.Necessary);

    return this.saveBoolean(category, this.accepted[category]);
  }

  private loadCookie(category: CookieName): CookieValue | null {
    return this.globalCookies.get(this.getName(category)) || null;
  }

  private getName(name: string): string {
    return [PREFIX, name.toLowerCase()].join('');
  }
}

let instance: CookieService;

export const useCookieService = (ssrContext?: QSsrContext | null) => {
  if (!instance) {
    instance = new CookieService(ssrContext);
    instance.init();
  }

  return instance;
};
