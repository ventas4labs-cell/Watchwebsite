'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useStore } from '@/lib/store';
import { Navbar } from '@/components/Navbar';
import { Search, Package, Truck, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function TrackingContent() {
    const searchParams = useSearchParams();
    const { orders, cancelOrder } = useStore();
    const [searchId, setSearchId] = useState('');
    const [foundOrder, setFoundOrder] = useState<any>(null);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        const id = searchParams.get('id');
        if (id) {
            setSearchId(id);
            handleSearch(id);
        }
    }, [searchParams]);

    const handleSearch = (id: string = searchId) => {
        setHasSearched(true);
        const term = id.toLowerCase().trim();
        const order = orders.find(o =>
            (o.trackingNumber && o.trackingNumber.toLowerCase() === term) ||
            o.id.toLowerCase() === term
        );
        setFoundOrder(order || null);
    };

    const statusSteps = ['Recibido', 'Preparación', 'Enviado', 'Entregado'];
    const currentStepIndex = foundOrder ? statusSteps.indexOf(foundOrder.status) : -1;

    return (
        <div className="max-w-4xl mx-auto space-y-12">
            {/* Search Box */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-sm">
                <h2 className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-6">Rastreo de Pedido</h2>
                <div className="flex gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                        <input
                            type="text"
                            placeholder="Ingrese su Número de Rastreo (ej: CHR-1234-XYZ)"
                            className="w-full bg-black/40 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors uppercase font-mono"
                            value={searchId}
                            onChange={(e) => setSearchId(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        />
                    </div>
                    <button
                        onClick={() => handleSearch()}
                        className="bg-gold-500 text-black font-bold px-8 hover:bg-gold-400 transition-all uppercase tracking-widest text-sm"
                    >
                        Buscar
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {foundOrder ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="space-y-8"
                    >
                        {/* Status Progress Bar */}
                        {foundOrder.status !== 'Cancelado' && (
                            <div className="bg-white/5 border border-white/10 p-10 rounded-sm relative overflow-hidden">
                                <div className="grid grid-cols-4 relative z-10">
                                    {statusSteps.map((step, index) => {
                                        const isCompleted = index <= currentStepIndex;
                                        const isActive = index === currentStepIndex;
                                        return (
                                            <div key={step} className="flex flex-col items-center text-center space-y-4">
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${isCompleted ? 'bg-gold-500 border-gold-500 text-black' : 'border-white/10 text-white/20'
                                                    } ${isActive ? 'ring-4 ring-gold-500/20 scale-110' : ''}`}>
                                                    {index === 0 && <Package className="w-5 h-5" />}
                                                    {index === 1 && <Clock className="w-5 h-5" />}
                                                    {index === 2 && <Truck className="w-5 h-5" />}
                                                    {index === 3 && <CheckCircle2 className="w-5 h-5" />}
                                                </div>
                                                <div className="space-y-1">
                                                    <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isCompleted ? 'text-white' : 'text-white/20'}`}>
                                                        {step}
                                                    </span>
                                                    {isActive && (
                                                        <span className="block text-[9px] text-gold-500 animate-pulse">Estado Actual</span>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                {/* Connector Line */}
                                <div className="absolute top-[64px] left-[12.5%] right-[12.5%] h-[2px] bg-white/5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(currentStepIndex / 3) * 100}%` }}
                                        className="h-full bg-gold-500/30"
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Order Details Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Summary */}
                            <div className="lg:col-span-2 space-y-6">
                                <div className="bg-white/5 border border-white/10 p-8 rounded-sm space-y-8">
                                    <div className="flex justify-between items-start border-b border-white/5 pb-6">
                                        <div>
                                            <h3 className="text-white text-xl font-display">Resumen del Pedido</h3>
                                            <p className="text-white/40 text-sm font-mono mt-1 text-gold-500">{foundOrder.trackingNumber || '#' + foundOrder.id}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-white/40 text-xs uppercase tracking-widest">Fecha</p>
                                            <p className="text-white font-medium">{new Date(foundOrder.date).toLocaleDateString()}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {foundOrder.items.map((item: any) => (
                                            <div key={item.id} className="flex gap-4">
                                                <div className="relative w-16 h-20 bg-white/5 border border-white/10 rounded-sm flex-shrink-0">
                                                    <Image src={item.image} alt={item.model} fill className="object-cover opacity-80" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-gold-500 text-[10px] font-bold tracking-widest uppercase">{item.brand}</h4>
                                                    <p className="text-white font-medium">{item.model}</p>
                                                    <p className="text-white/40 text-sm">{item.quantity} x ${item.price.toLocaleString()}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-white font-medium">${(item.price * item.quantity).toLocaleString()}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t border-white/5 pt-6 flex justify-between items-center">
                                        <span className="text-white/40 uppercase tracking-widest text-xs">Total de Inversión</span>
                                        <span className="text-2xl text-gold-500 font-display">${foundOrder.total.toLocaleString()}</span>
                                    </div>

                                    {foundOrder.status === 'Recibido' && (
                                        <div className="pt-4 border-t border-white/5">
                                            <button
                                                onClick={() => {
                                                    if (window.confirm('¿Está seguro que desea cancelar este pedido? Esta acción no se puede deshacer.')) {
                                                        cancelOrder(foundOrder.id);
                                                    }
                                                }}
                                                className="w-full py-3 text-red-500/60 hover:text-red-500 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 rounded-sm transition-all text-xs uppercase tracking-widest font-bold"
                                            >
                                                Cancelar Orden
                                            </button>
                                        </div>
                                    )}

                                    {foundOrder.status === 'Cancelado' && (
                                        <div className="pt-4 border-t border-white/5 text-center">
                                            <span className="inline-block px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-sm text-xs font-bold uppercase tracking-widest">
                                                Pedido Cancelado
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Customer Info */}
                            <div className="space-y-6">
                                <div className="bg-white/5 border border-white/10 p-8 rounded-sm space-y-6">
                                    <h3 className="text-white text-sm font-bold tracking-widest uppercase">Detalles de Entrega</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Cliente</p>
                                            <p className="text-white font-medium">{foundOrder.customerName}</p>
                                        </div>
                                        <div>
                                            <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Contacto</p>
                                            <p className="text-white/80 text-sm">{foundOrder.email}</p>
                                            <p className="text-white/80 text-sm">{foundOrder.phone}</p>
                                        </div>
                                        {foundOrder.address && (
                                            <div>
                                                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Dirección</p>
                                                <p className="text-white/60 text-sm leading-relaxed">{foundOrder.address}</p>
                                            </div>
                                        )}
                                        {foundOrder.note && (
                                            <div>
                                                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Nota</p>
                                                <p className="text-white/60 text-sm italic">"{foundOrder.note}"</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="p-8 text-center bg-gold-500/5 border border-gold-500/10 rounded-sm">
                                    <p className="text-[10px] text-gold-500 font-bold tracking-[0.2em] uppercase mb-2">Soporte VIP</p>
                                    <p className="text-white/60 text-xs leading-relaxed">¿Dudas sobre su pedido? Contacte a su asesor asignado.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : hasSearched ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-20 text-center space-y-6 bg-white/5 border border-white/10 rounded-sm"
                    >
                        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto text-red-500">
                            <AlertCircle className="w-8 h-8" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl text-white font-display">Pedido no encontrado</h3>
                            <p className="text-white/40 max-w-sm mx-auto text-sm">No pudimos encontrar un pedido con el ID: <span className="text-white font-mono">{searchId}</span>. Verifique el código e intente de nuevo.</p>
                        </div>
                    </motion.div>
                ) : (
                    <div className="py-20 text-center text-white/20">
                        <Package className="w-12 h-12 mx-auto mb-4 opacity-10" />
                        <p className="text-sm">Ingrese su número de seguimiento para ver el estado en tiempo real.</p>
                    </div>
                )}
            </AnimatePresence>

            <div className="text-center pt-8">
                <Link href="/" className="text-white/40 hover:text-gold-500 text-xs uppercase tracking-widest transition-colors">
                    Regresar al Catálogo
                </Link>
            </div>
        </div>
    );
}

export default function TrackingPage() {
    return (
        <main className="min-h-screen bg-rich-black text-white pb-20">
            <Navbar />
            <div className="container mx-auto px-6 pt-32">
                <Suspense fallback={<div className="text-center py-20 text-white/40">Cargando rastreador...</div>}>
                    <TrackingContent />
                </Suspense>
            </div>
        </main>
    );
}
