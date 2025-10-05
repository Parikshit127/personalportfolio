import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/projects/${project.id}`);
  };

  const handleLinkClick = (e: React.MouseEvent, url?: string) => {
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onClick={handleNavigate}
      className="bg-background rounded-lg border border-border overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 relative"
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        initial={false}
      />
      
      <div className="overflow-hidden relative">
        <motion.img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Image Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          initial={false}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-primary text-black px-4 py-2 rounded-full font-medium"
          >
            View Details
          </motion.div>
        </motion.div>
      </div>

      <div className="p-6 flex flex-col flex-grow relative z-20">
        <motion.span 
          className="text-xs font-semibold text-primary uppercase tracking-wider"
          whileHover={{ scale: 1.05 }}
        >
          {project.category}
        </motion.span>
        
        <motion.h3 
          className="text-xl font-bold text-foreground mt-2"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.h3>
        
        <p className="mt-2 text-muted-foreground flex-grow leading-relaxed">{project.summary}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <motion.span 
              key={tag} 
              className="text-xs font-medium bg-border text-muted-foreground px-2 py-1 rounded-full hover:bg-primary hover:text-black transition-colors duration-200 cursor-default"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: tagIndex * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-border/50 flex justify-between items-center">
          <motion.p 
            className="text-sm font-bold text-primary"
            whileHover={{ scale: 1.05 }}
          >
            {project.metric}
          </motion.p>
          
          <div className="flex items-center space-x-4">
            {project.repoUrl && (
              <motion.button 
                onClick={(e) => handleLinkClick(e, project.repoUrl)} 
                className="text-muted-foreground hover:text-primary transition-colors z-10 relative p-2 rounded-full hover:bg-primary/10"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub Repository</span>
              </motion.button>
            )}
            {project.liveUrl && (
              <motion.button 
                onClick={(e) => handleLinkClick(e, project.liveUrl)} 
                className="text-muted-foreground hover:text-primary transition-colors z-10 relative p-2 rounded-full hover:bg-primary/10"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-5 h-5" />
                <span className="sr-only">Live Demo</span>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
