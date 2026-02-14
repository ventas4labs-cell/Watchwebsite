'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X } from 'lucide-react';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    brands: string[];
}

export function MobileMenu({ isOpen, onClose, brands }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '-100%' }}
                    transition={{ type: 'tween', duration: 0.3 }}
                    className="fixed inset-0 z-50 bg-rich-black/95 backdrop-blur-xl md:hidden"
                >
                    <div className="p-6 h-full flex flex-col">
                        <div className="flex justify-between items-center mb-12">
                            <span className="text-xl font-display font-bold text-white">MENÚ</span>
                            <button onClick={onClose} className="p-2 text-white/60 hover:text-white">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <nav className="flex-1 space-y-8">
                            <div>
                                <Link href="/" onClick={onClose} className="text-3xl font-display text-white block mb-6">Inicio</Link>
                                <Link href="/shop/in-stock" onClick={onClose} className="text-xl font-display text-emerald-400 block mb-4">Entrega Inmediata</Link>
                                <Link href="/shop/pre-order" onClick={onClose} className="text-xl font-display text-gold-200 block mb-8">Pre-orden</Link>
                                <div className="space-y-4 pl-4 border-l border-white/10">
                                    <span className="text-gold-500 text-xs font-bold tracking-widest uppercase block mb-4">Marcas</span>
                                    {brands.map((brand) => (
                                        <Link
                                            key={brand}
                                            href={`/collections/${brand.toLowerCase()}`}
                                            onClick={onClose}
                                            className="block text-lg text-white/60 hover:text-white transition-colors"
                                        >
                                            {brand}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </nav>

                        <div className="mt-auto space-y-4 text-white/40 text-sm">
                            <Link href="/about" className="block hover:text-white">Sobre Nosotros</Link>
                            <Link href="/contact" className="block hover:text-white">Contacto</Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
