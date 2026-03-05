'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useParams, useRouter } from 'next/navigation';
import { Mail, ArrowLeft, Award, Clock, Loader2, Plus, Trash2, Package } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { WATCHES, Watch } from '@/lib/seed-data';

export default function CustomerDetailPage() {
    const params = useParams();
    const router = useRouter();
    const customerId = params.id as string;

    const [customer, setCustomer] = useState<any>(null);
    const [orders, setOrders] = useState<any[]>([]);
    const [vaultItems, setVaultItems] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [selectedWatchId, setSelectedWatchId] = useState('');
    const [isModifyingVault, setIsModifyingVault] = useState(false);

    useEffect(() => {
        if (!customerId || !supabase) return;

        const fetchCustomerData = async () => {
            if (!supabase) return;
            setIsLoading(true);
            try {
                // 1. Fetch Customer Detail
                const { data, error: customerError } = await supabase
                    .rpc('admin_get_all_customers')
                    .eq('id', customerId)
                    .single();

                if (customerError && customerError.code !== 'PGRST116') throw customerError;
                if (!data) {
                    router.push('/admin/customers');
                    return;
                }

                const customerData = data as any;
                setCustomer(customerData);

                // 2. Fetch Orders for this email
                if (customerData.email) {
                    const { data: ordersData } = await supabase
                        .from('orders')
                        .select('*')
                        .eq('customer_email', customerData.email)
                        .order('created_at', { ascending: false });
                    if (ordersData) setOrders(ordersData);
                }

                // 3. Fetch Vault Items
                fetchVaultItems();

            } catch (err) {
                console.error("Error fetching customer data:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCustomerData();
    }, [customerId, router]);

    const fetchVaultItems = async () => {
        if (!supabase) return;
        const { data: vaultData } = await supabase
            .from('wishlist')
            .select('product_id')
            .eq('user_id', customerId);

        if (vaultData) {
            setVaultItems(vaultData.map(item => item.product_id));
        }
    };

    const handleAddToVault = async () => {
        if (!selectedWatchId || !supabase || isModifyingVault) return;
        setIsModifyingVault(true);
        try {
            const { error } = await supabase.rpc('admin_add_to_vault', {
                target_user_id: customerId,
                target_product_id: selectedWatchId
            });
            if (error) throw error;
            await fetchVaultItems();
            setSelectedWatchId('');
        } catch (err) {
            console.error("Error adding to vault:", err);
            alert("Error al agregar a la bóveda");
        } finally {
            setIsModifyingVault(false);
        }
    };

    const handleRemoveFromVault = async (productId: string) => {
        if (!supabase || isModifyingVault) return;
        setIsModifyingVault(true);
        try {
            const { error } = await supabase.rpc('admin_remove_from_vault', {
                target_user_id: customerId,
                target_product_id: productId
            });
            if (error) throw error;
            await fetchVaultItems();
        } catch (err) {
            console.error("Error removing from vault:", err);
            alert("Error al remover de la bóveda");
        } finally {
            setIsModifyingVault(false);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-gold-500" />
            </div>
        );
    }

    if (!customer) return null;

    const vaultWatches = vaultItems
        .map(id => WATCHES.find(w => w.id === id))
        .filter(Boolean) as Watch[];

    return (
        <div className="container mx-auto px-6 py-8">
            <Link href="/admin/customers" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 text-sm uppercase tracking-widest font-bold">
                <ArrowLeft className="w-4 h-4" /> Volver a Clientes
            </Link>

            {/* Header Section */}
            <div className="bg-white/5 border border-white/10 p-8 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-500/20 to-transparent border border-gold-500/20 flex flex-shrink-0 items-center justify-center text-gold-500 font-display text-4xl shadow-2xl">
                        {(customer.full_name || 'C').charAt(0)}
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                            <h1 className="text-4xl font-display text-white">{customer.full_name || 'Cliente Sin Nombre'}</h1>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border ${customer.tier_level === 'Curator' ? 'bg-white text-black border-white' :
                                customer.tier_level === 'Collector' ? 'bg-white/10 text-white border-white/20' :
                                    'bg-gold-500/10 text-gold-500 border-gold-500/20'
                                }`}>
                                {customer.tier_level || 'Member'}
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-6 text-sm">
                            <div className="flex items-center gap-2 text-white/60">
                                <Mail className="w-4 h-4 text-gold-500" />
                                <span>{customer.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/60">
                                <Award className="w-4 h-4 text-gold-500" />
                                <span>{customer.completed_orders_count || 0} compras exitosas</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/60">
                                <Clock className="w-4 h-4 text-gold-500" />
                                <span>Registrado {new Date(customer.created_at).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content: Vault */}
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-display text-white">Bóveda del Cliente</h2>
                            <div className="flex items-center gap-2">
                                <select
                                    className="bg-black border border-white/20 text-white text-sm p-2 rounded-sm focus:outline-none focus:border-gold-500/50"
                                    value={selectedWatchId}
                                    onChange={(e) => setSelectedWatchId(e.target.value)}
                                >
                                    <option value="">Seleccionar Reloj...</option>
                                    {WATCHES.map(w => (
                                        <option key={w.id} value={w.id} disabled={vaultItems.includes(w.id)}>
                                            {w.brand} {w.model} {vaultItems.includes(w.id) ? '(Ya en bóveda)' : ''}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    onClick={handleAddToVault}
                                    disabled={!selectedWatchId || isModifyingVault}
                                    className="bg-gold-500 text-black px-4 py-2 text-sm font-bold uppercase tracking-widest hover:bg-gold-400 disabled:opacity-50 transition-colors flex items-center gap-2 rounded-sm"
                                >
                                    {isModifyingVault ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                                    Agregar
                                </button>
                            </div>
                        </div>

                        {vaultWatches.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {vaultWatches.map(watch => (
                                    <div key={watch.id} className="bg-white/5 border border-white/10 p-4 rounded-sm flex gap-4 group">
                                        <div className="w-20 h-20 bg-black relative flex-shrink-0">
                                            <Image src={watch.image} alt={watch.model} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                                            <p className="text-[10px] text-gold-500 uppercase tracking-widest">{watch.brand}</p>
                                            <p className="text-white font-medium truncate">{watch.model}</p>
                                            <button
                                                onClick={() => handleRemoveFromVault(watch.id)}
                                                disabled={isModifyingVault}
                                                className="mt-2 text-xs text-red-500/50 hover:text-red-500 flex items-center gap-1 transition-colors w-fit"
                                            >
                                                <Trash2 className="w-3 h-3" /> Remover
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="border border-white/10 border-dashed rounded-sm p-12 flex flex-col items-center justify-center text-white/40">
                                <Package className="w-8 h-8 mb-4 opacity-50" />
                                <p>La bóveda está vacía.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar: Orders */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-display text-white mb-6">Historial de Pedidos</h2>
                    {orders.length > 0 ? (
                        <div className="space-y-4">
                            {orders.map(order => (
                                <Link href={`/admin/orders?search=${order.id}`} key={order.id} className="block">
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-sm hover:border-gold-500/50 transition-colors group">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs text-white/40">{new Date(order.created_at).toLocaleDateString()}</span>
                                            <span className="text-xs font-bold text-gold-500">${order.total_amount?.toLocaleString() || order.total?.toLocaleString() || '0'}</span>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm text-white group-hover:text-gold-500 transition-colors">#{order.id.slice(0, 8)}</span>
                                            <span className={`text-[10px] px-2 py-0.5 rounded uppercase tracking-widest font-bold ${order.status === 'Entregado' ? 'bg-emerald-500/20 text-emerald-400' :
                                                order.status === 'En Camino' ? 'bg-blue-500/20 text-blue-400' :
                                                    order.status === 'Cancelado' ? 'bg-red-500/20 text-red-400' :
                                                        'bg-gold-500/20 text-gold-400'
                                                }`}>
                                                {order.status}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white/5 border border-white/10 p-6 rounded-sm text-sm text-white/40 text-center">
                            No hay pedidos registrados para este usuario.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
