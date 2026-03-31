import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import powercrewBanner from "@/assets/powercrew-banner-new.webp";

const AlltagLeichterLeben = () => {
  useEffect(() => {
    document.title = "Powercrew des Jahres | Captain Apfel";
  }, []);

  return (
    <main className="min-h-screen bg-muted">
      {/* Hero Section */}
      <section className="pt-8 pb-4 md:pt-12 md:pb-6">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={powercrewBanner}
              alt="Powercrew des Jahres"
              className="w-full max-w-md mx-auto mb-6"
              loading="eager"
              decoding="async"
            />
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground font-luckiest">
              The Walk of Fame
            </h1>
            <p className="text-lg text-muted-foreground">
              Hier werden Kitas und Einrichtungen sichtbar, die sich besonders f\u00fcr die Gesundheit der Kinder stark machen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Intro Card */}
            <motion.div
              className="bg-card/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg border border-border/30 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-16 translate-x-16" />
              <div className="relative space-y-4 text-left">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Mit der Auszeichnung \u201EPowercrew\u201C bedankt sich Captain Apfel bei den Menschen, die jeden Tag Gro\u00dfes leisten. P\u00e4dagogische Fachkr\u00e4fte sind oft unsichtbare Helden. Hier bekommen sie die B\u00fchne, die sie verdienen.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Der Walk of Fame ist eine wachsende Galerie: Jedes Jahr kommen neue engagierte Teams hinzu, die den Workshop \u201EReise zur Powerzentrale\u201C durchgef\u00fchrt oder sich besonders engagiert haben.
                </p>
              </div>
            </motion.div>

            {/* Pioniere Card */}
            <motion.div
              className="bg-card/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg border border-border/30 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12" />
              <div className="relative">
                <h2 className="text-xl font-bold mb-6 text-foreground font-luckiest">
                  Unsere ersten Helden: Die Pioniere der Powercrew
                </h2>
                <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-8 items-start">
                  <div className="flex justify-center md:justify-start">
                    <img
                      src="/assets/powercrew-uebergabe-dezember-2025.webp"
                      alt="\u00dcbergabe Powercrew des Jahres an Kita Dreik\u00e4sehoch"
                      className="w-48 md:w-56 rounded-xl shadow-md object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="space-y-4 text-left">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Die Kita Dreik\u00e4sehoch in Berlin-K\u00f6penick hat im Dezember 2025 den Anfang gemacht und sich als allererste Einrichtung den Titel \u201EPowercrew\u201C verdient.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Hier wird Inklusion gelebt: Als Ackerkita verstehen die Kinder, woher das Essen kommt, und die hauseigene K\u00fcche sorgt daf\u00fcr, dass jedes Kind \u2013 ob mit oder ohne Unvertr\u00e4glichkeit \u2013 satt und gl\u00fccklich wird.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Danke an dieses gro\u00dfartige Team f\u00fcr euren Mut, als Vorbild voranzugehen! Ihr seid der Startschuss f\u00fcr unsere wachsende Gemeinschaft.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="text-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-base text-muted-foreground mb-6 italic">
                Du willst mit deiner Einrichtung auch Teil der Powercrew werden?
              </p>
              <Link
                to="/kontakt"
                className="inline-block bg-[hsl(18_65%_65%)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[hsl(18_65%_58%)] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
              >
                Jetzt Workshop buchen
              </Link>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default AlltagLeichterLeben;
