'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AdminSidebar } from '@/components/AdminSidebar';
import { User, Lock } from 'lucide-react';
import { Toaster } from 'sonner';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        // Check auth
        const isAdmin = localStorage.getItem('isAdmin') === 'true';
        if (isAdmin) {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
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

    if (isLoading) {
        return <div className="min-h-screen bg-black flex items-center justify-center text-gold-500">Cargando...</div>;
    }

    if (!isAuthenticated) {
        return (
            <main className="min-h-screen bg-rich-black flex items-center justify-center p-6 bg-[url('https://images.unsplash.com/photo-1468421201266-4e07a2c8c886?q=80&w=2073&auto=format&fit=crop')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                <div className="w-full max-w-sm bg-black/60 border border-white/10 p-10 rounded-sm backdrop-blur-xl relative z-10 shadow-2xl">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-500/20 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                            <Lock className="w-6 h-6 text-gold-500" />
                        </div>
                        <h1 className="text-2xl font-display text-white">COMMANDER <span className="text-gold-500">ACCESS</span></h1>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest mt-2">Sistema de Gestión de Inventario</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <input
                                type="password"
                                placeholder="Clave de Acceso"
                                className={`w-full bg-black/40 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-sm py-4 px-6 text-white focus:outline-none focus:border-gold-500/50 transition-colors text-center font-mono tracking-widest placeholder:tracking-normal placeholder:text-white/20`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error && <p className="text-red-500 text-[10px] uppercase font-bold tracking-widest text-center mt-3 animate-pulse">Acceso Denegado</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gold-500 text-black font-bold py-4 hover:bg-gold-400 transition-all tracking-[0.2em] uppercase text-sm shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                        >
                            Autenticar
                        </button>
                    </form>
                </div>
            </main>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-white flex">
            <Toaster position="top-right" theme="dark" />
            <AdminSidebar />
            <main className="flex-1 ml-64 p-8 overflow-y-auto h-screen">
                {children}
            </main>
        </div>
    );
}
