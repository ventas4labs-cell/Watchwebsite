
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''; // Use service role if available for unlimited access, but anon might work if RLS allows update

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const KEY_MAPPING: Record<string, string> = {
    "Movimiento": "movement",
    "Movement": "movement",
    "movement": "movement",
    "Tamaño de Caja": "caseSize",
    "Case Size": "caseSize",
    "caseSize": "caseSize",
    "casesize": "caseSize",
    "Resistencia al Agua": "waterResistance",
    "Water Resistance": "waterResistance",
    "waterResistance": "waterResistance",
    "waterresistance": "waterResistance",
    "Cristal": "crystal",
    "Crystal": "crystal",
    "crystal": "crystal",
    "Material de la Caja": "caseMaterial",
    "Case Material": "caseMaterial",
    "caseMaterial": "caseMaterial"
};

async function standardize() {
    console.log('Fetching watches...');
    const { data: watches, error } = await supabase.from('watches').select('*');

    if (error) {
        console.error('Error fetching watches:', error);
        return;
    }

    console.log(`Found ${watches.length} watches. Processing...`);

    let updatedCount = 0;

    for (const watch of watches) {
        const oldDetails = watch.details || {};
        const newDetails: Record<string, string> = {};
        let needsUpdate = false;

        // Normalize keys
        for (const [key, value] of Object.entries(oldDetails)) {
            const standardKey = KEY_MAPPING[key] || key; // Default to original if not known, but aim for standard

            // If the key is changing, or if we have duplicates (which Object.entries might not show if they are exact strict duplicates, 
            // but here we are merging different keys into one standard key)

            if (standardKey !== key) {
                needsUpdate = true;
            }

            // If we already have a value for this standard key, we might be overwriting. 
            // Prefer the one that is non-empty. 
            if (newDetails[standardKey]) {
                // If current is empty and new value is valid, take it. 
                // If we already have a value, keep duplicated source? 
                // Implementation plan says "Deduplication". So we just keep the first valid one.
                needsUpdate = true; // We are merging keys
            } else {
                if (value && typeof value === 'string' && value.trim() !== '') {
                    newDetails[standardKey] = value;
                }
            }
        }

        // Check if details actually changed deeply (simple key check above might miss value changes or removals)
        // Actually, let's just compare JSON strings or keys.
        const sortedOld = JSON.stringify(oldDetails);
        const sortedNew = JSON.stringify(newDetails);

        if (sortedOld !== sortedNew) {
            const { error: updateError } = await supabase
                .from('watches')
                .update({ details: newDetails })
                .eq('id', watch.id);

            if (updateError) {
                console.error(`Failed to update ${watch.id}:`, updateError);
            } else {
                console.log(`Updated ${watch.id}`);
                updatedCount++;
            }
        }
    }

    console.log(` Standardization complete. Updated ${updatedCount} watches.`);
}

standardize();
