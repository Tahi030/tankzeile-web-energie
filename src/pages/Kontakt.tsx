
import { useEffect } from "react";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground font-luckiest">So erreichst du mich</h1>
            <p className="text-lg text-muted-foreground">
              Ich freue mich, von dir zu hören! Hast du Fragen, Anregungen oder möchtest du mehr über meine Angebote erfahren?
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
                  <p className="font-medium mb-1">Tamara Hillmann</p>
                  <p className="text-muted-foreground mb-3">Gründerin & kreative Leitung</p>
                  <h3 className="font-medium mb-1">E-Mail:</h3>
                  <p><a href="mailto:kontakt@captain-apfel.de" className="text-primary-dark hover:underline">kontakt@captain-apfel.de</a></p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-1">Telefon:</h3>
                  <p><a href="tel:+4915206339474" className="text-primary-dark hover:underline">+49 152 06339474</a></p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-6">Verbinde dich mit mir</h2>
              <div className="flex justify-start space-x-4">
                {/* Social media icons */}
                <a href="#" className="w-10 h-10 bg-[hsl(25_30%_88%)] rounded-full flex items-center justify-center text-[hsl(25_30%_25%)] hover:bg-[hsl(25_35%_82%)] transition-all duration-300 shadow-md hover:shadow-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-[hsl(25_30%_88%)] rounded-full flex items-center justify-center text-[hsl(25_30%_25%)] hover:bg-[hsl(25_35%_82%)] transition-all duration-300 shadow-md hover:shadow-lg">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-[hsl(25_30%_88%)] rounded-full flex items-center justify-center text-[hsl(25_30%_25%)] hover:bg-[hsl(25_35%_82%)] transition-all duration-300 shadow-md hover:shadow-lg">
                  <Youtube size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-[hsl(25_30%_88%)] rounded-full flex items-center justify-center text-[hsl(25_30%_25%)] hover:bg-[hsl(25_35%_82%)] transition-all duration-300 shadow-md hover:shadow-lg">
                  <Linkedin size={20} />
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
