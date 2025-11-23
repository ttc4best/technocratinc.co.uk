import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  description: string;
  services: string[];
  image_url: string | null;
  result: string | null;
  is_featured: boolean;
  display_order: number;
  created_at: string;
};

export type Testimonial = {
  id: string;
  client_name: string;
  client_position: string;
  client_company: string;
  testimonial: string;
  avatar_url: string | null;
  rating: number;
  is_active: boolean;
  created_at: string;
};

export type ContactSubmission = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  services_interested?: string[];
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string | null;
  author_name: string;
  author_avatar: string | null;
  category: string;
  tags: string[];
  is_published: boolean;
  published_at: string | null;
  reading_time: number;
  views: number;
  created_at: string;
  updated_at: string;
};

export type Service = {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  icon: string;
  hero_image: string | null;
  features: any;
  benefits: any;
  pricing_info: string | null;
  technologies: string[];
  faq: any;
  is_active: boolean;
  display_order: number;
  created_at: string;
};

export type TeamMember = {
  id: string;
  name: string;
  position: string;
  bio: string;
  photo_url: string | null;
  linkedin_url: string | null;
  twitter_url: string | null;
  email: string | null;
  specialties: string[];
  is_featured: boolean;
  display_order: number;
  created_at: string;
};

export type FAQ = {
  id: string;
  category: string;
  question: string;
  answer: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};
