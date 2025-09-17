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
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
              Essen ist fertig! – Alltagshilfen bei Nahrungsunverträglichkeiten
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground mb-8">
              <p>
                Diagnosen wie Laktoseintoleranz, Fructose- oder Glutenunverträglichkeit werfen viele Fragen auf. 
                <strong className="text-foreground"> Essen ist fertig!</strong> bietet dir sofortige Entlastung: fundiertes Wissen, einfache Vorlagen und alltagstaugliche Rezepte.
              </p>
              <p className="text-foreground font-medium">
                Denn: jedes Kind verdient es, Essen als etwas Schönes und Unbeschwertes zu erleben.
              </p>
            </div>
          </motion.div>
          
          {/* Band 1 Section */}
          <motion.section 
            id="band1"
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                  Band 1: Essen ist fertig! bei Laktoseintoleranz
                </h2>
                
                <div className="text-center mb-8">
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto">
                    Deine kompakte Elternhilfe nach der Diagnose – übersichtlich, praxisnah und sofort nutzbar. 
                    In diesem Paket findest du alles, was du brauchst, um den Alltag leichter zu machen:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Left Column - Benefits List */}
                  <div className="space-y-4">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>über 50 Seiten klar aufbereitete Infos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Do's & Don'ts für Einkauf & Ernährung</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Vorlagen für Kita & Schule – direkt zum Ausfüllen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>10 schnelle Snackideen & kindgerechte Rezepte</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>den Wochenbaukasten (Tankbox) für entspanntes Familienessen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>einen umfangreichen FAQ-Teil mit Antworten wie in einer Beratung</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>ein Ernährungstagebuch zum Ausfüllen und Mitnehmen</span>
                      </li>
                    </ul>
                  </div>

                  {/* Right Column - Purchase Info */}
                  <div className="bg-card/50 rounded-lg p-6 border border-border/30 text-center space-y-4">
                    <div className="text-sm text-muted-foreground mb-2">
                      👉 Sofort nach Kauf als PDF per Mail erhältlich.
                    </div>
                    
                    <div className="text-3xl font-bold text-foreground mb-4">
                      Einmalig 24,90 €
                    </div>
                    
                    <motion.button
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg transition-colors font-medium text-lg w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Jetzt sichern über PayPal
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Preview Section */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Vorschau & Ausschnitte
              </h3>
              <p className="text-muted-foreground">
                Hier findest du bald einen Einblick in die Inhalte
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Preview Image 1 */}
              <div className="bg-card/50 rounded-lg p-4 border border-border/30 text-center">
                <div className="aspect-[3/4] bg-muted/50 rounded border-2 border-dashed border-border flex items-center justify-center mb-3">
                  <span className="text-muted-foreground text-sm">Do's & Don'ts</span>
                </div>
                <p className="text-sm text-muted-foreground">Einkaufslisten & Tipps</p>
              </div>
              
              {/* Preview Image 2 */}
              <div className="bg-card/50 rounded-lg p-4 border border-border/30 text-center">
                <div className="aspect-[3/4] bg-muted/50 rounded border-2 border-dashed border-border flex items-center justify-center mb-3">
                  <span className="text-muted-foreground text-sm">Kita-Vorlage</span>
                </div>
                <p className="text-sm text-muted-foreground">Vorlagen für Betreuung</p>
              </div>
              
              {/* Preview Image 3 */}
              <div className="bg-card/50 rounded-lg p-4 border border-border/30 text-center">
                <div className="aspect-[3/4] bg-muted/50 rounded border-2 border-dashed border-border flex items-center justify-center mb-3">
                  <span className="text-muted-foreground text-sm">Rezeptseite</span>
                </div>
                <p className="text-sm text-muted-foreground">Leckere Snackideen</p>
              </div>
              
              {/* Preview Image 4 */}
              <div className="bg-card/50 rounded-lg p-4 border border-border/30 text-center">
                <div className="aspect-[3/4] bg-muted/50 rounded border-2 border-dashed border-border flex items-center justify-center mb-3">
                  <span className="text-muted-foreground text-sm">FAQ-Auszug</span>
                </div>
                <p className="text-sm text-muted-foreground">Häufige Fragen</p>
              </div>
            </div>
          </motion.section>

          {/* Kommende Ausgaben */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center mb-8">
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
            </div>
          </motion.section>

        </div>
      </div>
    </main>
  );
};

export default EssenIstFertig;