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
                <h2 className="text-2xl font-semibold mb-4 text-white">Reise zur Powerzentrale: Erlebnisworkshop Ernährung & Bewegung – für Vorschulkinder und Grundschule</h2>
                <p className="text-lg mb-4 text-white">mit Captain Apfel & seiner Crew</p>
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
                
                <p className="mb-4 text-white font-semibold">Was tut dem Körper gut? Und was bremst ihn aus?</p>
                
                <p className="mb-4 text-white">
                  In meinem Workshop entdecken Kinder, wie gesunde Ernährung und Bewegung im Alltag funktionieren – durch Mitmachen, Bewegung und kleine Experimente. Im Mittelpunkt stehen Fragen wie:
                </p>
                
                <p className="mb-2 text-white">Wie viele Portionen Obst und Gemüse braucht mein Körper am Tag?</p>
                <p className="mb-4 text-white">Wie viel Zucker steckt eigentlich in Cola & Co.?</p>
                
                <p className="mb-4 text-white">
                  Anhand der 5-Portionen-Regel, spannenden Spielen und der Fantasiefigur Captain Apfel lernen die Kinder, wie sie ihren Körper liebevoll stärken können – kindgerecht, verständlich und mit Spaß.
                </p>
                
                <p className="mb-3 text-white font-semibold">Der Workshop ist in 5 Level aufgebaut, die jeweils wichtige Kompetenzen fördern:</p>
                
                <p className="mb-2 text-white"><strong>Bewegen & Tanzen</strong> – stärkt Körpergefühl, Motorik und Freude an Bewegung.</p>
                <p className="mb-2 text-white"><strong>Entdecken & Staunen</strong> – fördert Neugier, Wissen und Achtsamkeit für Ernährung.</p>
                <p className="mb-2 text-white"><strong>Teamgefühl erleben</strong> – stärkt soziale Kompetenzen, Kooperation und Rücksichtnahme.</p>
                <p className="mb-2 text-white"><strong>Mitmachen & Vorbereiten</strong> – vermittelt Selbstwirksamkeit, Verantwortungsgefühl und Gemeinschaftssinn.</p>
                <p className="mb-4 text-white"><strong>Probieren & Genießen</strong> – öffnet den Blick für neue Geschmackserlebnisse und stärkt Selbstvertrauen: „Wir haben etwas geschafft!"</p>
                
                <p className="mb-4 text-white">
                  Am Ende erhalten die Einrichtungen ein Teilnahme-Zertifikat – ein sichtbares Zeichen für gelebte Prävention und ganzheitliche Gesundheitsförderung. Geeignet für den Eingangsbereich, das Team-Portfolio oder als offizieller Nachweis im Bereich „Kita-Gesundheit".
                </p>
                
                <p className="text-white">
                  Mein Angebot richtet sich an Kitas, Vorschulen und Grundschulen, die Kindern auf einfache und erlebnisreiche Weise gesunde Lebensgewohnheiten vermitteln möchten.
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