
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { WATCHES } from '../src/lib/seed-data';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// Or Service Role Key if RLS prevents insert, but I enabled insert for all for now.
// Ideally use service role key for scripts.
// But let's try with Anon key first as I set up policies to allow insert.

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase URL or Key');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrate() {
    console.log(`Starting migration of ${WATCHES.length} watches...`);

    for (const watch of WATCHES) {
        // Map data to match table schema if needed, but it should be close.
        const { details, ...rest } = watch;

        const { error } = await supabase
            .from('watches')
            .upsert({
                ...rest,
                details: details, // jsonb
                // Ensure arrays are arrays
                gallery: watch.gallery || []
            }, { onConflict: 'id' });

        if (error) {
            console.error(`Error migrating ${watch.id}:`, error);
        } else {
            console.log(`Migrated ${watch.id}`);
        }
    }

    console.log('Migration complete.');
}

migrate();
