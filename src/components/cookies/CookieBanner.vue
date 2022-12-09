<template>
  <q-slide-transition>
  <q-page-sticky
    v-show="displayBanner"
    position="bottom"
    :offset="[8, 8]"
    style="z-index:5000"
    expand
  >
    <q-banner
      class="cookie-banner bg-primary text-white"
      style="border:1px solid #fff;"
      rounded
    >
      <h3 class="text-h3 q-pb-sm">
        <q-icon name="fa-solid fa-cookie-bite" color="white" class="q-mr-sm" />
        {{ $t('cookies.banner.title') }}
      </h3>

      <div class="q-mb-md">
        {{ $t('cookies.banner.text') }}
      </div>

      <template v-slot:action>
        <div class="col-12 col-md-auto legal">
          <q-btn
            :to="$l('imprint')"
            :label="$t('imprint.title')"
            dense
            flat
            no-caps
          />
          <q-btn
            :to="$l('privacy')"
            :label="$t('privacy.title')"
            dense
            flat
            no-caps
          />
          <q-btn
            @click="openAdministration"
            :label="$t('cookies.actions.manage')"
            class="lt-sm"
            dense
            flat
            no-caps
          />
        </div>

        <q-space />

        <q-btn
          :label="$t('cookies.actions.manage')"
          @click="openAdministration"
          color="white"
          class="gt-xs"
          flat
          no-caps
        />
        <q-btn
          :label="$t('cookies.actions.deny')"
          @click="() => onConsent(false)"
          color="white"
          outline
          no-caps
        />
        <q-btn
          :label="$t('cookies.actions.accept')"
          @click="() => onConsent(true)"
          color="white"
          text-color="primary"
          no-caps
        />
      </template>
    </q-banner>
  </q-page-sticky>
  </q-slide-transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useCookieService } from 'src/services/CookieService';
import { openCookieAdministrationDialog } from 'src/services/utils';

export default defineComponent({
  name: 'CookieBanner',

  setup() {
    const cookieService = useCookieService();
    const consent = ref<boolean>();
    const displayBanner = ref(false);
    let timeoutTriggered = false;

    const updateData = () => {
      consent.value = cookieService.hasConsent();
      if (timeoutTriggered) {
        displayBanner.value = false === consent.value;
      }
    };

    updateData();

    setTimeout(() => {
      displayBanner.value = false === consent.value;
      timeoutTriggered = true;
    }, 500);

    return {
      consent,
      displayBanner,
      onConsent: (accept = true) => {
        cookieService.updateConsent(accept);
        updateData();
      },
      openAdministration: () => {
        const dialog = openCookieAdministrationDialog();
        if (dialog) {
          dialog.onOk(() => {
            updateData();
          });
        }
      },
    };
  },
});
</script>
