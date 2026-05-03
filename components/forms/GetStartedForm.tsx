'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { trackMemberSignup, trackEmployerSignup } from '@/lib/analytics';

type FormPath = 'member' | 'employer';

interface FormErrors {
  name?: string;
  email?: string;
  employerCode?: string;
  orgName?: string;
  workforceSize?: string;
}

export default function GetStartedForm() {
  const [formData, setFormData] = useState({
    path: 'member' as FormPath,
    name: '',
    email: '',
    employerCode: '',
    orgName: '',
    workforceSize: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const handlePathChange = (newPath: FormPath) => {
    setFormData(prev => ({
      ...prev,
      path: newPath,
      name: '',
      email: '',
      employerCode: '',
      orgName: '',
      workforceSize: '',
    }));
    setErrors({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      const response = await fetch('/api/forms/get-started', {
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

      // Success: Track analytics and redirect
      if (formData.path === 'member') {
        trackMemberSignup();
      } else {
        trackEmployerSignup();
      }

      // Redirect to appropriate app
      if (data.redirect) {
        window.location.href = data.redirect;
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ name: 'Failed to submit. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Path Selection */}
      <div className="flex gap-4 border-b border-border pb-6">
        <button
          type="button"
          onClick={() => handlePathChange('member')}
          className={`pb-2 font-semibold transition-colors ${
            formData.path === 'member'
              ? 'border-b-2 border-green text-green'
              : 'text-body hover:text-dark'
          }`}
        >
          I&apos;m an Individual
        </button>
        <button
          type="button"
          onClick={() => handlePathChange('employer')}
          className={`pb-2 font-semibold transition-colors ${
            formData.path === 'employer'
              ? 'border-b-2 border-green text-green'
              : 'text-body hover:text-dark'
          }`}
        >
          I&apos;m an Employer
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {formData.path === 'member' ? (
          <>
            {/* Member: Name */}
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

            {/* Member: Email */}
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

            {/* Member: Employer Code (optional) */}
            <div>
              <label htmlFor="employerCode" className="form-label">
                Employer Code (optional)
              </label>
              <input
                id="employerCode"
                name="employerCode"
                type="text"
                value={formData.employerCode}
                onChange={handleChange}
                className="form-input"
                aria-describedby={errors.employerCode ? "employerCode-error" : undefined}
                disabled={isLoading}
                placeholder="Ask your HR team for this code"
              />
              <p className="mt-2 text-body-sm text-muted">
                If your employer provides a code, you can link your account to their programme.
              </p>
              {errors.employerCode && <p id="employerCode-error" className="mt-1 text-body-sm text-orange" role="alert">{errors.employerCode}</p>}
            </div>
          </>
        ) : (
          <>
            {/* Employer: Organization Name */}
            <div>
              <label htmlFor="orgName" className="form-label">
                Organization Name *
              </label>
              <input
                id="orgName"
                name="orgName"
                type="text"
                value={formData.orgName}
                onChange={handleChange}
                className="form-input"
                aria-describedby={errors.orgName ? "orgName-error" : undefined}
                disabled={isLoading}
                required
              />
              {errors.orgName && <p id="orgName-error" className="mt-1 text-body-sm text-orange" role="alert">{errors.orgName}</p>}
            </div>

            {/* Employer: Email */}
            <div>
              <label htmlFor="email" className="form-label">
                Work Email Address *
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

            {/* Employer: Workforce Size */}
            <div>
              <label htmlFor="workforceSize" className="form-label">
                Workforce Size *
              </label>
              <select
                id="workforceSize"
                name="workforceSize"
                value={formData.workforceSize}
                onChange={handleChange}
                className="form-input"
                aria-describedby={errors.workforceSize ? "workforceSize-error" : undefined}
                disabled={isLoading}
                required
              >
                <option value="">Select size...</option>
                <option value="10-50">10-50 employees</option>
                <option value="50-100">50-100 employees</option>
                <option value="100-500">100-500 employees</option>
                <option value="500+">500+ employees</option>
              </select>
              {errors.workforceSize && <p id="workforceSize-error" className="mt-1 text-body-sm text-orange" role="alert">{errors.workforceSize}</p>}
            </div>
          </>
        )}

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
          {isLoading ? "Processing..." : "Get Started Free"}
        </Button>

        <p className="text-center text-body-sm text-muted">
          We&apos;ll never share your information. Privacy policy{' '}
          <a href="/privacy-centre/" className="text-green hover:text-blue">
            here
          </a>
          .
        </p>
      </form>
    </div>
  );
}
