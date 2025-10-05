import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { siteConfig } from '../config';
import ProjectCard from '../components/projects/ProjectCard';

const scrollAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Home: React.FC = () => {
  const featuredProjects = siteConfig.projects.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto section-padding">
        <div className="text-center flex flex-col items-center">
            <motion.h1 
              variants={scrollAnimation}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-foreground max-w-5xl"
            >
              <span className="text-primary">{siteConfig.headline.split(' ')[0]}</span> {siteConfig.headline.substring(siteConfig.headline.indexOf(' ') + 1)}
            </motion.h1>
            <motion.p 
              variants={scrollAnimation}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl"
            >
              {siteConfig.pitch}
            </motion.p>
            <motion.div 
              variants={scrollAnimation}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button to="/contact" variant="primary">
                Book a Call <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button to="/projects" variant="secondary">
                View My Work
              </Button>
            </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto section-padding pt-0">
        <motion.div
          variants={scrollAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground">Selected Works</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A collection of projects where I've had a tangible impact.</p>
        </motion.div>
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
             <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <motion.div 
          variants={scrollAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-16 text-center"
        >
            <Button to="/projects" variant="secondary">See All Projects</Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
