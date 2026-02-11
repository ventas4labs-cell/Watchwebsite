'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Plane, Truck } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/hero-background.jpg')" }}
            >
                {/* Dark, Moody Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
            </div>

            <div className="relative z-20 text-center space-y-10 px-4 max-w-5xl mx-auto mt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-display text-white font-medium tracking-tight leading-tight"
                >
                    Relojes Globales. <br />
                    <span className="text-gold-200 italic font-serif opacity-90">Cero Riesgo de Importación.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                    className="max-w-2xl mx-auto text-gold-100/80 text-lg md:text-xl font-light leading-relaxed"
                >
                    Comisione relojes auténticos de alta gama del mercado internacional.
                    Manejamos el abastecimiento global, tránsito asegurado y liberación de aduanas,
                    entregándolo directamente en sus manos.
                </motion.p>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-8"
                >
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                            <ShieldCheck className="w-5 h-5 text-gold-500" />
                        </div>
                        <span className="text-white/90 text-sm tracking-widest uppercase font-medium">Autenticidad Garantizada</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                            <Plane className="w-5 h-5 text-gold-500" />
                        </div>
                        <span className="text-white/90 text-sm tracking-widest uppercase font-medium">Tránsito Totalmente Asegurado</span>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="pt-4"
                >
                    <Link
                        href="/track"
                        className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-sm transition-all group backdrop-blur-sm"
                    >
                        <Truck className="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
                        <span className="text-xs uppercase font-bold tracking-[0.2em]">Rastrear Pedido</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
