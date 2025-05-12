
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
    <section className="relative bg-gradient-to-b from-primary-light to-white py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in">
            Gesundheit, die schmeckt – für Groß und Klein
          </h1>

          <div className="mb-10">
            <p className="text-2xl md:text-3xl font-medium mb-4">
              Die Tankzeile verbindet.
            </p>
            <div className="h-16 md:h-20 relative overflow-hidden">
              {connectionSentences.map((sentence, index) => (
                <motion.p
                  key={index}
                  className="text-2xl md:text-3xl font-semibold absolute w-full text-secondary-dark"
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
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-primary/10 relative overflow-hidden mb-10">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary-light/20 blur-3xl pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-secondary-light/20 blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <p className="text-lg md:text-xl space-y-4 mb-8">
                Hallo, schön dass du da bist.<br />
                Ich heiße Tamara – und ich bin die Tankzeile.<br />
                Hier verbinde ich, was mir am Herzen liegt:<br />
                Ernährung, Achtsamkeit und echtes Miteinander.
              </p>
              <p className="text-lg md:text-xl">
                Ich möchte einen Ort schaffen, an dem sich jeder einzelne wieder<br />
                ganzheitlich wohlfühlen darf<br />
                und damit etwas bewegen.
              </p>
            </div>
          </div>
          
          <Link to="/tankwelten/alltag-leichter-leben" className="btn-secondary inline-flex items-center gap-2 text-lg px-6 py-3">
            Jetzt eintauchen <ArrowRight size={20} />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white" />
    </section>
  );
};

export default HeroSection;
