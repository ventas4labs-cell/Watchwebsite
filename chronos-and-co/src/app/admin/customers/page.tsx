'use client';

import { useStore } from '@/lib/store';
import { Mail, Phone, MapPin, Calendar, Search, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function CustomersPage() {
    const { orders } = useStore();
    const [searchTerm, setSearchTerm] = useState('');
    const [couponEmail, setCouponEmail] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [couponResult, setCouponResult] = useState<{ success: boolean; message: string; code?: string } | null>(null);

    // Deduplicate customers from orders
    const customersMap = new Map();
    orders.forEach(order => {
        if (!customersMap.has(order.email)) {
            customersMap.set(order.email, {
                id: order.id, // using first order id as temp customer id
                name: order.customerName,
                email: order.email,
                phone: order.phone,
                address: order.address,
                firstOrderDate: order.date,
                totalOrders: 1,
                totalSpent: order.total
            });
        } else {
            const customer = customersMap.get(order.email);
            customer.totalOrders += 1;
            customer.totalSpent += order.total;
            // keep earliest date
            if (new Date(order.date) < new Date(customer.firstOrderDate)) {
                customer.firstOrderDate = order.date;
            }
        }
    });

    const customers = Array.from(customersMap.values());

    const filteredCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase())
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

            // 2. Fetch Customer Name from auth (simulated via stored order if exists, or just send 'Cliente')
            const existingCustomer = customers.find(c => c.email.toLowerCase() === couponEmail.toLowerCase().trim());
            const customerName = existingCustomer?.name || 'Cliente';

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
                {filteredCustomers.map((customer) => (
                    <div key={customer.email} className="bg-white/5 border border-white/10 rounded-sm p-6 hover:border-white/20 transition-all group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500/20 to-transparent border border-gold-500/20 flex items-center justify-center text-gold-500 font-display text-xl">
                                {customer.name.charAt(0)}
                            </div>
                            <div className="text-right">
                                <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">Total Gastado</span>
                                <span className="text-gold-500 font-bold">${customer.totalSpent.toLocaleString()}</span>
                            </div>
                        </div>

                        <h3 className="text-lg font-display text-white mb-4">{customer.name}</h3>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3 text-white/40 group-hover:text-white/60 transition-colors">
                                <Mail className="w-4 h-4 text-gold-500/50" />
                                <span className="truncate">{customer.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/40 group-hover:text-white/60 transition-colors">
                                <Phone className="w-4 h-4 text-gold-500/50" />
                                <span>{customer.phone}</span>
                            </div>
                            <div className="flex items-start gap-3 text-white/40 group-hover:text-white/60 transition-colors">
                                <MapPin className="w-4 h-4 text-gold-500/50 mt-0.5" />
                                <span className="line-clamp-2">{customer.address}</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/40 group-hover:text-white/60 transition-colors pt-4 border-t border-white/5 mt-4">
                                <Calendar className="w-4 h-4 text-gold-500/50" />
                                <span className="text-xs">Cliente desde {new Date(customer.firstOrderDate).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredCustomers.length === 0 && (
                <div className="text-center py-20 text-white/40">
                    <p>No se encontraron clientes.</p>
                </div>
            )}
        </div>
    );
}
