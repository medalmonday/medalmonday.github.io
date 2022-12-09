<template>
  <tile class="title-tile" clean>
    <slot>
      <h1 v-if="!!title" :class="`text-h1 ${!subtitle ? 'q-pt-lg q-pb-md' : 'q-pt-sm'}`">
        {{ $t(title) }}
      </h1>
      <q-skeleton
        v-if="!title"
        :class="!subtitle ? 'q-mt-lg q-mb-md' : 'q-mt-sm'"
        :height="$q.screen.gt.sm ? '3.1rem' : '2rem'"
        width="50%"
      />
      <div v-if="title && subtitle" class="text-subtitle1 q-pb-xs">{{ $t(subtitle) }}</div>
    </slot>
  </tile>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tile from 'src/components/Tile.vue';

export default defineComponent({
  name: 'TitleTile',

  components: {
    Tile,
  },

  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: String,
  },
});
</script>
