"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./Button";

export function InquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // Popup after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-md bg-surface p-8 shadow-2xl rounded-sm">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-text-light hover:text-text-dark transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-3xl font-serif text-primary mb-2">Enquire Now</h2>
          <p className="text-text-light text-sm font-sans">
            Register your interest in Riyasat Royalcrest and our team will get back to you shortly.
          </p>
        </div>

        <form className="space-y-4 font-sans" action="/api/lead" method="POST" onSubmit={(e) => { e.preventDefault(); alert("Form submitted! We will contact you soon."); setIsOpen(false); }}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-1">Full Name</label>
            <input type="text" id="name" required className="w-full px-4 py-2 border border-secondary/30 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="John Doe" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-1">Phone Number</label>
            <input type="tel" id="phone" required className="w-full px-4 py-2 border border-secondary/30 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="+91 XXXXX XXXXX" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1">Email Address</label>
            <input type="email" id="email" required className="w-full px-4 py-2 border border-secondary/30 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="john@example.com" />
          </div>
          
          <div className="flex items-start gap-2 text-xs text-text-light mt-4">
            <input type="checkbox" id="consent" required className="mt-1" />
            <label htmlFor="consent">I consent to Riyasat Group contacting me regarding my inquiry. (Required for Meta Lead Ads compliance)</label>
          </div>

          <Button type="submit" className="w-full mt-4 text-lg">
            Submit Inquiry
          </Button>
        </form>
      </div>
    </div>
  );
}
