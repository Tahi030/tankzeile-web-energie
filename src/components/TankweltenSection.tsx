
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const tankwelten = [
  {
    id: 1,
    title: "Captain Apfel - auf gesunder Mission",
    description: "Workshop mit Captain Apfel - Ernährung als Abenteuer für Vorschulkinder\n\nVolle Obst- und Gemüsekraft voraus! Captain Apfel lädt ein auf eine Mission ins Körperinnere. Im Fokus: das geheimnisvolle Kraftwerk, das erst mit dem richtigen Treibstoff so richtig in Fahrt kommt. Was tut unserem Körper gut – und was bremst ihn aus? Schafft es die Crew, die Kraftzentrale zu aktivieren?\nEin Workshop voller Bewegung – voller Spaß, Teamgeist und überraschender Entdeckungen rund um unseren Körper.",
    image: "/lovable-uploads/ff6c74d3-5da5-4a82-b20b-97843a8db26a.png",
    link: "/tankwelten/captain-apfel-workshop",
  },
  {
    id: 2,
    title: "Alltag leichter leben",
    description: "Die Tankbox - Wochenstruktur mit vorbereiteten Komponenten & Achtsamkeit\nKostenlose PDFs - z. B. zuckerarme Snacks, Kita-Box-Ideen",
    image: "/lovable-uploads/a7b8b38c-22c9-4f39-8b85-d9174013bc67.png",
    link: "/tankwelten/alltag-leichter-leben",
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
              <p className="text-lg text-gray-600 font-sans">
                Meine Angebote für Sie
              </p>
              {/* Decorative dots */}
              <div className="flex justify-center mt-4 space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div className="w-2 h-2 rounded-full bg-accent"></div>
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
              <div className={index === 0 ? "h-96" : "h-64"}>
                <img 
                  src={welt.image} 
                  alt={welt.title} 
                  className={`w-full h-full transition-transform hover:scale-105 duration-300 ${
                    index === 0 
                      ? 'object-contain bg-gradient-to-br from-primary-light/30 via-accent-light/20 to-secondary-light/30' 
                      : 'object-contain bg-gradient-to-br from-secondary-light/30 via-primary-light/20 to-accent-light/30 p-4'
                  }`}
                />
              </div>
              <div className="p-6">
                <h3 className={`font-bold mb-2 font-sans ${index === 0 ? 'text-3xl text-red-600' : 'text-xl'}`}>{welt.title}</h3>
                <p className="text-gray-600 mb-4 whitespace-pre-line">{welt.description}</p>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TankweltenSection;
