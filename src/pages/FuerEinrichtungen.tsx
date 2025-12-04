
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CustomerFeedback from "@/components/CustomerFeedback";

const FuerEinrichtungen = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Für Einrichtungen | Tankzeile";
  }, []);

  return (
    <div className="min-h-screen bg-muted">
      {/* Hero Section - harmonisch */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground font-luckiest">Für alle, die mit Kindern arbeiten</h1>
            <p className="text-lg text-muted-foreground">
              Ob Kita, Familienzentrum oder soziale Einrichtung – Captain Apfel & seine Crew bieten Angebote, die Vorschulkinder und Grundschüler stärken: humorvoll, altersgerecht und mit Herz.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-12 md:pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
            </div>


            <CustomerFeedback />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FuerEinrichtungen;
