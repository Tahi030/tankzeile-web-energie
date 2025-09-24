
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
      {/* Hero Section - Captain Apfel unter Subtitle */}
      <section className="bg-background section-padding-sm">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Main Headline */}
            <motion.h1 
              className="heading-xl mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Captain Apfel - auf gesunder Mission
            </motion.h1>
            
            {/* Hand-drawn line effect */}
            <div className="flex justify-center mb-5">
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
            
            {/* Subtitle */}
            <motion.h2 
              className="heading-md text-secondary mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Volle Obst- und Gemüsekraft voraus!
            </motion.h2>

            {/* Captain Apfel Image - Nach Subtitle */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -8, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.5 },
                scale: { duration: 0.8, delay: 0.5 },
                y: { 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1.5
                }
              }}
            >
              <img 
                src="/assets/captain-apfel-hero.png" 
                alt="Captain Apfel - Superheld für gesunde Ernährung" 
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vorstellung - nahtloser Übergang */}
      <section className="bg-background pt-0 pb-6">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm relative">
              <div className="max-w-4xl content-spacing">
                {/* Kleine Einleitung */}
                <p className="body-lg text-foreground">
                  Hallo, ich bin
                </p>
                
                {/* Captain Apfel - etwas größer */}
                <h2 className="heading-md text-foreground font-bold">
                  Captain Apfel
                </h2>
                
                {/* Erklärender Text */}
                <p className="body-lg text-foreground">
                  Mit meiner Crew bin ich unterwegs auf gesunder Mission.
                </p>
                
                {/* Haupttext */}
                <p className="body-lg text-foreground">
                  <strong>Berlin</strong> ist der Startpunkt unserer Reise. Von hier aus hebt das <strong>Tomatenraumschiff</strong> ab und landet direkt in Einrichtungen mit Kindern im Vorschul- und Grundschulalter.
                </p>
                
                {/* Schluss-Statement */}
                <div className="text-left pt-3 border-t border-primary/20">
                  <p className="body-lg text-foreground font-bold">
                    Denn gesunde Gewohnheiten geben uns Kraft, machen das Denken leichter und lassen uns rundum wohlfühlen.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CREW-Bereich - harmonische Übergänge */}
      <section className="section-padding-sm bg-background overflow-hidden pt-8">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-8 text-center text-white font-playfair">
              Lerne die Crew von Captain Apfel kennen!
            </h2>
          </motion.div>

          {/* 3x2 Grid Layout */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">
              
              {/* Reihe 1 */}
              
              {/* Captain Apfel */}
              <motion.div 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 10 }
                }}
              >
                <div className="relative mb-3 md:mb-4">
                  <img 
                    src="/lovable-uploads/captain-apfel.png" 
                    alt="Captain Apfel" 
                    className="image-crew drop-shadow-2xl"
                  />
                </div>
                <div className="relative px-2">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-primary font-kalam transform -rotate-1">
                    Captain Apfel
                  </h3>
                  {/* Pfeil Doodle */}
                  <svg className="absolute -right-4 -top-1 w-4 h-3 md:w-6 md:h-4 text-primary/60" viewBox="0 0 24 16">
                    <path d="M2,8 Q6,6 12,8 Q18,10 20,8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    <path d="M17,6 L20,8 L17,10" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
              </motion.div>

              {/* Kimmi Schlau */}
              <motion.div 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: -2,
                  transition: { type: "spring", stiffness: 300, damping: 10 }
                }}
              >
                <div className="relative mb-3 md:mb-4">
                  <img 
                    src="/lovable-uploads/kimmi-schlau.png" 
                    alt="Kimmi Schlau" 
                    className="image-crew drop-shadow-2xl"
                  />
                </div>
                <div className="relative px-2">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-secondary font-kalam transform rotate-1">
                    Kimmi Schlau
                  </h3>
                  {/* Stern Doodle */}
                  <svg className="absolute -left-4 -top-2 w-3 h-3 md:w-4 md:h-4 text-secondary/60" viewBox="0 0 16 16">
                    <path d="M8,1 L9,5 L13,5 L10,7 L11,11 L8,9 L5,11 L6,7 L3,5 L7,5 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                  </svg>
                  {/* Kreis Doodle */}
                  <svg className="absolute -right-2 top-3 w-2 h-2 md:w-3 md:h-3 text-secondary/40" viewBox="0 0 12 12">
                    <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="1,1"/>
                  </svg>
                </div>
              </motion.div>

              {/* Kai Mutig */}
              <motion.div 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { type: "spring", stiffness: 300, damping: 10 }
                }}
              >
                <div className="relative mb-3 md:mb-4">
                  <img 
                    src="/lovable-uploads/kai-mutig.png" 
                    alt="Kai Mutig" 
                    className="image-crew drop-shadow-2xl"
                  />
                </div>
                <div className="relative px-2">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-accent font-kalam transform -rotate-2">
                    Kai Mutig
                  </h3>
                  {/* Wellen Doodle */}
                  <svg className="absolute -left-3 top-3 w-4 h-2 md:w-6 md:h-3 text-accent/60" viewBox="0 0 24 12">
                    <path d="M2,6 Q6,3 12,6 Q18,9 22,6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
              </motion.div>

              {/* Reihe 2 */}
              
              {/* Tomatenraumschiff */}
              <motion.div 
                className="flex flex-col items-center text-center mt-4 md:mt-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -12,
                  rotate: -1,
                  transition: { type: "spring", stiffness: 400, damping: 8 }
                }}
              >
                <div className="relative mb-3 md:mb-4">
                  <img 
                    src="/lovable-uploads/tomatenraumschiff.png" 
                    alt="Tomatenraumschiff" 
                    className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="relative px-1">
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-primary/80 font-kalam transform rotate-1 leading-tight">
                    Tomatenraumschiff
                  </h3>
                  {/* Raketen-Striche Doodle */}
                  <svg className="absolute -right-4 top-1 w-3 h-4 md:w-4 md:h-5 text-primary/40" viewBox="0 0 16 20">
                    <path d="M2,2 L5,1 M2,5 L6,4 M2,8 L5,7 M2,11 L7,10" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    <path d="M10,13 L13,12 M10,16 L14,15 M10,19 L13,18" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                </div>
              </motion.div>

              {/* Powerzentrale */}
              <motion.div 
                className="flex flex-col items-center text-center mt-4 md:mt-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  y: -6,
                  transition: { type: "spring", stiffness: 350, damping: 12 }
                }}
              >
                <div className="relative mb-3 md:mb-4">
                  <img 
                    src="/lovable-uploads/powerzentrale.png" 
                    alt="Powerzentrale" 
                    className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="relative px-2">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-secondary font-kalam transform -rotate-1">
                    Powerzentrale
                  </h3>
                  {/* Energie-Blitze Doodle */}
                  <svg className="absolute -left-3 -top-1 w-3 h-4 md:w-4 md:h-5 text-secondary/60" viewBox="0 0 16 20">
                    <path d="M8,1 L6,6 L8,6 L7,9 L10,4 L8,4 L9,1 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                  </svg>
                  <svg className="absolute -right-2 top-2 w-2 h-3 md:w-3 md:h-4 text-secondary/40" viewBox="0 0 12 16">
                    <path d="M6,1 L5,4 L6,4 L5,6 L7,3 L6,3 L7,1 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
              </motion.div>

              {/* Paffel - Extra auffällig */}
              <motion.div 
                className="flex flex-col items-center text-center mt-4 md:mt-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  y: -10,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <div className="relative mb-3 md:mb-4">
                  <img 
                    src="/lovable-uploads/paffel.png" 
                    alt="Paffel" 
                    className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="relative px-2">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-accent/90 font-kalam transform rotate-3">
                    Paffel
                  </h3>
                  {/* Extra viele Kritzeleien für Paffel */}
                  {/* Zickzack */}
                  <svg className="absolute -left-4 -top-3 w-4 h-3 md:w-5 md:h-4 text-accent/50" viewBox="0 0 20 16">
                    <path d="M1,8 L5,3 L10,10 L15,5 L19,8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </svg>
                  {/* Wackelkreis */}
                  <svg className="absolute -right-3 -top-1 w-4 h-4 md:w-5 md:h-5 text-accent/50" viewBox="0 0 20 20">
                    <path d="M10,2 Q5,3 4,10 Q5,17 10,18 Q15,17 16,10 Q15,3 10,2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                  {/* Zusätzliche kleine Sterne */}
                  <svg className="absolute -left-2 top-4 w-2 h-2 md:w-3 md:h-3 text-accent/60" viewBox="0 0 12 12">
                    <path d="M6,1 L7,4 L10,4 L8,6 L9,9 L6,7 L3,9 L4,6 L2,4 L5,4 Z" stroke="currentColor" strokeWidth="0.5" fill="currentColor"/>
                  </svg>
                  <svg className="absolute -right-1 top-4 w-2 h-2 text-accent/60" viewBox="0 0 8 8">
                    <path d="M4,1 L5,3 L7,3 L5,4 L6,6 L4,5 L2,6 L3,4 L1,3 L3,3 Z" stroke="currentColor" strokeWidth="0.5" fill="currentColor"/>
                  </svg>
                  {/* Spirale */}
                  <svg className="absolute left-3 top-4 w-3 h-3 md:w-4 md:h-4 text-accent/50" viewBox="0 0 16 16">
                    <path d="M8,3 Q11,4 11,8 Q10,11 7,11 Q4,10 4,7 Q5,4 8,5" stroke="currentColor" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Angebote - kompakter */}
      <section className="section-padding-sm bg-background">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-center mb-4 text-white">
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
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img 
                    src="/assets/reise-zur-powerzentrale.jpg" 
                    alt="Reise zur Powerzentrale – Sternenhimmel mit Tacho und Tomatenraumschiff" 
                    className="w-full h-48 md:h-56 lg:h-64 object-cover"
                  />
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

      {/* Musik & Stimmung - kompakter */}
      <section className="section-padding-sm bg-background">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-4 text-white">
              <div className="countdown-numbers">
                <span className="countdown-number text-secondary">5</span>
                <span className="text-white/70">,</span>
                <span className="countdown-number text-primary">4</span>
                <span className="text-white/70">,</span>
                <span className="countdown-number text-secondary">3</span>
                <span className="text-white/70">,</span>
                <span className="countdown-number text-primary">2</span>
                <span className="text-white/70">,</span>
                <span className="countdown-number text-secondary">1</span>
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

      {/* Mission Buntstift - kompakter */}
      <section className="section-padding-sm bg-background">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-4 text-white">Mission Buntstift</h2>
            
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
            
            {/* Apple Logo unter Mission Buntstift */}
            <motion.div 
              className="flex justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img 
                src="/lovable-uploads/initiative-logo-homepage.png" 
                alt="Captain Apfel - Initiative für starke Entwicklung - Gesundheit, die Kindern schmeckt" 
                className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Index;
