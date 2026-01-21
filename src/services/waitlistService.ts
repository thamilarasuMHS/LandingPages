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
  // #region agent log
  fetch('http://127.0.0.1:7244/ingest/7b8acff3-8416-4359-9207-66e86346ae31', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sessionId: 'debug-session',
      runId: 'pre-fix',
      hypothesisId: 'H2',
      location: 'src/services/waitlistService.ts:submitToWaitlist:start',
      message: 'submitToWaitlist called',
      data: {
        nameProvided: Boolean(submission.name),
        emailProvided: Boolean(submission.email),
        ctaVersion: submission.variants.ctaVersion,
        formType: submission.variants.formType,
      },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion

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
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/7b8acff3-8416-4359-9207-66e86346ae31', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: 'debug-session',
          runId: 'pre-fix',
          hypothesisId: 'H2',
          location: 'src/services/waitlistService.ts:submitToWaitlist:error',
          message: 'Supabase insert error',
          data: {
            code: error.code,
            details: error.details,
            hint: error.hint,
            message: error.message,
          },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
      // #endregion

      if (error.code === '23505') {
        return { success: false, error: 'This email is already registered.' };
      }
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    // #region agent log
    fetch('http://127.0.0.1:7244/ingest/7b8acff3-8416-4359-9207-66e86346ae31', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: 'debug-session',
        runId: 'pre-fix',
        hypothesisId: 'H3',
        location: 'src/services/waitlistService.ts:submitToWaitlist:catch',
        message: 'Unexpected error',
        data: {
          errorName: error instanceof Error ? error.name : 'unknown',
          errorMessage: error instanceof Error ? error.message : String(error),
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion

    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}
