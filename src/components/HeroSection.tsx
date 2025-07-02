
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
      {/* Heart-line graphic positioned to cover almost the entire page */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <img 
          src="/lovable-uploads/17a7f60a-a1a3-4e82-afda-a989d7696ecb.png" 
          alt="Decorative heart line" 
          className="h-full w-full object-cover opacity-30 scale-150"
        />
      </div>
      
      {/* Mobile-specific heart graphic - covering more of the screen */}
      <div className="absolute inset-0 md:hidden pointer-events-none flex justify-center items-center overflow-hidden">
        <img 
          src="/lovable-uploads/17a7f60a-a1a3-4e82-afda-a989d7696ecb.png" 
          alt="Decorative heart line" 
          className="h-full w-full object-cover opacity-30 scale-125"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-8 text-center md:text-left">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-8 text-white drop-shadow-lg"
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
            <p className="text-2xl md:text-3xl font-medium mb-4 text-secondary drop-shadow-md">
              Die Tankzeile verbindet.
            </p>
            {/* Increase height of container to ensure enough space for all animated sentences */}
            <div className="h-20 md:h-20 relative overflow-visible mb-6">
              {connectionSentences.map((sentence, index) => (
                <motion.p
                  key={index}
                  className="text-3xl md:text-4xl font-semibold absolute w-full text-secondary leading-normal drop-shadow-md"
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
            <Link to="/tankwelten/alltag-leichter-leben" className="btn-secondary inline-flex items-center gap-2 text-lg px-6 py-3 shadow-lg">
              Jetzt eintauchen <ArrowRight size={20} />
            </Link>
          </motion.div>

          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl border border-primary/20 mb-0 transition-all duration-300 hover:shadow-2xl" 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary-dark">Ernährung, Achtsamkeit und Verbindung</h3>
              <p className="text-base md:text-lg mb-4">
                Schön, dass du hier bist! Ich bin Tamara Hillmann - Gründerin der Tankzeile, einem Bildungs- und Gesundheitskonzept aus Berlin.
              </p>
              <p className="text-base md:text-lg mb-4">
                Mit der Tankzeile verbinde ich mein Herzensanliegen, Kindern, Familien und Menschen, die mit Kindern leben oder arbeiten, neue Wege zu zeigen, wie gesunde Ernährung, kindgerechte Achtsamkeit und echte Verbindung im Alltag lebendig werden - praxisnah, spielerisch und nachhaltig.
              </p>
              <p className="text-base md:text-lg mb-4">
                In einer Welt, in der Fertiggerichte, Zeitdruck und Reizüberflutung oft den Ton angeben, fehlt es an Angeboten, die wirklich im Alltag ankommen. Die Tankzeile schließt diese Lücke - mit interaktiver Workshop-Erfahrung und anderen Impulsen, die gesundes Fühlen und Wachstum von klein auf unterstützen.
              </p>
              <p className="text-base md:text-lg">
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
