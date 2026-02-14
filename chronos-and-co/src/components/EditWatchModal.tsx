'use client';

import { useState, useEffect } from 'react';
import { Watch } from '@/lib/seed-data';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, DollarSign, Tag, Loader2 } from 'lucide-react';
import { useStore } from '@/lib/store';
import Image from 'next/image';

interface EditWatchModalProps {
    watch: Watch | null;
    isOpen: boolean;
    onClose: () => void;
}

export function EditWatchModal({ watch, isOpen, onClose }: EditWatchModalProps) {
    const { updateWatchDetails } = useStore();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<Partial<Watch>>({});

    useEffect(() => {
        if (watch) {
            setFormData({
                brand: watch.brand,
                model: watch.model,
                price: watch.price,
                availability: watch.availability,
            });
        }
    }, [watch]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!watch) return;

        setIsLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 600));

        updateWatchDetails(watch.id, formData);
        setIsLoading(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && watch && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-rich-black border border-white/10 rounded-sm shadow-2xl z-51 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/[0.02]">
                            <div className="flex items-center gap-4">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                                    <Image
                                        src={watch.image}
                                        alt={watch.model}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium text-lg">Editar Pieza</h3>
                                    <p className="text-white/40 text-xs uppercase tracking-widest">{watch.model}</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-white/40 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Marca</label>
                                    <input
                                        type="text"
                                        value={formData.brand}
                                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Precio (USD)</label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                        <input
                                            type="number"
                                            value={formData.price}
                                            onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                                            className="w-full bg-white/5 border border-white/10 rounded-sm p-3 pl-9 text-white focus:outline-none focus:border-gold-500/50 transition-colors font-mono"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Modelo / Referencia</label>
                                <input
                                    type="text"
                                    value={formData.model}
                                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Estado</label>
                                <select
                                    value={formData.availability}
                                    onChange={(e) => setFormData({ ...formData, availability: e.target.value as any })}
                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                                >
                                    <option value="in-stock">Available</option>
                                    <option value="pre-order">Reserved</option>
                                    <option value="sold">Sold</option>
                                </select>
                            </div>

                            <div className="pt-4 flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="bg-gold-500 text-black px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-gold-400 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <Save className="w-4 h-4" />
                                    )}
                                    Guardar Cambios
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
