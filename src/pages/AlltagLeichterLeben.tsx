import { useEffect } from "react";
import { motion } from "framer-motion";
import powercrewBanner from "@/assets/powercrew-banner.svg";

const AlltagLeichterLeben = () => {
  useEffect(() => {
    document.title = "Powercrew des Monats | Captain Apfel";
  }, []);

  return (
    <main className="min-h-screen bg-muted pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Logo Banner - Full Width, Bottom Cropped */}
          <motion.div
            className="w-full overflow-hidden mb-8 max-h-[140px] md:max-h-[280px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={powercrewBanner}
              alt="Powercrew des Monats"
              className="w-full max-w-3xl mx-auto -mb-[25%] md:-mb-[15%]"
            />
          </motion.div>

          {/* Introduction Text */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="heading-lg mb-4">Danke an unsere Alltagshelden</h1>
            <p className="body-base text-muted-foreground max-w-3xl mx-auto">
              Mit der Aktion „Powercrew des Monats" sagt Captain Apfel Danke an die Menschen, die jeden Tag für unsere
              Kinder da sind. Pädagogische Fachkräfte leisten großartige Arbeit – oft im Verborgenen, zwischen Tränen
              trocknen, Brotdosen auspacken und kleinen großen Sorgen. Mit der Powercrew wird jeden Monat eine
              Einrichtung gewürdigt, die sich mit Herz, Ideenreichtum und Engagement für gesundes Aufwachsen stark
              macht. Vielleicht spürst du beim Lesen: Unsere Kita hätte diesen Titel auch verdient – dann melde dich
              gerne.
            </p>
          </motion.div>

          {/* December Entry - Image Left, Text Right */}
          <motion.div
            className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-border/30 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
              <div className="flex items-start justify-center md:justify-start">
                <img
                  src="/assets/powercrew-uebergabe-dezember-2025.jpg"
                  alt="Übergabe Powercrew des Monats an Kita Dreikäsehoch"
                  className="w-48 md:w-56 lg:w-64 rounded-lg shadow-md object-cover"
                />
              </div>
              <div>
                <h2 className="heading-md mb-4 text-destructive">
                  Powercrew des Monats Dezember 2025: Kita Dreikäsehoch, Berlin-Köpenick
                </h2>
                <p className="body-base text-muted-foreground">
                  Im Dezember erhält die humanistische Kita Dreikäsehoch in Berlin-Köpenick den Titel „Powercrew des
                  Monats". Hier wird mit Kopf, Herz und Hand gearbeitet: Als Ackerkita lernen die Kinder direkt im
                  Garten, woher ihr Essen kommt – vom Samen bis zur Ernte. Eine eigene Köchin kocht täglich frisch für
                  die Kinder, statt auf angelieferte Standardkost zu setzen. Dabei steht jedes Kind mit seinen
                  Bedürfnissen im Mittelpunkt: Inklusion und Teilhabe werden im Alltag gelebt, ob beim gemeinsamen
                  Essen, Spielen oder Entdecken im großen Außengelände. Dieses Team zeigt jeden Tag, wie gelebte
                  Wertschätzung, gesunde Ernährung und Naturerfahrung Hand in Hand gehen – genau dafür zeichnen wir die
                  Kita Dreikäsehoch als Powercrew des Monats aus.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Next Powercrew Teaser */}
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="body-lg text-muted-foreground italic">Und wer wird die nächste Powercrew?</p>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default AlltagLeichterLeben;
