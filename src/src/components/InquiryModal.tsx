import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';

export function InquiryModal({ trigger, propertyTitle }: { trigger: React.ReactElement, propertyTitle?: string }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: propertyTitle ? `I am interested in ${propertyTitle}` : ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [emailError, setEmailError] = useState('');

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
        body: JSON.stringify({ ...formData, type: propertyTitle ? 'Property Inquiry' : 'General Inquiry' }),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        setTimeout(() => {
          setIsSuccess(false);
          setIsOpen(false);
        }, 3000);
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger render={trigger} />
      <DialogContent className="max-w-md bg-white dark:bg-black border-border-custom dark:border-white/10 rounded-none p-8">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-3xl font-serif italic text-black dark:text-white">
            {propertyTitle ? 'Property Inquiry' : 'General Inquiry'}
          </DialogTitle>
          {propertyTitle && (
            <p className="text-xs uppercase tracking-[2px] text-gold font-bold mt-2">
              Regarding: {propertyTitle}
            </p>
          )}
        </DialogHeader>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[2px] font-bold text-gray-custom">First Name</label>
              <Input 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name" 
                className="rounded-none h-10 border-0 border-b border-border-custom dark:border-white/10 focus:border-gold px-0 bg-transparent shadow-none dark:text-white"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[2px] font-bold text-gray-custom">Last Name</label>
              <Input 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name" 
                className="rounded-none h-10 border-0 border-b border-border-custom dark:border-white/10 focus:border-gold px-0 bg-transparent shadow-none dark:text-white"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[2px] font-bold text-gray-custom">Email Address</label>
            <Input 
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address" 
              className={cn(
                "rounded-none h-10 border-0 border-b px-0 bg-transparent shadow-none dark:text-white",
                emailError ? "border-red-500 focus:border-red-500" : "border-border-custom dark:border-white/10 focus:border-gold"
              )}
              required
            />
            {emailError && <p className="text-red-500 text-[10px] uppercase tracking-[1px] mt-1">{emailError}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[2px] font-bold text-gray-custom">Your Message</label>
            <Textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we assist you?" 
              className="rounded-none border-0 border-b border-border-custom dark:border-white/10 focus:border-gold min-h-[100px] px-0 bg-transparent shadow-none resize-none dark:text-white"
              required
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full h-12 bg-black dark:bg-white text-white dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all uppercase tracking-[3px] text-[10px] font-bold rounded-none border border-black dark:border-white group disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : isSuccess ? 'Inquiry Sent' : 'Submit Inquiry'} 
            {!isSubmitting && !isSuccess && <Send size={12} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
          </Button>
          
          {isSuccess && (
            <p className="text-gold text-[10px] uppercase tracking-[2px] text-center font-bold animate-fade-in">
              Thank you. Our specialists will contact you shortly.
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
