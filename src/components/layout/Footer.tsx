export function Footer() {
  return (
    <footer className="bg-text-dark text-white font-sans border-t-[8px] border-primary">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-3xl font-serif font-bold text-accent">
                Riyasat Royalcrest
              </span>
              <span className="text-sm uppercase tracking-widest text-secondary mt-1">
                A European Township
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Experience the perfect balance of European elegance and modern connectivity in the heart of Wavandhal, Navi Mumbai.
            </p>
            <div className="flex gap-4 text-sm font-medium">
              <a href="#" className="hover:text-accent transition-colors">Facebook</a>
              <a href="#" className="hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="hover:text-accent transition-colors">Twitter</a>
              <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-6 border-b border-white/20 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About the Township</a></li>
              <li><a href="#amenities" className="hover:text-accent transition-colors">Amenities</a></li>
              <li><a href="#units" className="hover:text-accent transition-colors">Unit Configurations</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-6 border-b border-white/20 pb-2 inline-block">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">📍</span>
                <span>Riyasat Royalcrest, Vavandhal, Old Mumbai - Pune Highway, Near Panvel, Tal: Khalapur, Dist: Raigad, 410206</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">📞</span>
                <span>+91 7742636414</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">✉️</span>
                <span>sales@riyasatroyalcrest.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-6 border-b border-white/20 pb-2 inline-block">MahaRERA Info</h3>
            <div className="bg-white/5 p-4 rounded-sm border border-white/10">
              <p className="text-xs text-gray-400 leading-relaxed mb-3">
                The project is registered under MahaRERA as Riyasat Royalcrest.
              </p>
              <div className="text-white font-bold text-sm mb-3 bg-primary/20 p-2 text-center rounded border border-primary/30">
                MahaRERA No: PP1270002600401
              </div>
              <a href="https://maharera.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline block text-center">
                maharera.maharashtra.gov.in
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Riyasat Group. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
