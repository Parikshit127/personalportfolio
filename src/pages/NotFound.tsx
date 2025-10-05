import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, SearchX } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto section-padding flex items-center justify-center text-center animate-fade-in-up">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SearchX className="mx-auto h-24 w-24 text-primary/50" />
        <h1 className="mt-8 text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
          404 - Page Not Found
        </h1>
        <p className="mt-4 text-lg text-muted max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Button to="/" variant="primary" className="mt-10">
          <ArrowLeft className="mr-2 w-5 h-5" />
          Go Back Home
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
