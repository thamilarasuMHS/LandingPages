import { supabase } from '../lib/supabase';
import { ABTestConfig } from '../config/abTestConfig';

export interface WaitlistSubmission {
  name: string;
  email: string;
  variants: ABTestConfig;
}

export interface WaitlistResult {
  success: boolean;
  error?: string;
}

export async function submitToWaitlist(
  submission: WaitlistSubmission
): Promise<WaitlistResult> {
  try {
    const { error } = await supabase.from('waitlist_submissions').insert({
      name: submission.name,
      email: submission.email,
      cta_version: submission.variants.ctaVersion,
      headline_variant: submission.variants.headlineVariant,
      social_proof_placement: submission.variants.socialProofPlacement,
      scarcity_message: submission.variants.scarcityMessage,
      form_type: submission.variants.formType,
    });

    if (error) {
      if (error.code === '23505') {
        return { success: false, error: 'This email is already registered.' };
      }
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}
