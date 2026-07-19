"use client";

import { 
  ShoppingBag, 
  Footprints, 
  Building2, 
  Waves, 
  Flower2, 
  Dumbbell, 
  Trophy, 
  Church, 
  TreePine, 
  Activity, 
  Baby 
} from "lucide-react";
import { motion, Variants } from "framer-motion";

export function Amenities() {
  const amenitiesList = [
    { name: "Convenience Shopping Plaza", icon: ShoppingBag },
    { name: "Jogging Track", icon: Footprints },
    { name: "Multipurpose Club House", icon: Building2 },
    { name: "Swimming Pool", icon: Waves },
    { name: "Yoga & Meditation Court", icon: Flower2 },
    { name: "Multipurpose Court", icon: Dumbbell },
    { name: "Cricket Turf", icon: Trophy },
    { name: "Temple", icon: Church },
    { name: "Pergola", icon: TreePine },
    { name: "Open Gym", icon: Activity },
    { name: "Kids Play Area", icon: Baby },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="amenities" className="py-32 bg-[#F8F5F0] relative overflow-hidden">
      {/* Background elegant pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-16 bg-accent"></div>
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">Elevated Lifestyle</span>
            <div className="h-[1px] w-16 bg-accent"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-text-dark mb-8 leading-tight">
            World-Class Amenities
          </h2>
          <p className="text-text-light font-sans text-xl font-light leading-relaxed">
            Experience a curated selection of leisure and wellness amenities meticulously designed to elevate your everyday living.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {amenitiesList.map((amenity, index) => (
            <motion.div 
              variants={cardVariants}
              key={index} 
              className="group relative flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Premium hover gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/20 group-hover:via-transparent group-hover:to-transparent transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary">
                {/* Glowing ring on hover */}
                <div className="absolute inset-0 rounded-full border border-secondary/30 group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(202,160,82,0.4)] transition-all duration-500"></div>
                <amenity.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-text-dark group-hover:text-primary transition-colors duration-300 relative z-10">
                {amenity.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
