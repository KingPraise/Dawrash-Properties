import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { SafeImage } from "./SafeImage";
import { useState, useEffect } from "react";
import { InquiryModal } from "./InquiryModal";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: "video",
      src: "https://res.cloudinary.com/dkayul64b/video/upload/v1777367530/0428_1_etqjmc.mp4",
    },
    {
      type: "image",
      src: "/image 1 upscaled.png",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Change slide every 8 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            {slide.type === "video" ? (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-90 dark:opacity-70"
              />
            ) : (
              <SafeImage
                src={slide.src}
                alt="Luxury Villa Exterior"
                className="w-full h-full object-cover opacity-90 dark:opacity-70 transition-opacity duration-1000"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 dark:from-black/80 dark:via-black/40 dark:to-black/80" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-left px-10 md:px-[60px] w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[1px] bg-gold" />
            <span className="text-white font-medium tracking-[2px] uppercase text-sm">
              Alicante, Spain
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif italic text-white leading-[1.1] mb-10">
            DawRash <br />
            Real Estates
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <InquiryModal 
              trigger={
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-white hover:text-black transition-all px-12 py-8 text-xs uppercase tracking-[3px] font-bold rounded-none border border-black"
                >
                  Request Property Details
                </Button>
              }
            />
            <div className="text-white/80 font-serif text-2xl italic">
              Starting from €450,000
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center gap-2 opacity-60"
      >
        <span className="text-[10px] uppercase tracking-[4px]">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
