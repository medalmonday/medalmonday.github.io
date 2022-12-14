import { MetaOptions } from 'quasar/dist/types/meta';
import {
  BreadcrumbList,
  Thing,
  WithContext,
} from 'schema-dts';
import { BASE_URL } from 'src/config';
import { useLocaleRouter } from 'src/router/LocaleRouter';
import { getCurrentUrl, getI18n, isDev } from './utils';

export const setCanonicalMeta = (options: MetaOptions, url?: string) => {
  let href = url || getCurrentUrl();
  if (!href.startsWith('http')) {
    href = `${BASE_URL}${href}`;
  }

  options.link = options.link || {};
  options.link.canonical = {
    rel: 'canonical',
    href,
  };
};

export const addRobotsMeta = (options: MetaOptions, robotsContent: string) => {
  options.meta!.robots = {
    name: 'robots',
    content: robotsContent,
  };
};

export const generateMeta = (
  title?: string,
  description?: string,
  imagePath: string | boolean = true,
  appendBrandname = true,
): MetaOptions => {
  const i18n = getI18n();

  const pageTitle = i18n.t('app.title');
  const metaTitle = title
    ? `${i18n.t(title, title)}${appendBrandname ? ` | ${pageTitle}` : ''}`
    : pageTitle;
  const metaDescription = description ? i18n.t(description, description) : '';
  const cache = Math.floor(new Date('2022-11-13').getTime() / 86400000);
  const url = getCurrentUrl();

  const options: MetaOptions = {
    title: metaTitle,
    meta: {
      ogLocale: {
        property: 'og:locale',
        content: useLocaleRouter().getLocale(),
      },
      ogSiteName: {
        property: 'og:site_name',
        content: i18n.t('app.title'),
      },
      // TODO: ogLocaleAlternate
      ogType: {
        property: 'og:type',
        content: 'website',
      },
      ogTitle: {
        property: 'og:title',
        content: metaTitle,
      },
      description: {
        name: 'description',
        content: metaDescription || i18n.t('app.subtitle'),
      },
      ogDescription: {
        property: 'og:description',
        content: metaDescription || i18n.t('app.subtitle'),
      },
      ogUrl: {
        property: 'og:url',
        content: url,
      },
      twitterSite: {
        name: 'twitter:site',
        content: '@medalmondayde',
      },
      twitterCard: {
        name: 'twitter:card',
        content: imagePath ? 'summary_large_image' : 'summary',
      },
      // facebookId: {
      //   property: 'fb:app_id',
      //   content: '107061215400783',
      // },
    },
  };

  setCanonicalMeta(options, url);

  if (imagePath) {
    let imageUrl = true === imagePath ? '/logo/header-logo.png' : imagePath;
    if (!imageUrl.startsWith('http')) {
      imageUrl = `${BASE_URL}${imageUrl}`;
    }
    options.meta!.ogImage = {
      property: 'og:image',
      content: `${imageUrl}${imageUrl.includes('?') ? '&' : '?'}size=large&_c=${cache}`,
    };
  }

  // block all non-productive versions from indexing
  if (isDev()) {
    addRobotsMeta(options, 'noindex');
  }

  return options;
};

export const addJsonLdMeta = (options: MetaOptions, jsonLd: WithContext<Thing>) => {
  options.script = options.script || {};
  if (!options.script.jsonLd) {
    options.script.jsonLd = {
      type: 'application/ld+json',
      innerHTML: '',
    };
  }
  let content: WithContext<Thing> | WithContext<Thing>[] = options.script.jsonLd.innerHTML
    ? JSON.parse(options.script.jsonLd.innerHTML) : [];
  if (!Array.isArray(content)) {
    content = [content];
  }
  content.push(jsonLd);
  if (1 === content.length) {
    [content] = content;
  }

  options.script.jsonLd.innerHTML = JSON.stringify(content);
};

export const addMetaBreadcrumbs = (
  options: MetaOptions,
  breadcrumbs: { name: string; item?: string }[],
) => {
  const i18n = getI18n();
  const breadcrumbsLd: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: i18n.t(breadcrumb.name),
      item: breadcrumb.item ? `${BASE_URL}${breadcrumb.item}` : undefined,
    })),
  };
  addJsonLdMeta(options, breadcrumbsLd);
};
