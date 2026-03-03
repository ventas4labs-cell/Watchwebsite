
'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Watch } from '@/lib/seed-data';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, DollarSign, Loader2, UploadCloud, RefreshCw } from 'lucide-react';
import { useStore } from '@/lib/store';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import { uploadWatchImage } from '@/lib/supabase';
import { toast } from 'sonner';
import { ProductDetailView } from './ProductDetailView';
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
                discount_price: watch.discount_price,
                price_hidden: watch.price_hidden,
                availability: watch.availability,
                description: watch.description,
                details: watch.details || {},
                image: watch.image,
                gallery: watch.gallery || []
            });
        }
    }, [watch]);

    // Construct a preview object that matches the Watch interface
    const previewWatch: Watch = useMemo(() => {
        if (!watch) return {} as Watch;
        return {
            ...watch,
            ...formData,
            price: Number(formData.price) || 0,
            // Ensure details are merged correctly
            details: { ...watch.details, ...formData.details }
        } as Watch;
    }, [watch, formData]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!watch) return;

        setIsLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 600));

        updateWatchDetails(watch.id, formData);
        setIsLoading(false);
        onClose();
        toast.success('Reloj actualizado correctamente');
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
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-500" // Higher z-index
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[95vw] lg:max-w-7xl h-[90vh] bg-rich-black border border-white/10 rounded-sm shadow-2xl z-[501] overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 lg:p-6 border-b border-white/5 bg-white/[0.02]">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-gold-500/10 rounded-full">
                                    <RefreshCw className="w-5 h-5 text-gold-500" />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium text-lg">Editor en Vivo</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        <p className="text-white/40 text-xs uppercase tracking-widest">Live Sync Active</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={onClose}
                                    className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className="bg-gold-500 text-black px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-gold-400 transition-colors flex items-center gap-2 disabled:opacity-50"
                                >
                                    {isLoading && <Loader2 className="w-3 h-3 animate-spin" />}
                                    Guardar Cambios
                                </button>
                            </div>
                        </div>

                        {/* Split View Content */}
                        <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-12">

                            {/* LEFT: Editor Form (4 cols) */}
                            <div className="lg:col-span-4 overflow-y-auto border-r border-white/5 bg-white/[0.01] p-6 custom-scrollbar">
                                <form id="edit-form" onSubmit={handleSubmit} className="space-y-8">
                                    {/* Basic Info */}
                                    <div className="space-y-4">
                                        <h4 className="text-xs text-gold-500 font-bold uppercase tracking-widest border-b border-white/5 pb-2">Información Básica</h4>
                                        <div className="space-y-4">
                                            <div className="space-y-1">
                                                <label className="text-[10px] text-white/40 uppercase tracking-widest">Marca</label>
                                                <input
                                                    type="text"
                                                    value={formData.brand || ''}
                                                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-sm text-white focus:border-gold-500/50 outline-none transition-colors"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] text-white/40 uppercase tracking-widest">Modelo</label>
                                                <input
                                                    type="text"
                                                    value={formData.model || ''}
                                                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-sm text-white focus:border-gold-500/50 outline-none transition-colors"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-1">
                                                    <label className="text-[10px] text-white/40 uppercase tracking-widest">Precio</label>
                                                    <input
                                                        type="number"
                                                        value={formData.price || 0}
                                                        onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                                                        className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-sm text-white focus:border-gold-500/50 outline-none transition-colors"
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-[10px] text-white/40 uppercase tracking-widest">Precio Dcto.</label>
                                                    <input
                                                        type="number"
                                                        value={formData.discount_price || ''}
                                                        onChange={(e) => setFormData({ ...formData, discount_price: e.target.value ? Number(e.target.value) : undefined })}
                                                        placeholder="Opcional"
                                                        className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-sm text-white focus:border-gold-500/50 outline-none transition-colors"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-1">
                                                    <label className="text-[10px] text-white/40 uppercase tracking-widest">Estado</label>
                                                    <select
                                                        value={formData.availability || 'in-stock'}
                                                        onChange={(e) => setFormData({ ...formData, availability: e.target.value as any })}
                                                        className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-sm text-white focus:border-gold-500/50 outline-none transition-colors"
                                                    >
                                                        <option value="in-stock">Available</option>
                                                        <option value="pre-order">Reserved</option>
                                                        <option value="sold">Sold</option>
                                                    </select>
                                                </div>
                                                <div className="flex flex-col justify-end pb-2">
                                                    <label className="flex items-center gap-2 cursor-pointer group">
                                                        <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${formData.price_hidden ? 'bg-gold-500 border-gold-500' : 'border-white/20 group-hover:border-white/50'}`}>
                                                            {formData.price_hidden && <span className="text-black text-[10px]">✓</span>}
                                                        </div>
                                                        <span className="text-[10px] text-white/40 uppercase tracking-widest group-hover:text-white/80 transition-colors">Ocultar Precio</span>
                                                        <input
                                                            type="checkbox"
                                                            className="hidden"
                                                            checked={!!formData.price_hidden}
                                                            onChange={(e) => setFormData({ ...formData, price_hidden: e.target.checked })}
                                                        />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] text-white/40 uppercase tracking-widest">Descripción</label>
                                                <textarea
                                                    value={formData.description || ''}
                                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-sm text-white focus:border-gold-500/50 outline-none transition-colors h-24 text-xs leading-relaxed"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Specs */}
                                    <div className="space-y-4">
                                        <h4 className="text-xs text-gold-500 font-bold uppercase tracking-widest border-b border-white/5 pb-2">Especificaciones</h4>
                                        <div className="grid grid-cols-1 gap-4">
                                            {/* Movement */}
                                            <div className="space-y-1">
                                                <label className="text-[10px] text-white/40 uppercase tracking-widest">Movimiento</label>
                                                <select
                                                    value={formData.details?.["movement"] || ''}
                                                    onChange={(e) => setFormData({
                                                        ...formData,
                                                        details: { ...(formData.details || {}), "movement": e.target.value }
                                                    })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-sm text-white focus:border-gold-500/50 outline-none transition-colors"
                                                >
                                                    <option value="">Seleccionar...</option>
                                                    {WATCH_MOVEMENTS.map(opt => <option key={opt} value={opt} className="bg-black">{opt}</option>)}
                                                </select>
                                            </div>
                                            {/* Case Size */}
                                            <div className="space-y-1">
                                                <label className="text-[10px] text-white/40 uppercase tracking-widest">Tamaño de Caja</label>
                                                <select
                                                    value={formData.details?.["caseSize"] || ''}
                                                    onChange={(e) => setFormData({
                                                        ...formData,
                                                        details: { ...(formData.details || {}), "caseSize": e.target.value }
                                                    })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-sm text-white focus:border-gold-500/50 outline-none transition-colors"
                                                >
                                                    <option value="">Seleccionar...</option>
                                                    {WATCH_CASE_SIZES.map(opt => <option key={opt} value={opt} className="bg-black">{opt}</option>)}
                                                </select>
                                            </div>
                                            {/* Crystal */}
                                            <div className="space-y-1">
                                                <label className="text-[10px] text-white/40 uppercase tracking-widest">Cristal</label>
                                                <select
                                                    value={formData.details?.["crystal"] || ''}
                                                    onChange={(e) => setFormData({
                                                        ...formData,
                                                        details: { ...(formData.details || {}), "crystal": e.target.value }
                                                    })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-sm text-white focus:border-gold-500/50 outline-none transition-colors"
                                                >
                                                    <option value="">Seleccionar...</option>
                                                    {WATCH_CRYSTAL_TYPES.map(opt => <option key={opt} value={opt} className="bg-black">{opt}</option>)}
                                                </select>
                                            </div>
                                            {/* Case Material */}
                                            <div className="space-y-1">
                                                <label className="text-[10px] text-white/40 uppercase tracking-widest">Material</label>
                                                <select
                                                    value={formData.details?.["caseMaterial"] || ''}
                                                    onChange={(e) => setFormData({
                                                        ...formData,
                                                        details: { ...(formData.details || {}), "caseMaterial": e.target.value }
                                                    })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-sm text-white focus:border-gold-500/50 outline-none transition-colors"
                                                >
                                                    <option value="">Seleccionar...</option>
                                                    {WATCH_CASE_MATERIALS.map(opt => <option key={opt} value={opt} className="bg-black">{opt}</option>)}
                                                </select>
                                            </div>
                                            {/* Water Resistance */}
                                            <div className="space-y-1">
                                                <label className="text-[10px] text-white/40 uppercase tracking-widest">Resistencia Agua</label>
                                                <select
                                                    value={formData.details?.["waterResistance"] || ''}
                                                    onChange={(e) => setFormData({
                                                        ...formData,
                                                        details: { ...(formData.details || {}), "waterResistance": e.target.value }
                                                    })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-sm p-2 text-sm text-white focus:border-gold-500/50 outline-none transition-colors"
                                                >
                                                    <option value="">Seleccionar...</option>
                                                    {WATCH_WATER_RESISTANCE.map(opt => <option key={opt} value={opt} className="bg-black">{opt}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Images */}
                                    {/* ... (Omitted full image gallery logic here for brevity, keeping it simple or reusing existing logic if needed, but for now I will rely on the previous implementation's logic if I can copy it, or just simplify) ... */}
                                    <div className="space-y-4">
                                        <h4 className="text-xs text-gold-500 font-bold uppercase tracking-widest border-b border-white/5 pb-2">Multimedia</h4>
                                        <div className="space-y-6">
                                            {/* Main Image */}
                                            <div className="space-y-2">
                                                <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1">Imagen Principal</label>
                                                {formData.image ? (
                                                    <div className="relative aspect-video w-full bg-white/5 rounded-sm overflow-hidden border border-white/10 group">
                                                        <Image src={formData.image} alt="Main" fill className="object-cover" />
                                                        <button
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                setFormData({ ...formData, image: '' });
                                                            }}
                                                            className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                                        >
                                                            <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                                                <X className="w-4 h-4" /> Quitar Imagen
                                                            </span>
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <ImageUploadDropbox
                                                        label="Subir Portada"
                                                        onUpload={(url) => setFormData({ ...formData, image: url })}
                                                    />
                                                )}
                                                <input
                                                    type="text"
                                                    value={formData.image || ''}
                                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                                    placeholder="O ingrese URL manual..."
                                                    className="w-full bg-black/40 border-b border-white/5 p-2 text-[10px] text-white/40 focus:outline-none focus:border-gold-500/50 transition-colors font-mono mt-1"
                                                />
                                            </div>

                                            {/* Gallery Images */}
                                            <div className="space-y-3 pt-4 border-t border-white/5">
                                                <label className="text-[10px] text-white/40 uppercase tracking-widest ml-1">Recursos Adicionales (Galería)</label>
                                                <div className="grid grid-cols-4 gap-2">
                                                    {formData.gallery?.map((url, idx) => (
                                                        <div key={`${url}-${idx}`} className="relative aspect-square group bg-white/5 rounded-sm overflow-hidden border border-white/10">
                                                            <Image src={url} alt={`Gallery ${idx}`} fill className="object-cover" />
                                                            <button
                                                                type="button"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    const newGallery = [...(formData.gallery || [])];
                                                                    newGallery.splice(idx, 1);
                                                                    setFormData({ ...formData, gallery: newGallery });
                                                                }}
                                                                className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                                            >
                                                                <X className="w-4 h-4 text-white" />
                                                            </button>
                                                        </div>
                                                    ))}
                                                    <ImageUploadDropbox
                                                        compact
                                                        label="+"
                                                        onUpload={(url) => {
                                                            setFormData({ ...formData, gallery: [...(formData.gallery || []), url] });
                                                        }}
                                                    />
                                                </div>
                                                <div className="flex gap-2 pt-2">
                                                    <input
                                                        type="text"
                                                        placeholder="O añadir URL de imagen..."
                                                        className="flex-1 bg-black/40 border-b border-white/5 p-2 text-[10px] text-white/40 focus:outline-none focus:border-gold-500/50 transition-colors font-mono"
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Enter') {
                                                                e.preventDefault();
                                                                const input = e.currentTarget;
                                                                if (input.value) {
                                                                    setFormData({ ...formData, gallery: [...(formData.gallery || []), input.value] });
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
                                                                setFormData({ ...formData, gallery: [...(formData.gallery || []), input.value] });
                                                                input.value = '';
                                                            }
                                                        }}
                                                        className="px-4 bg-white/10 hover:bg-gold-500 hover:text-black text-white rounded-sm transition-colors font-bold text-sm flex items-center justify-center"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>

                            {/* RIGHT: Live Preview (8 cols) */}
                            <div className="lg:col-span-8 bg-black relative overflow-y-auto custom-scrollbar flex flex-col">
                                <div className="absolute top-4 right-4 z-10 bg-gold-500/10 backdrop-blur-md border border-gold-500/20 px-3 py-1 rounded-full pointer-events-none">
                                    <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">Vista Cliente (En Vivo)</span>
                                </div>
                                <div className="flex-1 p-8 lg:p-12">
                                    <div className="max-w-4xl mx-auto pointer-events-none opacity-90 scale-[0.9] origin-top">
                                        <ProductDetailView watch={previewWatch} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
