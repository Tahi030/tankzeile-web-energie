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
  oldPrice?: string;
  price: string;
  buttonText: string;
  buttonHref: string;
  buttonDisabled?: boolean;
  paymentNote: string;
  delay?: number;
  isOpen?: boolean;
  onToggle?: () => void;
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
  oldPrice,
  price,
  buttonText,
  buttonHref,
  buttonDisabled,
  paymentNote,
  delay = 0.3,
  isOpen = false,
  onToggle,
}: ProductCardProps) => {

  return (
    <motion.div
      className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 shadow-sm flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {/* Image */}
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

      {/* Description + Notice */}
      <div className="min-h-[6rem] mb-4">
        <p className="text-sm text-muted-foreground text-center leading-relaxed mb-1 [&_span]:whitespace-nowrap">
          {description.split(/(\d+\s*Seiten)/).map((part, i) =>
            /\d+\s*Seiten/.test(part) ? <span key={i}>{part}</span> : part
          )}
        </p>
        {notice && <div className="mt-2">{notice}</div>}
      </div>

      {/* Accordion */}
      <div className="border-t border-border/30 mt-auto">
        <button
          type="button"
          onClick={() => onToggle?.()}
          className="flex w-full items-center justify-between py-3 text-sm font-semibold text-foreground transition-all font-luckiest"
        >
          {accordionTitle}
          <ChevronDown
            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <ul className="space-y-2 text-sm text-muted-foreground pb-4">
                {accordionItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong>{item.label}</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Purchase Section */}
      <div className="bg-card/50 rounded-lg p-4 border border-border/30 text-center space-y-3 mt-6">
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
    </motion.div>
  );
};

export default ProductCard;
