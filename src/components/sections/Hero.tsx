import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image / Video Overlay */}
      <div className="absolute inset-0 z-0 bg-text-dark">
        {/* Placeholder for Hero Video/Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&q=80" 
          alt="European Estate" 
          className="w-full h-full object-cover opacity-80 mix-blend-overlay"
        />
      </div>

      <div className="container relative z-20 mx-auto px-6 text-center text-white flex flex-col items-center">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 border border-accent/50 rounded-full text-accent text-xs font-semibold tracking-widest uppercase mb-6 bg-black/20 backdrop-blur-sm">
            MahaRERA No: PP1270002600401
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg leading-tight">
            A Township Inspired<br className="hidden md:block" /> by the Old World
          </h1>
          <p className="text-lg md:text-2xl font-sans mb-10 max-w-2xl mx-auto drop-shadow-md text-white/90">
            Where every street feels like a postcard. Discover serene views, 15 acres of lush greenery, and luxury living in Wavandhal, Navi Mumbai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact">
              <Button size="lg" className="w-full sm:w-auto shadow-xl hover:scale-105 transition-transform duration-300">
                Enquire Now
              </Button>
            </a>
            <a href="#about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-black/30 backdrop-blur-sm text-white border-white/50 hover:bg-white hover:text-text-dark">
                Explore Township
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-accent transition-colors" aria-label="Scroll down">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
