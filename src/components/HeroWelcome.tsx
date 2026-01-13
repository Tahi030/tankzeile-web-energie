import { motion } from "framer-motion";
import captainApfelJumping from "@/assets/captain-apfel-jumping.png";

export const HeroWelcome = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[hsl(32_55%_96%)] pt-8 md:pt-12 lg:pt-16">
      
      {/* Soft sky-like background with gentle clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft ambient glow */}
        <motion.div 
          className="absolute top-1/3 right-1/4 w-[45rem] h-[45rem] bg-[hsl(30_50%_90%)] rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Secondary soft glow */}
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-[30rem] h-[30rem] bg-[hsl(32_45%_92%)] rounded-full blur-[100px]"
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.4, 0.55, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
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
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-snug">
                    Starke Kids. Entspannte Bäuche
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
                {/* Soft glow for blending */}
                <motion.div
                  className="absolute inset-0 -inset-16 bg-gradient-radial from-[hsl(30_50%_92%)] via-[hsl(32_55%_96%)] to-transparent rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.6, 0.75, 0.6],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Gentle floating animation */}
                <motion.img 
                  src={captainApfelJumping} 
                  alt="Captain Apfel schwebt" 
                  className="relative w-full h-auto"
                  style={{
                    filter: 'drop-shadow(0 20px 30px rgba(150, 120, 90, 0.25))',
                  }}
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Elegant decorative elements */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg">
                {/* Subtle gradient line */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  className="h-[2px] w-full bg-gradient-to-r from-transparent via-[hsl(80_40%_45%)/40] to-transparent"
                />
                
                {/* Floating accent dots */}
                <div className="flex justify-center gap-8 mt-4">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                      className="relative"
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-[hsl(80_40%_45%)]"
                        animate={{
                          y: [0, -4, 0],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 2.5,
                          delay: i * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
          </div>

          
        </div>
      </div>
    </section>
  );
};