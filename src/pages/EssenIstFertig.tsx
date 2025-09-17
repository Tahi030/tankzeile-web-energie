import { useEffect } from "react";
import { motion } from "framer-motion";

const EssenIstFertig = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Essen ist fertig! – Captain Apfel & seine Crew";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Essen ist fertig! Entdecke gesunde und leckere Rezepte mit Captain Apfel & seiner Crew.');
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
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            className="text-3xl md:text-5xl font-bold mb-8 text-center text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Essen ist fertig!
          </motion.h1>
          
          {/* Introduction */}
          <motion.div 
            className="text-center mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4 text-muted-foreground">
              <p>
                Manchmal bringt das Leben eine Diagnose mit sich, die den Familienalltag auf den Kopf stellt – Laktoseintoleranz, Fruktoseintoleranz, Histaminintoleranz oder andere Unverträglichkeiten.
              </p>
              <p>
                Beratungstermine sind oft schwer zu bekommen, mit hohen Kosten verbunden oder erfordern lange Wartezeiten.
              </p>
              <p className="text-foreground font-medium">
                Genau hier setzt <strong>Essen ist fertig!</strong> an:
                <br />
                kompakt wie eine Beratung, sofort verfügbar, klar erklärt und direkt im Alltag nutzbar.
              </p>
            </div>
          </motion.div>
          
          {/* Package Card */}
          <div className="flex justify-center">
            <motion.div 
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg max-w-lg w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-foreground text-center">
                Essen ist fertig! bei Laktoseintoleranz
              </h2>
              
              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-foreground">Übersicht:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong className="text-foreground">54 Seiten</strong> kompaktes PDF</li>
                  <li>• <strong className="text-foreground">einfache Erklärungen</strong> ohne Fachsprache</li>
                  <li>• <strong className="text-foreground">Listen, Vorlagen und Rezeptideen</strong></li>
                  <li>• <strong className="text-foreground">Fragen-&-Antworten-Bereich</strong> für Alltagssituationen</li>
                </ul>
              </div>
              
              <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-colors font-medium mb-4">
                Per PayPal sichern
              </button>
              
              <p className="text-xs text-muted-foreground text-center">
                Nach der Bezahlung erhältst du das PDF inkl. Rechnung per E-Mail.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EssenIstFertig;