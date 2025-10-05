import React from 'react';

interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, children }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-primary tracking-tight pb-2 mb-6 border-b-2 border-primary/20">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default ResumeSection;
