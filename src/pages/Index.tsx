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
    <div className="min-h-screen">
      
      {/* Hero Section with large welcoming image */}
      <HeroWelcome />

      {/* Captain Apfel Introduction - Directly connected to hero */}
      <section className="pt-0 pb-16">
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
                  <h2 className="text-2xl font-luckiest text-primary">
                    Hallo, ich bin Captain Apfel.
                  </h2>
                  
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Ich bin mit meiner Crew auf gesunder Mission unterwegs.
                  </p>
                </div>
                
                <div className="space-y-6 text-center">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Hier findest du Ideen rund um Ernährung, Unverträglichkeiten und ganzheitliches Wohlbefinden – mit Spaß, Wissen und Energie aus der Powerzentrale, der Mitte des Körpers.
                  </p>
                  
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Ab 2026 startet in Berliner Einrichtungen unsere „Reise zur Powerzentrale" – für Vorschul- und Grundschulkinder.
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
            <h2 className="text-3xl font-bold text-primary font-luckiest mb-6">
              Programme für gesunde Entwicklung
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-base text-muted-foreground mt-6 max-w-2xl mx-auto">
              Speziell entwickelte Workshops und Pakete für Kinder und Familien
            </p>
          </motion.div>

          {/* Offer Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <UniformOfferCard
              title="Reise zur Powerzentrale"
              subtitle="Start: Frühjahr 2026"
              description="Mit Captain Apfel erleben Kinder ein spannendes Abenteuer: Wie kommt Energie in den Körper, was macht uns stark und konzentriert – und wie bleibt die Powerzentrale hell und aktiv?"
              callToAction="👉 Bald landet Captain Apfel auch in deiner Kita!"
              imageUrl="/assets/hero-crew.png"
              linkTo="/kontakt"
              buttonText="Vormerken lassen"
              accent="primary"
              delay={0.1}
            />
            
            <UniformOfferCard
              title="Essen ist fertig!"
              description="Praktische Pakete zur Diagnose von Nahrungsmittelunverträglichkeiten bei Kindern. Speziell entwickelte Leitfäden, Rezepte und Alltagshilfen für Familien mit betroffenen Kindern."
              imageUrl="/assets/essen-ist-fertig-cover.jpg"
              linkTo="/essen-ist-fertig"
              buttonText="Pakete entdecken"
              accent="secondary"
              delay={0.2}
            />
            
          </div>

          {/* Spacing between sections */}
          <div className="mt-24"></div>

          {/* Additional Content Boxes */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <UniformOfferCard
              title={
                <span>
                  <span className="text-red-500 font-bold">5</span>
                  <span className="text-orange-500 font-bold">,</span>
                  <span className="text-yellow-500 font-bold">4</span>
                  <span className="text-green-500 font-bold">,</span>
                  <span className="text-blue-500 font-bold">3</span>
                  <span className="text-purple-500 font-bold">,</span>
                  <span className="text-pink-500 font-bold">2</span>
                  <span className="text-red-500 font-bold">,</span>
                  <span className="text-orange-500 font-bold">1</span>
                  <span className="text-foreground"> – Volle Obst- und Gemüsekraft voraus!</span>
                </span>
              }
              description="Unser Mitmach-Lied zum Tanzen, Singen und Spaß haben. Beweg dich mit Captain Apfel & seiner Crew."
              videoPlaceholder={true}
              accent="accent"
              delay={0.4}
            />

            <UniformOfferCard
              title="Mission Buntstift"
              description="Jetzt bist du dran: Stifte raus und los!"
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