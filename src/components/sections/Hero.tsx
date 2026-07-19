"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Button } from "../ui/Button";

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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Parallax Video Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 w-full h-[150%] md:h-[120%] -top-[10%] pointer-events-none"
      >
        <div className="absolute inset-0 w-[300%] h-[300%] left-[-100%] top-[-100%]">
          <iframe
            src="https://www.youtube.com/embed/fZvL2I2mgWs?autoplay=1&mute=1&loop=1&playlist=fZvL2I2mgWs&controls=0&showinfo=0&rel=0&modestbranding=1"
            title="Royal Crest Township Background"
            className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 opacity-60 mix-blend-screen scale-[0.8] md:scale-[1.3]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ border: 'none' }}
          ></iframe>
        </div>
        {/* Dark radial gradient overlay for focus and text readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/20 via-black/50 to-black/90 z-10 pointer-events-none" />
      </motion.div>

      {/* Main Content with 3D Glassmorphism Panel */}
      <motion.div 
        style={{ opacity }}
        className="container relative z-20 mx-auto px-6 text-center text-white flex flex-col items-center pt-32 pb-32"
      >
        {/* Glowing floating ring behind text for 3D depth */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent/20 rounded-full blur-[100px] z-0 pointer-events-none"
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto backdrop-blur-sm bg-black/10 p-8 md:p-12 rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] mt-8"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block py-1.5 px-4 border border-accent/60 rounded-full text-accent text-xs font-semibold tracking-widest uppercase mb-8 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(202,160,82,0.3)]">
              MahaRERA No: PP1270002600401
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 drop-shadow-2xl leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60"
          >
            The Pinnacle of <br className="hidden md:block" /> European Luxury
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl font-sans mb-10 max-w-2xl mx-auto text-white/80 font-light tracking-wide leading-relaxed"
          >
            Experience 15 acres of breathtaking architecture, unmatched serenity, and world-class amenities in Navi Mumbai. Secure your legacy today.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a href="#contact" className="w-full sm:w-auto relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent via-[#e6c170] to-accent rounded-sm blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <Button size="lg" className="w-full relative px-8 py-4 h-auto text-lg tracking-wider font-semibold shadow-2xl bg-primary hover:bg-primary/90 text-white">
                Enquire Now
              </Button>
            </a>
            <a href="#about" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full px-8 py-4 h-auto text-lg tracking-wider bg-white/5 backdrop-blur-md text-white border-white/30 hover:bg-white hover:text-text-dark transition-all duration-300">
                Explore Township
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Animated Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2 font-sans font-semibold">Discover</span>
        <motion.a 
          href="#about" 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-2 hover:border-accent transition-colors"
          aria-label="Scroll down"
        >
          <motion.div 
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-3 bg-accent rounded-full"
          />
        </motion.a>
      </motion.div>
    </section>
  );
}
