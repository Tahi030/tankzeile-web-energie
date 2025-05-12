
import { Download } from "lucide-react";

const downloads = [
  {
    id: 1,
    title: "Zuckerarme Snacks",
    description: "Einfache und leckere Ideen für gesunde Kinder-Snacks ohne zugesetzten Zucker.",
    filename: "zuckerarme-snacks.pdf",
  },
  {
    id: 2,
    title: "Kita-Box-Ideen",
    description: "Kreative und gesunde Ideen für die Verpflegung der Kleinen in der Kita oder Schule.",
    filename: "kita-box-ideen.pdf",
  },
];

const DownloadSection = () => {
  const handleDownload = (filename: string) => {
    // In a real implementation, this would trigger an actual download
    // For now we just show an alert message
    alert(`Download von ${filename} würde hier beginnen.`);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-accent-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Kostenlose Downloads</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Praktische Ratgeber und Hilfen für deinen Alltag – direkt zum Herunterladen und Anwenden.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {downloads.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-6 h-20">{item.description}</p>
              <button
                onClick={() => handleDownload(item.filename)}
                className="btn-secondary flex items-center justify-center w-full"
              >
                <Download size={18} className="mr-2" />
                Herunterladen
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
