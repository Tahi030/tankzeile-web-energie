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
              <div className="max-w-6xl mx-auto">
                
                {/* Main Content - Cover & Details */}
                <div className="grid md:grid-cols-5 gap-8 mb-8">
                  {/* Left Column - Cover Image */}
                  <div className="md:col-span-2">
                    <img 
                      src="/assets/essen-ist-fertig-title.jpg" 
                      alt="Essen ist fertig! bei Laktoseintoleranz Cover" 
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Right Column - Content & Purchase */}
                  <div className="md:col-span-3 space-y-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Essen ist fertig! bei Laktoseintoleranz
                      </h2>
                      
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        Deine kompakte Elternhilfe nach der Diagnose – übersichtlich, praxisnah und sofort nutzbar.
                      </p>

                      <ul className="space-y-2 text-muted-foreground mb-6">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>Grundlagen einfach erklärt: Diagnose verstehen & Alltag meistern</span>
                        </li>
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
                          <span>Vorlage für Kita & Schule – direkt nutzbar</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>10 schnelle Snackideen & kindgerechte Rezepte</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>Wochenbaukasten (Tankbox) mit Beispiel-Wochenplan, Einkaufsliste und Wochenplan-Vorlage</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>umfangreicher FAQ-Teil mit Antworten wie in einer Beratung</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>Vorlage Ernährungstagebuch – zum Ausfüllen</span>
                        </li>
                      </ul>
                    </div>

                    {/* Purchase Section */}
                    <div className="bg-card/50 rounded-lg p-4 border border-border/30 text-center space-y-3">
                      <div className="text-2xl font-bold text-foreground mb-3">
                        Einmalig 24,90 €
                      </div>
                      
                      <motion.a
                        href="https://paypal.me/tamarahillmann/24.90"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-colors font-medium w-full"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Jetzt sichern über PayPal
                      </motion.a>
                      
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        Dein PDF-Paket und die Rechnung erhältst du automatisch an die bei PayPal hinterlegte E-Mail-Adresse.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mini Preview Images */}
                <div className="border-t border-border/30 pt-6">
                  <div className="flex justify-center gap-4">
                    <div className="w-16 h-20 bg-gradient-to-br from-card to-card/80 rounded shadow-sm border border-border/30 flex items-center justify-center">
                      <span className="text-[10px] text-muted-foreground">Rezept</span>
                    </div>
                    <div className="w-16 h-20 bg-gradient-to-br from-card to-card/80 rounded shadow-sm border border-border/30 flex items-center justify-center">
                      <span className="text-[10px] text-muted-foreground">Vorlage</span>
                    </div>
                    <div className="w-16 h-20 bg-gradient-to-br from-card to-card/80 rounded shadow-sm border border-border/30 flex items-center justify-center">
                      <span className="text-[10px] text-muted-foreground">FAQ</span>
                    </div>
                  </div>
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