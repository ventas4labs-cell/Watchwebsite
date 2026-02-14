'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { X, Upload, Save, Loader2, GripVertical } from 'lucide-react';
import { toast } from 'sonner';
import clsx from 'clsx';
import Image from 'next/image';

const BRANDS = ['Rolex', 'Patek Philippe', 'Audemars Piguet', 'Omega', 'Cartier', 'Tissot', 'Seiko', 'Bulova'];
const COLLECTIONS = ['Divers', 'Chronograph', 'Dress', 'Vintage', 'Gold', 'Limited Edition'];
const STATUSES = ['Available', 'Reserved', 'Sold'];

export function AddTimepieceForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState<File[]>([]);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);

    // Form State
    const [brand, setBrand] = useState(BRANDS[0]);
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('Available');
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

        // Simulation of API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast.success(`Timepiece ${brand} ${model} is Live`, {
            description: 'Inventory updated successfully.'
        });

        // Reset Form
        setBrand(BRANDS[0]);
        setModel('');
        setPrice('');
        setStatus('Available');
        setSelectedCollections([]);
        setImages([]);
        setPreviewUrls([]);
        setIsLoading(false);
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
                </div>

                <div className="space-y-6">
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
