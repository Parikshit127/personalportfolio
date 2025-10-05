import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, Github } from 'lucide-react';
import { siteConfig } from '../config';
import Button from '../components/ui/Button';
import ResumeSection from '../components/resume/ResumeSection';
import ExperienceItem from '../components/resume/ExperienceItem';

const Resume: React.FC = () => {
  const { resume, name, headline, email, socialLinks } = siteConfig;

  return (
    <div className="container mx-auto section-padding max-w-4xl animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">{name}</h1>
          <p className="mt-2 text-xl text-muted">{headline}</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href={`mailto:${email}`} className="flex items-center hover:text-primary">
              <Mail className="w-4 h-4 mr-2" /> {email}
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary">
              <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary">
              <Github className="w-4 h-4 mr-2" /> GitHub
            </a>
          </div>
        </div>
        <a href={resume.pdfUrl} download className="mt-6 sm:mt-0">
          <Button variant="primary">
            <Download className="mr-2 w-5 h-5" />
            Download PDF
          </Button>
        </a>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        <ResumeSection title="Summary">
          <p className="text-muted">{resume.summary}</p>
        </ResumeSection>

        <ResumeSection title="Experience">
          <div className="space-y-8">
            {resume.experience.map((item, index) => (
              <ExperienceItem key={index} {...item} />
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Education">
          <div className="space-y-6">
            {resume.education.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-semibold text-foreground">{item.degree}</h3>
                  <p className="text-sm text-muted">{item.date}</p>
                </div>
                <p className="text-md text-muted-foreground">{item.institution}</p>
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {Object.entries(resume.skills).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-foreground mb-2">{category}</h3>
                <p className="text-muted leading-relaxed">
                  {skills.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </ResumeSection>
      </div>
    </div>
  );
};

export default Resume;
