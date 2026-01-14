import { useEffect } from "react";
import { motion } from "framer-motion";

import tamaraPortrait from "@/assets/tamara-captain-apfel-duo.png";

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

          <motion.section
            aria-label="Über Tamara Hillmann"
            className="bg-card/60 backdrop-blur-sm rounded-2xl border border-border/30 shadow-sm p-6 md:p-10 text-left"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="content-spacing">
              <p className="text-base leading-relaxed text-muted-foreground">
                Ich bin <em>Tamara Hillmann</em>, der Kopf und das Herz hinter{" "}
                <strong>Captain Apfel</strong>. Ich komme ursprünglich aus dem Projektmanagement. Diese Erfahrung nutze ich heute, um Gesundheitsprojekte in Einrichtungen entspannt und strukturiert umzusetzen.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground">
                Mein Herzensthema ist gesunde Ernährung bei Unverträglichkeiten. Ich weiß aus eigener Erfahrung, wie wichtig das richtige Bauchgefühl ist. Deshalb reicht mir Standardwissen nicht aus. Ich möchte Kindern zeigen, was ihrem Körper gut tut.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground">
                Gesundheit ist individuell. Ein Apfel ist gesund, aber nicht für jeden Bauch. Genau diese Tiefe fehlte mir oft. Mich fasziniert das große Ganze: Wie spielen Ernährung, Entzündungen und Wohlbefinden zusammen? Ich möchte verstehen, wie unser Körper als System funktioniert – und dieses Wissen kindgerecht weitergeben.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground font-semibold text-foreground">
                Mein Fundament:
              </p>

              <p className="text-base leading-relaxed text-muted-foreground">
                Ich bilde mich stetig weiter. Aktuell vertiefe ich mein Verständnis für ganzheitliche Zusammenhänge im Selbststudium zur Fachberaterin für holistische Gesundheit an der Akademie der Naturheilkunde. Dabei stehen Entzündungsprozesse und Darmgesundheit im Fokus. Parallel nutze ich pädagogische Weiterbildungen von Indipead, um Methodenkompetenz zu stärken. Nachweise zeige ich auf Anfrage gerne vor.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground">
                <strong>Captain Apfel</strong> ist meine Antwort für alle, die Gesundheit spürbar machen wollen. Mit Verstand, Begeisterung und ganz viel Herz.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground mt-8">
                Herzliche Grüße
                <br />
                <em>Tamara Hillmann</em>
              </p>
            </div>
          </motion.section>

          <motion.figure
            className="mt-6 md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              src={tamaraPortrait}
              alt="Tamara Hillmann – Portrait und Captain-Apfel-Motiv"
              loading="lazy"
              className="w-full rounded-2xl shadow-lg"
            />
          </motion.figure>
        </div>
      </div>
    </main>
  );
};

export default HinterCaptainApfel;
