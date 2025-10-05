import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteConfig } from '../config';
import Button from '../components/ui/Button';
import { ArrowLeft, ArrowRight, Github, ExternalLink } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = siteConfig.projects.find(p => p.id.toString() === id);

  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  if (!project) {
    return (
      <div className="container mx-auto section-padding text-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="mt-4 text-muted">Sorry, we couldn't find the project you're looking for.</p>
        <Button to="/projects" variant="primary" className="mt-8">
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up">
      {/* Project Header */}
      <section className="container mx-auto section-padding pb-16">
        <motion.div {...fadeInAnimation} className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-semibold">{project.category}</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-bold tracking-tighter text-foreground">{project.title}</h1>
          <p className="mt-6 text-lg md:text-xl text-muted">{project.summary}</p>
          <div className="mt-8 flex justify-center items-center space-x-6">
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center font-medium text-muted hover:text-primary transition-colors">
                <Github className="w-5 h-5 mr-2" />
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center font-medium text-muted hover:text-primary transition-colors">
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </section>

      {/* Main Image */}
      <motion.div {...fadeInAnimation} transition={{ delay: 0.2 }} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <img src={project.imageUrl} alt={project.title} className="rounded-lg shadow-xl w-full" />
      </motion.div>

      {/* Case Study Details */}
      <section className="container mx-auto section-padding">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column (The Story) */}
          <div className="md:col-span-2 space-y-12">
            <CaseStudySection title="The Problem" content={project.problem} />
            <CaseStudySection title="The Solution" content={project.solution} />
            <CaseStudySection title="The Process">
              <ul className="list-decimal list-inside space-y-3 text-muted">
                {project.process.map((step, index) => <li key={index}>{step}</li>)}
              </ul>
            </CaseStudySection>
          </div>
          
          {/* Right Column (Meta) */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-foreground">My Role</h3>
              <p className="mt-2 text-muted">{project.role}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Tech Stack</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium bg-border text-muted-foreground px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Key Outcome</h3>
              <p className="mt-2 text-2xl font-bold text-primary">{project.metric}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Deliverables</h3>
              <ul className="list-disc list-inside space-y-2 text-muted mt-2">
                {project.deliverables.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="container mx-auto section-padding pt-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Project Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {project.galleryImages.map((img, index) => (
                <motion.img 
                  key={index}
                  src={img} 
                  alt={`${project.title} gallery image ${index + 1}`}
                  className="rounded-lg shadow-md w-full object-cover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-background section-padding">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Have a similar project?</h2>
          <p className="mt-4 text-lg text-muted">I'd love to hear about your goals and how I can help you achieve them.</p>
          <Button to="/contact" variant="primary" className="mt-8">
            Let's Talk <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

// Helper component for consistent section styling
const CaseStudySection: React.FC<{ title: string; content?: string; children?: React.ReactNode }> = ({ title, content, children }) => (
  <div>
    <h2 className="text-3xl font-bold tracking-tight text-foreground">{title}</h2>
    {content && <p className="mt-4 text-lg text-muted">{content}</p>}
    {children && <div className="mt-4">{children}</div>}
  </div>
);

export default ProjectDetail;
