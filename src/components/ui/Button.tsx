import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ to, variant = 'primary', children, className, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background transition-all duration-300 transform hover:-translate-y-1";
  
  const variantClasses = {
    primary: 'text-black bg-primary hover:bg-primary-hover focus:ring-primary shadow-lg hover:shadow-primary/30',
    secondary: 'text-foreground bg-transparent border-2 border-border hover:bg-border focus:ring-foreground',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
