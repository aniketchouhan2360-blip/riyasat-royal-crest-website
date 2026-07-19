import { Button } from "../ui/Button";
import { Check } from "lucide-react";

export function UnitTypes() {
  return (
    <section id="units" className="py-24 bg-background border-y border-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">Configurations</span>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-6">
            Luxury Residential Plots
          </h2>
          <p className="text-text-light font-sans text-lg">
            Choose from a variety of plot sizes to build your dream European-style villa exactly the way you envision it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Base Plot */}
          <div className="bg-white p-8 rounded-sm shadow-md border border-secondary/20 hover:border-accent transition-colors flex flex-col">
            <h3 className="text-2xl font-serif text-primary mb-2">Standard Plot</h3>
            <div className="text-text-light font-sans text-sm mb-6 pb-6 border-b border-secondary/20">
              Perfect for a cozy villa with a private garden.
            </div>
            <div className="flex-grow">
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold font-sans text-text-dark">1,119</span>
                <span className="text-text-light mb-1">sq. ft.</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-text-dark font-sans">
                  <Check className="w-5 h-5 text-accent" /> FSI Approved
                </li>
                <li className="flex items-center gap-3 text-sm text-text-dark font-sans">
                  <Check className="w-5 h-5 text-accent" /> Vastu Compliant
                </li>
                <li className="flex items-center gap-3 text-sm text-text-dark font-sans">
                  <Check className="w-5 h-5 text-accent" /> Water & Electricity Connection
                </li>
              </ul>
            </div>
            <a href="#contact" className="mt-auto">
              <Button variant="outline" className="w-full">Request Pricing</Button>
            </a>
          </div>

          {/* Premium Plot (Highlighted) */}
          <div className="bg-primary p-8 rounded-sm shadow-xl flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-text-dark text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
              Most Popular
            </div>
            <h3 className="text-2xl font-serif text-white mb-2">Premium Plot</h3>
            <div className="text-white/80 font-sans text-sm mb-6 pb-6 border-b border-white/20">
              Spacious area for a luxury villa with additional amenities.
            </div>
            <div className="flex-grow">
              <div className="flex items-end gap-1 mb-6 text-white">
                <span className="text-4xl font-bold font-sans">2,500</span>
                <span className="text-white/80 mb-1">sq. ft. (approx)</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-white font-sans">
                  <Check className="w-5 h-5 text-accent" /> Premium Location
                </li>
                <li className="flex items-center gap-3 text-sm text-white font-sans">
                  <Check className="w-5 h-5 text-accent" /> Corner Plot Options
                </li>
                <li className="flex items-center gap-3 text-sm text-white font-sans">
                  <Check className="w-5 h-5 text-accent" /> Proximity to Club House
                </li>
                <li className="flex items-center gap-3 text-sm text-white font-sans">
                  <Check className="w-5 h-5 text-accent" /> Ready for Registry
                </li>
              </ul>
            </div>
            <a href="#contact" className="mt-auto">
              <Button variant="secondary" className="w-full bg-accent text-text-dark hover:bg-accent-light hover:text-text-dark">
                Enquire Now
              </Button>
            </a>
          </div>

          {/* Estate Plot */}
          <div className="bg-white p-8 rounded-sm shadow-md border border-secondary/20 hover:border-accent transition-colors flex flex-col">
            <h3 className="text-2xl font-serif text-primary mb-2">Estate Plot</h3>
            <div className="text-text-light font-sans text-sm mb-6 pb-6 border-b border-secondary/20">
              The ultimate canvas for a grand European mansion.
            </div>
            <div className="flex-grow">
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold font-sans text-text-dark">5,000</span>
                <span className="text-text-light mb-1">sq. ft.</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-text-dark font-sans">
                  <Check className="w-5 h-5 text-accent" /> Unmatched Privacy
                </li>
                <li className="flex items-center gap-3 text-sm text-text-dark font-sans">
                  <Check className="w-5 h-5 text-accent" /> Scenic Views
                </li>
                <li className="flex items-center gap-3 text-sm text-text-dark font-sans">
                  <Check className="w-5 h-5 text-accent" /> Maximum FSI Benefits
                </li>
              </ul>
            </div>
            <a href="#contact" className="mt-auto">
              <Button variant="outline" className="w-full">Request Pricing</Button>
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center text-sm text-text-light font-sans max-w-2xl mx-auto">
          *Also offering 7 exclusive commercial plots. Areas mentioned are approximate. Please refer to the official MahaRERA documentation for exact measurements.
        </div>
      </div>
    </section>
  );
}
