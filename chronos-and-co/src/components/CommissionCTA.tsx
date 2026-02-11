'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X } from 'lucide-react';

export function CommissionCTA() {
    const [isSelectionOpen, setIsSelectionOpen] = useState(false);
    const brands = ['Tissot', 'Seiko', 'Orient'];

    return (
        <section className="bg-black py-24 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-white/40 font-serif italic text-lg md:text-xl mb-8 tracking-wide">
                        ¿Busca una referencia específica? Permita que nuestra red la asegure para usted.
                    </p>

                    <button
                        onClick={() => setIsSelectionOpen(true)}
                        className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-sm transition-all duration-300"
                    >
                        <div className="absolute inset-0 border border-white/30 group-hover:border-gold-500 transition-colors duration-300" />
                        <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/10 transition-colors duration-300" />

                        <span className="relative z-10 text-white group-hover:text-gold-200 font-sans uppercase tracking-[0.2em] text-sm font-medium transition-colors duration-300">
                            Ordena el tuyo
                        </span>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gold-500/5 blur-md" />
                    </button>
                </motion.div>
            </div>

            {/* Brand Selection Modal */}
            <AnimatePresence>
                {isSelectionOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsSelectionOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-rich-black border border-white/10 p-8 rounded-sm max-w-md w-full relative shadow-2xl"
                        >
                            <button
                                onClick={() => setIsSelectionOpen(false)}
                                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <h3 className="text-xl font-display text-white mb-2 text-center">Seleccione su Marca</h3>
                            <p className="text-white/40 text-sm text-center mb-8">Elija la colección que desea explorar</p>

                            <div className="space-y-3">
                                {brands.map((brand) => (
                                    <Link
                                        key={brand}
                                        href={`/collections/${brand.toLowerCase()}`}
                                        className="block w-full py-4 px-6 bg-white/5 hover:bg-gold-500 hover:text-black border border-white/10 hover:border-gold-500 text-white transition-all duration-300 uppercase tracking-widest text-sm font-bold text-center"
                                        onClick={() => setIsSelectionOpen(false)}
                                    >
                                        {brand}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
