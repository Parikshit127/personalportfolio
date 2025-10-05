import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<{ name?: string, email?: string, message?: string }>({});

  const validate = () => {
    const newErrors: { name?: string, email?: string, message?: string } = {};
    if (!name) newErrors.name = 'Name is required.';
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState('loading');

    // --- BACKEND INTEGRATION POINT ---
    // Here you would typically send the data to a serverless function,
    // or a service like Formspree, Web3Forms, or Resend.
    // Example using fetch:
    /*
    try {
      const response = await fetch('YOUR_SERVERLESS_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setFormState('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormState('error');
    }
    */

    // Simulating API call for demonstration purposes
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Simulate a random success or error
    if (Math.random() > 0.1) {
      setFormState('success');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setFormState('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-4 py-3 bg-background border border-border rounded-md shadow-sm focus:ring-primary focus:border-primary"
            placeholder="Your Name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-4 py-3 bg-background border border-border rounded-md shadow-sm focus:ring-primary focus:border-primary"
            placeholder="your@email.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-muted">Message</label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 block w-full px-4 py-3 bg-background border border-border rounded-md shadow-sm focus:ring-primary focus:border-primary"
          placeholder="How can I help you?"
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>
      <div>
        <Button type="submit" variant="primary" className="w-full" disabled={formState === 'loading'}>
          {formState === 'loading' && <Loader className="mr-2 w-5 h-5 animate-spin" />}
          {formState !== 'loading' && <Send className="mr-2 w-5 h-5" />}
          {formState === 'loading' ? 'Sending...' : 'Send Message'}
        </Button>
      </div>

      {formState === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center p-4 text-sm text-green-700 bg-green-100 rounded-md"
        >
          <CheckCircle className="w-5 h-5 mr-3" />
          Your message has been sent successfully. I'll get back to you shortly!
        </motion.div>
      )}

      {formState === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center p-4 text-sm text-red-700 bg-red-100 rounded-md"
        >
          <AlertCircle className="w-5 h-5 mr-3" />
          Something went wrong. Please try again or email me directly.
        </motion.div>
      )}
    </form>
  );
};

export default ContactForm;
