
import { Link } from "react-router-dom";

const tankwelten = [
  {
    id: 1,
    title: "Alltag leichter leben",
    description: "Für Familien, die Struktur, Entlastung und neue Energie suchen.",
    image: "photo-1721322800607-8c38375eef04",
    link: "/tankwelten/alltag-leichter-leben",
  },
  {
    id: 2,
    title: "Verstehen & Verändern",
    description: "Für alle, die sich ausgelaugt fühlen und eine Balance zwischen Wissenschaft und Intuition suchen.",
    image: "photo-1506744038136-46273834b3fb",
    link: "/tankwelten/verstehen-veraendern",
  },
  {
    id: 3,
    title: "Erleben & Verbinden",
    description: "Für Eltern, Kinder und Einrichtungen, die Beziehung spürbar machen wollen.",
    image: "photo-1618160702438-9b02ab6515c9",
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
          {tankwelten.map((welt) => (
            <div key={welt.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white">
              <div className="h-48 overflow-hidden">
                <img 
                  src={`https://source.unsplash.com/${welt.image}`} 
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TankweltenSection;
