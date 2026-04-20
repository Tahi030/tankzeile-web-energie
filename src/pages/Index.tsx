import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeroWelcome } from "@/components/HeroWelcome";
import { ModernCrewSection } from "@/components/ModernCrewSection";
import { UniformOfferCard } from "@/components/UniformOfferCard";
import essenIstFertigImage from "@/assets/essen-ist-fertig-card.png";
import missionBuntstiftImage from "@/assets/mission-buntstift-header.png";
import missionBuntstiftImageSm from "@/assets/mission-buntstift-header.png";
import reisePowerzentraleImage from "@/assets/reise-powerzentrale-card.png";

const Index = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Captain Apfel – Workshops & Hilfe bei Unverträglichkeiten";

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        'Schluss mit Bauchweh! Dein Anker für den Alltag: Interaktive Kinder-Workshops & "Essen ist fertig!"-Pakete. Jetzt entdecken für starke Kids & entspannte Eltern.',
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-muted">
      {/* Hero Section with large welcoming image */}
      <HeroWelcome />

      {/* Captain Apfel Introduction */}
      <section className="section-padding pb-20 sm:pb-28 md:pb-36 -mt-6 sm:-mt-14 md:-mt-20 lg:-mt-28 xl:-mt-36 relative z-10 px-4 sm:px-6">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-lg border border-border/30 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12" />

              <div className="relative space-y-6">
                <div className="text-center space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-luckiest">Hallo, ich bin Captain Apfel!</h2>
                </div>

                <div className="space-y-4 text-left">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Ich mache Ernährungsbildung für Kinder und Familien greifbar.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Mit Workshops und alltagstauglicher Unterstützung rund um Essen, Unverträglichkeiten und gute Gewohnheiten.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed italic">
                    „Jedes Kind ist einzigartig. Seine Gesundheit und sein eigenes Tempo stehen für mich im Mittelpunkt."
                  </p>
                </div>

                <div className="flex flex-col items-center gap-4 pt-2">
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
                    <Link
                      to="/meine-angebote/workshop-gesunde-mission"
                      onClick={() => window.scrollTo(0, 0)}
                      className="inline-flex items-center justify-center bg-[hsl(18_65%_65%)] hover:bg-[hsl(18_65%_58%)] text-white px-6 py-3 rounded-full transition-all duration-300 text-base font-medium shadow-md hover:shadow-lg active:scale-95"
                    >
                      Zur Reise zur Powerzentrale
                    </Link>
                    <Link
                      to="/essen-ist-fertig"
                      onClick={() => window.scrollTo(0, 0)}
                      className="inline-flex items-center justify-center bg-[hsl(18_65%_65%)] hover:bg-[hsl(18_65%_58%)] text-white px-6 py-3 rounded-full transition-all duration-300 text-base font-medium shadow-md hover:shadow-lg active:scale-95"
                    >
                      Zu Essen ist fertig!
                    </Link>
                  </div>
                  <Link
                    to="/kontakt"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                  >
                    Kooperation anfragen
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Crew Section - Modern display */}
      <section className="section-padding pb-20 sm:pb-28 md:pb-36">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-luckiest mb-4">Schon gewusst?</h2>
            <div className="text-base text-muted-foreground max-w-2xl mx-auto space-y-4">
              <p>In jedem Kinderbauch steckt ein Kraftwerk: unsere Powerzentrale, der Darm.</p>
              <p>Hier sitzen 80 Prozent des Immunsystems. Das ist der Motor für Energie, Konzentration und gute Laune.</p>
              <p>Mit Mut und Wissen hält die Crew die Powerzentrale in Schwung.</p>
              <p>Und dann ist da noch Paffel: Als ehemaliger Mais hat er sich für die verarbeitete Seite entschieden und versucht, alles auszubremsen und zu verkleben.</p>
            </div>
          </motion.div>




          <ModernCrewSection />
        </div>
      </section>

      {/* Direct Homepage Offers Integration */}
      <section className="section-padding pt-20 sm:pt-28 md:pt-36">
        <div className="container-custom">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-luckiest mb-6">Programme für gesunde Entwicklung</h2>
            <div className="w-24 h-1 bg-[hsl(18_65%_65%)] mx-auto rounded-full" />
            <p className="text-base text-muted-foreground mt-6 max-w-2xl mx-auto">
              Workshops, Materialien und kreative Angebote für Kinder, Familien und Einrichtungen.
            </p>
          </motion.div>

          {/* Offer Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <UniformOfferCard
              title="Reise zur Powerzentrale"
              subtitle="Frühjahr 2026"
              description="Ob Familienzentrum, Eltern-Kind-Gruppe oder Kita: Die Powerzentrale kommt dorthin, wo Kinder spielen und lernen. Jetzt startet die Mission für mehr Gesundheit und ein gutes Bauchgefühl."
              callToAction=""
              imageUrl={reisePowerzentraleImage}
              imageUrlSm={reisePowerzentraleImage}
              linkTo="/kontakt"
              buttonText="Ready for take-off"
              accent="primary"
              delay={0.1}
              imageClassName="object-[50%_40%]"
             />

            <UniformOfferCard
              title="Essen ist fertig!"
              description={<>Bauchweh oder die frische Diagnose Nahrungsmittelunverträglichkeit bestimmen den Alltag? Mit der digitalen Serie „Essen ist fertig!" bekommst du statt Medizin-Kauderwelsch direkt anwendbares Praxis-Wissen, um den Ernährungs-Dschungel stressfrei zu meistern.</>}
              imageUrl={essenIstFertigImage}
              imageUrlSm={essenIstFertigImage}
              linkTo="/essen-ist-fertig"
              buttonText="Direkt zur Soforthilfe"
              accent="secondary"
              delay={0.2}
              imageClassName="object-top"
            />
          </div>

          {/* Spacing between sections */}
          <div className="mt-8"></div>

          {/* Additional Content Boxes */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <UniformOfferCard
              title="Das Captain Apfel - Lied"
              description="Das Mitmach-Lied lädt zum Tanzen, Singen und Spaßhaben ein. Bewegung mit Captain Apfel und seiner Crew – volle Obst- und Gemüsekraft voraus!"
              imageUrl="/assets/mitmach-lied-thumbnail.webp"
              imageUrlSm="/assets/mitmach-lied-thumbnail-sm.webp"
              youtubeLink="https://www.youtube.com/watch?v=yXku9Q91tmY"
              downloadLinks={[
                { text: "Mitmachkarte", url: "/pdfs/mitmach-lied-captain-apfel.pdf" },
              ]}
              accent="accent"
              delay={0.4}
            />

            <UniformOfferCard
              title="Mission Buntstift"
              description="Jetzt heißt es: Stifte raus und los! Hier warten Ausmalbilder mit Captain Apfel und seiner Crew zum Herunterladen – ideal für eine kreative Pause zuhause oder in der Kita."
              imageUrl={missionBuntstiftImage}
              imageUrlSm={missionBuntstiftImageSm}
              imageClassName="object-[50%_60%]"
              coloringPages={[
                { imageUrl: "/images/paffel-ausmalbild-thumb.webp", pdfUrl: "/pdfs/paffel-ausmalbild-v4.pdf" },
                {
                  imageUrl: "/images/powerzentrale-ausmalbild-thumb.webp",
                  pdfUrl: "/pdfs/powerzentrale-ausmalbild-v4.pdf",
                },
                {
                  imageUrl: "/images/captain-apfel-ausmalbild-thumb-v5.webp",
                  pdfUrl: "/pdfs/captain-apfel-ausmalbild-v5.pdf",
                },
                {
                  imageUrl: "/images/powerzentrale-ausmalbild-v2-thumb.webp",
                  pdfUrl: "/pdfs/powerzentrale-ausmalbild-v2.pdf",
                },
                {
                  imageUrl: "/images/kai-mutig-ausmalbild-thumb.webp",
                  pdfUrl: "/pdfs/kai-mutig-ausmalbild.pdf",
                },
                {
                  imageUrl: "/images/crew-ausmalbild-thumb.webp",
                  pdfUrl: "/pdfs/crew-ausmalbild.pdf",
                },
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
