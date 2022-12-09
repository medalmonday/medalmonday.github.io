<template>
  <div :class="`tile ${tileClassList} q-pa-sm overflow-hidden`">
    <q-card
      :flat="flat || clean"
      :bordered="flat && !clean"
      :class="getCardClass()"
      :style="style"
    >
      <div v-if="title || titleMd" :class="`row items-center${!padded ? ' q-mx-md q-mt-md' : ''}`">
        <component
          :is="`h${title ? 4 : 3}`"
          :class="`text-h${title ? 4 : 3}`"
        >{{ $t(title || titleMd) }}</component>
      </div>
      <slot />
    </q-card>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

const breakpoints = ['', 'sm', 'md', 'lg'];

export default defineComponent({
  name: 'Tile',

  props: {
    class: String,
    clean: Boolean,
    cols: {
      type: String,
      default: '12',
    },
    flat: {
      type: Boolean,
      default: true,
    },
    noFull: {
      type: Boolean,
    },
    padded: Boolean,
    style: String,
    tileClass: String,
    title: String,
    titleMd: String,
  },

  setup(props) {
    const tileClassList = computed(() => {
      const classlist: string[] = [props.tileClass || ''];
      props.cols.split(',').forEach((size, i) => {
        classlist.push(['col', breakpoints[i], size.trim()].filter((e) => !!e).join('-'));
      });

      if (props.clean) {
        classlist.push('tile--clean');
      }
      if (props.padded) {
        classlist.push('tile--padded');
      }

      return classlist.join(' ');
    });

    return {
      tileClassList,
      getCardClass: () => {
        const classlist = [
          'tile__content',
          props.class || '',
          !props.noFull ? 'full-height' : '',
          props.padded ? 'q-pa-md' : '',
        ];

        if (props.flat && !props.clean) {
          // classlist.push('shadow-1');
        }

        return classlist.join(' ');
      },
    };
  },
});

</script>
