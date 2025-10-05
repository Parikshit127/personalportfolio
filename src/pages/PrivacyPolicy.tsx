import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config';

const PrivacyPolicy: React.FC = () => {
  const { privacyPolicy } = siteConfig;

  return (
    <div className="container mx-auto section-padding max-w-3xl animate-fade-in-up">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-2 text-muted">Last updated: {privacyPolicy.lastUpdated}</p>
      </motion.div>

      <div className="prose prose-lg max-w-none mt-12 text-muted space-y-6">
        {privacyPolicy.sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
          >
            <h2 className="text-2xl font-bold text-foreground !mb-4">{section.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: section.content }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
