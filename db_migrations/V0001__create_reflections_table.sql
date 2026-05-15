CREATE TABLE IF NOT EXISTS reflections (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  student_group TEXT,
  phrases JSONB,
  stars INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);