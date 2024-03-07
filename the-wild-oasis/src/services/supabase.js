import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ogvpodpuznujrqqbzpgu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ndnBvZHB1em51anJxcWJ6cGd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MDkwNDQsImV4cCI6MjAyNTM4NTA0NH0.e3Gjb5BrznXlUyop2snpinZTT6jW4_lCa_NRKunFLBY";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
