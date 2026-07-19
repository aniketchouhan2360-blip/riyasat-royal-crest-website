export function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                src="https://www.youtube.com/embed/fZvL2I2mgWs?autoplay=0&controls=1&rel=0" 
                title="Riyasat Royalcrest Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Design accents */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-sm -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border border-primary/20 rounded-full -z-10" />
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary font-semibold tracking-widest uppercase text-sm">The Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-6">
              Discover the Perfect Balance of Connectivity and Tranquility
            </h2>
            <div className="space-y-4 text-text-light font-sans text-lg">
              <p>
                Spread across 15 acres of prime land, surrounded by lush greenery and just minutes away from the Expressway. Located in Wavandhal, near Panvel, Riyasat Royalcrest is inspired by timeless European elegance.
              </p>
              <p>
                Set in a coveted location, our township offers effortless access to the city's key landmarks, prestigious schools, healthcare centers, and entertainment hotspots like Imagica, Lonavala, and Matheran Hills. 
              </p>
              <p>
                Experience the ease of living just moments away from everything you need, while also enjoying the peace and privacy of your own serene sanctuary. The entire township is thoughtfully secured with boundary walls, fencing, and 24/7 CCTV surveillance.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10">
              <div className="text-center p-4 bg-white shadow-sm border border-secondary/20 rounded-sm">
                <div className="text-3xl font-serif text-primary mb-1">15</div>
                <div className="text-xs text-text-light uppercase tracking-wider">Acres Area</div>
              </div>
              <div className="text-center p-4 bg-white shadow-sm border border-secondary/20 rounded-sm">
                <div className="text-3xl font-serif text-primary mb-1">200</div>
                <div className="text-xs text-text-light uppercase tracking-wider">Residential Plots</div>
              </div>
              <div className="text-center p-4 bg-white shadow-sm border border-secondary/20 rounded-sm">
                <div className="text-3xl font-serif text-primary mb-1">12+</div>
                <div className="text-xs text-text-light uppercase tracking-wider">Amenities</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
