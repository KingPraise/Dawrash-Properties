import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { motion } from 'motion/react';
import { Bed, Bath, Square, MapPin, ArrowLeft, Check, Phone, Mail } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export function PropertyDetail() {
  const { slug } = useParams();
  const property = properties.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center p-10">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-6">Property Not Found</h1>
          <Link to="/" className="text-gold uppercase tracking-[2px] text-sm font-bold border-b border-gold">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const formatter = new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-black pt-24"
    >
      {/* Header Section */}
      <section className="px-10 md:px-[60px] py-16 max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-custom hover:text-gold transition-colors mb-10 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] uppercase tracking-[2px] font-bold">Back to Portfolio</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="text-gray-custom font-medium tracking-[2px] uppercase text-[10px]">
                {property.location}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif italic text-black dark:text-white leading-[1.1]">
              {property.title}
            </h1>
          </div>
          <div className="lg:text-right">
            <p className="text-gray-custom text-[10px] uppercase tracking-[3px] mb-2">Asking Price</p>
            <p className="text-5xl font-serif text-gold">{formatter.format(property.price)}</p>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="px-10 md:px-[60px] mb-24 overflow-hidden">
        <div className="aspect-[21/9] w-full max-w-7xl mx-auto overflow-hidden border border-border-custom dark:border-white/10 group">
          <SafeImage
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
        </div>
      </section>

      {/* Details Grid & Description */}
      <section className="px-10 md:px-[60px] py-20 bg-off-white dark:bg-[#0a0a0a] border-y border-border-custom dark:border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-24">
          <div className="space-y-12">
            <div>
              <h2 className="text-[11px] uppercase tracking-[4px] font-bold text-gray-custom mb-10 border-b border-border-custom dark:border-white/10 pb-4">Overview</h2>
              <div className="prose dark:prose-invert max-w-none">
                {property.description.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-lg text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
              {property.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 flex items-center justify-center border border-gold/30 text-gold group-hover:bg-gold group-hover:text-white transition-all">
                    <Check size={14} />
                  </div>
                  <span className="text-sm font-medium tracking-wide uppercase text-gray-800 dark:text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-12">
            <div className="bg-white dark:bg-black p-10 border border-border-custom dark:border-white/10 shadow-xl">
              <h3 className="text-[11px] uppercase tracking-[4px] font-bold text-gold mb-10">Property Specifications</h3>
              <div className="space-y-8">
                {[
                  { label: 'Bedrooms', value: property.bedrooms, icon: Bed },
                  { label: 'Bathrooms', value: property.bathrooms, icon: Bath },
                  { label: 'Built Area', value: `${property.builtArea} m²`, icon: Square },
                  { label: 'Plot Area', value: `${property.plotArea} m²`, icon: Square },
                  { label: 'ID Number', value: property.id.padStart(4, '0'), icon: MapPin },
                ].map((spec, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-border-custom dark:border-white/10 pb-4">
                    <div className="flex items-center gap-4">
                      <spec.icon size={16} className="text-gold" />
                      <span className="text-[10px] uppercase tracking-[2px] text-gray-custom">{spec.label}</span>
                    </div>
                    <span className="text-lg font-serif italic dark:text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black text-white p-10">
              <h3 className="text-[11px] uppercase tracking-[4px] font-bold text-gold mb-10">Inquire Now</h3>
              <p className="text-gray-custom text-sm mb-10 font-light">
                Secure your private viewing for this exclusive property. Our associates are available 24/7.
              </p>
              <div className="space-y-6">
                <Button className="w-full h-14 bg-white text-black hover:bg-gold hover:text-white transition-all uppercase tracking-[3px] text-[10px] font-bold rounded-none">
                  <Phone size={14} className="mr-2" /> Call Agent
                </Button>
                <Button className="w-full h-14 bg-transparent border border-white/20 hover:border-white transition-all uppercase tracking-[3px] text-[10px] font-bold rounded-none">
                  <Mail size={14} className="mr-2" /> Message Seller
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-10 md:px-[60px] py-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif italic mb-16 dark:text-white">Living Spaces</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {property.images.slice(1).map((image, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="aspect-[4/3] overflow-hidden border border-border-custom dark:border-white/10"
            >
              <SafeImage
                src={image}
                alt={`${property.title} view ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-10 md:px-[60px] py-32 bg-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-10">
            Ready to experience <br /> {property.title}?
          </h2>
          <Button className="h-16 px-16 bg-gold text-white hover:bg-white hover:text-black transition-all uppercase tracking-[4px] text-xs font-bold rounded-none">
            Schedule a Private Tour
          </Button>
        </div>
      </section>
    </motion.div>
  );
}
