import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  return (
    <section id="contact" className="py-24 px-10 md:px-[60px] bg-off-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif italic text-black dark:text-white tracking-tight mb-10 leading-tight">
              Let's Start a <br /> Conversation
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16 font-light text-lg leading-relaxed">
              Interested in one of our properties or want to list yours? Our team of experts is ready to assist you with every step of the process.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-8 border-b border-border-custom dark:border-white/10 pb-8">
                <div className="w-12 h-12 rounded-none bg-white dark:bg-black border border-border-custom dark:border-white/10 flex items-center justify-center text-gold flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[2px] text-gray-custom font-bold mb-2">Mobile / WhatsApp</p>
                  <p className="text-xl font-serif italic text-black dark:text-white">+234 903 665 6251</p>
                </div>
              </div>
              
              <div className="flex items-start gap-8 border-b border-border-custom dark:border-white/10 pb-8">
                <div className="w-12 h-12 rounded-none bg-white dark:bg-black border border-border-custom dark:border-white/10 flex items-center justify-center text-gold flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[2px] text-gray-custom font-bold mb-2">Email Inquiry</p>
                  <p className="text-xl font-serif italic text-black dark:text-white">ojosepholuwaseun@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-12 h-12 rounded-none bg-white dark:bg-black border border-border-custom dark:border-white/10 flex items-center justify-center text-gold flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[2px] text-gray-custom font-bold mb-2">Office Address</p>
                  <p className="text-xl font-serif italic text-black dark:text-white">Carrer Conrado del Campo, 16 <br /> 03204 Elx, Alicante</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-black p-12 border border-border-custom dark:border-white/10 rounded-none"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[2px] font-bold text-gray-custom">First Name</label>
                  <Input placeholder="John" className="rounded-none border-0 border-b border-border-custom dark:border-white/10 focus:border-gold transition-colors h-12 px-0 bg-transparent shadow-none dark:text-white" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[2px] font-bold text-gray-custom">Last Name</label>
                  <Input placeholder="Doe" className="rounded-none border-0 border-b border-border-custom dark:border-white/10 focus:border-gold transition-colors h-12 px-0 bg-transparent shadow-none dark:text-white" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[2px] font-bold text-gray-custom">Email Address</label>
                <Input type="email" placeholder="john@example.com" className="rounded-none border-0 border-b border-border-custom dark:border-white/10 focus:border-gold transition-colors h-12 px-0 bg-transparent shadow-none dark:text-white" />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[2px] font-bold text-gray-custom">Message</label>
                <Textarea placeholder="How can we assist you today?" className="rounded-none border-0 border-b border-border-custom dark:border-white/10 focus:border-gold transition-colors min-h-[120px] px-0 bg-transparent shadow-none resize-none dark:text-white" />
              </div>

              <Button className="w-full h-16 bg-black dark:bg-white text-white dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all uppercase tracking-[3px] text-[11px] font-bold rounded-none border border-black dark:border-white group">
                Send Message <Send size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
