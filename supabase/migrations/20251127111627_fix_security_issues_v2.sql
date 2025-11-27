/*
  # Fix Database Security Issues

  1. **Remove Unused Indexes**
     - Drop `idx_case_studies_featured` (unused)
     - Drop `idx_contact_submissions_status` (unused)
     - Drop `idx_blog_posts_category` (unused)
     - Drop `idx_blog_posts_slug` (redundant with unique constraint)
     - Drop `idx_services_slug` (redundant with unique constraint)
     - Drop `idx_team_members_featured` (unused)
     - Drop `idx_faqs_category` (unused)
     - Drop `idx_faqs_display_order` (unused)

  2. **Remove Duplicate RLS Policies**
     - Keep only one SELECT policy per table
     - Remove redundant "Anyone can..." policies
     - Keep the "Public can..." policies as they are more descriptive

  3. **Fix Function Search Path**
     - Secure `update_updated_at_column` function with immutable search_path
     - Prevents SQL injection through search_path manipulation
     - Drop triggers first, then function, then recreate with security fix

  4. **Security Notes**
     - All changes improve security posture
     - No data loss - only removing unused indexes
     - RLS policies remain restrictive and secure
*/

-- 1. Remove unused indexes
DROP INDEX IF EXISTS public.idx_case_studies_featured;
DROP INDEX IF EXISTS public.idx_contact_submissions_status;
DROP INDEX IF EXISTS public.idx_blog_posts_category;
DROP INDEX IF EXISTS public.idx_blog_posts_slug;
DROP INDEX IF EXISTS public.idx_services_slug;
DROP INDEX IF EXISTS public.idx_team_members_featured;
DROP INDEX IF EXISTS public.idx_faqs_category;
DROP INDEX IF EXISTS public.idx_faqs_display_order;

-- 2. Remove duplicate RLS policies (keep the "Public can..." versions)

-- Drop duplicate blog_posts policy
DROP POLICY IF EXISTS "Anyone can view published blog posts" ON public.blog_posts;

-- Drop duplicate case_studies policy
DROP POLICY IF EXISTS "Anyone can view case studies" ON public.case_studies;

-- Drop duplicate faqs policy
DROP POLICY IF EXISTS "Anyone can view active FAQs" ON public.faqs;

-- Drop duplicate services policy
DROP POLICY IF EXISTS "Anyone can view active services" ON public.services;

-- Drop duplicate testimonials policy
DROP POLICY IF EXISTS "Anyone can view active testimonials" ON public.testimonials;

-- 3. Fix function search path security issue

-- Drop triggers that depend on the function
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON public.blog_posts;
DROP TRIGGER IF EXISTS update_faqs_updated_at ON public.faqs;

-- Now drop and recreate the function with security fix
DROP FUNCTION IF EXISTS public.update_updated_at_column();

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

-- Recreate the triggers
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_faqs_updated_at
  BEFORE UPDATE ON public.faqs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
