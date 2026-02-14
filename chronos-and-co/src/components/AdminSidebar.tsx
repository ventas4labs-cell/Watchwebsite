'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Package, ShoppingBag, Users, LogOut, Watch } from 'lucide-react';
import clsx from 'clsx';

const NAVIGATION = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Inventario', href: '/admin/inventory', icon: Watch },
    { name: 'Pedidos', href: '/admin/orders', icon: ShoppingBag },
    { name: 'Clientes', href: '/admin/customers', icon: Users },
];

export function AdminSidebar() {
    const pathname = usePathname();

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        window.location.href = '/admin/login';
    };

    return (
        <div className="w-64 h-screen bg-rich-black border-r border-white/10 flex flex-col fixed left-0 top-0">
            {/* Logo Area */}
            <div className="h-20 flex items-center justify-center border-b border-white/10">
                <Link href="/" className="text-xl font-display font-bold tracking-widest text-white">
                    CHRONOS <span className="text-gold-500">& CO.</span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-8 px-4 space-y-2">
                <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-4 px-4">
                    Menu Principal
                </div>
                {NAVIGATION.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={clsx(
                                'flex items-center gap-3 px-4 py-3 rounded-sm transition-all duration-200 group',
                                isActive
                                    ? 'bg-blue-500/10 text-blue-400 border-r-2 border-blue-400'
                                    : 'text-white/60 hover:text-white hover:bg-white/5'
                            )}
                        >
                            <item.icon className={clsx(
                                "w-5 h-5 transition-colors",
                                isActive ? "text-blue-400" : "text-white/40 group-hover:text-white"
                            )} />
                            <span className="text-sm font-medium tracking-wide">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* User Profile / Logout */}
            <div className="p-4 border-t border-white/10">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-3 text-white/40 hover:text-red-400 hover:bg-red-500/10 rounded-sm transition-all duration-200 group"
                >
                    <LogOut className="w-5 h-5 group-hover:text-red-400 transition-colors" />
                    <span className="text-sm font-medium tracking-wide">Cerrar Sesión</span>
                </button>
            </div>
        </div>
    );
}
