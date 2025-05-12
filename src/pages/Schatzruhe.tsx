
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Schatzruhe = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Schatz(t)ruhe | Tankzeile";
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-accent-light py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Schatz(t)ruhe</h1>
            <p className="text-lg mb-6">
              Für Eltern, Kinder und Einrichtungen, die Beziehung spürbar machen wollen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="my-8">
                <AspectRatio ratio={16/9} className="bg-muted">
                  <img 
                    src="/lovable-uploads/4b878cec-1fcb-4ff6-a1c2-ddce369393a7.png" 
                    alt="Mutter und Kind beim Schatz(t)ruhe Ritual" 
                    className="rounded-lg shadow-md w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>

              <div className="my-8 bg-secondary-light p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4 font-sans">Die Schatz(t)ruhe</h3>
                <p>
                  Kleine Achtsamkeitsrituale für Eltern und Kinder, die den Familienalltag bereichern. Die Schatz(T)ruhe enthält einfache Übungen und Impulse, mit denen ihr als Familie bewusster miteinander umgehen und besondere Momente schaffen könnt.
                </p>
              </div>

              <h3 className="font-bold font-sans">Gemeinsam wachsen</h3>
              <p>
                Wenn wir mit unseren Kindern achtsam und bewusst Essen entdecken, legen wir den Grundstein für ein gesundes Verhältnis zu Nahrung. Die gemeinsamen Erlebnisse stärken nicht nur die Bindung, sondern geben Kindern auch Sicherheit und Orientierung für ihre Zukunft.
              </p>
              
              <h3 className="font-bold font-sans">Verbindung statt Erziehung</h3>
              <p>
                Statt Essensregeln und Verboten setze ich auf Verbindung und Erfahrung. Wenn Kinder selbst erleben dürfen, wie gut sie sich mit gesunder Nahrung fühlen, entsteht eine nachhaltige positive Beziehung zu Ernährung – ganz ohne Zwang und Druck.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link to="/kontakt" className="btn-primary">
                Interesse an der Schatz(t)ruhe? Kontaktiere mich
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schatzruhe;
