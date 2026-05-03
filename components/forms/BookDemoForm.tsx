'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { trackDemoFormSubmit } from '@/lib/analytics';

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  role?: string;
  solutionInterest?: string;
  timeline?: string;
}

export default function BookDemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    solutionInterest: 'ZHEP',
    timeline: '30 days',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    try {
      const response = await fetch('/api/forms/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.details) {
          setErrors(data.details);
        } else {
          setErrors({ name: data.error || 'An error occurred.' });
        }
        return;
      }

      // Success: Track analytics and show message
      trackDemoFormSubmit();
      setSuccessMessage(data.message);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        role: '',
        solutionInterest: 'ZHEP',
        timeline: '30 days',
        honeypot: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ name: 'Failed to submit. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  if (successMessage) {
    return (
      <div className="rounded-card bg-pale-green p-card text-center">
        <h3 className="text-h4 font-bold text-green mb-3">{successMessage}</h3>
        <p className="text-body text-body">We'll be in touch soon!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="form-label">
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          disabled={isLoading}
          required
        />
        {errors.name && <p className="mt-1 text-body-sm text-orange">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="form-label">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          disabled={isLoading}
          required
        />
        {errors.email && <p className="mt-1 text-body-sm text-orange">{errors.email}</p>}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="form-label">
          Company *
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="form-input"
          disabled={isLoading}
          required
        />
        {errors.company && <p className="mt-1 text-body-sm text-orange">{errors.company}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="form-label">
          Phone Number *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="form-input"
          disabled={isLoading}
          required
        />
        {errors.phone && <p className="mt-1 text-body-sm text-orange">{errors.phone}</p>}
      </div>

      {/* Role */}
      <div>
        <label htmlFor="role" className="form-label">
          Your Role *
        </label>
        <input
          id="role"
          name="role"
          type="text"
          value={formData.role}
          onChange={handleChange}
          className="form-input"
          disabled={isLoading}
          placeholder="e.g., HR Director, Benefits Manager"
          required
        />
        {errors.role && <p className="mt-1 text-body-sm text-orange">{errors.role}</p>}
      </div>

      {/* Solution Interest */}
      <div>
        <label htmlFor="solutionInterest" className="form-label">
          Solution Interest *
        </label>
        <select
          id="solutionInterest"
          name="solutionInterest"
          value={formData.solutionInterest}
          onChange={handleChange}
          className="form-input"
          disabled={isLoading}
          required
        >
          <option value="ZHEP">ZHEP - Engagement Platform</option>
          <option value="ZPS">ZPS - Payer Solution</option>
          <option value="Both">Both Solutions</option>
        </select>
        {errors.solutionInterest && <p className="mt-1 text-body-sm text-orange">{errors.solutionInterest}</p>}
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline" className="form-label">
          Implementation Timeline *
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="form-input"
          disabled={isLoading}
          required
        >
          <option value="30 days">Within 30 days</option>
          <option value="60 days">Within 60 days</option>
          <option value="90 days">Within 90 days</option>
          <option value="Not sure">Not sure yet</option>
        </select>
        {errors.timeline && <p className="mt-1 text-body-sm text-orange">{errors.timeline}</p>}
      </div>

      {/* Honeypot (hidden) */}
      <input
        type="hidden"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? 'Sending...' : 'Request Demo'}
      </Button>
    </form>
  );
}
