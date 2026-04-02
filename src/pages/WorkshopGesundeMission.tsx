import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CustomerFeedback from "@/components/CustomerFeedback";

const WorkshopGesundeMission = () => {
  useEffect(() => {
    document.title = "Reise zur Powerzentrale – Workshop | Captain Apfel";
  }, []);

  return (
    <div className="min-h-screen bg-muted relative">

      {/* Hero Section */}
      <section className="pt-8 pb-4 md:pt-12 md:pb-6 relative z-10">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground font-luckiest">
              Reise zur Powerzentrale
            </h1>
            <p className="text-lg text-muted-foreground">
              Das Abenteuer für mehr Bauchgefühl & Gesundheit – für Familienzentren, Eltern-Kind-Gruppen & Kitas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Illustration Fan */}
            <motion.div
              className="relative bg-card/40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-border/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-8">
                {/* Left image - tilted */}
                <motion.img
                  src="/images/powerzentrale-hero.webp"
                  alt="Captain Apfel Held mit der Powercrew"
                  className="w-28 sm:w-36 md:w-44 rounded-xl shadow-md -rotate-3"
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={803}
                  initial={{ opacity: 0, x: -20, rotate: -8 }}
                  whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                />
                {/* Center image - main */}
                <motion.img
                  src="/images/powerzentrale-bg.webp"
                  alt="Reise zur Powerzentrale – Captain Apfel und die Crew im Tomatenraumschiff"
                  className="w-40 sm:w-52 md:w-64 rounded-xl shadow-lg z-10"
                  loading="lazy"
                  decoding="async"
                  width={1000}
                  height={1339}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  viewport={{ once: true }}
                />
                {/* Right image - tilted */}
                <motion.img
                  src="/images/powerzentrale-paffel.webp"
                  alt="Paffel auf dem Tomatenraumschiff"
                  className="w-28 sm:w-36 md:w-44 rounded-xl shadow-md rotate-3"
                  loading="lazy"
                  decoding="async"
                  width={500}
                  height={447}
                  initial={{ opacity: 0, x: 20, rotate: 8 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>

            <motion.div
              className="bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg border border-border/30 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-16 translate-x-16" />
              <div className="relative space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Schluss mit langweiligen Vorträgen! Damit Wissen hängen bleibt, wird es hier anschaulich und kindgerecht vermittelt.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Ernährung, Bewegung und Gefühle werden greifbar – beim Erleben, Spielen und Staunen.
                </p>
              </div>
            </motion.div>

            {/* Two-Column: Was Kinder erleben + 5 Power Level */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Was Kinder erleben */}
              <motion.div
                className="bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg border border-border/30 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12" />
                <div className="relative space-y-4">
                  <h2 className="text-xl font-bold text-foreground font-luckiest">Was Kinder erleben</h2>
                  <p className="text-sm text-foreground font-semibold">Erforscht wird:</p>
                  <ul className="text-base text-muted-foreground space-y-2">
                    <li>
                      <strong className="text-foreground">Der richtige Treibstoff:</strong> Wie viel Obst und Gemüse braucht das Raumschiff wirklich?
                    </li>
                    <li>
                      <strong className="text-foreground">Die Paffel-Falle:</strong> Wie viel Zucker versteckt sich in Cola & Co.?
                    </li>
                    <li>
                      <strong className="text-foreground">Das Geheimnis der Powerzentrale:</strong> Was bringt den Körper von innen zum Leuchten?
                    </li>
                    <li>
                      <strong className="text-foreground">Die Bremse:</strong> Was verklebt die Energie und bremst aus?
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Die 5 Power Level */}
              <motion.div
                className="bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg border border-border/30 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-12 translate-x-12" />
                <div className="relative space-y-4">
                  <h2 className="text-xl font-bold text-foreground font-luckiest">Die 5 Power Level</h2>
                  <div className="space-y-3">
                    {[
                      { nr: "1", title: "Bewegen & Tanzen", text: "Stärkt Körpergefühl und Motorik." },
                      { nr: "2", title: "Entdecken & Staunen", text: "Fördert Wissen und Neugier." },
                      { nr: "3", title: "Teamgefühl erleben", text: "Stärkt den Zusammenhalt." },
                      { nr: "4", title: "Mitmachen & Vorbereiten", text: "Vermittelt Verantwortung und Selbstwirksamkeit." },
                      { nr: "5", title: "Probieren & Genießen", text: "Öffnet neue Geschmackserlebnisse und stärkt das Selbstvertrauen." },
                    ].map((level) => (
                      <div key={level.nr} className="flex gap-3 items-start">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center mt-0.5">
                          {level.nr}
                        </span>
                        <p className="text-base text-muted-foreground">
                          <strong className="text-foreground">{level.title}</strong> – {level.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Ziel & Nutzen */}
            <motion.div
              className="bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg border border-border/30 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <div className="absolute bottom-0 right-0 w-28 h-28 bg-secondary/5 rounded-full translate-y-14 translate-x-14" />
              <div className="relative space-y-4">
                <h2 className="text-xl font-bold text-foreground font-luckiest">Ziel & Nutzen für die Einrichtung</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Die Einrichtung erhält im Anschluss das Zertifikat „Captain Apfel Powercrew". Es dient als sichtbares Zeichen für gelebte Prävention und ganzheitliche Gesundheitsförderung – ideal für den Eingangsbereich oder das Team-Portfolio.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-foreground font-semibold">Besonderer Mehrwert:</p>
                  <ul className="text-base text-muted-foreground space-y-2">
                    <li>
                      <strong className="text-foreground">Walk of Fame:</strong> Auf Wunsch erfolgt die Aufnahme als Vorbild-Einrichtung auf der Website.
                    </li>
                    <li>
                      <strong className="text-foreground">Jährlich verlängerbar:</strong> Das Siegel kann jährlich aktualisiert werden, um das dauerhafte Engagement nach außen sichtbar zu machen.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="text-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                to="/kontakt"
                className="inline-block bg-[hsl(18_65%_65%)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[hsl(18_65%_58%)] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
              >
                Jetzt Teil der Power-Mission werden!
              </Link>
            </motion.div>

            {/* Feedback */}
            <CustomerFeedback />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopGesundeMission;
