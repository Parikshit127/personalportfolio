import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config';
import ProjectCard from '../components/projects/ProjectCard';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', ...Array.from(new Set(siteConfig.projects.map(p => p.category)))];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return siteConfig.projects;
    }
    return siteConfig.projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const pageAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="container mx-auto section-padding">
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground">My Work</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Here's a selection of projects that showcase my skills and passion for building great software.
        </p>
      </motion.div>

      <motion.div 
        variants={pageAnimation}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="flex justify-center flex-wrap gap-2 mt-12"
      >
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              activeFilter === filter
                ? 'bg-primary text-black scale-105'
                : 'bg-border text-muted-foreground hover:bg-border/50 hover:text-foreground'
            }`}
          >
            {filter}
          </button>
        ))}
      </motion.div>

      <motion.div 
        layout 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
