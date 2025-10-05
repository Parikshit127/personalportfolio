import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import { siteConfig } from '../config';
import ProjectCard from '../components/projects/ProjectCard';
import ParticleBackground from '../components/ui/ParticleBackground';
import AnimatedSection from '../components/ui/AnimatedSection';

const scrollAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Home: React.FC = () => {
  const featuredProjects = siteConfig.projects.slice(0, 3);

  return (
    <div className="relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="container mx-auto section-padding relative z-10">
        <div className="text-center flex flex-col items-center">
          {/* Floating Icons */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="mb-8 flex gap-4 justify-center"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="p-3 rounded-full bg-primary/10 border border-primary/20"
            >
              <Code className="w-6 h-6 text-primary" />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="p-3 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles className="w-6 h-6 text-primary" />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 8, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="p-3 rounded-full bg-primary/10 border border-primary/20"
            >
              <Zap className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-foreground max-w-5xl relative"
          >
            <motion.span 
              className="text-primary relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {siteConfig.headline.split(' ')[0]}
              <motion.div
                className="absolute -inset-1 bg-primary/20 rounded-lg blur-sm -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              />
            </motion.span>
            <br />
            <span className="text-foreground">
              {siteConfig.headline.substring(siteConfig.headline.indexOf(' ') + 1)}
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            {siteConfig.pitch}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button to="/contact" variant="primary">
                Book a Call <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button to="/projects" variant="secondary">
                View My Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-16 flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-muted-foreground/60 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto section-padding pt-0 relative z-10">
        <AnimatedSection delay={0.2} className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">Selected Works</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A collection of projects where I've had a tangible impact.</p>
        </AnimatedSection>
        
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1 + 0.4}>
              <ProjectCard project={project} index={index} />
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.8} className="mt-16 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button to="/projects" variant="secondary">See All Projects</Button>
          </motion.div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Home;
