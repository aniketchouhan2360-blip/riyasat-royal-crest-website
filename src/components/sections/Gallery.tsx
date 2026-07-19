"use client";

import { useState } from "react";

export function Gallery() {
  const [activeTab, setActiveTab] = useState("renders");

  // Using the actual project images from the local assets folder
  const renderImages = [
    "/assets/royalcrest/aerial-1.png",
    "/assets/royalcrest/aerial-2.png",
    "/assets/royalcrest/aerial-view.png",
    "/assets/royalcrest/shopping-plaza_day.png",
    "/assets/royalcrest/ohsr-cwr.png",
    "/assets/royalcrest/court.png"
  ];

  const amenityImages = [
    "/assets/royalcrest/club-house-(1).png",
    "/assets/royalcrest/swimming-pool.png",
    "/assets/royalcrest/jogging-track-(2).png",
    "/assets/royalcrest/meditation-and-yoga.png",
    "/assets/royalcrest/multipurpose-court-and-cricket-turf.png",
    "/assets/royalcrest/open-gym-area-(1).png",
    "/assets/royalcrest/kids-play-area.png"
  ];

  const displayImages = activeTab === "renders" ? renderImages : amenityImages;

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">Gallery</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-6">
            A Glimpse of the Grandeur
          </h2>
        </div>

        <div className="flex justify-center gap-4 mb-12 font-sans">
          <button 
            onClick={() => setActiveTab("renders")}
            className={`px-6 py-2 rounded-sm border transition-colors ${activeTab === "renders" ? "bg-primary border-primary text-white" : "border-secondary/30 text-text-light hover:border-primary hover:text-primary"}`}
          >
            Project Renders
          </button>
          <button 
            onClick={() => setActiveTab("amenities")}
            className={`px-6 py-2 rounded-sm border transition-colors ${activeTab === "amenities" ? "bg-primary border-primary text-white" : "border-secondary/30 text-text-light hover:border-primary hover:text-primary"}`}
          >
            Amenities
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayImages.map((src, index) => (
            <div key={index} className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-secondary/10">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
