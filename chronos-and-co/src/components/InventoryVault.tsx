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
    const [editingWatch, setEditingWatch] = useState<Watch | null>(null);

    // Fetch inventory on mount
    useEffect(() => {
        fetchInventory();
    }, [fetchInventory]);

    // Extract unique brands
    const brands = ['All', ...Array.from(new Set(inventory.map(item => item.brand)))];

    const filteredInventory = selectedBrand === 'All'
        ? inventory
        : inventory.filter(item => item.brand === selectedBrand);

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

    return (
        <div className="space-y-8">
            {/* Brand Filter - Scrollable Pill Bar */}
            <div className="overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
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

            {/* Desktop Table View */}
            <div className="hidden md:block bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/5 text-left">
                            <th className="py-4 px-6 text-[10px] uppercase tracking-widest text-white/40 font-bold">Asset</th>
                            <th className="py-4 px-6 text-[10px] uppercase tracking-widest text-white/40 font-bold">Reference</th>
                            <th className="py-4 px-6 text-[10px] uppercase tracking-widest text-white/40 font-bold">Price</th>
                            <th className="py-4 px-6 text-[10px] uppercase tracking-widest text-white/40 font-bold">Status</th>
                            <th className="py-4 px-6 text-[10px] uppercase tracking-widest text-white/40 font-bold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        <AnimatePresence>
                            {filteredInventory.map((item) => (
                                <motion.tr
                                    key={item.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="group hover:bg-white/5 transition-colors"
                                >
                                    <td className="py-4 px-6">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-gold-500/50 transition-colors">
                                            <Image
                                                src={item.image}
                                                alt={item.model}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex flex-col">
                                            <span className="text-white font-bold text-sm tracking-wide">{item.model}</span>
                                            <span className="text-white/40 text-[10px] uppercase tracking-wider">{item.brand}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className="font-mono text-gold-500 text-sm tracking-wider">
                                            ${item.price.toLocaleString()}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={clsx(
                                            "inline-flex items-center px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border",
                                            getStatusColor(item.availability)
                                        )}>
                                            {getStatusLabel(item.availability)}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right relative">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => setEditingWatch(item)}
                                                className="p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => deleteItem(item.id)}
                                                className="p-2 text-white/40 hover:text-red-500 hover:bg-red-500/10 rounded-full transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
                <AnimatePresence>
                    {filteredInventory.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="bg-white/5 border border-white/10 rounded-sm overflow-hidden"
                        >
                            <div className="relative aspect-video w-full border-b border-white/5">
                                <Image
                                    src={item.image}
                                    alt={item.model}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-3 right-3">
                                    <span className={clsx(
                                        "inline-flex items-center px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border backdrop-blur-md shadow-lg",
                                        getStatusColor(item.availability)
                                    )}>
                                        {getStatusLabel(item.availability)}
                                    </span>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-white font-bold text-sm leading-tight mb-1">{item.model}</h3>
                                        <p className="text-white/40 text-[10px] uppercase tracking-widest">{item.brand}</p>
                                    </div>
                                    <p className="font-mono text-gold-500 text-lg tracking-tight">
                                        ${item.price.toLocaleString()}
                                    </p>
                                </div>
                                <div className="flex items-center justify-end gap-4 mt-4 pt-4 border-t border-white/5">
                                    <button
                                        onClick={() => setEditingWatch(item)}
                                        className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors"
                                    >
                                        <Edit className="w-3 h-3" /> Edit
                                    </button>
                                    <button
                                        onClick={() => deleteItem(item.id)}
                                        className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 className="w-3 h-3" /> Remove
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredInventory.length === 0 && (
                <div className="text-center py-20 border border-dashed border-white/10 rounded-sm">
                    <p className="text-white/40 text-sm">No items found.</p>
                </div>
            )}

            <EditWatchModal
                watch={editingWatch}
                isOpen={!!editingWatch}
                onClose={() => setEditingWatch(null)}
            />
        </div>
    );
}
