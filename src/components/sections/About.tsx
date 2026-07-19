"use client";

import { motion, Variants } from "framer-motion";

export function About() {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-32 bg-[#FAFAFA] overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
            {/* Editorial Image Composition */}
          <div className="order-2 lg:order-1 relative h-[600px] w-full">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-0 left-0 w-[70%] h-[60%] rounded-sm overflow-hidden shadow-2xl z-10"
            >
              <img src="/assets/royalcrest/aerial-1.png" alt="Royal Crest Aerial" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="absolute bottom-0 right-0 w-[80%] h-[55%] rounded-sm overflow-hidden shadow-2xl z-20 border-8 border-[#FAFAFA] bg-black"
            >
              <iframe 
                src="https://www.youtube.com/embed/fZvL2I2mgWs?controls=1&rel=0&modestbranding=1" 
                title="Riyasat Royalcrest Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
            
            {/* Minimalist accent line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: 200 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute -left-6 top-20 w-[1px] bg-accent z-0 hidden md:block"
            />
          </div>
          
          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.div variants={textVariants} className="flex items-center gap-6 mb-8">
                <span className="text-primary font-sans tracking-[0.3em] uppercase text-xs font-semibold">The Vision</span>
                <div className="h-[1px] w-24 bg-secondary/30"></div>
              </motion.div>
              
              <motion.h2 variants={textVariants} className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-dark mb-8 leading-[1.15]">
                Discover the Perfect Balance of <span className="italic text-primary font-light">Connectivity & Tranquility</span>
              </motion.h2>
              
              <div className="space-y-6 text-text-light font-sans text-lg font-light leading-relaxed mb-12">
                <motion.p variants={textVariants}>
                  Spread across 15 acres of prime land, surrounded by lush greenery and just minutes away from the Expressway. Located in Wavandhal, near Panvel, Riyasat Royalcrest is inspired by timeless European elegance.
                </motion.p>
                <motion.p variants={textVariants}>
                  Set in a coveted location, our township offers effortless access to the city's key landmarks, prestigious schools, healthcare centers, and entertainment hotspots like Imagica, Lonavala, and Matheran Hills. 
                </motion.p>
              </div>
              
              <motion.div variants={textVariants} className="grid grid-cols-3 gap-8 pt-8 border-t border-secondary/20">
                <div>
                  <div className="text-4xl font-serif text-primary mb-2">15</div>
                  <div className="text-[10px] text-text-light uppercase tracking-[0.2em] font-semibold">Acres Area</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-primary mb-2">200</div>
                  <div className="text-[10px] text-text-light uppercase tracking-[0.2em] font-semibold">Premium Plots</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-primary mb-2">12+</div>
                  <div className="text-[10px] text-text-light uppercase tracking-[0.2em] font-semibold">Amenities</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
