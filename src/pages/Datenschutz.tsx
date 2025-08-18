
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
              Friedrichshagener Straße 5 G, 12555 Berlin<br />
              E-Mail: tankzeile@gmx.de
            </p>

            <h2>2. Hosting und Bereitstellung der Website</h2>
            <p>
              Unsere Website wird über die Plattform Loveable bereitgestellt. Die technische Infrastruktur wird dabei u. a. durch Strato und GitHub unterstützt. Bei jedem Aufruf der Website werden automatisch Daten durch den Browser des Besuchers an die Server übertragen und in sogenannten Server-Logfiles gespeichert. Erfasst werden können dabei:
            </p>
            <ul>
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Seite oder Datei</li>
              <li>Referrer-URL (die zuvor besuchte Seite)</li>
              <li>verwendeter Browser und ggf. Betriebssystem</li>
            </ul>
            <p>
              Die Verarbeitung dieser Daten ist notwendig, um den Betrieb der Website sicherzustellen (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO).
            </p>

            <h2>3. Kontaktaufnahme</h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen übermittelten personenbezogenen Daten (z. B. Name, E-Mail-Adresse, Inhalt der Nachricht) gespeichert und verarbeitet, um Ihre Anfrage zu beantworten.
            </p>
            <p>
              Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder -anbahnung).
            </p>

            <h2>4. Cookies</h2>
            <p>
              Unsere Website kann Cookies verwenden, um Funktionen bereitzustellen oder die Nutzung zu verbessern. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.
            </p>
            <p>
              Sie können die Speicherung von Cookies in den Einstellungen Ihres Browsers jederzeit deaktivieren. Bitte beachten Sie, dass dadurch ggf. einzelne Funktionen der Website eingeschränkt werden können.
            </p>
            <p>
              (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO bei technisch notwendigen Cookies, Art. 6 Abs. 1 lit. a DSGVO bei zustimmungspflichtigen Cookies).
            </p>

            <h2>5. Weitergabe von Daten</h2>
            <p>
              Eine Weitergabe Ihrer persönlichen Daten an Dritte erfolgt nicht, außer es besteht eine gesetzliche Verpflichtung oder es ist zur Erfüllung des Vertrags erforderlich.
            </p>

            <h2>6. Betroffenenrechte</h2>
            <p>Sie haben das Recht:</p>
            <ul>
              <li>gemäß Art. 15 DSGVO Auskunft über Ihre verarbeiteten Daten zu verlangen,</li>
              <li>gemäß Art. 16 DSGVO Berichtigung unrichtiger Daten zu verlangen,</li>
              <li>gemäß Art. 17 DSGVO Löschung Ihrer gespeicherten Daten zu verlangen,</li>
              <li>gemäß Art. 18 DSGVO Einschränkung der Verarbeitung zu verlangen,</li>
              <li>gemäß Art. 20 DSGVO Datenübertragbarkeit zu verlangen,</li>
              <li>gemäß Art. 77 DSGVO Beschwerde bei einer Aufsichtsbehörde einzulegen.</li>
            </ul>

            <h2>7. Widerspruchsrecht</h2>
            <p>
              Wenn Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, jederzeit Widerspruch einzulegen.
            </p>

            <h2>8. Datensicherheit</h2>
            <p>
              Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen Manipulation, Verlust oder unbefugten Zugriff zu schützen. Diese Maßnahmen werden entsprechend dem Stand der Technik fortlaufend angepasst.
            </p>

            <h2>9. Aktualität</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand: August 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
