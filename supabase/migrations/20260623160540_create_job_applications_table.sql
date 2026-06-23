
CREATE TABLE IF NOT EXISTS job_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  profession TEXT NOT NULL,
  nationality TEXT NOT NULL,
  age INTEGER NOT NULL,
  phone_number TEXT NOT NULL,
  selected_job TEXT NOT NULL,
  phone_verified BOOLEAN DEFAULT FALSE,
  verification_code TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_job_applications" ON job_applications
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "select_job_applications" ON job_applications
  FOR SELECT TO anon USING (true);

CREATE POLICY "update_job_applications" ON job_applications
  FOR UPDATE TO anon USING (true) WITH CHECK (true);
