import { 
  ShoppingBag, 
  Footprints, 
  Building2, 
  Waves, 
  Flower2, 
  Dumbbell, 
  Trophy, 
  Church, 
  TreePine, 
  Activity, 
  Baby 
} from "lucide-react";

export function Amenities() {
  const amenitiesList = [
    { name: "Convenience Shopping Plaza", icon: ShoppingBag },
    { name: "Jogging Track", icon: Footprints },
    { name: "Multipurpose Club House", icon: Building2 },
    { name: "Swimming Pool", icon: Waves },
    { name: "Yoga & Meditation Court", icon: Flower2 },
    { name: "Multipurpose Court", icon: Dumbbell },
    { name: "Cricket Turf", icon: Trophy },
    { name: "Temple", icon: Church },
    { name: "Pergola", icon: TreePine },
    { name: "Open Gym", icon: Activity },
    { name: "Kids Play Area", icon: Baby },
  ];

  return (
    <section id="amenities" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">Lifestyle</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-6">
            World-Class Amenities
          </h2>
          <p className="text-text-light font-sans text-lg">
            Experience a curated selection of leisure and wellness amenities designed to elevate your everyday living.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {amenitiesList.map((amenity, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center p-8 border border-secondary/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 rounded-sm bg-background/50 hover:bg-white"
            >
              <div className="w-16 h-16 bg-primary/5 group-hover:bg-primary/10 rounded-full flex items-center justify-center mb-4 transition-colors">
                <amenity.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg text-text-dark group-hover:text-primary transition-colors">
                {amenity.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
