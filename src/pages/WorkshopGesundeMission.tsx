import { useEffect } from "react";
import { Link } from "react-router-dom";
import CustomerFeedback from "@/components/CustomerFeedback";
import powerzentraleCharacter from "@/assets/powerzentrale-character.svg";

const WorkshopGesundeMission = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Workshop - auf gesunder Mission | Tankzeile";
  }, []);

  return (
    <div className="min-h-screen bg-muted">
      {/* Hero Section */}
      <section className="pt-8 pb-6 md:pt-12 md:pb-8">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground font-luckiest">Reise zur Powerzentrale</h1>
            <p className="text-xl text-muted-foreground mb-2">Erlebnisworkshop Ernährung & Bewegung</p>
            <p className="text-lg text-muted-foreground/80">Kitas (Vorschule), Familienzentren und Grundschulen (Klasse 1 & 2)</p>
          </div>
        </div>
      </section>

      {/* Powerzentrale Character */}
      <div className="flex justify-center items-center py-6 md:py-10">
        <img 
          src={powerzentraleCharacter} 
          alt="Powerzentrale" 
          className="w-52 h-auto sm:w-64 md:w-80 lg:w-96"
        />
      </div>

      {/* Main Content */}
      <section className="pb-12 md:pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              <div className="my-8 bg-primary-light p-6 rounded-lg">
                <p className="text-lg mb-6 text-white leading-relaxed">
                  Wusstest du, dass in jedem Kinderbauch ein Kraftwerk steckt? Das ist die <strong>Powerzentrale</strong>. Sie ist der Motor für Energie, Konzentration und gute Laune.
                </p>
                
                <p className="mb-6 text-white leading-relaxed">
                  Doch oft wird sie ausgebremst. Captain Apfel und seine Crew zeigen den Kindern, wie sie ihre Powerzentrale wieder aktivieren. Statt Belehrungen gibt es hier Spaß und eine einzigartige Abenteuerreise in den Körper.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-accent">So lernen die Kinder (Die Story Methode)</h2>
                
                <p className="mb-4 text-white leading-relaxed">
                  Schluss mit trockener Theorie. Fantastische Bilder und eine spannende Geschichte machen Wissen verständlich. Die Kinder unterscheiden spielerisch zwischen „Superkraft Nahrung" und „Energieräubern".
                </p>
                
                <p className="mb-2 text-white font-semibold">Dabei erforschen die Kinder</p>
                <p className="mb-2 text-white"><strong>Der richtige Treibstoff:</strong> Was bringt mich wirklich nach vorne?</p>
                <p className="mb-2 text-white"><strong>Die Bremsklötze:</strong> Warum machen mich Zucker & Co. eigentlich müde?</p>
                <p className="mb-6 text-white"><strong>Das Körpergefühl:</strong> Wie fühlt es sich an, wenn meine Powerzentrale leuchtet?</p>
                
                <h2 className="text-2xl font-bold mb-4 text-accent">Die 5 Power Level des Workshops</h2>
                
                <p className="mb-2 text-white"><strong>1. Bewegen & Tanzen</strong> – Stärkt Körpergefühl und Motorik.</p>
                <p className="mb-2 text-white"><strong>2. Entdecken & Staunen</strong> – Vermittelt Wissen durch interaktives Storytelling.</p>
                <p className="mb-2 text-white"><strong>3. Teamgefühl erleben</strong> – Fördert den Zusammenhalt in der Gruppe.</p>
                <p className="mb-2 text-white"><strong>4. Mitmachen & Vorbereiten</strong> – Stärkt Verantwortung und Selbstwirksamkeit.</p>
                <p className="mb-6 text-white"><strong>5. Probieren & Genießen</strong> – Öffnet neue Geschmackserlebnisse und stärkt das Selbstvertrauen.</p>
                
                <h2 className="text-2xl font-bold mb-4 text-accent">Ziel & Nutzen für Ihre Einrichtung</h2>
                
                <p className="mb-4 text-white leading-relaxed">
                  Kitas und Schulen erhalten im Anschluss ein Teilnahme Zertifikat. Es ist ein sichtbares Zeichen für gelebte Prävention und ganzheitliche Gesundheitsförderung. Ideal für den Eingangsbereich oder das Team Portfolio.
                </p>
                
                <p className="text-white leading-relaxed font-semibold">
                  Captain Apfel macht gesunde Gewohnheiten zum Abenteuer. Mit Aha Effekt, der hängen bleibt.
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