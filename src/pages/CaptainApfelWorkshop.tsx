
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
        {/* Character Crew - Arranged as a cohesive team */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          {/* Hero Character Group - Top Formation */}
          <div className="absolute top-4 left-4 flex flex-col gap-3">
            <img 
              src="/lovable-uploads/5585f373-ca3c-4c93-8f40-6514268b2080.png" 
              alt="Captain Superheld" 
              className="w-16 h-16 md:w-20 md:h-20 animate-bounce opacity-90"
              style={{ animationDelay: '0s', animationDuration: '3s' }}
            />
            <img 
              src="/lovable-uploads/3010b863-5b52-4f66-8512-f9ba4b8c3434.png" 
              alt="Karla Karotte" 
              className="w-14 h-14 md:w-18 md:h-18 animate-bounce opacity-90"
              style={{ animationDelay: '1s', animationDuration: '4s' }}
            />
          </div>
          
          <div className="absolute top-4 right-4 flex flex-col gap-3">
            <img 
              src="/lovable-uploads/8ec988de-b4fb-451b-ad2d-bb92e850e333.png" 
              alt="Apfel mit Energie" 
              className="w-14 h-14 md:w-18 md:h-18 animate-bounce opacity-90"
              style={{ animationDelay: '2s', animationDuration: '3.5s' }}
            />
            <img 
              src="/lovable-uploads/93f05473-274d-4f59-9aa9-06d7eaefa496.png" 
              alt="Bruno Brokkoli" 
              className="w-16 h-16 md:w-20 md:h-20 animate-bounce opacity-90"
              style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}
            />
          </div>
          
          {/* Bottom Crew Formation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6">
            <img 
              src="/lovable-uploads/cefd4c3a-36d6-4898-9a5f-4fca27ee1b7e.png" 
              alt="Tommy Tomate" 
              className="w-14 h-14 md:w-18 md:h-18 animate-pulse opacity-80"
            />
            <img 
              src="/lovable-uploads/3d316574-8e30-4bd5-9ac2-43c62f322d8b.png" 
              alt="Blumi Blumenkohl" 
              className="w-12 h-12 md:w-16 md:h-16 animate-pulse opacity-80"
              style={{ animationDelay: '1s' }}
            />
            <img 
              src="/lovable-uploads/e9fac2ac-84dd-414f-9272-81a5529764a3.png" 
              alt="Überraschte Karotte" 
              className="w-14 h-14 md:w-18 md:h-18 animate-pulse opacity-80"
              style={{ animationDelay: '2s' }}
            />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg font-playfair">
                Captain Apfelzahn & die Crew – auf gesunder Mission
              </h1>
              <p className="text-2xl md:text-3xl mb-6 text-white drop-shadow-md font-fredoka font-medium">
                Volle Obst- und Gemüsekraft voraus
              </p>
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-8 shadow-xl">
                  <img 
                    src="/lovable-uploads/262994cd-1e13-41b8-ba2f-fe702c72679b.png" 
                    alt="Captain Apfelzahn" 
                    className="w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl animate-pulse"
                  />
                </div>
              </div>
              <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-md font-medium">
                🚀 Für Vorschulkinder, die spielerisch die Welt der gesunden Ernährung entdecken möchten! 🚀
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="bg-white/15 backdrop-blur-sm rounded-lg px-6 py-3 text-white font-fredoka font-medium shadow-lg">
                  🎯 Spielerisches Lernen
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg px-6 py-3 text-white font-fredoka font-medium shadow-lg">
                  🥕 Gesunde Ernährung
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg px-6 py-3 text-white font-fredoka font-medium shadow-lg">
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
            
            {/* Meet the Crew - Character Introduction */}
            <div className="text-center mb-12">
              <div className="inline-block relative">
                <div className="bg-gradient-to-r from-green-200/50 via-blue-200/30 to-purple-200/20 rounded-xl p-6 shadow-lg">
                  <h2 className="text-3xl md:text-4xl font-bold text-green-600 font-playfair mb-2">
                    🌟 Triff die Gesunde Crew! 🌟
                  </h2>
                  {/* Hand-drawn line effect */}
                  <div className="flex justify-center mt-3">
                    <svg width="120" height="8" viewBox="0 0 120 8" className="text-green-500">
                      <path
                        d="M2,4 Q8,2 15,4 T30,3 Q40,5 50,4 T70,3 Q80,5 90,4 T110,3 Q115,2 118,4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-70"
                        style={{
                          filter: 'url(#roughPaperCrew)',
                        }}
                      />
                      <defs>
                        <filter id="roughPaperCrew">
                          <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="3" />
                          <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-10 mb-16">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-full shadow-xl mb-4 transform group-hover:scale-110 transition-all duration-300 hover:shadow-2xl w-32 h-32 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/262994cd-1e13-41b8-ba2f-fe702c72679b.png" 
                    alt="Das Kraftzentrum" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-green-600 text-center">Das Kraftzentrum</h3>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full shadow-xl mb-4 transform group-hover:scale-110 transition-all duration-300 hover:shadow-2xl w-32 h-32 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/fc011b76-01d0-4e54-87ab-6174605bb7fc.png" 
                    alt="Captain Apfelzahn" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-blue-600 text-center">Captain Apfelzahn</h3>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-full shadow-xl mb-4 transform group-hover:scale-110 transition-all duration-300 hover:shadow-2xl w-32 h-32 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/3010b863-5b52-4f66-8512-f9ba4b8c3434.png" 
                    alt="Kimmi Schlau" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-orange-600 text-center">Kimmi Schlau</h3>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-full shadow-xl mb-4 transform group-hover:scale-110 transition-all duration-300 hover:shadow-2xl w-32 h-32 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/93f05473-274d-4f59-9aa9-06d7eaefa496.png" 
                    alt="Kai Mutig" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-green-600 text-center">Kai Mutig</h3>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-full shadow-xl mb-4 transform group-hover:scale-110 transition-all duration-300 hover:shadow-2xl w-32 h-32 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/cefd4c3a-36d6-4898-9a5f-4fca27ee1b7e.png" 
                    alt="Das Tomaten-Raumschiff" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-red-600 text-center">Das Tomaten-Raumschiff</h3>
              </div>
            </div>

            {/* Separate section for Puffel - the troublemaker */}
            <div className="bg-yellow-50 rounded-2xl p-8 mb-16 border-2 border-yellow-200">
              <div className="text-center mb-6">
                <div className="inline-block relative">
                  <div className="bg-gradient-to-r from-yellow-200/50 via-orange-200/30 to-red-200/20 rounded-xl p-4 shadow-lg">
                    <h3 className="text-2xl font-bold text-yellow-700 font-playfair mb-2">
                      ⚠️ Achtung! Störenfried an Bord! ⚠️
                    </h3>
                    {/* Hand-drawn line effect */}
                    <div className="flex justify-center mt-2">
                      <svg width="100" height="6" viewBox="0 0 100 6" className="text-yellow-600">
                        <path
                          d="M2,3 Q8,1 15,3 T30,2 Q40,4 50,3 T70,2 Q80,4 90,3 T98,3"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-70"
                          style={{
                            filter: 'url(#roughPaperPuffel)',
                          }}
                        />
                        <defs>
                          <filter id="roughPaperPuffel">
                            <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="2" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.6" />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full shadow-xl mb-4 transform group-hover:scale-110 transition-all duration-300 hover:shadow-2xl w-32 h-32 flex items-center justify-center overflow-hidden border-4 border-yellow-300">
                    <img 
                      src="/lovable-uploads/3d316574-8e30-4bd5-9ac2-43c62f322d8b.png" 
                      alt="Puffel" 
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-yellow-600">Puffel</h3>
                  <p className="text-sm text-yellow-700 font-medium mt-2">Der freche Saboteur</p>
                </div>
              </div>
            </div>

            {/* Empty Content Box - Ready for Text */}
            <div className="relative">
              {/* Crew Members watching over the content box - positioned to not obstruct text */}
              <div className="absolute -top-8 -left-8 hidden md:block">
                <img 
                  src="/lovable-uploads/3010b863-5b52-4f66-8512-f9ba4b8c3434.png" 
                  alt="Kimmi Schlau schaut zu" 
                  className="w-12 h-12 opacity-40 transform -rotate-12 hover:opacity-70 transition-opacity"
                />
              </div>
              
              <div className="absolute -top-6 -right-6 hidden md:block">
                <img 
                  src="/lovable-uploads/8ec988de-b4fb-451b-ad2d-bb92e850e333.png" 
                  alt="The Power Center" 
                  className="w-10 h-10 opacity-40 transform rotate-12 hover:opacity-70 transition-opacity"
                />
              </div>

              <div className="absolute -bottom-6 -right-8 hidden md:block">
                <img 
                  src="/lovable-uploads/cefd4c3a-36d6-4898-9a5f-4fca27ee1b7e.png" 
                  alt="The Tomato Spaceship bereit" 
                  className="w-10 h-10 opacity-40 transform -rotate-6 hover:opacity-70 transition-opacity"
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
                    <p className="text-gray-400 text-lg font-fredoka font-medium">
                      Hier wird bald spannender Inhalt über unsere Workshops eingefügt...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Feedback */}
            <div className="mt-16">
              <CustomerFeedback />
            </div>

            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4 font-fredoka">
                  Bereit für das Abenteuer?
                </h3>
                <p className="text-white/90 mb-6 text-lg font-fredoka">
                  Lasst uns gemeinsam die Welt der gesunden Ernährung entdecken!
                </p>
                <Link to="/kontakt" className="bg-white text-green-600 font-bold py-4 px-8 rounded-full hover:bg-green-50 transition-colors duration-300 shadow-lg inline-flex items-center gap-2 font-fredoka">
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
