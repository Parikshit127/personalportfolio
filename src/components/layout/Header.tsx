import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../../config';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border/50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <NavLink to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
              <span>{siteConfig.name}</span>
            </NavLink>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>
      <AnimatePresence>
        {isOpen && <MobileMenu navLinks={navLinks} />}
      </AnimatePresence>
    </>
  );
};

const MobileMenu: React.FC<{ navLinks: { name: string; path: string }[] }> = ({ navLinks }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-50%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-50%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-x-0 top-20 z-40 bg-background md:hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col space-y-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `text-lg font-semibold text-center ${
                isActive ? 'text-primary' : 'text-foreground'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
};

export default Header;
