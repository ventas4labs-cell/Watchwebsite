
import { createClient } from '@supabase/supabase-js';
import { Order } from './store';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export interface SupabaseOrder {
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    customer_address?: string;
    tracking_number: string;
    order_items: any[];
    total_amount: number;
    status: string;
    coupon_used?: boolean;
}

export const submitOrderToSupabase = async (order: SupabaseOrder) => {
    if (!supabase) {
        console.warn('Supabase client not initialized. Skipping order submission.');
        return { success: false, error: 'Supabase not configured' };
    }

    try {
        const { data, error } = await supabase
            .from('orders')
            .insert([order])
            .select();

        if (error) {
            console.error('Error inserting order into Supabase:', error);
            return { success: false, error };
        }

        return { success: true, data };
    } catch (error) {
        console.error('Unexpected error submitting order:', error);
        return { success: false, error };
    }
};

export const uploadWatchImage = async (file: File) => {
    if (!supabase) return null;

    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
        .from('watches')
        .upload(filePath, file);

    if (uploadError) {
        console.error('Error uploading image:', uploadError);
        return null;
    }

    const { data } = supabase.storage.from('watches').getPublicUrl(filePath);
    return data.publicUrl;
};
