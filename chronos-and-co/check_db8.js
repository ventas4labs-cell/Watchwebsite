require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
    const { data, error } = await supabase.from('watches').select('created_at, brand, model, id').gte('created_at', '2026-03-03T00:00:00Z');
    if (error) console.error("Error:", error);
    else {
        console.log("Watches inserted today:");
        console.log(JSON.stringify(data, null, 2));
    }
}
check();
