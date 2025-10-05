import React from 'react';

interface ExperienceItemProps {
  role: string;
  company: string;
  date: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, company, date, description }) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
        <h3 className="text-lg font-semibold text-foreground">{role}</h3>
        <p className="text-sm text-muted mt-1 sm:mt-0">{date}</p>
      </div>
      <p className="text-md text-muted-foreground">{company}</p>
      <p className="mt-2 text-muted">{description}</p>
    </div>
  );
};

export default ExperienceItem;
