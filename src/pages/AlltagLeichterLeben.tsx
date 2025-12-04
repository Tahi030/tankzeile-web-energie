
import { useEffect } from "react";
import { motion } from "framer-motion";
import powercrewLogo from "@/assets/powercrew-logo.svg";

const AlltagLeichterLeben = () => {
  useEffect(() => {
    document.title = "Powercrew des Monats | Captain Apfel";
    document.body.classList.add('bg-background');
    
    return () => {
      document.body.classList.remove('bg-background');
    };
  }, []);

  return (
    <main className="min-h-screen section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Section - Logo Banner + Content Below */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo Banner */}
            <div className="flex justify-center mb-10">
              <img 
                src={powercrewLogo} 
                alt="Powercrew des Monats Logo" 
                className="w-full max-w-2xl"
              />
            </div>

            {/* Content - Text + Photo */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div>
                <h1 className="heading-lg mb-4">
                  Danke an unsere Alltagshelden
                </h1>
                <p className="body-base text-muted-foreground">
                  Mit der Aktion „Powercrew des Monats" sagt Captain Apfel Danke an die Menschen, die jeden Tag für unsere Kinder da sind. Pädagogische Fachkräfte leisten großartige Arbeit – oft im Verborgenen, zwischen Tränen trocknen, Brotdosen auspacken und kleinen großen Sorgen. Mit der Powercrew würdigen wir jeden Monat eine Einrichtung, die sich mit Herz, Ideenreichtum und Engagement für gesundes Aufwachsen stark macht. Vielleicht spürst du beim Lesen: Unsere Kita hätte diesen Titel auch verdient – dann melde dich gerne.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <img 
                  src="/assets/powercrew-uebergabe-dezember-2025.jpg" 
                  alt="Übergabe Powercrew des Monats an Kita Dreikäsehoch" 
                  className="w-full max-w-sm rounded-lg shadow-md"
                />
              </div>
            </div>
          </motion.div>

          {/* Powercrew Entries Section */}
          <div className="space-y-8">
            
            {/* December 2025 Entry */}
            <motion.div
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="heading-md mb-4">
                Powercrew des Monats Dezember 2025: Kita Dreikäsehoch, Berlin-Köpenick
              </h2>
              <p className="body-base text-muted-foreground">
                Im Dezember erhält die humanistische Kita Dreikäsehoch in Berlin-Köpenick den Titel „Powercrew des Monats". Hier wird mit Kopf, Herz und Hand gearbeitet: Als Ackerkita lernen die Kinder direkt im Garten, woher ihr Essen kommt – vom Samen bis zur Ernte. Eine eigene Köchin kocht täglich frisch für die Kinder, statt auf angelieferte Standardkost zu setzen. Dabei steht jedes Kind mit seinen Bedürfnissen im Mittelpunkt: Inklusion und Teilhabe werden im Alltag gelebt, ob beim gemeinsamen Essen, Spielen oder Entdecken im großen Außengelände. Dieses Team zeigt jeden Tag, wie gelebte Wertschätzung, gesunde Ernährung und Naturerfahrung Hand in Hand gehen – genau dafür zeichnen wir die Kita Dreikäsehoch als Powercrew des Monats aus.
              </p>
            </motion.div>

            {/* Future Entries Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="heading-md mb-6 mt-12">Frühere und kommende Powercrews</h2>
              
              <div className="space-y-4">
                <div className="bg-card/30 backdrop-blur-sm rounded-xl p-5 border border-border/30">
                  <p className="body-base text-muted-foreground italic">
                    Powercrew Januar 2026 – folgt bald
                  </p>
                </div>
                
                <div className="bg-card/30 backdrop-blur-sm rounded-xl p-5 border border-border/30">
                  <p className="body-base text-muted-foreground italic">
                    Powercrew Februar 2026 – folgt bald
                  </p>
                </div>
                
                <div className="bg-card/30 backdrop-blur-sm rounded-xl p-5 border border-border/30">
                  <p className="body-base text-muted-foreground italic">
                    Powercrew März 2026 – folgt bald
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

export default AlltagLeichterLeben;
