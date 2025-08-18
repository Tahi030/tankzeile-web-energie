import { useEffect } from "react";
import { Link } from "react-router-dom";
import CustomerFeedback from "@/components/CustomerFeedback";

const WorkshopGesundeMission = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Workshop - auf gesunder Mission | Tankzeile";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary-light py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Workshop - auf gesunder Mission</h1>
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
                    filter: 'url(#roughPaperWorkshop1)',
                  }}
                />
                <defs>
                  <filter id="roughPaperWorkshop1">
                    <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="1" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                  </filter>
                </defs>
              </svg>
            </div>
            <p className="text-lg text-white">
              Mit Captain Apfel & seiner Crew gesunde Ernährung spielerisch entdecken
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
                <h2 className="text-2xl font-semibold mb-4">Workshop & Bildungsprogramm: Gesunde Ernährung spielerisch entdecken - mit Captain Apfel & seiner Crew</h2>
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
                        filter: 'url(#roughPaperWorkshop2)',
                      }}
                    />
                    <defs>
                      <filter id="roughPaperWorkshop2">
                        <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="2" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <p className="mb-4">Was tut dem Körper gut? Und was bremst ihn aus?</p>
                <p className="mb-4">
                  Vorschulkinder entdecken in meinem Workshop, wie gesunde Ernährung im Alltag funktioniert – durch Spiele, Mitmachen und kindgerechte Impulse. Im Mittelpunkt stehen Fragen wie:
                </p>
                <ul className="mb-4">
                  <li>Wie viele Portionen Obst und Gemüse braucht mein Körper am Tag?</li>
                  <li>Wie viel Zucker steckt eigentlich in Cola & Co.?</li>
                </ul>
                <p className="mb-4">
                  Anhand der 5-Portionen-Regel, kleinen Experimenten und der Fantasiefigur Captain Apfel lernen die Kinder, wie sie ihren Körper liebevoll stärken können – kindgerecht, verständlich und mit Spaß. Mein Angebot richtet sich an Kitas, Vorschulen und Einrichtungen, die Kindern auf einfache und lustige Weise gesunde Essgewohnheiten vermitteln möchten.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link to="/kontakt" className="btn-primary">
                Interesse an einem Workshop? Jetzt unverbindlich anfragen
              </Link>
            </div>

            <CustomerFeedback />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopGesundeMission;