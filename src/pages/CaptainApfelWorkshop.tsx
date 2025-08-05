
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import CustomerFeedback from "@/components/CustomerFeedback";

const CaptainApfelWorkshop = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Tankzeile – Ernährung & Achtsamkeit für Kinder, Familien & Kitas";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Workshops mit Captain Apfelzahn für Vorschulkinder. Gesunde Ernährung, Achtsamkeit und spielerisches Wissen rund um Nahrungsmittel-Unverträglichkeiten. Für Familien, Erzieher*innen & alle, die Kinder begleiten.');
    }
    
    // Add schema markup for SEO
    const schema = {
      "@context": "https://schema.org",
      "@type": "EducationalEvent",
      "name": "Captain Apfelzahn Workshop",
      "description": "Workshops mit Captain Apfelzahn für Vorschulkinder. Gesunde Ernährung, Achtsamkeit und spielerisches Wissen rund um Nahrungsmittel-Unverträglichkeiten.",
      "organizer": {
        "@type": "Organization",
        "name": "Tankzeile",
        "url": "https://tankzeile.de"
      },
      "audience": {
        "@type": "EducationalAudience",
        "audienceType": "Vorschulkinder, Familien, Kitas"
      },
      "educationalLevel": "Vorschule",
      "learningResourceType": "Workshop",
      "keywords": "Ernährung, Achtsamkeit, Kinder, Captain Apfelzahn, Nahrungsmittel-Unverträglichkeiten, Vorschule"
    };
    
    // Remove existing schema if any
    const existingSchema = document.querySelector('script[type="application/ld+json"][data-page="captain-apfel"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    // Add new schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-page', 'captain-apfel');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    return () => {
      // Cleanup schema on unmount
      const schemaToRemove = document.querySelector('script[type="application/ld+json"][data-page="captain-apfel"]');
      if (schemaToRemove) {
        schemaToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Character Staging */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-400 via-blue-400 to-purple-500 py-20 md:py-32">
        {/* Floating Characters */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top left superhero */}
          <div className="absolute top-8 left-8 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
            <img 
              src="/lovable-uploads/955d2d0c-a07c-4e9d-b15c-68cdd2df29c3.png" 
              alt="Superheld Kind" 
              className="w-24 h-24 md:w-32 md:h-32 drop-shadow-lg"
            />
          </div>
          
          {/* Top right carrot */}
          <div className="absolute top-16 right-16 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
            <img 
              src="/lovable-uploads/f2b15721-f1ff-4dbe-b53b-1775b5f2ff56.png" 
              alt="Karotte" 
              className="w-20 h-20 md:w-28 md:h-28 drop-shadow-lg"
            />
          </div>
          
          {/* Bottom left apple */}
          <div className="absolute bottom-32 left-16 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
            <img 
              src="/lovable-uploads/139a9860-1723-4e16-9555-29cccb999929.png" 
              alt="Apfel" 
              className="w-16 h-16 md:w-24 md:h-24 drop-shadow-lg"
            />
          </div>
          
          {/* Bottom right broccoli */}
          <div className="absolute bottom-20 right-8 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}>
            <img 
              src="/lovable-uploads/372a9afc-d3dc-4e06-af48-a54b32b6a68d.png" 
              alt="Brokkoli" 
              className="w-18 h-18 md:w-26 md:h-26 drop-shadow-lg"
            />
          </div>
          
          {/* Center floating elements */}
          <div className="absolute top-24 left-1/4 animate-pulse">
            <div className="w-3 h-3 bg-white/50 rounded-full"></div>
          </div>
          <div className="absolute bottom-40 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}>
            <div className="w-2 h-2 bg-yellow-300/60 rounded-full"></div>
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg font-playfair">
                Captain Apfelzahn Workshop
              </h1>
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 shadow-xl">
                  <img 
                    src="/lovable-uploads/ef49fc2b-7841-446d-a403-1f024178423c.png" 
                    alt="Captain Apfelzahn Superheld" 
                    className="w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl animate-pulse"
                  />
                </div>
              </div>
              <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-md font-medium">
                🚀 Für Vorschulkinder, die spielerisch die Welt der gesunden Ernährung entdecken möchten! 🚀
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="bg-white/15 backdrop-blur-sm rounded-lg px-6 py-3 text-white font-medium shadow-lg">
                  🎯 Spielerisches Lernen
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg px-6 py-3 text-white font-medium shadow-lg">
                  🥕 Gesunde Ernährung
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg px-6 py-3 text-white font-medium shadow-lg">
                  🧘 Achtsamkeit
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section with Character Friends */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-green-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            
            {/* Character Introduction Row */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
              <div className="text-center group">
                <div className="bg-white rounded-full p-4 shadow-lg mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/lovable-uploads/e901bf3f-c209-4719-8102-cbebb19a3f9b.png" 
                    alt="Überraschte Karotte" 
                    className="w-20 h-20"
                  />
                </div>
                <p className="text-sm font-medium text-green-700">Karla Karotte</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-white rounded-full p-4 shadow-lg mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/lovable-uploads/50a43f2a-cc68-4b68-a082-6af444ec1f0e.png" 
                    alt="Tomate" 
                    className="w-20 h-20"
                  />
                </div>
                <p className="text-sm font-medium text-red-600">Tommy Tomate</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-white rounded-full p-4 shadow-lg mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/lovable-uploads/380d7c97-de7d-4aba-9f97-dbb820ae29da.png" 
                    alt="Blumenkohl" 
                    className="w-20 h-20"
                  />
                </div>
                <p className="text-sm font-medium text-yellow-600">Blumi Blumenkohl</p>
              </div>
            </div>

            {/* Empty Content Box - Ready for Text */}
            <div className="relative">
              {/* Decorative Characters around the box */}
              <div className="absolute -top-8 -left-8 hidden md:block">
                <img 
                  src="/lovable-uploads/f2b15721-f1ff-4dbe-b53b-1775b5f2ff56.png" 
                  alt="Karotte Dekoration" 
                  className="w-16 h-16 opacity-70 transform -rotate-12"
                />
              </div>
              
              <div className="absolute -top-6 -right-6 hidden md:block">
                <img 
                  src="/lovable-uploads/139a9860-1723-4e16-9555-29cccb999929.png" 
                  alt="Apfel Dekoration" 
                  className="w-14 h-14 opacity-70 transform rotate-12"
                />
              </div>
              
              <div className="absolute -bottom-8 -left-6 hidden md:block">
                <img 
                  src="/lovable-uploads/372a9afc-d3dc-4e06-af48-a54b32b6a68d.png" 
                  alt="Brokkoli Dekoration" 
                  className="w-18 h-18 opacity-70 transform rotate-6"
                />
              </div>

              {/* Main Content Box */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-4 border-green-200 relative overflow-hidden min-h-[400px]">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="grid grid-cols-8 gap-4 h-full w-full">
                    {[...Array(64)].map((_, i) => (
                      <div key={i} className="bg-green-400 rounded-full w-2 h-2"></div>
                    ))}
                  </div>
                </div>
                
                {/* Content placeholder */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📝</span>
                    </div>
                    <p className="text-gray-400 text-lg font-medium">
                      Hier wird bald spannender Inhalt eingefügt...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Feedback */}
            <div className="mt-16">
              <CustomerFeedback />
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Bereit für das Abenteuer?
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  Lassen Sie uns gemeinsam die Welt der gesunden Ernährung entdecken!
                </p>
                <Link to="/kontakt" className="bg-white text-green-600 font-bold py-4 px-8 rounded-full hover:bg-green-50 transition-colors duration-300 shadow-lg inline-flex items-center gap-2">
                  <span>🚀</span>
                  Interesse an einem Workshop?
                  <span>🥕</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaptainApfelWorkshop;
