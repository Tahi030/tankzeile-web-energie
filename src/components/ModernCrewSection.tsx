import { motion } from "framer-motion";

const crewMembers = [
  {
    name: "Captain Apfel",
    image: "/lovable-uploads/captain-apfel.png",
    color: "primary",
    delay: 0.1
  },
  {
    name: "Kimmi Schlau",
    image: "/lovable-uploads/kimmi-schlau.png",
    color: "secondary",
    delay: 0.2
  },
  {
    name: "Kai Mutig",
    image: "/lovable-uploads/kai-mutig.png",
    color: "accent",
    delay: 0.3
  },
  {
    name: "Tomatenraumschiff",
    image: "/lovable-uploads/tomatenraumschiff.png",
    color: "primary",
    delay: 0.4
  },
  {
    name: "Powerzentrale",
    image: "/lovable-uploads/powerzentrale.png",
    color: "secondary",
    delay: 0.5
  },
  {
    name: "Paffel",
    image: "/lovable-uploads/paffel.png",
    color: "accent",
    delay: 0.6
  }
];

export const ModernCrewSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-6">
            Lerne die Crew von Captain Apfel kennen!
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Crew Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {crewMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="flex flex-col items-center text-center group"
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
              <div className="relative mb-4 p-4 bg-card rounded-2xl shadow-lg border border-border/50 transition-all duration-300 group-hover:shadow-xl">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain drop-shadow-lg"
                />
                
                {/* Decorative accent */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full 
                  ${member.color === 'primary' ? 'bg-primary' : 
                    member.color === 'secondary' ? 'bg-secondary' : 'bg-accent'} 
                  opacity-20 group-hover:opacity-40 transition-opacity`} 
                />
              </div>
              
              {/* Name */}
              <h3 className={`text-sm md:text-base font-bold font-kalam
                ${member.color === 'primary' ? 'text-primary' : 
                  member.color === 'secondary' ? 'text-secondary' : 'text-accent'}`}>
                {member.name}
              </h3>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};