'use client';

import { motion } from 'framer-motion';

export function CommissionCTA() {
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

                    <button className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-sm transition-all duration-300">
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
        </section>
    );
}
