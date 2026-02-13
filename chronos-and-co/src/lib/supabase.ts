
import { createClient } from '@supabase/supabase-js';
import { Order } from './store';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface SupabaseOrder {
    customer_name: string;
    customer_email: string;
    order_items: any[];
    total_amount: number;
    status: string;
}

export const submitOrderToSupabase = async (order: SupabaseOrder) => {
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
