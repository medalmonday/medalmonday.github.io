<template>
  <q-page class="row wrap content-start legacy-page">
    <q-img
      loading="eager"
      placeholder-src="https://placeimg.com/1920/480/tech"
      fetchpriority="high"
      class="img-home bg-primary"
      :ratio="6"
    >
      <div class="absolute-full flex flex-center">
        <div class="container">
          <div class="text-center q-gutter-md">
            <h1 class="text-h1">{{ $t('legacy.title') }}</h1>
            <p class="text-subtitle1 q-my-sm">{{ $t('legacy.subtitle') }}</p>
          </div>
        </div>
      </div>
    </q-img>

    <div class="col-12 q-py-lg bg-white">
      <div class="container">
        <tile clean>
          <h2 class="text-h2">{{ $t('legacy.challenges.title') }}</h2>

          <ul class="q-pl-lg">
            <li>{{ $t('legacy.challenges.list.0') }}</li>
            <li>{{ $t('legacy.challenges.list.1') }}</li>
            <li>{{ $t('legacy.challenges.list.2') }}</li>
            <li>{{ $t('legacy.challenges.list.3') }}</li>
            <li>{{ $t('legacy.challenges.list.4') }}</li>
            <li>{{ $t('legacy.challenges.list.5') }}</li>
          </ul>
        </tile>
      </div>
    </div>

    <div class="col-12 q-py-lg">
      <div class="container">
        <tile clean>
          <h2 class="text-h2">{{ $t('legacy.motivation.title') }}</h2>

          <ul class="q-pl-lg">
            <li>{{ $t('legacy.motivation.list.0') }}</li>
            <li>{{ $t('legacy.motivation.list.1') }}</li>
            <li>{{ $t('legacy.motivation.list.2') }}</li>
            <li>{{ $t('legacy.motivation.list.3') }}</li>
            <li>{{ $t('legacy.motivation.list.4') }}</li>
            <li>{{ $t('legacy.motivation.list.5') }}</li>
          </ul>
        </tile>
      </div>
    </div>

    <div class="col-12 q-py-lg bg-white">
      <div class="container">
        <tile clean>
          <h2 class="text-h2">{{ $t('legacy.mode.title') }}</h2>

          <ul class="q-pl-lg">
            <li>{{ $t('legacy.mode.list.0') }}</li>
            <li>{{ $t('legacy.mode.list.1') }}</li>
            <li>{{ $t('legacy.mode.list.2') }}</li>
            <li>{{ $t('legacy.mode.list.3') }}</li>
            <li>{{ $t('legacy.mode.list.4') }}</li>
          </ul>
        </tile>
      </div>
    </div>

    <div class="col-12 q-py-lg bg-primary text-white">
      <div class="container">
        <tile clean>
          <h2 class="text-h2">{{ $t('legacy.result.title') }}</h2>

          <ul class="q-pl-lg">
            <li>{{ $t('legacy.result.list.0') }}</li>
            <li>{{ $t('legacy.result.list.1') }}</li>
            <li>{{ $t('legacy.result.list.2') }}</li>
            <li>{{ $t('legacy.result.list.3') }}</li>
            <li>{{ $t('legacy.result.list.4') }}</li>
          </ul>
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
  name: 'LegacyPage',

  components: {
    Tile,
  },

  setup() {
    useMeta(generateMeta('legacy.title', 'legacy.description'));
  },
});
</script>
