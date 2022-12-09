<template>
  <div
    v-if="1 < locales.length"
    :class="`row col-12 site-footer__locale items-center${inline ? ' site-footer--inline' : ''}`"
  >
    <div class="footer__category text-bold q-mr-sm">{{ $t('general.footer.locale') }}</div>

    <q-icon
      :name="`fa-solid fa-globe-${'de-DE' === locale ? 'europe' : 'americas'}`"
      class="q-mr-sm"
      color="primary"
    />

    <a
      v-for="l in locales"
      :key="l.locale"
      :href="l.locale !== locale ? l.link : null"
      :class="l.locale !== locale ? 'a-link text-primary' : ''"
      flat
      no-caps
      dense
    >
      {{ l.localeName }}
    </a>
  </div>

  <div :class="`row col-12 site-footer__links${inline ? ' site-footer--inline' : ''}`">
    <div class="footer__category text-bold">{{ $t('general.footer.links') }}</div>

    <a-link to="faq" label="faq.shortTitle" />
    <a-link to="about" label="about.title" />
  </div>

  <div :class="`row col-12 site-footer__legal${inline ? ' site-footer--inline' : ''}`">
    <div class="footer__category text-bold">{{ $t('general.footer.legal') }}</div>
    <a-link to="imprint" label="imprint.title" />
    <a-link to="privacy" label="privacy.title" />
    <a
      class="a-link text-primary cursor-pointer"
      @click="openCookieAdministrationDialog"
    >{{ $t('cookies.actions.manage') }}</a>
  </div>

  <div
    v-if="false"
    :class="`row col-12 site-footer__social${inline ? ' site-footer--inline' : ''}`"
  >
    <div class="footer__category text-bold">{{ $t('general.footer.social') }}</div>
    <q-btn
      href="https://www.strava.com/clubs/medalmondayde"
      target="_blank"
      class="social__strava"
      icon="fa-brands fa-strava"
      title="Strava"
      size="sm"
      flat
      dense
      round
    />
    <q-btn
      href="https://www.instagram.com/medalmonday.de"
      target="_blank"
      class="social__instagram"
      icon="fa-brands fa-instagram"
      title="Instagram"
      size="sm"
      flat
      dense
      round
    />
    <q-btn
      href="https://www.twitter.com/medalmondayde"
      target="_blank"
      class="social__twitter"
      icon="fa-brands fa-twitter"
      title="Twitter"
      size="sm"
      flat
      dense
      round
    />
    <q-btn
      href="https://www.facebook.com/medalmonday.de"
      target="_blank"
      class="social__facebook"
      icon="fa-brands fa-facebook"
      title="Facebook"
      size="sm"
      flat
      dense
      round
    />
  </div>

  <div class="site-footer__copyright col-10 col-sm-12 q-mt-sm">
    {{ $t('general.footer.devText') }}<br/>
    <q-icon name="fa-regular fa-copyright" /> {{ new Date().getFullYear() }} Medal Monday GmbH
  </div>
</template>

<script lang="ts">
import {
  PropType,
  defineComponent,
  ref,
  watch,
} from 'vue';
import ALink from 'src/components/ALink.vue';
import features from 'src/features';
import { Locale, useLocaleRouter } from 'src/router/LocaleRouter';
import { openCookieAdministrationDialog } from 'src/services/utils';

export default defineComponent({
  name: 'SiteFooter',

  components: {
    ALink,
  },

  props: {
    locale: String as PropType<Locale>,
    page: String,
    params: Object,
    inline: Boolean,
  },

  setup(props) {
    const localeRouter = useLocaleRouter();

    const locales = ref();
    const updateLocales = () => {
      locales.value = localeRouter.getLocaleSiblings(props.page || 'home', props.params || {});
    };

    updateLocales();
    watch(() => props.page, () => updateLocales());
    watch(() => props.locale, () => updateLocales());

    return {
      features,
      locales,
      openCookieAdministrationDialog,
    };
  },
});
</script>
