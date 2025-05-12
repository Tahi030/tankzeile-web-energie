
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
