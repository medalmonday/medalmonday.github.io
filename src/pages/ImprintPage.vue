<template>
  <q-page class="row wrap content-start container imprint-page">
    <title-tile title="imprint.title" />

    <tile clean>
      <div>
        <result-banner
          v-if="!isGerman"
          text="general.mainLanguage.germanOnly"
          class="q-mb-md"
          icon="fa-solid fa-info-circle"
          success
        />
      </div>
    </tile>

    <tile padded>
      <h3 class="text-h3 logo__mm">Medal Monday GmbH</h3>
      <p>An der Ottosäule 16<br>
        85521 Ottobrunn<br>
        Deutschland</p>

      <p><strong class="q-mr-xs">{{ $t('contact.mail') }}:</strong>
        <br class="lt-md" />
        <a-link label="contact.sendMail" @click="() => onSendMail()" />
      </p>

      <p><strong class="q-mr-xs">Vertreten durch die Geschäftsführer:</strong>
        <br class="lt-md" />
        Maik Paulus &amp; Manuel Schächinger</p>

      <p>
        <strong class="q-mr-xs">Verantwortlich gemäß § 18 Abs 2 MStV für die
          Inhalte dieser Webseite sowie für unsere Social Media-Profile auf Facebook,
          Instagram, Twitter &amp; Xing:</strong>
        <br class="lt-md" />
        Maik Paulus &amp; Manuel Schächinger</p>

      <p><strong class="q-mr-xs">Handelsregister:</strong>
        <br class="lt-md" />
        Amtsgericht München, HRB 276981</p>

      <p><strong class="q-mr-xs">USt-IdNr. gem. § 27a UStG:</strong>
        <br class="lt-md" />
        DE354814562</p>

      <p><strong class="q-mr-xs">Online-Streitbeilegung:</strong>
        <br class="lt-md" />
        Die Europäische Kommission stellt eine Plattform
        zur Online-Streitbeilegung (OS) bereit, die Sie unter
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" class="external"
          >ec.europa.eu/consumers/odr</a
        >
        finden. Verbraucher haben die Möglichkeit, diese Plattform für die
        Beilegung ihrer Streitigkeiten zu nutzen.<br>
        Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht
        bereit.
      </p>
    </tile>

    <tile padded>
      <h2 class="text-h2" id="haftung">Haftungs- und Schutzrechtshinweise</h2>
      <p>
        Haftungsausschluss: Die Inhalte dieses Onlineangebotes wurden sorgfältig
        und nach unserem aktuellen Kenntnisstand erstellt, dienen jedoch nur der
        Information und entfalten keine rechtlich bindende Wirkung, sofern es
        sich nicht um gesetzlich verpflichtende Informationen (z.B. das
        Impressum, die Datenschutzerklärung, AGB oder verpflichtende Belehrungen
        von Verbrauchern) handelt. Wir behalten uns vor, die Inhalte vollständig
        oder teilweise zu ändern oder zu löschen, soweit vertragliche
        Verpflichtungen unberührt bleiben. Alle Angebote sind freibleibend und
        unverbindlich.
      </p>
      <p>
        Links auf fremde Webseiten: Die Inhalte fremder Webseiten, auf die wir
        direkt oder indirekt verweisen, liegen außerhalb unseres
        Verantwortungsbereiches und wir machen sie uns nicht zu Eigen. Für alle
        Inhalte und Nachteile, die aus der Nutzung der in den verlinkten
        Webseiten aufrufbaren Informationen entstehen, übernehmen wir keine
        Verantwortung.
      </p>
      <p>
        Urheberrechte und Markenrechte: Alle auf dieser Website dargestellten
        Inhalte, wie Texte, Fotografien, Grafiken, Marken und Warenzeichen sind
        durch die jeweiligen Schutzrechte (Urheberrechte, Markenrechte)
        geschützt. Die Verwendung, Vervielfältigung usw. unterliegen unseren
        Rechten oder den Rechten der jeweiligen Urheber bzw. Rechteinhaber.
      </p>
      <p>
        Hinweise auf Rechtsverstöße: Sollten Sie innerhalb unseres
        Internetauftritts Rechtsverstöße bemerken, bitten wir Sie uns auf diese
        hinzuweisen. Wir werden rechtswidrige Inhalte und Links nach
        Kenntnisnahme unverzüglich entfernen.
      </p>
    </tile>

    <tile v-if="false" padded>
      <h2 class="text-h2" id="bilder">Bildnachweise</h2>
      Bildquellen und Urheberrechtshinweise:
      <p>##bildquellen##</p>
    </tile>

    <tile clean padded>
      <a
        href="https://datenschutz-generator.de/"
        title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
        target="_blank"
        class="external"
        rel="noopener noreferrer nofollow"
        >Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke</a>
    </tile>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ALink from 'src/components/ALink.vue';
import Tile from 'src/components/Tile.vue';
import ResultBanner from 'src/components/fields/ResultBanner.vue';
import TitleTile from 'src/components/tiles/TitleTile.vue';
import { useLocaleRouter } from 'src/router/LocaleRouter';
import { generateMeta } from 'src/services/metaUtils';
import { onSendMail } from 'src/services/utils';
import { useMeta } from 'quasar';

export default defineComponent({
  name: 'ImprintPage',

  components: {
    ALink,
    ResultBanner,
    TitleTile,
    Tile,
  },

  setup() {
    const isGerman = 'de-DE' === useLocaleRouter().getLocale();
    useMeta(generateMeta('imprint.title', 'imprint.description'));

    return {
      isGerman,
      onSendMail,
    };
  },
});
</script>
