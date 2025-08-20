
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
      <section className="bg-primary py-16 md:py-24">
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
      <section className="py-16">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Captain Apfel ist nicht allein – gemeinsam mit Kimmi Schlau, Kai Mutig und dem Tomatenraumschiff geht er auf eine gesunde Mission. In der Powerzentrale im Bauch wird Energie gesammelt – während Paffel, der freche Saboteur, immer wieder versucht, Chaos zu stiften.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CREW-Bereich - Modern und luftig gestaltet */}
      <section className="py-20 modern-section">        
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Lerne die Crew kennen!
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
            
            <p className="text-xl md:text-2xl text-white/80">
              Jeder hat eine besondere Kraft – gemeinsam sind sie unschlagbar!
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Captain Apfel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="crew-card-red">
                <div className="bg-red-50 rounded-xl h-32 mb-6 flex items-center justify-center">
                  <p className="text-sm text-muted-foreground font-medium">Captain Apfel Illustration</p>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-foreground">Captain Apfel</h3>
                <p className="text-center text-sm text-muted-foreground leading-relaxed">
                  Captain Apfel führt die Crew auf ihrer gesunden Mission durch den Körper!
                </p>
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
                <div className="bg-orange-50 rounded-xl h-32 mb-6 flex items-center justify-center">
                  <p className="text-sm text-muted-foreground font-medium">Kimmi Schlau Illustration</p>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-foreground">Kimmi Schlau</h3>
                <p className="text-center text-sm text-muted-foreground leading-relaxed">
                  Kimmi Schlau kennt die besten Tipps für eine gesunde Powerzentrale!
                </p>
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
                <div className="bg-secondary/10 rounded-xl h-32 mb-6 flex items-center justify-center">
                  <p className="text-sm text-muted-foreground font-medium">Kai Mutig Illustration</p>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-foreground">Kai Mutig</h3>
                <p className="text-center text-sm text-muted-foreground leading-relaxed">
                  Kai Mutig bringt Stärke und zeigt, wie man mutig neue Sachen probiert!
                </p>
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
                <div className="bg-orange-100 rounded-xl h-32 mb-6 flex items-center justify-center">
                  <p className="text-sm text-muted-foreground font-medium">Tomatenraumschiff Illustration</p>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-foreground">Tomatenraumschiff</h3>
                <p className="text-center text-sm text-muted-foreground leading-relaxed">
                  Das Tomatenraumschiff fliegt zur Powerzentrale und bringt wichtige Nährstoffe!
                </p>
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
                <div className="bg-amber-50 rounded-xl h-32 mb-6 flex items-center justify-center">
                  <p className="text-sm text-muted-foreground font-medium">Paffel Illustration</p>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-foreground">Paffel</h3>
                <p className="text-center text-sm text-muted-foreground leading-relaxed">
                  Paffel will Chaos machen – aber die Crew zeigt, wie man ihm standhält!
                </p>
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
                <div className="bg-secondary/10 rounded-xl h-32 mb-6 flex items-center justify-center">
                  <p className="text-sm text-muted-foreground font-medium">Die Powerzentrale Illustration</p>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-foreground">Die Powerzentrale</h3>
                <p className="text-center text-sm text-muted-foreground leading-relaxed">
                  Hier wird die ganze Energie gesammelt und verteilt – das Herzstück jeder Mission!
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto border border-border shadow-sm">
              <p className="text-lg text-foreground font-medium">
                🌟 Zusammen machen sie jede Einrichtung zu einem Ort voller Energie, Spaß und gesunder Abenteuer! 🌟
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Angebote */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <motion.h2 
            className="section-title text-center mb-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Unsere Angebote
          </motion.h2>
          
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
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Box 1: Reise zur Powerzentrale */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="offer-box h-full">
                {/* Bild Platzhalter */}
                <div className="bg-secondary/10 rounded-xl h-48 mb-6 flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">Bild: Reise zur Powerzentrale</p>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Reise zur Powerzentrale</h3>
                <div className="bg-secondary/10 rounded-lg px-4 py-2 text-sm font-medium text-secondary w-fit mb-4">
                  Start: Ende 2025
                </div>
                <p className="text-base mb-8 text-muted-foreground leading-relaxed">
                  Mit Captain Apfel und seiner Crew erleben Kinder ein spannendes Abenteuer: Wie kommt Energie in den Körper, was macht uns stark und konzentriert, und wie bleibt die Powerzentrale hell und aktiv?
                </p>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground group">
                  <Link to="/meine-angebote/workshop-gesunde-mission">
                    Mehr erfahren
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Box 2: Lieblingsdose */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="offer-box h-full">
                {/* Bild Platzhalter */}
                <div className="bg-accent/20 rounded-xl h-48 mb-6 flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">Bild: Lieblingsdose</p>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Lieblingsdose</h3>
                <div className="bg-accent/20 rounded-lg px-4 py-2 text-sm font-medium text-accent-foreground w-fit mb-4">
                  Start: 2026
                </div>
                <p className="text-base mb-8 text-muted-foreground leading-relaxed">
                  Das Angebot ‚Lieblingsdose' bringt gesunde Ernährung direkt in den Alltag von Kitas, Schulen und Freizeiteinrichtungen. Gemeinsam mit Captain Apfel und seiner Crew entstehen bunte Brotdosen, die Kindern Spaß machen und Energie geben.
                </p>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground group">
                  <Link to="/meine-angebote/workshop-lieblingsdose">
                    Mehr erfahren
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Musik & Stimmung */}
      <section className="py-16 modern-section">
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
                <span className="countdown-number">5</span>
                <span className="text-white/70">,</span>
                <span className="countdown-number">4</span>
                <span className="text-white/70">,</span>
                <span className="countdown-number">3</span>
                <span className="text-white/70">,</span>
                <span className="countdown-number">2</span>
                <span className="text-white/70">,</span>
                <span className="countdown-number">1</span>
              </div>
              <div className="text-white mt-2">– Volle Schubkraft voraus!</div>
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
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              Bei Captain Apfel und seiner Crew gibt's Musik, gute Laune und jede Menge Bewegung.
            </p>
            
            {/* Bild/Illustration Platzhalter */}
            <div className="bg-card rounded-2xl p-12 max-w-md mx-auto border border-border shadow-sm">
              <div className="bg-secondary/10 rounded-xl p-8 text-center">
                <Play className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <p className="text-muted-foreground">Bild/Illustration: Musik & Bewegung</p>
              </div>
            </div>
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
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Download Box 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="offer-box text-center">
                  <div className="bg-red-500/10 rounded-xl h-32 mb-6 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/lovable-uploads/8d49addc-737c-4350-bea7-33d0730e81f1.png" 
                      alt="Captain Apfel Ausmalbild" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-secondary hover:bg-secondary-dark text-white p-2 rounded-md"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/lovable-uploads/8d49addc-737c-4350-bea7-33d0730e81f1.png';
                      link.download = 'captain-apfel.de1.png';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>

              {/* Download Box 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="offer-box text-center">
                  <div className="bg-green-500/10 rounded-xl h-32 mb-6 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/lovable-uploads/650cdcba-e091-48fc-932e-92c2ebac211d.png" 
                      alt="Obst und Gemüse Ausmalbild" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-secondary hover:bg-secondary-dark text-white p-2 rounded-md"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/lovable-uploads/650cdcba-e091-48fc-932e-92c2ebac211d.png';
                      link.download = 'captain-apfel.de2.png';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>

              {/* Download Box 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="sm:col-span-2 lg:col-span-1"
              >
                <div className="offer-box text-center">
                  <div className="bg-yellow-500/10 rounded-xl h-32 mb-6 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/lovable-uploads/5788fa5c-f001-4880-ade2-c940c4cd66ad.png" 
                      alt="Powerzentrale Ausmalbild" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-secondary hover:bg-secondary-dark text-white p-2 rounded-md"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/lovable-uploads/5788fa5c-f001-4880-ade2-c940c4cd66ad.png';
                      link.download = 'captain-apfel.de3.png';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* YouTube Video Footer */}
      <section className="py-16 modern-section">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-4 text-white">Das Captain-Apfel-Lied</h2>
            
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
                    filter: 'url(#roughPaper4)',
                  }}
                />
                <defs>
                  <filter id="roughPaper4">
                    <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="4" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                  </filter>
                </defs>
              </svg>
            </div>
            
            {/* YouTube Video Platzhalter */}
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <div className="aspect-video bg-secondary/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 mx-auto mb-4 text-secondary" />
                  <p className="text-lg font-medium text-foreground">YouTube-Video</p>
                  <p className="text-muted-foreground">Captain-Apfel-Lied</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
