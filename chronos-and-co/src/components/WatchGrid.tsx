'use client';

import React from 'react';

import { Watch } from '@/lib/seed-data';
import { ProductCard } from './ProductCard';
import { motion } from 'framer-motion';

interface WatchGridProps {
    watches: Watch[];
}

export function WatchGrid({ watches }: WatchGridProps) {
    const [visibleCount, setVisibleCount] = React.useState(12);

    if (watches.length === 0) {
        return (
            <div className="py-20 text-center text-white/40">
                <p>No se encontraron relojes para esta colección.</p>
            </div>
        );
    }

    const visibleWatches = watches.slice(0, visibleCount);
    const hasMore = visibleCount < watches.length;

    const loadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 12, watches.length));
    };

    return (
        <section className="container mx-auto px-6 py-20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
                {visibleWatches.map((watch, index) => (
                    <motion.div
                        key={watch.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index % 12) * 0.05, duration: 0.4 }}
                    >
                        <ProductCard watch={watch} />
                    </motion.div>
                ))}
            </div>

            {hasMore && (
                <div className="mt-20 flex justify-center">
                    <button
                        onClick={loadMore}
                        className="px-8 py-3 bg-transparent border border-white/20 text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        Cargar Más
                    </button>
                </div>
            )}
        </section>
    );
}
