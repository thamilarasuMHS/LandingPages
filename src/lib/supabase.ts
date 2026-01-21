import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// #region agent log
fetch('http://127.0.0.1:7244/ingest/7b8acff3-8416-4359-9207-66e86346ae31', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    sessionId: 'debug-session',
    runId: 'pre-fix',
    hypothesisId: 'H1',
    location: 'src/lib/supabase.ts:env-check',
    message: 'Supabase env config check',
    data: {
      urlDefined: Boolean(supabaseUrl),
      urlSample: supabaseUrl ? supabaseUrl.slice(0, 40) : null,
      anonKeyDefined: Boolean(supabaseAnonKey),
    },
    timestamp: Date.now(),
  }),
}).catch(() => {});
// #endregion

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface AppointmentLead {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

export interface WaitlistLead {
  email: string;
  name?: string;
  consent?: boolean;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}
