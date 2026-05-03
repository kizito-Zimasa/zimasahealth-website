'use client';

import { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

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
        <p className="text-body text-body">We&apos;ll be in touch soon!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
          aria-describedby={errors.name ? "name-error" : undefined}
          disabled={isLoading}
          required
        />
        {errors.name && <p id="name-error" className="mt-1 text-body-sm text-orange" role="alert">{errors.name}</p>}
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
          aria-describedby={errors.email ? "email-error" : undefined}
          disabled={isLoading}
          required
        />
        {errors.email && <p id="email-error" className="mt-1 text-body-sm text-orange" role="alert">{errors.email}</p>}
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
          aria-describedby={errors.company ? "company-error" : undefined}
          disabled={isLoading}
          required
        />
        {errors.company && <p id="company-error" className="mt-1 text-body-sm text-orange" role="alert">{errors.company}</p>}
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
          aria-describedby={errors.phone ? "phone-error" : undefined}
          disabled={isLoading}
          required
        />
        {errors.phone && <p id="phone-error" className="mt-1 text-body-sm text-orange" role="alert">{errors.phone}</p>}
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
          aria-describedby={errors.role ? "role-error" : undefined}
          disabled={isLoading}
          placeholder="e.g., HR Director, Benefits Manager"
          required
        />
        {errors.role && <p id="role-error" className="mt-1 text-body-sm text-orange" role="alert">{errors.role}</p>}
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
          aria-describedby={errors.solutionInterest ? "solutionInterest-error" : undefined}
          disabled={isLoading}
          required
        >
          <option value="ZHEP">ZHEP - Engagement Platform</option>
          <option value="ZPS">ZPS - Payer Solution</option>
          <option value="Both">Both Solutions</option>
        </select>
        {errors.solutionInterest && <p id="solutionInterest-error" className="mt-1 text-body-sm text-orange" role="alert">{errors.solutionInterest}</p>}
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
          aria-describedby={errors.timeline ? "timeline-error" : undefined}
          disabled={isLoading}
          required
        >
          <option value="30 days">Within 30 days</option>
          <option value="60 days">Within 60 days</option>
          <option value="90 days">Within 90 days</option>
          <option value="Not sure">Not sure yet</option>
        </select>
        {errors.timeline && <p id="timeline-error" className="mt-1 text-body-sm text-orange" role="alert">{errors.timeline}</p>}
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
        {isLoading ? "Sending..." : "Request Demo"}
      </Button>
    </form>
  );
}
