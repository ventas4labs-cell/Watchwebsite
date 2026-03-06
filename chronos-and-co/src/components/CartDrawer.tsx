'use client';
import React, { useState, useEffect } from 'react';
import { X, Minus, Plus, Trash2, CheckCircle2, ChevronLeft, Send, Package } from 'lucide-react';
import { useStore } from '@/lib/store';
import { submitOrderToSupabase, supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function CartDrawer() {
    const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, placeOrder, orders } = useStore();
    const [step, setStep] = useState<'cart' | 'form' | 'success'>('cart');
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', note: '', address: '' });
    const [lastOrderTracking, setLastOrderTracking] = useState('');

    // Coupon State
    const [couponInput, setCouponInput] = useState('');
    const [couponStatus, setCouponStatus] = useState<'idle' | 'validating' | 'success' | 'invalid' | 'expired'>('idle');
    const [isDiscountApplied, setIsDiscountApplied] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);
    const [vipTier, setVipTier] = useState<'Member' | 'Collector' | 'Curator'>('Member');

    useEffect(() => {
        const fetchUser = async () => {
            if (!supabase) return;
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                const name = session.user.user_metadata?.full_name || '';
                const email = session.user.email || '';
                setFormData(prev => ({ ...prev, name, email }));
                setUserId(session.user.id);

                // Fetch VIP Tier
                const { data } = await supabase.from('profiles').select('tier_level').eq('id', session.user.id).single();
                if (data?.tier_level) {
                    setVipTier(data.tier_level as any);
                }
            }
        };
        fetchUser();
    }, []);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Calculate VIP Discount first
    const vipMultiplier = vipTier === 'Curator' ? 0.93 : vipTier === 'Collector' ? 0.95 : 1;
    const priceAfterVip = total * vipMultiplier;

    // Welcome code stacks on top if active
    const finalCalculatedTotal = isDiscountApplied ? priceAfterVip * 0.9 : priceAfterVip;

    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && (formData.email || formData.phone) && formData.address) {
            const newOrder = placeOrder({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                note: formData.note,
                address: formData.address
            });

            if (newOrder) {
                // Submit to Supabase
                await submitOrderToSupabase({
                    customer_name: newOrder.customerName,
                    customer_email: newOrder.email,
                    customer_phone: newOrder.phone,
                    customer_address: newOrder.address,
                    tracking_number: newOrder.trackingNumber,
                    order_items: newOrder.items,
                    total_amount: finalCalculatedTotal,
                    status: 'Recibido',
                    coupon_used: isDiscountApplied
                });

                // Clear the welcome_coupon_code from profiles if used
                if (isDiscountApplied && userId && supabase) {
                    await supabase
                        .from('profiles')
                        .update({
                            welcome_coupon_code: null,
                            coupon_expiry: null
                        })
                        .eq('id', userId);
                }

                setLastOrderTracking(newOrder.trackingNumber);
                setStep('success');

                // Fire and forget email sending (Real Service)
                if (formData.email) {
                    fetch('/api/email/order-confirmation', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            customerName: newOrder.customerName,
                            email: newOrder.email,
                            phone: newOrder.phone,
                            address: newOrder.address,
                            trackingNumber: newOrder.trackingNumber,
                            items: newOrder.items,
                            total: newOrder.total,
                            origin: typeof window !== 'undefined' ? window.location.origin : ''
                        }),
                    }).then(async (res) => {
                        if (!res.ok) {
                            const errorData = await res.json().catch(() => ({}));
                            console.error("Resend API Route Error:", res.status, errorData);
                        } else {
                            console.log("Confirmation email sent successfully!");
                        }
                    }).catch(err => console.error("Network Error triggering confirmation email:", err));
                }
            }
        }
    };

    const handleApplyCoupon = async () => {
        if (!couponInput.trim() || !supabase) return;

        setCouponStatus('validating');

        try {
            // First find a profile with this exact code
            const { data: profileData, error: profileError } = await supabase
                .from('profiles')
                .select('coupon_expiry')
                .eq('welcome_coupon_code', couponInput)
                .single();

            if (profileError || !profileData) {
                setCouponStatus('invalid');
                setIsDiscountApplied(false);
                return;
            }

            // Check expiry
            const isExpired = new Date(profileData.coupon_expiry).getTime() < new Date().getTime();
            if (isExpired) {
                setCouponStatus('expired');
                setIsDiscountApplied(false);
                return;
            }

            // Coupon is genuinely valid
            setCouponStatus('success');
            setIsDiscountApplied(true);

        } catch (err) {
            console.error('Error validating coupon', err);
            setCouponStatus('invalid');
            setIsDiscountApplied(false);
        }
    };

    // Effect to reset drawer state if needed
    useEffect(() => {
        if (step === 'success' && !lastOrderTracking && orders.length > 0) {
            setLastOrderTracking(orders[0].trackingNumber);
        }
    }, [step, orders, lastOrderTracking]);

    const resetDrawer = () => {
        toggleCart(false);
        // Reset step after some time so next open starts at cart
        setTimeout(() => setStep('cart'), 500);
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={resetDrawer}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-rich-black border-l border-gold-500/20 z-[101] flex flex-col shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-8 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                {step === 'form' && (
                                    <button
                                        onClick={() => setStep('cart')}
                                        className="p-2 -ml-2 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                )}
                                <h2 className="text-2xl font-display font-medium text-white tracking-tight">
                                    {step === 'cart' ? 'Tu Selección' : step === 'form' ? 'Finalizar Pedido' : '¡Pedido Recibido!'}
                                </h2>
                            </div>
                            <button
                                onClick={resetDrawer}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto overflow-x-hidden">
                            {step === 'cart' && (
                                <div className="p-8 space-y-8">
                                    {cart.length === 0 ? (
                                        <div className="h-full py-20 flex flex-col items-center justify-center text-white/40 space-y-6 text-center">
                                            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center">
                                                <Package className="w-8 h-8 opacity-20" />
                                            </div>
                                            <div className="space-y-2">
                                                <span className="text-white text-lg block font-display">Colección vacía</span>
                                                <p className="text-sm max-w-[200px]">Explore nuestro catálogo para comenzar su selección.</p>
                                            </div>
                                            <button
                                                onClick={() => toggleCart(false)}
                                                className="text-gold-500 hover:text-gold-400 font-medium tracking-widest text-xs uppercase pt-4 border-t border-white/5 w-full"
                                            >
                                                Ver Catálogo
                                            </button>
                                        </div>
                                    ) : (
                                        cart.map((item) => (
                                            <motion.div
                                                layout
                                                key={item.id}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="flex gap-6 items-start group"
                                            >
                                                <div className="relative w-24 h-32 bg-white/5 rounded-sm overflow-hidden flex-shrink-0 border border-white/10 flex items-center justify-center">
                                                    {item.image ? (
                                                        <Image
                                                            src={item.image}
                                                            alt={item.model}
                                                            fill
                                                            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                                        />
                                                    ) : (
                                                        <span className="text-white/20 text-[10px] uppercase tracking-widest leading-none text-center">No Img</span>
                                                    )}
                                                </div>
                                                <div className="flex-1 min-w-0 py-1">
                                                    <h4 className="text-[10px] text-gold-500 font-bold tracking-[0.2em] uppercase mb-1">{item.brand}</h4>
                                                    <h3 className="text-white font-medium text-lg leading-tight mb-2 truncate">{item.model}</h3>
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <p className="text-white/90 font-light text-sm">${item.price.toLocaleString()}</p>
                                                        {item.discount_price && item.discount_price === item.price && (
                                                            <span className="text-[9px] uppercase tracking-widest bg-gold-500/10 text-gold-500 px-2 py-0.5 rounded-full border border-gold-500/20">
                                                                Oferta
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
                                                            <button
                                                                className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all disabled:opacity-10"
                                                                disabled={item.quantity <= 1}
                                                                onClick={() => updateQuantity(item.id, -1)}
                                                            >
                                                                <Minus className="w-3 h-3" />
                                                            </button>
                                                            <span className="text-xs font-bold w-6 text-center text-white font-mono">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, 1)}
                                                                className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all"
                                                            >
                                                                <Plus className="w-3 h-3" />
                                                            </button>
                                                        </div>
                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="text-white/20 hover:text-red-500/80 transition-colors p-2"
                                                            title="Eliminar"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))
                                    )}
                                </div>
                            )}

                            {step === 'form' && (
                                <form onSubmit={handleCheckout} className="p-8 space-y-8">
                                    <div className="space-y-1">
                                        <p className="text-white/60 text-sm font-light">
                                            Un especialista de <span className="text-gold-500 font-medium">Timeless Watches</span> se pondrá en contacto con usted para coordinar el pago y la entrega.
                                        </p>
                                    </div>

                                    <div className="space-y-6 pt-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Nombre Completo</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Ej. Juan Pérez"
                                                className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors placeholder:text-white/20"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Correo Electrónico</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="juan@ejemplo.com"
                                                className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors placeholder:text-white/20"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Teléfono <span className="text-red-500">*</span></label>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="+506 8888 8888"
                                                className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors placeholder:text-white/20"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Dirección de Entrega <span className="text-red-500">*</span></label>
                                            <textarea
                                                required
                                                placeholder="Provincia, Cantón, Distrito y detalles exactos..."
                                                className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors placeholder:text-white/20 h-24 resize-none"
                                                value={formData.address}
                                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <div className="flex justify-between items-end mb-6">
                                            <span className="text-white/40 text-sm font-light uppercase tracking-widest">Resumen del Total</span>
                                            <span className="text-2xl text-gold-500 font-display">${total.toLocaleString()}</span>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-gold-500 text-black font-bold py-5 hover:bg-gold-400 transition-all tracking-[0.2em] uppercase text-sm shadow-[0_10px_30px_rgba(212,175,55,0.2)] flex items-center justify-center gap-3"
                                        >
                                            Confirmar Pedido <Send className="w-4 h-4" />
                                        </button>
                                    </div>
                                </form>
                            )}

                            {step === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-12 text-center h-full flex flex-col items-center justify-center"
                                >
                                    <div className="w-24 h-24 bg-gold-500/10 rounded-full flex items-center justify-center mb-8 border border-gold-500/20">
                                        <CheckCircle2 className="w-12 h-12 text-gold-500" />
                                    </div>
                                    <h3 className="text-3xl font-display text-white mb-4">¡Excelente Elección!</h3>
                                    <p className="text-white/60 font-light leading-relaxed mb-6">
                                        Hemos recibido su solicitud de colección. Un especialista exclusivo se pondrá en contacto con usted en las próximas 24 horas.
                                    </p>

                                    <div className="flex items-center gap-2 text-gold-500/80 bg-gold-500/5 px-4 py-2 rounded-full border border-gold-500/10 mb-8">
                                        <Send className="w-3 h-3" />
                                        <span className="text-[10px] font-bold tracking-widest uppercase">Número de seguimiento enviado a su email</span>
                                    </div>

                                    {lastOrderTracking && (
                                        <div className="w-full bg-white/5 border border-white/10 rounded-sm p-6 mb-8 text-left">
                                            <span className="text-[10px] text-gold-500 font-bold tracking-widest uppercase mb-2 block">Número de Seguimiento</span>
                                            <div className="flex items-center justify-between">
                                                <code className="text-xl font-mono text-white select-all">{lastOrderTracking}</code>
                                                <button
                                                    onClick={() => navigator.clipboard.writeText(lastOrderTracking)}
                                                    className="text-[10px] text-white/40 hover:text-white transition-colors uppercase font-bold tracking-tighter"
                                                >
                                                    Copiar
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex flex-col w-full gap-4">
                                        <Link
                                            href={`/track?id=${lastOrderTracking}`}
                                            onClick={resetDrawer}
                                            className="w-full bg-gold-500 text-black font-bold py-4 hover:bg-gold-400 transition-all tracking-[0.2em] uppercase text-sm flex items-center justify-center gap-2"
                                        >
                                            Rastrear Pedido <Send className="w-4 h-4" />
                                        </Link>
                                        <button
                                            onClick={resetDrawer}
                                            className="text-white/40 font-bold tracking-widest text-xs uppercase hover:text-white transition-colors"
                                        >
                                            Cerrar
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Footer Summary (Only in 'cart' step and if not empty) */}
                        {step === 'cart' && cart.length > 0 && (
                            <div className="border-t border-white/5 bg-black/40 backdrop-blur-md">

                                {/* Privilege Code Section */}
                                <div className="p-8 pb-4 border-b border-white/5">
                                    <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase mb-3 block flex items-center justify-between">
                                        <span>Código de Privilegio</span>
                                        {couponStatus === 'success' && (
                                            <motion.span
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="text-gold-500 font-serif normal-case tracking-normal italic text-xs"
                                            >
                                                Privilege Applied: 10% Welcome Benefit
                                            </motion.span>
                                        )}
                                        {couponStatus === 'invalid' && <span className="text-white/30 text-[9px] normal-case">Código inactivo o irreconocible</span>}
                                        {couponStatus === 'expired' && <span className="text-white/30 text-[9px] normal-case">El código ha expirado</span>}
                                    </label>
                                    <div className="flex gap-3">
                                        <input
                                            type="text"
                                            placeholder="Ej. TIMELESS-XXXX"
                                            className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 transition-colors placeholder:text-white/20 uppercase font-mono text-sm disabled:opacity-50"
                                            value={couponInput}
                                            onChange={(e) => {
                                                setCouponInput(e.target.value.toUpperCase());
                                                setCouponStatus('idle');
                                            }}
                                            disabled={isDiscountApplied}
                                        />
                                        <button
                                            onClick={handleApplyCoupon}
                                            disabled={!couponInput || isDiscountApplied || couponStatus === 'validating'}
                                            className="px-6 bg-white/10 hover:bg-white/20 text-white text-[10px] uppercase tracking-widest font-bold rounded-sm transition-colors disabled:opacity-30 disabled:hover:bg-white/10"
                                        >
                                            {couponStatus === 'validating' ? 'Verificando...' : isDiscountApplied ? 'Aplicado' : 'Validar'}
                                        </button>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="flex justify-between items-center mb-8 relative">
                                        <div className="space-y-1">
                                            <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase block">Total Estimado</span>

                                            <div className="relative">
                                                {/* Original Price Base */}
                                                <motion.span
                                                    animate={{
                                                        opacity: (isDiscountApplied || vipTier !== 'Member') ? 0 : 1,
                                                        position: (isDiscountApplied || vipTier !== 'Member') ? 'absolute' : 'relative',
                                                        y: (isDiscountApplied || vipTier !== 'Member') ? -20 : 0
                                                    }}
                                                    className="text-3xl text-gold-500 font-display block"
                                                >
                                                    ${total.toLocaleString()}
                                                </motion.span>

                                                {/* VIP Component */}
                                                {(vipTier !== 'Member' && !isDiscountApplied) && (
                                                    <div className="flex flex-col relative text-right items-end">
                                                        <span className={`text-3xl font-display relative z-0 ${vipTier === 'Curator' ? 'text-zinc-400' : 'text-slate-300'}`}>
                                                            ${finalCalculatedTotal.toLocaleString()}
                                                        </span>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <span className="text-[9px] uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded-full text-white/50 border border-white/5">
                                                                VIP Privilege ({vipTier === 'Curator' ? '7%' : '5%'})
                                                            </span>
                                                            <span className="text-[10px] text-white/30 uppercase tracking-widest line-through">
                                                                ${total.toLocaleString()}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Welcome Code Component (Stacks on VIP) */}
                                                <AnimatePresence>
                                                    {isDiscountApplied && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="flex flex-col relative text-right items-end"
                                                        >
                                                            {/* Gold Glint Animation */}
                                                            <motion.div
                                                                initial={{ x: '-100%', opacity: 0 }}
                                                                animate={{ x: '200%', opacity: [0, 1, 0] }}
                                                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent skew-x-12 z-10 w-1/2"
                                                            />
                                                            <span className="text-3xl text-gold-500 font-display relative z-0">
                                                                ${finalCalculatedTotal.toLocaleString()}
                                                            </span>

                                                            <div className="flex flex-col items-end gap-1 mt-1">
                                                                {vipTier !== 'Member' && (
                                                                    <span className="text-[9px] uppercase tracking-widest text-zinc-400">
                                                                        + VIP Privilege ({vipTier === 'Curator' ? '7%' : '5%'})
                                                                    </span>
                                                                )}
                                                                <span className="text-[10px] text-gold-500/60 uppercase tracking-widest line-through">
                                                                    ${total.toLocaleString()}
                                                                </span>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                        <div className="text-right text-white/40 text-[10px] font-light leading-relaxed">
                                            Impuestos incluidos <br /> Envío asegurado gratuito
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setStep('form')}
                                        className="w-full bg-gold-500 text-black font-bold py-5 hover:bg-gold-400 transition-all tracking-[0.2em] uppercase text-sm shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
                                    >
                                        Finalizar Compra
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
