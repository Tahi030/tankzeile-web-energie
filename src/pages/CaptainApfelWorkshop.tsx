
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
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-200 via-blue-200 to-green-200 py-12 md:py-20 lg:py-32">
        {/* Character Crew - Arranged as a cohesive team */}
        <div className="absolute inset-0 pointer-events-none opacity-20 md:opacity-25">
          {/* Hero Character Group - Top Formation */}
          <div className="absolute top-2 left-2 md:top-4 md:left-4 flex flex-col gap-2 md:gap-3">
            <img 
              src="/lovable-uploads/fc011b76-01d0-4e54-87ab-6174605bb7fc.png" 
              alt="Captain Apfelzahn" 
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-bounce opacity-90"
              style={{ animationDelay: '0s', animationDuration: '2s' }}
            />
          </div>
          
          <div className="absolute top-2 right-2 md:top-4 md:right-4 flex flex-col gap-2 md:gap-3">
            <img 
              src="/lovable-uploads/93f05473-274d-4f59-9aa9-06d7eaefa496.png" 
              alt="Kai Mutig" 
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-bounce opacity-90"
              style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}
            />
          </div>
          
          {/* Bottom Crew Formation */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 md:gap-6">
            <img 
              src="/lovable-uploads/3d316574-8e30-4bd5-9ac2-43c62f322d8b.png" 
              alt="Blumi Blumenkohl" 
              className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 animate-pulse opacity-80"
              style={{ animationDelay: '1s' }}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 md:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-red-600 drop-shadow-lg font-playfair leading-tight">
                Captain Apfelzahn & die Crew
                <br />
                – auf gesunder Mission
              </h1>
              <div className="relative mb-4 md:mb-6">
                <svg className="w-full max-w-md mx-auto" viewBox="0 0 300 300">
                  <defs>
                    <path id="circle" d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" />
                  </defs>
                  <text className="fill-white text-lg md:text-xl font-fredoka font-medium drop-shadow-md">
                    <textPath href="#circle" startOffset="0%">
                      Volle Obst- und Gemüsekraft voraus
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 md:p-6 lg:p-8 shadow-xl">
                  <img 
                    src="/lovable-uploads/d12c4083-e2df-4c05-a5ee-22df82546ed7.png" 
                    alt="Die Powerzentrale" 
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 drop-shadow-2xl animate-pulse"
                  />
                </div>
              </div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white drop-shadow-md font-medium px-4">
                Für Vorschulkinder, die spielerisch die Welt der gesunden Ernährung entdecken möchten!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 md:mb-8 px-4">
                <div className="relative text-white font-fredoka font-medium text-sm md:text-base">
                  <span className="relative z-10">Spielerisches Lernen</span>
                  <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8">
                    <path
                      d="M2,4 Q10,2 20,4 T40,3 Q50,5 60,4 T80,3 Q90,2 98,4"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                  </svg>
                </div>
                <div className="relative text-white font-fredoka font-medium text-sm md:text-base">
                  <span className="relative z-10">Gesunde Ernährung</span>
                  <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8">
                    <path
                      d="M2,4 Q10,2 20,4 T40,3 Q50,5 60,4 T80,3 Q90,2 98,4"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                  </svg>
                </div>
                <div className="relative text-white font-fredoka font-medium text-sm md:text-base">
                  <span className="relative z-10">Achtsamkeit</span>
                  <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8">
                    <path
                      d="M2,4 Q10,2 20,4 T40,3 Q50,5 60,4 T80,3 Q90,2 98,4"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                  </svg>
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
            <div className="text-center mb-16">
              <div className="inline-block relative">
                <div className="bg-gradient-to-r from-green-200/50 via-blue-200/30 to-purple-200/20 rounded-xl p-8 shadow-lg">
                  <h2 className="text-3xl md:text-4xl font-bold text-green-600 font-playfair mb-4">
                    Triff die gesunde Crew!
                  </h2>
                  {/* Hand-drawn line effect */}
                  <div className="flex justify-center mt-4">
                    <svg width="140" height="8" viewBox="0 0 140 8" className="text-green-500">
                      <path
                        d="M2,4 Q10,2 20,4 T40,3 Q50,5 60,4 T80,3 Q90,5 100,4 T120,3 Q130,2 138,4"
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

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 mb-20 justify-items-center">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-full shadow-xl mb-4 transform group-hover:scale-105 transition-all duration-300 hover:shadow-2xl w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center overflow-hidden border-2 border-green-300/30">
                    <img 
                      src="/lovable-uploads/d12c4083-e2df-4c05-a5ee-22df82546ed7.png" 
                      alt="Die Powerzentrale" 
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-green-600 font-fredoka leading-tight">Die Powerzentrale</h3>
                </div>

                <div className="text-center group">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full shadow-xl mb-4 transform group-hover:scale-105 transition-all duration-300 hover:shadow-2xl w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center overflow-hidden border-2 border-blue-300/30">
                    <img 
                      src="/lovable-uploads/fc011b76-01d0-4e54-87ab-6174605bb7fc.png" 
                      alt="Captain Apfelzahn" 
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-600 font-fredoka leading-tight">Captain Apfelzahn</h3>
                </div>

                <div className="text-center group">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-full shadow-xl mb-4 transform group-hover:scale-105 transition-all duration-300 hover:shadow-2xl w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center overflow-hidden border-2 border-orange-300/30">
                    <img 
                      src="/lovable-uploads/3010b863-5b52-4f66-8512-f9ba4b8c3434.png" 
                      alt="Kimmi Schlau" 
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-orange-600 font-fredoka leading-tight">Kimmi Schlau</h3>
                </div>
                
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-full shadow-xl mb-4 transform group-hover:scale-105 transition-all duration-300 hover:shadow-2xl w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center overflow-hidden border-2 border-green-300/30">
                    <img 
                      src="/lovable-uploads/93f05473-274d-4f59-9aa9-06d7eaefa496.png" 
                      alt="Kai Mutig" 
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-green-600 font-fredoka leading-tight">Kai Mutig</h3>
                </div>
                
                <div className="text-center group col-span-2 sm:col-span-1">
                  <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-full shadow-xl mb-4 transform group-hover:scale-105 transition-all duration-300 hover:shadow-2xl w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center overflow-hidden mx-auto border-2 border-red-300/30">
                    <img 
                      src="/lovable-uploads/cefd4c3a-36d6-4898-9a5f-4fca27ee1b7e.png" 
                      alt="Das Tomaten-Raumschiff" 
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-600 font-fredoka leading-tight">Das Tomaten-Raumschiff</h3>
                </div>
              </div>
            </div>

            {/* Separate section for Paffel - the troublemaker */}
            <div className="text-center mb-20">
              <div className="inline-block relative">
                <div className="bg-gradient-to-r from-yellow-100/40 via-orange-100/30 to-red-100/20 rounded-xl p-6 md:p-8 shadow-md border-2 border-yellow-300/50">
                  <h3 className="text-xl md:text-2xl font-bold text-yellow-700 font-playfair mb-3">
                    Achtung! Paffel möchte die Crew ausbremsen.
                  </h3>
                  {/* Hand-drawn line effect */}
                  <div className="flex justify-center mt-3">
                    <svg width="120" height="6" viewBox="0 0 120 6" className="text-yellow-600">
                      <path
                        d="M2,3 Q10,1 20,3 T40,2 Q50,4 60,3 T80,2 Q90,4 100,3 T118,3"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-70"
                        style={{
                          filter: 'url(#roughPaperPaffel)',
                        }}
                      />
                      <defs>
                        <filter id="roughPaperPaffel">
                          <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="2" />
                          <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.6" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full shadow-lg mb-4 transform group-hover:scale-105 transition-all duration-300 hover:shadow-xl w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center overflow-hidden border-2 border-yellow-300/50">
                    <img 
                      src="/lovable-uploads/3d316574-8e30-4bd5-9ac2-43c62f322d8b.png" 
                      alt="Paffel" 
                      className="w-28 h-28 sm:w-32 sm:h-32 object-cover"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-600 font-fredoka leading-tight">Paffel</h3>
                  <p className="text-sm sm:text-base text-yellow-700 font-medium mt-2 font-fredoka">Der freche Saboteur</p>
                </div>
              </div>
            </div>

            {/* Empty Content Box - Ready for Text */}
            <div className="relative">
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
                      Diese Seite wird gerade aufgebaut.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Feedback */}
            <div className="mt-16">
              <CustomerFeedback />
            </div>

            <div className="mt-12 md:mt-16 text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 md:p-8 shadow-xl border-2 border-green-300/30">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 font-fredoka">
                  Bereit für das Abenteuer?
                </h3>
                <p className="text-white/90 mb-4 md:mb-6 text-base md:text-lg font-fredoka">
                  Lasst uns gemeinsam die Welt der gesunden Ernährung entdecken!
                </p>
                <Link to="/kontakt" className="bg-white text-green-600 font-bold py-3 px-6 md:py-4 md:px-8 rounded-full hover:bg-green-50 transition-colors duration-300 shadow-lg inline-flex items-center gap-2 font-fredoka text-sm md:text-base">
                  <span className="hidden sm:inline">Interesse an einem Workshop?</span>
                  <span className="sm:hidden">Workshop anfragen</span>
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
