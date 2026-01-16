
import { useEffect } from "react";

const Datenschutz = () => {
  useEffect(() => {
    document.title = "Datenschutz | Captain Apfel";
  }, []);

  return (
    <div className="min-h-screen py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
          
            <div className="prose max-w-none">
              <h2>1. Datenschutz auf einen Blick</h2>
              <h3>Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie der unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
              
              <h3>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch die Websitebetreiberin. Die Kontaktdaten können dem Impressum dieser Website entnommen werden.
              </p>

              <h2>2. Hosting und Content Delivery Networks (CDN)</h2>
              <h3>Hosting über Lovable</h3>
              <p>
                Diese Website wird bei einem externen Dienstleister (Hoster) gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
              <p>
                <strong>Der Hoster ist:</strong><br />
                Lovable
              </p>
              <p>
                Die Nutzung des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung des Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>

              <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>
              
              <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
              </p>

              <h2>4. Zahlungsabwicklung und Reseller</h2>
              <h3>Abwicklung über Copecart</h3>
              <p>
                Auf dieser Website werden digitale Produkte (z.B. PDF-Ratgeber) zum Kauf angeboten. Es wird ausdrücklich darauf hingewiesen, dass der Verkauf und die Zahlungsabwicklung nicht direkt über die Websitebetreiberin erfolgen, sondern über den Reseller-Partner:
              </p>
              <p>
                <strong>CopeCart GmbH</strong><br />
                Ufnaustraße 10<br />
                10553 Berlin<br />
                Deutschland
              </p>
              <p>
                Wenn Sie auf einen Bestell-Button („Kaufen", „Sichern" etc.) klicken, verlassen Sie diese Website und werden auf die Verkaufsseiten von Copecart weitergeleitet. Der Kaufvertrag kommt ausschließlich zwischen Ihnen und der CopeCart GmbH zustande.
              </p>
              
              <h3>Datenübermittlung an Copecart</h3>
              <p>
                Im Rahmen des Bestellvorgangs erhebt und verarbeitet Copecart Ihre Daten (z.B. Name, Adresse, E-Mail, Zahlungsdaten) zur Abwicklung des Kaufs und der Zahlung. Die Produktherstellerin hat keinen Zugriff auf Ihre vollständigen Zahlungsdaten (wie Kreditkartennummer). Von Copecart werden lediglich Informationen über den erfolgreichen Kauf und die Kontaktdaten (Name, E-Mail-Adresse) übermittelt, um ggf. Support bieten zu können oder (falls vereinbart) Newsletter zuzusenden.
              </p>
              <p>
                Die Übermittlung der Daten an Copecart erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsabwicklung) sowie auf Grundlage des berechtigten Interesses am Einsatz eines professionellen und sicheren Resellers (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p>
                Weitere Informationen zum Datenschutz bei Copecart finden Sie in der Datenschutzerklärung von Copecart:{" "}
                <a href="https://copecart.com/de/datenschutz" target="_blank" rel="noopener noreferrer">
                  https://copecart.com/de/datenschutz
                </a>
              </p>
              
              <h3>Auftragsverarbeitung</h3>
              <p>
                Es wurde mit Copecart ein Vertrag zur Auftragsverarbeitung (AVV) bzw. entsprechende Vereinbarungen im Rahmen der Reseller-AGB geschlossen. Dieser Vertrag gewährleistet, dass Copecart die Daten der Webseitenbesucher nur nach Weisung und unter Einhaltung der DSGVO verarbeitet.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
