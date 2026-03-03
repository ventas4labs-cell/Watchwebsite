'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { X, Upload, Save, Loader2, GripVertical } from 'lucide-react';
import { toast } from 'sonner';
import clsx from 'clsx';
import Image from 'next/image';
import { supabase, uploadWatchImage } from '@/lib/supabase';

import {
    WATCH_BRANDS as BRANDS,
    WATCH_COLLECTIONS as COLLECTIONS,
    WATCH_STATUSES as STATUSES,
    WATCH_MOVEMENTS,
    WATCH_CASE_SIZES,
    WATCH_WATER_RESISTANCE,
    WATCH_CASE_MATERIALS,
    WATCH_CRYSTAL_TYPES
} from '@/lib/constants';

export function AddTimepieceForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState<File[]>([]);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);

    // Form State
    const [brand, setBrand] = useState<string>(BRANDS[0]);
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [discountPrice, setDiscountPrice] = useState('');
    const [priceHidden, setPriceHidden] = useState(false);
    const [status, setStatus] = useState<string>('Available');
    const [isFeatured, setIsFeatured] = useState(false);
    const [description, setDescription] = useState('');

    const [details, setDetails] = useState({
        "Movimiento": "",
        "Tamaño de Caja": "",
        "Resistencia al Agua": "",
        "Cristal": "",
        "Material de la Caja": ""
    });
    const [selectedCollections, setSelectedCollections] = useState<string[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setImages(prev => [...prev, ...acceptedFiles]);

        // Create preview URLs
        const newPreviews = acceptedFiles.map(file => URL.createObjectURL(file));
        setPreviewUrls(prev => [...prev, ...newPreviews]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': []
        }
    });

    const removeImage = (index: number) => {
        setImages(prev => prev.filter((_, i) => i !== index));
        setPreviewUrls(prev => {
            // Revoke the URL to avoid memory leaks
            URL.revokeObjectURL(prev[index]);
            return prev.filter((_, i) => i !== index);
        });
    };

    const toggleCollection = (tag: string) => {
        if (selectedCollections.includes(tag)) {
            setSelectedCollections(prev => prev.filter(t => t !== tag));
        } else {
            setSelectedCollections(prev => [...prev, tag]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (!supabase) throw new Error('Supabase client is not initialized');

            // Upload images
            const finalUrls: string[] = [];
            let imageIndex = 0;
            for (const url of previewUrls) {
                if (url.startsWith('blob:') && images[imageIndex]) {
                    const uploadedUrl = await uploadWatchImage(images[imageIndex]);
                    if (uploadedUrl) {
                        finalUrls.push(uploadedUrl);
                    }
                    imageIndex++;
                } else {
                    finalUrls.push(url);
                }
            }

            const mainImage = finalUrls.length > 0 ? finalUrls[0] : '';
            const gallery = finalUrls.slice(1);

            const watchId = `${brand.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${model.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${Date.now()}`;

            const payload = {
                id: watchId,
                brand,
                model,
                price: parseFloat(price) || 0,
                description,
                image: mainImage,
                gallery,
                is_featured: isFeatured,
                availability: status === 'Available' ? 'in-stock' : 'pre-order',
                details,
                discount_price: discountPrice ? parseFloat(discountPrice) : null,
                price_hidden: priceHidden
            };

            const { error } = await supabase.from('watches').insert([payload]);

            if (error) throw error;

            toast.success(`Timepiece ${brand} ${model} is Live`, {
                description: 'Inventory updated successfully.'
            });

            // Reset Form
            setBrand(BRANDS[0]);
            setModel('');
            setPrice('');
            setDiscountPrice('');
            setDescription('');
            setPriceHidden(false);
            setStatus('Available');

            setDetails({
                "Movimiento": "",
                "Tamaño de Caja": "",
                "Resistencia al Agua": "",
                "Cristal": "",
                "Material de la Caja": ""
            });
            setSelectedCollections([]);
            setImages([]);
            setPreviewUrls([]);
        } catch (error: any) {
            console.error('Error adding watch:', error);
            toast.error('Error', {
                description: error.message || 'Error occurred while saving.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
            {/* Top Section: Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-2">Marca</label>
                        <select
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                        >
                            {BRANDS.map(b => (
                                <option key={b} value={b} className="bg-rich-black">{b}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-2">Modelo / Referencia</label>
                        <input
                            type="text"
                            placeholder="e.g. Submariner 126610LN"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-2">Descripción</label>
                        <textarea
                            placeholder="Detailed description of the timepiece..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-2">Precio (USD)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-3 text-white/40">$</span>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-sm py-3 pl-8 px-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors font-mono"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-2">Precio Dcto.</label>
                            <div className="relative">
                                <span className="absolute left-4 top-3 text-white/40">$</span>
                                <input
                                    type="number"
                                    placeholder="Opcional"
                                    value={discountPrice}
                                    onChange={(e) => setDiscountPrice(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-sm py-3 pl-8 px-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors font-mono"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-2">Estado</label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                            >
                                {STATUSES.map(s => (
                                    <option key={s} value={s} className="bg-rich-black">{s}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 p-3 rounded-sm border border-white/10 h-[50px] mt-6">
                            <input
                                type="checkbox"
                                id="price_hidden"
                                checked={priceHidden}
                                onChange={(e) => setPriceHidden(e.target.checked)}
                                className="w-4 h-4 rounded-sm bg-black border border-white/20 checked:bg-gold-500 checked:border-gold-500 focus:ring-gold-500/50 transition-colors cursor-pointer appearance-none relative checked:after:content-['✓'] checked:after:absolute checked:after:text-black checked:after:text-[10px] checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:font-bold"
                            />
                            <label htmlFor="price_hidden" className="text-xs text-white cursor-pointer select-none">
                                <span className="font-bold text-white/80 uppercase tracking-wider">Ocultar Precio</span>
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-sm border border-white/10 h-[50px] mt-auto">
                        <input
                            type="checkbox"
                            id="is_featured_new"
                            checked={isFeatured}
                            onChange={(e) => setIsFeatured(e.target.checked)}
                            className="w-4 h-4 rounded-sm bg-black border border-white/20 checked:bg-gold-500 checked:border-gold-500 focus:ring-gold-500/50 transition-colors cursor-pointer appearance-none relative checked:after:content-['✓'] checked:after:absolute checked:after:text-black checked:after:text-[10px] checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:font-bold"
                        />
                        <label htmlFor="is_featured_new" className="text-xs text-white cursor-pointer select-none">
                            <span className="font-bold text-gold-500 uppercase tracking-wider">Destacado</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Technical Details */}
            <div className="space-y-4">
                <label className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-3">Especificaciones Técnicas</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-6 rounded-sm border border-white/10">
                    <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-2">Movimiento</label>
                        <select
                            value={details["Movimiento"]}
                            onChange={(e) => setDetails({ ...details, "Movimiento": e.target.value })}
                            className="w-full bg-black/20 border border-white/10 rounded-sm py-2 px-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                        >
                            <option value="">Seleccionar...</option>
                            {WATCH_MOVEMENTS.map(opt => (
                                <option key={opt} value={opt} className="bg-rich-black">{opt}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-2">Tamaño de Caja</label>
                        <select
                            value={details["Tamaño de Caja"]}
                            onChange={(e) => setDetails({ ...details, "Tamaño de Caja": e.target.value })}
                            className="w-full bg-black/20 border border-white/10 rounded-sm py-2 px-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                        >
                            <option value="">Seleccionar...</option>
                            {WATCH_CASE_SIZES.map(opt => (
                                <option key={opt} value={opt} className="bg-rich-black">{opt}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-2">Resistencia al Agua</label>
                        <select
                            value={details["Resistencia al Agua"]}
                            onChange={(e) => setDetails({ ...details, "Resistencia al Agua": e.target.value })}
                            className="w-full bg-black/20 border border-white/10 rounded-sm py-2 px-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                        >
                            <option value="">Seleccionar...</option>
                            {WATCH_WATER_RESISTANCE.map(opt => (
                                <option key={opt} value={opt} className="bg-rich-black">{opt}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-2">Material de la Caja</label>
                        <select
                            value={details["Material de la Caja"]}
                            onChange={(e) => setDetails({ ...details, "Material de la Caja": e.target.value })}
                            className="w-full bg-black/20 border border-white/10 rounded-sm py-2 px-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                        >
                            <option value="">Seleccionar...</option>
                            {WATCH_CASE_MATERIALS.map(opt => (
                                <option key={opt} value={opt} className="bg-rich-black">{opt}</option>
                            ))}
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-2">Cristal</label>
                        <select
                            value={details["Cristal"]}
                            onChange={(e) => setDetails({ ...details, "Cristal": e.target.value })}
                            className="w-full bg-black/20 border border-white/10 rounded-sm py-2 px-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                        >
                            <option value="">Seleccionar...</option>
                            {WATCH_CRYSTAL_TYPES.map(opt => (
                                <option key={opt} value={opt} className="bg-rich-black">{opt}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Collection Tags */}
            <div>
                <label className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-3">Colección (Tags to Frontend)</label>
                <div className="flex flex-wrap gap-2">
                    {COLLECTIONS.map(tag => {
                        const isSelected = selectedCollections.includes(tag);
                        return (
                            <button
                                key={tag}
                                type="button"
                                onClick={() => toggleCollection(tag)}
                                className={clsx(
                                    "px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full border transition-all",
                                    isSelected
                                        ? "bg-gold-500 border-gold-500 text-black"
                                        : "bg-white/5 border-white/10 text-white/40 hover:border-white/20 hover:text-white"
                                )}
                            >
                                {tag}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Drag & Drop Media Zone */}
            <div>
                <label className="block text-xs uppercase tracking-widest text-white/40 font-bold mb-3">Galería (Media Zone)</label>

                <div
                    {...getRootProps()}
                    className={clsx(
                        "border-2 border-dashed rounded-lg p-12 text-center transition-all cursor-pointer mb-6",
                        isDragActive
                            ? "border-gold-500 bg-gold-500/5"
                            : "border-white/10 hover:border-white/20 hover:bg-white/5"
                    )}
                >
                    <input {...getInputProps()} />
                    <Upload className={clsx("w-12 h-12 mx-auto mb-4", isDragActive ? "text-gold-500" : "text-white/20")} />
                    <p className="text-white/60 font-medium">Arrastra y suelta imágenes de alta resolución aquí</p>
                    <p className="text-white/20 text-xs mt-2">o haz clic para seleccionar archivos</p>
                </div>

                {/* URL Input */}
                <div className="flex gap-2 mb-6">
                    <input
                        type="text"
                        placeholder="O añadir URL de imagen..."
                        className="flex-1 bg-white/5 border border-white/10 rounded-sm p-3 text-sm text-white focus:outline-none focus:border-gold-500/50 transition-colors font-mono"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                const input = e.currentTarget;
                                if (input.value) {
                                    setPreviewUrls(prev => [...prev, input.value]);
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
                                setPreviewUrls(prev => [...prev, input.value]);
                                input.value = '';
                            }
                        }}
                        className="px-6 bg-white/10 hover:bg-gold-500 hover:text-black text-white rounded-sm transition-colors font-bold text-lg"
                    >
                        +
                    </button>
                </div>

                {/* Thumbnails */}
                {previewUrls.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {previewUrls.map((url, index) => (
                            <div key={url} className="relative aspect-square group bg-white/5 rounded-sm overflow-hidden border border-white/10">
                                <Image src={url} alt="Preview" fill className="object-cover" />
                                <button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    className="absolute top-2 right-2 p-1.5 bg-black/60 text-white rounded-full hover:bg-red-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                                {index === 0 && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-gold-500 text-black text-[9px] font-bold uppercase py-1 text-center tracking-widest">
                                        Portada
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Actions */}
            <div className="pt-8 border-t border-white/10">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-gold-500 text-black font-bold uppercase tracking-[0.2em] hover:bg-gold-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Publicando...
                        </>
                    ) : (
                        <>
                            <Save className="w-5 h-5" />
                            Save & Publish
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}
