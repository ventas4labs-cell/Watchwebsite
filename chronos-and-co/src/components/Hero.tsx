'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Plane, Truck } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative h-[100dvh] md:h-screen min-h-[600px] md:min-h-[800px] flex flex-col items-center justify-center overflow-hidden">
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

            <div className="relative z-20 text-center space-y-6 md:space-y-10 px-6 max-w-5xl mx-auto flex flex-col justify-center h-full pb-20 md:pb-0">
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

                {/* Trust Badges - Hidden on very small screens if needed, or scaled */}
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

                {/* Call to Action */}
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
            </div>
        </section>
    );
}
