import { useEffect } from "react";
import { motion } from "framer-motion";

import tamaraPortrait from "@/assets/tamara-hillmann-final.png";

const HinterCaptainApfel = () => {
  useEffect(() => {
    document.title = "Hinter Captain Apfel – Captain Apfel & seine Crew";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Erfahre mehr über die Geschichte und Mission von Captain Apfel & seiner Crew."
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-muted pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="heading-lg mb-8 md:mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Jedes Kind ist einzigartig – und steht für mich im Mittelpunkt.
          </motion.h1>

          <motion.article
            aria-label="Über Tamara Hillmann"
            className="bg-card/60 backdrop-blur-sm rounded-2xl border border-border/30 shadow-sm overflow-hidden"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="p-6 md:p-10 text-left">
              <div className="content-spacing">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Ich bin <em>Tamara Hillmann</em>, Gründerin und kreativer Kopf hinter{" "}
                  <strong>Captain Apfel</strong>. Ursprünglich komme ich aus der
                  Organisations- und Projektarbeit – und genau diese Erfahrung nutze ich
                  heute, um Gesundheitsprojekte professionell und mit Struktur umzusetzen.
                </p>

                <p className="text-base leading-relaxed text-muted-foreground">
                  Mit der Zeit rückte ein Thema immer stärker in den Mittelpunkt: gesunde
                  Ernährung und Unverträglichkeiten bei Kindern. Aus eigener Betroffenheit
                  und stetiger Weiterbildung in Naturheilkunde entstand die Idee, Wissen
                  und Alltagspraxis zu verbinden.
                </p>

                <p className="text-base leading-relaxed text-muted-foreground">
                  Ich bilde mich regelmäßig in den Bereichen Ernährung, Naturheilkunde und
                  Kindergesundheit weiter, um neue Erkenntnisse in meine Arbeit einfließen
                  zu lassen.
                </p>

                <p className="text-base leading-relaxed text-muted-foreground">
                  So wurde <strong>Captain Apfel</strong> geboren: eine Initiative, die
                  Kinder mit Freude an das Thema Wohlbefinden heranführt und Kitas
                  praktische Werkzeuge an die Hand gibt.
                </p>

                <p className="text-base leading-relaxed text-muted-foreground">
                  Ich entwickle Workshops, Materialien und Impulse, die Gesundheit spürbar
                  machen – mit Herz, Verstand und einer großen Portion Begeisterung.
                </p>

                <p className="text-base leading-relaxed text-muted-foreground mt-8">
                  Herzliche Grüße
                  <br />
                  <em>Tamara Hillmann</em>
                </p>
              </div>
            </div>

            <motion.img
              src={tamaraPortrait}
              alt="Tamara Hillmann – Portrait und Captain-Apfel-Motiv"
              loading="lazy"
              className="block w-full"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </motion.article>
        </div>
      </div>
    </main>
  );
};

export default HinterCaptainApfel;
