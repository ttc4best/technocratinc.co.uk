/*
  # Allow Anonymous Viewing of Contact Submissions in Dashboard

  1. Changes
    - Update SELECT policy to allow anon role (for SQL Editor in dashboard)
    
  2. Security
    - Anyone can view contact submissions (read-only)
    - Only allows SELECT, not INSERT/UPDATE/DELETE
*/

DROP POLICY IF EXISTS "Authenticated users can view contact submissions" ON contact_submissions;

CREATE POLICY "Anyone can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO anon, authenticated, service_role
  USING (true);
