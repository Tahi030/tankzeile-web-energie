
import { Download, Carrot, Backpack } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const downloads = [
  {
    id: 1,
    title: "Zuckerarme Snacks",
    description: "Einfache und leckere Ideen für gesunde Kinder-Snacks ohne zugesetzten Zucker.",
    filename: "zuckerarme-snacks.pdf",
    icon: Carrot,
  },
  {
    id: 2,
    title: "Kita-Box-Ideen",
    description: "Kreative und gesunde Ideen für die Verpflegung der Kleinen in der Kita oder Schule.",
    filename: "kita-box-ideen.pdf",
    icon: Backpack,
  },
];

const DownloadSection = () => {
  const handleDownload = (filename: string) => {
    // In a real implementation, this would trigger an actual download
    // For now we just show an alert message
    alert(`Download von ${filename} würde hier beginnen.`);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-accent-light/70 to-accent-light/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            className="section-title" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Praktische Helfer für deinen Alltag – kostenlos zum Mitnehmen
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Praktische Ratgeber und Hilfen für deinen Alltag – direkt zum Herunterladen und Anwenden.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {downloads.map((item, index) => (
            <motion.div 
              key={item.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-primary-light hover:shadow-lg transition-shadow relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Badge 
                variant="secondary" 
                className="absolute top-3 right-3 bg-[#F2FCE2] text-secondary-dark px-3 py-1 rounded-full"
              >
                GRATIS
              </Badge>
              
              <div className="flex flex-col items-center">
                <div className="mb-4 p-3 bg-accent-light/30 rounded-full">
                  <item.icon size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{item.description}</p>
                <button
                  onClick={() => handleDownload(item.filename)}
                  className={cn(
                    "btn-secondary flex items-center justify-center w-full max-w-xs mx-auto",
                    "text-base rounded-xl py-3 px-6 hover:scale-[1.02] transition-all"
                  )}
                >
                  <Download size={18} className="mr-2" />
                  Jetzt kostenlos herunterladen
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
