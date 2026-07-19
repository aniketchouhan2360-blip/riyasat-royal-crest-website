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
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black flex items-end pb-16 md:pb-24">
      {/* Motion Image Slider Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 w-full h-[150%] md:h-[120%] -top-[10%] pointer-events-none"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Royal Crest Background"
          />
        </AnimatePresence>
      </motion.div>

      {/* Cinematic dark gradient - heavy at the bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" /> {/* Subtle overall dim */}

      {/* Cinematic Main Content Pushed to Bottom */}
      <motion.div 
        style={{ opacity }}
        className="container relative z-20 mx-auto px-6 md:px-12 w-full"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block py-1 px-3 border-l-2 border-accent text-white/90 text-xs font-semibold tracking-[0.3em] uppercase bg-black/20 backdrop-blur-sm">
              MahaRERA No: PP1270002600401
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-[6rem] font-serif font-medium mb-6 leading-[1.05] text-white tracking-tight drop-shadow-xl"
          >
            The Pinnacle of <br />
            <span className="italic text-white/90 font-light tracking-wide">European Luxury</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 mt-8 border-t border-white/20 pt-8">
            <p className="text-lg md:text-xl font-sans text-white/80 font-light tracking-wide leading-relaxed max-w-2xl drop-shadow-md">
              Experience 15 acres of breathtaking architecture, unmatched serenity, and world-class amenities in Navi Mumbai. Secure your legacy today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a href="#contact">
                <Button size="lg" className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-accent hover:text-white rounded-none tracking-widest uppercase text-xs transition-all duration-500">
                  Enquire Now
                </Button>
              </a>
              <a href="#about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-black rounded-none tracking-widest uppercase text-xs transition-all duration-500">
                  Explore
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Minimalist Scroll indicator - Pushed to right side */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 right-6 md:right-12 z-20 hidden lg:flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-sans font-light rotate-90 origin-right translate-x-3 translate-y-8">Scroll</span>
        <motion.div 
          animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-white/30 relative overflow-hidden mt-16"
        >
          <motion.div 
            animate={{ top: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="absolute left-0 w-full h-1/2 bg-white"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
