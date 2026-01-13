import { motion } from "framer-motion";
import { Download, Apple, Cherry, Citrus, Grape } from "lucide-react";

interface UniformOfferCardProps {
  title: string | React.ReactNode;
  subtitle?: string;
  description: string | React.ReactNode;
  callToAction?: string;
  imageUrl?: string;
  imageClassName?: string;
  videoPlaceholder?: boolean;
  youtubeLink?: string;
  coloringPages?: { imageUrl: string; pdfUrl: string }[];
  downloadLinks?: { text: string; url: string }[];
  linkTo?: string;
  buttonText?: string;
  accent: "primary" | "secondary" | "accent";
  delay: number;
  decorativeIllustration?: boolean;
}

export const UniformOfferCard = ({ 
  title, 
  subtitle,
  description, 
  callToAction,
  imageUrl,
  imageClassName,
  videoPlaceholder,
  youtubeLink,
  coloringPages,
  downloadLinks,
  linkTo, 
  buttonText, 
  accent,
  delay,
  decorativeIllustration
}: UniformOfferCardProps) => {
  return (
    <motion.div 
      className="bg-card/50 backdrop-blur-sm rounded-3xl shadow-lg border border-border/30 relative overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <div className="p-8 flex-1 flex flex-col">
        {/* Image */}
        {imageUrl && (
          <div className="mb-6">
            <img 
              src={imageUrl} 
              alt={typeof title === 'string' ? title : 'Angebot'} 
              className={`w-full rounded-lg shadow-md ${imageClassName || 'h-48 object-cover'}`}
            />
            {youtubeLink && (
              <button 
                onClick={() => window.open(youtubeLink, '_blank', 'noopener,noreferrer')}
                className="block w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 text-center shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Video auf YouTube ansehen
              </button>
            )}
          </div>
        )}

        {/* Decorative Illustration - animated fruits */}
        {decorativeIllustration && (
          <div className="mb-6 py-6 relative overflow-hidden bg-gradient-to-br from-[hsl(80_35%_92%)] to-[hsl(32_40%_94%)] rounded-xl border border-border/20">
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              {/* Floating Apple */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-[hsl(12_65%_50%)]"
              >
                <Apple size={36} strokeWidth={1.5} />
              </motion.div>
              
              {/* Floating Cherry */}
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [3, -3, 3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="text-[hsl(350_60%_55%)]"
              >
                <Cherry size={32} strokeWidth={1.5} />
              </motion.div>
              
              {/* Central larger fruit */}
              <motion.div
                animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                className="text-[hsl(80_45%_45%)]"
              >
                <Apple size={48} strokeWidth={1.5} />
              </motion.div>
              
              {/* Floating Citrus */}
              <motion.div
                animate={{ y: [0, -7, 0], rotate: [-4, 4, -4] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="text-[hsl(45_80%_50%)]"
              >
                <Citrus size={32} strokeWidth={1.5} />
              </motion.div>
              
              {/* Floating Grape */}
              <motion.div
                animate={{ y: [0, -9, 0], rotate: [5, -5, 5] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="text-[hsl(280_50%_55%)]"
              >
                <Grape size={36} strokeWidth={1.5} />
              </motion.div>
            </div>
            
            {/* Subtle sparkles */}
            <motion.div 
              className="absolute top-2 left-4 w-2 h-2 bg-[hsl(45_80%_60%)] rounded-full"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-3 right-6 w-1.5 h-1.5 bg-[hsl(80_50%_55%)] rounded-full"
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
              className="absolute top-4 right-10 w-1 h-1 bg-[hsl(12_60%_60%)] rounded-full"
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.4, 0.9] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.8 }}
            />
          </div>
        )}

        {/* Video Placeholder (no iframe) */}
        {videoPlaceholder && (
          <div className="bg-primary/10 rounded-xl p-8 border-2 border-dashed border-primary/30 mb-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-primary font-medium">Video</p>
              <p className="text-sm text-muted-foreground">Bald verfügbar</p>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl font-bold font-playfair">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-[hsl(18_65%_60%)] font-medium mt-1">
                {subtitle}
              </p>
            )}
          </div>
          
          <p className="text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
          
          {callToAction && (
            <p className="text-base text-[hsl(18_65%_55%)] font-medium">
              {callToAction}
            </p>
          )}

          {/* Coloring Pages Grid */}
          {coloringPages && (
            <div className="grid grid-cols-3 gap-3">
              {coloringPages.map((page, index) => (
                <div key={index} className="space-y-2">
                  <img 
                    src={page.imageUrl} 
                    alt="Ausmalbild" 
                    className="w-full h-32 object-contain rounded-lg border border-border/30"
                  />
                  <motion.a 
                    href={page.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 bg-[hsl(18_65%_65%)] hover:bg-[hsl(18_65%_58%)] text-white px-2 py-2 rounded text-xs font-medium transition-all duration-200 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download size={14} />
                  </motion.a>
                </div>
              ))}
            </div>
          )}

          {/* Download Links */}
          {downloadLinks && (
            <div className="space-y-3">
              {downloadLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[hsl(18_65%_65%)] hover:bg-[hsl(18_65%_58%)] text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 text-center shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.text}
                </motion.a>
              ))}
            </div>
          )}
        </div>

        {/* Button - Always at bottom */}
        {linkTo && buttonText && (
          <div className="mt-6 pt-4">
            <motion.a 
              href={linkTo}
              className="block text-center px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-[hsl(18_65%_65%)] hover:bg-[hsl(18_65%_58%)] text-white shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {buttonText}
            </motion.a>
          </div>
        )}
      </div>

      {/* Decorative background */}
      <div className={`absolute -top-2 -right-2 w-24 h-24 rounded-full blur-2xl opacity-20
        ${accent === 'primary' ? 'bg-primary' : 
          accent === 'secondary' ? 'bg-secondary' : 'bg-accent'}`} 
      />
    </motion.div>
  );
};