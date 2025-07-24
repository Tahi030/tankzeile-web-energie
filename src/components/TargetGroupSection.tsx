
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
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl mb-4 text-primary-dark text-left italic font-normal">Schön, dass du da bist!</h2>
              {/* Hand-drawn line effect */}
              <div className="flex justify-start">
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
                      filter: 'url(#roughPaperTarget)',
                    }}
                  />
                  <defs>
                    <filter id="roughPaperTarget">
                      <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="1" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4 text-base md:text-lg">
              <p>
                Ich bin Tamara Hillmann – Gründerin der Tankzeile, einem Bildungs- und Gesundheitsprogramm im Herzen Berlins.
              </p>
              
              <p>
                Die Tankzeile richtet sich an Familien mit Vorschulkindern und alle, die täglich Zeit mit Kindern verbringen – ob in Kitas, im privaten Umfeld oder in der frühkindlichen Bildung. Im Mittelpunkt stehen kindgerechte Ernährung, Achtsamkeit im Alltag und einfache Ideen für ein strukturierteres, harmonischeres Familienleben.
              </p>
              
              <p>
                Ich zeige, wie Kinder spielerisch verstehen können, was ihrem Körper gut tut – und wie Erwachsene neue Impulse für ihren Alltag mitnehmen können.
              </p>
              
              <p>
                Besonders liegt mir die Zusammenarbeit mit regionalen Unternehmen und Start-ups am Herzen, die sich für bewusste Ernährung einsetzen – beispielsweise durch frische, unverarbeitete Zutaten, alternative Süßungsmittel oder kindgerechte Produkte ohne Zusatzstoffe. Auch das Thema Lebensmittelunverträglichkeiten bei Kindern liegt mir am Herzen.
              </p>
              
              <p className="space-y-3">
                Die Tankzeile bringt Gesundheit in Bewegung – für Groß und Klein.
              </p>
              
              <motion.div 
                className="mt-8 text-lg md:text-xl font-medium text-center border-t border-primary/20 pt-6 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center justify-center mb-2">
                  <div className="flex justify-center mb-2">
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
                          filter: 'url(#roughDashTarget)',
                        }}
                      />
                      <defs>
                        <filter id="roughDashTarget">
                          <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="1" />
                          <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
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
