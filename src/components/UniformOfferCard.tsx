import { motion } from "framer-motion";
import { Download } from "lucide-react";

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
  delay 
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
              loading="lazy"
              decoding="async"
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

          {/* Coloring Pages Grid - appears after description */}
          {coloringPages && (
            <div className="space-y-3 pt-2">
              <p className="text-sm font-medium text-muted-foreground">Ausmalbilder zum Download:</p>
              <div className="grid grid-cols-3 gap-3">
                {coloringPages.map((page, index) => (
                  <div key={index} className="space-y-2">
                    <img 
                      src={page.imageUrl} 
                      alt="Ausmalbild" 
                      className="w-full h-24 sm:h-28 md:h-32 object-contain rounded-lg border border-border/30 bg-white"
                      loading="lazy"
                      decoding="async"
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
            </div>
          )}

        </div>

        {/* Download Links - At bottom of card for alignment */}
        {downloadLinks && (
          <div className="mt-auto pt-4 space-y-3">
            {downloadLinks.map((link, index) => (
              <motion.a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[hsl(18_65%_65%)] hover:bg-[hsl(18_65%_58%)] text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 text-center shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} />
                {link.text}
              </motion.a>
            ))}
          </div>
        )}

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