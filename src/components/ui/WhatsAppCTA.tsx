"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppCTA() {
  return (
    <a
      href="https://wa.me/917742636414?text=Hi,%20I'm%20interested%20in%20Royal%20Crest%20by%20Riyasat"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#1DA851] transition-transform hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-sans font-medium">
        <span className="pl-2 pr-1">Enquire on WhatsApp</span>
      </span>
    </a>
  );
}
