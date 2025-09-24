import { useEffect } from "react";
import { motion } from "framer-motion";

const HinterCaptainApfel = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Hinter Captain Apfel – Captain Apfel & seine Crew";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Erfahre mehr über die Geschichte und Mission von Captain Apfel & seiner Crew.');
    }
    
    // Apply background color to the body
    document.body.classList.add('bg-background');
    
    return () => {
      // Remove background color when component unmounts
      document.body.classList.remove('bg-background');
    };
  }, []);

  return (
    <main className="min-h-screen section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="heading-lg mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Jedes Kind ist einzigartig – und steht für mich im Mittelpunkt.
          </motion.h1>
          
          <motion.div 
            className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm text-left"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="content-spacing">
              <p className="body-lg">
                Ich bin <em>Tamara Hillmann</em>, der kreative Kopf hinter <strong>Captain Apfel</strong>.
                Kinder lieben Geschichten – und über Fantasiefiguren lassen sich große Themen wie Gesundheit und Wohlbefinden besonders gut vermitteln. <strong>Captain Apfel</strong> steht für Energie, Freude und das Gefühl, dass gesunde Gewohnheiten leicht Teil des Alltags werden können.
              </p>
              
              <p className="body-lg">
                Ich arbeite eng mit Kindern und Einrichtungen zusammen und bringe dort meine Erfahrung und mein Fachwissen ein. Dabei verbinde ich eigene Erfahrungen mit fundiertem Wissen und bilde mich kontinuierlich weiter – unter anderem an der Akademie der Naturheilkunde. Besonders beschäftige ich mich mit dem Thema Unverträglichkeiten, das mir persönlich am Herzen liegt. Aus diesem Weg entstehen die Pakete, die Familien im Alltag Orientierung und Unterstützung geben.
              </p>
              
              <p className="body-lg">
                Meine bisherigen Fortbildungen und Zertifikate findest du gleich hier auf der Seite – weil mir Qualität, Transparenz und Weiterentwicklung wichtig sind.
              </p>
              
              <div>
                {/* Certificates - nicht anklickbar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
                  <div className="rounded-lg overflow-hidden border border-border/30">
                    <img
                      src="/certificates/kinderschutzkonzept.jpg"
                      alt="Kinderschutzkonzept Zertifikat"
                      className="image-certificate"
                    />
                  </div>
                  
                  <div className="rounded-lg overflow-hidden border border-border/30">
                    <img
                      src="/certificates/adultismus.jpg"
                      alt="Was ist Adultismus Zertifikat"
                      className="image-certificate"
                    />
                  </div>
                  
                  <div className="rounded-lg overflow-hidden border border-border/30">
                    <img
                      src="/certificates/neurodiversitaet.jpg"
                      alt="Was ist Neurodiversität Zertifikat"
                      className="image-certificate"
                    />
                  </div>
                  
                  <div className="rounded-lg overflow-hidden border border-border/30">
                    <img
                      src="/certificates/interaktion.jpg"
                      alt="Fachkraft-Kind-Interaktion Zertifikat"
                      className="image-certificate"
                    />
                  </div>
                </div>

                <p className="body-lg mt-6 mb-6">
                  Herzliche Grüße<br />
                  <em>Tamara Hillmann</em>
                </p>

                {/* Neues Initiative Logo */}
                <div className="flex justify-center mt-8">
                  <img
                    src="/lovable-uploads/Logo Initiative für starke Entwicklung, gesundheit die kindern schmeckt (1).png.png"
                    alt="Captain Apfel - Initiative für starke Entwicklung - Gesundheit, die Kindern schmeckt"
                    className="w-full max-w-md md:max-w-lg h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default HinterCaptainApfel;