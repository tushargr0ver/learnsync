import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;  // Replace with your Supabase URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseKey);
