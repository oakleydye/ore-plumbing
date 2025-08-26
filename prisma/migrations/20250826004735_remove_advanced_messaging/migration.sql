-- Drop the ContactMessage table and its foreign key constraint
DROP TABLE IF EXISTS "public"."ContactMessage";

-- Remove any indexes that were created for the ContactMessage table
-- (These should be automatically dropped when the table is dropped, but including for completeness)

-- Note: The ContactRequest table itself remains unchanged, but any foreign key relationships to ContactMessage are removed
