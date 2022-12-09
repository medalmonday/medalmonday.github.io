<template>
  <q-dialog class="cookie-dialog" ref="dialogRef" @hide="onDialogHide" :persistent="!hasConsent">
    <q-card style="width: 64rem; max-width: 100%;">
      <q-card-section class="row items-center">
        <div class="text-h3">{{ $t('cookies.administration.title') }}</div>
      </q-card-section>

      <q-card-section
        class="q-pt-none"
      >
        <q-list separator>
          <q-item
            v-for="item in categories"
            :key="item.category"
          >
            <q-item-section>
              <div class="text-h4">{{ $t(`cookies.categories.${item.category}`) }}</div>

              <div class="q-py-sm">
                {{ $t(`cookies.administration.text.${item.category}`) }}
              </div>

              <q-expansion-item
                v-if="item.cookies.length"
                :label="$t('cookies.administration.cookies.title')"
                switch-toggle-side
              >
                <q-list dense>
                  <q-item v-for="name in item.cookies" :key="name">
                    <q-item-label>{{ name }}</q-item-label>
                  </q-item>
                </q-list>
              </q-expansion-item>
            </q-item-section>
            <q-item-section side top>
              <q-toggle v-model="item.accepted" :disable="!item.optional">
                <q-tooltip v-if="!item.optional">
                  {{ $t('cookies.administration.tooltip.necessary') }}
                </q-tooltip>
              </q-toggle>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          :label="$t('general.buttons.save')"
          @click="() => onConsent()"
          type="submit"
          color="primary"
          flat
          no-caps
        />
        <q-btn
          :label="$t('cookies.actions.accept')"
          @click="() => onConsent(true)"
          type="submit"
          color="primary"
          no-caps
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { useDialogPluginComponent } from 'quasar';
import { defineComponent, ref } from 'vue';
import { useCookieService } from 'src/services/CookieService';

export default defineComponent({
  name: 'CookieAdminstrationDialog',

  emits: [
    ...useDialogPluginComponent.emits,
  ],

  setup() {
    const cookieService = useCookieService();

    const { dialogRef, onDialogHide, onDialogOK } = useDialogPluginComponent();
    const categories = ref(cookieService.listCategories());
    const hasConsent = ref(cookieService.hasConsent());

    return {
      categories,
      hasConsent,
      onConsent: (accept: boolean | null = null): void => {
        if (null === accept) {
          cookieService.updateConsent(categories.value);
        } else {
          cookieService.updateConsent(accept);
        }
        onDialogOK();
      },
      dialogRef,
      onDialogHide,
    };
  },
});
</script>
