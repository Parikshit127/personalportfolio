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
      className="bg-background rounded-lg border border-border overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/10"
    >
      <div className="overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
        <h3 className="text-xl font-bold text-foreground mt-2">{project.title}</h3>
        <p className="mt-2 text-muted-foreground flex-grow">{project.summary}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-medium bg-border text-muted-foreground px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-border/50 flex justify-between items-center">
          <p className="text-sm font-bold text-primary">{project.metric}</p>
          <div className="flex items-center space-x-4">
            {project.repoUrl && (
              <button onClick={(e) => handleLinkClick(e, project.repoUrl)} className="text-muted-foreground hover:text-primary transition-colors z-10 relative">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub Repository</span>
              </button>
            )}
            {project.liveUrl && (
              <button onClick={(e) => handleLinkClick(e, project.liveUrl)} className="text-muted-foreground hover:text-primary transition-colors z-10 relative">
                <ExternalLink className="w-5 h-5" />
                <span className="sr-only">Live Demo</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
