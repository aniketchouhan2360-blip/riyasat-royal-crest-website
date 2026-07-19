"use client";

import { Button } from "../ui/Button";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { useState, FormEvent } from "react";

export function Contact() {
  const whatsappNumber = "917742636414";

  const handleWhatsAppSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const phoneNum = formData.get("phoneNum") as string;
    const emailAddr = formData.get("emailAddr") as string;
    const budget = formData.get("budget") as string;

    // Send email via Web3Forms
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            access_key: "5b72913b-17d8-4764-a5f3-20ef7adc83c5",
            firstName,
            lastName,
            phone: phoneNum,
            email: emailAddr,
            budget,
            subject: "New Inquiry from Riyasat Royalcrest Website! (Contact Form)",
            from_name: "Royalcrest Website"
        })
      });
    } catch (error) {
      console.error(error);
    }

    // Redirect to WhatsApp
    const message = `*New Inquiry - Royal Crest*%0A%0A*Name:* ${firstName} ${lastName}%0A*Phone:* ${phoneNum}%0A*Email:* ${emailAddr}%0A*Budget:* ${budget}%0A%0A_I am interested in Royal Crest and would like to receive the brochure and layout plan._`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

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
              <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}>
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-white/60 uppercase tracking-wider font-sans mb-1">WhatsApp Us</div>
                  <div className="font-serif text-xl group-hover:text-accent transition-colors">+91 7742636414</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-white/60 uppercase tracking-wider font-sans mb-1">Call Us</div>
                  <div className="font-serif text-xl">+91 7742636414</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <MapPin className="w-5 h-5 text-accent" />
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
              <h3 className="text-3xl font-serif text-primary mb-6">Enquire on WhatsApp</h3>
              
              <form className="space-y-5 font-sans" onSubmit={handleWhatsAppSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-text-dark mb-1">First Name</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border border-secondary/30 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-text-dark mb-1">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 border border-secondary/30 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phoneNum" className="block text-sm font-medium text-text-dark mb-1">Phone Number</label>
                  <input type="tel" id="phoneNum" name="phoneNum" required className="w-full px-4 py-3 border border-secondary/30 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background" placeholder="+91 XXXXX XXXXX" />
                </div>
                
                <div>
                  <label htmlFor="emailAddr" className="block text-sm font-medium text-text-dark mb-1">Email Address</label>
                  <input type="email" id="emailAddr" name="emailAddr" required className="w-full px-4 py-3 border border-secondary/30 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-text-dark mb-1">Budget Range</label>
                  <select id="budget" name="budget" defaultValue="" className="w-full px-4 py-3 border border-secondary/30 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background text-text-dark">
                    <option value="" disabled>Select Budget</option>
                    <option value="under-50l">Under ₹50 Lacs</option>
                    <option value="50l-1cr">₹50 Lacs - ₹1 Cr</option>
                    <option value="1cr-2cr">₹1 Cr - ₹2 Cr</option>
                    <option value="above-2cr">Above ₹2 Cr</option>
                  </select>
                </div>
                
                <div className="flex items-start gap-3 text-xs text-text-light mt-6 bg-secondary/5 p-3 border border-secondary/10 rounded-sm">
                  <input type="checkbox" id="consentCheck" required className="mt-0.5" />
                  <label htmlFor="consentCheck">I consent to Riyasat Group contacting me via call, SMS, or WhatsApp regarding my inquiry.</label>
                </div>

                <Button type="submit" className="w-full mt-4 h-14 text-lg bg-[#25D366] hover:bg-[#1DA851] text-white flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Send WhatsApp Inquiry
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
