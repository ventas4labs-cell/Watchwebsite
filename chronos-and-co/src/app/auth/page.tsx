'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Shield, User as UserIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const router = useRouter();

    useEffect(() => {
        // Redirect if already logged in
        const checkSession = async () => {
            if (!supabase) return;
            const { data } = await supabase.auth.getSession();
            if (data.session) {
                router.push('/portal');
            }
        };
        checkSession();
    }, [router]);

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!supabase) return;
        setLoading(true);
        setError('');
        setSuccessMessage('');

        if (isLogin) {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) {
                setError(error.message);
            } else {
                router.push('/portal');
            }
        } else {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName,
                    },
                    emailRedirectTo: 'https://tmlsswtchs.com/portal',
                }
            });
            if (error) {
                setError(error.message);
            } else {
                setSuccessMessage('Por favor revise su correo para confirmar su cuenta.');

                // Fetch the newly generated coupon code from profiles
                let couponCode = 'TIMELESS10'; // Fallback
                if (data.user) {
                    const { data: profileData } = await supabase
                        .from('profiles')
                        .select('welcome_coupon_code')
                        .eq('id', data.user.id)
                        .single();

                    if (profileData && profileData.welcome_coupon_code) {
                        couponCode = profileData.welcome_coupon_code;
                    }
                }

                if (data.session) {
                    // Trigger welcome email via api route
                    try {
                        await fetch('/api/email/welcome', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email, name: fullName, couponCode }),
                        });
                    } catch (err) {
                        console.error('Failed to trigger welcome email', err);
                    }

                    router.push('/portal');
                } else {
                    // Registration may require email confirmation depending on Supabase settings
                    // If autoconfirm is enabled, data.session will exist
                    try {
                        await fetch('/api/email/welcome', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email, name: fullName, couponCode }),
                        });
                    } catch (err) {
                        console.error('Failed to trigger welcome email', err);
                    }
                }
            }
        }
        setLoading(false);
    };

    return (
        <main className="min-h-screen bg-black pt-32 pb-24 px-6 relative overflow-hidden flex items-center justify-center">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

            <div className="w-full max-w-md relative z-10">
                <Link href="/" className="flex justify-center mb-12">
                    <span className="text-3xl font-display font-bold tracking-widest text-white text-center">
                        TIMELESS <span className="text-gold-500">WATCHES</span>
                    </span>
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-rich-black border border-white/10 p-10 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

                    <div className="text-center mb-10">
                        <h1 className="text-2xl font-display text-white mb-2 tracking-wide">
                            {isLogin ? 'Acceso al Portal' : 'Únase al Círculo'}
                        </h1>
                        <p className="text-white/40 text-sm font-light">
                            {isLogin ? 'Ingrese a su cuenta privada de Timeless Watches' : 'Regístrese para recibir beneficios exclusivos'}
                        </p>
                    </div>

                    <form onSubmit={handleAuth} className="space-y-6">
                        {!isLogin && (
                            <div className="space-y-2">
                                <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Nombre Completo</label>
                                <div className="relative">
                                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                    <input
                                        type="text"
                                        required
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 p-4 pl-12 text-white focus:outline-none focus:border-gold-500/50 transition-colors placeholder:text-white/20 text-sm"
                                        placeholder="Su nombre completo"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Correo Electrónico</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors placeholder:text-white/20 text-sm"
                                placeholder="su@correo.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] text-gold-500 font-bold tracking-widest uppercase ml-1">Contraseña</label>
                            <div className="relative">
                                <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 p-4 pl-12 text-white focus:outline-none focus:border-gold-500/50 transition-colors placeholder:text-white/20 text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {error && (
                            <p className="text-red-500/90 text-sm text-center bg-red-500/10 py-3 px-4 border border-red-500/20">{error}</p>
                        )}
                        {successMessage && (
                            <p className="text-emerald-500/90 text-sm text-center bg-emerald-500/10 py-3 px-4 border border-emerald-500/20">{successMessage}</p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gold-500 text-black font-bold py-4 hover:bg-gold-400 transition-all tracking-[0.2em] uppercase text-sm flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                        >
                            {loading ? 'Procesando...' : isLogin ? 'Ingresar' : 'Registrarse'}
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-white/10 text-center">
                        <button
                            type="button"
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setError('');
                                setSuccessMessage('');
                            }}
                            className="text-white/40 hover:text-white transition-colors text-sm font-light tracking-wide"
                        >
                            {isLogin ? '¿No tiene cuenta? Regístrese aquí' : '¿Ya es miembro? Ingrese aquí'}
                        </button>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
