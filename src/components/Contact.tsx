
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
  };
  
  return (
    <section id="contact" className="elegant-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mb-12">
            Let's discuss how we can transform your space
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-playfair font-medium mb-4 text-elegant-taupe">Visit Our Studio</h3>
              <address className="not-italic text-elegant-charcoal/80 leading-relaxed">
                123 Design Avenue<br />
                New York, NY 10001<br />
                United States
              </address>
            </div>
            
            <div>
              <h3 className="text-xl font-playfair font-medium mb-4 text-elegant-taupe">Contact Information</h3>
              <p className="text-elegant-charcoal/80 leading-relaxed">
                Email: info@elegantinteriors.com<br />
                Phone: +1 (555) 123-4567<br />
                Hours: Monday-Friday, 9am-6pm
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 shadow-md">
          <h3 className="text-2xl font-playfair font-medium mb-6 text-elegant-taupe">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-elegant-charcoal">Name</label>
                <Input 
                  id="name" 
                  placeholder="Your Name" 
                  className="bg-elegant-cream border-elegant-taupe/20 focus:border-elegant-gold focus:ring-0"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-elegant-charcoal">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-elegant-cream border-elegant-taupe/20 focus:border-elegant-gold focus:ring-0"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1 text-elegant-charcoal">Subject</label>
              <Input 
                id="subject" 
                placeholder="Subject" 
                className="bg-elegant-cream border-elegant-taupe/20 focus:border-elegant-gold focus:ring-0"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-elegant-charcoal">Message</label>
              <Textarea 
                id="message" 
                placeholder="Your Message" 
                className="min-h-32 bg-elegant-cream border-elegant-taupe/20 focus:border-elegant-gold focus:ring-0"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-elegant-gold hover:bg-elegant-gold/90 text-white"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
