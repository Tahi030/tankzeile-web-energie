import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface BulletItem {
  label: string;
  text: string;
}

interface ProductCardProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  description: string;
  notice?: React.ReactNode;
  accordionTitle: string;
  accordionItems: BulletItem[];
  price: string;
  buttonText: string;
  buttonHref: string;
  buttonDisabled?: boolean;
  paymentNote: string;
  delay?: number;
}

const ProductCard = ({
  image,
  imageAlt,
  title,
  subtitle,
  description,
  notice,
  accordionTitle,
  accordionItems,
  price,
  buttonText,
  buttonHref,
  buttonDisabled,
  paymentNote,
  delay = 0.3,
}: ProductCardProps) => {
  return (
    <motion.div
      className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 shadow-sm flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="flex flex-col flex-1">
        {/* Image - fixed height container */}
        <div className="text-center mb-5">
          <div className="h-72 flex items-center justify-center">
            <img
              src={image}
              alt={imageAlt}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width={256}
              height={288}
              className="max-h-full w-auto max-w-64 mx-auto rounded-lg shadow-lg bg-muted"
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-foreground text-center mb-3 min-h-[3.5rem] flex items-center justify-center leading-snug">
          <span>
            {title.includes("!") ? (
              <>
                {title.split("!")[0]}!
                <br />
                {title.split("!").slice(1).join("!").trim()}
              </>
            ) : title}
          </span>
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-muted-foreground text-center leading-relaxed text-sm font-medium mb-2">
            {subtitle}
          </p>
        )}

        {/* Description */}
        <p className="text-sm text-muted-foreground text-center leading-relaxed mb-1 [&_span]:whitespace-nowrap">
          {description.split(/(\d+\s*Seiten)/).map((part, i) =>
            /\d+\s*Seiten/.test(part) ? <span key={i}>{part}</span> : part
          )}
        </p>

        {/* Optional notice */}
        {notice && <div className="mb-1">{notice}</div>}

        {/* Accordion - pushed to consistent position */}
        <div className="mt-auto pt-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="details" className="border-border/30">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-3">
                {accordionTitle}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {accordionItems.map((item) => (
                    <li key={item.label} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>{item.label}</strong> {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Purchase Section */}
          <div className="bg-card/50 rounded-lg p-4 border border-border/30 text-center space-y-3 mt-4">
            <div className="text-xl font-bold text-foreground">{price}</div>

            {buttonDisabled ? (
              <div className="block bg-muted text-muted-foreground px-4 py-2 rounded-lg font-medium w-full text-sm cursor-not-allowed">
                {buttonText}
              </div>
            ) : (
              <motion.a
                href={buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[hsl(25_30%_88%)] hover:bg-[hsl(25_35%_82%)] text-[hsl(25_30%_25%)] px-4 py-2 rounded-lg transition-all duration-300 font-medium w-full text-sm shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {buttonText}
              </motion.a>
            )}

            <div className="text-xs text-muted-foreground leading-relaxed">
              {paymentNote}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
