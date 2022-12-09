<template>
  <router-link
    :to="(to && $l(to)) || ''"
    :class="`a-link text-${color}`"
  >
    {{ $t(label) }}
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ALink',

  props: {
    color: {
      type: String,
      default: 'primary',
    },
    label: {
      type: String,
      required: true,
    },
    to: String,
  },
});
</script>
