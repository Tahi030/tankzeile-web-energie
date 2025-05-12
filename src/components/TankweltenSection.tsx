
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const tankwelten = [
  {
    id: 1,
    title: "Alltag leichter leben",
    description: "Für Familien, die Struktur, Entlastung und neue Energie suchen.",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=600&auto=format&fit=crop", // Family cooking with colorful vegetables
    link: "/tankwelten/alltag-leichter-leben",
  },
  {
    id: 2,
    title: "Verstehen & Verändern",
    description: "Für alle, die sich ausgelaugt fühlen und eine Balance zwischen Wissenschaft und Intuition suchen.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600&auto=format&fit=crop", // Person doing meditation/relaxation exercise
    link: "/tankwelten/verstehen-veraendern",
  },
  {
    id: 3,
    title: "Erleben & Verbinden",
    description: "Für Eltern, Kinder und Einrichtungen, die Beziehung spürbar machen wollen.",
    image: "https://images.unsplash.com/photo-1489710020360-66e504159b43?q=80&w=600&auto=format&fit=crop", // Laughing children
    link: "/tankwelten/erleben-verbinden",
  },
];

const TankweltenSection = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="section-title text-center mb-3">Tankwelten</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Entdecke, wie wir uns wieder verbinden können – mit uns selbst, mit unseren Kindern und mit echter Nahrung.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
                <h3 className="text-xl font-semibold mb-2">{welt.title}</h3>
                <p className="text-gray-600 mb-4">{welt.description}</p>
                <Link 
                  to={welt.link}
                  className="text-primary-dark hover:text-primary font-medium inline-flex items-center"
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
