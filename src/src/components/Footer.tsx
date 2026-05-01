import { Home, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SafeImage } from './SafeImage';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-24 pb-12 px-10 md:px-[60px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <div className="font-serif text-2xl tracking-[4px] font-bold uppercase">
              DawRash <span className="text-gold">Properties</span>
            </div>
            <p className="text-gray-custom font-light leading-relaxed text-sm">
              The world's leading luxury real estate marketplace. We connect the most prestigious properties with the most discerning buyers.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-custom hover:text-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-custom hover:text-gold transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-custom hover:text-gold transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-custom hover:text-gold transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[3px] font-bold mb-10 text-gold">Quick Links</h4>
            <ul className="space-y-5">
              {['Home', 'Properties', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-custom hover:text-white transition-colors font-medium uppercase tracking-[2px] text-[10px]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[3px] font-bold mb-10 text-gold">Collections</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-16 h-10 overflow-hidden border border-white/10">
                  <SafeImage src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" alt="Marbella Lofts" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-[10px] uppercase tracking-[1px] text-gray-custom group-hover:text-white transition-colors">Marbella Lofts</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-16 h-10 overflow-hidden border border-white/10">
                  <SafeImage src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" alt="Valencia Manor" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-[10px] uppercase tracking-[1px] text-gray-custom group-hover:text-white transition-colors">Valencia Manor</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-16 h-10 overflow-hidden border border-white/10">
                  <SafeImage src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" alt="Ibiza Retreat" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-[10px] uppercase tracking-[1px] text-gray-custom group-hover:text-white transition-colors">Ibiza Retreat</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-right flex flex-col items-end">
            <h4 className="text-[10px] uppercase tracking-[3px] font-bold mb-10 text-gold">Concierge</h4>
            <p className="text-2xl font-serif italic mb-2">+34 900 123 456</p>
            <p className="text-[10px] uppercase tracking-[2px] text-gray-custom">Private Concierge 24/7</p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-custom text-[10px] uppercase tracking-[2px]">
            © {currentYear} DawRash Real Estates. All rights reserved.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-gray-custom hover:text-white text-[10px] uppercase tracking-[2px] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-custom hover:text-white text-[10px] uppercase tracking-[2px] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
