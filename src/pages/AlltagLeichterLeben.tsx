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
          {/* Logo Banner - Full Width, Bottom Cropped */}
          <motion.div
            className="w-full overflow-hidden mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={powercrewBanner}
              alt="Powercrew des Jahres"
              className="w-full max-w-3xl mx-auto"
            />
          </motion.div>

          {/* Hero Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground font-luckiest">
              The Walk of Fame
            </h1>
            <p className="text-lg md:text-xl text-primary font-medium max-w-3xl mx-auto mb-6">
              Hier werden Kitas und Einrichtungen sichtbar, die sich besonders für die Gesundheit der Kinder stark machen.
            </p>
            <p className="body-base text-muted-foreground max-w-3xl mx-auto">
              Mit der Auszeichnung „Powercrew" bedankt sich Captain Apfel bei den Menschen, die jeden Tag Großes leisten. Pädagogische Fachkräfte sind oft unsichtbare Helden. Hier bekommen sie die Bühne, die sie verdienen.
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
                <h2 className="text-lg md:text-xl font-bold mb-4 text-[hsl(12_55%_50%)]">
                  Unsere ersten Helden: Die Pioniere der Powercrew
                </h2>
                <p className="body-base text-muted-foreground mb-4">
                  Die Kita Dreikäsehoch in Berlin-Köpenick hat im Dezember 2025 den Anfang gemacht und sich als allererste Einrichtung den Titel „Powercrew" verdient.
                </p>
                <p className="body-base text-muted-foreground mb-4">
                  Hier wird Inklusion gelebt: Als Ackerkita verstehen die Kinder, woher das Essen kommt, und die hauseigene Küche sorgt dafür, dass jedes Kind – ob mit oder ohne Unverträglichkeit – satt und glücklich wird.
                </p>
                <p className="body-base text-muted-foreground">
                  Danke an dieses großartige Team für euren Mut, als Vorbild voranzugehen! Ihr seid der Startschuss für unsere wachsende Gemeinschaft.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.p
            className="text-center body-base text-muted-foreground italic mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Du willst mit deiner Einrichtung auch Teil der Powercrew werden? Buche den Workshop und werde sichtbar!
          </motion.p>

        </div>
      </div>
    </main>
  );
};

export default AlltagLeichterLeben;
