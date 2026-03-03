'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useStore } from '@/lib/store';
import { Navbar } from '@/components/Navbar';
import { Search, Package, Truck, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

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

    const handleSearch = async (id: string = searchId) => {
        if (!id.trim()) return;
        setHasSearched(true);
        const term = id.trim();

        if (!supabase) return;

        try {
            let { data, error } = await supabase
                .from('orders')
                .select('*')
                .eq('tracking_number', term)
                .single();

            if (!data) {
                const { data: idData } = await supabase
                    .from('orders')
                    .select('*')
                    .eq('id', term)
                    .single();
                data = idData;
            }

            if (data) {
                const mappedOrder = {
                    id: data.id,
                    trackingNumber: data.tracking_number,
                    customerName: data.customer_name,
                    email: data.customer_email,
                    phone: data.customer_phone || '',
                    address: data.customer_address,
                    items: data.order_items || [],
                    total: data.total_amount || 0,
                    status: data.status,
                    date: data.created_at,
                    note: data.note,
                    status_notes: data.status_notes
                };
                setFoundOrder(mappedOrder);
            } else {
                setFoundOrder(null);
            }
        } catch (error) {
            console.error('Error fetching order', error);
            setFoundOrder(null);
        }
    };

    useEffect(() => {
        if (!foundOrder?.id || !supabase) return;

        const channel = supabase
            .channel(`order_updates_${foundOrder.id}`)
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'orders',
                    filter: `id=eq.${foundOrder.id}`
                },
                (payload) => {
                    const newStatus = payload.new.status;
                    const newStatusNotes = payload.new.status_notes;
                    setFoundOrder((prev: any) => prev ? { ...prev, status: newStatus, status_notes: newStatusNotes } : null);
                }
            )
            .subscribe();

        return () => {
            if (supabase) {
                supabase.removeChannel(channel);
            }
        };
    }, [foundOrder?.id]);

    const statusSteps = ['Orden Recibida', 'Asegurando su Pieza', 'Pieza en Camino', 'Pieza Llegó', 'Entregando', 'Entregada'];
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
                            <div className="bg-[#000000] border border-white/10 p-10 rounded-sm relative">
                                <h3 className="text-white text-sm font-bold tracking-[0.2em] uppercase mb-8">Live Vault</h3>
                                <div className="relative space-y-8 pl-2">
                                    {/* Vertical Connector Line */}
                                    <div className="absolute top-4 bottom-6 left-[20px] w-[2px] bg-white/5 z-0 flex flex-col justify-start overflow-hidden">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: `${currentStepIndex >= 0 ? (currentStepIndex / (statusSteps.length - 1)) * 100 : 0}%` }}
                                            className="w-full bg-gold-500 shadow-[0_0_10px_#D4AF37]"
                                            transition={{ duration: 1.5, ease: "easeInOut" }}
                                        />
                                    </div>

                                    {statusSteps.map((step, index) => {
                                        const isCompleted = index <= currentStepIndex;
                                        const isActive = index === currentStepIndex;
                                        return (
                                            <div key={step} className="relative z-10 flex min-h-[4rem] items-start gap-6">
                                                {/* Icon Column */}
                                                <div className="flex-shrink-0 flex flex-col items-center">
                                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-500 bg-[#000000] ${isCompleted ? 'border-gold-500 text-gold-500' : 'border-white/10 text-transparent'} ${isActive ? 'scale-125 ring-4 ring-gold-500/30' : ''}`}>
                                                        {isCompleted && !isActive ? (
                                                            <CheckCircle2 className="w-4 h-4 text-gold-500 fill-gold-500 text-black" />
                                                        ) : (
                                                            <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isCompleted ? 'bg-gold-500 shadow-[0_0_8px_#D4AF37]' : 'bg-transparent'} ${isActive ? 'animate-[pulse_1.5s_ease-in-out_infinite] scale-150' : ''}`}></div>
                                                        )}
                                                    </div>
                                                </div>
                                                {/* Text Column */}
                                                <div className="space-y-2 pt-[2px]">
                                                    <span className={`text-xs font-bold tracking-[0.2em] uppercase ${isCompleted ? 'text-white' : 'text-white/20'}`}>
                                                        {step}
                                                    </span>
                                                    {isActive && (
                                                        <span className="block text-[10px] text-gold-500 animate-[pulse_2.5s_ease-in-out_infinite] tracking-widest uppercase">Actividad en progreso</span>
                                                    )}
                                                    {isActive && foundOrder.status_notes && (
                                                        <p className="text-white/60 text-xs italic leading-relaxed max-w-sm bg-white/5 border border-white/10 p-3 rounded-sm mt-2">"{foundOrder.status_notes}"</p>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
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
                                                <div className="relative w-16 h-20 bg-white/5 border border-white/10 rounded-sm flex-shrink-0 flex items-center justify-center">
                                                    {item.image ? (
                                                        <Image src={item.image} alt={item.model} fill className="object-cover opacity-80" />
                                                    ) : (
                                                        <span className="text-white/20 text-[8px] uppercase tracking-widest leading-none text-center">No Img</span>
                                                    )}
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
        <main className="min-h-screen bg-[#000000] text-white pb-20">
            <Navbar />
            <div className="container mx-auto px-6 pt-32">
                <Suspense fallback={<div className="text-center py-20 text-white/40">Cargando rastreador...</div>}>
                    <TrackingContent />
                </Suspense>
            </div>
        </main>
    );
}
