import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import captainApfelHero from "@/assets/captain-apfel-hero.svg";

export const HeroWelcome = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-50/80 via-orange-50/70 to-pink-50/60 pt-24 md:pt-20 lg:pt-16">
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200/25 via-transparent to-pink-200/20" />
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-200/20 via-transparent to-yellow-200/25" />
        
        {/* Animated light orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-[28rem] h-[28rem] bg-yellow-300/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.45, 0.25],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-20 w-[35rem] h-[35rem] bg-orange-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-1/3 w-[30rem] h-[30rem] bg-pink-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Decorative circles */}
        <motion.div
          className="absolute top-32 right-1/4 w-3 h-3 bg-orange-400/35 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.35, 0.75, 0.35],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-yellow-400/35 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.35, 0.75, 0.35],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/3 w-2 h-2 bg-pink-400/45 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.45, 0.85, 0.45],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Energy waves */}
        <svg className="absolute inset-0 w-full h-full opacity-12" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 0,300 Q 400,250 800,300 T 1600,300"
            stroke="url(#waveGradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M 0,450 Q 500,400 1000,450 T 2000,450"
            stroke="url(#waveGradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.path
            d="M 0,600 Q 600,550 1200,600"
            stroke="url(#waveGradient3)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
              <stop offset="50%" stopColor="#fbbf24" stopOpacity="1" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fb923c" stopOpacity="0" />
              <stop offset="50%" stopColor="#fb923c" stopOpacity="1" />
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f472b6" stopOpacity="0" />
              <stop offset="50%" stopColor="#f472b6" stopOpacity="1" />
              <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(25 95% 60%) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, hsl(48 85% 55%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
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
                {/* Multi-layer glow effect */}
                <motion.div
                  className="absolute inset-0 -inset-8 bg-gradient-radial from-orange-300/25 via-yellow-300/15 to-transparent rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.35, 0.55, 0.35],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-radial from-pink-200/15 via-transparent to-transparent rounded-full blur-xl"
                  animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.25, 0.45, 0.25],
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
            className="mt-12 sm:mt-16 md:mt-20 space-y-6 sm:space-y-8 text-center max-w-4xl mx-auto px-4"
          >
            <p className="text-sm sm:text-base md:text-lg text-foreground/85 leading-relaxed">
              Tief im Bauch jedes Kindes steckt sie – die Powerzentrale, das geheime Kraftwerk für Energie, Konzentration und gute Laune.
              Captain Apfel und seine Crew zeigen, wie Kinder sie aktivieren – mit Spaß, Bewegung und Wissen, das hängen bleibt.
            </p>

            <Link 
              to="/workshop-gesunde-mission" 
              className="inline-block bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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