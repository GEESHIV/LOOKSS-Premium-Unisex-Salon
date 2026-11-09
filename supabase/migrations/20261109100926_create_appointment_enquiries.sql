/*
# Create appointment enquiries table

1. New Tables
- `appointment_enquiries`: one row per appointment enquiry submitted from the website booking form.
  - `id` (uuid, primary key)
  - `customer_name` (text, required, 1 to 100 characters)
  - `mobile_number` (text, required, 10 to 15 characters)
  - `gender` (text, required, one of Male / Female / Other)
  - `service_required` (text, required, up to 150 characters)
  - `preferred_date` (date, required)
  - `preferred_time` (text, required, up to 20 characters)
  - `message` (text, optional, up to 1000 characters)
  - `created_at` (timestamp, defaults to now)

2. Security
- Row level security is enabled so the table is locked by default.
- Visitors (anon) and signed-in users can only INSERT new enquiries. Reading, updating and deleting are not permitted through the public website, so customer details stay private.
- The insert policy re-checks the required fields on the server side.

3. Notes
- No existing data is modified. This is a new table.
*/

CREATE TABLE IF NOT EXISTS appointment_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL CHECK (char_length(customer_name) BETWEEN 1 AND 100),
  mobile_number text NOT NULL CHECK (char_length(mobile_number) BETWEEN 10 AND 15),
  gender text NOT NULL CHECK (gender IN ('Male', 'Female', 'Other')),
  service_required text NOT NULL CHECK (char_length(service_required) BETWEEN 1 AND 150),
  preferred_date date NOT NULL,
  preferred_time text NOT NULL CHECK (char_length(preferred_time) BETWEEN 1 AND 20),
  message text CHECK (message IS NULL OR char_length(message) <= 1000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE appointment_enquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON appointment_enquiries TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_appointment_enquiries" ON appointment_enquiries;
CREATE POLICY "anon_insert_appointment_enquiries" ON appointment_enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(customer_name) BETWEEN 1 AND 100
    AND char_length(mobile_number) BETWEEN 10 AND 15
    AND gender IN ('Male', 'Female', 'Other')
    AND char_length(service_required) BETWEEN 1 AND 150
    AND char_length(preferred_time) BETWEEN 1 AND 20
    AND (message IS NULL OR char_length(message) <= 1000)
  );
