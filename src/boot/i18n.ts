import { QuasarLanguage, useMeta } from 'quasar';
import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import messages from 'src/i18n';
import { LanguageCode, Locale, useLocaleRouter } from 'src/router/LocaleRouter';
import { generateMeta } from 'src/services/metaUtils';
import { setConstants } from 'src/services/utils';

let lang: string;
const localeRouter = useLocaleRouter();

export default boot(({ app, router }) => {
  // add global link property
  app.config.globalProperties.$l = (
    id: string,
    params?: { [id: string]: string },
    locale?: Locale,
  ): string => (
    localeRouter.l(id, params, locale)
  );

  const i18n = createI18n({
    legacy: false,
    locale: 'de-DE',
    messages,
  });
  app.use(i18n);
  setConstants(undefined, undefined, i18n.global);

  router.beforeEach((to) => {
    try {
      const l = to.params.locale as string || 'de';
      if (localeRouter.isLangaugeCodeValid(l) && l !== lang) {
        lang = l;

        localeRouter.setLocale(l as LanguageCode);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // i18n.global.locale = localeRouter.getLocale();
        // eslint-disable-next-line
        (app.config.globalProperties.$i18n as any).locale = localeRouter.getLocale();

        try {
          void import(`quasar/lang/${'de' === lang ? lang : localeRouter.getLocale()}`)
            .then((language: { default: QuasarLanguage }) => {
              app.config.globalProperties.$q.lang.set(language.default);
            });
        } catch (err) {
          // could not load q lang', err
        }
      }

      const { title, description } = (to.meta || {});

      useMeta(generateMeta(title, description));
    } catch (e) {
      // Could not update locale
    }
  });
});
