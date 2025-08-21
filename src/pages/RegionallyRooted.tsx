import { motion } from "framer-motion";

const RegionallyRooted = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Regional verwurzelt – Captain Apfels Apfelbaum
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-xl mb-6 leading-relaxed">
                  Dieser Bio-Apfelbaum im Alten Land trägt den Namen Captain Apfel. Er steht für Regionalität, Nachhaltigkeit und die Kraft, die in guter Ernährung steckt – genau das, wofür Captain Apfel und seine Crew unterwegs sind.
                </p>

                <p className="mb-6 leading-relaxed">
                  Als ich die Patenschaft übernommen habe, war mir wichtig, dass der Baum von einem Ort kommt, an dem mit Sorgfalt und Bewusstsein gearbeitet wird. Denn für mich gilt: Lebensmittel sind nicht gleich Lebensmittel – egal ob Obst, Gemüse oder Getreide. Vieles, was die Industrie vorgibt, hat mit Gesundheit wenig zu tun. Hier dagegen geht es um Werte, die zu meiner Mission passen: Kindern und Familien einen Zugang zu guten Gewohnheiten zu eröffnen, der Freude macht und im Alltag funktioniert.
                </p>

                <p className="mb-6 leading-relaxed">
                  Der Baum trägt die Kennzeichnung Reihe 2, Baum 122. Jemand hat mir erzählt, dass die 2 für Balance und Vertrauen steht, die 1 für Neubeginn und die 22 dafür, dass große Ideen Realität werden dürfen. Für mich passt das perfekt zu dem, was ich mit Captain Apfel und seiner Crew aufbauen möchte – Schritt für Schritt ein gesundes Stück Alltag.
                </p>

                <p className="mb-8 leading-relaxed">
                  Ich würde mich sehr freuen, wenn irgendwann ein Bild dieses Baumes auch den Weg auf meine Seite findet – vielleicht von Menschen, die wie ich daran glauben, dass Ernährung mehr sein kann als das, was uns die Industrie seit Kindertagen vorsetzt. Menschen, die Kinder und gesunde Gewohnheiten genauso in den Mittelpunkt stellen wie ich.
                </p>

                {/* Image Placeholder */}
                <div className="bg-muted rounded-xl p-12 text-center border-2 border-dashed border-muted-foreground/30">
                  <div className="text-6xl mb-4">🌳</div>
                  <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                    Bild-Platzhalter
                  </h3>
                  <p className="text-muted-foreground">
                    Hier wird das Bild von Captain Apfels Apfelbaum eingefügt
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