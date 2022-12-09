import { Component } from 'vue';
import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import features from 'src/features';
import de from './de-DE';
import en from './en-US';

export type Locale = 'de-DE' | 'en-US';
export type LanguageCode = 'de' | 'en';

const availableLinks = {
  'de-DE': de,
  'en-US': en,
};
// contains all localized routes, the order defines the sorting of languages in ui
const links: { [locale: string]: unknown } = {};

const localeMapper: { [l: string]: Locale } = {
  de: 'de-DE',
  en: 'en-US',
};

export interface LocaleRouteRecord {
  pathId: string;
  layout: Component;
  page: string;
  title?: string;
  description?: string;
  name?: string;
  disallow?: boolean;
}

/**
 * Route generator similar to i18n but for links.
 */
export class LocaleRouter {
  /**
   * @param locale The locale
   */
  constructor(private locale: Locale) {
    this.loadLocales();
    this.setLocale(locale);
  }

  /**
   * Updates the global routing locale of the page.
   *
   * @param locale The new locale.
   */
  public setLocale(locale: Locale | LanguageCode): Locale {
    if (locale) {
      this.locale = localeMapper[locale] || locale as Locale;
    }

    return this.locale;
  }

  public getLocale() {
    return this.locale;
  }

  public isLangaugeCodeValid(lang: string) {
    const locale = localeMapper[lang] || lang;

    return Object.keys(links).includes(locale);
  }

  public getLocaleSiblings(
    identifier: string,
    params: { [param: string]: string } = {},
  ) {
    const locales: { localeName: string, locale: Locale, link: string | null }[] = [];
    Object.keys(links).forEach((locale) => {
      locales.push({
        localeName: this.translate('locale.name', locale as Locale)!,
        locale: locale as Locale,
        link: this.l(identifier, params, locale as Locale),
      });
    });

    return locales.sort((a, b) => {
      if (b.locale === this.locale) {
        return 1;
      }

      return -1;
    });
  }

  /**
   * Retrieves the localized path for the given identifer.
   *
   * @param identifier The dot style identifier of the route.
   * @param params Optional parameter list for placeholders.
   */
  public l(
    identifier: string,
    params: { [param: string]: string } = {},
    locale = this.locale,
  ): string {
    const link = this.translate(identifier, locale);
    const prefix = this.getLocalePrefix(locale);

    if (link) {
      return [
        prefix && `/${prefix}`,
        link.replace(/:([a-z]+)\??/gi, (placeholder) => {
          const end = placeholder.endsWith('?') ? placeholder.length - 1 : placeholder.length;
          placeholder = placeholder.substring(1, end);

          return params[placeholder] || '';
        }),
      ].join('');
    }

    return identifier;
  }

  /**
   * Creates a multi locale route record.
   *
   * @param record The record data to create the route.
   */
  public createRouteRecord(record: LocaleRouteRecord): RouteRecordRaw[] {
    const paths: string[] = [];
    Object.keys(links).forEach((locale) => {
      const link = this.translate(record.pathId, locale as Locale);

      if (link) {
        const prefix = this.getLocalePrefix(locale as Locale);
        paths.push([
          prefix ? `/:locale(${prefix || 'de'})${prefix ? '' : '?'}` : '',
          link,
        ].join(''));
      }
    });

    if (!paths.length) {
      throw new Error(`Could not map localized route record ${record.pathId}`);
    }

    return paths.map((path) => ({
      path,
      component: record.layout,
      children: [
        {
          path: '',
          // eslint-disable-next-line
          component: () => import(`../pages/${record.page}`), // record.page), // load pag on demand
          meta: {
            requiresAuth: false,
            title: record.title || '',
            description: record.description,
          },
          props: (route) => ({
            ...route.params,
            locale: this.mapLanguageCode(route),
          }),
          // name: record.name,
        },
      ],
      props: (route) => ({
        locale: this.mapLanguageCode(route),
        page: record.pathId,
        params: route.params,
      }),
    }));
  }

  /**
   * Lookup the identifier in the locale files.
   *
   * @param identifier The dot syntax style identifier of the route.
   * @param locale The locale to use for the translation.
   */
  private translate(identifier: string, locale = this.locale): string | null {
    const parts = identifier.split('.');
    let context = links[locale] as { [s: string]: string };

    if (!context) {
      return null;
    }

    for (let i = 0; parts.length > i; i += 1) {
      if (undefined !== context[parts[i]]) {
        context = context[parts[i]] as unknown as { [s: string]: string };
      } else {
        // TODO: fallback language? (if !== fallback, recurse to translate(id, :defaultLocale))
        return null;
      }
    }

    const result = context._ || context as unknown as string;

    return result;
  }

  private getLocalePrefix(locale = this.locale): string {
    return this.translate('locale.prefix', locale) || '';
  }

  private mapLanguageCode(route: RouteLocationNormalized): Locale {
    return localeMapper[route.params.locale as string || 'de'];
  }

  private loadLocales() {
    if (features.languages) {
      features.languages.forEach((l: LanguageCode) => {
        const locale = localeMapper[l];
        links[locale] = availableLinks[locale];
      });
    } else {
      // fallback language
      links['de-DE'] = availableLinks['de-DE'];
    }
  }
}

const localeRouter = new LocaleRouter('de-DE');

export const useLocaleRouter = (): LocaleRouter => localeRouter;
