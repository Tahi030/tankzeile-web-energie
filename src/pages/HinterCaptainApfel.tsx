import { useEffect } from "react";
import { motion } from "framer-motion";

const HinterCaptainApfel = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Hinter Captain Apfel – Captain Apfel & seine Crew";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Erfahre mehr über die Geschichte und Mission von Captain Apfel & seiner Crew.');
    }
    
    // Apply background color to the body
    document.body.classList.add('bg-background');
    
    return () => {
      // Remove background color when component unmounts
      document.body.classList.remove('bg-background');
    };
  }, []);

  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-8 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Hinter Captain Apfel
          </motion.h1>
          
          <motion.div 
            className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 shadow-sm text-left"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Hallo, ich bin Tamara Hillmann – der kreative Kopf hinter Captain Apfel.
                Ich arbeite eng mit Kindern und Einrichtungen zusammen und mir ist es wichtig, mich dort aktiv einzubringen. Am Ende steht für mich immer das Kind – mit seinen Bedürfnissen, seiner Neugier und seiner Freude.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Mir ist es wichtig, mein Wissen ständig zu erweitern. Deshalb setze ich mich intensiv mit den Themen ganzheitliche Gesundheit und Unverträglichkeiten auseinander. Schritt für Schritt entstehen daraus die Pakete, die Familien im Alltag entlasten und Orientierung geben.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Meine bisherigen Fortbildungen und Zertifikate findest du gleich hier auf der Seite – weil mir Qualität, Transparenz und Weiterentwicklung wichtig sind.
              </p>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Meine Zertifikate & Nachweise
                </h2>
                <p className="text-muted-foreground mb-6">
                  Hier finden Sie eine Auswahl meiner Fortbildungen und Zertifikate. Weiterbildung ist mir besonders wichtig – gerade im Umgang mit Kindern.
                </p>
                
                {/* Certificates */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <a 
                    href="/pdfs/Kinderschutzkonzept.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-border/30"
                  >
                    <img
                      src="/certificates/kinderschutzkonzept.jpg"
                      alt="Kinderschutzkonzept Zertifikat"
                      className="w-full h-32 object-cover"
                    />
                  </a>
                  
                  <a 
                    href="/pdfs/Was_ist_Adultismus.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-border/30"
                  >
                    <img
                      src="/certificates/adultismus.jpg"
                      alt="Was ist Adultismus Zertifikat"
                      className="w-full h-32 object-cover"
                    />
                  </a>
                  
                  <a 
                    href="/pdfs/Was_ist_Neurodiversität.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-border/30"
                  >
                    <img
                      src="/certificates/neurodiversitaet.jpg"
                      alt="Was ist Neurodiversität Zertifikat"
                      className="w-full h-32 object-cover"
                    />
                  </a>
                  
                  <a 
                    href="/pdfs/Interaktion.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-border/30"
                  >
                    <img
                      src="/certificates/interaktion.jpg"
                      alt="Fachkraft-Kind-Interaktion Zertifikat"
                      className="w-full h-32 object-cover"
                    />
                  </a>
                </div>
                
                <p className="text-muted-foreground text-sm">
                  – aktuell: Selbststudium zur Fachberaterin für ganzheitliche Gesundheit
                </p>
              </div>
              
              <p className="text-lg font-medium text-foreground text-center pt-4">
                Mein Ziel: Wissen weitergeben, das praktisch, einfach und alltagstauglich ist.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default HinterCaptainApfel;