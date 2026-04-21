import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { properties } from "@/data/properties";
import { SafeImage } from "./SafeImage";
import { Link } from "react-router-dom";

export function FeaturedProperty() {
  const property = properties[0]; // The luxury villa from the request

  return (
    <section
      id="featured"
      className="py-24 px-10 md:px-[60px] bg-white dark:bg-black text-black dark:text-white overflow-hidden border-y border-border-custom dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-0 items-stretch border border-border-custom dark:border-white/10">
          {/* Image Side */}
          <Link
            to={`/property/${property.slug}`}
            className="relative bg-black group block overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="h-full"
            >
              <div className="h-full overflow-hidden">
                <SafeImage
                  src="/2-1.jpg"
                  alt={property.title}
                  className="w-full h-full object-cover opacity-90 dark:opacity-70 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 to-transparent text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-[1px] bg-gold" />
                  <span className="text-[11px] uppercase tracking-[2px] font-semibold">
                    Alicante, Spain
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif italic leading-tight">
                  {property.title}
                </h2>
              </div>
            </motion.div>
          </Link>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-12 md:p-16 flex flex-col justify-between border-l border-border-custom dark:border-white/10"
          >
            <div>
              <div className="text-4xl font-serif text-gold mb-10 italic">
                €450,000
              </div>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="border-b border-border-custom dark:border-white/10 pb-4">
                  <p className="text-[10px] uppercase tracking-[1px] text-gray-custom mb-1">
                    Bedrooms
                  </p>
                  <p className="text-xl font-medium dark:text-white">03</p>
                </div>
                <div className="border-b border-border-custom dark:border-white/10 pb-4">
                  <p className="text-[10px] uppercase tracking-[1px] text-gray-custom mb-1">
                    Bathrooms
                  </p>
                  <p className="text-xl font-medium dark:text-white">02</p>
                </div>
                <div className="border-b border-border-custom dark:border-white/10 pb-4">
                  <p className="text-[10px] uppercase tracking-[1px] text-gray-custom mb-1">
                    Built Area
                  </p>
                  <p className="text-xl font-medium dark:text-white">205 m²</p>
                </div>
                <div className="border-b border-border-custom dark:border-white/10 pb-4">
                  <p className="text-[10px] uppercase tracking-[1px] text-gray-custom mb-1">
                    Plot Size
                  </p>
                  <p className="text-xl font-medium dark:text-white">245 m²</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-10">
                {property.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {property.features.slice(0, 4).map((feature) => (
                  <span
                    key={feature}
                    className="text-[10px] uppercase tracking-[1px] px-4 py-2 border border-border-custom dark:border-white/10 rounded-full text-gray-600 dark:text-gray-400"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <Link to={`/property/${property.slug}`}>
              <Button
                size="lg"
                className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all py-8 text-xs uppercase tracking-[3px] font-bold rounded-none border border-black dark:border-white group"
              >
                View Full Selection{" "}
                <ArrowRight
                  size={14}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
