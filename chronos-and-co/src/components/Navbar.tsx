'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, User, Menu, ChevronDown, Truck } from 'lucide-react';
import { useStore } from '@/lib/store';
import { MobileMenu } from './MobileMenu';
import { motion, AnimatePresence } from 'framer-motion';

const BRANDS = ['Tissot', 'Seiko', 'Orient'];

export function Navbar() {
    const { cart, toggleCart } = useStore();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isBrandsOpen, setIsBrandsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${isScrolled
                    ? 'bg-black/80 backdrop-blur-md border-white/10 h-20'
                    : 'bg-transparent border-transparent h-24'
                    }`}
            >
                <div className="container mx-auto px-6 h-full flex items-center justify-between">
                    {/* Left: Hamburger & Shop */}
                    <div className="flex items-center gap-8 w-1/3">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden text-white hover:text-gold-500 transition-colors"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide text-white/80">
                            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                            <Link href="/#new-arrivals" className="hover:text-white transition-colors">Novedades</Link>
                        </div>
                    </div>

                    {/* Center: Logo */}
                    <div className="flex justify-center w-1/3">
                        <Link href="/" className="text-2xl md:text-3xl font-display font-bold tracking-widest text-white text-center">
                            TIMELESS <span className="text-gold-500">WATCHES</span>
                        </Link>
                    </div>

                    {/* Right: Brands & Icons */}
                    <div className="flex items-center justify-end gap-8 w-1/3">
                        {/* Brands Mega Menu Trigger */}
                        <div
                            className="hidden md:relative md:block"
                            onMouseEnter={() => setIsBrandsOpen(true)}
                            onMouseLeave={() => setIsBrandsOpen(false)}
                        >
                            <button className="flex items-center gap-1 text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors py-4">
                                Marcas <ChevronDown className={`w-3 h-3 transition-transform ${isBrandsOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isBrandsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full right-0 w-48 bg-rich-black border border-white/10 p-2 shadow-2xl"
                                    >
                                        <div className="flex flex-col space-y-1">
                                            {BRANDS.map((brand) => (
                                                <Link
                                                    key={brand}
                                                    href={`/collections/${brand.toLowerCase()}`}
                                                    className="px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors text-left"
                                                >
                                                    {brand}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Utility Icons */}
                        <div className="flex items-center gap-6 text-white">
                            <button className="hover:text-gold-500 transition-colors">
                                <Search className="w-5 h-5" />
                            </button>
                            <Link href="/track" className="hover:text-gold-500 transition-colors flex items-center gap-2">
                                <Truck className="w-5 h-5" />
                                <span className="hidden lg:inline text-[10px] uppercase font-bold tracking-widest">Rastrear</span>
                            </Link>
                            <Link href="/admin" className="hover:text-gold-500 transition-colors">
                                <User className="w-5 h-5" />
                            </Link>
                            <button
                                onClick={() => toggleCart()}
                                className="relative hover:text-gold-500 transition-colors"
                            >
                                <ShoppingBag className="w-5 h-5" />
                                <AnimatePresence>
                                    {totalItems > 0 && (
                                        <motion.span
                                            key={totalItems}
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.5, opacity: 0 }}
                                            className="absolute -top-2 -right-2 bg-gold-500 text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                                        >
                                            {totalItems}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                brands={BRANDS}
            />
        </>
    );
}
