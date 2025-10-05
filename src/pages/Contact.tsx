import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config';
import ContactForm from '../components/contact/ContactForm';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="container mx-auto section-padding animate-fade-in-up">
      <motion.div {...fadeInAnimation} className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">Let's Build Something Great</h1>
        <p className="mt-4 text-lg md:text-xl text-muted max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
        {/* Contact Form */}
        <motion.div 
          {...fadeInAnimation} 
          transition={{ delay: 0.2, duration: 0.5 }}
          className="lg:col-span-3 bg-background p-8 rounded-lg border border-border"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Send me a message</h2>
          <ContactForm />
        </motion.div>

        {/* Contact Info & CTA */}
        <motion.div 
          {...fadeInAnimation} 
          transition={{ delay: 0.4, duration: 0.5 }}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>
            <div className="mt-4 space-y-3">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center text-muted hover:text-primary transition-colors">
                <Mail className="w-5 h-5 mr-3" />
                <span>{siteConfig.email}</span>
              </a>
              {/* Add phone if available */}
              {/* <div className="flex items-center text-muted">
                <Phone className="w-5 h-5 mr-3" />
                <span>+1 (123) 456-7890</span>
              </div> */}
            </div>
          </div>

          <div className="bg-background p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold text-foreground">Book a Free Call</h3>
            <p className="mt-2 text-muted">Schedule a no-obligation 30-minute discovery call to discuss your project.</p>
            <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="mt-4 w-full">
                Schedule Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>

          <div className="bg-background p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold text-foreground">Paid Strategy Session</h3>
            <p className="mt-2 text-muted">Need in-depth advice or a technical consultation? Book a paid strategy session.</p>
             {/* This button is a placeholder. Stripe integration would be added here. */}
            <Button variant="secondary" className="mt-4 w-full" onClick={() => alert('Stripe integration coming soon!')}>
              Book Paid Session
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
