-- Fix critical security vulnerability: Prevent public access to contact submissions
-- This ensures customer contact data cannot be stolen while maintaining functionality

CREATE POLICY "Deny public read access to contact_submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (false);

-- Note: The edge function uses the service role key which bypasses RLS,
-- so it can still read submissions for processing emails if needed.
-- Public users can still submit contact forms (INSERT policy remains unchanged).