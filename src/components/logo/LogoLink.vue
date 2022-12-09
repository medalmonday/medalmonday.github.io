<template>
  <router-link
    :to="$l('home')"
    class="logo items-center"
  >
    <q-icon
      name="svguse:/logo.svg#medal|0 0 200 250"
      :color="dark ? 'white' : 'primary'"
      size="1.9em"
    />
    <span
      :class="`logo__mm text-${(dark ? 'white' : 'dark')} q-ml-sm`"
    >{{ $t('app.title') }}</span>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LogoLink',

  props: {
    dark: Boolean,
  },
});
</script>
