import { motion } from "framer-motion";
import captainApfelHero from "@/assets/captain-apfel-hero.svg";

export const HeroWelcome = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[hsl(25_35%_90%)] pt-24 md:pt-20 lg:pt-16">
      
      {/* Harmonious background with soft gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main soft glow behind figure area */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[50rem] h-[50rem] bg-[hsl(25_40%_85%)] rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Secondary ambient glow */}
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-[35rem] h-[35rem] bg-[hsl(20_45%_82%)] rounded-full blur-[80px]"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.6, 0.4],
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
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-luckiest text-[hsl(80_40%_45%)] uppercase tracking-wide leading-tight">
                  Captain Apfel
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-luckiest text-primary">
                  auf gesunder Mission
                </p>
                <div className="pt-4 sm:pt-6 space-y-2 sm:space-y-3 border-t-2 border-primary/20 mt-4">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-snug">
                    Starke Kids. Entspannte Bäuche
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium italic leading-relaxed">
                    Gesundheit, die Kindern schmeckt.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Captain Apfel Figure */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end lg:pl-4 xl:pl-8"
            >
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                {/* Soft glow that blends with background */}
                <motion.div
                  className="absolute inset-0 -inset-12 bg-gradient-radial from-[hsl(25_40%_85%)] via-[hsl(25_35%_88%)] to-transparent rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Edge blur mask for seamless integration */}
                <div 
                  className="absolute inset-0 -inset-8 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, transparent 40%, hsl(25 35% 90% / 0.3) 70%, hsl(25 35% 90% / 0.8) 100%)',
                  }}
                />
                
                <motion.img 
                  src={captainApfelHero} 
                  alt="Captain Apfel - Initiative für starke Entwicklung" 
                  className="relative w-full h-auto drop-shadow-[0_20px_40px_rgba(180,140,100,0.25)]"
                  style={{
                    filter: 'drop-shadow(0 10px 30px rgba(180, 140, 100, 0.2))',
                  }}
                  animate={{
                    y: [0, -18, 0],
                    rotate: [0, 2, 0, -2, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
            
          </div>

          
        </div>
      </div>
    </section>
  );
};