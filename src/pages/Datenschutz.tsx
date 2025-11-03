
import { useEffect } from "react";

const Datenschutz = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Datenschutz | Tankzeile";
  }, []);

  return (
    <div className="min-h-screen py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
          
          <div className="prose max-w-none">
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              Tamara Hillmann<br />
              Friedrichshagener Straße 5 G<br />
              12555 Berlin<br />
              E-Mail: kontakt@captain-apfel.de
            </p>

            <h2>2. Hosting und Bereitstellung der Website</h2>
            <p>
              Diese Website wird über die Plattform Loveable betrieben.
              Die technische Infrastruktur wird u. a. durch Strato AG (Otto-Ostrowski-Str. 7, 10249 Berlin) und GitHub, Inc. (88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA) bereitgestellt.
            </p>
            <p>
              Beim Aufruf der Website werden automatisch durch Ihren Browser folgende Daten übermittelt und in sogenannten Server-Logfiles gespeichert:
            </p>
            <ul>
              <li>IP-Adresse des Endgeräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene Seite oder Datei (Name / URL)</li>
              <li>Referrer-URL (zuvor besuchte Seite)</li>
              <li>verwendeter Browser und Betriebssystem</li>
            </ul>
            <p>
              Diese Daten werden zur Sicherstellung des technischen Betriebs, zur Systemsicherheit und zur Fehleranalyse verarbeitet.
              Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und funktionsfähigen Online-Angebot).
            </p>

            <h2>3. Kontaktaufnahme</h2>
            <p>
              Bei einer Kontaktaufnahme per E-Mail werden die von Ihnen übermittelten personenbezogenen Daten (z. B. Name, E-Mail-Adresse, Nachricht) verarbeitet, um Ihr Anliegen zu bearbeiten.
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung / Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).
            </p>

            <h2>4. Cookies</h2>
            <p>
              Diese Website kann Cookies verwenden, um bestimmte Funktionen bereitzustellen oder die Nutzung zu verbessern.
              Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.
            </p>
            <p>
              Sie können die Speicherung von Cookies in den Einstellungen Ihres Browsers jederzeit deaktivieren oder bereits gesetzte Cookies löschen.
              Bitte beachten Sie, dass bei deaktivierten Cookies einzelne Funktionen der Website eingeschränkt sein können.
            </p>
            <p>
              Rechtsgrundlage:
            </p>
            <ul>
              <li>Art. 6 Abs. 1 lit. f DSGVO für technisch notwendige Cookies</li>
              <li>Art. 6 Abs. 1 lit. a DSGVO für zustimmungspflichtige Cookies</li>
            </ul>

            <h2>5. Weitergabe von Daten</h2>
            <p>
              Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn dies gesetzlich vorgeschrieben ist, zur Vertragsabwicklung erforderlich ist oder Sie ausdrücklich eingewilligt haben.
            </p>
            <p>
              Eine Übermittlung personenbezogener Daten in Drittländer (außerhalb der EU / des EWR) findet nur statt, sofern geeignete Garantien nach Art. 44 ff. DSGVO bestehen.
            </p>

            <h2>6. Betroffenenrechte</h2>
            <p>Sie haben das Recht:</p>
            <ul>
              <li>gemäß Art. 15 DSGVO Auskunft über Ihre verarbeiteten Daten zu verlangen,</li>
              <li>gemäß Art. 16 DSGVO Berichtigung unrichtiger Daten zu verlangen,</li>
              <li>gemäß Art. 17 DSGVO Löschung Ihrer gespeicherten Daten zu verlangen,</li>
              <li>gemäß Art. 18 DSGVO Einschränkung der Verarbeitung zu verlangen,</li>
              <li>gemäß Art. 20 DSGVO Datenübertragbarkeit zu verlangen,</li>
              <li>gemäß Art. 77 DSGVO Beschwerde bei einer Datenschutzaufsichtsbehörde einzulegen.</li>
            </ul>

            <h2>7. Widerspruchsrecht</h2>
            <p>
              Sie können der Verarbeitung Ihrer personenbezogenen Daten, die auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt, jederzeit widersprechen, sofern sich aus Ihrer besonderen Situation Gründe ergeben.
              Zur Ausübung des Widerspruchsrechts genügt eine formlose Mitteilung per E-Mail an kontakt@captain-apfel.de.
            </p>

            <h2>8. Datensicherheit</h2>
            <p>
              Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten vor Manipulation, Verlust, Zerstörung oder unbefugtem Zugriff zu schützen.
              Diese Sicherheitsmaßnahmen werden entsprechend dem Stand der Technik fortlaufend verbessert.
            </p>

            <h2>9. Aktualität und Änderungen</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand: November 2025.
              Durch Weiterentwicklung unserer Website oder geänderte gesetzliche Vorgaben kann eine Anpassung erforderlich werden.
              Die jeweils aktuelle Version finden Sie jederzeit auf dieser Website. Hinweise zum Urheberrecht und Markenschutz entnehmen Sie bitte dem Impressum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
