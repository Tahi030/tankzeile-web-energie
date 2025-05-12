
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const tankwelten = [
  {
    id: 1,
    title: "Captain Apfel Workshop",
    description: "Für Vorschulkinder, die spielerisch die Welt der gesunden Ernährung entdecken möchten.",
    image: "/lovable-uploads/8138e97e-63f6-4434-a88a-13d9b92ff7cb.png", // Captain Apfel image
    link: "/tankwelten/erleben-verbinden",
  },
  {
    id: 2,
    title: "Alltag leichter leben",
    description: "Für Familien, die Struktur, Entlastung und neue Energie suchen.",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=600&auto=format&fit=crop", // Family cooking with colorful vegetables
    link: "/tankwelten/alltag-leichter-leben",
  },
  {
    id: 3,
    title: "Verstehen & Verändern",
    description: "Für alle, die sich ausgelaugt fühlen und eine Balance zwischen Wissenschaft und Intuition suchen.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600&auto=format&fit=crop", // Person doing meditation/relaxation exercise
    link: "/tankwelten/verstehen-veraendern",
  },
  {
    id: 4,
    title: "Schatz(t)ruhe",
    description: "Für Eltern, Kinder und Einrichtungen, die Beziehung spürbar machen wollen.",
    image: "/lovable-uploads/1af1ee6a-9bf1-4be3-8fdc-9f2186c26743.png", // New treasure chest image
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
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
