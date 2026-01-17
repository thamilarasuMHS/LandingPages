/*
  # Lead Capture Tables for Health Tracking MVP

  1. New Tables
    - `waitlist_leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `email` (text, required) - Email address (required field)
      - `name` (text, optional) - First name or full name
      - `consent` (boolean, default false) - Email consent checkbox
      - `utm_source` (text, optional) - Campaign tracking
      - `utm_medium` (text, optional) - Campaign tracking
      - `utm_campaign` (text, optional) - Campaign tracking
      - `created_at` (timestamptz) - Timestamp of signup
    
    - `appointment_leads`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text, required) - Full name
      - `email` (text, required) - Contact email
      - `phone` (text, optional) - Contact phone
      - `message` (text, optional) - Additional message/notes
      - `created_at` (timestamptz) - Timestamp of request

  2. Security
    - Enable RLS on both tables
    - Allow anonymous inserts (for public waitlist/appointment forms)
    - No read access for public (admin-only via service role)

  3. Indexes
    - Email index on waitlist_leads for uniqueness checks
    - Created_at indexes for analytics queries
*/

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

CREATE TABLE IF NOT EXISTS appointment_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS waitlist_leads_email_idx ON waitlist_leads(email);
CREATE INDEX IF NOT EXISTS waitlist_leads_created_at_idx ON waitlist_leads(created_at);
CREATE INDEX IF NOT EXISTS appointment_leads_created_at_idx ON appointment_leads(created_at);

ALTER TABLE waitlist_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointment_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts to waitlist"
  ON waitlist_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts to appointments"
  ON appointment_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);