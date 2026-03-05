'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Bookmark } from 'lucide-react';

export function SaveToVaultButton({ productId }: { productId: string }) {
    const [isSaved, setIsSaved] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkSavedStatus = async () => {
            if (!supabase) return;
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                setLoading(false);
                return;
            }

            const { data } = await supabase
                .from('wishlist')
                .select('id')
                .eq('user_id', session.user.id)
                .eq('product_id', productId)
                .single();

            if (data) {
                setIsSaved(true);
            }
            setLoading(false);
        };

        checkSavedStatus();
    }, [productId]);

    const handleToggleVault = async () => {
        if (!supabase) return;

        const { data: { session } } = await supabase.auth.getSession();

        if (!session) {
            router.push('/auth');
            return;
        }

        setLoading(true);

        if (isSaved) {
            // Remove from vault
            await supabase
                .from('wishlist')
                .delete()
                .eq('user_id', session.user.id)
                .eq('product_id', productId);
            setIsSaved(false);
        } else {
            // Save to vault
            await supabase
                .from('wishlist')
                .insert({ user_id: session.user.id, product_id: productId });
            setIsSaved(true);
        }

        setLoading(false);
    };

    return (
        <button
            onClick={handleToggleVault}
            disabled={loading}
            className={`w-full py-4 uppercase tracking-[0.2em] font-bold text-xs flex items-center justify-center gap-3 transition-colors ${isSaved
                    ? 'bg-transparent text-gold-500 border border-gold-500/50 hover:bg-gold-500/10'
                    : 'bg-black text-white hover:text-gold-500 border border-white/20 hover:border-gold-500/50'
                }`}
        >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-gold-500' : ''}`} />
            {loading ? 'Procesando...' : isSaved ? 'En Mi Bóveda' : 'Guardar en Bóveda'}
        </button>
    );
}
