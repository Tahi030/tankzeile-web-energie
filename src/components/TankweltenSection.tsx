import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const tankwelten = [
  {
    id: 1,
    title: "Captain Apfel - auf gesunder Mission",
    description: "Workshop mit Captain Apfel - Ernährung als Abenteuer für Vorschulkinder\n\nVolle Obst- und Gemüsekraft voraus! Captain Apfel lädt ein auf eine Mission ins Körperinnere. Im Fokus: das geheimnisvolle Kraftwerk, das erst mit dem richtigen Treibstoff so richtig in Fahrt kommt. Was tut unserem Körper gut – und was bremst ihn aus? Schafft es die Crew, die Kraftzentrale zu aktivieren?\nEin Workshop voller Bewegung – voller Spaß, Teamgeist und überraschender Entdeckungen rund um unseren Körper.",
    image: "/lovable-uploads/ff6c74d3-5da5-4a82-b20b-97843a8db26a.png",
    link: "/tankwelten/captain-apfel-workshop",
    isActive: true,
  },
  {
    id: 2,
    title: "Alltag Leichter Leben",
    description: "Ideen, die sich dem Alltag anpassen\n\nKita-Brotdosen, die schnell gehen – ob einfach oder kreativ. Zuckerarme Snacks, die Kindern schmecken. Alles kostenlos zum Herunterladen – zum Ausprobieren, Anpassen und Mitnehmen.",
    image: "/lovable-uploads/a7b8b38c-22c9-4f39-8b85-d9174013bc67.png",
    link: "/tankwelten/alltag-leichter-leben",
    isActive: true,
  },
  {
    id: 3,
    title: "Demnächst verfügbar",
    description: "Wer bist du wirklich – hinter all den Masken, die du täglich trägst, und besonders dann, wenn der erste Riss entsteht?\n\nHier findest du:\n\n- Einen Blick hinter deine Alltagsmasken\n- Impulse für Ernährung, geistige Klarheit und innere Balance\n- Alltagstaugliche Wege, deine Batterien wieder aufzuladen\n- Inklusive Wohlfühltag\n\nFür alle, die:\n\n- sich oft erschöpft fühlen – aber trotzdem weitermachen\n- eine Brücke zwischen Kopf und Bauch, Wissenschaft und Intuition suchen\n- bereit sind, sich wieder liebevoller und ernster zu nehmen",
    image: "/lovable-uploads/36ba656f-ced5-4afb-a9ba-a75f553fb0de.png",
    link: "#",
    isActive: false,
  },
];

const TankweltenSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Redesigned headline to match page style */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <div className="bg-gradient-to-r from-primary/20 via-accent/30 to-secondary/20 rounded-2xl p-8 shadow-lg">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark font-playfair mb-2">
                Die Tankwelten
              </h2>
              {/* Hand-drawn line effect */}
              <div className="flex justify-center mt-4">
                <svg width="120" height="8" viewBox="0 0 120 8" className="text-primary">
                  <path
                    d="M2,4 Q8,2 15,4 T30,3 Q40,5 50,4 T70,3 Q80,5 90,4 T110,3 Q115,2 118,4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-70"
                    style={{
                      filter: 'url(#roughPaper)',
                    }}
                  />
                  <defs>
                    <filter id="roughPaper">
                      <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="1" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {tankwelten.map((welt, index) => (
            <motion.div
              key={welt.id}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
            >
              <div className="h-96">
                <img 
                  src={welt.image} 
                  alt={welt.title} 
                  className={`w-full h-full transition-transform hover:scale-105 duration-300 ${
                    index === 0 
                      ? 'object-contain bg-gradient-to-br from-primary-light/30 via-accent-light/20 to-secondary-light/30' 
                      : index === 1
                      ? 'object-contain bg-gradient-to-br from-secondary-light/30 via-primary-light/20 to-accent-light/30 p-4'
                      : 'object-contain bg-gradient-to-br from-accent-light/20 via-secondary-light/30 to-primary-light/20 p-4'
                  }`}
                />
              </div>
              <div className="p-6">
                <h3 className={`font-bold mb-2 font-sans ${
                  index === 0 
                    ? 'text-3xl text-red-600' 
                    : index === 1
                    ? 'text-3xl text-green-700'
                    : 'text-3xl text-teal-500'
                }`}>
                  {welt.title}
                </h3>
                <p className="text-gray-600 mb-4 whitespace-pre-line">{welt.description}</p>
                {welt.isActive ? (
                  <Link 
                    to={welt.link}
                    className="text-primary-dark hover:text-primary font-medium inline-flex items-center"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Mehr erfahren
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : (
                  <span className="text-gray-400 font-medium">Bald verfügbar</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TankweltenSection;
