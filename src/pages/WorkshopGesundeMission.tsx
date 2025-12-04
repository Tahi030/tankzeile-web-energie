import { useEffect } from "react";
import { Link } from "react-router-dom";
import CustomerFeedback from "@/components/CustomerFeedback";
import tomatenraumschiff from "@/assets/tomatenraumschiff-workshop.svg";

const WorkshopGesundeMission = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Workshop - auf gesunder Mission | Tankzeile";
  }, []);

  return (
    <div className="min-h-screen bg-muted relative overflow-hidden">
      {/* Tomatenraumschiff mit Treibstoff-Kringel */}
      <div className="absolute top-4 left-2 sm:top-6 sm:left-4 md:top-8 md:left-8 z-10 pointer-events-none">
        <div className="relative">
          {/* Roter Treibstoff-Kringel */}
          <svg 
            className="absolute -right-4 sm:-right-6 md:-right-8 top-1/2 -translate-y-1/2 w-12 h-8 sm:w-16 sm:h-10 md:w-20 md:h-12 -z-10"
            viewBox="0 0 80 40" 
            fill="none"
          >
            <path 
              d="M5 20 Q15 5, 25 20 T45 20 T65 20 T80 20" 
              stroke="hsl(var(--destructive))" 
              strokeWidth="4" 
              strokeLinecap="round"
              fill="none"
              className="animate-pulse"
              style={{ filter: 'blur(1px)' }}
            />
            <path 
              d="M10 20 Q20 30, 30 20 T50 20 T70 20" 
              stroke="hsl(var(--destructive))" 
              strokeWidth="3" 
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
              style={{ filter: 'blur(2px)' }}
            />
          </svg>
          {/* Tomatenraumschiff */}
          <img 
            src={tomatenraumschiff} 
            alt="Tomatenraumschiff" 
            className="w-16 h-auto sm:w-20 md:w-28 lg:w-32 rotate-[15deg]"
          />
        </div>
      </div>

      {/* Hero Section - harmonisch ohne harte Farbgrenze */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center pl-16 sm:pl-20 md:pl-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground font-luckiest">Reise zur Powerzentrale</h1>
            <p className="text-xl text-muted-foreground mb-2">Erlebnisworkshop Ernährung & Bewegung</p>
            <p className="text-lg text-muted-foreground/80">Kitas (Vorschule), Familienzentren und Grundschulen (Klasse 1 & 2)</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-12 md:pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              <div className="my-8 bg-primary-light p-6 rounded-lg">
                <p className="text-lg mb-6 text-white leading-relaxed">
                  Tief im Bauch jedes Kindes steckt sie – die <strong>Powerzentrale</strong>, das geheime Kraftwerk des Körpers.
                  Doch Zucker, Müdigkeit und Bewegungsmangel bremsen sie aus.
                  Captain Apfel und seine Crew zeigen, wie Kinder ihre Powerzentrale wieder aktivieren – mit Spaß, Bewegung und Entdeckergeist.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-accent">Was Kinder erleben</h2>
                
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
                
                <h2 className="text-2xl font-bold mb-4 text-accent">Die 5 Power-Level</h2>
                
                <p className="mb-2 text-white"><strong>1. Bewegen & Tanzen</strong> – stärkt Körpergefühl und Motorik.</p>
                <p className="mb-2 text-white"><strong>2. Entdecken & Staunen</strong> – fördert Wissen und Neugier.</p>
                <p className="mb-2 text-white"><strong>3. Teamgefühl erleben</strong> – stärkt Zusammenhalt.</p>
                <p className="mb-2 text-white"><strong>4. Mitmachen & Vorbereiten</strong> – vermittelt Verantwortung und Selbstwirksamkeit.</p>
                <p className="mb-6 text-white"><strong>5. Probieren & Genießen</strong> – öffnet neue Geschmackserlebnisse und stärkt Selbstvertrauen.</p>
                
                <h2 className="text-2xl font-bold mb-4 text-accent">Ziel & Nutzen</h2>
                
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