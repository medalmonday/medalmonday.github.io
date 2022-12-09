<template>
  <div class="row text-center justify-center hero-logo">
    <q-icon
      name="svguse:/logo.svg#medal|0 0 200 250"
      class="hero-logo__icon logo-icon"
      :color="dark ? 'white' : 'primary'"
    />
    <span class="hero-logo__text">
      <h1 class="logo-text text-center logo__mm">Medal Monday</h1>
      <span class="logo-slogan text-center">{{ $t('app.subtitle') }}</span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroLogo',

  props: {
    dark: Boolean,
  },

  setup() {
    return {
      logoMode: ('undefined' !== typeof window && window.location.search.includes('full'))
        ? 'full' : 'outline',
    };
  },
});
</script>
