import { motion } from "framer-motion";
import logoText from "@/assets/logo-text.svg";
import crewBanner from "@/assets/crew-banner.svg";

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
        <div className="max-w-5xl mx-auto text-center space-y-8">
          
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 relative"
          >
            {/* Modern background element behind headline */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-primary/20 to-secondary/20 
                rounded-full blur-3xl opacity-60"></div>
              <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 
                w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-accent/15 to-primary/15 
                rounded-full blur-2xl opacity-50"></div>
              <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 
                w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-secondary/20 to-accent/20 
                rounded-full blur-2xl opacity-40"></div>
            </div>
            
            <div className="flex justify-center items-center relative z-10">
              <img 
                src={logoText} 
                alt="Captain Apfel Logo" 
                className="h-32 md:h-40 lg:h-48 w-auto object-contain"
              />
            </div>
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