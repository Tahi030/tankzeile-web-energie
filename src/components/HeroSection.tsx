
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary-light to-white py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            Gesundheit, die schmeckt – für Groß und Klein
          </h1>
          <div className="text-lg md:text-xl space-y-4 mb-8 animate-fade-up">
            <p className="mb-6">
              Hallo, schön dass du da bist.<br />
              Ich heiße Tamara – und ich bin die Tankzeile.<br />
              Hier verbinde ich, was mir am Herzen liegt:<br />
              Ernährung, Achtsamkeit und echtes Miteinander.
            </p>
            <p>
              Ich möchte einen Ort schaffen, an dem sich jeder einzelne wieder<br />
              ganzheitlich wohlfühlen darf<br />
              und damit etwas bewegen.
            </p>
          </div>
          <Link to="/tankwelten/alltag-leichter-leben" className="btn-primary inline-flex items-center gap-2">
            Jetzt eintauchen <ArrowRight size={18} />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white" />
    </section>
  );
};

export default HeroSection;
