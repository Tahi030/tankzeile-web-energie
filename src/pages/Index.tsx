
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Download, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Captain Apfel & seine Crew – auf gesunder Mission";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Captain Apfel & seine Crew – auf gesunder Mission! Volle Obst- und Gemüsekraft voraus mit Kimmi Schlau, Kai Mutig und dem Tomatenraumschiff.');
    }
    
    // Apply background color to the body
    document.body.classList.add('bg-background');
    
    return () => {
      // Remove background color when component unmounts
      document.body.classList.remove('bg-background');
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Captain Apfel & seine Crew – auf gesunder Mission
            </motion.h1>
            
            {/* Hand-drawn line effect */}
            <div className="flex justify-center mb-6">
              <svg width="120" height="8" viewBox="0 0 120 8" className="text-white">
                <path
                  d="M2,4 Q8,2 15,4 T30,3 Q40,5 50,4 T70,3 Q80,5 90,4 T110,3 Q115,2 118,4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                  style={{
                    filter: 'url(#roughPaper0)',
                  }}
                />
                <defs>
                  <filter id="roughPaper0">
                    <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="0" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                  </filter>
                </defs>
              </svg>
            </div>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-medium mb-12 text-secondary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Volle Obst- und Gemüsekraft voraus!
            </motion.h2>

            {/* Logo Platzhalter */}
            <motion.div 
              className="bg-card rounded-2xl p-8 max-w-md mx-auto border border-border shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Powerzentrale</h3>
                <p className="text-muted-foreground text-sm">Apfel-Logo kommt hier hin</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vorstellung */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 shadow-sm relative">
              <div className="max-w-4xl space-y-8">
                {/* Kleine Einleitung */}
                <p className="text-base md:text-lg text-muted-foreground font-medium tracking-wide">
                  Hallo, ich bin
                </p>
                
                {/* Große Hauptzeile */}
                <h2 className="text-5xl md:text-7xl font-black text-primary leading-none tracking-tight">
                  Captain Apfel
                </h2>
                
                {/* Kleiner erklärender Text */}
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Mit meiner Crew bin ich unterwegs auf gesunder Mission.
                </p>
                
                {/* Große Blickfang-Zeile */}
                <h3 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Berlin ist der Startpunkt<br className="hidden md:block" /> 
                  unserer Reise.
                </h3>
                
                {/* Kleiner erklärender Text */}
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  Von hier aus hebt das Tomatenraumschiff ab und landet direkt in Einrichtungen mit Kindern im Vorschul- und Grundschulalter.
                </p>
                
                {/* Starkes Schluss-Statement */}
                <div className="space-y-2">
                  <h4 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                    Denn gesunde Gewohnheiten geben uns Kraft,
                  </h4>
                  <h4 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                    machen das Denken leichter
                  </h4>
                  <h4 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                    und lassen uns rundum wohlfühlen.
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CREW-Bereich - Kompakt und dezent */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Lerne die Crew kennen
            </h2>
            
            {/* Hand-drawn line effect */}
            <div className="flex justify-center mb-6">
              <svg width="120" height="8" viewBox="0 0 120 8" className="text-white">
                <path
                  d="M2,4 Q8,2 15,4 T30,3 Q40,5 50,4 T70,3 Q80,5 90,4 T110,3 Q115,2 118,4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                  style={{
                    filter: 'url(#roughPaperCrew)',
                  }}
                />
                <defs>
                  <filter id="roughPaperCrew">
                    <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="5" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                  </filter>
                </defs>
              </svg>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 mb-12">
              Ob schlau, mutig oder frech – hier erfährst du, wer dabei ist.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {/* Captain Apfel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="crew-card-red">
                <div className="polaroid-photo">
                  <div className="w-full h-full bg-red-100 rounded flex items-center justify-center">
                    <span className="text-2xl">🍎</span>
                  </div>
                  <div className="polaroid-name">Captain Apfel</div>
                </div>
                <div className="text-center px-2">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Führt die Crew auf ihrer gesunden Mission durch den Körper!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Kimmi Schlau */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="crew-card-orange">
                <div className="polaroid-photo">
                  <div className="w-full h-full bg-orange-100 rounded flex items-center justify-center">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div className="polaroid-name">Kimmi Schlau</div>
                </div>
                <div className="text-center px-2">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Kennt die besten Tipps für eine gesunde Powerzentrale!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Kai Mutig */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="crew-card-green">
                <div className="polaroid-photo">
                  <div className="w-full h-full bg-green-100 rounded flex items-center justify-center">
                    <span className="text-2xl">💪</span>
                  </div>
                  <div className="polaroid-name">Kai Mutig</div>
                </div>
                <div className="text-center px-2">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Bringt Stärke und zeigt, wie man mutig neue Sachen probiert!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tomatenraumschiff */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="crew-card-terracotta">
                <div className="polaroid-photo">
                  <div className="w-full h-full bg-red-200 rounded flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="polaroid-name">Tomatenraumschiff</div>
                </div>
                <div className="text-center px-2">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Fliegt zur Powerzentrale und bringt wichtige Nährstoffe!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Paffel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="crew-card-sand">
                <div className="polaroid-photo">
                  <div className="w-full h-full bg-yellow-100 rounded flex items-center justify-center">
                    <span className="text-2xl">😈</span>
                  </div>
                  <div className="polaroid-name">Paffel</div>
                </div>
                <div className="text-center px-2">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Will Chaos machen – aber die Crew zeigt, wie man ihm standhält!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Die Powerzentrale */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="crew-card-green">
                <div className="polaroid-photo">
                  <div className="w-full h-full bg-green-200 rounded flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div className="polaroid-name">Die Powerzentrale</div>
                </div>
                <div className="text-center px-2">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Hier wird die ganze Energie gesammelt und verteilt – das Herzstück jeder Mission!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-box max-w-2xl mx-auto">
              <p className="text-base text-foreground font-medium">
                🌟 Zusammen machen sie jede Einrichtung zu einem Ort voller Energie, Spaß und gesunder Abenteuer! 🌟
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Angebote */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center mb-4 text-white">
              Unsere Angebote
            </h2>
            
            {/* Hand-drawn line effect */}
            <div className="flex justify-center mb-12">
              <svg width="120" height="8" viewBox="0 0 120 8" className="text-white">
                <path
                  d="M2,4 Q8,2 15,4 T30,3 Q40,5 50,4 T70,3 Q80,5 90,4 T110,3 Q115,2 118,4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                  style={{
                    filter: 'url(#roughPaper1)',
                  }}
                />
                <defs>
                  <filter id="roughPaper1">
                    <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="1" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                  </filter>
                </defs>
              </svg>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Box 1: Reise zur Powerzentrale */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="offer-box h-full flex flex-col">
                <div className="bg-secondary/10 rounded-xl h-32 lg:h-40 mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl mb-2">🍎</div>
                    <p className="text-sm lg:text-base text-muted-foreground">Reise zur Powerzentrale</p>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-foreground">Reise zur Powerzentrale</h3>
                  <div className="bg-secondary/10 rounded-lg px-3 py-2 text-xs lg:text-sm font-medium text-secondary w-fit mb-4">
                    Start: Ende 2025
                  </div>
                  <p className="text-muted-foreground mb-6 flex-1 text-sm lg:text-base leading-relaxed">
                    Mit Captain Apfel und seiner Crew erleben Kinder ein spannendes Abenteuer: Wie kommt Energie in den Körper, was macht uns stark und konzentriert, und wie bleibt die Powerzentrale hell und aktiv?
                  </p>
                  
                  <Link to="/meine-angebote/workshop-gesunde-mission">
                    <Button className="w-full bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-xl py-3 lg:py-4 text-base lg:text-lg">
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Box 2: Lieblingsdose */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="offer-box h-full flex flex-col">
                <div className="bg-accent/20 rounded-xl h-32 lg:h-40 mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl mb-2">📦</div>
                    <p className="text-sm lg:text-base text-muted-foreground">Lieblingsdose</p>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-foreground">Lieblingsdose</h3>
                  <div className="bg-accent/20 rounded-lg px-3 py-2 text-xs lg:text-sm font-medium text-accent-foreground w-fit mb-4">
                    Start: 2026
                  </div>
                  <p className="text-muted-foreground mb-6 flex-1 text-sm lg:text-base leading-relaxed">
                    Das Angebot ‚Lieblingsdose' bringt gesunde Ernährung direkt in den Alltag von Kitas, Schulen und Freizeiteinrichtungen. Gemeinsam mit Captain Apfel und seiner Crew entstehen bunte Brotdosen, die Kindern Spaß machen und Energie geben.
                  </p>
                  
                  <Link to="/meine-angebote/workshop-lieblingsdose">
                    <Button className="w-full bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-xl py-3 lg:py-4 text-base lg:text-lg">
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Musik & Stimmung */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-4 text-white">
              <div className="countdown-numbers">
                <span className="countdown-number text-blue-500">5</span>
                <span className="text-white/70">,</span>
                <span className="countdown-number text-[hsl(var(--blackberry))]">4</span>
                <span className="text-white/70">,</span>
                <span className="countdown-number text-green-500">3</span>
                <span className="text-white/70">,</span>
                <span className="countdown-number text-yellow-500">2</span>
                <span className="text-white/70">,</span>
                <span className="countdown-number text-orange-500">1</span>
              </div>
              <div className="text-white mt-2">– Volle Obst- und Gemüsekraft voraus!</div>
            </h2>
            
            {/* Hand-drawn line effect */}
            <div className="flex justify-center mb-8">
              <svg width="120" height="8" viewBox="0 0 120 8" className="text-white">
                <path
                  d="M2,4 Q8,2 15,4 T30,3 Q40,5 50,4 T70,3 Q80,5 90,4 T110,3 Q115,2 118,4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                  style={{
                    filter: 'url(#roughPaper2)',
                  }}
                />
                <defs>
                  <filter id="roughPaper2">
                    <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="2" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                  </filter>
                </defs>
              </svg>
            </div>
            <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed">
              Unser Mitmach-Lied zum Tanzen, Singen und Spaß haben. Beweg dich mit Captain Apfel & seiner Crew.
            </p>
            
            {/* Bild/Illustration Platzhalter */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 max-w-md mx-auto border border-white/30 shadow-sm mb-6">
              <div className="bg-secondary/10 rounded-xl p-8 text-center">
                <Play className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <p className="text-muted-foreground">Video: Captain-Apfel-Lied</p>
              </div>
            </div>

            {/* PDF Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button 
                className="bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-xl flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  // Platzhalter für PDF-Download
                  const link = document.createElement('a');
                  link.href = '#'; // Hier wird später die PDF-Datei verlinkt
                  link.download = 'captain-apfel-bewegungen.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="h-5 w-5" />
                Tanz mit! Anleitung herunterladen
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Download-Bereich */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-4 text-white">Mission Buntstift</h2>
            
            {/* Hand-drawn line effect */}
            <div className="flex justify-center mb-6">
              <svg width="120" height="8" viewBox="0 0 120 8" className="text-white">
                <path
                  d="M2,4 Q8,2 15,4 T30,3 Q40,5 50,4 T70,3 Q80,5 90,4 T110,3 Q115,2 118,4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                  style={{
                    filter: 'url(#roughPaper3)',
                  }}
                />
                <defs>
                  <filter id="roughPaper3">
                    <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="3" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                  </filter>
                </defs>
              </svg>
            </div>
            <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed">
              Jetzt bist du dran: Stifte raus und los!
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
              {/* Download Box 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="offer-box text-center h-full flex flex-col p-3">
                  <div className="bg-red-500/10 rounded-lg flex-1 mb-3 flex items-center justify-center overflow-hidden min-h-[60px]">
                    <img 
                      src="/lovable-uploads/8d49addc-737c-4350-bea7-33d0730e81f1.png" 
                      alt="Captain Apfel Ausmalbild" 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button 
                      size="sm" 
                      className="bg-secondary hover:bg-secondary-dark text-white px-2 py-1 rounded-md flex items-center gap-1 text-xs"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/lovable-uploads/8d49addc-737c-4350-bea7-33d0730e81f1.png';
                        link.download = 'captain-apfel.de1.png';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Download className="h-3 w-3" />
                      Download
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Download Box 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="offer-box text-center h-full flex flex-col p-3">
                  <div className="bg-green-500/10 rounded-lg flex-1 mb-3 flex items-center justify-center overflow-hidden min-h-[60px]">
                    <img 
                      src="/lovable-uploads/650cdcba-e091-48fc-932e-92c2ebac211d.png" 
                      alt="Obst und Gemüse Ausmalbild" 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button 
                      size="sm" 
                      className="bg-secondary hover:bg-secondary-dark text-white px-2 py-1 rounded-md flex items-center gap-1 text-xs"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/lovable-uploads/650cdcba-e091-48fc-932e-92c2ebac211d.png';
                        link.download = 'captain-apfel.de2.png';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Download className="h-3 w-3" />
                      Download
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Download Box 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="offer-box text-center h-full flex flex-col p-3">
                  <div className="bg-yellow-500/10 rounded-lg flex-1 mb-3 flex items-center justify-center overflow-hidden min-h-[60px]">
                    <img 
                      src="/lovable-uploads/5788fa5c-f001-4880-ade2-c940c4cd66ad.png" 
                      alt="Powerzentrale Ausmalbild" 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button 
                      size="sm" 
                      className="bg-secondary hover:bg-secondary-dark text-white px-2 py-1 rounded-md flex items-center gap-1 text-xs"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/lovable-uploads/5788fa5c-f001-4880-ade2-c940c4cd66ad.png';
                        link.download = 'captain-apfel.de3.png';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Download className="h-3 w-3" />
                      Download
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Index;
