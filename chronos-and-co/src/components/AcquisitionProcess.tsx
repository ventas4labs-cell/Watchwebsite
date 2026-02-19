"use client";

import { motion } from 'framer-motion';
import { MousePointer2, Lock, Globe, ScanEye, Handshake } from 'lucide-react';

const steps = [
    {
        number: "01",
        Icon: MousePointer2,
        title: "La Comisión",
        description: "Usted selecciona su referencia; nosotros iniciamos la búsqueda global."
    },
    {
        number: "02",
        Icon: Lock,
        title: "Seguridad",
        description: "Aseguramos el reloj en nuestra red internacional."
    },
    {
        number: "03",
        Icon: Globe,
        title: "Importación",
        description: "Manejamos el tránsito asegurado y aduanas hacia Costa Rica."
    },
    {
        number: "04",
        Icon: ScanEye,
        title: "Verificación",
        description: "Una inspección final por especialistas a su llegada local."
    },
    {
        number: "05",
        Icon: Handshake,
        title: "La Entrega",
        description: "Entrega personal segura y ajuste final en San José."
    }
];

export function AcquisitionProcess() {
    return (
        <section className="bg-black py-24 border-t border-white/10 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs">
                        Nuestro Proceso
                    </h2>
                    <h3 className="text-3xl md:text-4xl text-white font-display uppercase tracking-wider">
                        De la Bóveda Global a su Muñeca
                    </h3>
                </div>

                {/* Desktop Grid */}
                <div className="hidden lg:grid grid-cols-5 gap-0 relative">
                    {/* Connector Line */}
                    <div className="absolute top-[48px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative flex flex-col items-center text-center group px-4"
                        >
                            <div className="w-24 h-24 rounded-full bg-black border border-white/10 group-hover:border-gold-500/50 flex items-center justify-center relative z-10 transition-colors duration-500 mb-8 shadow-2xl shadow-black">
                                <div className="absolute inset-0 bg-gold-500/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                                <step.Icon
                                    className="w-8 h-8 text-white/40 group-hover:text-gold-500 transition-colors duration-500"
                                    strokeWidth={1}
                                />
                            </div>

                            <h4 className="text-white text-sm font-bold uppercase tracking-[0.15em] mb-3 group-hover:text-gold-500 transition-colors">
                                {step.title}
                            </h4>
                            <p className="text-white/40 text-xs leading-relaxed max-w-[180px] font-light">
                                {step.description}
                            </p>

                            <span className="absolute -top-6 text-white/5 font-display text-8xl select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-y-4">
                                {step.number}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 no-scrollbar">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="snap-center shrink-0 w-[280px] h-[340px] bg-white/[0.02] border border-white/10 rounded-sm p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-gold-500/30 transition-colors duration-500"
                        >
                            <span className="absolute top-4 right-4 text-white/[0.03] font-display text-8xl select-none pointer-events-none">
                                {step.number}
                            </span>

                            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8 relative z-10 bg-black group-hover:border-gold-500/50 transition-colors duration-500">
                                <step.Icon className="w-6 h-6 text-gold-500" strokeWidth={1} />
                            </div>

                            <h4 className="text-white text-lg font-display uppercase tracking-wide mb-4 relative z-10">
                                {step.title}
                            </h4>
                            <p className="text-white/60 text-sm leading-relaxed relative z-10 font-light">
                                {step.description}
                            </p>

                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-500/50 transition-all duration-500" />
                        </div>
                    ))}
                    {/* Spacer for right padding in scroll */}
                    <div className="snap-center shrink-0 w-2" />
                </div>
            </div>
        </section>
    );
}
