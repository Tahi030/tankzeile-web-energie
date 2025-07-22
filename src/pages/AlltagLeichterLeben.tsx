
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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

            <div className="mt-12 text-center">
              <Link to="/kontakt" className="btn-primary">
                Interesse geweckt? Kontaktiere mich
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Download Section */}
      <section className="py-12 md:py-16 bg-accent-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-6">
                Deine Alltagshelfer to go!
              </h2>
              <p className="text-gray-600 mb-8">
                Hier findest du regelmäßig kostenlose PDF-Dateien voller Ideen, Tipps und Informationen, die deinen Alltag leichter, gesünder und einfach schöner machen. Hol dir gleich deine erste Datei – und schau gern immer wieder vorbei, bald warten weitere kleine Helfer auf dich.
              </p>
              <p className="text-gray-600 mb-8">
                Viel Spaß beim Entdecken!
              </p>
              
              <div className="bg-gradient-to-r from-primary-light/20 to-secondary-light/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-4">
                  Ideen für Kita-Brotdosen
                </h3>
                <p className="text-gray-600 mb-6">
                  Praktische Tipps und kreative Ideen für abwechslungsreiche und gesunde Brotdosen, die Kindern schmecken und Eltern entlasten.
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src="/lovable-uploads/501bee46-234c-4b72-94fa-1f3ffe19becf.png" 
                    alt="Bunte Kita-Brotdosen mit gesunden Snacks" 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <a 
                    href="/pdfs/lieblingsdose.pdf" 
                    download
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
                  >
                    Deine Lieblingsdose - jetzt herunterladen
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                </div>
              </div>
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
