import { motion } from "framer-motion";
import logoText from "@/assets/logo-text.svg";
import crewBanner from "@/assets/crew-banner.svg";
import heroCrewImage from "@/assets/hero-crew.png";

export const HeroWelcome = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-luckiest text-primary">
              Captain Apfel
            </h1>
            <p className="text-2xl md:text-3xl text-secondary font-luckiest">
              auf gesunder Mission
            </p>
          </motion.div>
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3"
          >
            <h2 className="text-xl md:text-2xl font-luckiest text-primary">
              Initiative für starke Entwicklung
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-sans italic">
              Gesundheit, die Kindern schmeckt.
            </p>
          </motion.div>
          
          {/* Hero Crew Image - Modern & Narrower */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0
            }}
            transition={{ 
              duration: 1,
              delay: 0.4
            }}
            className="mt-12"
          >
            <div className="max-w-2xl mx-auto">
              <img 
                src={heroCrewImage} 
                alt="Captain Apfel und seine Crew" 
                className="w-full h-auto object-contain rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
          
          {/* Crew Banner - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0
            }}
            transition={{ 
              duration: 1,
              delay: 0.6
            }}
            className="w-full -mx-4 md:-mx-8 lg:-mx-16 mt-12"
          >
            <div className="w-full bg-gradient-to-b from-primary/5 to-transparent py-8">
              <img 
                src={crewBanner} 
                alt="Captain Apfel und seine Crew" 
                className="w-full h-auto object-contain drop-shadow-2xl px-4"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};