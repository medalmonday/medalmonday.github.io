<template>
  <q-tabs
    v-if="!slim"
    v-model="tab"
    align="center"
    indicator-color="accent"
    class="gt-md"
    active-class="text-white"
    :breakpoint="0"
    no-caps
  >
    <div
      v-for="(link, i) in navigation"
      :key="i"
      class="q-mr-sm"
    >
      <q-route-tab
        :to="$l(link.to)"
        :name="link.to"
        clickable
      >
        <q-item-section v-if="link.icon" avatar>
          <q-icon :name="link.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ $t(link.label) }}</q-item-label>
        </q-item-section>
      </q-route-tab>
    </div>
  </q-tabs>

  <q-btn
    :label="$t('contact.title')"
    class="gt-xs"
    :to="$l('contact')"
    color="secondary"
    rel="nofollow"
    text-color="white"
    clickable
    no-caps
  />

  <q-btn class="q-ml-sm lt-lg" flat dense>
    <q-icon
      name="fa-solid fa-bars"
      size="sm"
    />
    <q-menu
      anchor="bottom end"
      self="top right"
      :offset="[0, 8]"
      max-height="80%"
    >
      <q-item class="lt-sm">
        <q-item-section>
          <q-btn
            :label="$t('contact.title')"
            :to="$l('contact')"
            color="secondary"
            text-color="white"
            v-close-popup
            no-caps
          />
        </q-item-section>
      </q-item>

      <q-separator class="lt-sm" inset />

      <div
        v-for="(link, i) in navigation"
        :key="i"
      >
        <q-item
          :to="$l(link.to)"
          :class="!slim ? 'lt-lg' : ''"
          v-close-popup
          clickable
        >
          <q-item-section v-if="link.icon" avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t(link.label) }}</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-menu>
  </q-btn>
</template>
1
<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue';

export default defineComponent({
  name: 'MainNav',

  props: {
    slim: Boolean,
  },

  setup() {
    const tab = ref('');

    return {
      navigation: [
        { to: 'about', label: 'about.title' },
        { to: 'projects', label: 'projects.title' },
        { to: 'services', label: 'services.title' },
      ],
      tab,
    };
  },
});
</script>
