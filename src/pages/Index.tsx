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
    document.body.classList.add('bg-warm-gradient');
    
    return () => {
      // Remove background color when component unmounts
      document.body.classList.remove('bg-warm-gradient');
    };
  }, []);

  return (
    <div className="min-h-screen bg-warm-gradient">
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center space-y-content">
            <motion.h1 
              className="text-hero text-foreground text-balanced"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Captain Apfel - auf gesunder Mission
            </motion.h1>
            
            <motion.h2 
              className="text-subsection-title text-primary text-balanced"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Volle Obst- und Gemüsekraft voraus!
            </motion.h2>

            {/* Captain Apfel */}
            <motion.div 
              className="flex justify-center items-center mt-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.3 },
                scale: { duration: 0.8, delay: 0.3 }
              }}
            >
              <img 
                src="/assets/captain-apfel-hero.png" 
                alt="Captain Apfel - Superheld für gesunde Ernährung" 
                className="image-hero drop-shadow-lg animate-bounce-gentle"
              />
            </motion.div>
            
            {/* Initiative Logo */}
            <motion.div 
              className="flex justify-center items-center mt-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img 
                src="/lovable-uploads/initiative-logo-homepage.png" 
                alt="Captain Apfel - Initiative für starke Entwicklung - Gesundheit, die Kindern schmeckt" 
                className="logo-hero"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vorstellung */}
      <section className="section-spacing-small">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card-highlight space-y-content">
              <p className="text-body-small text-muted-foreground font-medium">
                Hallo, ich bin
              </p>
              
              <h2 className="text-section-title text-primary">
                Captain Apfel
              </h2>
              
              <h3 className="text-body-large text-muted-foreground">
                Mit meiner Crew bin ich unterwegs auf gesunder Mission.
              </h3>
              
              <p className="text-body text-muted-foreground">
                Berlin ist der Startpunkt unserer Reise. Von hier aus hebt das Tomatenraumschiff ab und landet direkt in Einrichtungen mit Kindern im Vorschul- und Grundschulalter.
              </p>
              
              <div className="pt-4 border-t border-primary/20">
                <p className="text-body text-primary font-semibold">
                  Denn gesunde Gewohnheiten geben uns Kraft, machen das Denken leichter und lassen uns rundum wohlfühlen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CREW-Bereich */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section-title text-foreground text-balanced">
              Lerne die Crew von Captain Apfel kennen!
            </h2>
          </motion.div>

          {/* Grid Layout */}
          <div className="max-w-5xl mx-auto">
            <div className="grid-crew">
              
              {/* Captain Apfel */}
              <motion.div 
                className="crew-card animate-hover-scale"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/lovable-uploads/captain-apfel.png" 
                  alt="Captain Apfel" 
                  className="image-medium mb-content"
                />
                <h3 className="text-body font-bold text-primary font-kalam">
                  Captain Apfel
                </h3>
              </motion.div>

              {/* Kimmi Schlau */}
              <motion.div 
                className="crew-card animate-hover-scale"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/lovable-uploads/kimmi-schlau.png" 
                  alt="Kimmi Schlau" 
                  className="image-medium mb-content"
                />
                <h3 className="text-body font-bold text-secondary font-kalam">
                  Kimmi Schlau
                </h3>
              </motion.div>

              {/* Kai Mutig */}
              <motion.div 
                className="crew-card animate-hover-scale"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/lovable-uploads/kai-mutig.png" 
                  alt="Kai Mutig" 
                  className="image-medium mb-content"
                />
                <h3 className="text-body font-bold text-accent font-kalam">
                  Kai Mutig
                </h3>
              </motion.div>

              {/* Tomatenraumschiff */}
              <motion.div 
                className="crew-card animate-hover-scale"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/lovable-uploads/tomatenraumschiff.png" 
                  alt="Tomatenraumschiff" 
                  className="image-medium mb-content"
                />
                <h3 className="text-body font-bold text-primary font-kalam">
                  Tomatenraumschiff
                </h3>
              </motion.div>

              {/* Powerzentrale */}
              <motion.div 
                className="crew-card animate-hover-scale"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/lovable-uploads/powerzentrale.png" 
                  alt="Powerzentrale" 
                  className="image-medium mb-content"
                />
                <h3 className="text-body font-bold text-secondary font-kalam">
                  Powerzentrale
                </h3>
              </motion.div>

              {/* Paffel */}
              <motion.div 
                className="crew-card animate-hover-scale"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/lovable-uploads/paffel.png" 
                  alt="Paffel" 
                  className="image-medium mb-content"
                />
                <h3 className="text-body font-bold text-accent font-kalam">
                  Paffel
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Angebote */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section-title text-foreground text-balanced mb-content">
              Kommende Abenteuer
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto text-balanced">
              Begleite Captain Apfel und seine Crew auf spannenden Reisen und entdecke, wie gesunde Ernährung zum Abenteuer wird.
            </p>
          </motion.div>

          <div className="grid-features">
            {/* Reise zur Powerzentrale */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-base h-full">
                <CardHeader className="text-center">
                  <img 
                    src="/assets/reise-zur-powerzentrale.jpg" 
                    alt="Reise zur Powerzentrale" 
                    className="image-large mx-auto mb-content rounded-lg"
                  />
                  <CardTitle className="text-subsection-title text-primary">
                    Reise zur Powerzentrale
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-content text-center">
                  <CardDescription className="text-body text-muted-foreground">
                    Ein interaktives Abenteuer, das Kinder für gesunde Ernährung begeistert und ihnen zeigt, wie sie ihre eigene "Powerzentrale" aufbauen können.
                  </CardDescription>
                  <p className="text-body-small text-primary font-semibold">
                    Start: Frühjahr 2025
                  </p>
                  <Link to="/workshop-gesunde-mission">
                    <Button className="btn-primary w-full">
                      Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Lieblingsdose */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-base h-full">
                <CardHeader className="text-center">
                  <img 
                    src="/assets/wochenplaner-ausschnitt.jpg" 
                    alt="Lieblingsdose Workshop" 
                    className="image-large mx-auto mb-content rounded-lg"
                  />
                  <CardTitle className="text-subsection-title text-secondary">
                    Workshop Lieblingsdose
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-content text-center">
                  <CardDescription className="text-body text-muted-foreground">
                    Praktische Tipps und Ideen für gesunde, leckere Pausenbrote, die Kinder gerne essen und Eltern gerne zubereiten.
                  </CardDescription>
                  <p className="text-body-small text-secondary font-semibold">
                    Verfügbar ab sofort
                  </p>
                  <Link to="/workshop-lieblingsdose">
                    <Button className="btn-secondary w-full">
                      Zum Workshop <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Captain Apfel Workshop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="card-base h-full">
                <CardHeader className="text-center">
                  <img 
                    src="/assets/captain-apfel-hero.png" 
                    alt="Captain Apfel Workshop" 
                    className="image-large mx-auto mb-content"
                  />
                  <CardTitle className="text-subsection-title text-accent">
                    Captain Apfel Workshop
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-content text-center">
                  <CardDescription className="text-body text-muted-foreground">
                    Ein interaktiver Workshop, bei dem Kinder Captain Apfel persönlich kennenlernen und gemeinsam gesunde Snacks zubereiten.
                  </CardDescription>
                  <p className="text-body-small text-accent font-semibold">
                    Buchbar für Einrichtungen
                  </p>
                  <Link to="/captain-apfel-workshop">
                    <Button className="btn-outline w-full">
                      Workshop buchen <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Musik & Stimmung */}
      <section className="section-spacing-small">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section-title text-foreground text-balanced mb-content">
              Musik & Stimmung
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto text-balanced">
              Unser Mitmach-Lied macht gesunde Ernährung zum musikalischen Erlebnis für die ganze Familie.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="card-highlight text-center">
              <CardContent className="space-y-content p-8">
                <div className="text-primary font-bold text-6xl font-playfair">
                  🎵
                </div>
                <h3 className="text-subsection-title text-primary">
                  Mitmach-Lied für Kinder
                </h3>
                <p className="text-body text-muted-foreground">
                  Ein fröhliches Lied, das Kinder zum Mitsingen und Bewegen animiert, während sie über gesunde Lebensmittel lernen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-primary">
                    <Play className="mr-2 h-4 w-4" />
                    Lied anhören
                  </Button>
                  <Button className="btn-outline">
                    <Download className="mr-2 h-4 w-4" />
                    Anleitung herunterladen
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Download Bereich */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section-title text-foreground text-balanced mb-content">
              Mission Buntstift
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto text-balanced">
              Lade dir kostenlose Ausmalbilder herunter und bringe Captain Apfel und seine Crew zum Leben.
            </p>
          </motion.div>

          <div className="grid-features">
            {/* Captain Apfel Ausmalbild */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-base h-full">
                <CardContent className="text-center space-y-content p-6">
                  <img 
                    src="/lovable-uploads/captain-apfel.png" 
                    alt="Captain Apfel Ausmalbild" 
                    className="image-medium mx-auto"
                  />
                  <h3 className="text-body-large font-semibold text-primary">
                    Captain Apfel
                  </h3>
                  <p className="text-body-small text-muted-foreground">
                    Ausmalbild des Superhelden für gesunde Ernährung
                  </p>
                  <Button className="btn-primary w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Herunterladen
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Obst & Gemüse */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-base h-full">
                <CardContent className="text-center space-y-content p-6">
                  <img 
                    src="/assets/ernaehrungstagebuch-ausschnitt.jpg" 
                    alt="Obst und Gemüse Ausmalbild" 
                    className="image-medium mx-auto rounded-lg"
                  />
                  <h3 className="text-body-large font-semibold text-secondary">
                    Obst & Gemüse
                  </h3>
                  <p className="text-body-small text-muted-foreground">
                    Bunte Ausmalbilder mit verschiedenen Früchten und Gemüsesorten
                  </p>
                  <Button className="btn-secondary w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Herunterladen
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Powerzentrale */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="card-base h-full">
                <CardContent className="text-center space-y-content p-6">
                  <img 
                    src="/lovable-uploads/powerzentrale.png" 
                    alt="Powerzentrale Ausmalbild" 
                    className="image-medium mx-auto"
                  />
                  <h3 className="text-body-large font-semibold text-accent">
                    Powerzentrale
                  </h3>
                  <p className="text-body-small text-muted-foreground">
                    Das Kraftwerk für gesunde Energie zum Ausmalen
                  </p>
                  <Button className="btn-outline w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Herunterladen
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;