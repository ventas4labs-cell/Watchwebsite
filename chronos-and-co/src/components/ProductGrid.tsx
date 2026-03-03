'use client';

import { Watch } from '@/lib/seed-data';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductGridProps {
    watches: Watch[];
    title?: string;
}

export function ProductGrid({ watches, title }: ProductGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {watches.map((watch, index) => (
                <motion.div
                    key={watch.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                >
                    <Link href={`/product/${watch.id}`} className="block">
                        <div className="relative aspect-[3/4] bg-white/5 overflow-hidden mb-6">
                            {watch.image ? (
                                <Image
                                    src={watch.image}
                                    alt={watch.model}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-transparent transition-colors duration-500">
                                    <span className="text-white/20 tracking-widest uppercase text-sm">No Image</span>
                                </div>
                            )}
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                            {/* Tags */}
                            <div className="absolute top-4 left-4 flex flex-col gap-2">
                                {watch.availability === 'in-stock' && (
                                    <span className="bg-emerald-500/90 text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest backdrop-blur-sm">
                                        Entrega Inmediata
                                    </span>
                                )}
                                {watch.availability === 'pre-order' && (
                                    <span className="bg-gold-500/90 text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest backdrop-blur-sm">
                                        Pre-orden
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-gold-500 text-xs font-bold tracking-widest uppercase">{watch.brand}</p>
                            <h3 className="text-white font-display text-lg leading-tight group-hover:text-gold-200 transition-colors">
                                {watch.model}
                            </h3>
                            <p className="text-white/60 text-sm font-light">
                                ${watch.price.toLocaleString()} USD
                            </p>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}
