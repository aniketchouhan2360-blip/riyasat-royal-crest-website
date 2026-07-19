"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Gallery() {
  const [activeTab, setActiveTab] = useState("renders");

  // Using the actual project images from the local assets folder
  const renderImages = [
    "/assets/royalcrest/aerial-1.png",
    "/assets/royalcrest/aerial-view.png",
    "/assets/royalcrest/aerial-2.png",
    "/assets/royalcrest/shopping-plaza_day.png",
    "/assets/royalcrest/ohsr-cwr.png",
    "/assets/royalcrest/court.png"
  ];

  const amenityImages = [
    "/assets/royalcrest/club-house-(1).png",
    "/assets/royalcrest/jogging-track-(2).png",
    "/assets/royalcrest/swimming-pool.png",
    "/assets/royalcrest/meditation-and-yoga.png",
    "/assets/royalcrest/multipurpose-court-and-cricket-turf.png",
    "/assets/royalcrest/open-gym-area-(1).png",
    "/assets/royalcrest/kids-play-area.png"
  ];

  const displayImages = activeTab === "renders" ? renderImages : amenityImages;

  return (
    <section id="gallery" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-[1px] w-16 bg-secondary/30"></div>
            <span className="text-primary font-sans tracking-[0.3em] uppercase text-xs font-semibold">Gallery</span>
            <div className="h-[1px] w-16 bg-secondary/30"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-dark mb-8 leading-[1.15]">
            A Glimpse of the <span className="italic text-primary font-light">Grandeur</span>
          </h2>
        </motion.div>

        <div className="flex justify-center gap-8 mb-16 font-sans">
          <button 
            onClick={() => setActiveTab("renders")}
            className={`pb-2 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 border-b-2 ${activeTab === "renders" ? "border-primary text-primary" : "border-transparent text-text-light hover:text-text-dark"}`}
          >
            Project Renders
          </button>
          <button 
            onClick={() => setActiveTab("amenities")}
            className={`pb-2 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 border-b-2 ${activeTab === "amenities" ? "border-primary text-primary" : "border-transparent text-text-light hover:text-text-dark"}`}
          >
            Amenities
          </button>
        </div>

        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {displayImages.map((src, index) => (
              <motion.div 
                key={src} // use src as key for better animation tracking when switching tabs
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden bg-secondary/5 break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Elegant Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="h-[1px] w-12 bg-accent mb-3"></div>
                    <h3 className="text-white font-serif text-xl tracking-wide">
                      {activeTab === "renders" ? "Architectural Vision" : "Lifestyle Amenity"}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
