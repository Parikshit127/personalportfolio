import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config';
import PricingCard from '../components/services/PricingCard';
import Button from '../components/ui/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="animate-fade-in-up">
      {/* Header Section */}
      <section className="container mx-auto section-padding text-center">
        <motion.h1 {...fadeInAnimation} className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
          Services & Pricing
        </motion.h1>
        <motion.p 
          {...fadeInAnimation} 
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-lg md:text-xl text-muted max-w-2xl mx-auto"
        >
          Clear, transparent pricing for projects of all sizes. Let's find the perfect fit for your needs.
        </motion.p>
      </section>

      {/* Pricing Grid */}
      <section className="container mx-auto section-padding pt-0">
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <PricingCard {...service} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Retainer Section */}
      <section className="bg-background section-padding">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeInAnimation} className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Need Ongoing Support?</h2>
              <p className="mt-4 text-lg text-muted">{siteConfig.retainer.description}</p>
              <ul className="mt-6 space-y-3">
                {siteConfig.retainer.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span className="text-muted">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center bg-white p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground">Monthly Retainer</h3>
              <p className="mt-2 text-muted">Let's build a long-term partnership to ensure your product's success.</p>
              <Button to="/contact" variant="primary" className="mt-6">
                Discuss Retainer <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
