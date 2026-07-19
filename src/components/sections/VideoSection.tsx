"use client";

import { motion } from "framer-motion";

export function VideoSection() {
  return (
    <section id="walkthrough" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-[1px] w-16 bg-accent"></div>
            <span className="text-accent font-sans tracking-[0.3em] uppercase text-xs font-semibold">Experience It</span>
            <div className="h-[1px] w-16 bg-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.15]">
            Virtual <span className="italic text-white/70 font-light">Walkthrough</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto aspect-video rounded-sm overflow-hidden shadow-2xl border border-white/10 bg-secondary/10"
        >
          <iframe 
            src="https://www.youtube.com/embed/fZvL2I2mgWs?controls=1&rel=0&modestbranding=1" 
            title="Riyasat Royalcrest Video"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
