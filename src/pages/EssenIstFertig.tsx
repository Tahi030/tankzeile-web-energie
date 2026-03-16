import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/essen-ist-fertig/ProductCard";

const rettungskofferLaktoseItems = [
  { label: "Kompakte Hilfe:", text: "63 Seiten Wissen für die Zeit direkt nach der Diagnose" },
  { label: "Sofort-Hilfe:", text: "Direkter Download in Sekunden, statt langes Warten auf einen Arzttermin" },
  { label: "Sicher einkaufen:", text: "Der praktische Spickzettel für die Hosentasche mit klaren Do's & Don'ts" },
  { label: "Entspannt abgeben:", text: "Fertige Info-Listen zur sicheren Übergabe an Kita, Schule oder Großeltern" },
  { label: "Kein Verzicht:", text: "10 blitzschnelle Snackideen & leckere, familienfreundliche Rezepte" },
  { label: "Stressfrei planen:", text: "Flexibler Wochenbaukasten inklusive alltagstauglichem Beispielplan" },
  { label: "Exklusives Expertenwissen:", text: "Fundierte Antworten und bewährte Praxis-Lösungen für die wichtigsten Fragen direkt nach der Diagnose" },
];

const rettungskofferFruktoseItems = [
  { label: "Kompakte Hilfe:", text: "63 Seiten Wissen (bei intestinaler Fruktosemalabsorption) für die Zeit direkt nach der Diagnose" },
  { label: "Sofort-Hilfe:", text: "Direkter Download in Sekunden, statt langes Warten auf einen Arzttermin" },
  { label: "Sicher einkaufen:", text: "Der praktische Spickzettel für die Hosentasche mit klaren Do's & Don'ts" },
  { label: "Entspannt abgeben:", text: "Fertige Info-Listen zur sicheren Übergabe an Kita, Schule oder Großeltern" },
  { label: "Kein Verzicht:", text: "10 blitzschnelle Snackideen & leckere, familienfreundliche Rezepte" },
  { label: "Stressfrei planen:", text: "Flexibler Wochenbaukasten inklusive alltagstauglichem Beispielplan" },
  { label: "Exklusives Expertenwissen:", text: "Fundierte Antworten und bewährte Praxis-Lösungen für die wichtigsten Fragen direkt nach der Diagnose" },
];

const kombiPaketItems = [
  { label: "Rettungskoffer Fruktose:", text: "Alle Spickzettel, Kita-Listen und fruktosefreien Rezepte" },
  { label: "Rettungskoffer Laktose:", text: "Der komplette Leitfaden für eine stressfreie laktosefreie Ernährung" },
  { label: "Preisvorteil:", text: "Du sparst fast 10 € im Vergleich zum Einzelkauf" },
];

const bauchCodeItems = [
  { label: "Wissen & Orientierung:", text: "38 Seiten zur Entschlüsselung des individuellen Stoffwechsels – mit oder ohne Diagnose einer Nahrungsmittelunverträglichkeit" },
  { label: "Bauch-Typen-Test:", text: "Finde heraus, welcher Stoffwechsel-Typ dein Kind ist" },
  { label: "Die 3 Stoffwechsel-Typen:", text: "Leicht verständliche Erklärungen, wie der Bauch deines Kindes wirklich tickt" },
  { label: "Die unsichtbaren Bauch-Stressoren:", text: "Warum es oft nicht nur am Essen liegt und wie du den inneren Motor durch Alltagsrituale beruhigst" },
  { label: "Extra-Tipp für Kita & Schule:", text: "Wie du den Speiseplan außer Haus ganz entspannt ausgleichst" },
  { label: "Die Kühlschrank-Retter:", text: "Deine 3 praktischen Spickzettel zum Ausdrucken für den Alltag (inkl. Notfall-Rezepten)" },
  { label: "Häufige Fragen:", text: "Klare Antworten auf die wichtigsten Eltern-Fragen rund um die Umsetzung" },
];

const EssenIstFertig = () => {
  const [openCard, setOpenCard] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenCard(prev => prev === id ? null : id);
  };

  useEffect(() => {
    document.title =
      "Essen ist fertig! – Alltagshilfen bei Nahrungsunverträglichkeiten – Captain Apfel & seine Crew";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Essen ist fertig! Alltagshilfen bei Nahrungsunverträglichkeiten - fundiertes Wissen, Vorlagen und Rezepte für den Familienalltag."
      );
    }
    document.body.classList.add("bg-background");
    return () => {
      document.body.classList.remove("bg-background");
    };
  }, []);

  return (
    <main className="min-h-screen bg-muted pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-foreground font-luckiest">
              Deine Begleiter für einen entspannten Kinderbauch
            </h1>

            <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed">
                Schluss mit endlosem Google-Chaos, ewigen Wartelisten und teuren Beratungen. Hol dir hier fundierte Soforthilfe und lerne, die Bauchgesundheit deines Kindes selbst zu verstehen.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto">
                <div className="flex flex-col items-center text-center gap-1">
                  <span className="text-[hsl(12_55%_50%)] text-2xl font-bold">✓</span>
                  <span className="font-semibold text-foreground">Klarheit & Verstehen</span>
                  <span className="text-sm">Zusammenhänge begreifen – ohne Fachchinesisch.</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                  <span className="text-[hsl(12_55%_50%)] text-2xl font-bold">✓</span>
                  <span className="font-semibold text-foreground">Sicher im Alltag</span>
                  <span className="text-sm">Listen für Kita, Schule & Betreuung – einfach ausdrucken und Sicherheit schaffen.</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                  <span className="text-[hsl(12_55%_50%)] text-2xl font-bold">✓</span>
                  <span className="font-semibold text-foreground">Sofort starten</span>
                  <span className="text-sm">Hilfe in Sekunden als E-Book-Download – ohne Wartezeit auf Termine.</span>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Gut zu wissen Hinweis */}
          <motion.div
            className="mb-12 md:mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-muted rounded-xl px-5 py-4 border border-border/50 space-y-2.5">
              <p className="text-sm font-semibold text-foreground">Gut zu wissen: Die Koffer sind nicht nur für Eltern!</p>
              <div className="space-y-1.5 text-sm text-muted-foreground leading-relaxed">
                <div className="flex items-start gap-2">
                  <span className="text-[hsl(12_55%_50%)] font-bold mt-0.5 shrink-0">✓</span>
                  <span><strong className="text-foreground">Für betroffene Erwachsene:</strong> Alltagstaugliche Rezepte und Spickzettel als „Ein Essen für alle"-Konzept (Nie wieder doppelt kochen!).</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[hsl(12_55%_50%)] font-bold mt-0.5 shrink-0">✓</span>
                  <span><strong className="text-foreground">Für Kitas & Schulen:</strong> Fertige Leitfäden und Listen für den sicheren Umgang mit betroffenen Kindern in der Einrichtung.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            <ProductCard
              image="/assets/rettungskoffer-laktose.png?v=2"
              imageAlt="Essen ist fertig! Rettungskoffer bei Laktoseintoleranz Cover"
              title="ESSEN IST FERTIG! DEIN RETTUNGSKOFFER BEI LAKTOSEINTOLERANZ"
              description="Klassisch & fundiert: Basierend auf der klassischen, modernen Ernährungslehre."
              accordionTitle="Das steckt drin"
              accordionItems={rettungskofferLaktoseItems}
              price="Einmalig 24,99 €"
              buttonText="Rettungskoffer sichern"
              buttonHref="https://copecart.com/products/054a7b1d/checkout"
              paymentNote="Die Bezahlung erfolgt sicher über meinen Partner Copecart. Du erhältst das E-Book (63 Seiten) und die Rechnung automatisch per E‑Mail."
              delay={0.3}
              isOpen={openCard === "laktose"}
              onToggle={() => handleToggle("laktose")}
            />

            <ProductCard
              image="/assets/rettungskoffer-fruktose-new.png"
              imageAlt="Essen ist fertig! Rettungskoffer bei Fruktoseintoleranz Cover"
              title="ESSEN IST FERTIG! DEIN RETTUNGSKOFFER BEI FRUKTOSEINTOLERANZ"
              description="Klassisch & fundiert: Basierend auf der klassischen, modernen Ernährungslehre."
              notice={
                <p className="text-xs text-muted-foreground text-center leading-relaxed italic whitespace-nowrap">
                  <span className="font-medium">Nicht geeignet bei hereditärer Fruktoseintoleranz / HFI</span>
                </p>
              }
              accordionTitle="Das steckt drin"
              accordionItems={rettungskofferFruktoseItems}
              price="Einmalig 24,99 €"
              buttonText="Rettungskoffer sichern"
              buttonHref="https://copecart.com/products/9f09326b/checkout"
              paymentNote="Die Bezahlung erfolgt sicher über meinen Partner Copecart. Du erhältst das E-Book (63 Seiten) und die Rechnung automatisch per E‑Mail."
              delay={0.4}
              isOpen={openCard === "fruktose"}
              onToggle={() => handleToggle("fruktose")}
            />

            <ProductCard
              image="/assets/rettungskoffer-bauch-code.png"
              imageAlt="Essen ist fertig! Der Bauch-Code Cover"
              title="ESSEN IST FERTIG! DEIN BASIS-KOFFER FÜR DIE SENSIBLE KINDERMITTE"
              description="Sonderformat: Eine TCM-inspirierte, ganzheitliche Ergänzung."
              accordionTitle="Das steckt drin"
              accordionItems={bauchCodeItems}
              price="Einmalig 14,99 €"
              buttonText="Basis-Koffer sichern"
              buttonHref="https://copecart.com/products/23d7dbf2/checkout"
              paymentNote="Die Bezahlung erfolgt sicher über meinen Partner Copecart. Du erhältst das E-Book und die Rechnung automatisch per E‑Mail."
              delay={0.5}
              isOpen={openCard === "bauchcode"}
              onToggle={() => handleToggle("bauchcode")}
            />
          </div>

          {/* Mini Preview Images */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {[
                { src: "/assets/vorschau-rezept.png", alt: "Rezept Ausschnitt", rotate: "rotate-1" },
                { src: "/assets/vorschau-wochenplaner.png", alt: "Wochenplaner Ausschnitt", rotate: "-rotate-1" },
                { src: "/assets/vorschau-tagebuch.png", alt: "Ernährungstagebuch Ausschnitt", rotate: "rotate-1" },
                { src: "/assets/vorschau-bauchposter.png", alt: "Bauchgefühl-Poster Ausschnitt", rotate: "-rotate-1" },
              ].map((img) => (
                <div key={img.alt} className={`transform ${img.rotate} hover:rotate-0 transition-transform duration-300`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover aspect-[4/3] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/30 bg-muted"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default EssenIstFertig;
