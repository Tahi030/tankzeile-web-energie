import { useEffect } from "react";
import { motion } from "framer-motion";
import powercrewBanner from "@/assets/powercrew-banner-new.png";

const AlltagLeichterLeben = () => {
  useEffect(() => {
    document.title = "Powercrew des Jahres | Captain Apfel";
  }, []);

  return (
    <main className="min-h-screen bg-muted pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Logo Banner - Full Width */}
          <motion.div
            className="w-full mb-8 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={powercrewBanner}
              alt="Powercrew des Jahres"
              className="w-full max-w-4xl mx-auto h-auto object-contain"
            />
          </motion.div>

          {/* Hero Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="heading-lg mb-4">Die Powercrew des Jahres</h1>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Der Walk of Fame: Hier werden Kitas und Einrichtungen sichtbar, die sich besonders für die Gesundheit der Kinder stark machen.
            </p>
            <p className="body-base text-muted-foreground max-w-3xl mx-auto">
              Mit der Auszeichnung „Powercrew des Jahres" bedankt sich Captain Apfel bei den Menschen, die jeden Tag Großes leisten. Pädagogische Fachkräfte sind oft unsichtbare Helden. Hier bekommen sie die Bühne, die sie verdienen.
            </p>
            <p className="body-base text-muted-foreground max-w-3xl mx-auto mt-4">
              Der Walk of Fame ist eine wachsende Galerie: Jedes Jahr kommen neue engagierte Teams hinzu, die den Workshop „Reise zur Powerzentrale" durchgeführt oder sich besonders engagiert haben.
            </p>
          </motion.div>

          {/* Pioniere 2025 Entry */}
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
                  alt="Übergabe Powercrew des Jahres an Kita Dreikäsehoch"
                  className="w-48 md:w-56 lg:w-64 rounded-lg shadow-md object-cover"
                />
              </div>
              <div>
                <h2 className="heading-md mb-4 text-destructive">
                  Unsere Pioniere 2025: Kita Dreikäsehoch, Berlin-Köpenick
                </h2>
                <p className="body-base text-muted-foreground">
                  Im Dezember erhält die humanistische Kita Dreikäsehoch in Berlin-Köpenick den Titel „Powercrew des
                  Jahres". Hier wird mit Kopf, Herz und Hand gearbeitet: Als Ackerkita lernen die Kinder direkt im
                  Garten, woher ihr Essen kommt – vom Samen bis zur Ernte. Eine eigene Köchin kocht täglich frisch für
                  die Kinder, statt auf angelieferte Standardkost zu setzen. Dabei steht jedes Kind mit seinen
                  Bedürfnissen im Mittelpunkt: Inklusion und Teilhabe werden im Alltag gelebt, ob beim gemeinsamen
                  Essen, Spielen oder Entdecken im großen Außengelände. Dieses Team zeigt jeden Tag, wie gelebte
                  Wertschätzung, gesunde Ernährung und Naturerfahrung Hand in Hand gehen. Als allererste ausgezeichnete Crew haben sie den Grundstein gelegt. Danke für euren täglichen Einsatz und dass ihr als Vorbild vorangeht!
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
