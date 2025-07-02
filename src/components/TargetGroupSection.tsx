
import { motion } from "framer-motion";

const TargetGroupSection = () => {
  return (
    <section className="py-0 bg-gradient-to-b from-primary-light/50 to-muted">
      <div className="container-custom">
        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-primary/20 max-w-4xl mx-auto relative overflow-hidden -mt-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary-light/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-secondary-light/10 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-dark text-left uppercase">FÜR ALLE, DIE GESUNDE WEGE IM ALLTAG SUCHEN</h2>
            
            <div className="max-w-3xl mx-auto space-y-4 text-base md:text-lg">
              <p>
                <strong>Für Menschen mit Visionen</strong>, 
                die zurück zum Ursprung wollen – zu echter Nahrung, Verbindung und Gesundheit, jenseits von starren Vorgaben und Industrie-Dominanz.
              </p>
              
              <p>
                <strong>Für Eltern</strong>, die ihren Kindern zeigen möchten, was wirklich gut tut – ohne Druck, ohne Verbote.
              </p>
              
              <p>
                <strong>Für alle</strong>, die neue Wege suchen, statt alte Muster zu wiederholen.
              </p>
              
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  Ich glaube: <strong>Veränderung ist einfach</strong>, wenn wir wieder spüren, was uns stärkt. 
                  Nicht durch Müssen, sondern durch kleine Impulse, die sich gut anfühlen.
                </li>
                
                <li>
                  <strong>Unsere Kinder sind der beste Anfang</strong>. 
                  Denn echtes Wohlfühlen beginnt dort, wo wir uns nicht mehr allein fühlen.
                </li>
              </ul>
              
              <motion.div 
                className="mt-8 text-lg md:text-xl font-medium text-center border-t border-primary/20 pt-6 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center mb-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" className="text-primary mr-2">
                    <circle
                      cx="6"
                      cy="6"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      className="opacity-70"
                      style={{
                        filter: 'url(#roughDot)',
                      }}
                    />
                    <defs>
                      <filter id="roughDot">
                        <feTurbulence baseFrequency="0.08" numOctaves="2" result="noise" seed="2" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.6" />
                      </filter>
                    </defs>
                  </svg>
                  <span>Willst du wissen, wie das geht?</span>
                </div>
                <p>Lern die Tankwelten kennen –</p>
                <p>und entdecke, wie wir uns wieder verbinden können.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetGroupSection;
