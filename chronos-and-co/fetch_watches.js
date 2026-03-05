const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const envPath = '.env.local';
let envUrl = '';
let envKey = '';

try {
  const envFile = fs.readFileSync(envPath, 'utf8');
  envFile.split('\n').forEach(line => {
    if (line.startsWith('NEXT_PUBLIC_SUPABASE_URL=')) envUrl = line.split('=')[1];
    if (line.startsWith('NEXT_PUBLIC_SUPABASE_ANON_KEY=')) envKey = line.split('=')[1];
  });
} catch (e) {
  console.log('No .env.local found');
}

const supabase = createClient(envUrl, envKey);

async function check() {
  const { data, error } = await supabase.from('watches').select('brand, model, id, availability').order('id', { ascending: false }).limit(5);
  console.log('Error:', error);
  console.log('Watches:', data);
}
check();
