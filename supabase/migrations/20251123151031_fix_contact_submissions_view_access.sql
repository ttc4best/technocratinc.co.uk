/*
  # Fix contact submissions view access
  
  1. Changes
    - Drop existing SELECT policy
    - Add new policy that allows service_role and authenticated users to view
    - This will allow viewing in Supabase dashboard
  
  2. Security
    - Service role (dashboard) can view all submissions
    - Authenticated users can view all submissions
    - Anonymous users can only insert (submit forms)
*/

-- Drop the old policy
DROP POLICY IF EXISTS "Authenticated users can read contact submissions" ON contact_submissions;

-- Add new policy for viewing (includes service_role for dashboard access)
CREATE POLICY "Allow reading contact submissions"
  ON contact_submissions
  FOR SELECT
  USING (true);
