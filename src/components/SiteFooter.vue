<template>
  <div class="site-footer bg-grey-3 text-dark q-py-sm">
    <div class="container row">
      <tile class="row" clean>
        <footer-content :locale="locale" :page="page" :params="params" />
      </tile>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import FooterContent from 'src/components/FooterContent.vue';
import Tile from 'src/components/Tile.vue';
import { Locale } from 'src/router/LocaleRouter';

export default defineComponent({
  name: 'SiteFooter',

  components: {
    FooterContent,
    Tile,
  },

  props: {
    locale: String as PropType<Locale>,
    page: String,
    params: Object,
  },

  setup() {
    const route = useRoute();
    const screenshot = undefined !== route.query.screenshot;

    return {
      screenshot,
    };
  },
});
</script>
