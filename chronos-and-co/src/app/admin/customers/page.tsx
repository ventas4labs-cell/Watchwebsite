'use client';

import { useStore } from '@/lib/store';
import { Mail, Phone, MapPin, Calendar, Search } from 'lucide-react';
import { useState } from 'react';

export default function CustomersPage() {
    const { orders } = useStore();
    const [searchTerm, setSearchTerm] = useState('');

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
