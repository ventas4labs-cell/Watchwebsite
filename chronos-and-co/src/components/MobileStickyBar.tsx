'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function MobileStickyBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero (approx 800px)
            setIsVisible(window.scrollY > 800);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden"
                >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-md border-t border-white/10" />
                    <div className="relative z-10">
                        <Link
                            href="/commission"
                            className="flex items-center justify-center w-full bg-gold-500 text-black font-bold uppercase tracking-widest text-xs py-4 rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                        >
                            Solicitar Comisión
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
