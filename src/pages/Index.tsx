import { useEffect } from "react";
import { motion } from "framer-motion";
import { HeroWelcome } from "@/components/HeroWelcome";
import { ModernCrewSection } from "@/components/ModernCrewSection";
import { UniformOfferCard } from "@/components/UniformOfferCard";

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
    <div className="min-h-screen bg-muted">
      
      {/* Hero Section with large welcoming image */}
      <HeroWelcome />

      {/* Captain Apfel Introduction */}
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
                  <h2 className="text-3xl font-luckiest text-primary">
                    Hallo, ich bin Captain Apfel!
                  </h2>
                  
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Ich bin mit meiner Crew auf gesunder Mission unterwegs. Gemeinsam bringen wir Kindern bei, was ihrem Körper guttut – und wie sie ihre Powerzentrale hell leuchten lassen.
                  </p>
                </div>
                
                <div className="space-y-6 text-center">
                  <div className="space-y-4">
                    <p className="text-base font-semibold text-foreground">
                      Hier findest du:
                    </p>
                    <ul className="text-base leading-relaxed text-muted-foreground space-y-2 text-left max-w-2xl mx-auto">
                      <li>– Workshops voller Bewegung, Wissen und Abenteuer</li>
                      <li>– Materialien und PDF-Pakete zu Ernährung und Unverträglichkeiten</li>
                      <li>– Projekte, die Familien, Kitas und Schulen stärken</li>
                    </ul>
                  </div>
                  
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Ab Frühjahr 2026 startet unsere „Reise zur Powerzentrale" in Berliner Einrichtungen – für Vorschulkinder und Grundschüler.
                  </p>
                  
                  <div className="pt-6 border-t border-primary/10">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Captain Apfel steht für Regionalität, Nachhaltigkeit und die Freude an gesunden Gewohnheiten, die sich leicht in den Alltag integrieren lassen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Crew Section - Modern display */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary font-luckiest mb-4">
              Lerne die Crew kennen
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Jedes Mitglied hat seine eigene Superkraft – gemeinsam halten sie die Powerzentrale aktiv.
            </p>
          </motion.div>
          <ModernCrewSection />
        </div>
      </section>

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
            <h2 className="text-3xl font-bold text-primary font-luckiest mb-6">
              Programme für gesunde Entwicklung
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-base text-muted-foreground mt-6 max-w-2xl mx-auto">
              Workshops, Materialien und kreative Angebote für Kinder, Familien und Einrichtungen.
            </p>
          </motion.div>

          {/* Offer Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <UniformOfferCard
              title="Reise zur Powerzentrale"
              subtitle="Start: Frühjahr 2026"
              description="Mit Captain Apfel erleben Kinder ein spannendes Abenteuer: Wie kommt Energie in den Körper, was macht uns stark und konzentriert – und wie bleibt die Powerzentrale hell und aktiv?"
              callToAction="Bald landet Captain Apfel auch in deiner Kita!"
              imageUrl="/assets/hero-crew.png"
              linkTo="/kontakt"
              buttonText="Vormerken lassen"
              accent="primary"
              delay={0.1}
            />
            
            <UniformOfferCard
              title="Essen ist fertig!"
              description="Praktische PDF-Pakete rund um Nahrungsmittelunverträglichkeiten bei Kindern. Mit verständlichen Leitfäden, Rezeptideen und Alltagshilfen – entwickelt für Familien und pädagogische Fachkräfte."
              imageUrl="/assets/essen-ist-fertig-cover.jpg"
              linkTo="/essen-ist-fertig"
              buttonText="Pakete entdecken"
              accent="secondary"
              delay={0.2}
            />
            
          </div>

          {/* Spacing between sections */}
          <div className="mt-8"></div>

          {/* Additional Content Boxes */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <UniformOfferCard
              title="Mitmach-Lied Video"
              description="Unser Mitmach-Lied lädt zum Tanzen, Singen und Spaßhaben ein. Beweg dich mit Captain Apfel und seiner Crew – volle Obst- und Gemüsekraft voraus!"
              videoUrl="https://www.youtube-nocookie.com/embed/yXku9Q91tmY?rel=0"
              downloadLinks={[
                { text: "Mitmachkarte zum Lied als PDF herunterladen", url: "/pdfs/mitmach-lied-captain-apfel.pdf" }
              ]}
              accent="accent"
              delay={0.4}
            />

            <UniformOfferCard
              title="Mission Buntstift"
              description="Jetzt bist du dran: Stifte raus und los! Hier findest du Ausmalbilder und kleine Kreativaufgaben mit Captain Apfel und seiner Crew – ideal für Kinder zuhause oder in der Kita."
              coloringPages={[
                { imageUrl: "/images/paffel-ausmalbild-thumb.jpg", pdfUrl: "/pdfs/paffel-ausmalbild-v4.pdf" },
                { imageUrl: "/images/powerzentrale-ausmalbild-thumb.jpg", pdfUrl: "/pdfs/powerzentrale-ausmalbild-v4.pdf" },
                { imageUrl: "/images/captain-apfel-ausmalbild-thumb.jpg", pdfUrl: "/pdfs/captain-apfel-ausmalbild-v3.pdf" }
              ]}
              accent="secondary"
              delay={0.5}
            />

          </div>

        </div>
      </section>

    </div>
  );
};

export default Index;