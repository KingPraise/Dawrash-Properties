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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ 
          rotateY: 8, 
          rotateX: -5, 
          scale: 1.02,
          transition: { duration: 0.4, ease: "easeOut" }
        }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="perspective-1000"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <Card className="overflow-hidden border border-border-custom dark:border-white/10 shadow-none hover:shadow-2xl transition-all duration-500 group bg-white dark:bg-black rounded-none h-full flex flex-col">
          <Link to={`/property/${property.slug}`} className="relative aspect-[16/10] overflow-hidden bg-off-white dark:bg-black block">
            <SafeImage 
              src={property.images[0]} 
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
            <Badge className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 text-black dark:text-white border border-border-custom dark:border-white/10 px-3 py-1 uppercase tracking-widest text-[9px] font-bold rounded-none z-10">
              {property.type}
            </Badge>
            
            <button 
              onClick={(e) => {
                e.preventDefault();
                setIsViewerOpen(true);
              }}
              className="absolute bottom-4 right-4 p-3 bg-white/90 dark:bg-black/90 text-black dark:text-white border border-border-custom dark:border-white/10 hover:bg-gold hover:text-white transition-all duration-300 z-10"
              title="View in 3D"
            >
              <Box size={16} />
            </button>
          </Link>
          
          <CardContent className="p-8 flex-grow">
            <div className="flex items-center gap-2 text-gray-custom mb-3">
              <MapPin size={12} />
              <span className="text-[10px] uppercase tracking-[2px] font-semibold">{property.location}</span>
            </div>
            <Link to={`/property/${property.slug}`}>
              <h3 className="text-2xl font-serif italic text-black dark:text-white mb-4 group-hover:text-gold transition-colors">
                {property.title}
              </h3>
            </Link>
            <p className="text-3xl font-serif text-gold mb-8">
              {formatter.format(property.price)}
            </p>
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border-custom dark:border-white/10 pt-6">
              <div className="border-b border-border-custom dark:border-white/10 pb-3">
                <p className="text-[9px] uppercase tracking-[1px] text-gray-custom mb-1">Bedrooms</p>
                <p className="text-lg font-medium dark:text-white">{property.bedrooms.toString().padStart(2, '0')}</p>
              </div>
              <div className="border-b border-border-custom dark:border-white/10 pb-3">
                <p className="text-[9px] uppercase tracking-[1px] text-gray-custom mb-1">Bathrooms</p>
                <p className="text-lg font-medium dark:text-white">{property.bathrooms.toString().padStart(2, '0')}</p>
              </div>
              <div className="border-b border-border-custom dark:border-white/10 pb-3">
                <p className="text-[9px] uppercase tracking-[1px] text-gray-custom mb-1">Built Area</p>
                <p className="text-lg font-medium dark:text-white">{property.builtArea} m²</p>
              </div>
              <div className="border-b border-border-custom dark:border-white/10 pb-3">
                <p className="text-[9px] uppercase tracking-[1px] text-gray-custom mb-1">Plot Size</p>
                <p className="text-lg font-medium dark:text-white">{property.plotArea} m²</p>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="px-8 pb-8 pt-0">
            <Link to={`/property/${property.slug}`} className="w-full">
              <button className="w-full py-4 bg-black dark:bg-white text-white dark:text-black text-[11px] uppercase tracking-[3px] font-bold border border-black dark:border-white hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all duration-300">
                View Full Details
              </button>
            </Link>
          </CardFooter>
        </Card>
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
