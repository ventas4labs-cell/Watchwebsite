'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface BrandHeroProps {
    brand: string;
    description: string;
    backgroundImage?: string;
    backgroundSize?: string;
}

export function BrandHero({ brand, description, backgroundImage, backgroundSize = 'cover' }: BrandHeroProps) {
    // Map brands to specific background tints/styles
    const getGradient = (brandName: string) => {
        switch (brandName.toLowerCase()) {
            case 'tissot': return 'from-blue-900/40 via-black to-black';
            case 'seiko': return 'from-green-900/40 via-black to-black';
            case 'orient': return 'from-red-900/30 via-black to-black';
            case 'bulova': return 'from-purple-900/40 via-black to-black';
            case 'stauer': return 'from-yellow-900/20 via-black to-black';
            case 'timex': return 'from-gray-800/40 via-black to-black';
            default: return 'from-gold-900/20 via-black to-black';
        }
    };

    return (
        <>
            {/* 1. Visual Hero Section (Image Only) */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
                {/* Background Image or Fallback Gradient */}
                {backgroundImage ? (
                    <div
                        className="absolute inset-0 bg-center bg-no-repeat z-0"
                        style={{
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundSize: backgroundSize
                        }}
                    >
                        {/* Subtle overlay to ensure scroll indicator visibility if needed, but keeping it minimal for "Introduction" */}
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                ) : (
                    <div className={`absolute inset-0 bg-gradient-to-b ${getGradient(brand)}`} />
                )}

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 cursor-pointer group"
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <span className="text-white/70 group-hover:text-white transition-colors duration-300 text-sm uppercase tracking-[0.4em] font-medium drop-shadow-lg">Desliza para Explorar</span>
                    <ChevronDown className="w-12 h-12 text-white/70 group-hover:text-gold-500 transition-colors duration-300 drop-shadow-lg" />
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none mix-blend-overlay" />
            </section>

            {/* 2. Luxurious Content Section (Text) */}
            <section className="bg-black relative z-10 py-32 overflow-hidden">
                {/* Background Gradient Effect based on brand */}
                <div className={`absolute inset-0 opacity-20 bg-gradient-to-b ${getGradient(brand)} pointer-events-none`} />

                <div className="container mx-auto px-6 text-center relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-gold-500 tracking-[0.5em] uppercase text-xs font-bold mb-6 block">
                            La Colección
                        </span>

                        <h1 className="text-8xl md:text-[10rem] font-display font-medium text-white mb-12 leading-none tracking-tight">
                            {brand}
                        </h1>

                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-12 opacity-50" />

                        <p className="text-white/70 max-w-4xl mx-auto font-light leading-loose text-2xl md:text-3xl font-serif italic">
                            &ldquo;{description}&rdquo;
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
