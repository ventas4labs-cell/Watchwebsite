'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Plane, Truck, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Hero() {
    const [isSelectionOpen, setIsSelectionOpen] = useState(false);
    const brands = ['Tissot', 'Seiko', 'Orient'];

    return (
        <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/hero-background.jpg')" }}
                />
                {/* Dark, Moody Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
            </div>

            <div className="relative z-20 text-center space-y-6 md:space-y-10 px-6 max-w-5xl mx-auto flex flex-col justify-center h-full pt-32 pb-20 md:pt-32 md:pb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="font-display text-white font-medium tracking-tight leading-tight"
                    style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}
                >
                    Relojes Globales. <br />
                    <span className="text-gold-200 italic font-serif opacity-90 block mt-2 md:inline md:mt-0">Cero Riesgo.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                    className="max-w-2xl mx-auto text-gold-100/80 font-light leading-relaxed"
                    style={{ fontSize: "clamp(1rem, 1.2vw, 1.25rem)" }}
                >
                    Comisione relojes auténticos de alta gama del mercado internacional.
                    Manejamos el abastecimiento, tránsito y aduanas.
                </motion.p>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 pt-4 md:pt-8"
                >
                    <div className="flex items-center gap-3">
                        <div className="p-2 md:p-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                            <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-gold-500" />
                        </div>
                        <span className="text-white/90 text-xs md:text-sm tracking-widest uppercase font-medium">Autenticidad</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 md:p-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                            <Plane className="w-4 h-4 md:w-5 md:h-5 text-gold-500" />
                        </div>
                        <span className="text-white/90 text-xs md:text-sm tracking-widest uppercase font-medium">Tránsito Asegurado</span>
                    </div>
                </motion.div>

                {/* Main Call to Action: Track Order */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="pt-6 md:pt-4"
                >
                    <Link
                        href="/track"
                        className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-sm transition-all group backdrop-blur-sm active:bg-gold-500/10"
                    >
                        <Truck className="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
                        <span className="text-xs uppercase font-bold tracking-[0.2em]">Rastrear Pedido</span>
                    </Link>
                </motion.div>

                {/* Secondary Call to Action: Commission (Moved from CommissionCTA) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 1 }}
                    className="pt-8 md:pt-12 border-t border-white/10 mt-8 md:mt-12"
                >
                    <p className="text-white/40 font-serif italic text-lg md:text-xl mb-6 tracking-wide">
                        ¿Busca una referencia específica? Permita que nuestra red la asegure para usted.
                    </p>

                    <button
                        onClick={() => setIsSelectionOpen(true)}
                        className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-sm transition-all duration-300"
                    >
                        <div className="absolute inset-0 border border-gold-500/50 group-hover:border-gold-500 transition-colors duration-300" />
                        <div className="absolute inset-0 bg-gold-500/10 group-hover:bg-gold-500/20 transition-colors duration-300" />

                        <span className="relative z-10 text-gold-200 group-hover:text-white font-sans uppercase tracking-[0.2em] text-sm font-bold transition-colors duration-300">
                            Hacer Pre-orden
                        </span>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gold-500/20 blur-xl" />
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
