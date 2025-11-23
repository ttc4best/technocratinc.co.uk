/*
  # Fix Contact Submissions Dashboard Access

  1. Changes
    - Drop the existing SELECT policy that only works for 'public' role
    - Create a new SELECT policy that works for authenticated users AND service role (dashboard access)
    
  2. Security
    - Authenticated users can view all contact submissions
    - Service role (used by Supabase dashboard) can view all submissions
*/

-- Drop the old policy
DROP POLICY IF EXISTS "Allow reading contact submissions" ON contact_submissions;

-- Create a new policy that works with the dashboard
CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated, service_role
  USING (true);
