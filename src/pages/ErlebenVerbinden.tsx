
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ErlebenVerbinden = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Erleben & Verbinden | Tankzeile";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-accent-light py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Erleben & Verbinden</h1>
            <p className="text-lg mb-6">
              Für Eltern, Kinder und Einrichtungen, die Beziehung spürbar machen wollen – achtsam, spielerisch, gemeinsam.
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
                  <strong>Workshops mit Captain Apfel</strong> – Ernährung als Abenteuer für Vorschulkinder
                </li>
                <li>
                  <strong>„Die Schatz(T)ruhe"</strong> – Eltern-Kind-Achtsamkeit durch kleine Rituale
                </li>
                <li>
                  <strong>Angebote für Einrichtungen</strong> – praxisnah, kindgerecht, wirkungsvoll
                </li>
              </ul>
              
              <div className="my-8">
                <AspectRatio ratio={16/9} className="bg-muted">
                  <img 
                    src="/lovable-uploads/1af1ee6a-9bf1-4be3-8fdc-9f2186c26743.png" 
                    alt="Captain Apfel und seine Crew" 
                    className="rounded-lg shadow-md w-full h-full object-contain"
                  />
                </AspectRatio>
              </div>

              <div className="my-8 grid gap-8">
                <div className="bg-primary-light p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-4">Captain Apfel Workshops</h3>
                  <p>
                    Mit Captain Apfel und seiner Crew gehen Vorschulkinder auf eine spannende Entdeckungsreise in die Welt der gesunden Ernährung. Durch Bewegungsspiele, Geschichten und altersgerechte Mitmachaktionen erleben Kinder spielerisch, wie lecker und abenteuerlich gesundes Essen sein kann.
                  </p>
                </div>

                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-4">Die Schatz(T)ruhe</h3>
                  <p>
                    Kleine Achtsamkeitsrituale für Eltern und Kinder, die den Familienalltag bereichern. Die Schatz(T)ruhe enthält einfache Übungen und Impulse, mit denen ihr als Familie bewusster miteinander umgehen und besondere Momente schaffen könnt.
                  </p>
                </div>
              </div>

              <h3>Gemeinsam wachsen</h3>
              <p>
                Wenn wir mit unseren Kindern achtsam und bewusst Essen entdecken, legen wir den Grundstein für ein gesundes Verhältnis zu Nahrung. Die gemeinsamen Erlebnisse stärken nicht nur die Bindung, sondern geben Kindern auch Sicherheit und Orientierung für ihre Zukunft.
              </p>
              
              <h3>Verbindung statt Erziehung</h3>
              <p>
                Statt Essensregeln und Verboten setze ich auf Verbindung und Erfahrung. Wenn Kinder selbst erleben dürfen, wie gut sie sich mit gesunder Nahrung fühlen, entsteht eine nachhaltige positive Beziehung zu Ernährung – ganz ohne Zwang und Druck.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link to="/kontakt" className="btn-primary">
                Interesse an einem Workshop? Kontaktiere mich
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErlebenVerbinden;
