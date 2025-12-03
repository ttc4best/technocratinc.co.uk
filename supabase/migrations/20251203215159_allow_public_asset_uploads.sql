-- Allow Public Uploads to Assets Bucket (Temporary for Development)
-- 
-- 1. Changes
--    - Allow anonymous users to upload files to public-assets bucket
--    - This makes it easier to upload logos, favicons, and certificates
--    
-- 2. Security Notes
--    - This is suitable for development and small projects
--    - For production, consider restricting to authenticated users only
--    - Files are publicly accessible once uploaded

-- Allow anyone (including anonymous users) to upload files
DROP POLICY IF EXISTS "Anyone can upload assets" ON storage.objects;

CREATE POLICY "Anyone can upload assets"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'public-assets');
