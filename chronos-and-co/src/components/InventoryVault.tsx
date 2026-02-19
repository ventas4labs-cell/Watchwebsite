'use client';

import { useState, useEffect } from 'react';
import { useStore } from '@/lib/store';
import { MoreHorizontal, Trash2, Edit, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import Image from 'next/image';
import clsx from 'clsx';
import { Watch } from '@/lib/seed-data';
import { EditWatchModal } from './EditWatchModal';
import { motion, AnimatePresence } from 'framer-motion';

export function InventoryVault() {
    const { inventory, deleteItem, updateItemStatus, fetchInventory } = useStore();
    const [selectedBrand, setSelectedBrand] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [editingWatch, setEditingWatch] = useState<Watch | null>(null);

    // Fetch inventory on mount
    useEffect(() => {
        fetchInventory();
    }, [fetchInventory]);

    // Extract unique brands
    const brands = ['All', ...Array.from(new Set(inventory.map(item => item.brand)))];

    const filteredInventory = inventory.filter(item => {
        const matchesBrand = selectedBrand === 'All' || item.brand === selectedBrand;
        const matchesSearch = searchQuery === '' ||
            item.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.brand.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesBrand && matchesSearch;
    });

    const getStatusColor = (status: string = 'in-stock') => {
        switch (status) {
            case 'in-stock': return 'bg-green-500/10 text-green-500 border-green-500/20';
            case 'pre-order': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
            case 'sold': return 'bg-white/5 text-white/40 border-white/10';
            default: return 'bg-white/5 text-white';
        }
    };

    const getStatusLabel = (status: string = 'in-stock') => {
        switch (status) {
            case 'in-stock': return 'Available';
            case 'pre-order': return 'Reserved';
            case 'sold': return 'Sold';
            default: return status;
        }
    };

    // Group inventory by Brand
    const groupedInventory = filteredInventory.reduce((acc, item) => {
        if (!acc[item.brand]) {
            acc[item.brand] = [];
        }
        acc[item.brand].push(item);
        return acc;
    }, {} as Record<string, Watch[]>);

    return (
        <div className="space-y-12">
            {/* Filters Bar */}
            <div className="sticky top-0 z-40 bg-rich-black/95 backdrop-blur-sm py-4 border-b border-white/5 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between gap-6">

                {/* Brand Filter - Scrollable Pill Bar */}
                <div className="overflow-x-auto pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide flex-1">
                    <div className="flex gap-3 w-max">
                        {brands.map((brand) => (
                            <button
                                key={brand}
                                onClick={() => setSelectedBrand(brand)}
                                className={clsx(
                                    "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border whitespace-nowrap",
                                    selectedBrand === brand
                                        ? "bg-gold-500 text-black border-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                                        : "bg-transparent text-white/40 border-white/10 hover:border-white/40 hover:text-white"
                                )}
                            >
                                {brand}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-64 shrink-0">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white/40">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Buscar reloj..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-gold-500/50 focus:bg-white/10 transition-colors placeholder:text-white/20"
                    />
                </div>
            </div>

            {/* Content Area */}
            <div className="space-y-16">
                <AnimatePresence>
                    {Object.entries(groupedInventory).map(([brand, items]) => (
                        <motion.div
                            key={brand}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="space-y-6"
                        >
                            {/* Brand Header */}
                            <div className="flex items-center gap-4">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">{brand}</h2>
                                <div className="h-px flex-1 bg-white/10"></div>
                                <span className="text-xs text-white/40 font-mono">
                                    {items.length} {items.length === 1 ? 'PIECE' : 'PIECES'}
                                </span>
                            </div>

                            {/* Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden group hover:border-white/20 transition-all duration-300 hover:bg-white/[0.04]"
                                    >
                                        {/* Main Image Area */}
                                        <div className="relative aspect-[4/3] w-full border-b border-white/5 bg-black/20">
                                            <Image
                                                src={item.image}
                                                alt={item.model}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />

                                            {/* Status Badge */}
                                            <div className="absolute top-4 right-4 z-10">
                                                <span className={clsx(
                                                    "inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border backdrop-blur-md shadow-lg",
                                                    getStatusColor(item.availability)
                                                )}>
                                                    {getStatusLabel(item.availability)}
                                                </span>
                                            </div>

                                            {/* Action Buttons Overlay */}
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-[2px]">
                                                <button
                                                    onClick={() => setEditingWatch(item)}
                                                    className="p-3 bg-white text-black rounded-full hover:bg-gold-500 transition-colors transform hover:scale-110"
                                                    title="Edit"
                                                >
                                                    <Edit className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => deleteItem(item.id)}
                                                    className="p-3 bg-red-500/20 text-red-500 border border-red-500/50 rounded-full hover:bg-red-500 hover:text-white transition-colors transform hover:scale-110"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Card Content */}
                                        <div className="p-6 space-y-4">
                                            <div className="space-y-1">
                                                <h3 className="text-white font-bold text-lg leading-tight">{item.model}</h3>
                                                <p className="font-mono text-gold-500 text-sm tracking-wider">
                                                    ${item.price.toLocaleString()}
                                                </p>
                                            </div>

                                            {/* Gallery Preview */}
                                            {(item.gallery && item.gallery.length > 0) ? (
                                                <div className="space-y-2">
                                                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Gallery ({item.gallery.length})</p>
                                                    <div className="grid grid-cols-5 gap-2">
                                                        {item.gallery.slice(0, 5).map((img, idx) => (
                                                            <div key={idx} className="relative aspect-square rounded-sm overflow-hidden border border-white/10 bg-white/5">
                                                                <Image src={img} alt="" fill className="object-cover" />
                                                            </div>
                                                        ))}
                                                        {item.gallery.length > 5 && (
                                                            <div className="aspect-square rounded-sm bg-white/5 border border-white/10 flex items-center justify-center">
                                                                <span className="text-[9px] text-white/40 font-bold">+{item.gallery.length - 5}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="py-2">
                                                    <p className="text-[10px] uppercase tracking-widest text-white/20 italic">No gallery images</p>
                                                </div>
                                            )}

                                            {/* Footer Info */}
                                            <div className="pt-4 border-t border-white/5">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <p className="text-[10px] text-white/40 uppercase tracking-wider">Reference</p>
                                                        <p className="text-xs text-white/80 line-clamp-1">{item.id}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] text-white/40 uppercase tracking-wider">Movement</p>
                                                        <p className="text-xs text-white/80 line-clamp-1">
                                                            {item.details?.['Movimiento'] || item.details?.['movement'] || '-'}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {filteredInventory.length === 0 && (
                    <div className="text-center py-32 border border-dashed border-white/10 rounded-sm">
                        <p className="text-white/40 text-lg">No items found.</p>
                        <button
                            onClick={() => setSelectedBrand('All')}
                            className="mt-4 text-gold-500 hover:underline text-sm uppercase tracking-widest font-bold"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>

            <EditWatchModal
                watch={editingWatch}
                isOpen={!!editingWatch}
                onClose={() => setEditingWatch(null)}
            />
        </div>
    );
}
