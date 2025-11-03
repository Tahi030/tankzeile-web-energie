import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import captainApfelHero from "@/assets/captain-apfel-hero.svg";

export const HeroWelcome = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft light orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-yellow-200/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Subtle energy lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 0,200 Q 500,150 1000,200"
            stroke="url(#energyGradient)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#86efac" stopOpacity="0" />
              <stop offset="50%" stopColor="#fde047" stopOpacity="1" />
              <stop offset="100%" stopColor="#86efac" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6 text-center lg:text-left lg:pr-8"
            >
              <div className="space-y-5">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-luckiest text-primary uppercase tracking-wide leading-tight">
                  Captain Apfel
                </h1>
                <p className="text-2xl md:text-3xl lg:text-4xl font-luckiest text-secondary">
                  auf gesunder Mission
                </p>
                <div className="pt-6 space-y-3 border-t-2 border-primary/20">
                  <p className="text-xl md:text-2xl font-bold text-foreground">
                    Initiative für starke Entwicklung
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground font-medium italic">
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
              className="relative flex justify-center lg:justify-end lg:pl-8"
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Multi-layer glow effect */}
                <motion.div
                  className="absolute inset-0 -inset-8 bg-gradient-radial from-yellow-300/30 via-green-300/20 to-transparent rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-radial from-orange-200/20 via-transparent to-transparent rounded-full blur-xl"
                  animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
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
            className="mt-20 space-y-8 text-center max-w-4xl mx-auto"
          >
            <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
              Tief im Bauch jedes Kindes steckt sie – die Powerzentrale, das geheime Kraftwerk für Energie, Konzentration und gute Laune.
              Captain Apfel und seine Crew zeigen, wie Kinder sie aktivieren – mit Spaß, Bewegung und Wissen, das hängen bleibt.
            </p>

            <Link 
              to="/workshop-gesunde-mission" 
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Jetzt entdecken: Reise zur Powerzentrale
            </Link>

            <p className="text-sm md:text-base text-muted-foreground italic pt-4">
              Außerdem auf der Mission: praktische PDF-Pakete zu Unverträglichkeiten und Ideen für mehr Wohlbefinden im Familienalltag.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};