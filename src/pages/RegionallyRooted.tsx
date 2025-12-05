import { motion } from "framer-motion";

const RegionallyRooted = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-muted via-background to-muted/50">
      {/* Content Section */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Title */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 md:mb-12 text-center font-luckiest">
              Regional verwurzelt – Captain Apfels Baum
            </h1>

            {/* Content Card */}
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 lg:p-12 shadow-lg border border-border/20">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-base mb-6 leading-relaxed text-muted-foreground">
                  Wusstest du, dass im Alten Land auf dem Herzapfelhof ein Baum steht, der den Namen Captain Apfel
                  trägt?
                </p>

                <p className="text-base mb-6 leading-relaxed text-muted-foreground">
                  Captain Apfel ist Pate dieses Baumes – eine Baumpatenschaft, die zeigt, wie eng das Projekt mit
                  Regionalität, Nachhaltigkeit und Natur verbunden ist.
                </p>

                <p className="text-base mb-6 leading-relaxed text-muted-foreground">
                  Denn Obst, Gemüse oder Getreide sind nicht einfach nur satt machende Dinge – dahinter sollte Qualität,
                  Sorgfalt und Bewusstsein stecken. Captain Apfel soll zeigen, dass gesunde Gewohnheiten Freude machen
                  können und ihren Platz im Alltag finden dürfen.
                </p>

                <p className="text-base mb-6 leading-relaxed text-muted-foreground">
                  Apropos Platz: Captain Apfels Baum steht in Reihe 2, Baum 122.
                </p>

                <p className="text-base mb-6 leading-relaxed text-muted-foreground">
                  Jemand erzählte mir, die 2 stehe für Balance und Vertrauen, die 1 für Neubeginn und die 22 dafür, dass
                  große Ideen wahr werden dürfen. Für mich ist das ein schönes Zeichen, dass Captain Apfel und seine
                  Crew auf dem richtigen Weg sind.
                </p>

                <p className="text-base mb-10 leading-relaxed text-muted-foreground">
                  Und falls du einmal am Herzapfelhof vorbeikommst: Besuch den Baum gerne und teile ein Foto auf
                  Instagram mit #captain.apfel – darüber würde ich mich sehr freuen.
                </p>

                {/* Bilder Section - Urkunde prominent, andere harmonisch */}
                <div className="mt-10 md:mt-14">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Patenschaftsurkunde - groß und lesbar */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                      className="group md:row-span-2"
                    >
                      <div className="overflow-hidden rounded-2xl shadow-lg bg-white p-3 h-full">
                        <img
                          src="/assets/regional-apfelbaum-patenschaft.jpg"
                          alt="Apfelbaum-Patenschaft Urkunde"
                          className="w-full h-full min-h-[280px] md:min-h-[360px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                    </motion.div>

                    {/* Rechte Spalte mit 3 kleineren Bildern */}
                    <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
                      {/* Äpfel am Baum */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="overflow-hidden rounded-xl shadow-md bg-gradient-to-br from-green-100/50 to-primary/10 p-2">
                          <img
                            src="/assets/regional-apples-tree.jpg"
                            alt="Rote Äpfel am Baum"
                            className="w-full h-24 md:h-28 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </motion.div>

                      {/* Apfel in Hand */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="overflow-hidden rounded-xl shadow-md bg-gradient-to-bl from-red-100/50 to-accent/10 p-2">
                          <img
                            src="/assets/regional-apple-hand.jpg"
                            alt="Apfel in der Hand"
                            className="w-full h-24 md:h-28 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </motion.div>

                      {/* Apfel im Korb */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="overflow-hidden rounded-xl shadow-md bg-gradient-to-t from-amber-100/50 to-primary/10 p-2">
                          <img
                            src="/assets/regional-apple-basket.jpg"
                            alt="Apfel im Korb"
                            className="w-full h-24 md:h-28 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RegionallyRooted;
