import { useEffect } from "react";
import { motion } from "framer-motion";

const RegionallyRooted = () => {
  useEffect(() => {
    document.title = "Regional verwurzelt – Captain Apfel";
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
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground font-luckiest">
              Regional verwurzelt – Captain Apfels Baum
            </h1>
            <p className="text-lg text-muted-foreground">
              Ein besonderes Detail im Alten Land: Auf dem Herzapfelhof steht tatsächlich ein Baum, der den Namen Captain Apfel trägt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Story Card */}
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
                  Captain Apfel ist Pate dieses Baumes – eine Patenschaft, die zeigt, wie eng das Projekt mit Regionalität, Nachhaltigkeit und Natur verbunden ist. Denn Obst, Gemüse oder Getreide sind nicht einfach nur satt machende Dinge – dahinter sollte Qualität, Sorgfalt und Bewusstsein stecken.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Captain Apfel soll zeigen, dass gesunde Gewohnheiten Freude machen können und ihren Platz im Alltag finden dürfen.
                </p>
              </div>
            </motion.div>

            {/* Zahlen & Bedeutung Card */}
            <motion.div
              className="bg-card/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg border border-border/30 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12" />
              <div className="relative space-y-4 text-left">
                <h2 className="text-xl font-bold text-foreground font-luckiest">Reihe 2, Baum 122</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Man sagt, die 2 stehe für Balance und Vertrauen, die 1 für Neubeginn und die 22 dafür, dass große Ideen wahr werden dürfen. Für mich ist das ein schönes Zeichen, dass Captain Apfel und seine Crew auf dem richtigen Weg sind.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed italic border-t border-primary/10 pt-4">
                  Wer einmal am Herzapfelhof vorbeikommt: Ein Besuch beim Baum ist jederzeit willkommen! Über ein Foto auf Instagram mit #captain.apfel würde ich mich sehr freuen.
                </p>
              </div>
            </motion.div>

            {/* Bilder Card */}
            <motion.div
              className="bg-card/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg border border-border/30 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Urkunde full width */}
              <div className="overflow-hidden rounded-xl shadow-md bg-white p-3 mb-6">
                <img
                  src="/assets/regional-apfelbaum-patenschaft.webp"
                  alt="Apfelbaum-Patenschaft Urkunde"
                  className="w-full max-w-lg mx-auto object-contain rounded-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* 3 Bilder gleichmäßig */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { src: "/assets/regional-apples-tree.webp", alt: "Rote Äpfel am Baum" },
                  { src: "/assets/regional-apple-hand.webp", alt: "Apfel in der Hand" },
                  { src: "/assets/regional-apple-basket.webp", alt: "Apfel im Korb" },
                ].map((img) => (
                  <div key={img.alt} className="overflow-hidden rounded-xl shadow-md">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-xl"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default RegionallyRooted;
