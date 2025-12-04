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
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Reise zur Powerzentrale</h1>
            <p className="text-xl text-white mb-2">Erlebnisworkshop Ernährung & Bewegung</p>
            <p className="text-lg text-white/90">Für Vorschul- und Grundschulkinder</p>
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
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              <div className="my-8 bg-primary-light p-6 rounded-lg">
                <p className="text-lg mb-6 text-white leading-relaxed">
                  Tief im Bauch jedes Kindes steckt sie – die <strong>Powerzentrale</strong>, das geheime Kraftwerk des Körpers.
                  Doch Zucker, Müdigkeit und Bewegungsmangel bremsen sie aus.
                  Captain Apfel und seine Crew zeigen, wie Kinder ihre Powerzentrale wieder aktivieren – mit Spaß, Bewegung und Entdeckergeist.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-white">Was Kinder erleben</h2>
                
                <p className="mb-4 text-white leading-relaxed">
                  Im Workshop entdecken die Kinder, wie Ernährung, Bewegung und Gefühle miteinander verbunden sind – nicht durch Erklärungen, sondern durch Erleben, Spielen und Staunen.
                </p>
                
                <p className="mb-2 text-white">Sie erforschen:</p>
                <p className="mb-2 text-white">– Wie viel Obst und Gemüse braucht mein Körper?</p>
                <p className="mb-2 text-white">– Wieviel Zucker steckt in Cola & Co.?</p>
                <p className="mb-6 text-white">– Was bringt meine Powerzentrale zum Leuchten?</p>
                
                <p className="mb-6 text-white leading-relaxed">
                  Captain Apfel nimmt sie mit auf eine Fantasiereise voller Wissen, Bewegung und Freude.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-white">Die 5 Power-Level</h2>
                
                <p className="mb-2 text-white"><strong>1. Bewegen & Tanzen</strong> – stärkt Körpergefühl und Motorik.</p>
                <p className="mb-2 text-white"><strong>2. Entdecken & Staunen</strong> – fördert Wissen und Neugier.</p>
                <p className="mb-2 text-white"><strong>3. Teamgefühl erleben</strong> – stärkt Zusammenhalt.</p>
                <p className="mb-2 text-white"><strong>4. Mitmachen & Vorbereiten</strong> – vermittelt Verantwortung und Selbstwirksamkeit.</p>
                <p className="mb-6 text-white"><strong>5. Probieren & Genießen</strong> – öffnet neue Geschmackserlebnisse und stärkt Selbstvertrauen.</p>
                
                <h2 className="text-2xl font-bold mb-4 text-white">Ziel & Nutzen</h2>
                
                <p className="mb-4 text-white leading-relaxed">
                  Kitas und Schulen erhalten ein Teilnahme-Zertifikat – ein Zeichen für gelebte Prävention und ganzheitliche Gesundheitsförderung.
                  Ideal für Eingangsbereiche, Team-Portfolios oder Nachweise im Bereich „Kita-Gesundheit".
                </p>
                
                <p className="text-white leading-relaxed">
                  Captain Apfel vermittelt gesunde Gewohnheiten erlebnisreich, kindgerecht und mit echtem Aha-Effekt.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link 
                to="/kontakt" 
                className="inline-block bg-[hsl(25_30%_88%)] text-[hsl(25_30%_25%)] px-8 py-4 rounded-full font-semibold hover:bg-[hsl(25_35%_82%)] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
              >
                Jetzt Kita vormerken und Teil der Power-Mission werden!
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