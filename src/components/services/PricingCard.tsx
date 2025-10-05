import React from 'react';
import { Check } from 'lucide-react';
import Button from '../ui/Button';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, description, features, isPopular = false }) => {
  const cardClasses = `relative flex flex-col h-full p-8 rounded-2xl border ${isPopular ? 'border-primary' : 'border-border'}`;
  const buttonVariant = isPopular ? 'primary' : 'secondary';

  return (
    <div className={cardClasses}>
      {isPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-4 py-1 text-sm font-semibold text-white bg-primary rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <p className="mt-2 text-muted">{description}</p>
        <p className="mt-6 text-4xl font-bold tracking-tight text-foreground">{price}</p>
        <p className="text-sm text-muted-foreground">Example pricing</p>

        <ul className="mt-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mr-3 mt-1" />
              <span className="text-muted">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <Button to="/contact" variant={buttonVariant} className="w-full">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
