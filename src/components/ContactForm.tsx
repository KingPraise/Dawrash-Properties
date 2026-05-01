import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    
    setEmailError('');
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'General' }),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert('Failed to send message. Please try again or use direct contact.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 px-10 md:px-15 bg-off-white dark:bg-[#0a0a0a] transition-colors duration-300">
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
            className="bg-white dark:bg-black/40 backdrop-blur-md p-12 border border-border-custom dark:border-white/5 rounded-none shadow-2xl relative overflow-hidden group"
          >
            {/* Subtle decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-gold/10 transition-colors duration-1000" />
            
            <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[2px] font-bold text-gray-custom">First Name</label>
                  <Input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John" 
                    className="rounded-none border-0 border-b border-border-custom dark:border-white/10 focus:border-gold transition-colors h-12 px-0 bg-transparent shadow-none dark:text-white" 
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[2px] font-bold text-gray-custom">Last Name</label>
                  <Input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe" 
                    className="rounded-none border-0 border-b border-border-custom dark:border-white/10 focus:border-gold transition-colors h-12 px-0 bg-transparent shadow-none dark:text-white" 
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[2px] font-bold text-gray-custom">Email Address</label>
                <Input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  className={cn(
                    "rounded-none border-0 border-b transition-colors h-12 px-0 bg-transparent shadow-none dark:text-white",
                    emailError ? "border-red-500 focus:border-red-500" : "border-border-custom dark:border-white/10 focus:border-gold"
                  )}
                  required
                />
                {emailError && <p className="text-red-500 text-[10px] uppercase tracking-[1px] mt-1">{emailError}</p>}
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[2px] font-bold text-gray-custom">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we assist you today?" 
                  className="rounded-none border-0 border-b border-border-custom dark:border-white/10 focus:border-gold transition-colors min-h-[120px] px-0 bg-transparent shadow-none resize-none dark:text-white" 
                  required
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-16 bg-black dark:bg-white text-white dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all uppercase tracking-[3px] text-[11px] font-bold rounded-none border border-black dark:border-white group disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent' : 'Send Message'} 
                {!isSubmitting && !isSuccess && <Send size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </Button>
              {isSuccess && (
                <p className="text-gold text-[10px] uppercase tracking-[2px] text-center font-bold">
                  Thank you. Your inquiry has been received.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

