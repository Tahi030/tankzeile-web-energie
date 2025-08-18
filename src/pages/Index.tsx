
import HeroSection from "@/components/HeroSection";
import TankweltenSection from "@/components/TankweltenSection";
import TargetGroupSection from "@/components/TargetGroupSection";
import CustomerFeedback from "@/components/CustomerFeedback";
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
      
      <TankweltenSection />
      <CustomerFeedback />
      
    </div>
  );
};

export default Index;
