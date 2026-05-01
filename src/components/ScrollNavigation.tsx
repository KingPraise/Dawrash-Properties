import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';

export function ScrollNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const isHome = location.pathname === '/';

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'properties', label: 'Portfolio' },
    { id: 'featured', label: 'Featured' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('scroll', handleScrollSpy);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-60 origin-left"
        style={{ scaleX }}
      />

      {/* Side Navigation Dots */}
      {isHome && (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center justify-end"
            >
              <span className={cn(
                "absolute right-8 px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-[10px] uppercase tracking-[2px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none",
                activeSection === section.id && "opacity-100 translate-x-0"
              )}>
                {section.label}
              </span>
              <div className={cn(
                "w-2 h-2 rounded-full border border-gold transition-all duration-300",
                activeSection === section.id ? "bg-gold scale-150" : "bg-transparent hover:bg-gold/50"
              )} />
            </button>
          ))}
        </div>
      )}

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-4 bg-black dark:bg-white text-white dark:text-black border border-border-custom dark:border-white/10 hover:bg-gold dark:hover:bg-gold hover:text-white dark:hover:text-white transition-all duration-300 shadow-2xl"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
