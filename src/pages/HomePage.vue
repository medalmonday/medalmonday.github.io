<template>
  <q-page class="row wrap content-start home-page">
    <q-img
      loading="eager"
      placeholder-src="https://placeimg.com/1920/480/tech"
      fetchpriority="high"
      class="bg-primary"
      :ratio="6"
      :alt="$t('app.title')"
    >
      <div class="absolute-full flex flex-center">
        <div class="container-sm">
          <hero-logo class="q-pb-xl" dark />
          <div v-if="false" class="text-center q-gutter-md">
            <div class="text-body1 gt-sm q-mt-xl q-mb-md">
              <div class="text-h4">{{ $t('home.intro.catchPhrase') }}</div>
              <p style="font-size:18px" class="q-my-md">{{ $t('home.intro.text.0') }}</p>

              {{ $t('home.intro.text.1') }}
            </div>
            <q-btn
              :label="$t('session.link.gotoContact')"
              :to="$l('contact')"
              color="primary"
              text-color="white"
              class="gt-sm"
              no-caps
            />
          </div>
        </div>
      </div>
    </q-img>

    <div v-if="false" class="col-12 row container mobile-intro">
      <tile class="text-center q-pb-xl q-pt-md" tile-class="lt-md bg-white" padded clean>
        <h3 class="text-h3">{{ $t('home.intro.catchPhrase') }}</h3>
        <p style="font-size:18px" class="q-my-md">{{ $t('home.intro.text.0') }}</p>
        <p>{{ $t('home.intro.text.1') }}</p>

        <q-btn
          :label="$t('session.link.gotoContact')"
          :to="$l('contact')"
          color="primary"
          text-color="white"
          no-caps
        />
      </tile>
    </div>

    <div class="col-12 q-py-xl home-services">
      <div class="container-md row">
        <tile class="text-center" clean>
          <h2 class="text-h2 q-pb-sm">{{ $t('home.services.title') }}</h2>

          <p>{{ $t('home.services.text.0') }}</p>
        </tile>
      </div>

      <div class="container row">
        <div class="row col-12 q-py-lg">
          <tile cols="12,12,8" clean>
            <h3 class="text-h2 q-pb-md">{{ $t('products.title') }}</h3>

            <p>{{ $t('home.services.products.text.0') }}</p>

            <q-btn
              :to="$l('products')"
              :label="$t('home.services.products.link')"
              class="q-mt-md"
              icon-right="fa-solid fa-arrow-right"
              color="primary"
              no-caps
            />
          </tile>
          <tile cols="12,12,4" clean>
            <q-img src="https://placeimg.com/640/480/tech" :ratio="16/9" />
          </tile>
        </div>

        <div class="row col-12 q-py-lg">
          <tile cols="12,12,4" clean>
            <q-img src="https://placeimg.com/640/480/tech" :ratio="16/9" />
          </tile>
          <tile cols="12,12,8" clean>
            <h3 class="text-h2 q-pb-md">{{ $t('legacy.title') }}</h3>

            <p>{{ $t('home.services.legacy.text.0') }}</p>

            <q-btn
              :to="$l('legacy')"
              :label="$t('home.services.legacy.link')"
              class="q-mt-md"
              icon-right="fa-solid fa-arrow-right"
              color="primary"
              no-caps
            />
          </tile>
        </div>

        <div class="row col-12 q-py-lg">
          <tile cols="12,12,8" clean>
            <h3 class="text-h2 q-pb-md">{{ $t('prototyping.title') }}</h3>

            <p>{{ $t('home.services.prototyping.text.0') }}</p>

            <q-btn
              :to="$l('prototyping')"
              :label="$t('home.services.prototyping.link')"
              class="q-mt-md"
              icon-right="fa-solid fa-arrow-right"
              color="primary"
              no-caps
            />
          </tile>
          <tile cols="12,12,4" clean>
            <q-img src="https://placeimg.com/640/480/tech" :ratio="16/9" />
          </tile>
        </div>
      </div>
    </div>

    <div class="col-12 q-py-xl bg-primary text-white home-contact">
      <div class="container-md">
        <tile class="text-center" padded clean>
          <div class="q-mb-sm text-center">
            <h2 class="text-h2 q-pb-sm">{{ $t('home.contact.title') }}</h2>
          </div>
          <div class="q-my-sm">{{ $t('home.contact.text.0') }}</div>

          <q-btn
            :label="$t('general.contact.link')"
            :to="$l('contact')"
            color="secondary"
            text-color="white"
            class="q-mt-md"
            no-caps
          />
        </tile>
      </div>
    </div>

    <div v-if="features.testimonials" class="col-12 row q-py-xl home-testimonials">
      <h2 class="col-12 q-pb-lg text-h2 text-center text-primary">
        {{ $t('home.ratings.title') }}
      </h2>
      <div class="container row">
        <tile
          v-for="i in [0,1,2]"
          :key="i"
          cols="12,6,4"
          clean
          padded
        >
          <p class="q-mt-md cite">
            <span class="quote">"</span>{{
              $t(`home.ratings.content[${i}].text`)
            }}<span class="quote">"</span>
          </p>
          <strong class="q-mt-sm q-ml-sm text-primary">
            &ndash; {{ $t(`home.ratings.content[${i}].name`) }}
          </strong>
        </tile>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useMeta } from 'quasar';
import { defineComponent } from 'vue';
import HeroLogo from 'src/components/logo/HeroLogo.vue';
import Tile from 'src/components/Tile.vue';
import { BASE_URL } from 'src/config';
import features from 'src/features';
import { addJsonLdMeta, generateMeta } from 'src/services/metaUtils';

export default defineComponent({
  name: 'HomePage',

  components: {
    HeroLogo,
    Tile,
  },

  setup() {
    const meta = generateMeta('app.title', 'home.description', true, false);
    addJsonLdMeta(meta, {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      url: BASE_URL,
      logo: `${BASE_URL}/icons/android-chrome-256x256.png`,
    });
    useMeta(() => meta);

    return {
      features,
    };
  },
});
</script>
