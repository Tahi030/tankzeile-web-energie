
import { useEffect } from "react";
import { Instagram } from "lucide-react";

const Kontakt = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Kontakt | Captain Apfel";
  }, []);

  return (
    <div className="min-h-screen bg-muted">
      {/* Hero Section - harmonisch */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground font-luckiest">Ich freue mich über jede Nachricht!</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Gibt es Fragen, Anregungen oder Interesse, mehr über die Angebote zu erfahren?
            </p>
            <p className="text-lg text-muted-foreground">
              Auch Buchungen oder unverbindliche Vormerkungen für den Start im Frühjahr 2026 laufen ganz unkompliziert auf diesem Weg – einfach melden, ganz ohne Formulare.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="pb-12 md:pb-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-left">
            {/* Contact Information */}
            <div>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-medium mb-1">Tamara Hillmann</h3>
                  <p className="text-muted-foreground mb-3">Gründerin & kreative Leitung</p>
                  <h3 className="font-medium mb-1">E-Mail:</h3>
                  <p><a href="mailto:kontakt@captain-apfel.de" className="text-primary-dark hover:underline">kontakt@captain-apfel.de</a></p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-1">Mobil & WhatsApp:</h3>
                  <p><a href="tel:+4915206339474" className="text-primary-dark hover:underline">+49 152 06339474</a></p>
                </div>
              </div>
              
              <h2 className="text-base font-medium mb-6 text-foreground">Auch hier zu finden</h2>
              <div className="flex justify-start">
                <a href="https://www.instagram.com/captain.apfel/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[hsl(25_30%_88%)] rounded-full flex items-center justify-center text-[hsl(25_30%_25%)] hover:bg-[hsl(25_35%_82%)] transition-all duration-300 shadow-md hover:shadow-lg">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
