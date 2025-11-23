/*
  # Create FAQ Table

  1. New Tables
    - `faqs`
      - `id` (uuid, primary key)
      - `category` (text) - Category for organizing FAQs (e.g., General, Services, Pricing, Technical)
      - `question` (text) - The FAQ question
      - `answer` (text) - The detailed answer
      - `display_order` (integer) - Order in which FAQs should appear
      - `is_active` (boolean) - Whether the FAQ is visible
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `faqs` table
    - Add policy for public read access to active FAQs
*/

CREATE TABLE IF NOT EXISTS faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  question text NOT NULL,
  answer text NOT NULL,
  display_order integer NOT NULL DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active FAQs"
  ON faqs FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE INDEX IF NOT EXISTS idx_faqs_category ON faqs(category);
CREATE INDEX IF NOT EXISTS idx_faqs_display_order ON faqs(display_order);
