import { DialogChainObject, QVueGlobals } from 'quasar';
import { Composer } from 'vue-i18n';
import { Router, useRoute } from 'vue-router';
import CookieAdministrationDialog from 'src/components/cookies/CookieAdministrationDialog.vue';
import { BASE_URL } from 'src/config';
import { useLocaleRouter } from 'src/router/LocaleRouter';

let quasar: QVueGlobals | null = null;
let router: Router | null = null;
let i18n: unknown | null = null;

export const setConstants = (r?: Router, q?: QVueGlobals, i?: unknown): void => {
  if (r) {
    router = r;
  }
  if (q) {
    quasar = q;
  }
  if (i) {
    i18n = i;
  }
};

export const openCookieAdministrationDialog = (): DialogChainObject | false => {
  if (!quasar) {
    return false;
  }

  return quasar.dialog({
    component: CookieAdministrationDialog,
    componentProps: {},
  });
};

export const isDev = () => 'production' !== process.env.NODE_ENV;

export const redirect = (link: string, replace = false): void => {
  if (router) {
    if (!replace) {
      void router.push(link);
    } else {
      void router.replace(link);
    }
  }
};

export const onSendMail = (address = 'hello') => {
  if ('undefined' !== typeof window) {
    const domain = 'medalmonday.de';
    const link = `mailto:${address}@${domain}`;

    window.open(link);
  }
};

export const formatPrice = (price: number): string => {
  const localeRouter = useLocaleRouter();
  let priceStr = price.toFixed(2);

  if ('de-DE' === localeRouter.getLocale()) {
    priceStr = priceStr.replace('.', ',');
  }

  return priceStr;
};

export const displayNotification = (
  success: boolean,
  message = 'general.save',
  isI18n = true,
  group: string | false = false,
): void => {
  if (!quasar || !i18n) {
    return;
  }

  quasar.notify({
    type: success ? 'positive' : 'negative',
    group: group || undefined,
    message: isI18n
      ? (i18n as Composer).t(
        `${message}.${success ? 'successful' : 'failed'}`,
        (i18n as Composer).t(message),
      )
      : message,
    icon: success ? 'fa-regular fa-check-circle' : 'fa-regular fa-times-circle',
    // color: success ? 'primary' : 'negative',
    position: 'top',
    timeout: 3000,
  });
};

export const getCurrentUrl = () => {
  const route = useRoute();
  let path = route?.path || '';
  if ('undefined' !== typeof window) {
    path = window.location.pathname;
  }

  return `${BASE_URL}${path}`;
};

export const getI18n = () => i18n as Composer;

export const addDevLog = () => {
  if (!process.env.SERVER) {
    // eslint-disable-next-line no-console
    console.log(
      '%cMedal Monday',
      'color:#fff;background:#2e5d4e;border:2rem solid #2e5d4e;border-bottom:none;border-top:none;',
    );
  }
};
