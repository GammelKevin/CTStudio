import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung - CT Studio",
  description: "Datenschutzerklärung und Informationen zum Umgang mit Ihren Daten",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-xl font-medium text-foreground mb-2">
              Allgemeine Hinweise
            </h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-foreground mb-2">
              Datenerfassung auf dieser Website
            </h3>
            <p className="font-semibold text-foreground mb-2">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </p>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
              &ldquo;Hinweis zur Verantwortlichen Stelle&rdquo; in dieser
              Datenschutzerklärung entnehmen.
            </p>
            <p className="font-semibold text-foreground mb-2 mt-4">
              Wie erfassen wir Ihre Daten?
            </p>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben.
            </p>
            <p className="mt-4">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
              Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
              allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
              automatisch, sobald Sie diese Website betreten.
            </p>
            <p className="font-semibold text-foreground mb-2 mt-4">
              Wofür nutzen wir Ihre Daten?
            </p>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            <p className="font-semibold text-foreground mb-2 mt-4">
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </p>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie
              eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie
              diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
              haben Sie das Recht, unter bestimmten Umständen die Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu.
            </p>
            <p className="mt-4">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
              sich jederzeit an uns wenden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Hosting
            </h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <h3 className="text-xl font-medium text-foreground mb-2 mt-4">
              Externes Hosting
            </h3>
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten,
              die auf dieser Website erfasst werden, werden auf den Servern des
              Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um
              IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
              Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
              Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="mt-4">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
              gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs.
              1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
              effizienten Bereitstellung unseres Online-Angebots durch einen
              professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="text-xl font-medium text-foreground mb-2">
              Datenschutz
            </h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mt-4">
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
              mit denen Sie persönlich identifiziert werden können. Die
              vorliegende Datenschutzerklärung erläutert, welche Daten wir
              erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
              welchem Zweck das geschieht.
            </p>
            <p className="mt-4">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B.
              bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
              Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
              nicht möglich.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-foreground mb-2">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <div className="mt-4 space-y-1">
              <p className="text-foreground">CT Studio</p>
              <p>Flurweg 13</p>
              <p>94527 Aholming</p>
              <p>Deutschland</p>
              <p className="mt-2">E-Mail: kundenservice@ct-studio.store</p>
            </div>
            <p className="mt-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten (z. B. Namen,
              E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-foreground mb-2">
              Speicherdauer
            </h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere
              Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
              Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
              Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
              gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für
              die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer-
              oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten
              Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-foreground mb-2">
              Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
            </h3>
            <p>
              Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den
              USA oder sonstigen datenschutzrechtlich nicht sicheren Drittstaaten.
              Wenn diese Tools aktiv sind, können Ihre personenbezogene Daten in
              diese Drittstaaten übertragen und dort verarbeitet werden. Wir
              weisen darauf hin, dass in diesen Ländern kein mit der EU
              vergleichbares Datenschutzniveau garantiert werden kann.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-foreground mb-2">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte
              Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-foreground mb-2">
              SSL- bzw. TLS-Verschlüsselung
            </h3>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
              oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
              SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
              erkennen Sie daran, dass die Adresszeile des Browsers von &ldquo;http://&rdquo;
              auf &ldquo;https://&rdquo; wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile.
            </p>
            <p className="mt-4">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
              Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
              werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Datenerfassung auf dieser Website
            </h2>
            <h3 className="text-xl font-medium text-foreground mb-2">Cookies</h3>
            <p>
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind
              kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden
              an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
              (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
              Endgerät gespeichert. Session-Cookies werden nach Ende Ihres
              Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem
              Endgerät gespeichert, bis Sie diese selbst löschen oder eine
              automatische Löschung durch Ihren Webbrowser erfolgt.
            </p>
            <p className="mt-4">
              Cookies können von uns (First-Party-Cookies) oder von
              Drittunternehmen stammen (sog. Third-Party-Cookies).
              Third-Party-Cookies ermöglichen die Einbindung bestimmter
              Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z.
              B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
            </p>
            <p className="mt-4">
              Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
              technisch notwendig, da bestimmte Webseitenfunktionen ohne diese
              nicht funktionieren würden (z. B. die Warenkorbfunktion oder die
              Anzeige von Videos). Andere Cookies können zur Auswertung des
              Nutzerverhaltens oder zu Werbezwecken verwendet werden.
            </p>
            <p className="mt-4">
              Cookies, die zur Durchführung des elektronischen
              Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
              erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur
              Optimierung der Website (z. B. Cookies zur Messung des
              Webpublikums) erforderlich sind (notwendige Cookies), werden auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine
              andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein
              berechtigtes Interesse an der Speicherung von notwendigen Cookies
              zur technisch fehlerfreien und optimierten Bereitstellung seiner
              Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und
              vergleichbaren Wiedererkennungstechnologien abgefragt wurde,
              erfolgt die Verarbeitung ausschließlich auf Grundlage dieser
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG);
              die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-4">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen
              von Cookies informiert werden und Cookies nur im Einzelfall
              erlauben, die Annahme von Cookies für bestimmte Fälle oder
              generell ausschließen sowie das automatische Löschen der Cookies
              beim Schließen des Browsers aktivieren. Bei der Deaktivierung von
              Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-foreground mb-2">
              Kontaktformular
            </h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
              Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
              DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              sofern diese abgefragt wurde.
            </p>
            <p className="mt-4">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
              uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
              Speicherung widerrufen oder der Zweck für die Datenspeicherung
              entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
              Zwingende gesetzliche Bestimmungen – insbesondere
              Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-medium text-foreground mb-2">
              Anfrage per E-Mail, Telefon oder Telefax
            </h3>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
              Ihre Anfrage inklusive aller daraus hervorgehenden
              personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
              Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
              Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
              DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              sofern diese abgefragt wurde.
            </p>
            <p className="mt-4">
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten
              verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
              Einwilligung zur Speicherung widerrufen oder der Zweck für die
              Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung
              Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
              insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Zahlungsanbieter
            </h2>
            <h3 className="text-xl font-medium text-foreground mb-2">
              Stripe
            </h3>
            <p>
              Wir nutzen den Zahlungsdienstleister Stripe. Anbieter ist Stripe
              Payments Europe Ltd., 1 Grand Canal Street Lower, Grand Canal Dock,
              Dublin, Irland (nachfolgend „Stripe").
            </p>
            <p className="mt-4">
              Wenn Sie sich für eine Zahlung mit Stripe entscheiden, werden die
              von Ihnen eingegebenen Zahlungsdaten an Stripe übermittelt. Die
              Übermittlung Ihrer Daten an Stripe erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO
              (Verarbeitung zur Erfüllung eines Vertrags). Sie haben die
              Möglichkeit, Ihre Einwilligung zur Datenverarbeitung jederzeit zu
              widerrufen. Ein Widerruf wirkt sich auf die Wirksamkeit von in der
              Vergangenheit liegenden Datenverarbeitungsvorgängen nicht aus.
            </p>
            <p className="mt-4">
              Details entnehmen Sie der Datenschutzerklärung von Stripe unter:{" "}
              <a
                href="https://stripe.com/de/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-purple hover:underline"
              >
                https://stripe.com/de/privacy
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Ihre Rechte
            </h2>
            <p>
              Sie haben folgende Rechte hinsichtlich Ihrer bei uns gespeicherten
              personenbezogenen Daten:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>Recht auf Auskunft</li>
              <li>Recht auf Berichtigung oder Löschung</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
            </ul>
            <p className="mt-4">
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu
              beschweren.
            </p>
          </section>

          <section className="mt-8 p-4 bg-muted/50 rounded-lg border">
            <p className="text-sm text-foreground">
              <strong>Stand:</strong> Januar 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
