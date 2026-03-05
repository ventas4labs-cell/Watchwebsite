'use client';

import { useStore } from '@/lib/store';
import { Mail, Search, Sparkles, Loader2, CheckCircle2, Award, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function CustomersPage() {
    const { orders } = useStore();
    const [searchTerm, setSearchTerm] = useState('');
    const [couponEmail, setCouponEmail] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [couponResult, setCouponResult] = useState<{ success: boolean; message: string; code?: string } | null>(null);

    const [customers, setCustomers] = useState<any[]>([]);
    const [isLoadingCustomers, setIsLoadingCustomers] = useState(true);

    useEffect(() => {
        const fetchCustomers = async () => {
            if (!supabase) {
                setIsLoadingCustomers(false);
                return;
            }

            try {
                const { data, error } = await supabase.rpc('admin_get_all_customers');
                if (error) throw error;
                if (data) setCustomers(data);
            } catch (err) {
                console.error("Error fetching customers:", err);
            } finally {
                setIsLoadingCustomers(false);
            }
        };

        fetchCustomers();
    }, []);

    const filteredCustomers = customers.filter(customer =>
        (customer.full_name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (customer.email || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleGenerateCoupon = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!couponEmail || !supabase) return;

        setIsGenerating(true);
        setCouponResult(null);

        try {
            // 1. Call Secure RPC Function
            const { data: code, error: rpcError } = await supabase.rpc('admin_generate_coupon_for_email', {
                target_email: couponEmail.toLowerCase().trim()
            });

            if (rpcError) throw new Error(rpcError.message);
            if (!code) throw new Error('No se pudo generar el código');

            // 2. Fetch Customer Name from auth
            const existingCustomer = customers.find(c => (c.email || '').toLowerCase() === couponEmail.toLowerCase().trim());
            const customerName = existingCustomer?.full_name || 'Cliente';

            // 3. Dispatch Email automatically
            const response = await fetch('/api/email/welcome', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: couponEmail.toLowerCase().trim(), name: customerName, couponCode: code }),
            });

            if (!response.ok) throw new Error('Se generó el código, pero falló el envío del email.');

            setCouponResult({ success: true, message: 'Cupón generado y enviado con éxito.', code });
            setCouponEmail('');

            // Hide success message after 5 seconds
            setTimeout(() => setCouponResult(null), 5000);
        } catch (error: any) {
            console.error("Error generating coupon:", error);
            setCouponResult({ success: false, message: error.message || 'Error al procesar la solicitud.' });
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                <div>
                    <h2 className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-2">Base de Datos</h2>
                    <h1 className="text-5xl font-display text-white">Clientes <span className="text-gold-500">VIP</span></h1>
                </div>

                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                        type="text"
                        placeholder="Buscar cliente..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-6 text-sm text-white focus:outline-none focus:border-gold-500/50 w-64 transition-all"
                    />
                </div>
            </div>

            {/* Administrador de Promociones (Coupon Generator) */}
            <div className="bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20 p-8 mb-12 rounded-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 blur-[50px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-3 mb-2">
                            <Sparkles className="w-5 h-5 text-gold-500" />
                            <h2 className="text-xl font-display text-white">Generador de Beneficios</h2>
                        </div>
                        <p className="text-white/60 text-sm font-light leading-relaxed">
                            Verifique a un usuario manualmente o reenvíe su código de iniciación (10% de inversión preferencial, 48 horas de validez). Se enviará inmediatamente a su correo electrónico.
                        </p>
                    </div>

                    <form onSubmit={handleGenerateCoupon} className="flex-1 max-w-md w-full">
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    required
                                    placeholder="Correo electrónico del cliente"
                                    value={couponEmail}
                                    onChange={(e) => setCouponEmail(e.target.value)}
                                    className="flex-1 bg-black/40 border border-white/10 rounded-sm py-3 px-4 text-sm text-white focus:outline-none focus:border-gold-500/50 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={isGenerating || !couponEmail}
                                    className="bg-gold-500 text-black px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all whitespace-nowrap min-w-[120px] flex items-center justify-center"
                                >
                                    {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Generar'}
                                </button>
                            </div>
                            {couponResult && (
                                <div className={`text-xs px-4 py-2 flex items-center gap-2 rounded-sm border ${couponResult.success ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
                                    {couponResult.success && <CheckCircle2 className="w-3 h-3 flex-shrink-0" />}
                                    <span className="flex-1">{couponResult.message}</span>
                                    {couponResult.code && <span className="font-mono font-bold tracking-widest text-gold-500 bg-black/40 px-2 py-0.5 rounded">{couponResult.code}</span>}
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoadingCustomers ? (
                    <div className="col-span-full py-20 flex flex-col items-center justify-center text-white/40">
                        <Loader2 className="w-8 h-8 animate-spin text-gold-500 mb-4" />
                        <p>Cargando clientes de la bóveda...</p>
                    </div>
                ) : filteredCustomers.map((customer) => (
                    <Link key={customer.id} href={`/admin/customers/${customer.id}`} className="block">
                        <div className="bg-white/5 border border-white/10 rounded-sm p-6 hover:border-gold-500/50 hover:bg-gold-500/5 transition-all group h-full cursor-pointer">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500/20 to-transparent border border-gold-500/20 flex items-center justify-center text-gold-500 font-display text-xl">
                                    {(customer.full_name || 'C').charAt(0)}
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">Nivel</span>
                                    <span className={`font-bold text-sm ${customer.tier_level === 'Curator' ? 'text-white' : customer.tier_level === 'Collector' ? 'text-white/80' : 'text-gold-500'}`}>
                                        {customer.tier_level || 'Member'}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-lg font-display text-white mb-4 line-clamp-1">{customer.full_name || 'Cliente Sin Nombre'}</h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-3 text-white/40 group-hover:text-white/70 transition-colors">
                                    <Mail className="w-4 h-4 text-gold-500/50" />
                                    <span className="truncate">{customer.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/40 group-hover:text-white/70 transition-colors">
                                    <Award className="w-4 h-4 text-gold-500/50" />
                                    <span>{customer.completed_orders_count || 0} compras exitosas</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/40 group-hover:text-white/70 transition-colors pt-4 border-t border-white/5 mt-4">
                                    <Clock className="w-4 h-4 text-gold-500/50" />
                                    <span className="text-xs">Registrado el {new Date(customer.created_at).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {!isLoadingCustomers && filteredCustomers.length === 0 && (
                <div className="text-center py-20 text-white/40">
                    <p>No se encontraron clientes.</p>
                </div>
            )}
        </div>
    );
}
