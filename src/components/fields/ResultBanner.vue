<template>
  <q-banner :class="getClassList()" rounded>
    <template v-if="!noIcon" v-slot:avatar>
      <q-icon
        :name="getIcon()"
        color="white"
        size="sm"
      />
    </template>
    <slot>{{ $t(text) }}</slot>
  </q-banner>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ResultBanner',

  props: {
    icon: String,
    noIcon: Boolean,
    success: Boolean,
    hint: Boolean,
    text: String,
  },

  setup(props) {
    return {
      getClassList: () => {
        const list = ['q-pa-md'];
        list.push('text-white');
        if (props.hint) {
          list.push('bg-primary');
        } else {
          list.push(props.success ? 'bg-primary' : 'bg-negative');
        }

        return list.join(' ');
      },

      getIcon: () => {
        if (props.icon) {
          return props.icon;
        }

        let icon = 'times-circle';

        if (props.success) {
          icon = 'check-circle';
        } else if (props.hint) {
          icon = 'circle-info';
        }

        return `fa-solid fa-${icon}`;
      },
    };
  },
});
</script>
