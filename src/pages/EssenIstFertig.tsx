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
            className="text-3xl md:text-5xl font-bold mb-8 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Essen ist fertig!
          </motion.h1>
          
          {/* Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Laktoseintoleranz Package - Complete */}
            <motion.div 
              className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Essen ist fertig! bei Laktoseintoleranz
              </h2>
              
              <div className="space-y-4 mb-6 text-muted-foreground">
                <p>
                  Dein Kind hat die Diagnose Laktoseintoleranz bekommen?
                  Oft bedeutet das: lange Wartezeiten auf Beratung, hohe Kosten oder ein unüberschaubarer Informationsdschungel im Internet. Genau deshalb gibt es dieses Paket – klar, kompakt und sofort nutzbar.
                </p>
                
                <ul className="space-y-2">
                  <li><strong className="text-foreground">verständlich erklärt</strong> – ohne komplizierte Fachbegriffe</li>
                  <li><strong className="text-foreground">praktisch umsetzbar</strong> – mit Listen, Vorlagen und Rezeptideen</li>
                  <li><strong className="text-foreground">strukturiert</strong> – alles an einem Ort gesammelt</li>
                </ul>
                
                <p>
                  Besonders hilfreich: der Bereich Fragen & Antworten. Hier findest du Antworten auf die Themen, die im Alltag wirklich wichtig sind – von sicherer Ernährung über den Schulalltag bis hin zu typischen Unsicherheiten.
                </p>
                
                <p>
                  So erhältst du Wissen, das Orientierung gibt und gleichzeitig das Gefühl vermittelt, nicht allein zu sein. Ohne Warten, ohne Informationsflut – sondern direkt anwendbar im Alltag.
                </p>
                
                <p className="font-medium text-foreground">
                  Denn: jedes Kind soll die Chance haben, Essen als etwas Schönes und Unbeschwertes zu erleben.
                </p>
              </div>
              
              {/* Info Box */}
              <div className="bg-secondary/20 rounded-lg p-4 mb-6">
                <ul className="text-sm space-y-1 text-foreground">
                  <li>– 55 Seiten PDF</li>
                  <li>– digital, Versand per Mail nach Zahlung</li>
                  <li>– Preis: [Platzhalter einsetzen]</li>
                </ul>
              </div>
              
              <button className="w-full bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-md transition-colors font-medium mb-2">
                Per PayPal sichern
              </button>
              
              <p className="text-xs text-muted-foreground text-center">
                Nach der Bezahlung erhältst du das PDF inkl. Rechnung per E-Mail.
              </p>
            </motion.div>

            {/* Fruktoseintoleranz Package - Placeholder */}
            <motion.div 
              className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Essen ist fertig! bei Fruktoseintoleranz
              </h2>
              
              <div className="space-y-4 mb-6 text-muted-foreground">
                <p>[Text Platzhalter]</p>
              </div>
              
              {/* Info Box */}
              <div className="bg-secondary/20 rounded-lg p-4 mb-6">
                <ul className="text-sm space-y-1 text-foreground">
                  <li>– [Seitenzahl einsetzen]</li>
                  <li>– digital, Versand per Mail nach Zahlung</li>
                  <li>– Preis: [Platzhalter einsetzen]</li>
                </ul>
              </div>
              
              <button className="w-full bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-md transition-colors font-medium mb-2">
                Per PayPal sichern
              </button>
              
              <p className="text-xs text-muted-foreground text-center">
                Nach der Bezahlung erhältst du das PDF inkl. Rechnung per E-Mail.
              </p>
            </motion.div>

            {/* Histaminintoleranz Package - Placeholder */}
            <motion.div 
              className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Essen ist fertig! bei Histaminintoleranz
              </h2>
              
              <div className="space-y-4 mb-6 text-muted-foreground">
                <p>[Text Platzhalter]</p>
              </div>
              
              {/* Info Box */}
              <div className="bg-secondary/20 rounded-lg p-4 mb-6">
                <ul className="text-sm space-y-1 text-foreground">
                  <li>– [Seitenzahl einsetzen]</li>
                  <li>– digital, Versand per Mail nach Zahlung</li>
                  <li>– Preis: [Platzhalter einsetzen]</li>
                </ul>
              </div>
              
              <button className="w-full bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-md transition-colors font-medium mb-2">
                Per PayPal sichern
              </button>
              
              <p className="text-xs text-muted-foreground text-center">
                Nach der Bezahlung erhältst du das PDF inkl. Rechnung per E-Mail.
              </p>
            </motion.div>

            {/* Additional Intolerance Package - Placeholder */}
            <motion.div 
              className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Essen ist fertig! bei [weitere Intoleranz]
              </h2>
              
              <div className="space-y-4 mb-6 text-muted-foreground">
                <p>[Text Platzhalter]</p>
              </div>
              
              {/* Info Box */}
              <div className="bg-secondary/20 rounded-lg p-4 mb-6">
                <ul className="text-sm space-y-1 text-foreground">
                  <li>– [Seitenzahl einsetzen]</li>
                  <li>– digital, Versand per Mail nach Zahlung</li>
                  <li>– Preis: [Platzhalter einsetzen]</li>
                </ul>
              </div>
              
              <button className="w-full bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-md transition-colors font-medium mb-2">
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