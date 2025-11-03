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
                Ich bin <em>Tamara Hillmann</em>, Gründerin und kreativer Kopf hinter <strong>Captain Apfel</strong>.
                Ursprünglich komme ich aus der Organisations- und Projektarbeit – und genau diese Erfahrung nutze ich heute, um Gesundheitsprojekte professionell und mit Struktur umzusetzen.
              </p>
              
              <p className="body-lg">
                Mit der Zeit rückte ein Thema immer stärker in den Mittelpunkt: gesunde Ernährung und Unverträglichkeiten bei Kindern.
                Aus eigener Betroffenheit und stetiger Weiterbildung in Naturheilkunde entstand die Idee, Wissen und Alltagspraxis zu verbinden.
              </p>
              
              <p className="body-lg">
                Ich bilde mich regelmäßig in den Bereichen Ernährung, Naturheilkunde und Kindergesundheit weiter, um neue Erkenntnisse in meine Arbeit einfließen zu lassen.
              </p>
              
              <p className="body-lg">
                So wurde <strong>Captain Apfel</strong> geboren: eine Initiative, die Kinder mit Freude an das Thema Wohlbefinden heranführt und Kitas praktische Werkzeuge an die Hand gibt.
              </p>
              
              <p className="body-lg">
                Ich entwickle Workshops, Materialien und Impulse, die Gesundheit spürbar machen – mit Herz, Verstand und einer großen Portion Begeisterung.
              </p>

              <p className="body-lg mt-6">
                Herzliche Grüße<br />
                <em>Tamara Hillmann</em>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default HinterCaptainApfel;