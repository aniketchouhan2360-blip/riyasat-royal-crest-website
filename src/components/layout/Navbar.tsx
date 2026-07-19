"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Amenities", href: "#amenities" },
    { name: "Unit Types", href: "#units" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 font-sans ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          {/* Logo placeholder - using text if logo image is not present */}
          <div className="flex flex-col">
            <span className={`text-2xl font-serif font-bold ${isScrolled ? "text-primary" : "text-white drop-shadow-md"}`}>
              Riyasat Royalcrest
            </span>
            <span className={`text-xs uppercase tracking-widest ${isScrolled ? "text-secondary" : "text-white/80"}`}>
              Navi Mumbai
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? "text-text-dark" : "text-white drop-shadow-md"}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact">
            <Button variant={isScrolled ? "primary" : "secondary"} size="sm">
              Enquire Now
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-primary" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-primary" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-lg font-serif text-text-dark border-b border-secondary/20 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full mt-4">Enquire Now</Button>
          </a>
        </div>
      )}
    </nav>
  );
}
