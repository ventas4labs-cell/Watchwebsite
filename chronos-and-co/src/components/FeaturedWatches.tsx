'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const WATCHES_DATA = [
    {
        id: 'tissot-chemin',
        brand: 'Tissot',
        model: 'Chemin des Tourelles',
        description: 'Un homenaje a la herencia y la precisión suiza. Este modelo encarna la elegancia atemporal con un diseño contemporáneo, perfecto para quien aprecia la sofisticación en cada detalle.',
        link: '/collections/tissot',
        mainImage: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwbc1c222d/product-pictures/c9b3eacb-ef18-4c0b-827b-19b4589d4df7_T139-836-36-441-00_Shadow.png?sm=fit&sw=1680&sh=1680,gravity=center",
        gallery: [
            "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwdc28064b/product-pictures/7e47176c-e68f-4d5a-b077-c036a36db218_T139-836-36-441-00_DETAIL-1.png?sm=fit&sw=1680&sh=1680,gravity=center",
            "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw2643126b/product-pictures/1165c6fc-ad23-4312-a161-89348038c5e8_T600-049-593_ZOOM.png?sm=fit&sw=1680&sh=1680,gravity=center",
            "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw3812833c/product-pictures/4d233bff-118d-4e28-9b4f-1bdfbfd98361_T139_836_36_441_00_DETAIL-2.png?sm=fit&sw=1680&sh=1680,gravity=center",
        ]
    },
    {
        id: 'seiko-srpk48',
        brand: 'Seiko 5 Sports',
        model: 'SRPK48',
        description: 'Encanto retro y fiabilidad moderna. Desde 1968, este clásico reinventado ofrece durabilidad y estilo en un impresionante acabado dorado.',
        link: '/collections/seiko',
        mainImage: "https://www.revwatches.com/wp-content/uploads/SRPK48-1.png",
        gallery: [
            "https://timeaccess-store.com/cdn/shop/files/SRPK48m.jpg?v=1734688172&width=1080",
            "https://watchzonebd.com/uploads/multiimage/SRPK48_5_332.webp",
            "https://www.revwatches.com/wp-content/uploads/SRPK48-1.png" // Reusing main as 3rd gallery image to maintain grid
        ]
    }
];

export function FeaturedWatches() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextWatch = () => {
        setCurrentIndex((prev) => (prev + 1) % WATCHES_DATA.length);
    };

    const prevWatch = () => {
        setCurrentIndex((prev) => (prev - 1 + WATCHES_DATA.length) % WATCHES_DATA.length);
    };

    const currentWatch = WATCHES_DATA[currentIndex];

    return (
        <section id="catalog" className="py-20 md:py-32 container mx-auto px-6 relative group">

            {/* Navigation Buttons */}
            {/* Navigation Buttons */}
            <button
                onClick={prevWatch}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-gold-500 text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextWatch}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-gold-500 text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {WATCHES_DATA.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-gold-500 scale-125' : 'bg-white/20 hover:bg-white/40'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentWatch.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-gold-500 tracking-[0.3em] uppercase text-xs font-bold block mb-4"
                            >
                                Pieza Destacada
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl md:text-7xl font-display text-white mb-8 leading-none"
                            >
                                {currentWatch.brand} <br /><span className="text-white/40">{currentWatch.model}</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-white/60 text-lg font-light max-w-xl leading-relaxed mb-10 mx-auto lg:mx-0"
                            >
                                {currentWatch.description}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link
                                    href={currentWatch.link}
                                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold-500 transition-colors duration-300"
                                >
                                    Ver Colección <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Main Hero Image */}
                        <div className="flex-1 relative">
                            <div className="absolute inset-0 bg-gold-500/5 blur-[100px] rounded-full" />
                            <motion.img
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                src={currentWatch.mainImage}
                                alt={currentWatch.model}
                                className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl object-contain h-[500px]"
                            />
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {currentWatch.gallery.map((src, index) => (
                            <motion.div
                                key={`${currentWatch.id}-gallery-${index}`}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (index * 0.1) }}
                                className="group relative aspect-square bg-white/[0.02] border border-white/5 overflow-hidden p-8 flex items-center justify-center cursor-pointer hover:border-gold-500/30 transition-colors duration-500"
                            >
                                <img
                                    src={src}
                                    alt={`Detail ${index + 1}`}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}
