import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qxvdkqjsazcekdqeusmm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4dmRrcWpzYXpjZWtkcWV1c21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyMTc0MjYsImV4cCI6MjA5Nzc5MzQyNn0.Ysi39i7wxVCZ7SRgDoTwBpyuTTNxpyqdO8C4uOzAFcQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
