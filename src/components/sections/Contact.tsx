"use client";

import { Button } from "../ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          <div className="text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-accent"></div>
              <span className="text-accent font-semibold tracking-widest uppercase text-sm">Get in Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Begin Your Journey to a European Lifestyle
            </h2>
            <p className="font-sans text-white/80 text-lg mb-8 max-w-md">
              Register your interest to receive our detailed brochure, layout plan, and exclusive pricing for Riyasat Royalcrest.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <span className="text-accent text-xl">📞</span>
                </div>
                <div>
                  <div className="text-xs text-white/60 uppercase tracking-wider font-sans mb-1">Call Us</div>
                  <div className="font-serif text-xl">+91 7742636414</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <span className="text-accent text-xl">📍</span>
                </div>
                <div>
                  <div className="text-xs text-white/60 uppercase tracking-wider font-sans mb-1">Site Address</div>
                  <div className="font-sans text-sm text-white/90 max-w-[250px]">Vavandhal, Old Mumbai - Pune Highway, Near Panvel, Raigad</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-sm shadow-2xl relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-serif text-primary mb-6">Enquire Now</h3>
              
              <form className="space-y-5 font-sans" action="/api/lead" method="POST" onSubmit={(e) => { e.preventDefault(); alert("Form submitted! We will contact you soon."); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-text-dark mb-1">First Name</label>
                    <input type="text" id="firstName" required className="w-full px-4 py-3 border border-secondary/30 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-text-dark mb-1">Last Name</label>
                    <input type="text" id="lastName" required className="w-full px-4 py-3 border border-secondary/30 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phoneNum" className="block text-sm font-medium text-text-dark mb-1">Phone Number</label>
                  <input type="tel" id="phoneNum" required className="w-full px-4 py-3 border border-secondary/30 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background" placeholder="+91 XXXXX XXXXX" />
                </div>
                
                <div>
                  <label htmlFor="emailAddr" className="block text-sm font-medium text-text-dark mb-1">Email Address</label>
                  <input type="email" id="emailAddr" required className="w-full px-4 py-3 border border-secondary/30 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-text-dark mb-1">Budget Range</label>
                  <select id="budget" className="w-full px-4 py-3 border border-secondary/30 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background text-text-dark">
                    <option value="" disabled selected>Select Budget</option>
                    <option value="under-50l">Under ₹50 Lacs</option>
                    <option value="50l-1cr">₹50 Lacs - ₹1 Cr</option>
                    <option value="1cr-2cr">₹1 Cr - ₹2 Cr</option>
                    <option value="above-2cr">Above ₹2 Cr</option>
                  </select>
                </div>
                
                <div className="flex items-start gap-3 text-xs text-text-light mt-6 bg-secondary/5 p-3 border border-secondary/10 rounded-sm">
                  <input type="checkbox" id="consentCheck" required className="mt-0.5" />
                  <label htmlFor="consentCheck">I consent to Riyasat Group contacting me via call, SMS, or WhatsApp regarding my inquiry. (Required for Meta Lead Ads compliance)</label>
                </div>

                <Button type="submit" className="w-full mt-4 h-14 text-lg">
                  Get Information
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
