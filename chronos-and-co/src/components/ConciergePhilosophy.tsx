'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Handshake } from 'lucide-react';

export function ConciergePhilosophy() {
    return (
        <section className="bg-black py-32 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold-500 tracking-[0.3em] uppercase text-xs font-bold mb-4 block"
                    >
                        La Filosofía
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-display text-white mb-8"
                    >
                        Abastecimiento Internacional Sin Fronteras
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 font-serif italic text-xl leading-relaxed"
                    >
                        Cruzamos la brecha entre los mercados mundiales de relojería y su muñeca.
                        Nuestra red asegura que las fronteras no limiten su acceso a los relojes más codiciados del mundo.
                    </motion.p>
                </div>

                {/* Process Steps: Scroll Snap on Mobile, Grid on Desktop */}
                <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 md:gap-12 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar">
                    {[
                        {
                            icon: ShieldCheck,
                            title: "Autenticidad Garantizada",
                            description: "Cada reloj es meticulosamente verificado por nuestros expertos. Rastreamos la procedencia y aseguramos la absoluta legitimidad antes de que llegue a usted."
                        },
                        {
                            icon: Truck,
                            title: "Logística Global",
                            description: "Desde Tokio hasta Ginebra, manejamos las complejidades del envío internacional, aduanas y seguros, brindando una experiencia perfecta."
                        },
                        {
                            icon: Handshake,
                            title: "Entrega Personal",
                            description: "Para nuestros clientes más exclusivos, ofrecemos un servicio de entrega personal, asegurando que su adquisición sea presentada con la dignidad que merece."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="bg-white/5 p-8 md:p-10 border border-white/10 hover:border-gold-500/50 transition-colors duration-500 group text-center min-w-[85%] md:min-w-0 snap-center rounded-sm flex flex-col items-center justify-center space-y-4"
                        >
                            <div className="mb-2 md:mb-6 inline-flex p-4 rounded-full bg-white/5 group-hover:bg-gold-500/10 transition-colors duration-500">
                                <item.icon className="w-8 h-8 text-gold-500" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-display text-white mb-2 md:mb-4 group-hover:text-gold-200 transition-colors">{item.title}</h3>
                            <p className="text-white/50 leading-relaxed font-light text-sm md:text-base">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
