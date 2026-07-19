"use client";

import { MapPin, Train, Plane, Building, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export function Location() {
  const connectivity = [
    { icon: Train, name: "Chowk Railway Station", time: "6 mins" },
    { icon: MapPin, name: "Mumbai – Pune Expwy", time: "15 mins" },
    { icon: BookOpen, name: "Pillai University", time: "15 mins" },
    { icon: BookOpen, name: "CSM University", time: "18 mins" },
    { icon: Train, name: "Karjat Railway Station", time: "20 mins" },
    { icon: BookOpen, name: "Amity University", time: "20 mins" },
    { icon: Train, name: "Panvel Junction", time: "38 mins" },
    { icon: Plane, name: "Navi Mumbai Airport", time: "40 mins" },
    { icon: MapPin, name: "MTHL (Atal Setu)", time: "45 mins" },
    { icon: Building, name: "South Mumbai", time: "70 mins" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="location" className="py-32 bg-[#111111] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-[1px] w-16 bg-accent"></div>
            <span className="text-accent font-sans tracking-[0.3em] uppercase text-xs font-semibold">Location</span>
            <div className="h-[1px] w-16 bg-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-[1.15]">
            Seamless <span className="italic text-white/70 font-light">Connectivity</span>
          </h2>
          <p className="text-white/60 font-sans text-lg font-light tracking-wide">
            Vavandhal, Old Mumbai - Pune Highway, Near Panvel, Raigad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Minimalist Map Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 h-[500px] relative p-2 border border-white/10 rounded-sm"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent"></div>
            
            <div className="w-full h-full bg-secondary/10 overflow-hidden relative grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4645.016856932381!2d73.2751462!3d18.887177599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e3187d24f64b%3A0x7e0006344918354e!2sRiyasat%20Royalcrest!5e1!3m2!1sen!2sin!4v1778843133875!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>

          {/* Connectivity Index */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-2xl font-serif text-white mb-8 border-b border-white/10 pb-6 uppercase tracking-widest text-sm">
              Distance Index
            </h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col"
            >
              {connectivity.map((item, index) => (
                <motion.div 
                  variants={itemVariants}
                  key={index} 
                  className="flex items-center justify-between py-4 border-b border-white/5 group hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <item.icon className="w-4 h-4 text-white/40 group-hover:text-accent transition-colors" />
                    <h4 className="font-sans font-light text-white/80 text-sm tracking-wide group-hover:text-white transition-colors">{item.name}</h4>
                  </div>
                  <span className="font-serif text-sm text-accent italic">{item.time}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
