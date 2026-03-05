require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
    const payload = {
        id: `test-insert-${Date.now()}`,
        brand: "Test",
        model: "Model X",
        price: 100,
        description: "Testing RLS",
        image: "",
        availability: "in-stock",
        details: {}
    };

    // Notice the .select() here!
    const { data, error } = await supabase.from('watches').insert([payload]).select();

    console.log("Error:", error);
    console.log("Data returned:", data);
}

check();
