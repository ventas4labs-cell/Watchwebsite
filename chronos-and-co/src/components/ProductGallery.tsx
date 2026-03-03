'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ProductGalleryProps {
    mainImage: string;
    gallery?: string[];
    model: string;
}

export function ProductGallery({ mainImage, gallery = [], model }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(mainImage);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);

    const allImages = [mainImage, ...gallery];

    const openLightbox = (index: number) => {
        setCurrentLightboxIndex(index);
        setIsLightboxOpen(true);
    };

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentLightboxIndex((prev) => (prev + 1) % allImages.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image - Click to Zoom */}
            <div
                className="relative aspect-[3/4] lg:h-[70vh] w-full bg-white/5 rounded-sm overflow-hidden cursor-zoom-in group"
                onClick={() => openLightbox(allImages.indexOf(selectedImage))}
            >
                {selectedImage ? (
                    <Image
                        src={selectedImage}
                        alt={model}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                        <span className="text-white/20 tracking-widest uppercase text-sm">No Image</span>
                    </div>
                )}

                {/* Zoom Indicator */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-5 h-5 text-white" />
                </div>
            </div>

            {/* Desktop Thumbnails */}
            <div className="hidden lg:grid grid-cols-4 gap-4">
                {allImages.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedImage(img)}
                        className={`relative aspect-square bg-white/5 rounded-sm overflow-hidden transition-all duration-300 ${selectedImage === img ? 'ring-2 ring-gold-500 opacity-100' : 'opacity-60 hover:opacity-100'
                            }`}
                    >
                        {img ? (
                            <Image
                                src={img}
                                alt={`${model} View ${idx + 1}`}
                                fill
                                className="object-cover"
                                sizes="10vw"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white/20 text-[10px] tracking-wider uppercase">No Img</span>
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* Mobile Carousel - Swipeable with Dots */}
            <div className="lg:hidden relative pb-8">
                {/* This is a simplified mobile view - utilizing the main image as swipeable would require more complex touch handling. 
                    For now, we use the main image + horizontal scrollable thumbnails for mobile.
                */}
                <div className="flex gap-2 overflow-x-auto pb-4 snap-x">
                    {allImages.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedImage(img)}
                            className={`relative flex-shrink-0 w-20 h-20 snap-start bg-white/5 rounded-sm overflow-hidden ${selectedImage === img ? 'ring-1 ring-gold-500' : 'opacity-70'
                                }`}
                        >
                            {img ? (
                                <Image
                                    src={img}
                                    alt={`${model} thumb ${idx}`}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white/20 text-[10px] tracking-wider uppercase">No Img</span>
                                </div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2">
                    {allImages.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${allImages.indexOf(selectedImage) === idx ? 'bg-gold-500' : 'bg-white/20'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <button
                            onClick={() => setIsLightboxOpen(false)}
                            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-50"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:scale-110 transition-all z-50 hidden md:block"
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:scale-110 transition-all z-50 hidden md:block"
                        >
                            <ChevronRight className="w-10 h-10" />
                        </button>

                        <div className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center">
                            <motion.div
                                key={currentLightboxIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full"
                            >
                                {allImages[currentLightboxIndex] ? (
                                    <Image
                                        src={allImages[currentLightboxIndex]}
                                        alt={model}
                                        fill
                                        className="object-contain"
                                        sizes="100vw"
                                        priority
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-white/20 font-display text-2xl uppercase tracking-widest">No Image Available</span>
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        {/* Mobile Navigation Indicators */}
                        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4 md:hidden z-50">
                            <button onClick={prevImage} className="p-2 bg-white/10 rounded-full"><ChevronLeft className="w-6 h-6 text-white" /></button>
                            <button onClick={nextImage} className="p-2 bg-white/10 rounded-full"><ChevronRight className="w-6 h-6 text-white" /></button>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
