
import { useEffect } from "react";
import { motion } from "framer-motion";
import CustomerFeedback from "@/components/CustomerFeedback";

const AlltagLeichterLeben = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Alltag leichter leben | Captain Apfel";
    
    // Apply background color to the body
    document.body.classList.add('bg-background');
    
    return () => {
      // Remove background color when component unmounts
      document.body.classList.remove('bg-background');
    };
  }, []);

  return (
    <main className="min-h-screen section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-lg mb-4">Alltag leichter leben</h1>
            <p className="body-lg text-muted-foreground">
              Impulse und Ideen für Familien, die Struktur, Entlastung und neue Energie suchen.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="space-y-8">
            {/* Box 1: Kita-Brotdosen */}
            <motion.div
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="heading-md mb-4">Ideen für Kita-Brotdosen</h2>
              <p className="body-base text-muted-foreground mb-6">
                Praktische Tipps und kreative Ideen für abwechslungsreiche und gesunde Brotdosen, die Kindern schmecken und Eltern entlasten.
              </p>
              <div className="flex flex-col items-center gap-4">
                <img 
                  src="/lovable-uploads/08bfbdac-09ed-487b-b043-b67755d1d90a.png" 
                  alt="Gratis PDF Kita-Brotdosen" 
                  className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-lg"
                />
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/pdfs/lieblingsbox.pdf';
                    link.download = 'Lieblingsbox.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="inline-flex items-center gap-2 bg-[hsl(25_45%_35%)] hover:bg-[hsl(25_45%_30%)] text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg cursor-pointer"
                >
                  Lieblingsbox herunterladen
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Box 2: Neues aus der Powerzentrale */}
            <motion.div
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="heading-md mb-4">Neues aus der Powerzentrale</h2>
              <p className="body-base text-muted-foreground italic">
                Hier entsteht bald ein Bereich voller Ideen und Alltagshilfe – bleib gespannt!
              </p>
            </motion.div>

            {/* Box 3: Mein erstes Buch */}
            <motion.div
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="heading-md mb-4">Mein erstes Buch</h2>
              <p className="body-base text-muted-foreground mb-6">
                Ein Herzensprojekt, das gerade wächst.
              </p>
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="md:w-1/3 flex-shrink-0">
                  <img 
                    src="/lovable-uploads/36ba656f-ced5-4afb-a9ba-a75f553fb0de.png" 
                    alt="Mein erstes Buch Cover" 
                    className="w-full max-w-48 mx-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="body-base text-muted-foreground italic">
                    Ein persönlicher Blick auf Gesundheit, Körper und Seele.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <CustomerFeedback />
    </main>
  );
};

export default AlltagLeichterLeben;
