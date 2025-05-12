
import { motion } from "framer-motion";

const TargetGroupSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-primary-light/50 to-muted">
      <div className="container-custom">
        <motion.div 
          className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary/10 max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary-light/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-secondary-light/10 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="section-title text-center mb-6">Für Familien, PädagogInnen und alle, die gesunde Wege im Alltag suchen.</h2>
            
            <div className="max-w-3xl mx-auto space-y-6 text-lg">
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
              
              <ul className="list-disc pl-6 space-y-4">
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
                className="mt-10 text-xl font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p>👉 Willst du wissen, wie das geht?</p>
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
