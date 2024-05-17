import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dczmwotttagunaqbrcdk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjem13b3R0dGFndW5hcWJyY2RrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3ODcxNDQsImV4cCI6MjAyOTM2MzE0NH0.ba52F2HwPFs8r67HGFupKKYEdLHJWqL7XhPWpz5W8Vs";
export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
