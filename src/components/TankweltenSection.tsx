import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const tankwelten = [
  {
    id: 1,
    title: "Captain Apfel - auf gesunder Mission",
    description: "Workshop mit Captain Apfel - Ernährung als Abenteuer für Vorschulkinder\n\nVolle Obst- und Gemüsekraft voraus! Captain Apfel lädt ein auf eine Mission ins Körperinnere. Im Fokus: das geheimnisvolle Kraftwerk, das erst mit dem richtigen Treibstoff so richtig in Fahrt kommt. Was tut unserem Körper gut – und was bremst ihn aus? Schafft es die Crew, die Kraftzentrale zu aktivieren?\nEin Workshop voller Bewegung – voller Spaß, Teamgeist und überraschender Entdeckungen rund um unseren Körper.",
    image: "/lovable-uploads/8138e97e-63f6-4434-a88a-13d9b92ff7cb.png", // Captain Apfel image
    link: "/tankwelten/captain-apfel-workshop",
  },
  {
    id: 2,
    title: "Alltag leichter leben",
    description: "Die Tankbox - Wochenstruktur mit vorbereiteten Komponenten & Achtsamkeit\nKostenlose PDFs - z. B. zuckerarme Snacks, Kita-Box-Ideen",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=600&auto=format&fit=crop", // Family cooking with colorful vegetables
    link: "/tankwelten/alltag-leichter-leben",
  },
];

const TankweltenSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h3 className="text-xl md:text-2xl font-semibold mb-10 text-center">Die Tankwelten</h3>
        
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
              <div className="h-48 overflow-hidden">
                <img 
                  src={welt.image} 
                  alt={welt.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-sans">{welt.title}</h3>
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
