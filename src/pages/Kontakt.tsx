
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
              <div className="flex justify-start gap-3">
                <a href="https://www.instagram.com/captain.apfel/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[hsl(25_30%_88%)] rounded-full flex items-center justify-center text-[hsl(25_30%_25%)] hover:bg-[hsl(25_35%_82%)] transition-all duration-300 shadow-md hover:shadow-lg">
                  <Instagram size={20} />
                </a>
                <a href="https://www.pinterest.com/captainapfel030/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[hsl(25_30%_88%)] rounded-full flex items-center justify-center text-[hsl(25_30%_25%)] hover:bg-[hsl(25_35%_82%)] transition-all duration-300 shadow-md hover:shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
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
