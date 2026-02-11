'use client';
import React, { useState, useEffect } from 'react';
import { X, Minus, Plus, Trash2, CheckCircle2, ChevronLeft, Send, Package } from 'lucide-react';
import { useStore } from '@/lib/store';
import { sendOrderEmail } from '@/lib/email-actions';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function CartDrawer() {
    const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, placeOrder, orders } = useStore();
    const [step, setStep] = useState<'cart' | 'form' | 'success'>('cart');
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', note: '' });
    const [lastOrderId, setLastOrderId] = useState('');

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && (formData.email || formData.phone)) {
            const newOrder = placeOrder({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                note: formData.note
            });

            if (newOrder) {
                setLastOrderId(newOrder.id);
                setStep('success');

                // Fire and forget email sending (Real Service)
                if (formData.email) {
                    sendOrderEmail(formData.email, formData.name, newOrder.id);
                }
            }
        }
    };

    // Effect to reset drawer state if needed or other side effects
    useEffect(() => {
        if (step === 'success' && !lastOrderId && orders.length > 0) {
            setLastOrderId(orders[0].id);
        }
    }, [step, orders, lastOrderId]);

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
                                                <div className="relative w-24 h-32 bg-white/5 rounded-sm overflow-hidden flex-shrink-0 border border-white/10">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.model}
                                                        fill
                                                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0 py-1">
                                                    <h4 className="text-[10px] text-gold-500 font-bold tracking-[0.2em] uppercase mb-1">{item.brand}</h4>
                                                    <h3 className="text-white font-medium text-lg leading-tight mb-2 truncate">{item.model}</h3>
                                                    <p className="text-white/60 font-light text-sm mb-4">${item.price.toLocaleString()}</p>

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
                                            Un especialista de <span className="text-gold-500 font-medium">Chronos & Co.</span> se pondrá en contacto con usted para coordinar el pago y la entrega.
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
                                            <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Teléfono</label>
                                            <input
                                                type="tel"
                                                placeholder="+506 8888 8888"
                                                className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors placeholder:text-white/20"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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

                                    {lastOrderId && (
                                        <div className="w-full bg-white/5 border border-white/10 rounded-sm p-6 mb-8 text-left">
                                            <span className="text-[10px] text-gold-500 font-bold tracking-widest uppercase mb-2 block">Número de Seguimiento</span>
                                            <div className="flex items-center justify-between">
                                                <code className="text-xl font-mono text-white select-all">{lastOrderId}</code>
                                                <button
                                                    onClick={() => navigator.clipboard.writeText(lastOrderId)}
                                                    className="text-[10px] text-white/40 hover:text-white transition-colors uppercase font-bold tracking-tighter"
                                                >
                                                    Copiar
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex flex-col w-full gap-4">
                                        <Link
                                            href={`/track?id=${lastOrderId}`}
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
                            <div className="p-8 border-t border-white/5 bg-black/40 backdrop-blur-md">
                                <div className="flex justify-between items-center mb-8">
                                    <div className="space-y-1">
                                        <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase block">Total Estimado</span>
                                        <span className="text-3xl text-gold-500 font-display">${total.toLocaleString()}</span>
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
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
