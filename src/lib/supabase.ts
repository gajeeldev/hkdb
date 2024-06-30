import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://txnrptehfdvtpboqdkvf.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4bnJwdGVoZmR2dHBib3Fka3ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MjQ1NDMsImV4cCI6MjAzMzAwMDU0M30.a4BG2fS3UJJfdLMkqhH1B6sDDU1qYatY9VkgIg366ds';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
