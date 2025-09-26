import { motion } from "framer-motion";

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
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary font-playfair leading-tight relative z-10">
              Captain Apfel
            </h1>
            <p className="text-2xl md:text-3xl text-secondary font-medium relative z-10">
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
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              Initiative für starke Entwicklung
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground italic">
              Gesundheit, die Kindern schmeckt.
            </p>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0]
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.4 },
              scale: { duration: 0.8, delay: 0.4 },
              y: { 
                duration: 3, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 1
              }
            }}
            className="flex justify-center"
          >
            <img 
              src="/assets/captain-apfel-hero.png" 
              alt="Captain Apfel - Superheld für gesunde Ernährung" 
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};