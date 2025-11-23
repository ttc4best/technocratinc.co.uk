/*
  # Add postgres role access to contact submissions

  1. Changes
    - Update SELECT policy to explicitly include postgres role for dashboard access
    
  2. Security
    - Allows all roles including postgres (dashboard) to view submissions
*/

DROP POLICY IF EXISTS "Anyone can view contact submissions" ON contact_submissions;

CREATE POLICY "Allow all roles to view contact submissions"
  ON contact_submissions
  FOR SELECT
  USING (true);
