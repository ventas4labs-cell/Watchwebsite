'use client';

import { useState, useEffect } from 'react';
import { useStore, OrderStatus } from '@/lib/store';
import { Navbar } from '@/components/Navbar';
import { Check, Clock, Package, Mail, Phone, MessageSquare, Truck, CheckCircle2, ChevronRight, User } from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
    const { orders, updateOrderStatus } = useStore();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('isAdmin') === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "Ciara@2025") {
            setIsAuthenticated(true);
            localStorage.setItem('isAdmin', 'true');
            setError(false);
        } else {
            setError(true);
        }
    };

    if (!isAuthenticated) {
        return (
            <main className="min-h-screen bg-rich-black flex items-center justify-center p-6">
                <div className="w-full max-w-sm bg-white/5 border border-white/10 p-10 rounded-sm backdrop-blur-xl">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-500/20">
                            <User className="w-8 h-8 text-gold-500" />
                        </div>
                        <h1 className="text-2xl font-display text-white">Acceso <span className="text-gold-500">Privado</span></h1>
                        <p className="text-white/40 text-xs uppercase tracking-widest mt-2">Panel Administrativo</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <input
                                type="password"
                                placeholder="Contraseña"
                                className={`w-full bg-black/40 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-sm py-4 px-6 text-white focus:outline-none focus:border-gold-500/50 transition-colors text-center font-mono`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error && <p className="text-red-500 text-[10px] uppercase font-bold tracking-widest text-center mt-3">Contraseña Incorrecta</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gold-500 text-black font-bold py-4 hover:bg-gold-400 transition-all tracking-[0.2em] uppercase text-sm"
                        >
                            Entrar
                        </button>
                    </form>
                </div>
            </main>
        );
    }

    const statusConfig: Record<OrderStatus, { color: string; icon: any }> = {
        'Recibido': { color: 'text-blue-400 bg-blue-900/20 border-blue-500/30', icon: Package },
        'Preparación': { color: 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30', icon: Clock },
        'Enviado': { color: 'text-purple-400 bg-purple-900/20 border-purple-500/30', icon: Truck },
        'Entregado': { color: 'text-green-400 bg-green-900/20 border-green-500/30', icon: CheckCircle2 },
    };

    const statusOrder: OrderStatus[] = ['Recibido', 'Preparación', 'Enviado', 'Entregado'];

    if (!isAuthenticated) return null;

    return (
        <main className="min-h-screen bg-rich-black text-white pb-20">
            <Navbar />

            <div className="container mx-auto px-6 pt-32">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-2">Panel de Control</h2>
                        <h1 className="text-5xl font-display text-white">Gestión de <span className="text-gold-500">Colecciones</span></h1>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="text-right">
                            <p className="text-white/40 text-[10px] uppercase tracking-widest">Total Pedidos</p>
                            <p className="text-2xl font-display text-gold-500">{orders.length}</p>
                        </div>
                        <div className="h-10 w-[1px] bg-white/10" />
                        <div className="text-right">
                            <p className="text-white/40 text-[10px] uppercase tracking-widest">Estado Sistema</p>
                            <p className="text-sm font-medium text-green-400 flex items-center gap-2 justify-end">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                Live
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    {orders.length === 0 ? (
                        <div className="bg-white/5 border border-white/10 rounded-sm p-20 text-center space-y-4">
                            <Package className="w-12 h-12 text-white/10 mx-auto" />
                            <p className="text-white/40 font-light truncate">No hay pedidos registrados en el sistema por el momento.</p>
                        </div>
                    ) : (
                        orders.map((order) => {
                            const StatusIcon = statusConfig[order.status].icon;
                            return (
                                <div key={order.id} className="bg-white/5 border border-white/10 rounded-sm overflow-hidden backdrop-blur-sm hover:border-white/20 transition-all group">
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Left Side: Order Intro */}
                                        <div className="p-8 border-b lg:border-b-0 lg:border-r border-white/5 lg:w-80 bg-black/20">
                                            <div className="flex items-center justify-between mb-6">
                                                <span className="font-mono text-xs text-white/40 uppercase tracking-tighter">#{order.id}</span>
                                                <span className="text-[10px] font-mono text-white/20">{new Date(order.date).toLocaleDateString()}</span>
                                            </div>
                                            <h3 className="text-xl font-display text-white mb-4">{order.customerName}</h3>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3 text-white/40 group-hover:text-white/60 transition-colors">
                                                    <Mail className="w-4 h-4 text-gold-500/50" />
                                                    <span className="text-xs truncate">{order.email}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-white/40 group-hover:text-white/60 transition-colors">
                                                    <Phone className="w-4 h-4 text-gold-500/50" />
                                                    <span className="text-xs">{order.phone}</span>
                                                </div>
                                                {order.note && (
                                                    <div className="flex gap-3 text-white/40 mt-6 pt-6 border-t border-white/5">
                                                        <MessageSquare className="w-4 h-4 text-gold-500/50 flex-shrink-0" />
                                                        <p className="text-xs italic leading-relaxed">"{order.note}"</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Center: Items */}
                                        <div className="flex-1 p-8">
                                            <div className="mb-6 flex justify-between items-center">
                                                <span className="text-[10px] text-gold-500 font-bold tracking-widest uppercase">Artículos en Pedido</span>
                                                <span className="text-gold-500 font-display text-lg">${order.total.toLocaleString()}</span>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {order.items.map((item) => (
                                                    <div key={item.id} className="flex items-center gap-4 bg-white/[0.02] p-3 border border-white/5 rounded-sm">
                                                        <div className="text-gold-500 font-bold text-xs">{item.quantity}x</div>
                                                        <div>
                                                            <p className="text-white text-xs font-medium">{item.brand}</p>
                                                            <p className="text-white/40 text-[10px] uppercase tracking-tighter">{item.model}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right Side: Status Control */}
                                        <div className="p-8 lg:w-96 bg-black/40 flex flex-col justify-between gap-8">
                                            <div>
                                                <div className="flex items-center justify-between mb-6">
                                                    <span className="text-[10px] text-white/40 font-bold tracking-widest uppercase">Estado Actual</span>
                                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border ${statusConfig[order.status].color}`}>
                                                        <StatusIcon className="w-3 h-3" />
                                                        {order.status}
                                                    </span>
                                                </div>

                                                <div className="grid grid-cols-2 gap-2">
                                                    {statusOrder.map((status) => (
                                                        <button
                                                            key={status}
                                                            onClick={() => updateOrderStatus(order.id, status)}
                                                            className={`text-[9px] font-bold uppercase tracking-widest py-3 border transition-all ${order.status === status
                                                                ? 'bg-gold-500 border-gold-500 text-black'
                                                                : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20 hover:text-white'
                                                                }`}
                                                        >
                                                            {status}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-white/5">
                                                <Link
                                                    href={`/track?id=${order.id}`}
                                                    target="_blank"
                                                    className="flex items-center justify-between text-[10px] text-white/20 hover:text-gold-500 transition-colors uppercase font-bold tracking-widest"
                                                >
                                                    Ver vista cliente <ChevronRight className="w-3 h-3" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </main>
    );
}

