
import HeroSection from "@/components/HeroSection";
import TestimonialSection from "@/components/TestimonialSection";
import TankweltenSection from "@/components/TankweltenSection";
import DownloadSection from "@/components/DownloadSection";
import TargetGroupSection from "@/components/TargetGroupSection";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Tankzeile – Ernährung & Lebensenergie";
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Stylish text box for introduction */}
      <section className="py-12 bg-muted">
        <div className="container-custom">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-primary/10 relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary-light/20 blur-3xl pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-secondary-light/20 blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Willkommen bei der Tankzeile</h2>
              <p className="text-lg mb-4 leading-relaxed">
                Hier verbinde ich, was mir am Herzen liegt: Ernährung, Achtsamkeit und echtes Miteinander.
                Ich möchte einen Ort schaffen, an dem sich jeder einzelne wieder ganzheitlich wohlfühlen darf
                und damit etwas bewegen.
              </p>
              <p className="text-lg leading-relaxed">
                Ich glaube: Veränderung ist einfach, wenn wir wieder spüren, was uns stärkt.
                Nicht durch Müssen, sondern durch kleine Impulse, die sich gut anfühlen.
                Und unsere Kinder sind der beste Anfang.
                Denn echtes Wohlfühlen beginnt dort, wo wir uns nicht mehr allein fühlen.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <TargetGroupSection />
      <TankweltenSection />
      <TestimonialSection />
      <DownloadSection />
      
      {/* Footer CTA */}
      <section className="bg-primary py-16">
        <div className="container-custom">
          <div className="text-center text-white max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Bereit, etwas zu verändern?</h2>
            <p className="text-lg mb-8">
              Lerne die Tankwelten kennen und entdecke, wie kleine Veränderungen Großes bewirken können.
            </p>
            <Link to="/kontakt" className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-dark transition-colors px-6 py-3 text-lg font-medium rounded-md text-white">
              Kontaktiere mich
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
