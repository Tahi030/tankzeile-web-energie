import { motion } from "framer-motion";

interface UniformOfferCardProps {
  title: string | React.ReactNode;
  subtitle?: string;
  description: string;
  callToAction?: string;
  imageUrl?: string;
  videoPlaceholder?: boolean;
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
  videoPlaceholder,
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
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Video Placeholder */}
        {videoPlaceholder && (
          <div className="bg-primary/10 rounded-xl p-8 border-2 border-dashed border-primary/30 mb-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-primary font-medium">Mitmach-Lied Video</p>
              <p className="text-sm text-muted-foreground">Bald verfügbar</p>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-primary font-playfair">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-secondary font-medium mt-1">
                {subtitle}
              </p>
            )}
          </div>
          
          <p className="text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
          
          {callToAction && (
            <p className="text-base text-primary font-medium">
              {callToAction}
            </p>
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
                  className="block bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 text-secondary px-4 py-3 rounded-lg font-medium transition-all duration-200 text-center"
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
              className={`block text-center px-6 py-3 rounded-lg font-medium transition-all duration-200 
                ${accent === 'primary' 
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                  : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'}`}
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