import { motion } from 'motion/react';
import { SafeImage } from './SafeImage';

export function About() {
  return (
    <section id="about" className="py-24 px-10 md:px-[60px] bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif italic text-black dark:text-white tracking-tight mb-10 leading-tight">
              Redefining Luxury <br /> Real Estate
            </h2>
            <div className="space-y-8 text-gray-600 dark:text-gray-400 font-light leading-relaxed text-lg">
              <p>
                With over two decades of experience in the luxury market, Aureum Estate has become synonymous with excellence and exclusivity. We don't just sell properties; we curate lifestyles for the world's most discerning clients.
              </p>
              <p>
                Our portfolio features architectural masterpieces that blend seamlessly with their surroundings, offering a perfect harmony of form and function.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-16 border-t border-border-custom dark:border-white/10 pt-10">
              <div>
                <p className="text-3xl font-serif text-gold">250+</p>
                <p className="text-[10px] uppercase tracking-[2px] text-gray-custom font-bold">Properties Sold</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-gold">15</p>
                <p className="text-[10px] uppercase tracking-[2px] text-gray-custom font-bold">Award Wins</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-gold">98%</p>
                <p className="text-[10px] uppercase tracking-[2px] text-gray-custom font-bold">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden border border-border-custom dark:border-white/10 p-4 bg-off-white dark:bg-black">
              <SafeImage
                src="input_file_9.png"
                alt="Modern Architecture"
                className="w-full h-full object-cover opacity-90 dark:opacity-70"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
