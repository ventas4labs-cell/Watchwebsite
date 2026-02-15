'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { motion } from 'framer-motion';
import { DollarSign, ShoppingBag, Users, TrendingUp, Clock, Package, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboardPage() {
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            if (!supabase) return;
            const { data, error } = await supabase
                .from('orders')
                .select('*')
                .order('created_at', { ascending: false });

            if (data) setOrders(data);
            setLoading(false);
        };

        fetchOrders();
    }, []);

    // Calculate basic stats from Supabase data
    // Note: Supabase 'total_amount' vs local 'total'
    const totalRevenue = orders.reduce((acc, order) => acc + (order.total_amount || 0), 0);
    // Note: Supabase 'status' match
    const activeOrders = orders.filter(o => o.status !== 'Entregado' && o.status !== 'Cancelado').length;
    const completedOrders = orders.filter(o => o.status === 'Entregado').length;

    // Recent Activity
    const recentOrders = orders.slice(0, 5);

    const stats = [
        {
            label: 'Ingresos Totales',
            value: `$${totalRevenue.toLocaleString()}`,
            change: '+12.5%',
            positive: true,
            icon: DollarSign,
            color: 'text-emerald-400',
            bg: 'bg-emerald-500/10'
        },
        {
            label: 'Pedidos Activos',
            value: activeOrders,
            change: '-2',
            positive: true,
            icon: ShoppingBag,
            color: 'text-blue-400',
            bg: 'bg-blue-500/10'
        },
        {
            label: 'Pedidos Completados',
            value: completedOrders,
            change: '+5',
            positive: true,
            icon: Package,
            color: 'text-gold-500',
            bg: 'bg-gold-500/10'
        },
        // Placeholder for Customers count
        {
            label: 'Clientes Totales',
            value: '142',
            change: '+8.2%',
            positive: true,
            icon: Users,
            color: 'text-purple-400',
            bg: 'bg-purple-500/10'
        }
    ];

    if (loading) {
        return (
            <div className="flex h-[50vh] items-center justify-center">
                <Loader2 className="w-8 h-8 text-gold-500 animate-spin" />
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-7xl">
            <header className="mb-12">
                <h1 className="text-4xl font-display text-white mb-2">Panel de <span className="text-gold-500">Comando</span></h1>
                <p className="text-white/40 font-light">Bienvenido, Administrador. Resumen de operaciones en tiempo real.</p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 border border-white/10 p-6 rounded-sm backdrop-blur-sm"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-lg ${stat.bg}`}>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.positive ? 'text-green-400 bg-green-500/10' : 'text-red-400 bg-red-500/10'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-white/40 text-xs uppercase tracking-widest mb-1">{stat.label}</h3>
                        <p className="text-2xl font-display text-white">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            {/* Recent Orders Preview */}
            <div className="bg-white/5 border border-white/10 rounded-sm p-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-display text-white">Actividad Reciente</h2>
                    <Link href="/admin/orders" className="text-xs text-gold-500 hover:text-white transition-colors uppercase tracking-widest font-bold">
                        Ver Todo
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-[10px] uppercase tracking-widest text-white/40 border-b border-white/10">
                                <th className="pb-4 pl-4">ID Pedido</th>
                                <th className="pb-4">Cliente</th>
                                <th className="pb-4">Total</th>
                                <th className="pb-4">Estado</th>
                                <th className="pb-4">Fecha</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {recentOrders.map((order) => (
                                <tr key={order.id} className="group hover:bg-white/5 transition-colors">
                                    <td className="py-4 pl-4 font-mono text-xs text-white/60">#{order.id}</td>
                                    <td className="py-4 text-sm text-white">{order.customerName}</td>
                                    <td className="py-4 text-sm text-gold-500">${order.total.toLocaleString()}</td>
                                    <td className="py-4">
                                        <span className="text-[10px] font-bold uppercase px-2 py-1 bg-white/5 rounded-full text-white/60 border border-white/10">
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="py-4 text-xs text-white/40">{new Date(order.date).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
