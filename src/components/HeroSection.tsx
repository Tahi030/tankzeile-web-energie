
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const HeroSection = () => {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const connectionSentences = [
    "Eltern mit Kindern.",
    "Menschen mit Menschen.",
    "Dich mit dir."
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSentenceIndex((prevIndex) => 
        prevIndex === connectionSentences.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change sentence every 2 seconds
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-cover bg-center min-h-[90vh]" style={{ backgroundImage: "url('/lovable-uploads/4a902ea0-87db-43f5-8a20-e972569a24b3.png')" }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl text-left ml-8 md:ml-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="md:inline block">
              Gesundheit, die schmeckt
            </span>{" "}
            <span className="md:inline block">
              – für Groß und Klein
            </span>
          </motion.h1>

          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl font-medium mb-4 text-white">
              Die Tankzeile verbindet.
            </p>
            <div className="h-16 md:h-20 relative overflow-hidden mb-8">
              {connectionSentences.map((sentence, index) => (
                <motion.p
                  key={index}
                  className="text-3xl md:text-4xl font-semibold absolute w-full text-white"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: sentenceIndex === index ? 1 : 0,
                    y: sentenceIndex === index ? 0 : 50
                  }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  {sentence}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/tankwelten/alltag-leichter-leben">
              <Button className="btn-primary text-lg px-8 py-6" size="lg">
                Jetzt eintauchen <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* New content box */}
      <div className="container-custom relative z-10 mt-12">
        <motion.div 
          className="modern-box bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ernährung, Achtsamkeit und Verbindung. Neu gedacht.</h2>
            
            <p className="text-lg mb-4">
              Die Tankzeile ist ein Bildungs- und Gesundheitskonzept, das moderne Ernährung, alltagsnahe Achtsamkeit und soziale Verbindung miteinander vereint – praxisnah, kindgerecht und nachhaltig.
            </p>
            
            <p className="text-lg mb-4">
              In einer Gesellschaft, in der Fertiggerichte, Zeitdruck und Reizüberflutung den Alltag prägen, fehlt es an fundierten, greifbaren Angeboten, die ganzheitliches Wohlbefinden frühzeitig fördern.<br />
              Die Tankzeile schließt diese Lücke – mit interaktiven Workshops, strukturierten Wochenkonzepten und hochwertigen Inhalten für Familien, Kinder und pädagogische Einrichtungen.
            </p>
            
            <p className="text-lg">
              Das Ziel: ein gesunder Alltag, der verbindet – mit Freude, Klarheit und Wirkung.<br />
              Von Anfang an. Für Groß und Klein.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
