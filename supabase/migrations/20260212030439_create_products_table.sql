/*
  # Create products table for streetwear store

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text) - Product name
      - `description` (text) - Product description
      - `price` (numeric) - Product price
      - `image_url` (text) - Product image URL
      - `category` (text) - Category: 'sneakers', 'men', 'women'
      - `sizes` (text[]) - Available sizes array
      - `stock` (integer) - Stock quantity
      - `created_at` (timestamptz) - Creation timestamp

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access (anyone can view products)
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  image_url text NOT NULL,
  category text NOT NULL CHECK (category IN ('sneakers', 'men', 'women')),
  sizes text[] NOT NULL DEFAULT '{}',
  stock integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON products
  FOR SELECT
  TO anon
  USING (true);