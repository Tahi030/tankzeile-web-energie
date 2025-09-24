import { motion } from "framer-motion";

const RegionallyRooted = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-primary mb-4 md:mb-6">
              Regional verwurzelt – Captain Apfels Baum
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-xl p-4 md:p-8 lg:p-12 shadow-lg border border-border">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
                  Wusstest du, dass im Alten Land auf dem Herzapfelhof ein Baum steht, der den Namen Captain Apfel trägt?
                </p>
                
                <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  Captain Apfel ist Pate dieses Baumes – eine Baumpatenschaft, die zeigt, wie eng das Projekt mit Regionalität, Nachhaltigkeit und Natur verbunden ist.
                </p>

                <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  Denn Obst, Gemüse oder Getreide sind nicht einfach nur satt machende Dinge – dahinter sollte Qualität, Sorgfalt und Bewusstsein stecken. Captain Apfel soll zeigen, dass gesunde Gewohnheiten Freude machen können und ihren Platz im Alltag finden dürfen.
                </p>

                <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  Apropos Platz: Captain Apfels Baum steht in Reihe 2, Baum 122.
                </p>
                
                <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  Jemand erzählte mir, die 2 stehe für Balance und Vertrauen, die 1 für Neubeginn und die 22 dafür, dass große Ideen wahr werden dürfen. Für mich ist das ein schönes Zeichen, dass Captain Apfel und seine Crew auf dem richtigen Weg sind.
                </p>

                <p className="text-base md:text-lg mb-12 md:mb-16 leading-relaxed">
                  Und falls du einmal am Herzapfelhof vorbeikommst: Besuch den Baum gerne und teile ein Foto mit #captain.apfel – darüber würde ich mich sehr freuen.
                </p>

                {/* Bilder ohne Text */}
                <div className="mt-12 md:mt-16">
                  {/* Hauptbild - Patenschaftsurkunde */}
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white rounded-lg p-4 shadow-lg border border-border/30">
                      <img 
                        src="/assets/regional-apfelbaum-patenschaft.jpg" 
                        alt="Apfelbaum-Patenschaft Urkunde für Captain Apfel - Herzapfelhof Altes Land" 
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  </motion.div>

                  {/* Zwei Bilder nebeneinander */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-lg p-3 shadow-lg border border-border/30 hover:shadow-xl transition-shadow"
                    >
                      <img 
                        src="/assets/regional-apples-tree.jpg" 
                        alt="Rote Äpfel am Baum - frisch und regional" 
                        className="w-full h-64 md:h-72 object-cover rounded-lg"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-lg p-3 shadow-lg border border-border/30 hover:shadow-xl transition-shadow"
                    >
                      <img 
                        src="/assets/regional-apple-hand.jpg" 
                        alt="Regional geernteter roter Apfel in der Hand" 
                        className="w-full h-64 md:h-72 object-cover rounded-lg"
                      />
                    </motion.div>
                  </div>

                  {/* Einzelnes Bild zentriert */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                  >
                    <div className="bg-white rounded-lg p-3 shadow-lg border border-border/30 hover:shadow-xl transition-shadow max-w-md">
                      <img 
                        src="/assets/regional-apple-basket.jpg" 
                        alt="Fröhlicher Apfel im Korb - Captain Apfel lässt grüßen" 
                        className="w-full h-64 md:h-72 object-cover rounded-lg"
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