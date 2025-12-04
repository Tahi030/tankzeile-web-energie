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
                <p className="text-lg md:text-xl mb-6 md:mb-8 leading-relaxed text-muted-foreground">
                  Wusstest du, dass im Alten Land auf dem Herzapfelhof ein Baum steht, der den Namen Captain Apfel trägt?
                </p>
                
                <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed text-muted-foreground">
                  Captain Apfel ist Pate dieses Baumes – eine Baumpatenschaft, die zeigt, wie eng das Projekt mit Regionalität, Nachhaltigkeit und Natur verbunden ist.
                </p>

                <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed text-muted-foreground">
                  Denn Obst, Gemüse oder Getreide sind nicht einfach nur satt machende Dinge – dahinter sollte Qualität, Sorgfalt und Bewusstsein stecken. Captain Apfel soll zeigen, dass gesunde Gewohnheiten Freude machen können und ihren Platz im Alltag finden dürfen.
                </p>

                <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed text-muted-foreground">
                  Apropos Platz: Captain Apfels Baum steht in Reihe 2, Baum 122.
                </p>
                
                <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed text-muted-foreground">
                  Jemand erzählte mir, die 2 stehe für Balance und Vertrauen, die 1 für Neubeginn und die 22 dafür, dass große Ideen wahr werden dürfen. Für mich ist das ein schönes Zeichen, dass Captain Apfel und seine Crew auf dem richtigen Weg sind.
                </p>

                <p className="text-base md:text-lg mb-10 md:mb-14 leading-relaxed text-muted-foreground">
                  Und falls du einmal am Herzapfelhof vorbeikommst: Besuch den Baum gerne und teile ein Foto mit #captain.apfel – darüber würde ich mich sehr freuen.
                </p>

                {/* Bilder Section */}
                <div className="mt-10 md:mt-14 space-y-8">
                  {/* Hauptbild - Patenschaftsurkunde */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-primary/10 to-accent/10 p-4 md:p-6">
                      <img 
                        src="/assets/regional-apfelbaum-patenschaft.jpg" 
                        alt="Apfelbaum-Patenschaft Urkunde für Captain Apfel - Herzapfelhof Altes Land" 
                        className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </motion.div>

                  {/* Zwei Bilder nebeneinander */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-green-100/50 to-primary/10 p-3">
                        <img 
                          src="/assets/regional-apples-tree.jpg" 
                          alt="Rote Äpfel am Baum - frisch und regional" 
                          className="w-full h-64 md:h-80 object-cover rounded-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-bl from-red-100/50 to-accent/10 p-3">
                        <img 
                          src="/assets/regional-apple-hand.jpg" 
                          alt="Regional geernteter roter Apfel in der Hand" 
                          className="w-full h-64 md:h-80 object-cover rounded-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Einzelnes Bild - größer und zentriert */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex justify-center group"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-t from-amber-100/50 to-primary/10 p-3 w-full max-w-2xl">
                      <img 
                        src="/assets/regional-apple-basket.jpg" 
                        alt="Fröhlicher Apfel im Korb - Captain Apfel lässt grüßen" 
                        className="w-full h-72 md:h-96 object-cover rounded-xl transition-all duration-500 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>
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
