
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
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Gesundheit, die schmeckt – für Groß und Klein
          </motion.h1>

          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl font-medium mb-4 text-secondary">
              Die Tankzeile verbindet.
            </p>
            <div className="h-16 md:h-20 relative overflow-hidden">
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
            className="modern-box mb-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
          >
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
          </motion.div>
          
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
