import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, subtitle, description, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="relative pl-8 sm:pl-12 py-6"
    >
      {/* Circle */}
      <div className="absolute top-8 left-[-9px] w-4 h-4 bg-background border-2 border-primary rounded-full"></div>

      <p className="text-sm font-medium text-primary">{date}</p>
      <h3 className="mt-1 text-xl font-bold text-foreground">{title}</h3>
      <h4 className="text-md font-semibold text-muted-foreground">{subtitle}</h4>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default TimelineItem;
