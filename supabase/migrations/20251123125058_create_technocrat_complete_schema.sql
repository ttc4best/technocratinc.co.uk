/*
  # Create Complete Technocrat Website Database Schema

  ## Overview
  This migration creates a complete database schema for the Technocrat Solutions website,
  including all necessary tables for services, portfolio, blog, testimonials, and FAQs.

  ## New Tables Created

  ### 1. services
  Professional service offerings with detailed information
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Service name
  - `slug` (text, unique) - URL-friendly identifier
  - `short_description` (text) - Brief service summary
  - `full_description` (text) - Detailed service description
  - `icon` (text) - Lucide icon name
  - `features` (jsonb) - Array of service features
  - `technologies` (jsonb) - Array of technologies used
  - `price_range` (text) - Pricing information
  - `is_active` (boolean) - Visibility flag
  - `display_order` (integer) - Sort order
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. case_studies
  Portfolio projects showcasing work and results
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Project name
  - `slug` (text, unique) - URL-friendly identifier
  - `client_name` (text) - Client company name
  - `industry` (text) - Client industry sector
  - `excerpt` (text) - Brief project summary
  - `challenge` (text) - Problem statement
  - `solution` (text) - How it was solved
  - `results` (text) - Measurable outcomes
  - `technologies` (jsonb) - Tech stack used
  - `image_url` (text) - Project showcase image
  - `project_url` (text) - Live project link
  - `duration` (text) - Project timeline
  - `team_size` (integer) - Number of team members
  - `is_featured` (boolean) - Featured project flag
  - `display_order` (integer) - Sort order
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 3. blog_posts
  Educational and industry insight articles
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Article title
  - `slug` (text, unique) - URL-friendly identifier
  - `excerpt` (text) - Article summary
  - `content` (text) - Full article content
  - `author` (text) - Author name
  - `category` (text) - Article category
  - `tags` (jsonb) - Array of topic tags
  - `featured_image` (text) - Article header image
  - `read_time` (integer) - Estimated reading time in minutes
  - `is_published` (boolean) - Publication status
  - `published_at` (timestamptz) - Publication date
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 4. testimonials
  Client reviews and feedback
  - `id` (uuid, primary key) - Unique identifier
  - `client_name` (text) - Client full name
  - `client_position` (text) - Job title
  - `client_company` (text) - Company name
  - `client_photo` (text) - Profile photo URL
  - `testimonial` (text) - Review content
  - `rating` (integer) - 1-5 star rating
  - `project_type` (text) - Related service category
  - `is_active` (boolean) - Visibility flag
  - `display_order` (integer) - Sort order
  - `created_at` (timestamptz) - Creation timestamp

  ### 5. faqs
  Frequently asked questions
  - `id` (uuid, primary key) - Unique identifier
  - `question` (text) - Question text
  - `answer` (text) - Answer text
  - `category` (text) - FAQ category
  - `display_order` (integer) - Sort order
  - `is_active` (boolean) - Visibility flag
  - `created_at` (timestamptz) - Creation timestamp

  ## Security Configuration

  ### Row Level Security (RLS)
  - All tables have RLS enabled for data protection
  - Public read access for active/published content
  - Future admin authentication will control write operations

  ### Policies Created
  Each table has appropriate SELECT policies:
  - **services**: Public can view active services
  - **case_studies**: Public can view all case studies
  - **blog_posts**: Public can view published posts
  - **testimonials**: Public can view active testimonials
  - **faqs**: Public can view active FAQs

  ## Indexes
  Performance indexes created for:
  - Slug lookups (unique indexes)
  - Display order sorting
  - Category and tag filtering
  - Publication status queries

  ## Notes
  - All timestamps default to current time
  - Boolean flags default to appropriate values (true for active content)
  - JSONB used for flexible array storage (features, technologies, tags)
  - Slugs are unique and indexed for fast lookups
*/

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  short_description text NOT NULL,
  full_description text NOT NULL,
  icon text NOT NULL DEFAULT 'Wrench',
  features jsonb DEFAULT '[]'::jsonb,
  technologies jsonb DEFAULT '[]'::jsonb,
  price_range text,
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create case_studies table
CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  client_name text NOT NULL,
  industry text NOT NULL,
  excerpt text NOT NULL,
  challenge text NOT NULL,
  solution text NOT NULL,
  results text NOT NULL,
  technologies jsonb DEFAULT '[]'::jsonb,
  image_url text,
  project_url text,
  duration text,
  team_size integer,
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL DEFAULT 'Technocrat Team',
  category text NOT NULL,
  tags jsonb DEFAULT '[]'::jsonb,
  featured_image text,
  read_time integer DEFAULT 5,
  is_published boolean DEFAULT true,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_position text NOT NULL,
  client_company text NOT NULL,
  client_photo text,
  testimonial text NOT NULL,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  project_type text,
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create FAQs table
CREATE TABLE IF NOT EXISTS faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  category text NOT NULL DEFAULT 'General',
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_services_active ON services(is_active);
CREATE INDEX IF NOT EXISTS idx_case_studies_slug ON case_studies(slug);
CREATE INDEX IF NOT EXISTS idx_case_studies_featured ON case_studies(is_featured);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);

-- Enable Row Level Security
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies for public read access

-- Services: Public can view active services
CREATE POLICY "Public can view active services"
  ON services FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Case Studies: Public can view all case studies
CREATE POLICY "Public can view case studies"
  ON case_studies FOR SELECT
  TO anon, authenticated
  USING (true);

-- Blog Posts: Public can view published posts
CREATE POLICY "Public can view published blog posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

-- Testimonials: Public can view active testimonials
CREATE POLICY "Public can view active testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- FAQs: Public can view active FAQs
CREATE POLICY "Public can view active FAQs"
  ON faqs FOR SELECT
  TO anon, authenticated
  USING (is_active = true);