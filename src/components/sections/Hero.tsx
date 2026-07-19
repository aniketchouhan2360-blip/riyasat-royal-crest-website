"use client";

import { motion, useScroll, useTransform, Variants, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { useState, useEffect } from "react";

export function Hero() {
  const { scrollY } = useScroll();
  // Subtly move the background video up as we scroll down to create parallax
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "20%"]);
  // Fade out the content as we scroll down
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Framer motion variants for staggered text reveal
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const heroImages = [
    "/assets/royalcrest/aerial-1.png",
    "/assets/royalcrest/club-house-(1).png",
    "/assets/royalcrest/shopping-plaza_day.png",
    "/assets/royalcrest/jogging-track-(2).png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="home" className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#0A0A0A] flex flex-col items-center justify-center pt-20">
      {/* Motion Image Slider Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 w-full h-[120%] -top-[10%] pointer-events-none"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Royal Crest Background"
          />
        </AnimatePresence>
      </motion.div>

      {/* Subtle overlay for text readability - classic vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10 pointer-events-none" />

      {/* Centered Classic Luxury Content */}
      <motion.div 
        style={{ opacity }}
        className="container relative z-20 mx-auto px-6 text-center w-full flex flex-col items-center"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block py-2 px-6 border border-accent/40 rounded-full text-accent text-xs font-semibold tracking-[0.4em] uppercase bg-black/30 backdrop-blur-md">
              MahaRERA No: PP1270002600401
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-[7rem] font-serif font-normal mb-6 text-white drop-shadow-2xl leading-none"
          >
            The Pinnacle of<br />
            <span className="italic font-light text-[#E8DCC4]">European Luxury</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 w-full max-w-md my-8 opacity-80">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-accent"></div>
            <div className="w-2 h-2 rounded-full bg-accent shrink-0"></div>
            <div className="h-[1px] w-full bg-gradient-to-l from-transparent to-accent"></div>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-lg md:text-2xl font-sans text-white/90 font-light tracking-wide leading-relaxed max-w-3xl drop-shadow-md mb-12">
            Experience 15 acres of breathtaking architecture and unmatched serenity in Navi Mumbai.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
            <a href="#contact">
              <Button size="lg" className="px-10 py-5 bg-accent hover:bg-accent/90 text-black border-none rounded-none tracking-[0.2em] uppercase text-sm font-semibold transition-all duration-500 shadow-[0_0_30px_rgba(202,160,82,0.3)]">
                Enquire Now
              </Button>
            </a>
            <a href="#walkthrough">
              <Button variant="outline" size="lg" className="px-10 py-5 bg-black/20 backdrop-blur-md border border-white/40 text-white hover:bg-white hover:text-black rounded-none tracking-[0.2em] uppercase text-sm transition-all duration-500">
                View Walkthrough
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Floating Highlights Bar (Lodha / Godrej style) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-0 left-0 w-full z-30 hidden lg:block"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-3 bg-black/40 backdrop-blur-xl border-t border-x border-white/10 divide-x divide-white/10">
            <div className="p-8 text-center hover:bg-white/5 transition-colors cursor-default">
              <div className="text-3xl font-serif text-[#E8DCC4] mb-2">15 Acres</div>
              <div className="text-xs font-sans text-white/60 uppercase tracking-[0.3em]">Total Land Parcel</div>
            </div>
            <div className="p-8 text-center hover:bg-white/5 transition-colors cursor-default">
              <div className="text-3xl font-serif text-[#E8DCC4] mb-2">200+</div>
              <div className="text-xs font-sans text-white/60 uppercase tracking-[0.3em]">Premium Plots</div>
            </div>
            <div className="p-8 text-center hover:bg-white/5 transition-colors cursor-default">
              <div className="text-3xl font-serif text-[#E8DCC4] mb-2">12+</div>
              <div className="text-xs font-sans text-white/60 uppercase tracking-[0.3em]">World-class Amenities</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
