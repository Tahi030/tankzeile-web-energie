
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <section className="relative bg-gradient-to-b from-primary to-primary-light py-16 md:py-24 overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
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
            className="mb-16 md:mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl font-medium mb-4 text-secondary">
              Die Tankzeile verbindet.
            </p>
            <div className="h-16 md:h-20 relative overflow-hidden mb-8">
              {connectionSentences.map((sentence, index) => (
                <motion.p
                  key={index}
                  className="text-3xl md:text-4xl font-semibold absolute w-full text-secondary"
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

          <motion.div 
            className="modern-box mb-10 mt-32 md:mt-10" // Increased the top margin for mobile
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
          >
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Ernährung, Achtsamkeit und Verbindung. Neu gedacht.</h3>
              <p className="text-lg md:text-xl mb-4">
                Die Tankzeile ist ein Bildungs- und Gesundheitskonzept, das moderne Ernährung, alltagsnahe Achtsamkeit und soziale Verbindung miteinander vereint – praxisnah, kindgerecht und nachhaltig.
              </p>
              <p className="text-lg md:text-xl mb-4">
                In einer Gesellschaft, in der Fertiggerichte, Zeitdruck und Reizüberflutung den Alltag prägen, fehlt es an fundierten, greifbaren Angeboten, die ganzheitliches Wohlbefinden frühzeitig fördern.<br />
                Die Tankzeile schließt diese Lücke – mit interaktiven Workshops, strukturierten Wochenkonzepten und hochwertigen Inhalten für Familien, Kinder und pädagogische Einrichtungen.
              </p>
              <p className="text-lg md:text-xl">
                Das Ziel: ein gesunder Alltag, der verbindet – mit Freude, Klarheit und Wirkung.<br />
                Von Anfang an. Für Groß und Klein.
              </p>
            </div>
          </motion.div>
          
          <Link to="/tankwelten/alltag-leichter-leben" className="btn-secondary inline-flex items-center gap-2 text-lg px-6 py-3 mb-10">
            Jetzt eintauchen <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
