import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import captainApfelHero from "@/assets/captain-apfel-hero.png";

const rotatingWords = ["Bäuche", "Eltern", "Familien", "Einrichtungen"];

export const HeroWelcome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[hsl(32_55%_96%)] pt-8 md:pt-12 lg:pt-16">
      
      {/* Soft sky-like background with gentle clouds - GPU optimized */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft ambient glow - static on mobile for performance */}
        <div 
          className="absolute top-1/3 right-1/4 w-[45rem] h-[45rem] bg-[hsl(30_50%_90%)] rounded-full blur-[120px] opacity-60 hidden md:block"
          style={{ willChange: 'auto' }}
        />
        {/* Secondary soft glow - static on mobile for performance */}
        <div 
          className="absolute bottom-1/3 left-1/4 w-[30rem] h-[30rem] bg-[hsl(32_45%_92%)] rounded-full blur-[100px] opacity-50 hidden md:block"
          style={{ willChange: 'auto' }}
        />
        {/* Simple mobile background glow */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[hsl(30_50%_94%)] to-transparent opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center">
            
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4 sm:space-y-6 text-center lg:text-left lg:pr-4 xl:pr-8"
            >
              <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-luckiest text-[hsl(80_40%_45%)] uppercase tracking-wide leading-tight">
                  Captain Apfel
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-luckiest text-[hsl(220_15%_30%)]">
                  auf gesunder Mission
                </p>
                <div className="pt-4 sm:pt-6 space-y-2 sm:space-y-3 border-t-2 border-[hsl(12_55%_50%)]/20 mt-4">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-snug whitespace-nowrap">
                  Starke Kids, entspannte{" "}
                  <span className="inline-block w-[105px] sm:w-[135px] md:w-[165px] text-left">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="inline-block text-[hsl(18_65%_55%)]"
                      >
                        {rotatingWords[currentIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </p>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium italic leading-relaxed">
                    Gesundheit, die Kindern schmeckt.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Captain Apfel Flying Figure + Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative flex flex-col items-center lg:items-end lg:pl-4 xl:pl-8"
            >
              {/* Captain Apfel Container */}
              <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl z-10">
                {/* Soft glow for blending - static for better performance */}
                <div
                  className="absolute inset-0 -inset-16 bg-gradient-radial from-[hsl(30_50%_92%)] via-[hsl(32_55%_96%)] to-transparent rounded-full blur-3xl opacity-70 hidden md:block"
                />
                
                {/* Captain Apfel image - static on mobile, floating on desktop */}
                <motion.div>
                  <motion.img 
                    src={captainApfelHero}
                    alt="Captain Apfel schwebt" 
                    className="relative w-full h-auto"
                    width={800}
                    height={800}
                    style={{
                      filter: 'drop-shadow(0 20px 30px rgba(150, 120, 90, 0.25))',
                      willChange: 'auto',
                    }}
                    animate={{
                      y: [0, -12, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.picture>
              </div>

              {/* Elegant decorative arc */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 sm:bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[80%] max-w-xl"
              >
                <svg viewBox="0 0 200 30" className="w-full h-auto" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(80 40% 45%)" stopOpacity="0.1" />
                      <stop offset="50%" stopColor="hsl(80 40% 45%)" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="hsl(80 40% 45%)" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M0,25 Q100,0 200,25" 
                    fill="none" 
                    stroke="url(#arcGradient)" 
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </motion.div>
            
          </div>

          
        </div>
      </div>
    </section>
  );
};