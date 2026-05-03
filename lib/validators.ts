// lib/validators.ts
// Email validation utility using RFC 5322 simplified regex

export function isValidEmail(email: string): boolean {
  // RFC 5322 simplified regex (practical for forms)
  // Matches: localpart@domain.tld (at least one char on each side of @, and a dot in domain)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
