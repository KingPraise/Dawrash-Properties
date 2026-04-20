import { useState } from 'react';
import { motion } from 'motion/react';
import { PropertyCard } from './PropertyCard';
import { properties } from '@/data/properties';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ListingsGrid() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Luxury Villa', 'Mansion', 'Penthouse'];

  const filteredProperties = filter === 'All' 
    ? properties 
    : properties.filter(p => p.type === filter);

  return (
    <section id="properties" className="py-24 px-10 md:px-[60px] bg-off-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif italic text-black dark:text-white tracking-tight mb-12"
          >
            Exclusive Portfolio
          </motion.h2>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "uppercase tracking-[2px] text-[11px] font-bold transition-all pb-2 border-b-2",
                  filter === cat 
                    ? "text-gold border-gold" 
                    : "text-gray-custom border-transparent hover:text-black dark:hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
        
        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-custom uppercase tracking-[2px] text-xs">No properties found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
