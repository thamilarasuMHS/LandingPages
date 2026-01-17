# HealthTrack AI - Landing Page MVP

AI-driven health tracking and personalized nutrition planning with automated data capture from devices and food.

## Overview

This is a single-page landing site designed to validate demand for an AI-driven health tracking product. The page captures waitlist leads and explains the product value proposition without implementing any core app features.

**Primary validation metric:** Waitlist conversion rate target >5%

## Features

- **Waitlist capture** - Email-first lead collection with optional name and consent
- **Appointment lead generation** - For healthcare providers and partners
- **Mobile-first responsive design** - Optimized for all devices
- **Analytics tracking** - Pageview and conversion events
- **Medical disclaimers** - Prominent safety notices throughout

## Tech Stack

- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Icons:** Lucide React

## Database Schema

### Waitlist Leads Table

```sql
CREATE TABLE waitlist_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  name text,
  consent boolean DEFAULT false,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  created_at timestamptz DEFAULT now()
);
```

**Payload Schema:**

```typescript
interface WaitlistLead {
  email: string;           // Required
  name?: string;          // Optional
  consent?: boolean;      // Optional, defaults to false
  utm_source?: string;    // Auto-captured from URL params
  utm_medium?: string;    // Auto-captured from URL params
  utm_campaign?: string;  // Auto-captured from URL params
}
```

**Example POST payload:**

```json
{
  "email": "user@example.com",
  "name": "Jane Smith",
  "consent": true,
  "utm_source": "facebook",
  "utm_medium": "cpc",
  "utm_campaign": "launch"
}
```

### Appointment Leads Table

```sql
CREATE TABLE appointment_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text,
  created_at timestamptz DEFAULT now()
);
```

**Payload Schema:**

```typescript
interface AppointmentLead {
  name: string;      // Required
  email: string;     // Required
  phone?: string;    // Optional
  message?: string;  // Optional
}
```

**Example POST payload:**

```json
{
  "name": "Dr. Jane Smith",
  "email": "dr.smith@clinic.com",
  "phone": "+1 (555) 123-4567",
  "message": "Interested in offering to my patients"
}
```

## Analytics Events

All analytics events are logged to the console and will integrate with Google Analytics or similar when configured.

### Tracked Events

1. **Page View** (`page_view`)
   - Fired on initial page load
   - Properties: `page_title`, `page_location`

2. **Waitlist Signup** (`waitlist_signup`)
   - Fired when user successfully joins waitlist
   - Properties: `email`, `timestamp`
   - **Primary conversion metric for MVP validation**

3. **Appointment Request** (`appointment_request`)
   - Fired when provider submits appointment form
   - Properties: `email`, `timestamp`

### Viewing Analytics Events

Analytics events are logged to the browser console with the prefix `[Analytics]`. To integrate with a real analytics platform:

1. Add your Google Analytics tag to `index.html`
2. Events will automatically be sent via `gtag('event', ...)` if gtag is available
3. Or implement custom analytics provider in `src/lib/analytics.ts`

## Environment Variables

Create a `.env` file with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## Development

```bash
# Install dependencies
npm install

# Start dev server (runs automatically in Bolt)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Security & Privacy

- **RLS Policies:** Both tables have Row Level Security enabled
  - Anonymous users can INSERT (submit forms)
  - No public read access (admin-only via service role)
- **Data Collection:** Minimal PII (email + optional name + UTM params)
- **Medical Disclaimer:** Prominent notices that this is not medical advice
- **HIPAA Compliance:** NOT HIPAA-compliant by default (clearly stated)

## Important Disclaimers

### Medical Disclaimer

This application is not medical advice and is not intended to diagnose, treat, or cure diseases. Users must consult qualified medical professionals for health decisions.

### Privacy Notice

Personal data is stored following privacy best practices but is not HIPAA-compliant by default. Users are informed of this limitation before submitting forms.

## Page Sections (in order)

1. **Navigation** - Fixed header with logo and section links
2. **Hero** - Value prop, CTAs, hero image placeholder
3. **Benefits** - 5 key benefits tied to JTBDs
4. **How It Works** - 3-step marketing flow
5. **Waitlist Form** - Primary lead capture
6. **Social Proof** - Testimonials and partner placeholders
7. **Pricing Teaser** - Early access benefits message
8. **FAQ** - Common questions with medical disclaimers
9. **Appointment Form** - Healthcare provider lead capture
10. **Footer** - Legal links, contact, disclaimer

## Design Guidelines

- **Color Palette:** Teal/green accents for health trust (no purple!)
- **Typography:** Large readable headlines, clean sans-serif
- **Tone:** Trustworthy, friendly, clinical-adjacent but non-medical
- **Accessibility:** Semantic HTML, proper labels, keyboard navigation

## Conversion Optimization

- Primary CTA appears in hero, navigation, and dedicated section
- Secondary CTA ("Learn how it works") reduces friction
- Inline form (no separate auth flow)
- Immediate success feedback
- Optional fields reduce form friction
- UTM tracking for campaign attribution

## What's NOT Included (By Design)

This MVP intentionally excludes:

- ❌ Authentication/login flows
- ❌ User dashboards or app UI
- ❌ Device integrations (placeholders only)
- ❌ AI generation UI (placeholders only)
- ❌ Payment/checkout flows
- ❌ Medical diagnosis features
- ❌ HIPAA compliance implementation

These features are marked as "Coming soon" or "Early access" in the UI.

## License

Proprietary - All rights reserved

## Contact

For questions or partnership inquiries: hello@healthtrack.ai
