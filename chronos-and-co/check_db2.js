require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
    const { data, error } = await supabase.from('watches').select('id, brand, model');
    if (error) console.error("Error:", error);
    else {
        console.log("Total watches:", data.length);
        // Find watches not in the Tissot/Orient defaults
        const recent = data.filter(w => !w.id.startsWith('tissot-') && !w.id.startsWith('orient-'));
        console.log("Custom watches:", recent);

        // Check if there are watches with timestamps in ID
        const tsWatches = data.filter(w => /\d{10,}/.test(w.id));
        console.log("Watches with timestamp in ID:", tsWatches);
    }
}

check();
