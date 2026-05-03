'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { trackContactFormSubmit } from '@/lib/analytics';

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  inquiryType?: string;
}

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    inquiryType: 'general',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    try {
      const response = await fetch('/api/forms/contact-us', {
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
      trackContactFormSubmit();
      setSuccessMessage(data.message);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        inquiryType: 'general',
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
        <p className="text-body text-body">We&apos;ll respond as soon as possible.</p>
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

      {/* Inquiry Type */}
      <div>
        <label htmlFor="inquiryType" className="form-label">
          Inquiry Type *
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          className="form-input"
          aria-describedby={errors.inquiryType ? "inquiryType-error" : undefined}
          disabled={isLoading}
          required
        >
          <option value="general">General Inquiry</option>
          <option value="support">Technical Support</option>
          <option value="partnership">Partnership Opportunity</option>
          <option value="other">Other</option>
        </select>
        {errors.inquiryType && <p id="inquiryType-error" className="mt-1 text-body-sm text-orange" role="alert">{errors.inquiryType}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="form-label">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-input"
          rows={5}
          aria-describedby={errors.message ? "message-error" : undefined}
          disabled={isLoading}
          placeholder="Tell us how we can help..."
          required
        />
        {errors.message && <p id="message-error" className="mt-1 text-body-sm text-orange" role="alert">{errors.message}</p>}
      </div>

      {/* Honeypot */}
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
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
