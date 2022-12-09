<template>
  <div class="bg-grey-4 text-primary text-center q-px-md q-py-xl">
    <div>
      <div class="text-h3 q-pb-md">
        <q-icon :name="icon" size="lg" />
      </div>
      <h3 class="text-h3 q-pb-sm">
        {{ $t(`errors.${type}.title`) }}
      </h3>

      <div class="text-h4" style="opacity:.4">
        {{ $t(`errors.${type}.text`) }}
      </div>
    </div>
  </div>

  <slot />
</template>

<script lang="ts">
import { useMeta } from 'quasar';
import { generateMeta } from 'src/services/metaUtils';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageError',

  props: {
    icon: {
      type: String,
      default: 'fa-solid fa-route',
    },
    type: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    useMeta(generateMeta(
      `errors.${props.type}.title`,
      `errors.${props.type}.meta.description`,
    ));

    return {};
  },
});
</script>
