<template>
  <q-page class="row wrap content-start products-page">
    <q-img
      loading="eager"
      placeholder-src="https://placeimg.com/640/200/tech"
      fetchpriority="high"
      class="img-home bg-primary"
      :ratio="6"
    >
      <div class="absolute-full flex flex-center">
        <div class="container">
          <div class="text-center q-gutter-md">
            <h1 class="text-h1">{{ $t('products.title') }}</h1>
            <p class="text-subtitle1 q-my-sm">{{ $t('products.subtitle') }}</p>
          </div>
        </div>
      </div>
    </q-img>

    <div class="col-12 q-py-lg bg-white">
      <div class="container">
        <tile clean>
          <h2 class="text-h2">{{ $t('products.challenges.title') }}</h2>

          <p>{{ $t('products.challenges.text.0') }}</p>
        </tile>
      </div>
    </div>

    <div class="col-12 q-py-lg">
      <div class="container">
        <tile title-md="about.mode.title" padded>

          <ul class="q-pl-lg">
            <li>{{ $t('about.mode.list.0') }}</li>
            <li>{{ $t('about.mode.list.1') }}</li>
            <li>{{ $t('about.mode.list.2') }}</li>
            <li>{{ $t('about.mode.list.3') }}</li>
          </ul>
        </tile>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useMeta } from 'quasar';
import { defineComponent } from 'vue';
import Tile from 'src/components/Tile.vue';
import { generateMeta } from 'src/services/metaUtils';

export default defineComponent({
  name: 'ProductsPage',

  components: {
    Tile,
  },

  setup() {
    useMeta(generateMeta('products.title', 'products.description'));
  },
});
</script>
