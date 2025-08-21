
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
              <div className="max-w-3xl space-y-4">
                {/* Kleine Einleitung */}
                <p className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide">
                  Hallo, ich bin
                </p>
                
                {/* Große Hauptzeile */}
                <h2 className="text-xl md:text-2xl font-black text-primary leading-none tracking-tight">
                  Captain Apfel
                </h2>
                
                {/* Kleiner erklärender Text */}
                <h3 className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Mit meiner Crew bin ich unterwegs auf gesunder Mission.
                </h3>
                
                {/* Große Blickfang-Zeile */}
                <h3 className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Berlin ist der Startpunkt <br className="hidden md:block" /> 
                  unserer Reise. Von hier aus hebt das Tomatenraumschiff ab und landet direkt in Einrichtungen mit Kindern im Vorschul- und Grundschulalter.
                </h3>
                
                {/* Starkes Schluss-Statement */}
                <div className="space-y-1 text-left">
                  <p className="text-xs md:text-sm text-primary font-medium tracking-wide">
                    Denn gesunde Gewohnheiten geben uns Kraft, machen das Denken leichter und lassen uns rundum wohlfühlen.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CREW-Bereich - Magazin-Stil */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
              Lerne die Crew kennen
            </h2>
            
            {/* Hand-drawn line effect */}
            <div className="flex justify-center mb-8">
              <svg width="150" height="12" viewBox="0 0 150 12" className="text-white">
                <path
                  d="M2,6 Q12,3 20,6 T40,5 Q55,8 70,6 T100,5 Q115,8 130,6 T148,6"
                  stroke="currentColor"
                  strokeWidth="2.5"
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
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-light">
              Ob schlau, mutig oder frech – hier erfährst du, wer dabei ist.
            </p>
          </motion.div>

          {/* Magazin-Layout mit handgezeichneten Pfeilen */}
          <div className="max-w-6xl mx-auto">
            
            {/* Erste Reihe - Captain Apfel mit Pfeil */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  {/* Handgezeichneter Pfeil */}
                  <div className="absolute -top-12 -right-4 md:-right-8">
                    <svg width="80" height="60" viewBox="0 0 80 60" className="text-primary opacity-70">
                      <path
                        d="M15,45 Q25,35 35,25 Q45,15 55,20"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ filter: 'url(#roughArrow1)' }}
                      />
                      <path
                        d="M50,15 L55,20 L50,25"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ filter: 'url(#roughArrow1)' }}
                      />
                      <defs>
                        <filter id="roughArrow1">
                          <feTurbulence baseFrequency="0.06" numOctaves="2" result="noise" seed="1" />
                          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  
                  <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-primary/20">
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center text-4xl mb-4">
                        🍎
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-2">Captain Apfel</h3>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <p className="text-white text-lg leading-relaxed">
                    <span className="text-primary font-semibold">Der Anführer:</span> Führt die Crew auf ihrer gesunden Mission durch den Körper und sorgt dafür, dass jedes Abenteuer erfolgreich wird!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Zweite Reihe - Kimmi Schlau mit Pfeil (gespiegelt) */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 md:order-1">
                  <p className="text-white text-lg leading-relaxed">
                    <span className="text-secondary font-semibold">Die Schlaue:</span> Kennt die besten Tipps für eine gesunde Powerzentrale und weiß, wie der Körper funktioniert!
                  </p>
                </div>
                
                <div className="relative md:order-2">
                  {/* Handgezeichneter Pfeil (links zeigend) */}
                  <div className="absolute -top-12 -left-4 md:-left-8">
                    <svg width="80" height="60" viewBox="0 0 80 60" className="text-secondary opacity-70">
                      <path
                        d="M65,45 Q55,35 45,25 Q35,15 25,20"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ filter: 'url(#roughArrow2)' }}
                      />
                      <path
                        d="M30,15 L25,20 L30,25"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ filter: 'url(#roughArrow2)' }}
                      />
                      <defs>
                        <filter id="roughArrow2">
                          <feTurbulence baseFrequency="0.06" numOctaves="2" result="noise" seed="2" />
                          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  
                  <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-secondary/20">
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 mx-auto bg-orange-100 rounded-full flex items-center justify-center text-4xl mb-4">
                        🧠
                      </div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">Kimmi Schlau</h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dritte Reihe - Kai Mutig mit Pfeil */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  {/* Handgezeichneter Pfeil (geschwungen) */}
                  <div className="absolute -top-16 -right-8">
                    <svg width="90" height="70" viewBox="0 0 90 70" className="text-accent opacity-70">
                      <path
                        d="M20,55 Q30,40 40,30 Q50,20 60,25 Q70,30 65,35"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ filter: 'url(#roughArrow3)' }}
                      />
                      <path
                        d="M60,30 L65,35 L60,40"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ filter: 'url(#roughArrow3)' }}
                      />
                      <defs>
                        <filter id="roughArrow3">
                          <feTurbulence baseFrequency="0.06" numOctaves="2" result="noise" seed="3" />
                          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  
                  <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-accent/20">
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center text-4xl mb-4">
                        💪
                      </div>
                      <h3 className="text-2xl font-bold text-accent mb-2">Kai Mutig</h3>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <p className="text-white text-lg leading-relaxed">
                    <span className="text-accent font-semibold">Der Mutige:</span> Bringt Stärke und zeigt, wie man mutig neue Sachen probiert – auch wenn sie erst ungewöhnlich schmecken!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Section - Spezielle Crew-Mitglieder */}
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Tomatenraumschiff */}
              <div className="relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <svg width="60" height="40" viewBox="0 0 60 40" className="text-primary opacity-60">
                    <path
                      d="M30,5 Q25,15 30,25"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ filter: 'url(#roughArrow4)' }}
                    />
                    <path
                      d="M25,20 L30,25 L35,20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ filter: 'url(#roughArrow4)' }}
                    />
                    <defs>
                      <filter id="roughArrow4">
                        <feTurbulence baseFrequency="0.06" numOctaves="2" result="noise" seed="4" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                
                <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 text-center">
                  <div className="w-16 h-16 mx-auto bg-red-200 rounded-full flex items-center justify-center text-2xl mb-3">
                    🚀
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">Tomatenraumschiff</h4>
                  <p className="text-sm text-muted-foreground">
                    Das Transportmittel für alle wichtigen Nährstoffe!
                  </p>
                </div>
              </div>

              {/* Paffel */}
              <div className="relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 rotate-12">
                  <svg width="60" height="40" viewBox="0 0 60 40" className="text-destructive opacity-60">
                    <path
                      d="M30,5 Q35,15 30,25"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ filter: 'url(#roughArrow5)' }}
                    />
                    <path
                      d="M25,20 L30,25 L35,20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ filter: 'url(#roughArrow5)' }}
                    />
                    <defs>
                      <filter id="roughArrow5">
                        <feTurbulence baseFrequency="0.06" numOctaves="2" result="noise" seed="5" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                
                <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-destructive/10 text-center">
                  <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center text-2xl mb-3">
                    😈
                  </div>
                  <h4 className="text-lg font-bold text-destructive mb-2">Paffel</h4>
                  <p className="text-sm text-muted-foreground">
                    Der Störenfried – aber die Crew weiß, wie man ihm standhält!
                  </p>
                </div>
              </div>

              {/* Die Powerzentrale */}
              <div className="relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 -rotate-12">
                  <svg width="60" height="40" viewBox="0 0 60 40" className="text-secondary opacity-60">
                    <path
                      d="M30,5 Q20,15 30,25"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ filter: 'url(#roughArrow6)' }}
                    />
                    <path
                      d="M25,20 L30,25 L35,20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ filter: 'url(#roughArrow6)' }}
                    />
                    <defs>
                      <filter id="roughArrow6">
                        <feTurbulence baseFrequency="0.06" numOctaves="2" result="noise" seed="6" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                
                <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-secondary/10 text-center">
                  <div className="w-16 h-16 mx-auto bg-green-200 rounded-full flex items-center justify-center text-2xl mb-3">
                    ⚡
                  </div>
                  <h4 className="text-lg font-bold text-secondary mb-2">Die Powerzentrale</h4>
                  <p className="text-sm text-muted-foreground">
                    Das Herzstück jeder Mission – hier wird alle Energie gesammelt!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-primary/20">
              <p className="text-xl text-white font-medium leading-relaxed">
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
