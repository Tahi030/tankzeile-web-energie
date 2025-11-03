import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import captainApfelHero from "@/assets/captain-apfel-hero.svg";

export const HeroWelcome = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50/80 via-yellow-50/90 to-red-50/80">
      
      {/* Multi-Layer Background with Depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-green-100/40 via-transparent to-yellow-100/40" />
        <div className="absolute inset-0 bg-gradient-to-bl from-red-50/30 via-transparent to-green-50/30" />
        
        {/* Animated Large Light Circles - Background Layer */}
        <motion.div 
          className="absolute top-20 left-[5%] w-96 h-96 bg-gradient-radial from-green-300/40 via-green-200/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-[5%] w-[500px] h-[500px] bg-gradient-radial from-yellow-300/50 via-yellow-200/30 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.7, 0.5],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-[40%] left-[45%] w-[400px] h-[400px] bg-gradient-radial from-red-200/30 via-orange-200/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Medium Energy Circles */}
        <motion.div 
          className="absolute top-[30%] right-[20%] w-64 h-64 bg-gradient-radial from-yellow-400/30 to-transparent rounded-full blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div 
          className="absolute bottom-[30%] left-[15%] w-72 h-72 bg-gradient-radial from-green-400/25 to-transparent rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        
        {/* Flowing Energy Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 0,200 Q 300,150 600,200 T 1200,200"
            stroke="url(#waveGradient1)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ pathLength: 1, pathOffset: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 0,400 Q 400,350 800,400 T 1600,400"
            stroke="url(#waveGradient2)"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ pathLength: 1, pathOffset: 1 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
          />
          <motion.path
            d="M 0,600 Q 500,550 1000,600 T 2000,600"
            stroke="url(#waveGradient3)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ pathLength: 1, pathOffset: 1 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }}
          />
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#86efac" stopOpacity="0" />
              <stop offset="50%" stopColor="#86efac" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#86efac" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fde047" stopOpacity="0" />
              <stop offset="50%" stopColor="#fde047" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fca5a5" stopOpacity="0" />
              <stop offset="50%" stopColor="#fca5a5" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fca5a5" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Subtle sparkle effects */}
        <motion.div 
          className="absolute top-[25%] left-[30%] w-4 h-4 bg-yellow-300/60 rounded-full blur-sm"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0
          }}
        />
        <motion.div 
          className="absolute top-[60%] right-[25%] w-3 h-3 bg-green-300/60 rounded-full blur-sm"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-[45%] left-[60%] w-3 h-3 bg-red-300/50 rounded-full blur-sm"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left relative"
            >
              {/* Decorative connection line to Captain Apfel */}
              <motion.div
                className="hidden lg:block absolute right-0 top-1/2 w-24 h-0.5 bg-gradient-to-r from-primary/40 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-luckiest text-primary uppercase tracking-wide leading-tight drop-shadow-sm">
                  Captain Apfel
                </h1>
                <p className="text-2xl md:text-3xl lg:text-4xl font-luckiest text-secondary drop-shadow-sm">
                  auf gesunder Mission
                </p>
                <div className="pt-4 space-y-3">
                  <p className="text-xl md:text-2xl font-bold text-foreground">
                    Initiative für starke Entwicklung
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground font-medium italic">
                    Gesundheit, die Kindern schmeckt.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Captain Apfel Figure with Enhanced Effects */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-center"
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Multi-layer glow effect behind Captain Apfel */}
                <motion.div
                  className="absolute inset-0 -inset-8 bg-gradient-radial from-yellow-300/30 via-green-300/20 to-transparent rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 -inset-4 bg-gradient-radial from-red-200/20 via-orange-200/15 to-transparent rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                {/* Energy rings around Captain Apfel */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-yellow-300/20 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <img 
                  src={captainApfelHero} 
                  alt="Captain Apfel" 
                  className="relative w-full h-auto drop-shadow-2xl"
                />
              </div>
            </motion.div>
            
          </div>

          {/* Bottom: Introduction Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 space-y-8 text-center max-w-4xl mx-auto"
          >
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
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