import { useEffect } from "react";
import { motion } from "framer-motion";
import { HeroWelcome } from "@/components/HeroWelcome";
import { ModernCrewSection } from "@/components/ModernCrewSection";
import { OfferCard } from "@/components/OfferCard";

const Index = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Captain Apfel – Initiative für starke Entwicklung";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Captain Apfel & seine Crew – Initiative für starke Entwicklung. Gesundheit, die Kindern schmeckt mit modernen Workshops und Angeboten.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      
      {/* Hero Section with large welcoming image */}
      <HeroWelcome />

      {/* Captain Apfel Introduction - Moved higher */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-border/30 relative overflow-hidden">
              
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12" />
              
              <div className="relative space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-base text-muted-foreground">
                    Hallo, ich bin
                  </p>
                  
                  <h2 className="text-2xl font-playfair">
                    Captain Apfel
                  </h2>
                  
                  <p className="text-base text-muted-foreground">
                    Mit meiner Crew bin ich unterwegs auf gesunder Mission.
                  </p>
                </div>
                
                <div className="space-y-6 text-center">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Berlin ist der Startpunkt unserer Reise. Von hier aus hebt das Tomatenraumschiff ab und landet direkt in Einrichtungen mit Kindern im Vorschul- und Grundschulalter.
                  </p>
                  
                  <div className="pt-6 border-t border-primary/10">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Denn gesunde Gewohnheiten geben uns Kraft, machen das Denken leichter und lassen uns rundum wohlfühlen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Crew Section - Modern display */}
      <ModernCrewSection />

      {/* Direct Homepage Offers Integration */}
      <section className="section-padding">
        <div className="container-custom">
          
          {/* Section Title */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary font-playfair mb-6">
              Programme für gesunde Entwicklung
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-base text-muted-foreground mt-6 max-w-2xl mx-auto">
              Speziell entwickelte Workshops und Pakete für Kinder und Familien
            </p>
          </motion.div>

          {/* Offer Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <OfferCard
              title="Reise zur Powerzentrale"
              subtitle="Start: Frühjahr 2026"
              description="Mit Captain Apfel erleben Kinder ein spannendes Abenteuer: Wie kommt Energie in den Körper, was macht uns stark und konzentriert – und wie bleibt die Powerzentrale hell und aktiv?"
              callToAction="👉 Bald landet Captain Apfel auch in deiner Kita!"
              imageUrl="/assets/workshop-powerzentrale-enhanced.jpg"
              linkTo="/kontakt"
              buttonText="Vormerken lassen"
              accent="primary"
              delay={0.1}
            />
            
            <OfferCard
              title="Essen ist fertig!"
              description="Praktische Pakete zur Diagnose von Nahrungsmittelunverträglichkeiten bei Kindern. Speziell entwickelte Leitfäden, Rezepte und Alltagshilfen für Familien mit betroffenen Kindern."
              imageUrl="/assets/essen-ist-fertig-cover.jpg"
              linkTo="/essen-ist-fertig"
              buttonText="Pakete entdecken"
              accent="secondary"
              delay={0.2}
            />
            
          </div>

          {/* Additional Content Boxes */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Song Box */}
            <motion.div 
              className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-border/30 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10 space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary font-playfair mb-4">
                    5,4,3,2,1<br />– Volle Obst- und Gemüsekraft voraus!
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Unser Mitmach-Lied zum Tanzen, Singen und Spaß haben. Beweg dich mit Captain Apfel & seiner Crew.
                  </p>
                </div>
              </div>
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full -translate-y-12 translate-x-12" />
            </motion.div>

            {/* Coloring Pages Box */}
            <motion.div 
              className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-border/30 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10 space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary font-playfair mb-4">
                    Mission Buntstift
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    Jetzt bist du dran: Stifte raus und los!
                  </p>
                  
                  {/* Download Links for Coloring Pages */}
                  <div className="space-y-3">
                    <motion.a 
                      href="/pdfs/lieblingsdose.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 text-secondary px-4 py-3 rounded-lg font-medium transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Ausmalbilder herunterladen
                    </motion.a>
                  </div>
                </div>
              </div>
              {/* Decorative background */}
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full translate-y-12 -translate-x-12" />
            </motion.div>

          </div>

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
              <h2 className="text-3xl font-bold text-primary font-playfair mb-6">
                Bereit für die gesunde Mission?
              </h2>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Lassen Sie uns gemeinsam die Reise zu einer gesunden und starken Entwicklung beginnen.
              </p>
              <motion.a 
                href="/kontakt"
                className="inline-flex items-center px-8 py-4 bg-secondary text-white rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Jetzt Kontakt aufnehmen
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Index;