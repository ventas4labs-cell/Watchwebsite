'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface HeroSliderProps {
    brand: string;
    description: string;
    images: string[];
}

export function HeroSlider({ brand, description, images }: HeroSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // 5 seconds interval

        return () => clearInterval(interval);
    }, [images]);

    const handleScrollDown = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">

            {/* Image Slider Wrapper */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentIndex}
                        className="absolute inset-0 w-full h-full"
                        initial={{ opacity: 0, scale: 1.0 }}
                        animate={{ opacity: 1, scale: 1.05 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{
                            opacity: { duration: 1.5, ease: "easeInOut" },
                            scale: { duration: 6.5, ease: "linear" } // Slightly longer than 5s to ensure coverage during crossfade
                        }}
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`${brand} imagery ${currentIndex + 1}`}
                            fill
                            priority={currentIndex === 0}
                            className="object-cover object-center"
                            sizes="100vw"
                            quality={90}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Overlays */}
            {/* Top gradient for navbar clarity */}
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/80 to-transparent z-10" />

            {/* Bottom-to-top gradient for Typography legibility */}
            <div className="absolute bottom-0 inset-x-0 h-3/5 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

            {/* Decorative Stardust Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-overlay z-10" />

            {/* Hero Content */}
            <div className="container mx-auto px-6 relative z-20 mt-auto pb-32 lg:pb-40">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="max-w-4xl"
                >
                    <span className="text-gold-500 tracking-[0.4em] uppercase text-xs md:text-sm font-bold mb-4 block">
                        La Colección
                    </span>

                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-medium text-white mb-6 leading-none tracking-tight">
                        {brand}
                    </h1>

                    <p className="text-white/80 font-light leading-relaxed text-lg md:text-2xl font-serif italic mb-10 max-w-2xl">
                        &ldquo;{description}&rdquo;
                    </p>

                    {/* CTA Button */}
                    <button
                        onClick={handleScrollDown}
                        className="group flex flex-col items-start gap-4"
                    >
                        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/90 group-hover:text-gold-500 transition-colors duration-300">
                            Explorar Colección
                            <ChevronDown className="w-4 h-4 animate-bounce" />
                        </div>
                        <div className="w-12 h-[1px] bg-gold-500/50 group-hover:w-full group-hover:bg-gold-500 transition-all duration-500 ease-out" />
                    </button>
                </motion.div>
            </div>

            {/* Progression Indicators */}
            {images.length > 1 && (
                <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
                    {images.map((_, idx) => (
                        <div
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className="relative h-[2px] w-12 cursor-pointer rounded-full overflow-hidden bg-white/20"
                        >
                            {idx === currentIndex && (
                                <motion.div
                                    className="absolute inset-0 bg-gold-500"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 5, ease: "linear" }}
                                />
                            )}
                            {idx < currentIndex && (
                                <div className="absolute inset-0 bg-white/50" />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
