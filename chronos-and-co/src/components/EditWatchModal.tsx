'use client';

import { useState, useEffect, useCallback } from 'react';
import { Watch } from '@/lib/seed-data';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, DollarSign, Loader2, UploadCloud } from 'lucide-react';
import { useStore } from '@/lib/store';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import { uploadWatchImage } from '@/lib/supabase';
import { toast } from 'sonner';
import {
    WATCH_MOVEMENTS,
    WATCH_CASE_SIZES,
    WATCH_WATER_RESISTANCE,
    WATCH_CASE_MATERIALS,
    WATCH_CRYSTAL_TYPES
} from '@/lib/constants';

interface EditWatchModalProps {
    watch: Watch | null;
    isOpen: boolean;
    onClose: () => void;
}

function ImageUploadDropbox({ onUpload, label, compact }: { onUpload: (url: string) => void, label: string, compact?: boolean }) {
    const [isUploading, setIsUploading] = useState(false);

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (!file) return;

        setIsUploading(true);
        try {
            const url = await uploadWatchImage(file);
            if (url) {
                onUpload(url);
                toast.success('Imagen subida correctamente');
            } else {
                toast.error('Error al subir la imagen');
            }
        } catch (error) {
            console.error(error);
            toast.error('Error al subir imagen');
        } finally {
            setIsUploading(false);
        }
    }, [onUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'image/*': [] }, maxFiles: 1 });

    return (
        <div
            {...getRootProps()}
            className={`
                border border-dashed border-white/20 bg-white/5 rounded-sm cursor-pointer hover:bg-white/10 transition-colors flex flex-col items-center justify-center text-white/40 hover:text-white/80
                ${compact ? 'aspect-square' : 'p-4 min-h-[80px] w-full'}
            `}
        >
            <input {...getInputProps()} />
            {isUploading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
                <>
                    {compact ? (
                        <span className="text-2xl font-light">+</span>
                    ) : (
                        <div className="flex flex-col items-center gap-2">
                            <UploadCloud className="w-5 h-5" />
                            <span className="text-[10px] uppercase tracking-wider">{isDragActive ? 'Suelta aquí' : label}</span>
                        </div>
                    )}
                </>
            )}
        </div>
    );
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
                description: watch.description,
                details: watch.details,
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
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-rich-black border border-white/10 rounded-sm shadow-2xl z-51 overflow-hidden max-h-[90vh] overflow-y-auto"
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

                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-sm border border-white/10">
                                <input
                                    type="checkbox"
                                    id="is_featured"
                                    checked={formData.is_featured || false}
                                    onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                                    className="w-4 h-4 rounded-sm bg-black border border-white/20 checked:bg-gold-500 checked:border-gold-500 focus:ring-gold-500/50 transition-colors cursor-pointer appearance-none relative checked:after:content-['✓'] checked:after:absolute checked:after:text-black checked:after:text-[10px] checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:font-bold"
                                />
                                <label htmlFor="is_featured" className="text-xs text-white cursor-pointer select-none">
                                    <span className="font-bold text-gold-500 uppercase tracking-wider">Destacado</span>
                                    <span className="block text-[10px] text-white/40">Mostrar en la página principal</span>
                                </label>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Descripción</label>
                                <textarea
                                    value={formData.description || ''}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors h-24"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Movimiento</label>
                                    <select
                                        value={formData.details?.["Movimiento"] || ''}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            details: { ...formData.details!, "Movimiento": e.target.value }
                                        })}
                                        className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                                    >
                                        <option value="">Seleccionar...</option>
                                        {WATCH_MOVEMENTS.map(opt => (
                                            <option key={opt} value={opt} className="bg-rich-black">{opt}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Tamaño de Caja</label>
                                    <select
                                        value={formData.details?.["Tamaño de Caja"] || ''}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            details: { ...formData.details!, "Tamaño de Caja": e.target.value }
                                        })}
                                        className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                                    >
                                        <option value="">Seleccionar...</option>
                                        {WATCH_CASE_SIZES.map(opt => (
                                            <option key={opt} value={opt} className="bg-rich-black">{opt}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Resistencia Agua</label>
                                    <select
                                        value={formData.details?.["Resistencia al Agua"] || ''}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            details: { ...formData.details!, "Resistencia al Agua": e.target.value }
                                        })}
                                        className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                                    >
                                        <option value="">Seleccionar...</option>
                                        {WATCH_WATER_RESISTANCE.map(opt => (
                                            <option key={opt} value={opt} className="bg-rich-black">{opt}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Material Caja</label>
                                    <select
                                        value={formData.details?.["Material de la Caja"] || ''}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            details: { ...formData.details!, "Material de la Caja": e.target.value }
                                        })}
                                        className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                                    >
                                        <option value="">Seleccionar...</option>
                                        {WATCH_CASE_MATERIALS.map(opt => (
                                            <option key={opt} value={opt} className="bg-rich-black">{opt}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-2 col-span-2">
                                    <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Cristal</label>
                                    <select
                                        value={formData.details?.["Cristal"] || ''}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            details: { ...formData.details!, "Cristal": e.target.value }
                                        })}
                                        className="w-full bg-white/5 border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                                    >
                                        <option value="">Seleccionar...</option>
                                        {WATCH_CRYSTAL_TYPES.map(opt => (
                                            <option key={opt} value={opt} className="bg-rich-black">{opt}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-white/10">
                                <h4 className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Imágenes</h4>

                                {/* Main Image Upload */}
                                <div className="space-y-2">
                                    <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1">Imagen Principal</label>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="flex gap-4 items-start">
                                            {formData.image && (
                                                <div className="relative w-24 h-24 bg-white/5 rounded-sm overflow-hidden border border-white/10 shrink-0">
                                                    <Image src={formData.image} alt="Preview" fill className="object-cover" />
                                                    <button
                                                        type="button"
                                                        onClick={() => setFormData({ ...formData, image: '' })}
                                                        className="absolute top-0 right-0 bg-black/60 p-1 text-white hover:text-red-500 transition-colors"
                                                    >
                                                        <X className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            )}
                                            <ImageUploadDropbox
                                                onUpload={(url) => setFormData({ ...formData, image: url })}
                                                label={formData.image ? "Cambiar Imagen" : "Subir Imagen Principal"}
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="O pegar URL directa..."
                                            value={formData.image || ''}
                                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-xs text-white/60 focus:outline-none focus:border-gold-500/50 transition-colors font-mono"
                                        />
                                    </div>
                                </div>

                                {/* Gallery Upload */}
                                <div className="space-y-4">
                                    <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1">Galería</label>

                                    {/* URL Input for Gallery */}
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Añadir URL de imagen..."
                                            className="flex-1 bg-white/5 border border-white/10 rounded-sm p-2 text-xs text-white focus:outline-none focus:border-gold-500/50 transition-colors font-mono"
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    e.preventDefault();
                                                    const input = e.currentTarget;
                                                    if (input.value) {
                                                        setFormData({
                                                            ...formData,
                                                            gallery: [...(formData.gallery || []), input.value]
                                                        });
                                                        input.value = '';
                                                    }
                                                }
                                            }}
                                        />
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                                                if (input.value) {
                                                    setFormData({
                                                        ...formData,
                                                        gallery: [...(formData.gallery || []), input.value]
                                                    });
                                                    input.value = '';
                                                }
                                            }}
                                            className="px-4 bg-white/10 hover:bg-gold-500 hover:text-black text-white rounded-sm transition-colors font-bold"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-4 gap-2">
                                        {formData.gallery?.map((img, index) => (
                                            <div key={index} className="relative aspect-square bg-white/5 rounded-sm overflow-hidden group border border-white/10">
                                                <Image src={img} alt={`Gallery ${index}`} fill className="object-cover" />
                                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            const newGallery = [...(formData.gallery || [])];
                                                            newGallery.splice(index, 1);
                                                            setFormData({ ...formData, gallery: newGallery });
                                                        }}
                                                        className="text-white hover:text-red-500 transition-colors"
                                                    >
                                                        <X className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                        <ImageUploadDropbox
                                            onUpload={(url) => setFormData({ ...formData, gallery: [...(formData.gallery || []), url] })}
                                            label="+"
                                            compact
                                        />
                                    </div>
                                </div>
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
