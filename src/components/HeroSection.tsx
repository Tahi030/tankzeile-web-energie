
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-light/40 via-accent-light/30 to-secondary-light/40 flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-primary-light/30 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-secondary-light/30 blur-3xl pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-dark font-playfair">
              Tankzeile
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground max-w-3xl mx-auto">
              Ernährung & Lebensenergie
            </p>
            <Link to="/kontakt" className="btn-primary">
              Kontaktiere mich
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>

          {/* Two Main Boxes with Equal Spacing */}
          <div className="space-y-16">
            {/* First Box */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="stylish-box"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
            >
              <div className="stylish-box-effect"></div>
              <div className="stylish-box-effect-alt"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-dark uppercase">
                  Ernährung, Respekt und Verbindung
                </h2>
                {/* Hand-drawn line effect */}
                <div className="flex justify-center mb-6">
                  <svg width="120" height="8" viewBox="0 0 120 8" className="text-primary">
                    <path
                      d="M2,4 Q8,2 15,4 T30,3 Q40,5 50,4 T70,3 Q80,5 90,4 T110,3 Q115,2 118,4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-70"
                      style={{
                        filter: 'url(#roughPaper)',
                      }}
                    />
                    <defs>
                      <filter id="roughPaper">
                        <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="1" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                
                <div className="max-w-2xl mx-auto space-y-4 text-base md:text-lg">
                  <p>
                    Ich begleite Menschen dabei, wieder in Kontakt zu kommen – mit sich selbst, mit echter Nahrung und miteinander.
                  </p>
                  
                  <p>
                    Mein Fokus liegt auf <strong>nachhaltigen Veränderungen</strong>, die sich gut anfühlen und das Leben bereichern, anstatt es zu komplizieren.
                  </p>
                  
                  <p>
                    Durch <strong>Workshops, Impulse und Begleitung</strong> entstehen Räume, in denen Familien und Einzelpersonen ihre eigenen Wege zu mehr Wohlbefinden entdecken können.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Second Box */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="stylish-box"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
            >
              <div className="stylish-box-effect"></div>
              <div className="stylish-box-effect-alt"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-dark uppercase">
                  Für alle, die gesunde Wege im Alltag suchen
                </h2>
                {/* Hand-drawn line effect */}
                <div className="flex justify-center mb-6">
                  <svg width="120" height="8" viewBox="0 0 120 8" className="text-primary">
                    <path
                      d="M2,4 Q8,2 15,4 T30,3 Q40,5 50,4 T70,3 Q80,5 90,4 T110,3 Q115,2 118,4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-70"
                      style={{
                        filter: 'url(#roughPaper2)',
                      }}
                    />
                    <defs>
                      <filter id="roughPaper2">
                        <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="2" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                
                <div className="max-w-2xl mx-auto space-y-4 text-base md:text-lg">
                  <p>
                    <strong>Für Menschen mit Visionen</strong>, 
                    die zurück zum Ursprung wollen – zu echter Nahrung, Verbindung und Gesundheit.
                  </p>
                  
                  <p>
                    <strong>Für Eltern</strong>, die ihren Kindern zeigen möchten, was wirklich gut tut – ohne Druck, ohne Verbote.
                  </p>
                  
                  <p>
                    <strong>Für alle</strong>, die neue Wege suchen, statt alte Muster zu wiederholen.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
