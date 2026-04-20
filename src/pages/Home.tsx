import { Hero } from '../components/Hero';
import { ListingsGrid } from '../components/ListingsGrid';
import { FeaturedProperty } from '../components/FeaturedProperty';
import { About } from '../components/About';
import { ContactForm } from '../components/ContactForm';
import { ScrollNavigation } from '../components/ScrollNavigation';
import { motion } from 'motion/react';

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollNavigation />
      <main>
        <Hero />
        <ListingsGrid />
        <FeaturedProperty />
        <About />
        <ContactForm />
      </main>
    </motion.div>
  );
}
