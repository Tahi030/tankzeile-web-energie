import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Users } from "lucide-react";
import CustomerFeedback from "@/components/CustomerFeedback";

const WorkshopLieblingsdose = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Workshop - Lieblingsdose | Tankzeile";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary-light py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Workshop - Lieblingsdose</h1>
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
              Kreative und gesunde Brotboxen für jeden Tag
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Captain Apfel Offer Box for Kitas/Preschool */}
              <div className="my-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-400 rounded-full p-2">
                    <Calendar className="h-6 w-6 text-yellow-800" />
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-800">Bald verfügbar: Workshop für Kitas & Vorschulen</h3>
                </div>
                
                <div className="flex justify-center mb-4">
                  <svg width="100" height="6" viewBox="0 0 100 6" className="text-yellow-600">
                    <path
                      d="M2,3 Q6,1 10,3 T20,2 Q25,4 30,3 T40,2 Q45,4 50,3 T60,2 Q65,1 70,3 T90,3 Q95,2 98,3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-70"
                      style={{
                        filter: 'url(#roughPaperNew)',
                      }}
                    />
                    <defs>
                      <filter id="roughPaperNew">
                        <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="3" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.6" />
                      </filter>
                    </defs>
                  </svg>
                </div>

                <div className="bg-white/80 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">🍎 Captain Apfel's Gesunde Brotboxen-Abenteuer</h4>
                  <p className="text-yellow-700 mb-3">
                    Ein spannendes Workshop-Abenteuer mit Captain Apfel für Vorschule und Grundschüler! Gemeinsam mit der beliebten Figur lernen die Kinder spielerisch, wie sie ihre eigenen gesunden und leckeren Brotboxen zusammenstellen können.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-yellow-700">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">Vorschule & Grundschule</span>
                    </div>
                    <div className="flex items-center gap-2 text-yellow-700">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">60 Minuten</span>
                    </div>
                    <div className="flex items-center gap-2 text-yellow-700">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">Ab 2026 verfügbar</span>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded-lg mb-3">
                    <p className="text-yellow-800 text-sm font-medium mb-2">🌟 Was die Kinder erleben:</p>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>• Abenteuer mit Captain Apfel und seiner Crew</li>
                      <li>• Praktisches Zusammenstellen von Lieblingsdosen</li>
                      <li>• Spielerisches Lernen über gesunde Zutaten</li>
                      <li>• Kreative Ideen für abwechslungsreiche Pausensnacks</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-yellow-700 mb-4 font-medium">
                    🌟 Freuen Sie sich auf 2026! Dieser Workshop wird speziell für Kindergärten und Vorschulen entwickelt.
                  </p>
                  <p className="text-yellow-600 text-sm mb-4">
                    Möchten Sie als eine der ersten Einrichtungen informiert werden, wenn der Workshop verfügbar ist?
                  </p>
                  <Link 
                    to="/kontakt" 
                    className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-yellow-800 font-medium px-6 py-3 rounded-lg transition-colors shadow-md"
                  >
                    Jetzt unverbindlich vormerken lassen
                  </Link>
                </div>
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

export default WorkshopLieblingsdose;