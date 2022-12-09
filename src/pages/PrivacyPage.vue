<template>
  <q-page class="row wrap content-start container privacy-page">
    <title-tile title="privacy.title" subtitle="Wirksam ab: 04. Juli 2022" />

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
      <h2 class="text-h2" id="einleitung">Einleitung</h2>
      <p>
        Mit der folgenden Datenschutzerklärung möchten wir Sie darüber
        aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch
        kurz als "Daten“ bezeichnet) wir zu welchen Zwecken und in welchem
        Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns
        durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen
        der Erbringung unserer Leistungen als auch insbesondere auf unseren
        Webseiten, in mobilen Applikationen sowie innerhalb externer
        Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend
        zusammenfassend bezeichnet als "Onlineangebot“).
      </p>
      <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
    </tile>

    <tile padded>
      <h2 class="text-h2">Inhaltsübersicht</h2>
      <ul class="index">
        <li>
          <a class="index-link" :href="`${$l('privacy')}#einleitung`"
            >Einleitung</a>
        </li>
        <li>
          <a class="index-link" :href="`${$l('privacy')}#verantwortlicher`"
            >Verantwortlicher</a>
        </li>
        <li>
          <a class="index-link" :href="`${$l('privacy')}#uebersicht`"
            >Übersicht der Verarbeitungen</a>
        </li>
        <li>
          <a class="index-link" :href="`${$l('privacy')}#grundlagen`"
            >Maßgebliche Rechtsgrundlagen</a>
        </li>
        <li>
          <a class="index-link" :href="`${$l('privacy')}#sicherheitsmassnahmen`"
            >Sicherheitsmaßnahmen</a>
        </li>
        <li>
          <a class="index-link" :href="`${$l('privacy')}#personenbezogene-daten`"
            >Übermittlung von personenbezogenen Daten</a>
        </li>
        <li>
          <a class="index-link" :href="`${$l('privacy')}#datenverarbeitung`"
            >Datenverarbeitung in Drittländern</a>
        </li>
        <li>
          <a class="index-link" :href="`${$l('privacy')}#datenloeschung`"
            >Löschung von Daten</a>
        </li>
        <li>
          <a class="index-link" :href="`${$l('privacy')}#cookies`"
            >Einsatz von Cookies</a>
        </li>
        <li>
          <a class="index-link" :href="`${$l('privacy')}#leistungen`"
            >Geschäftliche Leistungen</a>
        </li>
        <li>
          <a class="index-link" :href="`${$l('privacy')}#hosting`"
            >Bereitstellung des Onlineangebotes und Webhosting</a>
        </li>
        <li>
          <a class="index-link" :href="`${$l('privacy')}#kontakt`"
            >Kontakt- und Anfragenverwaltung</a>
        </li>
        <li>
          <a class="index-link" :href="`${$l('privacy')}#newsletter`"
            >Newsletter und elektronische Benachrichtigungen</a>
        </li>
        <li>
          <a class="index-link" :href="`${$l('privacy')}#werbung`"
            >Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon</a>
        </li>
        <li>
          <a class="index-link" :href="`${$l('privacy')}#analyse`"
            >Webanalyse, Monitoring und Optimierung</a>
        </li>
        <li>
          <a class="index-link" :href="`${$l('privacy')}#aenderungen`"
            >Änderung und Aktualisierung der Datenschutzerklärung</a>
        </li>
        <li>
          <a class="index-link" :href="`${$l('privacy')}#rechte`"
            >Rechte der betroffenen Personen</a>
        </li>
        <li>
          <a class="index-link" :href="`${$l('privacy')}#definitionen`"
            >Begriffsdefinitionen</a>
        </li>
      </ul>
    </tile>

    <tile padded>
      <h2 class="text-h2" id="verantwortlicher">Verantwortlicher</h2>
      <p><strong>Medal Monday GmbH</strong><br>
        An der Ottosäule 16<br>
        85521 Ottobrunn<br>
        Deutschland</p>

      <p><strong>Vertreten durch die Geschäftsführer:</strong>
        Maik Paulus &amp; Manuel Schächinger</p>

      <p><strong>{{ $t('contact.mail') }}</strong>
        <a-link
          label="contact.sendMail"
          class="q-ml-sm"
          @click="() => onSendMail()"
        />
      </p>

      <p>
        <a-link to="imprint" label="imprint.title" />
      </p>
    </tile>

    <tile padded>
      <h2 class="text-h2" id="uebersicht">Übersicht der Verarbeitungen</h2>
      <p>
        Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und
        die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen
        Personen.
      </p>

      <h3 class="text-h3">Arten der verarbeiteten Daten</h3>
      <ul>
        <li>Bestandsdaten.</li>
        <li>Zahlungsdaten.</li>
        <li>Kontaktdaten.</li>
        <li>Inhaltsdaten.</li>
        <li>Vertragsdaten.</li>
        <li>Nutzungsdaten.</li>
        <li>Meta-/Kommunikationsdaten.</li>
      </ul>

      <h3 class="text-h3">Kategorien betroffener Personen</h3>
      <ul>
        <li>Kunden.</li>
        <li>Interessenten.</li>
        <li>Kommunikationspartner.</li>
        <li>Nutzer.</li>
        <li>Geschäfts- und Vertragspartner.</li>
      </ul>

      <h3 class="text-h3">Zwecke der Verarbeitung</h3>
      <ul>
        <li>Erbringung vertraglicher Leistungen und Kundenservice.</li>
        <li>Kontaktanfragen und Kommunikation.</li>
        <li>Sicherheitsmaßnahmen.</li>
        <li>Direktmarketing.</li>
        <li>Reichweitenmessung.</li>
        <li>Büro- und Organisationsverfahren.</li>
        <li>Konversionsmessung.</li>
        <li>Verwaltung und Beantwortung von Anfragen.</li>
        <li>Profile mit nutzerbezogenen Informationen.</li>
        <li>
          Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
        </li>
      </ul>

      <h3 class="text-h3" id="grundlagen">Maßgebliche Rechtsgrundlagen</h3>
      <p>
        Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO,
        auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie
        zur Kenntnis, dass neben den Regelungen der DSGVO nationale
        Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten
        können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen
        maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
      </p>
      <ul>
        <li>
          <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO)</strong> - Die
          betroffene Person hat ihre Einwilligung in die Verarbeitung der sie
          betreffenden personenbezogenen Daten für einen spezifischen Zweck oder
          mehrere bestimmte Zwecke gegeben.
        </li>
        <li>
          <strong
            >Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1
            lit. b. DSGVO)</strong
          >
          - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
          Vertragspartei die betroffene Person ist, oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
          betroffenen Person erfolgen.
        </li>
        <li>
          <strong
            >Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO)</strong
          >
          - Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung
          erforderlich, der der Verantwortliche unterliegt.
        </li>
        <li>
          <strong
            >Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)</strong
          >
          - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des
          Verantwortlichen oder eines Dritten erforderlich, sofern nicht die
          Interessen oder Grundrechte und Grundfreiheiten der betroffenen
          Person, die den Schutz personenbezogener Daten erfordern, überwiegen.
        </li>
      </ul>
      <p>
        Zusätzlich zu den Datenschutzregelungen der Datenschutz-Grundverordnung
        gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu
        gehört insbesondere das Gesetz zum Schutz vor Missbrauch
        personenbezogener Daten bei der Datenverarbeitung
        (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere
        Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum
        Widerspruchsrecht, zur Verarbeitung besonderer Kategorien
        personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur
        Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall
        einschließlich Profiling. Des Weiteren regelt es die Datenverarbeitung
        für Zwecke des Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im
        Hinblick auf die Begründung, Durchführung oder Beendigung von
        Beschäftigungsverhältnissen sowie die Einwilligung von Beschäftigten.
        Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur
        Anwendung gelangen.
      </p>
    </tile>

    <tile padded>
      <h2 class="text-h2" id="sicherheitsmassnahmen">Sicherheitsmaßnahmen</h2>
      <p>
        Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
        Berücksichtigung des Stands der Technik, der Implementierungskosten und
        der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie
        der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der
        Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete
        technische und organisatorische Maßnahmen, um ein dem Risiko
        angemessenes Schutzniveau zu gewährleisten.
      </p>
      <p>
        Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit,
        Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen
        und elektronischen Zugangs zu den Daten als auch des sie betreffenden
        Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit
        und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die
        eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und
        Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner
        berücksichtigen wir den Schutz personenbezogener Daten bereits bei der
        Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren
        entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und
        durch datenschutzfreundliche Voreinstellungen.
      </p>
      <p>
        SSL-Verschlüsselung (https): Um Ihre via unserem Online-Angebot
        übermittelten Daten zu schützen, nutzen wir eine SSL-Verschlüsselung.
        Sie erkennen derart verschlüsselte Verbindungen an dem Präfix https://
        in der Adresszeile Ihres Browsers.
      </p>
    </tile>

    <tile padded>
    <h2 class="text-h2" id="personenbezogene-daten"
      >Übermittlung von personenbezogenen Daten</h2>
    <p>
      Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor,
      dass die Daten an andere Stellen, Unternehmen, rechtlich selbstständige
      Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber
      offengelegt werden. Zu den Empfängern dieser Daten können z.B. mit
      IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und
      Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen
      Fall beachten wir die gesetzlichen Vorgaben und schließen insbesondere
      entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten
      dienen, mit den Empfängern Ihrer Daten ab.
    </p>
    </tile>

    <tile padded>
    <h2 class="text-h2" id="datenverarbeitung"
      >Datenverarbeitung in Drittländern</h2>
    <p>
      Sofern wir Daten in einem Drittland (d.h., außerhalb der Europäischen
      Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die
      Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder der
      Offenlegung bzw. Übermittlung von Daten an andere Personen, Stellen oder
      Unternehmen stattfindet, erfolgt dies nur im Einklang mit den gesetzlichen
      Vorgaben.
    </p>
    <p>
      Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich oder gesetzlich
      erforderlicher Übermittlung verarbeiten oder lassen wir die Daten nur in
      Drittländern mit einem anerkannten Datenschutzniveau, vertraglichen
      Verpflichtung durch sogenannte Standardschutzklauseln der EU-Kommission,
      beim Vorliegen von Zertifizierungen oder verbindlicher internen
      Datenschutzvorschriften verarbeiten (Art. 44 bis 49 DSGVO,
      Informationsseite der EU-Kommission:
      <a
        href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de"
        target="_blank" class="external"
        >https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de</a
      >).
    </p>
    </tile>

    <tile padded>
    <h2 class="text-h2" id="datenloeschung">Löschung von Daten</h2>
    <p>
      Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen
      Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen
      widerrufen werden oder sonstige Erlaubnisse entfallen (z.B. wenn der Zweck
      der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht
      erforderlich sind).
    </p>
    <p>
      Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich
      zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese
      Zwecke beschränkt. D.h., die Daten werden gesperrt und nicht für andere
      Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder
      steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung
      zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder
      zum Schutz der Rechte einer anderen natürlichen oder juristischen Person
      erforderlich ist.
    </p>
    <p>
      Unsere Datenschutzhinweise können ferner weitere Angaben zu der
      Aufbewahrung und Löschung von Daten beinhalten, die für die jeweiligen
      Verarbeitungen vorrangig gelten.
    </p>
    </tile>

    <tile padded>
    <h2 class="text-h2" id="cookies">Einsatz von Cookies</h2>
    <p>
      Cookies sind kleine Textdateien, bzw. sonstige Speichervermerke, die
      Informationen auf Endgeräten speichern und Informationen aus den
      Endgeräten auslesen. Z.B. um den Login-Status in einem Nutzerkonto, einen
      Warenkorbinhalt in einem E-Shop, die aufgerufenen Inhalte oder verwendete
      Funktionen eines Onlineangebotes speichern. Cookies können ferner zu
      unterschiedlichen Zwecken eingesetzt werden, z.B. zu Zwecken der
      Funktionsfähigkeit, Sicherheit und Komfort von Onlineangeboten sowie der
      Erstellung von Analysen der Besucherströme.
    </p>
    <p>
      <strong>Hinweise zur Einwilligung: </strong>Wir setzen Cookies im Einklang
      mit den gesetzlichen Vorschriften ein. Daher holen wir von den Nutzern
      eine vorhergehende Einwilligung ein, außer wenn diese gesetzlich nicht
      gefordert ist. Eine Einwilligung ist insbesondere nicht notwendig, wenn
      das Speichern und das Auslesen der Informationen, also auch von Cookies,
      unbedingt erforderlich sind, um dem den Nutzern einen von ihnen
      ausdrücklich gewünschten Telemediendienst (also unser Onlineangebot) zur
      Verfügung zu stellen. Die widerrufliche Einwilligung wird gegenüber den
      Nutzern deutlich kommuniziert und enthält die Informationen zu der
      jeweiligen Cookie-Nutzung.
    </p>
    <p>
      <strong>Hinweise zu datenschutzrechtlichen Rechtsgrundlagen: </strong>Auf
      welcher datenschutzrechtlichen Rechtsgrundlage wir die personenbezogenen
      Daten der Nutzer mit Hilfe von Cookies verarbeiten, hängt davon ab, ob wir
      Nutzer um eine Einwilligung bitten. Falls die Nutzer einwilligen, ist die
      Rechtsgrundlage der Verarbeitung Ihrer Daten die erklärte Einwilligung.
      Andernfalls werden die mithilfe von Cookies verarbeiteten Daten auf
      Grundlage unserer berechtigten Interessen (z.B. an einem
      betriebswirtschaftlichen Betrieb unseres Onlineangebotes und Verbesserung
      seiner Nutzbarkeit) verarbeitet oder, wenn dies im Rahmen der Erfüllung
      unserer vertraglichen Pflichten erfolgt, wenn der Einsatz von Cookies
      erforderlich ist, um unsere vertraglichen Verpflichtungen zu erfüllen. Zu
      welchen Zwecken die Cookies von uns verarbeitet werden, darüber klären wir
      im Laufe dieser Datenschutzerklärung oder im Rahmen von unseren
      Einwilligungs- und Verarbeitungsprozessen auf.
    </p>
    <p>
      <strong>Speicherdauer: </strong>Im Hinblick auf die Speicherdauer werden
      die folgenden Arten von Cookies unterschieden:
    </p>
    <ul>
      <li>
        <strong
          >Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):</strong
        > Temporäre Cookies werden spätestens gelöscht, nachdem ein Nutzer ein
        Online-Angebot verlassen und sein Endgerät (z.B. Browser oder mobile
        Applikation) geschlossen hat.
      </li>
      <li>
        <strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch
        nach dem Schließen des Endgerätes gespeichert. So können beispielsweise
        der Login-Status gespeichert oder bevorzugte Inhalte direkt angezeigt
        werden, wenn der Nutzer eine Website erneut besucht. Ebenso können die
        mit Hilfe von Cookies erhobenen Daten der Nutzer zur Reichweitenmessung
        verwendet werden. Sofern wir Nutzern keine expliziten Angaben zur Art
        und Speicherdauer von Cookies mitteilen (z. B. im Rahmen der Einholung
        der Einwilligung), sollten Nutzer davon ausgehen, dass Cookies permanent
        sind und die Speicherdauer bis zu zwei Jahre betragen kann.
      </li>
    </ul>
    <p>
      <strong
        >Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out): </strong
      >Nutzer können die von ihnen abgegebenen Einwilligungen jederzeit
      Widerrufen und zudem einen Widerspruch gegen die Verarbeitung
      entsprechend den gesetzlichen Vorgaben im Art. 21 DSGVO einlegen (weitere
      Hinweise zum Widerspruch erfolgen im Rahmen dieser Datenschutzerklärung).
      Nutzer können Ihren Widerspruch auch mittels der Einstellungen Ihres
      Browsers erklären.
    </p>
    <p>
      <strong
        >Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
        Diensten:</strong
      >
    </p>
    <ul class="m-elements">
      <li>
        <strong
          >Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung: </strong
        >Wir setzen ein Verfahren zum Cookie-Einwilligungs-Management ein, in
        dessen Rahmen die Einwilligungen der Nutzer in den Einsatz von Cookies,
        bzw. der im Rahmen des Cookie-Einwilligungs-Management-Verfahrens
        genannten Verarbeitungen und Anbieter eingeholt sowie von den Nutzern
        verwaltet und widerrufen werden können. Hierbei wird die
        Einwilligungserklärung gespeichert, um deren Abfrage nicht erneut
        wiederholen zu müssen und die Einwilligung entsprechend der gesetzlichen
        Verpflichtung nachweisen zu können. Die Speicherung kann serverseitig
        und/oder in einem Cookie (sogenanntes Opt-In-Cookie, bzw. mithilfe
        vergleichbarer Technologien) erfolgen, um die Einwilligung einem Nutzer,
        bzw. dessen Gerät zuordnen zu können. Vorbehaltlich individueller
        Angaben zu den Anbietern von Cookie-Management-Diensten, gelten die
        folgenden Hinweise: Die Dauer der Speicherung der Einwilligung kann bis
        zu zwei Jahren betragen. Hierbei wird ein pseudonymer
        Nutzer-Identifikator gebildet und mit dem Zeitpunkt der Einwilligung,
        Angaben zur Reichweite der Einwilligung (z. B. welche Kategorien von
        Cookies und/oder Diensteanbieter) sowie dem Browser, System und
        verwendeten Endgerät gespeichert.
      </li>
    </ul>

    <p>
      <strong>Cookie-Einstellungen bearbeiten:</strong>

      <q-btn
        :label="$t('cookies.actions.manage')"
        @click="openCookieAdministrationDialog"
        color="primary"
        class="q-ml-md"
        flat
        dense
        no-caps
      />
    </p>
    </tile>

    <tile padded>
    <h2 class="text-h2" id="leistungen">Geschäftliche Leistungen</h2>
    <p>
      Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z.B. Kunden
      und Interessenten (zusammenfassend bezeichnet als "Vertragspartner") im
      Rahmen von vertraglichen und vergleichbaren Rechtsverhältnissen sowie
      damit verbundenen Maßnahmen und im Rahmen der Kommunikation mit den
      Vertragspartnern (oder vorvertraglich), z.B., um Anfragen zu beantworten.
    </p>
    <p>
      Wir verarbeiten diese Daten, um unsere vertraglichen Verpflichtungen zu
      erfüllen. Dazu gehören insbesondere die Verpflichtungen zur Erbringung der
      vereinbarten Leistungen, etwaige Aktualisierungspflichten und Abhilfe bei
      Gewährleistungs- und sonstigen Leistungsstörungen. Darüber hinaus
      verarbeiten wir die Daten zur Wahrung unserer Rechte und zum Zwecke der
      mit diesen Pflichten verbundenen Verwaltungsaufgaben sowie der
      Unternehmensorganisation. Darüber hinaus verarbeiten wir die Daten auf
      Grundlage unserer berechtigten Interessen an einer ordnungsgemäßen und
      betriebswirtschaftlichen Geschäftsführung sowie an Sicherheitsmaßnahmen
      zum Schutz unserer Vertragspartner und unseres Geschäftsbetriebes vor
      Missbrauch, Gefährdung ihrer Daten, Geheimnisse, Informationen und Rechte
      (z.B. zur Beteiligung von Telekommunikations-, Transport- und sonstigen
      Hilfsdiensten sowie Subunternehmern, Banken, Steuer- und Rechtsberatern,
      Zahlungsdienstleistern oder Finanzbehörden). Im Rahmen des geltenden
      Rechts geben wir die Daten von Vertragspartnern nur insoweit an Dritte
      weiter, als dies für die vorgenannten Zwecke oder zur Erfüllung
      gesetzlicher Pflichten erforderlich ist. Über weitere Formen der
      Verarbeitung, z.B. zu Marketingzwecken, werden die Vertragspartner im
      Rahmen dieser Datenschutzerklärung informiert.
    </p>
    <p>
      Welche Daten für die vorgenannten Zwecke erforderlich sind, teilen wir den
      Vertragspartnern vor oder im Rahmen der Datenerhebung, z.B. in
      Onlineformularen, durch besondere Kennzeichnung (z.B. Farben) bzw. Symbole
      (z.B. Sternchen o.ä.), oder persönlich mit.
    </p>
    <p>
      Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und
      vergleichbarer Pflichten, d.h., grundsätzlich nach Ablauf von 4 Jahren, es
      sei denn, dass die Daten in einem Kundenkonto gespeichert werden, z.B.,
      solange sie aus gesetzlichen Gründen der Archivierung aufbewahrt werden
      müssen (z.B. für Steuerzwecke im Regelfall 10 Jahre). Daten, die uns im
      Rahmen eines Auftrags durch den Vertragspartner offengelegt wurden,
      löschen wir entsprechend den Vorgaben des Auftrags, grundsätzlich nach
      Ende des Auftrags.
    </p>
    <p>
      Soweit wir zur Erbringung unserer Leistungen Drittanbieter oder
      Plattformen einsetzen, gelten im Verhältnis zwischen den Nutzern und den
      Anbietern die Geschäftsbedingungen und Datenschutzhinweise der jeweiligen
      Drittanbieter oder Plattformen.
    </p>
    <p><strong>Kundenkonto</strong></p>
    Vertragspartner können innerhalb unseres Onlineangebotes ein Konto anlegen
    (z.B. Kunden- bzw. Nutzerkonto, kurz "Kundenkonto"). Falls die Registrierung
    eines Kundenkontos erforderlich ist, werden Vertragspartner hierauf ebenso
    hingewiesen wie auf die für die Registrierung erforderlichen Angaben. Die
    Kundenkonten sind nicht öffentlich und können von Suchmaschinen nicht
    indexiert werden. Im Rahmen der Registrierung sowie anschließender
    Anmeldungen und Nutzungen des Kundenkontos speichern wir die IP-Adressen der
    Kunden nebst den Zugriffszeitpunkten, um die Registrierung nachweisen und
    etwaigem Missbrauch des Kundenkontos vorbeugen zu können.
    <p>
      Wenn Kunden ihr Kundenkonto gekündigt haben, werden die das Kundenkonto
      betreffenden Daten gelöscht, vorbehaltlich, deren Aufbewahrung ist aus
      gesetzlichen Gründen erforderlich. Es obliegt den Kunden, ihre Daten bei
      erfolgter Kündigung des Kundenkontos zu sichern.
    </p>
    <p><strong>Wirtschaftliche Analysen und Marktforschung</strong></p>
    Aus betriebswirtschaftlichen Gründen und um Markttendenzen, Wünsche der
    Vertragspartner und Nutzer erkennen zu können, analysieren wir die uns
    vorliegenden Daten zu Geschäftsvorgängen, Verträgen, Anfragen, etc., wobei
    in die Gruppe der betroffenen Personen Vertragspartner, Interessenten,
    Kunden, Besucher und Nutzer unseres Onlineangebotes fallen können.
    <p>
      Die Analysen erfolgen zum Zweck betriebswirtschaftlicher Auswertungen, des
      Marketings und der Marktforschung (z.B. zur Bestimmung von Kundengruppen
      mit unterschiedlichen Eigenschaften). Dabei können wir, sofern vorhanden,
      die Profile von registrierten Nutzern samt ihrer Angaben, z.B. zu in
      Anspruch genommenen Leistungen, berücksichtigen. Die Analysen dienen
      alleine uns und werden nicht extern offenbart, sofern es sich nicht um
      anonyme Analysen mit zusammengefassten, also anonymisierten Werten
      handelt. Ferner nehmen wir Rücksicht auf die Privatsphäre der Nutzer und
      verarbeiten die Daten zu den Analysezwecken möglichst pseudonym und,
      sofern machbar, anonym (z.B. als zusammengefasste Daten).
    </p>
    <p><strong>Angebot von Software- und Plattformleistungen</strong></p>
    Wir verarbeiten die Daten unserer Nutzer, angemeldeter und etwaiger
    Testnutzer (nachfolgend einheitlich als "Nutzer" bezeichnet), um ihnen
    gegenüber unsere vertraglichen Leistungen erbringen zu können sowie auf
    Grundlage berechtigter Interessen, um die Sicherheit unseres Angebotes
    gewährleisten und es weiterentwickeln zu können. Die erforderlichen Angaben
    sind als solche im Rahmen des Auftrags-, Bestell- bzw. vergleichbaren
    Vertragsschlusses gekennzeichnet und umfassen die zur Leistungserbringung
    und Abrechnung benötigten Angaben sowie Kontaktinformationen, um etwaige
    Rücksprachen halten zu können.
    <ul class="m-elements">
      <li>
        <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen,
        Adressen); Zahlungsdaten (z.B. Bankverbindungen, Rechnungen,
        Zahlungshistorie); Kontaktdaten (z.B. E-Mail, Telefonnummern);
        Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit, Kundenkategorie);
        Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
        Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
        IP-Adressen).
      </li>
      <li>
        <strong>Betroffene Personen:</strong> Kunden; Interessenten; Geschäfts-
        und Vertragspartner.
      </li>
      <li>
        <strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher
        Leistungen und Kundenservice; Sicherheitsmaßnahmen; Kontaktanfragen und
        Kommunikation; Büro- und Organisationsverfahren; Verwaltung und
        Beantwortung von Anfragen; Konversionsmessung (Messung der Effektivität
        von Marketingmaßnahmen); Profile mit nutzerbezogenen Informationen
        (Erstellen von Nutzerprofilen).
      </li>
      <li>
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO); Berechtigte Interessen
        (Art. 6 Abs. 1 S. 1 lit. f. DSGVO); Rechtliche Verpflichtung (Art. 6
        Abs. 1 S. 1 lit. c. DSGVO).
      </li>
    </ul>
    </tile>

    <tile padded>
    <h2 class="text-h2" id="hosting">Bereitstellung des Onlineangebotes und
      Webhosting</h2>
    <p>
      Um unser Onlineangebot sicher und effizient bereitstellen zu können,
      nehmen wir die Leistungen von einem oder mehreren Webhosting-Anbietern in
      Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern) das
      Onlineangebot abgerufen werden kann. Zu diesen Zwecken können wir
      Infrastruktur- und Plattformdienstleistungen, Rechenkapazität,
      Speicherplatz und Datenbankdienste sowie Sicherheitsleistungen und
      technische Wartungsleistungen in Anspruch nehmen.
    </p>
    <p>
      Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten
      Daten können alle die Nutzer unseres Onlineangebotes betreffenden Angaben
      gehören, die im Rahmen der Nutzung und der Kommunikation anfallen. Hierzu
      gehören regelmäßig die IP-Adresse, die notwendig ist, um die Inhalte von
      Onlineangeboten an Browser ausliefern zu können, und alle innerhalb
      unseres Onlineangebotes oder von Webseiten getätigten Eingaben.
    </p>
    <ul class="m-elements">
      <li>
        <strong>Verarbeitete Datenarten:</strong> Inhaltsdaten (z.B. Eingaben in
        Onlineformularen); Nutzungsdaten (z.B. besuchte Webseiten, Interesse an
        Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B.
        Geräte-Informationen, IP-Adressen).
      </li>
      <li>
        <strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher,
        Nutzer von Onlinediensten).
      </li>
      <li>
        <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
        Onlineangebotes und Nutzerfreundlichkeit.
      </li>
      <li>
        <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
        S. 1 lit. f. DSGVO).
      </li>
    </ul>
    <p>
      <strong
        >Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
        Diensten:</strong
      >
    </p>
    <ul class="m-elements">
      <li>
        <strong>E-Mail-Versand und -Hosting: </strong>Die von uns in Anspruch
        genommenen Webhosting-Leistungen umfassen ebenfalls den Versand, den
        Empfang sowie die Speicherung von E-Mails. Zu diesen Zwecken werden die
        Adressen der Empfänger sowie Absender als auch weitere Informationen
        betreffend den E-Mailversand (z.B. die beteiligten Provider) sowie die
        Inhalte der jeweiligen E-Mails verarbeitet. Die vorgenannten Daten
        können ferner zu Zwecken der Erkennung von SPAM verarbeitet werden. Wir
        bitten darum, zu beachten, dass E-Mails im Internet grundsätzlich nicht
        verschlüsselt versendet werden. Im Regelfall werden E-Mails zwar auf dem
        Transportweg verschlüsselt, aber (sofern kein sogenanntes
        Ende-zu-Ende-Verschlüsselungsverfahren eingesetzt wird) nicht auf den
        Servern, von denen sie abgesendet und empfangen werden. Wir können daher
        für den Übertragungsweg der E-Mails zwischen dem Absender und dem
        Empfang auf unserem Server keine Verantwortung übernehmen.
      </li>
      <li>
        <strong>Erhebung von Zugriffsdaten und Logfiles: </strong>Wir selbst
        (bzw. unser Webhostinganbieter) erheben Daten zu jedem Zugriff auf den
        Server (sogenannte Serverlogfiles). Zu den Serverlogfiles können die
        Adresse und Name der abgerufenen Webseiten und Dateien, Datum und
        Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen
        Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers,
        Referrer URL (die zuvor besuchte Seite) und im Regelfall IP-Adressen und
        der anfragende Provider gehören. Die Serverlogfiles können zum einen zu
        Zwecken der Sicherheit eingesetzt werden, z.B., um eine Überlastung der
        Server zu vermeiden (insbesondere im Fall von missbräuchlichen
        Angriffen, sogenannten DDoS-Attacken) und zum anderen, um die Auslastung
        der Server und ihre Stabilität sicherzustellen;
        <strong>Löschung von Daten:</strong> Logfile-Informationen werden für
        die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder
        anonymisiert. Daten, deren weitere Aufbewahrung zu Beweiszwecken
        erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen
        Vorfalls von der Löschung ausgenommen.
      </li>
      <li>
        <strong>Hetzner: </strong>Leistungen auf dem Gebiet der Bereitstellung
        von informationstechnischer Infrastruktur und verbundenen
        Dienstleistungen (z.B. Speicherplatz und/oder Rechenkapazitäten);
        <strong>Dienstanbieter:</strong> Hetzner Online GmbH, Industriestr. 25,
        91710 Gunzenhausen, Deutschland; <strong>Website: </strong>
        <a href="https://www.hetzner.com" target="_blank" class="external"
          >https://www.hetzner.com</a
        >; <strong>Datenschutzerklärung: </strong>
        <a
          href="https://www.hetzner.com/de/rechtliches/datenschutz"
          target="_blank" class="external"
          >https://www.hetzner.com/de/rechtliches/datenschutz</a
        >; <strong>Auftragsverarbeitungsvertrag: </strong>
        <a
          href="https://docs.hetzner.com/de/general/general-terms-and-conditions/data-privacy-faq/"
          target="_blank" class="external"
          >https://docs.hetzner.com/de/general/general-terms-and-conditions/data-privacy-faq/</a
        >.
      </li>
    </ul>
    </tile>

    <tile padded>
    <h2 class="text-h2" id="kontakt">Kontakt- und Anfragenverwaltung</h2>
    <p>
      Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon
      oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und
      Geschäftsbeziehungen werden die Angaben der anfragenden Personen
      verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und etwaiger
      angefragter Maßnahmen erforderlich ist.
    </p>
    <p>
      Die Beantwortung der Kontaktanfragen sowie die Verwaltung von Kontakt- und
      Anfragedaten im Rahmen von vertraglichen oder vorvertraglichen Beziehungen
      erfolgt zur Erfüllung unserer vertraglichen Pflichten oder zur
      Beantwortung von (vor)vertraglichen Anfragen und im Übrigen auf Grundlage
      der berechtigten Interessen an der Beantwortung der Anfragen und Pflege
      von Nutzer- bzw. Geschäftsbeziehungen.
    </p>
    <ul class="m-elements">
      <li>
        <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen,
        Adressen); Kontaktdaten (z.B. E-Mail, Telefonnummern); Inhaltsdaten
        (z.B. Eingaben in Onlineformularen).
      </li>
      <li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li>
      <li>
        <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und
        Kommunikation; Erbringung vertraglicher Leistungen und Kundenservice.
      </li>
      <li>
        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
        Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO); Berechtigte Interessen
        (Art. 6 Abs. 1 S. 1 lit. f. DSGVO); Rechtliche Verpflichtung (Art. 6
        Abs. 1 S. 1 lit. c. DSGVO).
      </li>
    </ul>
    <p>
      <strong
        >Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
        Diensten:</strong
      >
    </p>
    <ul class="m-elements">
      <li>
        <strong>Kontaktformular: </strong>Wenn Nutzer über unser
        Kontaktformular, E-Mail oder andere Kommunikationswege mit uns in
        Kontakt treten, verarbeiten wir die uns in diesem Zusammenhang
        mitgeteilten Daten zur Bearbeitung des mitgeteilten Anliegens. Zu diesem
        Zweck verarbeiten wir personenbezogene Daten im Rahmen vorvertraglicher
        und vertraglicher Geschäftsbeziehungen, soweit dies zu deren Erfüllung
        erforderlich ist und im Übrigen auf Grundlage unserer berechtigten
        Interessen sowie der Interessen der Kommunikationspartner an der
        Beantwortung der Anliegen und unserer gesetzlichen
        Aufbewahrungspflichten.
      </li>
    </ul>
    </tile>

    <tile padded>
    <h2 class="text-h2" id="newsletter"
      >Newsletter und elektronische Benachrichtigungen</h2>
    <p>
      Wir versenden Newsletter, E-Mails und weitere elektronische
      Benachrichtigungen (nachfolgend "Newsletter“) nur mit der Einwilligung der
      Empfänger oder einer gesetzlichen Erlaubnis. Sofern im Rahmen einer
      Anmeldung zum Newsletter dessen Inhalte konkret umschrieben werden, sind
      sie für die Einwilligung der Nutzer maßgeblich. Im Übrigen enthalten
      unsere Newsletter Informationen zu unseren Leistungen und uns.
    </p>
    <p>
      Um sich zu unseren Newslettern anzumelden, reicht es grundsätzlich aus,
      wenn Sie Ihre E-Mail-Adresse angeben. Wir können Sie jedoch bitten, einen
      Namen, zwecks persönlicher Ansprache im Newsletter, oder weitere Angaben,
      sofern diese für die Zwecke des Newsletters erforderlich sind, zu tätigen.
    </p>
    <p>
      <strong>Double-Opt-In-Verfahren:</strong> Die Anmeldung zu unserem
      Newsletter erfolgt grundsätzlich in einem sogenannte
      Double-Opt-In-Verfahren. D.h., Sie erhalten nach der Anmeldung eine
      E-Mail, in der Sie um die Bestätigung Ihrer Anmeldung gebeten werden.
      Diese Bestätigung ist notwendig, damit sich niemand mit fremden
      E-Mail-Adressen anmelden kann. Die Anmeldungen zum Newsletter werden
      protokolliert, um den Anmeldeprozess entsprechend den rechtlichen
      Anforderungen nachweisen zu können. Hierzu gehört die Speicherung des
      Anmelde- und des Bestätigungszeitpunkts als auch der IP-Adresse. Ebenso
      werden die Änderungen Ihrer bei dem Versanddienstleister gespeicherten
      Daten protokolliert.
    </p>
    <p>
      <strong>Löschung und Einschränkung der Verarbeitung: </strong> Wir können
      die ausgetragenen E-Mail-Adressen bis zu drei Jahren auf Grundlage unserer
      berechtigten Interessen speichern, bevor wir sie löschen, um eine ehemals
      gegebene Einwilligung nachweisen zu können. Die Verarbeitung dieser Daten
      wird auf den Zweck einer möglichen Abwehr von Ansprüchen beschränkt. Ein
      individueller Löschungsantrag ist jederzeit möglich, sofern zugleich das
      ehemalige Bestehen einer Einwilligung bestätigt wird. Im Fall von
      Pflichten zur dauerhaften Beachtung von Widersprüchen behalten wir uns die
      Speicherung der E-Mail-Adresse alleine zu diesem Zweck in einer Sperrliste
      (sogenannte "Blocklist") vor.
    </p>
    <p>
      Die Protokollierung des Anmeldeverfahrens erfolgt auf Grundlage unserer
      berechtigten Interessen zu Zwecken des Nachweises seines ordnungsgemäßen
      Ablaufs. Soweit wir einen Dienstleister mit dem Versand von E-Mails
      beauftragen, erfolgt dies auf Grundlage unserer berechtigten Interessen an
      einem effizienten und sicheren Versandsystem.
    </p>
    <p>
      <strong>Hinweise zu Rechtsgrundlagen:</strong> Der Versand der Newsletter
      erfolgt auf Grundlage einer Einwilligung der Empfänger oder, falls eine
      Einwilligung nicht erforderlich ist, auf Grundlage unserer berechtigten
      Interessen am Direktmarketing, sofern und soweit diese gesetzlich, z.B. im
      Fall von Bestandskundenwerbung, erlaubt ist. Soweit wir einen
      Dienstleister mit dem Versand von E-Mails beauftragen, geschieht dies auf
      der Grundlage unserer berechtigten Interessen an einem effizienten und
      sicheren Versand. Das Registrierungsverfahren wird auf der Grundlage
      unserer berechtigten Interessen aufgezeichnet, um nachzuweisen, dass es in
      Übereinstimmung mit dem Gesetz durchgeführt wurde.
    </p>
    <strong>Inhalte:</strong>
    <p>Informationen zu uns, unseren Leistungen, Aktionen und Angeboten.</p>
    <ul class="m-elements">
      <li>
        <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen,
        Adressen); Kontaktdaten (z.B. E-Mail, Telefonnummern);
        Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen);
        Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
        Zugriffszeiten).
      </li>
      <li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li>
      <li>
        <strong>Zwecke der Verarbeitung:</strong> Direktmarketing (z.B. per
        E-Mail oder postalisch).
      </li>
      <li>
        <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit.
        a. DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
      </li>
      <li>
        <strong>Widerspruchsmöglichkeit (Opt-Out): </strong>Sie können den
        Empfang unseres Newsletters jederzeit kündigen, d.h. Ihre Einwilligungen
        widerrufen, bzw. dem weiteren Empfang widersprechen. Einen Link zur
        Kündigung des Newsletters finden Sie entweder am Ende eines jeden
        Newsletters oder können sonst eine der oben angegebenen
        Kontaktmöglichkeiten, vorzugswürdig E-Mail, hierzu nutzen.
      </li>
    </ul>
    <p>
      <strong
        >Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
        Diensten:</strong
      >
    </p>
    <ul class="m-elements">
      <li>
        <strong>Messung von Öffnungs- und Klickraten: </strong>Die Newsletter
        enthalten einen sogenannte "web-beacon“, d.h., eine pixelgroße Datei,
        die beim Öffnen des Newsletters von unserem Server, bzw., sofern wir
        einen Versanddienstleister einsetzen, von dessen Server abgerufen wird.
        Im Rahmen dieses Abrufs werden zunächst technische Informationen, wie
        Informationen zum Browser und Ihrem System, als auch Ihre IP-Adresse und
        der Zeitpunkt des Abrufs, erhoben. Diese Informationen werden zur
        technischen Verbesserung unseres Newsletters anhand der technischen
        Daten oder der Zielgruppen und ihres Leseverhaltens auf Basis ihrer
        Abruforte (die mit Hilfe der IP-Adresse bestimmbar sind) oder der
        Zugriffszeiten genutzt. Diese Analyse beinhaltet ebenfalls die
        Feststellung, ob die Newsletter geöffnet werden, wann sie geöffnet
        werden.
      </li>
    </ul>
    </tile>

    <tile padded>
    <h2 class="text-h2" id="werbung"
      >Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon</h2>
    <p>
      Wir verarbeiten personenbezogene Daten zu Zwecken der werblichen
      Kommunikation, die über diverse Kanäle, wie z.B. E-Mail, Telefon, Post
      oder Fax, entsprechend den gesetzlichen Vorgaben erfolgen kann.
    </p>
    <p>
      Die Empfänger haben das Recht, erteilte Einwilligungen jederzeit zu
      widerrufen oder der werblichen Kommunikation jederzeit zu widersprechen.
    </p>
    <p>
      Nach Widerruf oder Widerspruch speichern wir die zum Nachweis der
      bisherigen Berechtigung erforderlichen Daten zur Kontaktaufnahme oder
      Zusendung bis zu drei Jahre nach Ablauf des Jahres des Widerrufs oder
      Widerspruchs auf der Grundlage unserer berechtigten Interessen. Die
      Verarbeitung dieser Daten ist auf den Zweck einer möglichen Abwehr von
      Ansprüchen beschränkt. Auf der Grundlage des berechtigten Interesses, den
      Widerruf bzw. Widerspruch der Nutzer dauerhaft zu beachten, speichern wir
      ferner die zur Vermeidung einer erneuten Kontaktaufnahme erforderlichen
      Daten (z.B. je nach Kommunikationskanal die E-Mail-Adresse, Telefonnummer,
      Name).
    </p>
    <ul class="m-elements">
      <li>
        <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen,
        Adressen); Kontaktdaten (z.B. E-Mail, Telefonnummern).
      </li>
      <li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li>
      <li>
        <strong>Zwecke der Verarbeitung:</strong> Direktmarketing (z.B. per
        E-Mail oder postalisch).
      </li>
      <li>
        <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit.
        a. DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
      </li>
    </ul>
    </tile>

    <tile padded>
    <h2 class="text-h2" id="analyse">Webanalyse, Monitoring und Optimierung</h2>
    <p>
      Die Webanalyse (auch als "Reichweitenmessung" bezeichnet) dient der
      Auswertung der Besucherströme unseres Onlineangebotes und kann Verhalten,
      Interessen oder demographische Informationen zu den Besuchern, wie z.B.
      das Alter oder das Geschlecht, als pseudonyme Werte umfassen. Mit Hilfe
      der Reichweitenanalyse können wir z.B. erkennen, zu welcher Zeit unser
      Onlineangebot oder dessen Funktionen oder Inhalte am häufigsten genutzt
      werden oder zur Wiederverwendung einladen. Ebenso können wir
      nachvollziehen, welche Bereiche der Optimierung bedürfen.
    </p>
    <p>
      Neben der Webanalyse können wir auch Testverfahren einsetzen, um z.B.
      unterschiedliche Versionen unseres Onlineangebotes oder seiner
      Bestandteile zu testen und optimieren.
    </p>
    <p>
      Sofern nachfolgend nicht anders angegeben, können zu diesen Zwecken
      Profile, d.h. zu einem Nutzungsvorgang zusammengefasste Daten angelegt und
      Informationen in einem Browser, bzw. in einem Endgerät gespeichert und aus
      diesem ausgelesen werden. Zu den erhobenen Angaben gehören insbesondere
      besuchte Webseiten und dort genutzte Elemente sowie technische Angaben,
      wie der verwendete Browser, das verwendete Computersystem sowie Angaben zu
      Nutzungszeiten. Sofern Nutzer in die Erhebung ihrer Standortdaten uns
      gegenüber oder gegenüber den Anbietern der von uns eingesetzten Dienste
      einverstanden erklärt haben, können auch Standortdaten verarbeitet werden.
    </p>
    <p>
      Es werden ebenfalls die IP-Adressen der Nutzer gespeichert. Jedoch nutzen
      wir ein IP-Masking-Verfahren (d.h., Pseudonymisierung durch Kürzung der
      IP-Adresse) zum Schutz der Nutzer. Generell werden die im Rahmen von
      Webanalyse, A/B-Testings und Optimierung keine Klardaten der Nutzer (wie
      z.B. E-Mail-Adressen oder Namen) gespeichert, sondern Pseudonyme. D.h.,
      wir als auch die Anbieter der eingesetzten Software kennen nicht die
      tatsächliche Identität der Nutzer, sondern nur den für Zwecke der
      jeweiligen Verfahren in deren Profilen gespeicherten Angaben.
    </p>
    <p>
      <strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern wir die Nutzer um
      deren Einwilligung in den Einsatz der Drittanbieter bitten, ist die
      Rechtsgrundlage der Verarbeitung von Daten die Einwilligung. Ansonsten
      werden die Daten der Nutzer auf Grundlage unserer berechtigten Interessen
      (d.h. Interesse an effizienten, wirtschaftlichen und empfängerfreundlichen
      Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf
      die Informationen zur Verwendung von Cookies in dieser
      Datenschutzerklärung hinweisen.
    </p>
    <ul class="m-elements">
      <li>
        <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B. besuchte
        Webseiten, Interesse an Inhalten, Zugriffszeiten);
        Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
      </li>
      <li>
        <strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher,
        Nutzer von Onlinediensten).
      </li>
      <li>
        <strong>Zwecke der Verarbeitung:</strong> Reichweitenmessung (z.B.
        Zugriffsstatistiken, Erkennung wiederkehrender Besucher); Profile mit
        nutzerbezogenen Informationen (Erstellen von Nutzerprofilen).
      </li>
      <li>
        <strong>Sicherheitsmaßnahmen:</strong> IP-Masking (Pseudonymisierung der
        IP-Adresse).
      </li>
      <li>
        <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit.
        a. DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
      </li>
    </ul>
    <p>
      <strong
        >Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
        Diensten:</strong
      >
    </p>
    <ul class="m-elements">
      <li>
        <strong>Google Analytics: </strong>Webanalyse, Reichweitenmessung sowie
        Messung von Nutzerströmen; <strong>Dienstanbieter:</strong> Google
        Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
        Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway, Mountain View,
        CA 94043, USA; <strong>Website:</strong>
        <a
          href="https://marketingplatform.google.com/intl/de/about/analytics/"
          target="_blank" class="external"
          >https://marketingplatform.google.com/intl/de/about/analytics/</a
        >; <strong>Datenschutzerklärung: </strong>
        <a href="https://policies.google.com/privacy" target="_blank" class="external"
          >https://policies.google.com/privacy</a
        >; <strong>Auftragsverarbeitungsvertrag: </strong>
        <a
          href="https://business.safety.google/adsprocessorterms"
          target="_blank" class="external"
          >https://business.safety.google/adsprocessorterms</a
        >;
        <strong
          >Standardvertragsklauseln (Gewährleistung Datenschutzniveau bei
          Verarbeitung in Drittländern): </strong
        >
        <a
          href="https://business.safety.google/adsprocessorterms"
          target="_blank" class="external"
          >https://business.safety.google/adsprocessorterms</a
        >; <strong>Widerspruchsmöglichkeit (Opt-Out):</strong> Opt-Out-Plugin:
        <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank"
          class="external">https://tools.google.com/dlpage/gaoptout?hl=de</a
        >, Einstellungen für die Darstellung von Werbeeinblendungen:
        <a href="https://adssettings.google.com/authenticated" target="_blank"
          class="external">https://adssettings.google.com/authenticated</a
        >; <strong>Weitere Informationen: </strong>
        <a
          href="https://privacy.google.com/businesses/adsservices"
          target="_blank" class="external"
          >https://privacy.google.com/businesses/adsservices</a
        >
        (Arten der Verarbeitung sowie der verarbeiteten Daten).
      </li>
    </ul>
    </tile>

    <tile padded>
    <h2 class="text-h2" id="aenderungen"
      >Änderung und Aktualisierung der Datenschutzerklärung</h2>
    <p>
      Wir bitten Sie, sich regelmäßig über den Inhalt unserer
      Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung
      an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen
      dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen
      eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige
      individuelle Benachrichtigung erforderlich wird.
    </p>
    <p>
      Sofern wir in dieser Datenschutzerklärung Adressen und
      Kontaktinformationen von Unternehmen und Organisationen angeben, bitten
      wir zu beachten, dass die Adressen sich über die Zeit ändern können und
      bitten die Angaben vor Kontaktaufnahme zu prüfen.
    </p>
    </tile>

    <tile padded>
    <h2 class="text-h2" id="rechte">Rechte der betroffenen Personen</h2>
    <p>
      Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die
      sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
    </p>
    <ul>
      <li>
        <strong
          >Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus
          Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung
          der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6
          Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt
          auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die
          Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung
          zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die
          Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke
          derartiger Werbung einzulegen; dies gilt auch für das Profiling,
          soweit es mit solcher Direktwerbung in Verbindung steht.</strong
        >
      </li>
      <li>
        <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht,
        erteilte Einwilligungen jederzeit zu widerrufen.
      </li>
      <li>
        <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung
        darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf
        Auskunft über diese Daten sowie auf weitere Informationen und Kopie der
        Daten entsprechend den gesetzlichen Vorgaben.
      </li>
      <li>
        <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den
        gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie
        betreffenden Daten oder die Berichtigung der Sie betreffenden
        unrichtigen Daten zu verlangen.
      </li>
      <li>
        <strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong>
        Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
        verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw.
        alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der
        Verarbeitung der Daten zu verlangen.
      </li>
      <li>
        <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht,
        Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe
        der gesetzlichen Vorgaben in einem strukturierten, gängigen und
        maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen
        anderen Verantwortlichen zu fordern.
      </li>
      <li>
        <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben unbeschadet
        eines anderweitigen verwaltungsrechtlichen oder gerichtlichen
        Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde,
        insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts,
        ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie
        der Ansicht sind, dass die Verarbeitung der Sie betreffenden
        personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.
      </li>
    </ul>
    </tile>

    <tile padded>
    <h2 class="text-h2" id="definitionen">Begriffsdefinitionen</h2>
    <p>
      In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser
      Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der Begriffe
      sind dem Gesetz entnommen und vor allem im Art. 4 DSGVO definiert. Die
      gesetzlichen Definitionen sind verbindlich. Die nachfolgenden
      Erläuterungen sollen dagegen vor allem dem Verständnis dienen. Die
      Begriffe sind alphabetisch sortiert.
    </p>
    <ul class="glossary">
      <li>
        <strong>Konversionsmessung:</strong> Die Konversionsmessung (auch als
        "Besuchsaktionsauswertung" bezeichnet) ist ein Verfahren, mit dem die
        Wirksamkeit von Marketingmaßnahmen festgestellt werden kann. Dazu wird
        im Regelfall ein Cookie auf den Geräten der Nutzer innerhalb der
        Webseiten, auf denen die Marketingmaßnahmen erfolgen, gespeichert und
        dann erneut auf der Zielwebseite abgerufen. Beispielsweise können wir so
        nachvollziehen, ob die von uns auf anderen Webseiten geschalteten
        Anzeigen erfolgreich waren.
      </li>
      <li>
        <strong>Personenbezogene Daten:</strong> "Personenbezogene Daten“ sind
        alle Informationen, die sich auf eine identifizierte oder
        identifizierbare natürliche Person (im Folgenden "betroffene Person“)
        beziehen; als identifizierbar wird eine natürliche Person angesehen, die
        direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung
        wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer
        Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen
        Merkmalen identifiziert werden kann, die Ausdruck der physischen,
        physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen
        oder sozialen Identität dieser natürlichen Person sind.
      </li>
      <li>
        <strong>Profile mit nutzerbezogenen Informationen:</strong> Die
        Verarbeitung von "Profilen mit nutzerbezogenen Informationen", bzw. kurz
        "Profilen" umfasst jede Art der automatisierten Verarbeitung
        personenbezogener Daten, die darin besteht, dass diese personenbezogenen
        Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf
        eine natürliche Person beziehen (je nach Art der Profilbildung können
        dazu unterschiedliche Informationen betreffend die Demographie,
        Verhalten und Interessen, wie z.B. die Interaktion mit Webseiten und
        deren Inhalten, etc.) zu analysieren, zu bewerten oder, um sie
        vorherzusagen (z.B. die Interessen an bestimmten Inhalten oder
        Produkten, das Klickverhalten auf einer Webseite oder den
        Aufenthaltsort). Zu Zwecken des Profilings werden häufig Cookies und
        Web-Beacons eingesetzt.
      </li>
      <li>
        <strong>Reichweitenmessung:</strong> Die Reichweitenmessung (auch als
        Web Analytics bezeichnet) dient der Auswertung der Besucherströme eines
        Onlineangebotes und kann das Verhalten oder Interessen der Besucher an
        bestimmten Informationen, wie z.B. Inhalten von Webseiten, umfassen. Mit
        Hilfe der Reichweitenanalyse können Webseiteninhaber z.B. erkennen, zu
        welcher Zeit Besucher ihre Webseite besuchen und für welche Inhalte sie
        sich interessieren. Dadurch können sie z.B. die Inhalte der Webseite
        besser an die Bedürfnisse ihrer Besucher anpassen. Zu Zwecken der
        Reichweitenanalyse werden häufig pseudonyme Cookies und Web-Beacons
        eingesetzt, um wiederkehrende Besucher zu erkennen und so genauere
        Analysen zur Nutzung eines Onlineangebotes zu erhalten.
      </li>
      <li>
        <strong>Verantwortlicher:</strong> Als "Verantwortlicher“ wird die
        natürliche oder juristische Person, Behörde, Einrichtung oder andere
        Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel
        der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.
      </li>
      <li>
        <strong>Verarbeitung:</strong> "Verarbeitung" ist jeder mit oder ohne
        Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche
        Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff
        reicht weit und umfasst praktisch jeden Umgang mit Daten, sei es das
        Erheben, das Auswerten, das Speichern, das Übermitteln oder das Löschen.
      </li>
    </ul>
    </tile>

    <tile clean padded>
      <a
        href="https://datenschutz-generator.de/"
        title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
        target="_blank"
        class="external"
        rel="noopener noreferrer nofollow"
        >Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke</a
      >
    </tile>
  </q-page>
</template>

<script lang="ts">
import { useMeta } from 'quasar';
import { defineComponent } from 'vue';
import Tile from 'src/components/Tile.vue';
import ALink from 'src/components/ALink.vue';
import ResultBanner from 'src/components/fields/ResultBanner.vue';
import TitleTile from 'src/components/tiles/TitleTile.vue';
import { useLocaleRouter } from 'src/router/LocaleRouter';
import { generateMeta } from 'src/services/metaUtils';
import { onSendMail, openCookieAdministrationDialog } from 'src/services/utils';

export default defineComponent({
  name: 'ImprintPage',

  components: {
    ALink,
    ResultBanner,
    Tile,
    TitleTile,
  },

  setup() {
    const isGerman = 'de-DE' === useLocaleRouter().getLocale();
    useMeta(generateMeta('privacy.title', 'privacy.description'));

    return {
      isGerman,
      openCookieAdministrationDialog,
      onSendMail,
    };
  },
});
</script>
