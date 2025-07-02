
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
      {/* Heart-line graphic positioned on the right side */}
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none flex items-center justify-end overflow-hidden">
        <img 
          src="/lovable-uploads/b94ff287-1b76-4dc8-86b0-34b6c90ce1d2.png" 
          alt="Decorative heart line" 
          className="h-auto max-h-[90%] md:max-h-[95%] object-contain opacity-90 pr-0"
        />
      </div>
      
      {/* Mobile-specific heart graphic */}
      <div className="absolute right-0 top-10 h-1/2 w-full md:hidden pointer-events-none flex justify-end overflow-hidden">
        <img 
          src="/lovable-uploads/b94ff287-1b76-4dc8-86b0-34b6c90ce1d2.png" 
          alt="Decorative heart line" 
          className="h-auto w-3/4 object-contain opacity-90 pr-4"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-8 text-center md:text-left">
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
            className="mb-8 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl font-medium mb-4 text-secondary">
              Die Tankzeile verbindet.
            </p>
            {/* Increase height of container to ensure enough space for all animated sentences */}
            <div className="h-20 md:h-20 relative overflow-visible mb-6">
              {connectionSentences.map((sentence, index) => (
                <motion.p
                  key={index}
                  className="text-3xl md:text-4xl font-semibold absolute w-full text-secondary leading-normal"
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
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/tankwelten/alltag-leichter-leben" className="btn-secondary inline-flex items-center gap-2 text-lg px-6 py-3">
              Jetzt eintauchen <ArrowRight size={20} />
            </Link>
          </motion.div>

          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-primary/20 mb-10 transition-all duration-300 hover:shadow-xl" 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Ernährung, Achtsamkeit und Verbindung</h3>
              <p className="text-lg md:text-xl mb-4">
                Schön, dass du hier bist! Ich bin Tamara Hillmann - Gründerin der Tankzeile, einem Bildungs- und Gesundheitskonzept aus Berlin.
              </p>
              <p className="text-lg md:text-xl mb-4">
                Mit der Tankzeile verbinde ich mein Herzensanliegen, Kindern, Familien und Menschen, die mit Kindern leben oder arbeiten, neue Wege zu zeigen, wie gesunde Ernährung, kindgerechte Achtsamkeit und echte Verbindung im Alltag lebendig werden - praxisnah, spielerisch und nachhaltig.
              </p>
              <p className="text-lg md:text-xl mb-4">
                In einer Welt, in der Fertiggerichte, Zeitdruck und Reizüberflutung oft den Ton angeben, fehlt es an Angeboten, die wirklich im Alltag ankommen. Die Tankzeile schließt diese Lücke - mit interaktiver Workshop-Erfahrung und anderen Impulsen, die gesundes Fühlen und Wachstum von klein auf unterstützen.
              </p>
              <p className="text-lg md:text-xl">
                Das Ziel: ein Alltag, der dir gut tut und verbindet - mit Freude, Klarheit und Wirkung.<br />
                Von Anfang an. Für Groß und Klein.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
