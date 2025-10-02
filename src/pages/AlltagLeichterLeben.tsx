
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
      <section className="bg-primary-light section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-lg mb-4">Alltag leichter leben</h1>
            {/* Hand-drawn line effect directly under heading */}
            <svg width="120" height="8" viewBox="0 0 120 8" className="text-white mb-4">
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
            <p className="body-lg text-white">
              Für Familien, die Struktur, Entlastung und neue Energie suchen.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section-padding bg-accent-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="heading-lg text-primary-dark text-left italic font-normal mb-3">
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
              
              {/* Blog Post 1: Rezepte */}
              <div className="bg-gradient-to-r from-primary-light/20 to-secondary-light/20 rounded-lg p-6 mb-6">
                <h3 className="heading-sm text-primary-dark mb-3">
                  Gesunde Rezepte für die ganze Familie
                </h3>
                <p className="body-base text-gray-600 mb-4">
                  Entdecke leckere und ausgewogene Rezeptideen, die nicht nur gesund sind, sondern auch Kindern schmecken. Von schnellen Frühstücksideen bis zu kinderfreundlichen Hauptgerichten.
                </p>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-60 h-60 md:w-72 md:h-72 bg-gradient-to-br from-primary-light/30 to-secondary-light/30 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Rezeptbild folgt in Kürze</span>
                  </div>
                  <span className="text-gray-400 font-medium text-sm">Demnächst verfügbar</span>
                </div>
              </div>

              {/* Blog Post 2: Kita-Brotdosen */}
              <div className="bg-gradient-to-r from-primary-light/20 to-secondary-light/20 rounded-lg p-6 mb-6">
                <h3 className="heading-sm text-primary-dark mb-3">
                  Ideen für Kita-Brotdosen
                </h3>
                <p className="body-base text-gray-600 mb-4">
                  Praktische Tipps und kreative Ideen für abwechslungsreiche und gesunde Brotdosen, die Kindern schmecken und Eltern entlasten.
                </p>
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src="/lovable-uploads/08bfbdac-09ed-487b-b043-b67755d1d90a.png" 
                    alt="Gratis PDF Kita-Brotdosen" 
                    className="w-60 h-60 md:w-72 md:h-72 object-contain rounded-lg"
                  />
                  <a 
                    href="/lieblingsdose.pdf" 
                    download
                    className="inline-flex items-center bg-primary/80 text-white px-3 py-1.5 rounded-md hover:bg-primary transition-colors text-sm"
                  >
                    Lieblingsdose herunterladen
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Blog Post 3: Mein erstes Buch */}
              <div className="bg-gradient-to-r from-primary-light/20 to-secondary-light/20 rounded-lg p-6">
                <h3 className="heading-sm text-primary-dark mb-3">
                  Mein erstes Buch demnächst verfügbar
                </h3>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/3">
                    <img 
                      src="/lovable-uploads/36ba656f-ced5-4afb-a9ba-a75f553fb0de.png" 
                      alt="Mein erstes Buch" 
                      className="w-full max-w-48 mx-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="body-base mb-3">
                      Ich freue mich riesig, dir bald mein erstes Buch zu zeigen! Wer bist du wirklich - hinter all den Masken, die du täglich trägst, und besonders dann, wenn der erste Riss entsteht?
                    </p>
                    <p className="body-base mb-3">Du kannst dich freuen auf:</p>
                    <ul className="body-base mb-4 space-y-1">
                      <li>• Inspiration für Ernährung und innere Balance</li>
                      <li>• Einfache Tipps zum Batterien aufladen</li>
                      <li>• Deinen persönlichen Wohlfühltag</li>
                    </ul>
                    <span className="text-gray-400 font-medium text-sm">Bald verfügbar</span>
                  </div>
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
