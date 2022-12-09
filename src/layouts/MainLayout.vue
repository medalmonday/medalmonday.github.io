<template>
  <q-layout view="hHh Lpr lff">
    <q-header class="header row items-center" elevated>
      <q-toolbar class="text-white container">
        <logo-link dark />

        <q-space />

        <main-nav />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <site-footer :locale="locale" :page="page" :params="params" />
  </q-layout>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import LogoLink from 'src/components/logo/LogoLink.vue';
import MainNav from 'src/components/MainNav.vue';
import SiteFooter from 'src/components/SiteFooter.vue';
import { Locale } from 'src/router/LocaleRouter';
import { setConstants } from 'src/services/utils';

export default defineComponent({
  name: 'MainLayout',

  components: {
    LogoLink,
    MainNav,
    SiteFooter,
  },

  props: {
    locale: String as PropType<Locale>,
    page: String,
    params: Object,
  },

  setup() {
    const i18n = useI18n();
    const quasar = useQuasar();
    const router = useRouter();
    setConstants(router, quasar, i18n);

    return { };
  },
});
</script>
