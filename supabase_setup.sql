-- =====================================================
-- HealthTrack AI Landing Page - Supabase Table Setup
-- Run this entire script in Supabase SQL Editor
-- =====================================================

-- =====================================================
-- 1. WAITLIST_LEADS TABLE
-- Used by: WaitlistForm component (modal form)
-- =====================================================
CREATE TABLE IF NOT EXISTS waitlist_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  name text,
  consent boolean DEFAULT false,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  created_at timestamptz DEFAULT now()
);

-- Index for email lookups and uniqueness checks
CREATE INDEX IF NOT EXISTS waitlist_leads_email_idx ON waitlist_leads(email);
CREATE INDEX IF NOT EXISTS waitlist_leads_created_at_idx ON waitlist_leads(created_at);

-- Enable Row Level Security
ALTER TABLE waitlist_leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to insert (for public waitlist form)
DROP POLICY IF EXISTS "Allow anonymous inserts to waitlist" ON waitlist_leads;
CREATE POLICY "Allow anonymous inserts to waitlist"
  ON waitlist_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- =====================================================
-- 2. WAITLIST_SUBMISSIONS TABLE
-- Used by: InlineWaitlistForm component (A/B testing)
-- =====================================================
CREATE TABLE IF NOT EXISTS waitlist_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  cta_version text NOT NULL DEFAULT 'waitlist',
  headline_variant text NOT NULL DEFAULT 'A',
  social_proof_placement text NOT NULL DEFAULT 'hero',
  scarcity_message text NOT NULL DEFAULT 'none',
  form_type text NOT NULL DEFAULT 'modal',
  created_at timestamptz DEFAULT now()
);

-- Index for email lookups (unique constraint also creates index)
CREATE INDEX IF NOT EXISTS waitlist_submissions_created_at_idx ON waitlist_submissions(created_at);

-- Enable Row Level Security
ALTER TABLE waitlist_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to insert
DROP POLICY IF EXISTS "Anyone can submit to waitlist" ON waitlist_submissions;
CREATE POLICY "Anyone can submit to waitlist"
  ON waitlist_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow anonymous users to read (for checking duplicates)
DROP POLICY IF EXISTS "Users can read their own submissions" ON waitlist_submissions;
CREATE POLICY "Users can read their own submissions"
  ON waitlist_submissions
  FOR SELECT
  TO anon
  USING (true);

-- =====================================================
-- 3. APPOINTMENT_LEADS TABLE
-- Used by: AppointmentForm component (healthcare providers)
-- =====================================================
CREATE TABLE IF NOT EXISTS appointment_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text,
  created_at timestamptz DEFAULT now()
);

-- Index for analytics queries
CREATE INDEX IF NOT EXISTS appointment_leads_created_at_idx ON appointment_leads(created_at);

-- Enable Row Level Security
ALTER TABLE appointment_leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to insert (for public appointment form)
DROP POLICY IF EXISTS "Allow anonymous inserts to appointments" ON appointment_leads;
CREATE POLICY "Allow anonymous inserts to appointments"
  ON appointment_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- =====================================================
-- VERIFICATION QUERIES (Optional - run to verify tables exist)
-- =====================================================
-- SELECT table_name FROM information_schema.tables 
-- WHERE table_schema = 'public' 
-- AND table_name IN ('waitlist_leads', 'waitlist_submissions', 'appointment_leads');

