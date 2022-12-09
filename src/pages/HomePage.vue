<template>
  <q-page class="row wrap content-start home-page">
    <q-img
      loading="eager"
      fetchpriority="high"
      class="img-home bg-primary"
      :alt="$t('home.title')"
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
              v-if="features.register"
              :label="$t('session.link.gotoRegisterHome')"
              :to="$l('register')"
              color="primary"
              text-color="white"
              class="gt-sm"
              no-caps
            />
            <q-btn
              v-if="features.register"
              :label="$t('session.link.gotoRegister')"
              :to="$l('register')"
              color="primary"
              text-color="white"
              class="lt-md"
              no-caps
            />
          </div>
        </div>
      </div>
    </q-img>

    <div class="col-12 row container mobile-intro">
      <tile class="text-center q-pb-xl q-pt-md" tile-class="lt-md bg-white" padded clean>
        <h3 class="text-h3">{{ $t('home.intro.catchPhrase') }}</h3>
        <p style="font-size:18px" class="q-my-md">{{ $t('home.intro.text.0') }}</p>
        <p>{{ $t('home.intro.text.1') }}</p>

        <q-btn
          v-if="features.register"
          :label="$t('session.link.gotoRegisterHome')"
          :to="$l('register')"
          color="primary"
          text-color="white"
          no-caps
        />
      </tile>

      <div class="col-12 q-py-xl home-teaser">
        <div class="container-md">
          <tile class="text-center" clean>
            <h2 class="text-h2 q-pb-sm">{{ $t('home.teaser.title') }}</h2>

            <p>{{ $t('home.teaser.text.0') }}</p>
          </tile>
        </div>
      </div>
    </div>

    <div v-if="false" class="col-12 row q-py-xl bg-white home-services">
      <h2 class="col-12 q-pb-lg text-h2 text-center">
        {{ $t('home.services.title') }}
      </h2>
      <div class="container row">
        <tile cols="12,6,4" clean padded>
          <h3 class="items-center col-12 text-h3">
            <q-icon name="fa-solid fa-globe" class="q-mr-sm" color="primary" />
            {{ $t('home.services.software.title') }}
          </h3>

          <p class="q-mt-md">{{ $t('home.services.software.text.0') }}</p>
        </tile>
        <tile cols="12,6,4" padded clean>
          <h3 class="items-center col-12 text-h3">
            <q-icon name="fa-solid fa-handshake-simple" class="q-mr-sm" color="primary" />
            {{ $t('home.services.prototyping.title') }}
          </h3>

          <p class="q-mt-md">{{ $t('home.services.prototyping.text.0') }}</p>
        </tile>
        <tile cols="12,6,4" padded clean>
          <h3 class="items-center col-12 text-h3">
            <q-icon name="fa-solid fa-chart-line" class="q-mr-sm" color="primary" />
            {{ $t('home.services.legacy.title') }}
          </h3>

          <p class="q-mt-md">{{ $t('home.services.legacy.text.0') }}</p>
        </tile>
      </div>
    </div>

    <div v-if="false" class="col-12 q-py-xl bg-primary text-white home-contact">
      <div class="container-md">
        <tile class="text-center" padded clean>
          <div class="q-mb-sm text-center">
            <h2 class="text-h2 q-pb-sm">{{ $t('home.contact.title') }}</h2>
          </div>
          <div class="q-my-sm">{{ $t('home.contact.text') }}</div>

          <q-btn
            :label="$t('session.link.gotoContact')"
            :to="$l('contact')"
            color="secondary"
            target="_blank"
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

  // async preFetch({ store }) {
  //   const campaignStore = useCampaignStore(store);
  //   await campaignStore.load();
  // },

  setup() {
    const meta = generateMeta('home.title', 'home.description', true, false);
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
