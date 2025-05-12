
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const VerstehenVeraendern = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Verstehen & Verändern | Tankzeile";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary-light py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Verstehen & Verändern</h1>
            <p className="text-lg mb-6">
              Für alle, die:
            </p>
            <ul className="list-disc ml-6 mb-6 space-y-2">
              <li>Sich ausgelaugt und energielos fühlen</li>
              <li>Eine Balance zwischen Wissenschaft und Intuition suchen</li>
              <li>Bereit sind, ihre Energiequellen neu zu entdecken</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2>Du findest hier:</h2>
              <div className="my-8 bg-accent-light p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-4">Der Ratgeber: Einmal auftanken bitte</h3>
                <p className="italic mb-2">Dein Wegweiser hinter den Masken des Alltags</p>
                <p className="mb-4">Für Körper, Geist und Seele</p>
                <p>
                  In diesem Ratgeber erfährst du, wie du deine Energiequellen identifizierst und sie bewusst nutzt. Mit einer einzigartigen Mischung aus wissenschaftlichen Erkenntnissen und intuitiven Ansätzen zeige ich dir, wie du wieder zu mehr Kraft und Lebensfreude findest.
                </p>
                <Link 
                  to="/kontakt" 
                  className="inline-flex items-center text-primary-dark font-medium mt-4"
                >
                  Mehr zum Buch
                  <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center my-8">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=900&auto=format&fit=crop" 
                    alt="Person bei einer Entspannungsübung" 
                    className="rounded-lg shadow-md w-full max-w-md mx-auto"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3>Der Zusammenhang zwischen Ernährung und Energie</h3>
                  <p>
                    Was wir essen, bestimmt maßgeblich, wie wir uns fühlen. Aber es geht nicht nur um einzelne Nährstoffe, sondern um das große Ganze: Wie wir essen, wann wir essen und mit wem wir essen. In diesem Bereich der Tankzeile erfährst du, wie echte Nahrung deine Lebensenergie nachhaltig steigern kann.
                  </p>
                </div>
              </div>
              
              <h3>Hinter den Masken des Alltags</h3>
              <p>
                Oft verstecken wir unsere wahren Bedürfnisse hinter Masken der Alltagsroutine. Wir funktionieren, anstatt zu leben. Der Ratgeber hilft dir, diese Masken zu erkennen und abzulegen – für ein authentischeres und energiereicheres Leben.
              </p>
              
              <h3>Wissenschaft trifft Intuition</h3>
              <p>
                Statt starrer Ernährungsregeln geht es hier um ein tieferes Verständnis: Was tut mir wirklich gut? Welche Nahrung gibt mir Kraft? Wie kann ich dieses Wissen im Alltag umsetzen? Mit einer Balance aus fundiertem Wissen und achtsamer Selbstwahrnehmung findest du deinen individuellen Weg.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link to="/kontakt" className="btn-primary">
                Mehr erfahren? Schreib mir
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerstehenVeraendern;
