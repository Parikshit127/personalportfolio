import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { siteConfig } from '../../config';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, url: siteConfig.socialLinks.github, name: 'GitHub' },
    { icon: Linkedin, url: siteConfig.socialLinks.linkedin, name: 'LinkedIn' },
    { icon: Twitter, url: siteConfig.socialLinks.twitter, name: 'Twitter' },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-2 text-sm text-muted">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors duration-200"
              >
                <link.icon className="w-5 h-5" />
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
