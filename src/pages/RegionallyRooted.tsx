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
              Regional verwurzelt – Captain Apfels Apfelbaum 🌳
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
                  Wusstest du, dass es im Alten Land – einer Region voller Apfelbäume und duftender Blüten – einen ganz besonderen Platz gibt? Dort, auf dem Herzapfelhof, wächst ein Baum, der den Namen Captain Apfel trägt. Ein Besuch lohnt sich für alle, die mal raus aus dem Alltag möchten und neue Energie tanken wollen. Und wer dort lebt, weiß genau, wovon ich spreche.
                </p>

                {/* Polaroid Placeholder 1 */}
                <div className="flex justify-center mb-6 md:mb-8">
                  <div className="bg-white p-3 md:p-4 shadow-lg rotate-[-2deg] hover:rotate-0 transition-transform duration-300 border border-gray-200">
                    <div className="w-48 h-36 md:w-64 md:h-48 bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <div className="text-2xl mb-2">📸</div>
                        <p className="text-xs">Polaroid Platzhalter</p>
                      </div>
                    </div>
                    <div className="text-center mt-2 text-sm text-gray-600 font-handwriting">
                      #captainapfel
                    </div>
                  </div>
                </div>

                <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  Für mich ist dieser Baum etwas Großes: Er steht für Regionalität, Nachhaltigkeit und Lebensmittel, die wirklich guttun. Denn Obst, Gemüse oder Getreide sind nicht einfach nur satt machende Dinge – dahinter sollte Qualität, Sorgfalt und Bewusstsein stecken. Captain Apfel soll zeigen, dass gesunde Gewohnheiten Freude machen können und ihren Platz im Alltag finden dürfen.
                </p>

                {/* Polaroid Placeholder 2 */}
                <div className="flex justify-end mb-6 md:mb-8">
                  <div className="bg-white p-3 md:p-4 shadow-lg rotate-[3deg] hover:rotate-0 transition-transform duration-300 border border-gray-200">
                    <div className="w-48 h-36 md:w-64 md:h-48 bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <div className="text-2xl mb-2">🌳</div>
                        <p className="text-xs">Polaroid Platzhalter</p>
                      </div>
                    </div>
                    <div className="text-center mt-2 text-sm text-gray-600 font-handwriting">
                      Herzapfelhof
                    </div>
                  </div>
                </div>

                <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  Apropos Platz: Captain Apfels Baum steht in Reihe 2, Baum 122. Jemand erzählte mir, die 2 stehe für Balance und Vertrauen, die 1 für Neubeginn und die 22 dafür, dass große Ideen wahr werden dürfen. Für mich ist das ein schönes Zeichen, dass Captain Apfel und seine Crew auf dem richtigen Weg sind.
                </p>

                {/* Polaroid Placeholder 3 */}
                <div className="flex justify-center mb-6 md:mb-8">
                  <div className="bg-white p-3 md:p-4 shadow-lg rotate-[-1deg] hover:rotate-0 transition-transform duration-300 border border-gray-200">
                    <div className="w-48 h-36 md:w-64 md:h-48 bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <div className="text-2xl mb-2">🍎</div>
                        <p className="text-xs">Polaroid Platzhalter</p>
                      </div>
                    </div>
                    <div className="text-center mt-2 text-sm text-gray-600 font-handwriting">
                      Reihe 2, Baum 122
                    </div>
                  </div>
                </div>

                <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  Und wenn du zufällig am Herzapfelhof vorbeikommst, besuch ihn doch mal. 📸 Ein Foto von Captain Apfels Baum mit dem Hashtag #captainapfel würde mich sehr freuen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RegionallyRooted;