'use client';
import { motion } from 'framer-motion';

const BRANDS = ["Tissot", "Seiko", "Orient"];

export function BrandSlider() {
    return (
        <div className="w-full py-16 border-y border-white/5 bg-white/[0.02]">
            <div className="container mx-auto px-6 overflow-hidden">
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
                    {BRANDS.map((brand, i) => (
                        <motion.span
                            key={brand}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="text-2xl md:text-4xl font-display text-white/40 hover:text-gold-500 cursor-default transition-colors"
                        >
                            {brand}
                        </motion.span>
                    ))}
                </div>
            </div>
        </div>
    );
}
