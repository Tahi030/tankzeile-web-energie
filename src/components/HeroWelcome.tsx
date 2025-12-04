import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import captainApfelHero from "@/assets/captain-apfel-hero.svg";

export const HeroWelcome = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-muted pt-24 md:pt-20 lg:pt-16">
      
      {/* Simplified background - single color with minimal effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Single subtle glow effect */}
        <motion.div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-secondary/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4 sm:space-y-6 text-center lg:text-left lg:pr-4 xl:pr-8"
            >
              <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-luckiest text-primary uppercase tracking-wide leading-tight">
                  Captain Apfel
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-luckiest text-secondary">
                  auf gesunder Mission
                </p>
                <div className="pt-4 sm:pt-6 space-y-2 sm:space-y-3 border-t-2 border-primary/20 mt-4">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-snug">
                    Initiative für starke Entwicklung
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium italic leading-relaxed">
                    Gesundheit, die Kindern schmeckt.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Captain Apfel Figure */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end lg:pl-4 xl:pl-8"
            >
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                {/* Minimal glow effect */}
                <motion.div
                  className="absolute inset-0 -inset-4 bg-secondary/5 rounded-full blur-xl"
                  animate={{
                    opacity: [0.05, 0.08, 0.05],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.img 
                  src={captainApfelHero} 
                  alt="Captain Apfel - Initiative für starke Entwicklung" 
                  className="relative w-full h-auto drop-shadow-2xl"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
            
          </div>

          {/* Bottom: Introduction Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 sm:mt-16 md:mt-20 space-y-6 sm:space-y-8 text-center max-w-4xl mx-auto px-4"
          >
            <p className="text-sm sm:text-base md:text-lg text-foreground/85 leading-relaxed">
              Tief im Bauch jedes Kindes steckt sie – die Powerzentrale, das geheime Kraftwerk für Energie, Konzentration und gute Laune.
              Captain Apfel und seine Crew zeigen, wie Kinder sie aktivieren – mit Spaß, Bewegung und Wissen, das hängen bleibt.
            </p>

            <Link 
              to="/workshop-gesunde-mission" 
              className="inline-block bg-[hsl(25_30%_88%)] text-[hsl(25_30%_25%)] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:scale-105 hover:bg-[hsl(25_35%_82%)] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Jetzt entdecken: Reise zur Powerzentrale
            </Link>

            <p className="text-xs sm:text-sm md:text-base text-muted-foreground italic pt-2 sm:pt-4">
              Außerdem auf der Mission: praktische PDF-Pakete zu Unverträglichkeiten und Ideen für mehr Wohlbefinden im Familienalltag.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};