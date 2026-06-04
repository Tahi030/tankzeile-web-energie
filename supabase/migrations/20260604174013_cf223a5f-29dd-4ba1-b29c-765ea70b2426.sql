DROP POLICY IF EXISTS "Allow public inserts to contact_submissions" ON public.contact_submissions;

CREATE POLICY "Allow validated public inserts to contact_submissions"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 200
  AND length(btrim(email)) BETWEEN 3 AND 320
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(btrim(subject)) BETWEEN 1 AND 300
  AND length(btrim(message)) BETWEEN 1 AND 5000
);