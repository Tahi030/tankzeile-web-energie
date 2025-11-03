
import { useEffect } from "react";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Kontakt = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Kontakt | Tankzeile";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">So erreichst du mich</h1>
            {/* Hand-drawn line effect */}
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
                    filter: 'url(#roughPaperKontakt)',
                  }}
                />
                <defs>
                  <filter id="roughPaperKontakt">
                    <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="1" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                  </filter>
                </defs>
              </svg>
            </div>
            <p className="text-lg text-white mb-4">
              Ich freue mich, von dir zu hören! Hast du Fragen, Anregungen oder möchtest du mehr über meine Angebote erfahren?
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 md:py-16">
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
                <a href="#" className="w-10 h-10 bg-[hsl(25_45%_35%)] rounded-full flex items-center justify-center text-white hover:bg-[hsl(25_45%_30%)] transition-all duration-300 shadow-md hover:shadow-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-[hsl(25_45%_35%)] rounded-full flex items-center justify-center text-white hover:bg-[hsl(25_45%_30%)] transition-all duration-300 shadow-md hover:shadow-lg">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-[hsl(25_45%_35%)] rounded-full flex items-center justify-center text-white hover:bg-[hsl(25_45%_30%)] transition-all duration-300 shadow-md hover:shadow-lg">
                  <Youtube size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-[hsl(25_45%_35%)] rounded-full flex items-center justify-center text-white hover:bg-[hsl(25_45%_30%)] transition-all duration-300 shadow-md hover:shadow-lg">
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
