import { motion } from "framer-motion";
import powerzentrale from "@/assets/powerzentrale.webp";
import captainApfel from "@/assets/captain-apfel.webp";
import kaiMutig from "@/assets/kai-mutig.webp";
import kimmiSchlau from "@/assets/kimmi-schlau.webp";
import paffel from "@/assets/paffel.webp";
import tomatenraumschiff from "@/assets/tomatenraumschiff.webp";

const crewMembers = [
  {
    name: "Powerzentrale",
    image: powerzentrale,
    color: "primary",
    delay: 0.1
  },
  {
    name: "Captain Apfel",
    image: captainApfel,
    color: "primary",
    delay: 0.15
  },
  {
    name: "Kimmi Schlau",
    image: kimmiSchlau,
    color: "secondary",
    delay: 0.2
  },
  {
    name: "Kai Mutig",
    image: kaiMutig,
    color: "accent",
    delay: 0.25
  },
  {
    name: "Tomatenraumschiff",
    image: tomatenraumschiff,
    color: "primary",
    delay: 0.3
  },
  {
    name: "Paffel",
    image: paffel,
    color: "accent",
    delay: 0.35
  }
];

export const ModernCrewSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        

        {/* Crew Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {crewMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className={`flex flex-col items-center text-center group ${
                index === crewMembers.length - 1 ? 'md:col-span-2 md:max-w-[calc(50%-1.5rem)] md:mx-auto' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: member.delay }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
            >
              {/* Image Container */}
              <div className="relative p-8 bg-card rounded-2xl shadow-lg border border-border/50 transition-all duration-300 group-hover:shadow-xl w-full">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-auto object-contain drop-shadow-lg"
                  width={500}
                  height={500}
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Decorative accent */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent opacity-20 group-hover:opacity-40 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};