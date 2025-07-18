
import HeroSection from "@/components/HeroSection";
import TestimonialSection from "@/components/TestimonialSection";
import TankweltenSection from "@/components/TankweltenSection";
import TargetGroupSection from "@/components/TargetGroupSection";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Ganzheitlich wohlfühlen - Achtsamkeit & Ernährung für Klein & Groß";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Captain Apple, Achtsamkeit & Ernährung: Erlebnisangebote für Kinder & Erwachsene, die Körper, Herz & Bauch stärken - ganzheitlich, spielerisch & alltagstauglich.');
    }
    
    // Apply background color to the body
    document.body.classList.add('bg-muted');
    
    return () => {
      // Remove background color when component unmounts
      document.body.classList.remove('bg-muted');
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <TargetGroupSection />
      <TankweltenSection />
      <TestimonialSection />
      
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
