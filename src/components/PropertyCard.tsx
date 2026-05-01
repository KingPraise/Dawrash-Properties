import { useState } from 'react';
import { motion } from 'motion/react';
import { Bed, Bath, MapPin, Box } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Property } from '@/data/properties';
import { PropertyViewer3D } from './PropertyViewer3D';
import { SafeImage } from './SafeImage';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
  index: number;
}

export function PropertyCard({ property, index }: PropertyCardProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  
  const formatter = new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="relative group overflow-hidden bg-black aspect-square cursor-pointer"
      >
        <Link to={`/property/${property.slug}`} className="block h-full w-full relative">
          <SafeImage 
            src={property.images[0]} 
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-40"
          />
          
          {/* Default Content (Visible initially, fades on hover) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-95 group-hover:translate-y-4">
            <h3 className="text-white text-4xl md:text-5xl font-serif italic mb-4 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
              {property.title.split(' ').slice(0, 1)} {property.type.split(' ').pop()}
            </h3>
            <div className="w-12 h-[1px] bg-gold/80 mb-4" />
            <p className="text-white/90 uppercase tracking-[5px] text-[9px] font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {property.type === 'Luxury Villa' ? 'Sprawling Estates' : 
               property.type === 'Penthouse' ? 'Sky High Living' : 
               property.type === 'Mansion' ? 'Iconic Grandeur' : 'Exceptional Residence'}
            </p>
          </div>

          {/* Hover Overlay (Fades in on hover) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out bg-black/40">
            <motion.div 
              initial={false}
              className="flex flex-col items-center w-full"
            >
              <h3 className="text-white text-3xl font-serif italic mb-6 leading-tight max-w-[320px]">
                {property.title}
              </h3>
              
              <div className="w-10 h-[1px] bg-gold/50 mb-8" />
              
              <p className="text-gold text-3xl font-serif mb-10 tabular-nums tracking-tight">
                {formatter.format(property.price)}
              </p>
              
              <div className="flex gap-10 text-white/70 text-[9px] uppercase tracking-[3px] mb-12 font-bold justify-center items-center">
                <div className="flex flex-col gap-2">
                  <span className="text-white text-base leading-none">{property.bedrooms.toString().padStart(2, '0')}</span>
                  <span className="text-[7px] opacity-60">Beds</span>
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <div className="flex flex-col gap-2">
                  <span className="text-white text-base leading-none">{property.bathrooms.toString().padStart(2, '0')}</span>
                  <span className="text-[7px] opacity-60">Baths</span>
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <div className="flex flex-col gap-2">
                  <span className="text-white text-base leading-none">{property.builtArea}</span>
                  <span className="text-[7px] opacity-60">m²</span>
                </div>
              </div>

              <div className="relative overflow-hidden group/btn px-10 py-5 border border-white/20 text-white text-[10px] uppercase tracking-[4px] font-bold transition-all hover:bg-white hover:text-black hover:border-white">
                Explore Property
              </div>
            </motion.div>
          </div>
        </Link>

        {/* 3D Button - Keep it but style differently */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            setIsViewerOpen(true);
          }}
          className="absolute bottom-6 right-6 p-4 bg-white/10 hover:bg-gold text-white backdrop-blur-md border border-white/20 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
          title="View in 3D"
        >
          <Box size={20} />
        </button>
      </motion.div>

      <PropertyViewer3D 
        isOpen={isViewerOpen} 
        onClose={() => setIsViewerOpen(false)} 
        imageUrl={property.images[0]} 
        title={property.title} 
      />
    </>
  );
}
