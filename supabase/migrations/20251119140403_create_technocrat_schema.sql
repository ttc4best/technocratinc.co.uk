/*
  # Technocrat Inc Website Database Schema

  ## Overview
  Creates the database structure for the Technocrat Inc website with tables for
  case studies, client testimonials, and contact form submissions.

  ## New Tables
  
  ### 1. case_studies
  Stores portfolio projects and case studies to showcase work
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Project title
  - `client` (text) - Client name
  - `description` (text) - Project description
  - `services` (text[]) - Array of services used
  - `image_url` (text) - Project thumbnail image
  - `result` (text) - Project outcomes/results
  - `is_featured` (boolean) - Whether to display prominently
  - `created_at` (timestamptz) - Record creation timestamp
  - `display_order` (integer) - Order for displaying projects
  
  ### 2. testimonials
  Stores client testimonials and reviews
  - `id` (uuid, primary key) - Unique identifier
  - `client_name` (text) - Name of the client
  - `client_position` (text) - Job title
  - `client_company` (text) - Company name
  - `testimonial` (text) - The testimonial content
  - `avatar_url` (text, optional) - Client photo URL
  - `rating` (integer) - Rating out of 5
  - `is_active` (boolean) - Whether to display
  - `created_at` (timestamptz) - Record creation timestamp
  
  ### 3. contact_submissions
  Stores contact form submissions
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Contact name
  - `email` (text) - Contact email
  - `company` (text, optional) - Company name
  - `phone` (text, optional) - Phone number
  - `message` (text) - Message content
  - `services_interested` (text[], optional) - Services they're interested in
  - `created_at` (timestamptz) - Submission timestamp
  - `status` (text) - Status (new, contacted, converted, closed)
  
  ## Security
  
  All tables have Row Level Security (RLS) enabled with appropriate policies:
  
  - **case_studies**: Public read access, no write access (admin manages via dashboard)
  - **testimonials**: Public read for active testimonials only
  - **contact_submissions**: Public insert only (for form submissions)
*/

-- Create case_studies table
CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  client text NOT NULL,
  description text NOT NULL,
  services text[] NOT NULL DEFAULT '{}',
  image_url text,
  result text,
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_position text NOT NULL,
  client_company text NOT NULL,
  testimonial text NOT NULL,
  avatar_url text,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  message text NOT NULL,
  services_interested text[] DEFAULT '{}',
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'closed')),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Case Studies Policies: Public read access
CREATE POLICY "Anyone can view case studies"
  ON case_studies FOR SELECT
  TO anon, authenticated
  USING (true);

-- Testimonials Policies: Public read access for active testimonials only
CREATE POLICY "Anyone can view active testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Contact Submissions Policies: Public can insert only
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_case_studies_featured ON case_studies(is_featured, display_order);
CREATE INDEX IF NOT EXISTS idx_testimonials_active ON testimonials(is_active, created_at);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status, created_at);