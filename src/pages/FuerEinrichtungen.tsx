
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
              
              <div className="my-8">
                <h2>Einsetzbar in:</h2>
                <ul>
                  <li>Kitas</li>
                  <li>Familienzentren</li>
                  <li>Frühförderstellen</li>
                  <li>Wohngruppen</li>
                  <li>und überall, wo Kinder begleitet werden</li>
                </ul>
              </div>
              
              
              
              <h3>Captain Apfel und das Gemüse-Abenteuer</h3>
              <p>
                In diesem 60-minütigen Workshop lernen Kinder spielerisch die Vielfalt von Gemüse kennen. Mit Bewegungsspielen und multisensorischen Erfahrungen erleben sie, wie Gemüse schmeckt, riecht und sich anfühlt. Captain Apfel führt die Kinder auf eine spannende Entdeckungsreise.
              </p>
              
              <h3>Die Zauberkraft gesunder Ernährung</h3>
              <p>
                Dieser 90-minütige Workshop verbindet Geschichten, Spiele und praktische Erfahrungen. Die Kinder lernen, welche "Zauberkräfte" in verschiedenen Lebensmitteln stecken und wie diese ihren Körper stark machen. Inklusive einer kleinen gemeinsamen Zubereitung.
              </p>
              
              <h3>Achtsames Essen erleben</h3>
              <p>
                Ein ruhiger Workshop, der Kindern beibringt, bewusst zu essen und ihre Sinne wahrzunehmen. Mit einfachen Übungen zur Achtsamkeit entdecken die Kinder, wie sie beim Essen entspannen können und mehr Genuss erfahren.
              </p>
            </div>

            <CustomerFeedback />

            <div className="mt-12 text-center">
              <Link to="/kontakt" className="btn-primary">
                Interesse an einem Workshop? Kontaktieren Sie mich!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FuerEinrichtungen;
