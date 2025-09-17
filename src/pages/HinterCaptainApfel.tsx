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
                Ich bin Tamara Hillmann, der kreative Kopf hinter dem Projekt Captain Apfel.
                Ich verbinde eigene Erfahrungen mit fundiertem Fachwissen und bilde mich kontinuierlich weiter.
              </p>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Meine Zertifikate & Nachweise
                </h2>
                <p className="text-muted-foreground mb-6">
                  Hier finden Sie eine Auswahl meiner Fortbildungen und Zertifikate. Weiterbildung ist mir besonders wichtig – gerade im Umgang mit Kindern. So möchte ich Vertrauen schaffen und zeigen, dass ich mein Wissen stetig vertiefe.
                </p>
                
                {/* Certificates with PDF Previews */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <a 
                    href="/pdfs/Kinderschutzkonzept.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary/20 rounded-lg p-4 hover:bg-secondary/30 transition-colors border border-border/30"
                  >
                    <div className="w-full h-48 bg-white rounded-lg mb-3 overflow-hidden border">
                      <object
                        data="/pdfs/Kinderschutzkonzept.pdf#zoom=50"
                        type="application/pdf"
                        className="w-full h-full"
                      >
                        <div className="w-full h-full bg-muted rounded-lg flex flex-col items-center justify-center">
                          <div className="text-4xl mb-2">📜</div>
                          <span className="text-muted-foreground text-sm text-center">Kinderschutzkonzept<br/>für Kitas erstellen</span>
                        </div>
                      </object>
                    </div>
                    <p className="text-sm font-medium text-foreground text-center">Kinderschutzkonzept für Kitas erstellen</p>
                  </a>
                  
                  <a 
                    href="/pdfs/Was_ist_Adultismus.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary/20 rounded-lg p-4 hover:bg-secondary/30 transition-colors border border-border/30"
                  >
                    <div className="w-full h-48 bg-white rounded-lg mb-3 overflow-hidden border">
                      <object
                        data="/pdfs/Was_ist_Adultismus.pdf#zoom=50"
                        type="application/pdf"
                        className="w-full h-full"
                      >
                        <div className="w-full h-full bg-muted rounded-lg flex flex-col items-center justify-center">
                          <div className="text-4xl mb-2">📜</div>
                          <span className="text-muted-foreground text-sm text-center">Was ist<br/>Adultismus?</span>
                        </div>
                      </object>
                    </div>
                    <p className="text-sm font-medium text-foreground text-center">Was ist Adultismus?</p>
                  </a>
                  
                  <a 
                    href="/pdfs/Was_ist_Neurodiversität.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary/20 rounded-lg p-4 hover:bg-secondary/30 transition-colors border border-border/30"
                  >
                    <div className="w-full h-48 bg-white rounded-lg mb-3 overflow-hidden border">
                      <object
                        data="/pdfs/Was_ist_Neurodiversität.pdf#zoom=50"
                        type="application/pdf"
                        className="w-full h-full"
                      >
                        <div className="w-full h-full bg-muted rounded-lg flex flex-col items-center justify-center">
                          <div className="text-4xl mb-2">📜</div>
                          <span className="text-muted-foreground text-sm text-center">Was ist<br/>Neurodiversität?</span>
                        </div>
                      </object>
                    </div>
                    <p className="text-sm font-medium text-foreground text-center">Was ist Neurodiversität?</p>
                  </a>
                  
                  <a 
                    href="/pdfs/Interaktion.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary/20 rounded-lg p-4 hover:bg-secondary/30 transition-colors border border-border/30"
                  >
                    <div className="w-full h-48 bg-white rounded-lg mb-3 overflow-hidden border">
                      <object
                        data="/pdfs/Interaktion.pdf#zoom=50"
                        type="application/pdf"
                        className="w-full h-full"
                      >
                        <div className="w-full h-full bg-muted rounded-lg flex flex-col items-center justify-center">
                          <div className="text-4xl mb-2">📜</div>
                          <span className="text-muted-foreground text-sm text-center">Fachkraft-Kind-<br/>Interaktion</span>
                        </div>
                      </object>
                    </div>
                    <p className="text-sm font-medium text-foreground text-center">Fachkraft-Kind-Interaktion</p>
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