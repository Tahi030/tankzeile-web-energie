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
  { label: "Rettungskoffer Laktose:", text: "Der praktische Leitfaden für einen entspannteren Alltag mit laktosefreier Ernährung" },
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
  }, []);

  return (
    <main className="min-h-screen bg-muted">
      {/* Hero Section */}
      <section className="pt-8 pb-4 md:pt-12 md:pb-6">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground font-luckiest">
              Deine Begleiter für einen entspannten Kinderbauch
            </h1>
            <p className="text-lg text-muted-foreground">
              Schluss mit endlosem Google-Chaos, ewigen Wartelisten und teuren Beratungen. Hol dir hier fundierte Soforthilfe und lerne, die Bauchgesundheit deines Kindes selbst zu verstehen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto space-y-8">

            {/* Vorteile Card */}
            <motion.div
              className="bg-card/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg border border-border/30 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-16 translate-x-16" />
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "Klarheit & Verstehen", text: "Zusammenhänge begreifen – ohne Fachchinesisch." },
                    { title: "Sicher im Alltag", text: "Listen für Kita, Schule & Betreuung – ausdrucken und Sicherheit schaffen." },
                    { title: "Sofort starten", text: "Hilfe in Sekunden als E-Book-Download – ohne Wartezeit auf Termine." },
                  ].map((item) => (
                    <div key={item.title} className="text-center space-y-1">
                      <span className="text-[hsl(12_55%_50%)] text-2xl font-bold">✓</span>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-6">
                  {[
                    { title: "Für Erwachsene", text: "Alltagstaugliche Rezepte und Spickzettel als \u201EEin Essen für alle\u201C-Konzept." },
                    { title: "Für Kitas & Schulen", text: "Fertige Leitfäden und Listen für den sicheren Umgang mit betroffenen Kindern." },
                  ].map((item) => (
                    <div key={item.title} className="text-center space-y-1">
                      <span className="text-[hsl(12_55%_50%)] text-2xl font-bold">✓</span>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Product Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <ProductCard
                image="/assets/rettungskoffer-laktose.webp?v=2"
                imageAlt="Essen ist fertig! Rettungskoffer bei Laktoseintoleranz Cover"
                title="ESSEN IST FERTIG! DEIN RETTUNGSKOFFER BEI LAKTOSEINTOLERANZ"
                description="Klassisch & fundiert: Basierend auf der klassischen, modernen Ernährungslehre."
                accordionTitle="Das steckt drin"
                accordionItems={rettungskofferLaktoseItems}
                price="Einmalig 24,99 €"
                buttonText="Rettungskoffer sichern"
                buttonHref="https://copecart.com/products/705befb3/checkout"
                paymentNote="Die Bezahlung erfolgt sicher über meinen Partner Copecart. Du erhältst das E-Book (63 Seiten) und die Rechnung automatisch per E‑Mail."
                delay={0.3}
                isOpen={openCard === "laktose"}
                onToggle={() => handleToggle("laktose")}
              />

              <ProductCard
                image="/assets/rettungskoffer-fruktose-new.webp"
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
                buttonHref="https://copecart.com/products/7cd183e4/checkout"
                paymentNote="Die Bezahlung erfolgt sicher über meinen Partner Copecart. Du erhältst das E-Book (63 Seiten) und die Rechnung automatisch per E‑Mail."
                delay={0.4}
                isOpen={openCard === "fruktose"}
                onToggle={() => handleToggle("fruktose")}
              />

              <ProductCard
                image="/assets/rettungskoffer-bauch-code.webp"
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

              <ProductCard
                image="/assets/kombi-paket-bundle.webp"
                imageAlt="Essen ist fertig! Das große Kombi-Paket Fruktose und Laktose"
                title="ESSEN IST FERTIG! DAS GROSSE KOMBI-PAKET (FRUKTOSE & LAKTOSE)"
                description="Wenn Fruktose- und Laktoseintoleranz in der Familie zusammenkommen, wird das Kochen zur Herausforderung. Dieses Bundle vereint das wichtigste Wissen beider Rettungskoffer für entspanntere, gemeinsame Mahlzeiten."
                accordionTitle="Das steckt drin"
                accordionItems={kombiPaketItems}
                oldPrice="49,98 €"
                price="Einmalig 39,99 €"
                buttonText="Kombi-Paket sichern"
                buttonHref="https://copecart.com/products/5195bd24/checkout"
                paymentNote="Die Bezahlung erfolgt sicher über meinen Partner Copecart. Du erhältst die E-Books und die Rechnung automatisch per E‑Mail."
                delay={0.6}
                isOpen={openCard === "kombi"}
                onToggle={() => handleToggle("kombi")}
                premium
              />
            </div>

            {/* Mini Preview Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { src: "/assets/vorschau-rezept.webp", alt: "Rezept Ausschnitt", rotate: "rotate-1" },
                  { src: "/assets/vorschau-wochenplaner.webp", alt: "Wochenplaner Ausschnitt", rotate: "-rotate-1" },
                  { src: "/assets/vorschau-tagebuch.webp", alt: "Ernährungstagebuch Ausschnitt", rotate: "rotate-1" },
                  { src: "/assets/vorschau-bauchposter.webp", alt: "Bauchgefühl-Poster Ausschnitt", rotate: "-rotate-1" },
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
      </section>
    </main>
  );
};

export default EssenIstFertig;
