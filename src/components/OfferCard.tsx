import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface OfferCardProps {
  title: string;
  subtitle?: string;
  description: string;
  callToAction?: string;
  imageUrl: string;
  linkTo: string;
  buttonText: string;
  accent?: 'primary' | 'secondary';
  delay?: number;
}

export const OfferCard = ({ 
  title, 
  subtitle,
  description, 
  callToAction,
  imageUrl, 
  linkTo, 
  buttonText, 
  accent = 'primary',
  delay = 0 
}: OfferCardProps) => {
  return (
    <motion.div 
      className="bg-card rounded-3xl p-8 shadow-lg border border-border/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {/* Background accent */}
      <div className={`absolute top-0 right-0 w-24 h-24 rounded-full ${accent === 'primary' ? 'bg-primary/5' : 'bg-secondary/5'} -translate-y-12 translate-x-12`} />
      
      {/* Image */}
      <div className="mb-6 rounded-2xl overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="space-y-4">
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
        
        <Link to={linkTo}>
          <Button 
            variant={accent === 'primary' ? 'default' : 'secondary'}
            className="w-full group"
            size="lg"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};