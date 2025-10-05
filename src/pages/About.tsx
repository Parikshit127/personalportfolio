import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { siteConfig } from '../config';
import TimelineItem from '../components/about/TimelineItem';
import Button from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" }
    })
  };

  return (
    <div>
      {/* Bio Section */}
      <section className="container mx-auto section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            variants={scrollAnimation}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground"
          >
            A bit about me.
          </motion.h1>
          <motion.div 
            variants={scrollAnimation}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              {siteConfig.bio}
            </p>
            <div className="mt-8">
              <Button to="/contact" variant="primary">
                Let's Connect <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            variants={scrollAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl font-bold tracking-tight text-foreground"
          >
            My Journey
          </motion.h2>
          <motion.div 
            className="mt-8 relative border-l-2 border-border"
          >
            {siteConfig.timeline.map((item, index) => (
              <TimelineItem key={index} {...item} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            variants={scrollAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl font-bold tracking-tight text-foreground text-center"
          >
            How I Work
          </motion.h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {siteConfig.values.map((value, index) => {
              const Icon = LucideIcons[value.icon as keyof typeof LucideIcons] || LucideIcons.Code;
              return (
                <motion.div 
                  key={value.title}
                  variants={scrollAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={index * 0.1}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-primary/10 text-primary rounded-full">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Failure Story Section */}
      <section className="bg-border/20 section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h2 
            variants={scrollAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl font-bold tracking-tight text-foreground"
          >
            Learning From Failure
          </motion.h2>
          <motion.div 
            variants={scrollAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0.2}
            className="mt-8"
          >
            <blockquote className="border-l-4 border-primary p-6 bg-background rounded-r-lg text-left">
              <h4 className="font-semibold text-lg text-foreground">{siteConfig.failureStory.title}</h4>
              <p className="mt-2 text-muted-foreground">{siteConfig.failureStory.story}</p>
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
