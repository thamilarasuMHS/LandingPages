export type CTAVersion = 'waitlist' | 'paid';
export type HeadlineVariant = 'A' | 'B' | 'C';
export type SocialProofPlacement = 'hero' | 'lower';
export type ScarcityMessage = 'A' | 'B' | 'none';
export type FormType = 'modal' | 'inline';

export interface ABTestConfig {
  ctaVersion: CTAVersion;
  headlineVariant: HeadlineVariant;
  socialProofPlacement: SocialProofPlacement;
  scarcityMessage: ScarcityMessage;
  formType: FormType;
}

export const abTestConfig: ABTestConfig = {
  ctaVersion: 'waitlist',
  headlineVariant: 'A',
  socialProofPlacement: 'hero',
  scarcityMessage: 'A',
  formType: 'modal',
};

export const headlines: Record<HeadlineVariant, string> = {
  A: 'Heal From The Past & Manifest Your Dream Life — Join the Free Waitlist',
  B: '6 Proven Techniques to Heal Past Trauma and Create the Life You Want',
  C: 'Free Waitlist: Early Access + Special Discount — Heal, Grow, Manifest',
};

export const scarcityMessages: Record<Exclude<ScarcityMessage, 'none'>, string> = {
  A: 'Limited seats — join now before spots fill.',
  B: 'Early-bird discount available for waitlist members only.',
};

export const getCTAText = (version: CTAVersion): string => {
  return version === 'waitlist' ? 'Join Free Waitlist' : 'Register For Masterclass At ₹199';
};

export const getHeaderCTAText = (version: CTAVersion): string => {
  return version === 'waitlist' ? 'Join Waitlist' : 'Register Now';
};
