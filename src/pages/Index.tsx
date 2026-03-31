import { useEffect } from "react";
import { motion } from "framer-motion";
import { HeroWelcome } from "@/components/HeroWelcome";
import { ModernCrewSection } from "@/components/ModernCrewSection";
import { UniformOfferCard } from "@/components/UniformOfferCard";
import essenIstFertigImage from "@/assets/essen-ist-fertig-card.png";
import missionBuntstiftImage from "@/assets/mission-buntstift-header.png";

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
      <section className="section-padding -mt-6 sm:-mt-14 md:-mt-20 lg:-mt-28 xl:-mt-36 relative z-10 px-4 sm:px-6">
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
                    Schon gewusst? In jedem Kinderbauch steckt ein Kraftwerk: die Powerzentrale (der Darm). Hier sitzen 80 Prozent des Immunsystems. Das ist der Motor für Energie, Konzentration und gute Laune.
                  </p>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    Captain Apfel macht Ernährungsbildung greifbar. Vorschulkinder lernen, ihren Antrieb zu pflegen. Statt der Regel „Obst ist gesund" zählt das Erleben: Was bringt die Powerzentrale zum Leuchten? Und wer ist dieser „Paffel", der das System verkleben möchte?
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-base font-semibold text-foreground">Passgenaue Angebote für Kitas und Familien:</p>
                  <ul className="text-base leading-relaxed text-muted-foreground space-y-3 text-left max-w-2xl">
                    <li>
                      <strong className="text-foreground">Reise zur Powerzentrale</strong>
                      <br />
                      Der Erlebnisworkshop für Familienzentren und Kitas in Berlin und Umgebung. Ohne Einkaufsstress und mit minimaler Vorbereitung. Die Organisation bleibt schlank, damit die volle Aufmerksamkeit den Kindern gilt. Persönlich, greifbar und verlässlich.
                    </li>
                    <li>
                      <strong className="text-foreground">Essen ist fertig!</strong>
                      <br />
                      Die E-Books der Serie „Essen ist fertig!" bieten Soforthilfe für zu Hause. Sie geben einen roten Faden bei Bauchschmerzen, Unverträglichkeiten oder Überforderung am Esstisch. Als Rettungskoffer bringen sie Sicherheit in Familien, sodass der Bauch endlich zur Ruhe kommt.
                    </li>
                  </ul>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed text-center italic border-t border-primary/10 pt-6">
                  „Jedes Kind ist einzigartig. Seine Gesundheit und sein Tempo stehen für mich im Mittelpunkt."
                </p>
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
            <h2 className="text-3xl font-bold font-luckiest mb-4">Lerne die Crew kennen</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Mit Mut und Wissen hält die Crew die Powerzentrale aktiv. Ganz anders Paffel: Er entschied sich für die
              verarbeitete Seite und versucht nun als ehemaliger Mais, alles auszubremsen.
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
              subtitle="Start: Frühjahr 2026"
              description="Ob Familienzentrum, Eltern-Kind-Gruppe oder Kita: Die Powerzentrale kommt dorthin, wo Kinder spielen und lernen. Jetzt startet die Mission für mehr Gesundheit und ein gutes Bauchgefühl."
              callToAction=""
              imageUrl="/assets/hero-crew.png"
              linkTo="/kontakt"
              buttonText="Ready for take-off"
              accent="primary"
              delay={0.1}
              imageClassName="h-48 object-cover"
            />

            <UniformOfferCard
              title="Essen ist fertig!"
              description={<>Bauchweh oder die frische Diagnose Nahrungsmittelunverträglichkeit bestimmen den Alltag? Mit der digitalen Serie „Essen ist fertig!" bekommst du statt Medizin-Kauderwelsch direkt anwendbares Praxis-Wissen, um den Ernährungs-Dschungel stressfrei zu meistern.</>}
              imageUrl={essenIstFertigImage}
              linkTo="/essen-ist-fertig"
              buttonText="Direkt zur Soforthilfe"
              accent="secondary"
              delay={0.2}
              imageClassName="h-56 object-cover object-top"
            />
          </div>

          {/* Spacing between sections */}
          <div className="mt-8"></div>

          {/* Additional Content Boxes */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <UniformOfferCard
              title="Das Captain Apfel - Lied"
              description="Das Mitmach-Lied lädt zum Tanzen, Singen und Spaßhaben ein. Bewegung mit Captain Apfel und seiner Crew – volle Obst- und Gemüsekraft voraus!"
              imageUrl="/assets/mitmach-lied-thumbnail.jpg"
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
              imageClassName="h-56 sm:h-64 object-cover object-[50%_20%]"
              coloringPages={[
                { imageUrl: "/images/paffel-ausmalbild-thumb.jpg", pdfUrl: "/pdfs/paffel-ausmalbild-v4.pdf" },
                {
                  imageUrl: "/images/powerzentrale-ausmalbild-thumb.jpg",
                  pdfUrl: "/pdfs/powerzentrale-ausmalbild-v4.pdf",
                },
                {
                  imageUrl: "/images/captain-apfel-ausmalbild-thumb-v5.png",
                  pdfUrl: "/pdfs/captain-apfel-ausmalbild-v5.pdf",
                },
                {
                  imageUrl: "/images/powerzentrale-ausmalbild-v2-thumb.jpg",
                  pdfUrl: "/pdfs/powerzentrale-ausmalbild-v2.pdf",
                },
                {
                  imageUrl: "/images/kai-mutig-ausmalbild-thumb.jpg",
                  pdfUrl: "/pdfs/kai-mutig-ausmalbild.pdf",
                },
                {
                  imageUrl: "/images/crew-ausmalbild-thumb.png",
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
