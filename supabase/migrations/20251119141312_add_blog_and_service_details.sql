/*
  # Expand Schema for Premium Multi-Page Website

  ## Overview
  Adds blog functionality and detailed service information to support a full multi-page website.

  ## New Tables
  
  ### 1. blog_posts
  Stores blog articles for content marketing and SEO
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Blog post title
  - `slug` (text, unique) - URL-friendly slug
  - `excerpt` (text) - Short description for listings
  - `content` (text) - Full blog post content (markdown/HTML)
  - `featured_image` (text) - Hero image URL
  - `author_name` (text) - Author name
  - `author_avatar` (text, optional) - Author photo URL
  - `category` (text) - Blog category
  - `tags` (text[]) - Array of tags
  - `is_published` (boolean) - Published status
  - `published_at` (timestamptz) - Publication date
  - `reading_time` (integer) - Estimated reading time in minutes
  - `views` (integer) - View count
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  
  ### 2. services
  Stores detailed information for each service offering
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Service title
  - `slug` (text, unique) - URL-friendly slug
  - `short_description` (text) - Brief description for cards
  - `full_description` (text) - Detailed description
  - `icon` (text) - Icon identifier
  - `hero_image` (text, optional) - Service page hero image
  - `features` (jsonb) - Array of features with descriptions
  - `benefits` (jsonb) - Array of benefits
  - `pricing_info` (text, optional) - Pricing details
  - `technologies` (text[]) - Technologies used
  - `faq` (jsonb, optional) - FAQs for the service
  - `is_active` (boolean) - Whether to display
  - `display_order` (integer) - Order for displaying
  - `created_at` (timestamptz) - Record creation timestamp
  
  ### 3. team_members
  Stores team member information for About page
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Full name
  - `position` (text) - Job title
  - `bio` (text) - Biography
  - `photo_url` (text, optional) - Profile photo
  - `linkedin_url` (text, optional) - LinkedIn profile
  - `twitter_url` (text, optional) - Twitter profile
  - `email` (text, optional) - Contact email
  - `specialties` (text[]) - Areas of expertise
  - `is_featured` (boolean) - Display on homepage
  - `display_order` (integer) - Order for displaying
  - `created_at` (timestamptz) - Record creation timestamp

  ## Updates to Existing Tables
  
  - Add `slug` field to case_studies for individual pages
  - Add more detailed fields to case_studies
  
  ## Security
  
  All tables have Row Level Security (RLS) enabled:
  
  - **blog_posts**: Public read for published posts only
  - **services**: Public read for active services
  - **team_members**: Public read access
*/

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  featured_image text,
  author_name text NOT NULL,
  author_avatar text,
  category text NOT NULL,
  tags text[] DEFAULT '{}',
  is_published boolean DEFAULT false,
  published_at timestamptz,
  reading_time integer DEFAULT 5,
  views integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  short_description text NOT NULL,
  full_description text NOT NULL,
  icon text NOT NULL,
  hero_image text,
  features jsonb DEFAULT '[]',
  benefits jsonb DEFAULT '[]',
  pricing_info text,
  technologies text[] DEFAULT '{}',
  faq jsonb DEFAULT '[]',
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  position text NOT NULL,
  bio text NOT NULL,
  photo_url text,
  linkedin_url text,
  twitter_url text,
  email text,
  specialties text[] DEFAULT '{}',
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Add slug to case_studies if not exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'case_studies' AND column_name = 'slug'
  ) THEN
    ALTER TABLE case_studies ADD COLUMN slug text;
    ALTER TABLE case_studies ADD COLUMN challenge text;
    ALTER TABLE case_studies ADD COLUMN solution text;
    ALTER TABLE case_studies ADD COLUMN technologies text[] DEFAULT '{}';
    ALTER TABLE case_studies ADD COLUMN project_url text;
    ALTER TABLE case_studies ADD COLUMN testimonial_id uuid;
  END IF;
END $$;

-- Create unique index on case_studies slug
CREATE UNIQUE INDEX IF NOT EXISTS idx_case_studies_slug ON case_studies(slug);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Blog Posts Policies: Public read for published posts only
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

-- Services Policies: Public read for active services
CREATE POLICY "Anyone can view active services"
  ON services FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Team Members Policies: Public read access
CREATE POLICY "Anyone can view team members"
  ON team_members FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_services_active ON services(is_active, display_order);
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_team_members_featured ON team_members(is_featured, display_order);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for blog_posts
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();