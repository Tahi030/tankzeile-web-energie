
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import CustomerFeedback from "@/components/CustomerFeedback";

const AlltagLeichterLeben = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = "Alltag leichter leben | Tankzeile";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-light py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Alltag leichter leben</h1>
            {/* Hand-drawn line effect directly under heading */}
            <svg width="120" height="8" viewBox="0 0 120 8" className="text-white mb-6">
              <path
                d="M2,4 Q8,2 15,4 T30,3 Q40,5 50,4 T70,3 Q80,5 90,4 T110,3 Q115,2 118,4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-70"
                style={{
                  filter: 'url(#roughPaperAlltag)',
                }}
              />
              <defs>
                <filter id="roughPaperAlltag">
                  <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="1" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                </filter>
              </defs>
            </svg>
            <p className="text-lg mb-6 text-white">
              Für Familien, die Struktur, Entlastung und neue Energie suchen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl mb-4 text-primary-dark text-left italic font-normal">Warum Struktur beim Essen hilft</h2>
                {/* Hand-drawn line effect */}
                <div className="flex justify-start mb-6">
                  <svg width="120" height="8" viewBox="0 0 120 8" className="text-primary">
                    <path
                      d="M2,4 Q8,2 15,4 T30,3 Q40,5 50,4 T70,3 Q80,5 90,4 T110,3 Q115,2 118,4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-70"
                      style={{
                        filter: 'url(#roughPaperStructure)',
                      }}
                    />
                    <defs>
                      <filter id="roughPaperStructure">
                        <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="1" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <p>
                  Wenn du weißt, was auf den Tisch kommt, sparst du Energie und Stress. Weniger Entscheidungen im Kopf, mehr Zeit für Quality-Time mit deinen Kindern. Denn genau diese gemeinsamen Momente im Hier und Jetzt zählen wirklich und bleiben in Erinnerung. Genieße sie!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Download Section */}
      <section className="py-12 md:py-16 bg-accent-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl md:text-3xl mb-4 text-primary-dark text-left italic font-normal">
                Deine Alltagshelfer to go!
              </h2>
              {/* Hand-drawn line effect */}
              <div className="flex justify-start mb-6">
                <svg width="120" height="8" viewBox="0 0 120 8" className="text-primary">
                  <path
                    d="M2,4 Q8,2 15,4 T30,3 Q40,5 50,4 T70,3 Q80,5 90,4 T110,3 Q115,2 118,4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-70"
                    style={{
                      filter: 'url(#roughPaperHelper)',
                    }}
                  />
                  <defs>
                    <filter id="roughPaperHelper">
                      <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="2" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
                    </filter>
                  </defs>
                </svg>
              </div>
              <p className="text-gray-600 mb-8">
                Hier findest du regelmäßig kostenlose PDF-Dateien voller Ideen, Tipps und Informationen, die deinen Alltag leichter, gesünder und einfach schöner machen. Hol dir gleich deine erste Datei – und schau gern immer wieder vorbei, bald warten weitere kleine Helfer auf dich.
              </p>
              <p className="text-gray-600 mb-8">
                Viel Spaß beim Entdecken!
              </p>
              
              <div className="bg-gradient-to-r from-primary-light/20 to-secondary-light/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-4">
                  Ideen für Kita-Brotdosen
                </h3>
                <p className="text-gray-600 mb-6">
                  Praktische Tipps und kreative Ideen für abwechslungsreiche und gesunde Brotdosen, die Kindern schmecken und Eltern entlasten.
                </p>
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src="/lovable-uploads/08bfbdac-09ed-487b-b043-b67755d1d90a.png" 
                    alt="Gratis PDF Kita-Brotdosen" 
                    className="w-80 h-80 object-contain rounded-lg"
                  />
                  <a 
                    href="/lieblingsdose.pdf" 
                    download
                    className="inline-flex items-center bg-primary/80 text-white px-3 py-1.5 rounded-md hover:bg-primary transition-colors text-xs"
                  >
                    Lieblingsdose herunterladen
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CustomerFeedback />
    </div>
  );
};

export default AlltagLeichterLeben;
