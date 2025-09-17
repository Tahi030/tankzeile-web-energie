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
          
          {/* Main Text */}
          <motion.div 
            className="text-center mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 text-muted-foreground">
              <p>
                Manchmal bringt eine Diagnose wie Laktoseintoleranz, Fruktoseintoleranz, Histaminintoleranz oder eine andere Unverträglichkeit den Familienalltag ins Wanken.
              </p>
              <p>
                Für viele bedeutet das: lange Wartezeiten auf Beratung, hohe Kosten oder ein unüberschaubarer Dschungel an Informationen im Internet.
              </p>
              <p className="text-foreground font-medium">
                Genau hier setzt <strong>Essen ist fertig!</strong> an – kompakt, verständlich und sofort nutzbar.
              </p>
              
              <ul className="space-y-3 max-w-2xl mx-auto">
                <li className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong className="text-foreground">einfach erklärt</strong> – ohne komplizierte Fachbegriffe</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong className="text-foreground">praktisch anwendbar</strong> – mit Listen, Vorlagen und Rezeptideen</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span><strong className="text-foreground">übersichtlich gebündelt</strong> – alles an einem Ort</span>
                </li>
              </ul>
              
              <p>
                Ein besonderes Highlight ist der Bereich <strong className="text-foreground">Fragen & Antworten</strong>: Dort findest du Lösungen zu genau den Themen, die im Alltag wirklich zählen – von sicherer Ernährung über den Kita- und Schulalltag bis hin zu typischen Unsicherheiten.
              </p>
              
              <p>
                So erhältst du Orientierung, Sicherheit und das gute Gefühl, nicht allein zu sein.
                <br />
                Ohne Wartezeit, ohne Verwirrung – sondern direkt einsetzbar im Alltag.
              </p>
              
              <p className="text-foreground font-medium">
                Denn: jedes Kind verdient es, Essen als etwas Schönes und Unbeschwertes zu erleben.
              </p>
            </div>
          </motion.div>
          
          {/* Product Box */}
          <div className="max-w-6xl mx-auto space-y-8">
            <motion.div 
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-border/50 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-6 lg:items-center">
                {/* Mobile/Tablet: Stacked layout */}
                <div className="lg:hidden space-y-4">
                  {/* Title for mobile */}
                  <h2 className="text-xl font-bold text-foreground text-center">
                    Essen ist fertig! bei Laktoseintoleranz
                  </h2>
                  
                  {/* Content row for mobile/tablet */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    {/* Cover Image */}
                    <div className="flex justify-center sm:justify-start sm:flex-shrink-0">
                      <div className="w-20 h-28 sm:w-24 sm:h-32 bg-muted/50 rounded border-2 border-dashed border-border flex items-center justify-center">
                        <span className="text-muted-foreground text-xs text-center">
                          Cover
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <h3 className="font-medium text-foreground mb-2 text-sm">Übersicht:</h3>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>– 54 Seiten PDF</li>
                            <li>– einfache Erklärungen</li>
                            <li>– Listen, Vorlagen & Rezepte</li>
                            <li>– Fragen-&-Antworten-Bereich</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-medium text-foreground mb-2 text-sm">Ausschnitte ansehen:</h3>
                          <div className="flex items-center gap-2">
                            <div className="relative">
                              <div className="w-6 h-8 bg-muted/50 rounded border transform -rotate-12 absolute"></div>
                              <div className="w-6 h-8 bg-muted/50 rounded border relative z-10"></div>
                              <div className="w-6 h-8 bg-muted/50 rounded border transform rotate-12 absolute top-0 left-1.5"></div>
                            </div>
                            <span className="text-xs text-muted-foreground ml-2">Vorschau</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Button for mobile */}
                  <div className="text-center space-y-2 pt-2">
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-colors font-medium w-full sm:w-auto">
                      Per PayPal sichern
                    </button>
                    <p className="text-xs text-muted-foreground">
                      Nach der Bezahlung erhältst du das PDF inkl. Rechnung per E-Mail.
                    </p>
                  </div>
                </div>

                {/* Desktop: Horizontal layout */}
                <div className="hidden lg:contents">
                  {/* Left: Cover Image */}
                  <div className="lg:col-span-2 flex justify-center">
                    <div className="w-24 h-32 bg-muted/50 rounded border-2 border-dashed border-border flex items-center justify-center">
                      <span className="text-muted-foreground text-xs text-center">
                        Cover
                      </span>
                    </div>
                  </div>
                  
                  {/* Center: Title and Content */}
                  <div className="lg:col-span-6 space-y-4">
                    <h2 className="text-xl font-bold text-foreground">
                      Essen ist fertig! bei Laktoseintoleranz
                    </h2>
                    
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-medium text-foreground mb-2 text-sm">Übersicht:</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>– 54 Seiten PDF</li>
                          <li>– einfache Erklärungen</li>
                          <li>– Listen, Vorlagen & Rezepte</li>
                          <li>– Fragen-&-Antworten-Bereich</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-foreground mb-2 text-sm">Ausschnitte ansehen:</h3>
                        <div className="flex items-center gap-2">
                          <div className="relative">
                            <div className="w-8 h-10 bg-muted/50 rounded border transform -rotate-12 absolute"></div>
                            <div className="w-8 h-10 bg-muted/50 rounded border relative z-10"></div>
                            <div className="w-8 h-10 bg-muted/50 rounded border transform rotate-12 absolute top-0 left-2"></div>
                          </div>
                          <span className="text-xs text-muted-foreground ml-4">Vorschau</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right: Button */}
                  <div className="lg:col-span-4 text-right space-y-2">
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-colors font-medium">
                      Per PayPal sichern
                    </button>
                    <p className="text-xs text-muted-foreground">
                      Nach der Bezahlung erhältst du das PDF inkl. Rechnung per E-Mail.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EssenIstFertig;