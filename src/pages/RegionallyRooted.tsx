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
              Regional verwurzelt – Captain Apfels Apfelbaum
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
                <p className="text-lg md:text-xl mb-4 md:mb-6 leading-relaxed">
                  Dieser Bio-Apfelbaum im Alten Land trägt den Namen Captain Apfel. Er steht für Regionalität, Nachhaltigkeit und die Kraft, die in guter Ernährung steckt – genau das, wofür Captain Apfel und seine Crew unterwegs sind.
                </p>

                <p className="text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                  Als ich die Patenschaft übernommen habe, war mir wichtig, dass der Baum von einem Ort kommt, an dem mit Sorgfalt und Bewusstsein gearbeitet wird. Denn für mich gilt: Lebensmittel sind nicht gleich Lebensmittel – egal ob Obst, Gemüse oder Getreide. Vieles, was die Industrie vorgibt, hat mit Gesundheit wenig zu tun. Hier dagegen geht es um Werte, die zu meiner Mission passen: Kindern und Familien einen Zugang zu guten Gewohnheiten zu eröffnen, der Freude macht und im Alltag funktioniert.
                </p>

                <p className="text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                  Der Baum trägt die Kennzeichnung Reihe 2, Baum 122. Jemand hat mir erzählt, dass die 2 für Balance und Vertrauen steht, die 1 für Neubeginn und die 22 dafür, dass große Ideen Realität werden dürfen. Für mich passt das perfekt zu dem, was ich mit Captain Apfel und seiner Crew aufbauen möchte – Schritt für Schritt ein gesundes Stück Alltag.
                </p>

                <p className="text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                  Ich würde mich sehr freuen, wenn irgendwann ein Bild dieses Baumes auch den Weg auf meine Seite findet – vielleicht von Menschen, die wie ich daran glauben, dass Ernährung mehr sein kann als das, was uns die Industrie seit Kindertagen vorsetzt. Menschen, die Kinder und gesunde Gewohnheiten genauso in den Mittelpunkt stellen wie ich.
                </p>

                {/* Image Placeholder */}
                <div className="bg-muted rounded-xl p-6 md:p-12 text-center border-2 border-dashed border-muted-foreground/30">
                  <div className="text-4xl md:text-6xl mb-2 md:mb-4">🌳</div>
                  <h3 className="text-lg md:text-xl font-semibold text-muted-foreground mb-1 md:mb-2">
                    Bild-Platzhalter
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Hier wird das Bild von Captain Apfels Apfelbaum eingefügt
                  </p>
                </div>

                {/* Mission Section */}
                <div className="mt-8 md:mt-16 bg-primary-light/20 rounded-xl p-4 md:p-8 lg:p-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-4 md:mb-6">
                    Die Mission von Captain Apfel & Crew
                  </h2>
                  
                  <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed">
                    Kinder sind unsere Zukunft. Ich möchte ihnen zeigen, wie wichtig gutes Essen ist – mit Lebensmitteln, die Kraft geben, gesund sind und Herkunft haben.
                  </p>

                  <div className="mb-6 md:mb-8">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-6 flex items-center gap-2">
                      <span>🌱</span> Werte
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
                      <div className="text-center p-3 md:p-6 bg-white/50 rounded-lg">
                        <h4 className="font-semibold text-sm md:text-base lg:text-lg mb-1 md:mb-2">Regionalität statt Industrie</h4>
                      </div>
                      <div className="text-center p-3 md:p-6 bg-white/50 rounded-lg">
                        <h4 className="font-semibold text-sm md:text-base lg:text-lg mb-1 md:mb-2">Qualität statt Zuckerfallen</h4>
                      </div>
                      <div className="text-center p-3 md:p-6 bg-white/50 rounded-lg">
                        <h4 className="font-semibold text-sm md:text-base lg:text-lg mb-1 md:mb-2">Kinder stärken statt Werbung</h4>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                    An der Wurzel können wir etwas verändern: Wenn Kinder früh verstehen, was ihrem Körper guttut, haben sie die Chance, gesunde Gewohnheiten fürs Leben mitzunehmen.
                  </p>
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