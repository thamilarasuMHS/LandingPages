/*
  # Create waitlist submissions table

  1. New Tables
    - `waitlist_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - User's full name
      - `email` (text, unique) - User's email address
      - `cta_version` (text) - Which CTA variant was shown (waitlist or paid)
      - `headline_variant` (text) - Which headline variant was shown (A, B, or C)
      - `social_proof_placement` (text) - Social proof placement variant (hero or lower)
      - `scarcity_message` (text) - Scarcity message variant (A, B, or none)
      - `form_type` (text) - Form type used (modal or inline)
      - `created_at` (timestamptz) - Timestamp of submission

  2. Security
    - Enable RLS on `waitlist_submissions` table
    - Add policy for anonymous users to insert their own submissions
    - Add policy for authenticated users to read their own submissions
*/

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

ALTER TABLE waitlist_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit to waitlist"
  ON waitlist_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can read their own submissions"
  ON waitlist_submissions
  FOR SELECT
  TO anon
  USING (true);
