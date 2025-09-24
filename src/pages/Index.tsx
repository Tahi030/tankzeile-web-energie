
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
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 lg:p-16 border border-border/50 shadow-sm relative">
              <div className="max-w-4xl space-y-6 lg:space-y-8">
                {/* Kleine Einleitung */}
                <p className="text-sm lg:text-base text-muted-foreground font-medium tracking-wide">
                  Hallo, ich bin
                </p>
                
                {/* Große Hauptzeile */}
                <h2 className="text-2xl lg:text-4xl font-black text-primary leading-none tracking-tight">
                  Captain Apfel
                </h2>
                
                {/* Kleiner erklärender Text */}
                <h3 className="text-base lg:text-xl text-muted-foreground leading-relaxed font-medium">
                  Mit meiner Crew bin ich unterwegs auf gesunder Mission.
                </h3>
                
                {/* Große Blickfang-Zeile */}
                <h3 className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Berlin ist der Startpunkt <br className="hidden md:block" /> 
                  unserer Reise. Von hier aus hebt das Tomatenraumschiff ab und landet direkt in Einrichtungen mit Kindern im Vorschul- und Grundschulalter.
                </h3>
                
                {/* Starkes Schluss-Statement */}
                <div className="space-y-2 text-left pt-4 border-t border-primary/20">
                  <p className="text-sm lg:text-base text-primary font-semibold tracking-wide leading-relaxed">
                    Denn gesunde Gewohnheiten geben uns Kraft, machen das Denken leichter und lassen uns rundum wohlfühlen.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CREW-Bereich - Freie Gruppenanordnung */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-playfair">
              Lerne die Crew von Captain Apfel kennen!
            </h2>
          </motion.div>

          {/* Freie Gruppenanordnung - wie eine echte Crew */}
          <div className="max-w-7xl mx-auto relative">
            <div className="flex flex-wrap justify-center items-end gap-4 md:gap-8 lg:gap-12">
              
              {/* Captain Apfel - Zentral/Leader Position */}
              <motion.div 
                className="flex flex-col items-center text-center mb-8 order-3 md:order-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 10 }
                }}
              >
                <div className="relative">
                  <img 
                    src="/lovable-uploads/captain-apfel.png" 
                    alt="Captain Apfel" 
                    className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-2xl hover:drop-shadow-[0_10px_20px_rgba(59,130,246,0.5)] transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-primary mt-4 drop-shadow-md font-fredoka">
                  Captain Apfel
                </h3>
              </motion.div>

              {/* Kimmi Schlau - Links vorne */}
              <motion.div 
                className="flex flex-col items-center text-center order-1 md:order-1"
                initial={{ opacity: 0, x: -50, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: -3,
                  transition: { type: "spring", stiffness: 300, damping: 10 }
                }}
              >
                <div className="relative">
                  <img 
                    src="/lovable-uploads/kimmi-schlau.png" 
                    alt="Kimmi Schlau" 
                    className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-2xl hover:drop-shadow-[0_10px_20px_rgba(249,115,22,0.5)] transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-black text-secondary mt-3 drop-shadow-md font-fredoka">
                  Kimmi Schlau
                </h3>
              </motion.div>

              {/* Kai Mutig - Rechts vorne */}
              <motion.div 
                className="flex flex-col items-center text-center order-2 md:order-3"
                initial={{ opacity: 0, x: 50, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 3,
                  transition: { type: "spring", stiffness: 300, damping: 10 }
                }}
              >
                <div className="relative">
                  <img 
                    src="/lovable-uploads/kai-mutig.png" 
                    alt="Kai Mutig" 
                    className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-2xl hover:drop-shadow-[0_10px_20px_rgba(34,197,94,0.5)] transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-black text-accent mt-3 drop-shadow-md font-fredoka">
                  Kai Mutig
                </h3>
              </motion.div>
            </div>

            {/* Zweite Reihe - weiter hinten */}
            <div className="flex flex-wrap justify-center items-start gap-8 md:gap-16 lg:gap-20 mt-8 md:mt-12">
              
              {/* Tomatenraumschiff - Links hinten */}
              <motion.div 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -12,
                  rotate: -2,
                  transition: { type: "spring", stiffness: 400, damping: 8 }
                }}
              >
                <div className="relative">
                  <img 
                    src="/lovable-uploads/tomatenraumschiff.png" 
                    alt="Tomatenraumschiff" 
                    className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain drop-shadow-xl hover:drop-shadow-[0_8px_16px_rgba(239,68,68,0.5)] transition-all duration-300"
                  />
                </div>
                <h3 className="text-base md:text-lg font-black text-red-500 mt-3 drop-shadow-md font-fredoka">
                  Tomatenraumschiff
                </h3>
              </motion.div>

              {/* Powerzentrale - Mitte hinten */}
              <motion.div 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  y: -6,
                  transition: { type: "spring", stiffness: 350, damping: 12 }
                }}
              >
                <div className="relative">
                  <img 
                    src="/lovable-uploads/powerzentrale.png" 
                    alt="Powerzentrale" 
                    className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain drop-shadow-xl hover:drop-shadow-[0_8px_16px_rgba(16,185,129,0.5)] transition-all duration-300"
                  />
                </div>
                <h3 className="text-base md:text-lg font-black text-emerald-500 mt-3 drop-shadow-md font-fredoka">
                  Powerzentrale
                </h3>
              </motion.div>

              {/* Paffel - Rechts hinten */}
              <motion.div 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08,
                  rotate: 5,
                  y: -10,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <div className="relative">
                  <img 
                    src="/lovable-uploads/paffel.png" 
                    alt="Paffel" 
                    className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain drop-shadow-xl hover:drop-shadow-[0_8px_16px_rgba(236,72,153,0.5)] transition-all duration-300"
                  />
                </div>
                <h3 className="text-base md:text-lg font-black text-pink-500 mt-3 drop-shadow-md font-fredoka">
                  Paffel
                </h3>
              </motion.div>
            </div>
          </div>
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
              Meine aktuellen Reisen
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
          
          <div className="max-w-3xl mx-auto">
            {/* Reise zur Powerzentrale */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                    Start: Frühjahr 2026
                  </div>
                  <p className="text-muted-foreground mb-4 flex-1 text-sm lg:text-base leading-relaxed">
                    Mit Captain Apfel erleben Kinder ein spannendes Abenteuer: Wie kommt Energie in den Körper, was macht uns stark und konzentriert – und wie bleibt die Powerzentrale hell und aktiv?
                  </p>
                  <p className="text-muted-foreground mb-6 text-sm lg:text-base leading-relaxed font-medium">
                    👉 Bald landet Captain Apfel auch in deiner Kita!
                  </p>
                  
                  <Link to="/kontakt">
                    <Button className="w-full bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-xl py-3 lg:py-4 text-base lg:text-lg">
                      Jetzt vormerken lassen
                      <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                    </Button>
                  </Link>
                  
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    Oder direkt per Mail: captain@apfel.de
                  </p>
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
