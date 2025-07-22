
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CustomerFeedback from "@/components/CustomerFeedback";

const FuerEinrichtungen = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Für Einrichtungen | Tankzeile";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary-light py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Für alle, die mit Kindern arbeiten</h1>
            <p className="text-lg">
              Ob Kita, Familienzentrum oder soziale Einrichtung – die Tankzeile bietet Angebote, die Vorschulkinder stärken: spielerisch, altersgerecht und mit Herz.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl">
                Captain Apfel und seine Crew nehmen Kinder mit auf eine Reise zur gesunden Ernährung – mit Bewegung, Mitmachgeschichten und einfachen Impulsen für den Alltag.
              </p>
              
              <div className="my-8 bg-primary-light p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Was Sie erwarten können:</h2>
                <ul>
                  <li>Workshop-Angebote für Vorschulkinder (z. B. 60–90 Minuten)</li>
                  <li>Inhalte zum Mitnehmen (Plakate, PDFs, Gesprächsimpulse)</li>
                  <li>Achtsamkeit spielerisch vermittelt – kindgerecht und praxisnah</li>
                  <li>Verbindung von Spaß und Gesundheitsbildung</li>
                </ul>
              </div>
              
              
              
              
              
              <h3>Lust auf Zusammenarbeit? Ich auch!</h3>
              <p>
                Ich liebe es, Ideen gemeinsam zum Leben zu erwecken – mit Herz, Kreativität und Blick für das Wesentliche.
              </p>
              <p>
                Ob Kita, Schule, Unternehmen oder ein Projekt, das Ihnen am Herzen liegt: Wenn Sie etwas Sinnvolles bewegen möchten, das wirklich funktioniert – lassen Sie uns sprechen! Ich bin offen für Kooperationen, neue Formate und kreative Ansätze.
              </p>
              <p>
                Haben Sie eine Idee, brauchen frischen Input oder wollen einfach mal spinnen? Sehr gerne. Schreiben Sie mir einfach!
              </p>
              <p>
                Denn echter Wandel beginnt mit Zusammenarbeit.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link to="/kontakt" className="btn-primary">
                Interessiert an einem Workshop oder haben Sie weitere Fragen? Dann kontaktieren Sie mich
              </Link>
            </div>

            <CustomerFeedback />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FuerEinrichtungen;
