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

      {/* About Section - Introduction */}
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
                  <p className="text-xl text-muted-foreground">
                    Hallo, ich bin
                  </p>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-primary font-playfair">
                    Captain Apfel
                  </h2>
                  
                  <p className="text-xl text-muted-foreground">
                    Mit meiner Crew bin ich unterwegs auf gesunder Mission.
                  </p>
                </div>
                
                <div className="space-y-6 text-center">
                  <p className="text-lg leading-relaxed text-foreground">
                    <strong className="text-primary">Berlin</strong> ist der Startpunkt unserer Reise. Von hier aus hebt das <strong className="text-secondary">Tomatenraumschiff</strong> ab und landet direkt in Einrichtungen mit Kindern im Vorschul- und Grundschulalter.
                  </p>
                  
                  <div className="pt-6 border-t border-primary/10">
                    <p className="text-xl font-semibold text-primary leading-relaxed">
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
            <h2 className="heading-lg mb-6">
              Unsere Angebote für Sie
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Entdecken Sie unsere speziell entwickelten Programme für eine gesunde und starke Entwicklung
            </p>
          </motion.div>

          {/* Offer Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <OfferCard
              title="Workshop: Reise zur Powerzentrale"
              description="Ein interaktiver Workshop, der Kinder auf eine spannende Reise zu gesunder Ernährung und starker Entwicklung mitnimmt. Mit Captain Apfel und seiner Crew entdecken sie die Geheimnisse der Powerzentrale."
              imageUrl="/assets/reise-zur-powerzentrale.jpg"
              linkTo="/meine-angebote/workshop-gesunde-mission"
              buttonText="Workshop entdecken"
              accent="primary"
              delay={0.1}
            />
            
            <OfferCard
              title="Essen ist fertig!"
              description="Praktische Alltagshilfen und kreative Ideen rund um gesunde Ernährung für Familien. Einfache Rezepte, Tipps und Tricks, die das Familienleben leichter und gesünder machen."
              imageUrl="/assets/essen-ist-fertig-title.jpg"
              linkTo="/essen-ist-fertig"
              buttonText="Mehr erfahren"
              accent="secondary"
              delay={0.2}
            />
            
          </div>

          {/* Blog Highlight */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-accent/10 rounded-3xl p-8 border border-accent/20 inline-block">
              <h3 className="text-2xl font-bold text-primary font-playfair mb-4">
                Leichter leben Blog
              </h3>
              <p className="text-muted-foreground mb-6">
                Regelmäßige Tipps und Inspiration für einen leichteren Alltag
              </p>
              <motion.a 
                href="/meine-angebote/alltag-leichter-leben"
                className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium transition-all duration-200 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Blog besuchen
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

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
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-playfair mb-6">
                Bereit für die gesunde Mission?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
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