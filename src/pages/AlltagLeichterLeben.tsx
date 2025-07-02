
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import DownloadSection from "../components/DownloadSection";
import TestimonialSection from "../components/TestimonialSection";

const AlltagLeichterLeben = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Alltag leichter leben | Tankzeile";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-light py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Alltag leichter leben</h1>
            <p className="text-lg mb-6">
              Für Familien, die Struktur, Entlastung und neue Energie suchen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2>Du findest hier:</h2>
              <ul>
                <li>
                  <strong>Die Tankbox</strong> – Wochenstruktur mit vorbereiteten Komponenten & Achtsamkeit
                </li>
                <li>
                  <strong>Kostenlose PDFs</strong> – z. B. zuckerarme Snacks, Kita-Box-Ideen
                </li>
                <li>
                  <strong>Impulse für den Alltag</strong> – einfach, wirkungsvoll, direkt umsetzbar
                </li>
              </ul>

              <div className="my-8 bg-accent-light p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-4">Die Tankbox</h3>
                <p>
                  Die Tankbox ist ein praktisches System, das dir hilft, deinen Familienalltag zu strukturieren und gleichzeitig achtsamer zu gestalten. Mit vorbereiteten Komponenten sparst du Zeit und Energie, während du dennoch gesunde, abwechslungsreiche Mahlzeiten für deine Familie zubereiten kannst.
                </p>
                <Link 
                  to="/kontakt" 
                  className="inline-flex items-center text-primary-dark font-medium mt-4"
                >
                  Mehr zur Tankbox
                  <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>

              <h3>Warum strukturierte Ernährung so wichtig ist</h3>
              <p>
                Ein geplanter Ernährungsalltag entlastet nicht nur dein Gehirn von ständigen Entscheidungen, sondern schafft auch Verlässlichkeit für deine Kinder. Wenn du weißt, was auf den Tisch kommt, reduzierst du Stress und gewinnst Zeit für das, was wirklich zählt: die gemeinsamen Momente.
              </p>
              
              <h3>Kleine Veränderungen, große Wirkung</h3>
              <p>
                Du musst nicht deinen kompletten Lebensstil umwerfen. Mit kleinen, konsequenten Schritten kannst du bereits spürbare Veränderungen erreichen. Die Tankbox-Methode setzt genau hier an: Durch kluge Vorbereitung und achtsame Rituale wird dein Alltag leichter und energiereicher.
              </p>
            </div>

            {/* Download Section integrated within the content */}
            <div className="mt-12">
              <DownloadSection />
            </div>

            <div className="mt-12 text-center">
              <Link to="/kontakt" className="btn-primary">
                Interesse geweckt? Kontaktiere mich
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />
    </div>
  );
};

export default AlltagLeichterLeben;
