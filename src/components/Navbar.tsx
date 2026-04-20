import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { SafeImage } from './SafeImage';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Portfolio', href: '/#properties' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-10 md:px-[60px] h-20 flex items-center',
        isScrolled 
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm border-b border-border-custom dark:border-white/10' 
          : 'bg-transparent'
      )}
    >
      <div className="w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <SafeImage
            src="/logo-removebg-preview.png"
            alt="DawRash Properties logo"
            className="w-24 h-24 object-contain"
          />
          <div
            className={cn(
              "font-serif text-2xl tracking-[4px] font-bold uppercase transition-colors",
              isScrolled ? "text-black dark:text-white" : "text-white"
            )}
          >
            DawRash <span className="text-gold">Properties</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-[11px] font-semibold uppercase tracking-[2px] transition-colors hover:text-gold',
                isScrolled ? 'text-black dark:text-white' : 'text-white',
                link.name === 'Home' && !isScrolled ? 'text-gold' : ''
              )}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border-custom dark:border-white/10">
            <ThemeToggle isScrolled={isScrolled} />
            <Button 
              variant="ghost"
              className={cn(
                "uppercase tracking-[2px] text-[11px] font-semibold px-6 rounded-none border transition-all",
                isScrolled 
                  ? "text-black dark:text-white border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black" 
                  : "text-white border-white hover:bg-white hover:text-black"
              )}
            >
              Inquiry
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle isScrolled={isScrolled} />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-black dark:text-white' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-black dark:text-white' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-black shadow-xl p-6 md:hidden flex flex-col gap-4 border-b border-border-custom dark:border-white/10"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black dark:text-white text-sm font-semibold uppercase tracking-[2px] py-3 border-b border-border-custom dark:border-white/10 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
