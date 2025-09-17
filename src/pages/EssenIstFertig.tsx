import { useEffect } from "react";
import { motion } from "framer-motion";

const EssenIstFertig = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Essen ist fertig! – Alltagshilfen bei Nahrungsunverträglichkeiten – Captain Apfel & seine Crew";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Essen ist fertig! Alltagshilfen bei Nahrungsunverträglichkeiten - fundiertes Wissen, Vorlagen und Rezepte für den Familienalltag.');
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
            Essen ist fertig! – Alltagshilfen bei Nahrungsunverträglichkeiten
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
                Diagnosen wie Laktoseintoleranz, Fructose- oder Glutenunverträglichkeit werfen viele Fragen auf.
              </p>
              <p>
                <strong className="text-foreground">„Essen ist fertig!"</strong> bietet dir sofortige Entlastung: fundiertes Wissen, einfache Vorlagen und alltagstaugliche Rezepte.
              </p>
              <p className="text-foreground font-medium">
                Denn: jedes Kind verdient es, Essen als etwas Schönes und Unbeschwertes zu erleben.
              </p>
            </div>
          </motion.div>
          
          {/* Product Boxes */}
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Band 1: Laktoseintoleranz */}
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
                    Band 1: Laktoseintoleranz
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
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">
                            50+ Seiten Praxiswissen, Do's & Don'ts, Rezepte, Snackideen, Kita-Vorlagen, FAQ & Ernährungstagebuch
                          </p>
                          <p className="text-sm text-muted-foreground">
                            sofort nach Kauf als PDF erhältlich
                          </p>
                          <p className="text-lg font-bold text-foreground mt-2">
                            Preis: 24,90 €
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Button for mobile */}
                  <div className="text-center pt-2">
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-colors font-medium w-full sm:w-auto">
                      Jetzt sichern über PayPal
                    </button>
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
                  <div className="lg:col-span-7 space-y-3">
                    <h2 className="text-xl font-bold text-foreground">
                      Band 1: Laktoseintoleranz
                    </h2>
                    
                    <p className="text-sm text-muted-foreground">
                      50+ Seiten Praxiswissen, Do's & Don'ts, Rezepte, Snackideen, Kita-Vorlagen, FAQ & Ernährungstagebuch
                    </p>
                    
                    <p className="text-sm text-muted-foreground">
                      sofort nach Kauf als PDF erhältlich
                    </p>
                    
                    <p className="text-lg font-bold text-foreground">
                      Preis: 24,90 €
                    </p>
                  </div>
                  
                  {/* Right: Button */}
                  <div className="lg:col-span-3 text-right">
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-colors font-medium">
                      Jetzt sichern über PayPal
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Kommende Ausgaben */}
            <motion.div 
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Kommende Ausgaben
              </h2>
              
              <div className="space-y-3 max-w-2xl mx-auto">
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/30">
                  <p className="text-foreground font-medium">
                    Band 2: Fructoseintoleranz – in Vorbereitung
                  </p>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/30">
                  <p className="text-foreground font-medium">
                    Band 3: Glutenunverträglichkeit – geplant
                  </p>
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