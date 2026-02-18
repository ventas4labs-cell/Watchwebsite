'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Watch } from '@/lib/seed-data';
import { useStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export function ProductCard({ watch }: { watch: Watch }) {
    const addToCart = useStore((state) => state.addToCart);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group relative flex flex-col items-center"
        >
            <Link href={`/product/${watch.id}`} className="w-full cursor-pointer">
                <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden bg-white/5 rounded-sm">
                    <Image
                        src={watch.image}
                        alt={watch.model}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="text-center space-y-2">
                    <h3 className="text-gold-500 text-xs font-bold tracking-[0.25em] uppercase">{watch.brand}</h3>
                    <h2 className="text-lg font-display text-white group-hover:text-gold-200 transition-colors leading-tight">{watch.model}</h2>
                    {watch.brand.toLowerCase() === 'seiko' ? (
                        <p className="text-white/50 font-light text-xs tracking-wide group-hover:text-gold-500 transition-colors uppercase">
                            Precio pronto disponible, consulta con tu asesor
                        </p>
                    ) : (
                        <p className="text-white/50 font-light text-sm tracking-wide group-hover:text-white transition-colors">
                            ${watch.price.toLocaleString()}
                        </p>
                    )}
                </div>
            </Link>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    addToCart(watch);
                }}
                className="absolute top-4 right-4 bg-white text-black p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:bg-gold-500 hover:scale-110 z-10"
            >
                <Plus className="w-5 h-5" />
            </button>
        </motion.div>
    );
}
