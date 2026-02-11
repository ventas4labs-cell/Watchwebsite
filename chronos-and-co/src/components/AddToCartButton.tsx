'use client';
import { useStore } from '@/lib/store';
import { Watch } from '@/lib/seed-data';
import { motion } from 'framer-motion';

export function AddToCartButton({ watch }: { watch: Watch }) {
    const addToCart = useStore((state) => state.addToCart);

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => addToCart(watch)}
            className="w-full bg-gold-500 text-black font-bold py-5 hover:bg-gold-400 transition-colors uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
        >
            Add to Collection
        </motion.button>
    );
}
