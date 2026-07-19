import { MapPin, Train, Plane, Building, BookOpen } from "lucide-react";

export function Location() {
  const connectivity = [
    { icon: Train, name: "Chowk Railway Station", time: "6 minutes" },
    { icon: MapPin, name: "Mumbai – Pune Expressway", time: "15 minutes" },
    { icon: Train, name: "Karjat Railway Station", time: "20 minutes" },
    { icon: Train, name: "Panvel Junction", time: "38 minutes" },
    { icon: Plane, name: "Navi Mumbai Int. Airport", time: "40 minutes" },
    { icon: MapPin, name: "MTHL (Atal Setu)", time: "45 minutes" },
    { icon: Building, name: "South Mumbai", time: "70 minutes" },
    { icon: BookOpen, name: "Pillai University", time: "15 minutes" },
    { icon: BookOpen, name: "Chhatrapati Shivaji Maharaj University", time: "18 minutes" },
    { icon: BookOpen, name: "Amity University", time: "20 minutes" },
  ];

  return (
    <section id="location" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">Location</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-6">
            Site Location & Access
          </h2>
          <p className="text-text-light font-sans text-lg">
            Riyasat Royalcrest, Vavandhal, Old Mumbai - Pune Highway, Near Panvel, Tal: Khalapur, Dist: Raigad, 410206
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="h-[450px] bg-secondary/10 rounded-sm overflow-hidden shadow-lg border border-secondary/20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4645.016856932381!2d73.2751462!3d18.887177599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e3187d24f64b%3A0x7e0006344918354e!2sRiyasat%20Royalcrest!5e1!3m2!1sen!2sin!4v1778843133875!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-serif text-primary mb-8 border-b border-secondary/30 pb-4">
              Seamless Connectivity
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              {connectivity.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-text-dark text-sm">{item.name}</h4>
                    <span className="font-sans text-xs text-text-light">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
