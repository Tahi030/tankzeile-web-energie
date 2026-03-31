import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CustomerFeedback from "@/components/CustomerFeedback";
import powerzentraleCharacter from "@/assets/powerzentrale-character.svg";
import { Zap, Sparkles, Users, HandHeart, Apple } from "lucide-react";

const powerLevels = [
  {
    number: 1,
    title: "Bewegen & Tanzen",
    description: "Stärkt Körpergefühl und Motorik.",
    icon: Zap,
    delay: 0.1,
  },
  {
    number: 2,
    title: "Entdecken & Staunen",
    description: "Fördert Wissen und Neugier.",
    icon: Sparkles,
    delay: 0.2,
  },
  {
    number: 3,
    title: "Teamgefühl erleben",
    description: "Stärkt den Zusammenhalt.",
    icon: Users,
    delay: 0.3,
  },
  {
    number: 4,
    title: "Mitmachen & Vorbereiten",
    description: "Vermittelt Verantwortung und Selbstwirksamkeit.",
    icon: HandHeart,
    delay: 0.4,
  },
  {
    number: 5,
    title: "Probieren & Genießen",
    description: "Öffnet neue Geschmackserlebnisse und stärkt das Selbstvertrauen.",
    icon: Apple,
    delay: 0.5,
  },
];

const WorkshopGesundeMission = () => {
  useEffect(() => {
    document.title = "Workshop - auf gesunder Mission | Captain Apfel";
  }, []);

  return (
    <div className="min-h-screen bg-muted">
      {/* Hero Section */}
      <section className="pt-8 pb-6 md:pt-12 md:pb-8">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground font-luckiest">
              Reise zur Powerzentrale
            </h1>
            <p className="text-xl text-muted-foreground mb-2">Das Abenteuer für mehr Bauchgefühl & Gesundheit</p>
            <p className="text-lg text-muted-foreground/80">
              Für Familienzentren, Eltern-Kind-Gruppen & Kitas
            </p>
          </div>
        </div>
      </section>

      {/* Powerzentrale Character */}
      <div className="flex justify-center items-center py-4 md:py-6">
        <motion.img
          src={powerzentraleCharacter}
          alt="Powerzentrale"
          className="w-[32rem] h-auto sm:w-[40rem] md:w-[48rem] lg:w-[56rem]"
          loading="eager"
          decoding="async"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.6 },
            y: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      {/* Main Content */}
      <section className="pb-12 md:pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Box 1: Was Kinder erleben */}
            <motion.div
              className="bg-card/80 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-border/30 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12" />

              <div className="relative">
                <p className="text-base mb-6 text-muted-foreground leading-relaxed">
                  Schluss mit langweiligen Vorträgen!<br />
                  Damit Wissen hängen bleibt, wird es hier anschaulich und kindgerecht vermittelt.
                </p>

                <h2 className="text-xl font-bold mb-4 font-luckiest">Was Kinder erleben</h2>

                <p className="text-base mb-4 text-muted-foreground leading-relaxed">
                  Ernährung, Bewegung und Gefühle werden hier greifbar – beim Erleben, Spielen und Staunen.
                </p>

                <p className="text-base mb-3 text-foreground font-semibold">Erforscht wird:</p>
                <ul className="text-base text-muted-foreground list-disc list-inside space-y-2 ml-2">
                  <li><strong className="text-foreground">Der richtige Treibstoff:</strong> Wie viel Obst und Gemüse braucht das Raumschiff wirklich?</li>
                  <li><strong className="text-foreground">Die Paffel-Falle:</strong> Wie viel Zucker versteckt sich in Cola & Co.?</li>
                  <li><strong className="text-foreground">Das Geheimnis der Powerzentrale (Darm):</strong> Was bringt den Körper von innen zum Leuchten?</li>
                  <li><strong className="text-foreground">Die Bremse:</strong> Was verklebt die Energie und bremst aus?</li>
                </ul>
              </div>
            </motion.div>

            {/* Die 5 Power Level – Karten */}
            <div>
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-center mb-8 font-luckiest"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Die 5 Power Level
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {powerLevels.map((level) => (
                  <motion.div
                    key={level.number}
                    className="flex flex-col items-center text-center group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: level.delay }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -8,
                      transition: { type: "spring", stiffness: 300, damping: 10 },
                    }}
                  >
                    <div className="relative p-6 bg-card rounded-2xl shadow-lg border border-border/50 transition-all duration-300 group-hover:shadow-xl w-full h-full">
                      {/* Number badge */}
                      <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xl font-bold font-luckiest mx-auto mb-4 shadow-md">
                        {level.number}
                      </div>

                      {/* Icon */}
                      <div className="flex justify-center mb-3">
                        <level.icon className="w-8 h-8 text-accent" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold mb-2 font-luckiest">{level.title}</h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">{level.description}</p>

                      {/* Decorative accent */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent opacity-20 group-hover:opacity-40 transition-opacity" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Box 2: Ziel & Nutzen */}
            <motion.div
              className="bg-card/80 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-border/30 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-28 h-28 bg-accent/5 rounded-full -translate-y-14 -translate-x-14" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-secondary/5 rounded-full translate-y-10 translate-x-10" />

              <div className="relative">
                <h2 className="text-xl font-bold mb-4 font-luckiest">Ziel & Nutzen für die Einrichtung</h2>

                <p className="text-base mb-6 text-muted-foreground leading-relaxed">
                  Die Einrichtung erhält im Anschluss das Zertifikat "Captain Apfel Powercrew". Es dient als sichtbares Zeichen für gelebte Prävention und ganzheitliche Gesundheitsförderung – ideal für den Eingangsbereich oder das Team-Portfolio.
                </p>

                <p className="text-base mb-3 text-foreground font-semibold">Besonderer Mehrwert:</p>
                <ul className="text-base text-muted-foreground list-disc list-inside space-y-2 ml-2">
                  <li><strong className="text-foreground">Walk of Fame:</strong> Auf Wunsch erfolgt die Aufnahme als Vorbild-Einrichtung auf der Website.</li>
                  <li><strong className="text-foreground">Jährlich verlängerbar:</strong> Das Siegel kann jährlich aktualisiert werden, um das dauerhafte Engagement nach außen sichtbar zu machen.</li>
                </ul>
              </div>
            </motion.div>

            {/* CTA */}
            <div className="text-center">
              <Link
                to="/kontakt"
                className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
              >
                Jetzt Einrichtung vormerken und Teil der Power-Mission werden!
              </Link>
            </div>

            <CustomerFeedback />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopGesundeMission;
