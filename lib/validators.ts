// lib/validators.ts
// Email validation utility using RFC 5322 simplified regex

export function isValidEmail(email: string): boolean {
  // RFC 5322 simplified regex (practical for forms)
  // Matches: localpart@domain.tld (at least one char on each side of @, and a dot in domain)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Organisation types offered on the Book Demo form (used for lead routing).
export const ORGANISATION_TYPES = [
  'Insurer or TPA',
  'Healthcare provider',
  'Employer',
  'Other',
] as const;

export type OrganisationType = (typeof ORGANISATION_TYPES)[number];

export function isValidOrganisationType(value: unknown): value is OrganisationType {
  return typeof value === 'string' && (ORGANISATION_TYPES as readonly string[]).includes(value);
}
