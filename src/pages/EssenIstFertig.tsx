import { useEffect } from "react";
import { motion } from "framer-motion";

const EssenIstFertig = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Essen ist fertig! – Alltagshilfen bei Nahrungsunverträglichkeiten – Captain Apfel & seine Crew";

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Essen ist fertig! Alltagshilfen bei Nahrungsunverträglichkeiten - fundiertes Wissen, Vorlagen und Rezepte für den Familienalltag.",
      );
    }

    // Apply background color to the body
    document.body.classList.add("bg-background");

    return () => {
      // Remove background color when component unmounts
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
            <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-3 text-foreground font-luckiest">
              DAMIT ALLE MITESSEN
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              Praktische Alltagshilfen für Eltern, Kitas & Schulen.
            </p>

            <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed">
                Bei deinem Kind wurde eine Laktoseintoleranz, Fruktose- oder Glutenunverträglichkeit diagnostiziert? Das
                kann erstmal überwätigend sein. <strong className="text-foreground">Essen ist fertig!</strong> bietet
                dir sofortige Entlastung: fundiertes Wissen, einfache Vorlagen und alltagstaugliche Rezepte – ohne lange
                Wartezeiten auf teure Beratungstermine.
              </p>
              <p className="text-lg leading-relaxed">
                Mit diesen digitalen Soforthilfe-Paketen findest du dich direkt im Alltag zurecht – ob beim Einkauf, am
                Familientisch oder wenn dein Kind in der Schule und Kita isst. Denn jedes Kind verdient es, Essen als
                etwas Schönes und Unbeschwertes zu erleben.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto">
                <div className="flex flex-col items-center text-center gap-1">
                  <span className="text-primary text-2xl font-bold">✓</span>
                  <span className="font-semibold text-foreground">Sofort loslegen</span>
                  <span className="text-sm">Kein Warten auf Termine</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                  <span className="text-primary text-2xl font-bold">✓</span>
                  <span className="font-semibold text-foreground">Kein Verzicht</span>
                  <span className="text-sm">Leckere Familienrezepte</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                  <span className="text-primary text-2xl font-bold">✓</span>
                  <span className="font-semibold text-foreground">Sicher einkaufen</span>
                  <span className="text-sm">Nie wieder ratlos</span>
                </div>
              </div>

              <p className="text-foreground font-medium mt-6 text-lg">
                Wähle unten einfach das Alltagspaket, das zu der Diagnose deines Kindes passt.
              </p>
            </div>
          </motion.div>

          {/* Product Boxes - Three Equal Boxes */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Laktoseintoleranz Box */}
            <motion.div
              className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="space-y-6">
                {/* Cover Image */}
                <div className="text-center">
                  <img
                    src="/assets/essen-ist-fertig-laktose.jpg"
                    alt="Essen ist fertig! bei Laktoseintoleranz Cover"
                    className="w-full max-w-64 mx-auto rounded-lg shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground text-center">
                    ESSEN IST FERTIG! DEIN ALLTAGSPAKET BEI LAKTOSEINTOLERANZ
                  </h2>

                  <p className="text-muted-foreground text-center leading-relaxed">
                    Die kompakte Hilfe nach der Diagnose – übersichtlich, praxisnah und sofort nutzbar.
                  </p>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Grundlagen einfach erklärt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>59 Seiten klar aufbereitetes Wissen, Vorlagen & Rezepte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Do's & Don'ts für Einkauf & Ernährung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Vorlage für Kita & Schule</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>10 schnelle Snackideen & Rezepte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Wochenbaukasten mit Beispielplan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Umfangreicher FAQ-Teil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Vorlage Ernährungstagebuch</span>
                    </li>
                  </ul>
                </div>

                {/* Purchase Section */}
                <div className="bg-card/50 rounded-lg p-4 border border-border/30 text-center space-y-3">
                  <div className="text-xl font-bold text-foreground">Einmalig 24,99 €</div>

                  <motion.a
                    href="https://copecart.com/products/054a7b1d/checkout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[hsl(25_30%_88%)] hover:bg-[hsl(25_35%_82%)] text-[hsl(25_30%_25%)] px-4 py-2 rounded-lg transition-all duration-300 font-medium w-full text-sm shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Soforthilfe-Paket sichern
                  </motion.a>

                  <div className="text-xs text-muted-foreground leading-relaxed">
                    Die Bezahlung erfolgt sicher über meinen Partner Copecart. Du erhältst das PDF-Paket (59 Seiten) und
                    die Rechnung automatisch per E‑Mail.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Fruktoseintoleranz Box */}
            <motion.div
              className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-6">
                {/* Cover Image */}
                <div className="text-center">
                  <img
                    src="/assets/essen-ist-fertig-fruktose.jpg"
                    alt="Essen ist fertig! bei Fruktoseintoleranz Cover"
                    className="w-full max-w-64 mx-auto rounded-lg shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground text-center">
                    ESSEN IST FERTIG! DEIN ALLTAGSPAKET BEI FRUKTOSEINTOLERANZ
                  </h2>

                  <p className="text-muted-foreground text-center leading-relaxed">
                    Die kompakte Hilfe nach der Diagnose – übersichtlich, praxisnah und sofort nutzbar.
                  </p>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Grundlagen einfach erklärt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>59 Seiten klar aufbereitetes Wissen, Vorlagen & Rezepte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Do's & Don'ts für Einkauf & Ernährung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Vorlage für Kita & Schule</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>10 schnelle Snackideen & Rezepte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Wochenbaukasten mit Beispielplan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Umfangreicher FAQ-Teil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Vorlage Ernährungstagebuch</span>
                    </li>
                  </ul>
                </div>

                {/* Purchase Section */}
                <div className="bg-card/50 rounded-lg p-4 border border-border/30 text-center space-y-3">
                  <div className="text-xl font-bold text-foreground">Einmalig 24,99 €</div>

                  <motion.a
                    href="https://copecart.com/products/9f09326b/checkout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[hsl(25_30%_88%)] hover:bg-[hsl(25_35%_82%)] text-[hsl(25_30%_25%)] px-4 py-2 rounded-lg transition-all duration-300 font-medium w-full text-sm shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Soforthilfe-Paket sichern
                  </motion.a>

                  <div className="text-xs text-muted-foreground leading-relaxed">
                    Die Bezahlung erfolgt sicher über meinen Partner Copecart. Du erhältst das PDF-Paket (59 Seiten) und
                    die Rechnung automatisch per E‑Mail.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Glutenunverträglichkeit Box */}
            <motion.div
              className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="space-y-6">
                {/* Cover Image */}
                <div className="text-center">
                  <img
                    src="/assets/essen-ist-fertig-gluten.jpg"
                    alt="Essen ist fertig! bei Glutenunverträglichkeit Cover"
                    className="w-full max-w-64 mx-auto rounded-lg shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground text-center">
                    ESSEN IST FERTIG! DEIN ALLTAGSPAKET BEI GLUTENUNVERTRÄGLICHKEIT
                  </h2>

                  <p className="text-muted-foreground text-center leading-relaxed">
                    Die kompakte Hilfe nach der Diagnose – übersichtlich, praxisnah und sofort nutzbar.
                  </p>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Grundlagen einfach erklärt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>59 Seiten klar aufbereitetes Wissen, Vorlagen & Rezepte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Do's & Don'ts für Einkauf & Ernährung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Vorlage für Kita & Schule</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>10 schnelle Snackideen & Rezepte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Wochenbaukasten mit Beispielplan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Umfangreicher FAQ-Teil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Vorlage Ernährungstagebuch</span>
                    </li>
                  </ul>
                </div>

                {/* Purchase Section */}
                <div className="bg-card/50 rounded-lg p-4 border border-border/30 text-center space-y-3">
                  <div className="text-xl font-bold text-foreground">Einmalig 24,99 €</div>

                  <div className="block bg-muted text-muted-foreground px-4 py-2 rounded-lg font-medium w-full text-sm cursor-not-allowed">
                    Bald verfügbar
                  </div>

                  <div className="text-xs text-muted-foreground leading-relaxed">
                    Die Bezahlung erfolgt sicher über meinen Partner Copecart. Du erhältst das PDF-Paket (59 Seiten) und
                    die Rechnung automatisch per E‑Mail.
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
            <div className="flex justify-center items-center gap-8 max-w-4xl mx-auto">
              <div className="transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/assets/rezept-ausschnitt.jpg"
                  alt="Rezept Ausschnitt"
                  className="w-48 h-auto object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/30"
                />
              </div>
              <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/assets/wochenplaner-ausschnitt.jpg"
                  alt="Wochenplaner Ausschnitt"
                  className="w-48 h-auto object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/30"
                />
              </div>
              <div className="transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/assets/ernaehrungstagebuch-ausschnitt.jpg"
                  alt="Ernährungstagebuch Ausschnitt"
                  className="w-48 h-auto object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/30"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default EssenIstFertig;
