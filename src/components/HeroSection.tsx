
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
      {/* Mobile-specific heart graphic - smaller */}
      <div className="absolute inset-0 md:hidden pointer-events-none flex justify-center items-center overflow-hidden">
        <img 
          src="/lovable-uploads/17a7f60a-a1a3-4e82-afda-a989d7696ecb.png" 
          alt="Decorative heart line" 
          className="h-2/3 w-2/3 object-contain opacity-20 scale-75"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-8 text-center md:text-left relative z-10">
          {/* Heart logo above headline */}
          <motion.div 
            className="flex justify-center md:justify-start mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/lovable-uploads/61605cec-c854-4aab-95b5-f78274325f7e.png" 
              alt="Tankzeile Heart Logo" 
              className="h-16 w-16 md:h-20 md:w-20 object-contain"
            />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="md:inline block">
              Gesundheit, die schmeckt
            </span>{" "}
            <span className="md:inline block">
              – für Groß und Klein
            </span>
          </motion.h1>

          {/* Hand-drawn line under headline */}
          <motion.div 
            className="flex justify-center md:justify-start mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <svg width="120" height="8" viewBox="0 0 120 8" className="text-white">
              <path
                d="M2,4 Q8,2 15,4 T30,3 Q40,5 50,4 T70,3 Q80,5 90,4 T110,3 Q115,2 118,4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-70"
                style={{
                  filter: 'url(#roughPaperHeroLine)',
                }}
              />
              <defs>
                <filter id="roughPaperHeroLine">
                  <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="5" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                </filter>
              </defs>
            </svg>
          </motion.div>

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

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
