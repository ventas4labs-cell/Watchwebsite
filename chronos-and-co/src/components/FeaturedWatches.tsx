'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { Watch } from '@/lib/seed-data';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export function FeaturedWatches() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [watches, setWatches] = useState<Watch[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchFeaturedWatches() {
            if (!supabaseUrl || !supabaseKey) {
                setIsLoading(false);
                return;
            }

            const { data, error } = await supabase
                .from('watches')
                .select('*')
                .eq('is_featured', true);

            if (data && data.length > 0) {
                setWatches(data as Watch[]);
            } else {
                // Fallback or empty state? For now, let's just leave it empty if nothing is featured.
                // Or we could fetch some default ones? 
                // Let's fetch the first 3 watches as fallback if none are featured explicitly.
                const { data: fallbackData } = await supabase
                    .from('watches')
                    .select('*')
                    .limit(3);

                if (fallbackData) {
                    setWatches(fallbackData as Watch[]);
                }
            }
            setIsLoading(false);
        }

        fetchFeaturedWatches();
    }, []);

    const nextWatch = () => {
        setCurrentIndex((prev) => (prev + 1) % watches.length);
    };

    const prevWatch = () => {
        setCurrentIndex((prev) => (prev - 1 + watches.length) % watches.length);
    };

    if (isLoading) {
        return <div className="h-[600px] flex items-center justify-center"><div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" /></div>;
    }

    if (watches.length === 0) return null;

    const currentWatch = watches[currentIndex];

    // Ensure we have a valid image for gallery mapping, use main image if gallery is missing/empty
    const displayGallery = currentWatch.gallery && currentWatch.gallery.length > 0
        ? currentWatch.gallery.slice(0, 3)
        : [currentWatch.image, currentWatch.image, currentWatch.image]; // Fallback grid

    return (
        <section id="catalog" className="py-20 md:py-32 container mx-auto px-6 relative group">
            {watches.length > 1 && (
                <>
                    <button
                        onClick={prevWatch}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-gold-500 text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextWatch}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-gold-500 text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                        {watches.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-gold-500 scale-125' : 'bg-white/20 hover:bg-white/40'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentWatch.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-gold-500 tracking-[0.3em] uppercase text-xs font-bold block mb-4"
                            >
                                Pieza Destacada
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl md:text-7xl font-display text-white mb-8 leading-none"
                            >
                                {currentWatch.brand} <br /><span className="text-white/40">{currentWatch.model}</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-white/60 text-lg font-light max-w-xl leading-relaxed mb-10 mx-auto lg:mx-0"
                            >
                                {currentWatch.description}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link
                                    href={`/product/${currentWatch.id}`}
                                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold-500 transition-colors duration-300"
                                >
                                    Ver Colección <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Main Hero Image */}
                        <div className="flex-1 relative">
                            <div className="absolute inset-0 bg-gold-500/5 blur-[100px] rounded-full" />
                            <motion.img
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                src={currentWatch.image}
                                alt={currentWatch.model}
                                className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl object-contain h-[500px]"
                            />
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {displayGallery.map((src, index) => (
                            <motion.div
                                key={`${currentWatch.id}-gallery-${index}`}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (index * 0.1) }}
                                className="group relative aspect-square bg-white/[0.02] border border-white/5 overflow-hidden p-8 flex items-center justify-center cursor-pointer hover:border-gold-500/30 transition-colors duration-500"
                            >
                                <img
                                    src={src}
                                    alt={`Detail ${index + 1}`}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}
