/*
  # Add SELECT policy for contact submissions
  
  1. Changes
    - Add policy to allow authenticated users (you) to view contact submissions in dashboard
    - Service role can always access (for admin purposes)
  
  2. Security
    - Only authenticated users can read submissions
    - Anonymous users can still submit (INSERT policy already exists)
*/

-- Add policy to allow reading contact submissions
CREATE POLICY "Authenticated users can read contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
