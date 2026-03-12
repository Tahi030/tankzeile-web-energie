import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EssenIstFertig = () => {
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

  const bulletItems = [
    { label: "Sofort-Hilfe:", text: "Download in Sekunden statt Warten auf Termine" },
    { label: "Sicher einkaufen:", text: "Spickzettel für die Hosentasche (Do's & Don'ts)" },
    { label: "Entspannt abgeben:", text: "Fertige Listen für Kita, Schule & Oma" },
    { label: "Kein Verzicht:", text: "10 schnelle Snackideen & familienfreundliche Rezepte" },
    { label: "Stressfrei planen:", text: "Wochenbaukasten mit Beispielplan" },
    { label: "Alles geklärt:", text: "Antworten auf die häufigsten Eltern-Fragen (FAQ)" },
  ];

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
                Schluss mit endlosem Google-Chaos, ewigen Wartelisten und teuren Beratungen. Hol dir hier fundierte Soforthilfe und lerne, die Bauchgesundheit deines Kindes endlich selbst zu verstehen.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto">
                <div className="flex flex-col items-center text-center gap-1">
                  <span className="text-[hsl(12_55%_50%)] text-2xl font-bold">✓</span>
                  <span className="font-semibold text-foreground">Klarheit & Verstehen</span>
                  <span className="text-sm">Endlich die Zusammenhänge begreifen – ohne Fachchinesisch.</span>
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

          {/* Product Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Laktose Card */}
            <motion.div
              className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 shadow-sm flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex flex-col flex-1 gap-5">
                <div className="text-center">
                  <img
                    src="/assets/rettungskoffer-laktose.png?v=2"
                    alt="Essen ist fertig! Rettungskoffer bei Laktoseintoleranz Cover"
                    loading="eager"
                    decoding="async"
                    width={256}
                    height={362}
                    className="w-full max-w-64 mx-auto rounded-lg shadow-lg bg-muted"
                  />
                </div>

                <h2 className="text-xl font-bold text-foreground text-center">
                  ESSEN IST FERTIG! DEIN RETTUNGSKOFFER BEI LAKTOSEINTOLERANZ
                </h2>

                <p className="text-muted-foreground text-center leading-relaxed text-sm">
                  Die Hilfe für dein Kind nach der Diagnose – 63 Seiten Wissen, Vorlagen & Rezepte.
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="details" className="border-border/30">
                    <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline">
                      Das steckt drin
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {bulletItems.map((item) => (
                          <li key={item.label} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span><strong>{item.label}</strong> {item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-auto bg-card/50 rounded-lg p-4 border border-border/30 text-center space-y-3">
                  <div className="text-xl font-bold text-foreground">Einmalig 24,99 €</div>
                  <motion.a
                    href="https://copecart.com/products/054a7b1d/checkout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[hsl(25_30%_88%)] hover:bg-[hsl(25_35%_82%)] text-[hsl(25_30%_25%)] px-4 py-2 rounded-lg transition-all duration-300 font-medium w-full text-sm shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Rettungskoffer sichern
                  </motion.a>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    Die Bezahlung erfolgt sicher über meinen Partner Copecart. Du erhältst das E-Book (63 Seiten) und die Rechnung automatisch per E‑Mail.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Fruktose Card */}
            <motion.div
              className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 shadow-sm flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex flex-col flex-1 gap-5">
                <div className="text-center">
                  <img
                    src="/assets/rettungskoffer-fruktose-new.png"
                    alt="Essen ist fertig! Rettungskoffer bei Fruktoseintoleranz Cover"
                    loading="eager"
                    decoding="async"
                    width={256}
                    height={362}
                    className="w-full max-w-64 mx-auto rounded-lg shadow-lg bg-muted"
                  />
                </div>

                <h2 className="text-xl font-bold text-foreground text-center">
                  ESSEN IST FERTIG! DEIN RETTUNGSKOFFER BEI FRUKTOSEINTOLERANZ
                </h2>

                <p className="text-muted-foreground text-center leading-relaxed text-sm">
                  Die Hilfe für dein Kind nach der Diagnose – 63 Seiten Wissen, Vorlagen & Rezepte.
                </p>

                <p className="text-xs text-muted-foreground text-center leading-relaxed italic">
                  Bei intestinaler Fruktosemalabsorption.<br />
                  <span className="font-medium">(Wichtig: Nicht geeignet bei hereditärer Fruktoseintoleranz / HFI)</span>
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="details" className="border-border/30">
                    <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline">
                      Das steckt drin
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {bulletItems.map((item) => (
                          <li key={item.label} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span><strong>{item.label}</strong> {item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-auto bg-card/50 rounded-lg p-4 border border-border/30 text-center space-y-3">
                  <div className="text-xl font-bold text-foreground">Einmalig 24,99 €</div>
                  <motion.a
                    href="https://copecart.com/products/9f09326b/checkout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[hsl(25_30%_88%)] hover:bg-[hsl(25_35%_82%)] text-[hsl(25_30%_25%)] px-4 py-2 rounded-lg transition-all duration-300 font-medium w-full text-sm shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Rettungskoffer sichern
                  </motion.a>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    Die Bezahlung erfolgt sicher über meinen Partner Copecart. Du erhältst das E-Book (63 Seiten) und die Rechnung automatisch per E‑Mail.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bauch-Code Card (NEU) */}
            <motion.div
              className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 shadow-sm flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex flex-col flex-1 gap-5">
                <div className="text-center">
                  <img
                    src="/assets/rettungskoffer-bauch-code.png"
                    alt="Essen ist fertig! Der Bauch-Code Cover"
                    loading="eager"
                    decoding="async"
                    width={256}
                    height={362}
                    className="w-full max-w-64 mx-auto rounded-lg shadow-lg bg-muted"
                  />
                </div>

                <h2 className="text-xl font-bold text-foreground text-center">
                  ESSEN IST FERTIG! DER BAUCH-CODE
                </h2>

                <p className="text-muted-foreground text-center leading-relaxed text-sm font-medium">
                  Dein Basis-Koffer für die sensible Kindermitte.
                </p>

                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  Egal, ob mit oder ohne Diagnose: Wie tickt der individuelle Stoffwechsel deines Kindes? Lerne die Zusammenhänge zu verstehen.
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="details" className="border-border/30">
                    <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline">
                      Das steckt drin (37 Seiten)
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span><strong>Bauch-Typen-Test:</strong> Finde heraus, welcher Stoffwechsel-Typ dein Kind ist</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span><strong>Stoffwechsel-Typen:</strong> Verständliche Erklärungen der einzelnen Typen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span><strong>Kühlschrankretter:</strong> Dein Spickzettel für den Alltag</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span><strong>Entzündungswissen:</strong> Was du über stille Entzündungen wissen solltest</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span><strong>Häufige Fragen:</strong> Antworten auf die wichtigsten Eltern-Fragen</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-auto bg-card/50 rounded-lg p-4 border border-border/30 text-center space-y-3">
                  <div className="text-xl font-bold text-foreground">Einmalig [DEIN PREIS] €</div>
                  <motion.a
                    href="#"
                    className="block bg-[hsl(25_30%_88%)] hover:bg-[hsl(25_35%_82%)] text-[hsl(25_30%_25%)] px-4 py-2 rounded-lg transition-all duration-300 font-medium w-full text-sm shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Basis-Koffer sichern
                  </motion.a>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    Die Bezahlung erfolgt sicher über meinen Partner Copecart. Du erhältst das E-Book und die Rechnung automatisch per E‑Mail.
                  </div>
                </div>
              </div>
            </motion.div>
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
