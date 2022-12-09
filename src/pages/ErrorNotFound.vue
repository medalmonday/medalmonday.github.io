<template>
  <q-page>
    <page-error type="notFound" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageError from 'src/components/PageError.vue';

export default defineComponent({
  name: 'ErrorNotFound',

  components: {
    PageError,
  },

  // preFetch({ ssrContext }) {
  //   if (ssrContext) {
  //     ssrContext.res.statusCode = 404;
  //   }
  // },
});
</script>
