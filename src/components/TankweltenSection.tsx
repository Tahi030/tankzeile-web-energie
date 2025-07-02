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
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=600&auto=format&fit=crop",
    link: "/tankwelten/alltag-leichter-leben",
  },
];

const TankweltenSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Special styled headline */}
        <div className="relative mb-16 text-center">
          <div className="inline-block relative px-12 py-6 bg-gradient-to-r from-primary-light via-accent to-primary-light rounded-3xl shadow-lg transform rotate-1">
            <div className="absolute inset-0 bg-white/20 rounded-3xl transform -rotate-2"></div>
            <div className="absolute inset-0 bg-secondary/10 rounded-3xl transform rotate-1"></div>
            <h2 className="relative text-3xl md:text-4xl font-bold text-primary-dark font-sisterhood transform -rotate-1 drop-shadow-sm">
              Die Tankwelten
            </h2>
            {/* Decorative elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-secondary rounded-full opacity-80"></div>
            <div className="absolute -bottom-1 -right-3 w-3 h-3 bg-primary rounded-full opacity-60"></div>
            <div className="absolute top-1 right-8 w-2 h-2 bg-accent-dark rounded-full opacity-70"></div>
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
              <div className={index === 0 ? "h-96" : "h-48"}>
                <img 
                  src={welt.image} 
                  alt={welt.title} 
                  className={`w-full h-full transition-transform hover:scale-105 duration-300 ${
                    index === 0 ? 'object-contain bg-white' : 'object-cover'
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
