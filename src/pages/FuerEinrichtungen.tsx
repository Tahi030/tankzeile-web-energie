
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Für alle, die mit Kindern arbeiten</h1>
            <div className="flex justify-center mb-6">
              <svg width="120" height="8" viewBox="0 0 120 8" className="text-white">
                <path
                  d="M2,4 Q8,2 15,4 T30,3 Q40,5 50,4 T70,3 Q80,5 90,4 T110,3 Q115,2 118,4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                  style={{
                    filter: 'url(#roughPaperEinrichtungen1)',
                  }}
                />
                <defs>
                  <filter id="roughPaperEinrichtungen1">
                    <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="1" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                  </filter>
                </defs>
              </svg>
            </div>
            <p className="text-lg text-white">
              Ob Kita, Familienzentrum oder soziale Einrichtung – Captain Apfel & seine Crew bieten Angebote, die Vorschulkinder und Grundschüler stärken: humorvoll, altersgerecht und mit Herz.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              <div className="my-8 bg-primary-light p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Die Mission</h2>
                <div className="flex justify-center mb-6">
                  <svg width="120" height="8" viewBox="0 0 120 8" className="text-primary">
                    <path
                      d="M2,4 Q8,2 15,4 T30,3 Q40,5 50,4 T70,3 Q80,5 90,4 T110,3 Q115,2 118,4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-70"
                      style={{
                        filter: 'url(#roughPaperEinrichtungen2)',
                      }}
                    />
                    <defs>
                      <filter id="roughPaperEinrichtungen2">
                        <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="2" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <p className="mb-4">
                  Kinder sind unsere Zukunft. Deshalb will ich ihnen zeigen, wie wichtig gutes Essen ist – mit Lebensmitteln, die Kraft geben, gesund sind und Herkunft haben. Mir geht es um Qualität, um saubere Produkte und darum, Kindern etwas Wertvolles mitzugeben.
                </p>
                <p className="mb-4">
                  Ich sehe Kinder nicht als Zielgruppe für Werbung, sondern als Menschen, die noch lernen dürfen. An der Wurzel können wir etwas verändern: Wenn Kinder früh verstehen, was ihrem Körper guttut, haben sie die Chance, gesunde Gewohnheiten fürs Leben mitzunehmen.
                </p>
                <p className="mb-4">
                  Darum setze ich mich für regionale Lebensmittel, ehrliche Produkte und kleine Betriebe ein – gegen Industrie, Zuckerfallen und künstliche Zusätze. Unterstützt werden soll, was Kindern wirklich dient: Landwirte aus der Region, Start-ups mit gesunden Ideen und Einrichtungen, die diesen Weg mitgehen.
                </p>
                <p>
                  Bei Fragen oder Unsicherheiten melden Sie sich gerne. Ich freue mich auf Austausch – und vielleicht bald auf einen Besuch mit Captain Apfel & seiner Crew in Ihrer Einrichtung.
                </p>
              </div>
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
