import { useEffect } from "react";
import { Link } from "react-router-dom";
import CustomerFeedback from "@/components/CustomerFeedback";
import powerzentraleCharacter from "@/assets/powerzentrale-character.svg";

const WorkshopGesundeMission = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Workshop - auf gesunder Mission | Captain Apfel";
  }, []);

  return (
    <div className="min-h-screen bg-muted">
      {/* Hero Section */}
      <section className="pt-8 pb-6 md:pt-12 md:pb-8">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground font-luckiest">
              Reise zur Powerzentrale
            </h1>
            <p className="text-xl text-muted-foreground mb-2">Erlebnisworkshop Ernährung & Bewegung</p>
            <p className="text-lg text-muted-foreground/80">
              Kitas (Vorschule), Familienzentren und Grundschulen (Klasse 1 & 2)
            </p>
          </div>
        </div>
      </section>

      {/* Powerzentrale Character */}
      <div className="flex justify-center items-center py-4 md:py-6">
        <img 
          src={powerzentraleCharacter} 
          alt="Powerzentrale" 
          className="w-52 h-auto sm:w-64 md:w-80 lg:w-96"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Main Content */}
      <section className="pb-12 md:pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="mt-4 mb-8 bg-primary-light p-6 rounded-lg">
                <p className="text-base mb-6 text-white leading-relaxed">
                  Schluss mit langweiligen Vorträgen!<br />
                  Damit Wissen hängen bleibt, wird es hier anschaulich und kindgerecht vermittelt.
                </p>

                <h2 className="text-xl font-bold mb-3 text-accent">Was Kinder erleben</h2>

                <p className="text-base mb-4 text-white leading-relaxed">
                  Ernährung, Bewegung und Gefühle werden hier greifbar – beim Erleben, Spielen und Staunen.
                </p>

                <p className="text-base mb-2 text-white font-semibold">Sie erforschen:</p>
                <ul className="text-base mb-6 text-white list-disc list-inside space-y-1 ml-2">
                  <li>Wie viel Obst und Gemüse braucht mein Körper?</li>
                  <li>Wie viel Zucker steckt in Cola & Co.?</li>
                  <li>Was bringt meine Powerzentrale zum Leuchten?</li>
                  <li>Was bremst mich aus?</li>
                </ul>

                <h2 className="text-xl font-bold mb-3 text-accent">Die 5 Power Level</h2>

                <p className="text-base mb-2 text-white">
                  <strong>1. Bewegen & Tanzen</strong> – Stärkt Körpergefühl und Motorik.
                </p>
                <p className="text-base mb-2 text-white">
                  <strong>2. Entdecken & Staunen</strong> – Fördert Wissen und Neugier.
                </p>
                <p className="text-base mb-2 text-white">
                  <strong>3. Teamgefühl erleben</strong> – Stärkt den Zusammenhalt.
                </p>
                <p className="text-base mb-2 text-white">
                  <strong>4. Mitmachen & Vorbereiten</strong> – Vermittelt Verantwortung und Selbstwirksamkeit.
                </p>
                <p className="text-base mb-6 text-white">
                  <strong>5. Probieren & Genießen</strong> – Öffnet neue Geschmackserlebnisse und stärkt das
                  Selbstvertrauen.
                </p>

                <h2 className="text-xl font-bold mb-3 text-accent">Ziel & Nutzen für Ihre Einrichtung</h2>

                <p className="text-base text-white leading-relaxed">
                  Ihre Einrichtung erhält im Anschluss ein Teilnahme Zertifikat. Es ist ein sichtbares Zeichen für
                  gelebte Prävention und ganzheitliche Gesundheitsförderung. Ideal für den Eingangsbereich oder das Team
                  Portfolio.
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
