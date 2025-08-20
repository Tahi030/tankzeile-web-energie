
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
    document.body.classList.add('bg-muted');
    
    return () => {
      // Remove background color when component unmounts
      document.body.classList.remove('bg-muted');
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary to-primary-light py-16 md:py-24 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Captain Apfel & seine Crew - auf gesunder Mission
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-medium mb-8 text-secondary drop-shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Volle Obst- und Gemüsekraft voraus!
            </motion.h2>

            {/* Logo Platzhalter */}
            <motion.div 
              className="bg-white/20 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto border border-white/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-white/40 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Powerzentrale</h3>
                <p className="text-white/80 text-sm">Apfel-Logo kommt hier hin</p>
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

      {/* CREW-Bereich - Besonders auffällig gestaltet */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
        {/* Dekorative Elemente */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Lerne die Crew kennen!
            </h2>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
              Jeder hat eine besondere Kraft – gemeinsam sind sie unschlagbar!
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Kimmi Schlau */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="hover-scale"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-4 border-yellow-300 hover:border-yellow-400 transition-all duration-300 hover:shadow-yellow-400/20">
                <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-xl h-32 mb-4 flex items-center justify-center border-2 border-yellow-400">
                  <p className="text-sm text-yellow-700 font-medium">Kimmi Schlau</p>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-primary">Kimmi Schlau</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Kimmi Schlau kennt die besten Tipps für eine gesunde Powerzentrale!
                </p>
              </div>
            </motion.div>

            {/* Kai Mutig */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="hover-scale"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-4 border-green-400 hover:border-green-500 transition-all duration-300 hover:shadow-green-400/20">
                <div className="bg-gradient-to-br from-green-200 to-emerald-200 rounded-xl h-32 mb-4 flex items-center justify-center border-2 border-green-400">
                  <p className="text-sm text-green-700 font-medium">Kai Mutig</p>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-primary">Kai Mutig</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Kai Mutig bringt Stärke und zeigt, wie man mutig neue Sachen probiert!
                </p>
              </div>
            </motion.div>

            {/* Tomatenraumschiff */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="hover-scale"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-4 border-red-400 hover:border-red-500 transition-all duration-300 hover:shadow-red-400/20">
                <div className="bg-gradient-to-br from-red-200 to-pink-200 rounded-xl h-32 mb-4 flex items-center justify-center border-2 border-red-400">
                  <p className="text-sm text-red-700 font-medium">Tomatenraumschiff</p>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-primary">Tomatenraumschiff</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Das Tomatenraumschiff fliegt zur Powerzentrale und bringt wichtige Nährstoffe!
                </p>
              </div>
            </motion.div>

            {/* Paffel */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="hover-scale"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-4 border-purple-400 hover:border-purple-500 transition-all duration-300 hover:shadow-purple-400/20">
                <div className="bg-gradient-to-br from-purple-200 to-violet-200 rounded-xl h-32 mb-4 flex items-center justify-center border-2 border-purple-400">
                  <p className="text-sm text-purple-700 font-medium">Paffel</p>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-primary">Paffel</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Paffel will Chaos machen – aber die Crew zeigt, wie man ihm standhält!
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/30">
              <p className="text-xl text-white font-medium">
                🌟 Zusammen machen sie jede Einrichtung zu einem Ort voller Energie, Spaß und gesunder Abenteuer! 🌟
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Angebote */}
      <section className="py-16 bg-white/50">
        <div className="container-custom">
          <motion.h2 
            className="section-title text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Unsere Angebote
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Box 1: Reise zur Powerzentrale */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  {/* Bild Platzhalter */}
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Bild: Reise zur Powerzentrale</p>
                  </div>
                  <CardTitle className="text-xl">Reise zur Powerzentrale</CardTitle>
                  <div className="bg-accent/20 rounded-md px-3 py-1 text-sm font-medium text-accent-foreground w-fit">
                    Start: Ende 2025
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    Mit Captain Apfel und seiner Crew erleben Kinder ein spannendes Abenteuer: Wie kommt Energie in den Körper, was macht uns stark und konzentriert, und wie bleibt die Powerzentrale hell und aktiv?
                  </CardDescription>
                  <Button asChild className="w-full group">
                    <Link to="/meine-angebote/workshop-gesunde-mission">
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Box 2: Lieblingsdose */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  {/* Bild Platzhalter */}
                  <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Bild: Lieblingsdose</p>
                  </div>
                  <CardTitle className="text-xl">Lieblingsdose</CardTitle>
                  <div className="bg-accent/20 rounded-md px-3 py-1 text-sm font-medium text-accent-foreground w-fit">
                    Start: 2026
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    Das Angebot ‚Lieblingsdose' bringt gesunde Ernährung direkt in den Alltag von Kitas, Schulen und Freizeiteinrichtungen. Gemeinsam mit Captain Apfel und seiner Crew entstehen bunte Brotdosen, die Kindern Spaß machen und Energie geben.
                  </CardDescription>
                  <Button asChild className="w-full group">
                    <Link to="/meine-angebote/workshop-lieblingsdose">
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Musik & Stimmung */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-8">Musik & Stimmung</h2>
            <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
              Bei Captain Apfel und seiner Crew gibt's Musik, gute Laune und jede Menge Bewegung.
            </p>
            
            {/* Bild/Illustration Platzhalter */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-12 max-w-md mx-auto border border-primary/20">
              <div className="bg-white/60 rounded-lg p-8 text-center">
                <Play className="h-12 w-12 mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">Bild/Illustration: Musik & Bewegung</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download-Bereich */}
      <section className="py-16 bg-white/50">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">Kostenlose Ausmalbilder</h2>
            <p className="text-lg md:text-xl text-foreground mb-12 leading-relaxed">
              Hier können Kinder und Einrichtungen Ausmalbilder von Captain Apfel und seiner Crew kostenlos herunterladen.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Download Platzhalter 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg h-32 mb-4 flex items-center justify-center">
                      <Download className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Captain Apfel</h3>
                    <Button size="sm" variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Download Platzhalter 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg h-32 mb-4 flex items-center justify-center">
                      <Download className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="font-semibold mb-2">Die Crew</h3>
                    <Button size="sm" variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Download Platzhalter 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="sm:col-span-2 lg:col-span-1"
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg h-32 mb-4 flex items-center justify-center">
                      <Download className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-semibold mb-2">Powerzentrale</h3>
                    <Button size="sm" variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* YouTube Video Footer */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-primary/20">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-8">Das Captain-Apfel-Lied</h2>
            
            {/* YouTube Video Platzhalter */}
            <div className="bg-white/80 rounded-xl p-8 shadow-lg border border-primary/20">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 mx-auto mb-4 text-primary" />
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
