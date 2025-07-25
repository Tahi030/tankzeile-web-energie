
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import CustomerFeedback from "@/components/CustomerFeedback";

const CaptainApfelWorkshop = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Captain Apfel Workshop | Tankzeile";
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-accent-light py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Captain Apfel Workshop</h1>
            <p className="text-lg mb-6 text-white">
              Für Vorschulkinder, die spielerisch die Welt der gesunden Ernährung entdecken möchten.
            </p>
            <div className="mt-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Dieser Bereich befindet sich derzeit im Aufbau.
              </div>
            </div>
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
                    src="/lovable-uploads/dacb4690-c1b7-4b93-97d9-0eb5ff2c2361.png" 
                    alt="Captain Apfel auf gesunder Mission" 
                    className="rounded-lg shadow-md w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>


            </div>

            <CustomerFeedback />

            <div className="mt-12 text-center">
              <Link to="/kontakt" className="btn-primary">
                Interesse an einem Workshop? Kontaktiere mich
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaptainApfelWorkshop;
