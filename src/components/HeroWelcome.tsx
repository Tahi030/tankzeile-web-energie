import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import captainApfelHero from "@/assets/captain-apfel-hero.svg";

export const HeroWelcome = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-yellow-50 to-red-50">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Light Circles */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-green-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-200/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-red-100/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Energy Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 0,300 Q 400,250 800,300"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 0,500 Q 600,450 1200,500"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#86efac" stopOpacity="0" />
              <stop offset="50%" stopColor="#86efac" stopOpacity="1" />
              <stop offset="100%" stopColor="#86efac" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fde047" stopOpacity="0" />
              <stop offset="50%" stopColor="#fde047" stopOpacity="1" />
              <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left"
            >
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-luckiest text-primary uppercase tracking-wide leading-tight">
                  Captain Apfel
                </h1>
                <p className="text-2xl md:text-3xl lg:text-4xl font-luckiest text-secondary">
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

            {/* Right: Captain Apfel Figure */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Glow effect behind Captain Apfel */}
                <motion.div
                  className="absolute inset-0 bg-gradient-radial from-yellow-200/40 via-green-200/30 to-transparent rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.7, 0.5],
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