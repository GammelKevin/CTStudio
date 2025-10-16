import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB - CT Studio",
  description: "Allgemeine Geschäftsbedingungen von CT Studio",
};

export default function AGBPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Geltungsbereich
            </h2>
            <p>
              Die nachfolgenden Allgemeinen Geschäftsbedingungen (AGB) gelten
              für alle Verträge zwischen CT Studio (nachfolgend „Auftragnehmer")
              und seinen Kunden (nachfolgend „Auftraggeber") über die Erbringung
              von Dienstleistungen im Bereich der Webentwicklung und
              verwandten Dienstleistungen.
            </p>
            <p className="mt-4">
              Diese AGB gelten ausschließlich. Entgegenstehende oder von diesen
              AGB abweichende Bedingungen des Auftraggebers werden nicht
              anerkannt, es sei denn, der Auftragnehmer stimmt ihrer Geltung
              ausdrücklich schriftlich zu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Vertragsabschluss
            </h2>
            <p>
              Die Darstellung der Produkte und Dienstleistungen auf der Website
              stellt kein rechtlich bindendes Angebot dar, sondern einen
              unverbindlichen Online-Katalog.
            </p>
            <p className="mt-4">
              Durch Anklicken des Buttons „Kaufen" oder „Buchen" gibt der
              Auftraggeber ein verbindliches Angebot zum Abschluss eines
              Vertrages ab. Der Auftragnehmer kann dieses Angebot innerhalb von
              5 Tagen durch Zusendung einer Auftragsbestätigung per E-Mail oder
              durch Erbringung der Dienstleistung annehmen.
            </p>
            <p className="mt-4">
              Der Vertragstext wird nach dem Vertragsabschluss gespeichert und
              dem Auftraggeber nach Absendung seiner Bestellung per E-Mail
              zugeschickt. Die AGB werden dem Auftraggeber vor Vertragsabschluss
              zur Verfügung gestellt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Leistungsbeschreibung
            </h2>
            <p>
              Der Auftragnehmer bietet verschiedene Website-Pakete und
              Web-Entwicklungsdienstleistungen an. Die jeweiligen
              Leistungsinhalte ergeben sich aus der Produktbeschreibung auf der
              Website sowie aus dem individuellen Angebot.
            </p>
            <p className="mt-4">
              Der Auftragnehmer behält sich das Recht vor, die angebotenen
              Dienstleistungen jederzeit ohne Angabe von Gründen zu ändern oder
              einzustellen, sofern dies für den Auftraggeber zumutbar ist und
              bestehende Verträge nicht beeinträchtigt werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Preise und Zahlungsbedingungen
            </h2>
            <p>
              Die angegebenen Preise verstehen sich in Euro und sind
              Endpreise inklusive der gesetzlichen Mehrwertsteuer, sofern nicht
              anders angegeben.
            </p>
            <p className="mt-4">
              Die Zahlung erfolgt über den Zahlungsdienstleister Stripe. Es
              gelten die entsprechenden Zahlungsbedingungen von Stripe.
            </p>
            <p className="mt-4">
              Bei individuellen Projekten kann eine Anzahlung von bis zu 50%
              der Gesamtsumme fällig werden. Die Restzahlung erfolgt nach
              Fertigstellung und Abnahme des Projekts.
            </p>
            <p className="mt-4">
              Bei Zahlungsverzug werden Verzugszinsen in Höhe von 5
              Prozentpunkten über dem Basiszinssatz berechnet. Die
              Geltendmachung weiterer Verzugsschäden bleibt vorbehalten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Liefer- und Leistungsfristen
            </h2>
            <p>
              Die Liefer- und Leistungsfristen werden individuell vereinbart
              und sind in der Auftragsbestätigung angegeben. Der Auftragnehmer
              bemüht sich, vereinbarte Fristen einzuhalten.
            </p>
            <p className="mt-4">
              Die Einhaltung von Fristen setzt voraus, dass der Auftraggeber
              alle notwendigen Informationen, Materialien und Freigaben
              rechtzeitig zur Verfügung stellt.
            </p>
            <p className="mt-4">
              Bei höherer Gewalt, Arbeitskampfmaßnahmen, Betriebsstörungen und
              anderen unvorhersehbaren Ereignissen verlängern sich die
              Liefer- und Leistungsfristen angemessen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Mitwirkungspflichten des Auftraggebers
            </h2>
            <p>
              Der Auftraggeber verpflichtet sich, alle für die Durchführung des
              Projekts erforderlichen Informationen, Materialien (Texte, Bilder,
              Logos etc.) und Zugangsdaten rechtzeitig und vollständig zur
              Verfügung zu stellen.
            </p>
            <p className="mt-4">
              Der Auftraggeber versichert, dass er über alle erforderlichen
              Rechte an den zur Verfügung gestellten Materialien verfügt und
              stellt den Auftragnehmer von allen Ansprüchen Dritter frei, die
              aus der Verwendung dieser Materialien entstehen könnten.
            </p>
            <p className="mt-4">
              Verzögerungen, die durch verspätete oder unvollständige
              Mitwirkung des Auftraggebers entstehen, gehen nicht zu Lasten des
              Auftragnehmers und können zu einer Anpassung der vereinbarten
              Fristen und Vergütungen führen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Abnahme und Änderungswünsche
            </h2>
            <p>
              Der Auftraggeber ist verpflichtet, die erbrachten Leistungen
              innerhalb von 14 Tagen nach Fertigstellung zu überprüfen und
              schriftlich abzunehmen oder begründete Änderungswünsche
              mitzuteilen.
            </p>
            <p className="mt-4">
              Im Rahmen der vereinbarten Pakete sind in der Regel 2
              Korrekturschleifen enthalten. Weitere Änderungswünsche können
              nach Aufwand gesondert berechnet werden.
            </p>
            <p className="mt-4">
              Nach Abnahme oder stillschweigender Abnahme (nach Ablauf der
              14-Tages-Frist) gilt die Leistung als genehmigt und vertragsgemäß
              erbracht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Urheberrecht und Nutzungsrechte
            </h2>
            <p>
              Alle vom Auftragnehmer erstellten Werke (Designs, Codes, Grafiken
              etc.) unterliegen dem Urheberrecht. Der Auftragnehmer räumt dem
              Auftraggeber nach vollständiger Bezahlung ein einfaches,
              zeitlich und räumlich unbegrenztes Nutzungsrecht ein.
            </p>
            <p className="mt-4">
              Der Auftraggeber darf die erstellten Werke nur für den vereinbarten
              Zweck verwenden. Eine Weitergabe an Dritte oder eine anderweitige
              Verwertung bedarf der vorherigen schriftlichen Zustimmung des
              Auftragnehmers.
            </p>
            <p className="mt-4">
              Der Auftragnehmer behält sich das Recht vor, die erstellten Werke
              zu Referenzzwecken zu verwenden und auf seiner Website oder in
              Präsentationen zu zeigen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Gewährleistung und Haftung
            </h2>
            <p>
              Der Auftragnehmer gewährleistet, dass die erstellten Websites und
              Anwendungen zum Zeitpunkt der Übergabe frei von wesentlichen
              Mängeln sind und die vereinbarte Beschaffenheit aufweisen.
            </p>
            <p className="mt-4">
              Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme. Bei
              berechtigten Mängelrügen wird der Auftragnehmer nach seiner Wahl
              nachbessern oder die Leistung neu erbringen.
            </p>
            <p className="mt-4">
              Die Haftung des Auftragnehmers für Schäden, gleich aus welchem
              Rechtsgrund, ist auf Vorsatz und grobe Fahrlässigkeit beschränkt.
              Dies gilt nicht für Schäden aus der Verletzung des Lebens, des
              Körpers oder der Gesundheit sowie bei Verletzung wesentlicher
              Vertragspflichten.
            </p>
            <p className="mt-4">
              Im Falle der leicht fahrlässigen Verletzung wesentlicher
              Vertragspflichten ist die Haftung auf den bei Vertragsabschluss
              vorhersehbaren, vertragstypischen Schaden begrenzt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Wartung und Support
            </h2>
            <p>
              Sofern vereinbart, bietet der Auftragnehmer Wartungs- und
              Support-Leistungen an. Der Umfang und die Dauer dieser
              Leistungen werden individuell vereinbart.
            </p>
            <p className="mt-4">
              Wartungs- und Support-Leistungen umfassen in der Regel:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>Behebung von technischen Fehlern</li>
              <li>Sicherheitsupdates</li>
              <li>Kleine Anpassungen und Änderungen</li>
              <li>Technischer Support per E-Mail</li>
            </ul>
            <p className="mt-4">
              Umfangreichere Änderungen und Erweiterungen werden gesondert
              berechnet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              11. Vertraulichkeit
            </h2>
            <p>
              Beide Vertragsparteien verpflichten sich, alle im Rahmen der
              Zusammenarbeit bekannt gewordenen vertraulichen Informationen
              streng vertraulich zu behandeln und nur im Rahmen der
              Vertragserfüllung zu verwenden.
            </p>
            <p className="mt-4">
              Diese Verpflichtung besteht auch nach Beendigung des
              Vertragsverhältnisses fort.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              12. Widerrufsrecht für Verbraucher
            </h2>
            <p>
              Verbraucher haben ein 14-tägiges Widerrufsrecht gemäß den
              gesetzlichen Bestimmungen. Die Widerrufsfrist beträgt vierzehn
              Tage ab dem Tag des Vertragsabschlusses.
            </p>
            <p className="mt-4">
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer
              eindeutigen Erklärung (z. B. per E-Mail) über Ihren Entschluss,
              diesen Vertrag zu widerrufen, informieren.
            </p>
            <p className="mt-4">
              Das Widerrufsrecht erlischt vorzeitig bei Dienstleistungen, wenn
              der Auftragnehmer die Dienstleistung vollständig erbracht hat und
              mit der Ausführung der Dienstleistung erst begonnen hat, nachdem
              Sie dazu Ihre ausdrückliche Zustimmung gegeben haben und
              gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie Ihr
              Widerrufsrecht bei vollständiger Vertragserfüllung verlieren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              13. Kündigung
            </h2>
            <p>
              Beide Vertragsparteien können den Vertrag aus wichtigem Grund
              außerordentlich kündigen. Ein wichtiger Grund liegt insbesondere
              vor, wenn:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>
                der Auftraggeber mit der Zahlung von zwei aufeinanderfolgenden
                Raten in Verzug ist
              </li>
              <li>
                eine Vertragspartei gegen wesentliche Vertragspflichten verstößt
                und diese Verletzung trotz Abmahnung nicht binnen angemessener
                Frist abstellt
              </li>
              <li>
                über das Vermögen einer Vertragspartei das Insolvenzverfahren
                eröffnet wird
              </li>
            </ul>
            <p className="mt-4">
              Bei wartungspflichtigen Verträgen beträgt die ordentliche
              Kündigungsfrist 3 Monate zum Vertragsende, sofern nicht anders
              vereinbart.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              14. Schlussbestimmungen
            </h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss
              des UN-Kaufrechts.
            </p>
            <p className="mt-4">
              Sofern der Auftraggeber Kaufmann, juristische Person des
              öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist,
              ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus
              diesem Vertrag der Sitz des Auftragnehmers.
            </p>
            <p className="mt-4">
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
              werden, berührt dies die Wirksamkeit der übrigen Bestimmungen
              nicht. Die unwirksame Bestimmung ist durch eine wirksame zu
              ersetzen, die dem wirtschaftlichen Zweck der unwirksamen
              Bestimmung am nächsten kommt.
            </p>
            <p className="mt-4">
              Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.
              Dies gilt auch für die Änderung dieser Schriftformklausel.
            </p>
          </section>

          <section className="mt-8 p-4 bg-muted/50 rounded-lg border">
            <p className="text-sm text-foreground">
              <strong>Stand:</strong> Januar 2025
            </p>
            <p className="text-sm mt-2">
              CT Studio<br />
              Flurweg 13<br />
              94527 Aholming<br />
              E-Mail: kundenservice@ct-studio.store
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
