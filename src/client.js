// src/client.js
import { createClient } from '@supabase/supabase-js';

const URL = 'https://mfwwmpsdqhxeyertluxg.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1md3dtcHNkcWh4ZXllcnRsdXhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2NDI3MjAsImV4cCI6MjA2OTIxODcyMH0.D836Jn6_REay7OZGbS5yhbWKJrvtPwIs3xN3LWcQqts';

export const supabase = createClient(URL, API_KEY);
