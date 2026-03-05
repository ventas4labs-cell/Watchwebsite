'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Shield, Package, ChevronRight, CheckCircle2, Clock, LogOut, Bookmark, Trash2, Copy, Crown, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { ORDER_STATUS_STEPS } from '@/lib/constants';
import { WATCHES, Watch } from '@/lib/seed-data';

export default function PortalPage() {
    const [user, setUser] = useState<any>(null);
    const [profile, setProfile] = useState<any>(null);
    const [orders, setOrders] = useState<any[]>([]);
    const [wishlist, setWishlist] = useState<Watch[]>([]);
    const [activeTab, setActiveTab] = useState<'orders' | 'wishlist'>('orders');
    const [loading, setLoading] = useState(true);
    const [timeLeft, setTimeLeft] = useState<number | null>(null);
    const [copied, setCopied] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const fetchUserData = async () => {
            if (!supabase) return;
            const { data: { session } } = await supabase.auth.getSession();

            if (!session) {
                router.push('/auth');
                return;
            }

            setUser(session.user);

            // Fetch profile and orders concurrently
            const profilePromise = supabase
                .from('profiles')
                .select('*')
                .eq('id', session.user.id)
                .single();

            const ordersPromise = supabase
                .from('orders')
                .select('*')
                .eq('customer_email', session.user.email)
                .order('created_at', { ascending: false });

            const wishlistPromise = supabase
                .from('wishlist')
                .select('product_id')
                .eq('user_id', session.user.id);

            const [profileRes, ordersRes, wishlistRes] = await Promise.all([profilePromise, ordersPromise, wishlistPromise]);

            if (profileRes.data) {
                setProfile(profileRes.data);
                if (profileRes.data.coupon_expiry) {
                    const expiryTime = new Date(profileRes.data.coupon_expiry).getTime();
                    setTimeLeft(Math.max(0, expiryTime - new Date().getTime()));
                }
            }
            if (ordersRes.data) setOrders(ordersRes.data);

            if (wishlistRes.data) {
                const savedIds = wishlistRes.data.map((item: any) => item.product_id);
                const savedWatches = WATCHES.filter(w => savedIds.includes(w.id));
                setWishlist(savedWatches);
            }

            setLoading(false);
        };

        fetchUserData();
    }, [router]);

    // Timer effect
    useEffect(() => {
        if (timeLeft === null || timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev === null || prev <= 1000) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1000;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleSignOut = async () => {
        if (!supabase) return;
        await supabase.auth.signOut();
        router.push('/');
    };

    const handleRemoveFromVault = async (productId: string) => {
        if (!supabase || !user) return;

        await supabase
            .from('wishlist')
            .delete()
            .eq('user_id', user.id)
            .eq('product_id', productId);

        setWishlist(prev => prev.filter(w => w.id !== productId));
    };

    const handleCopy = () => {
        if (profile?.welcome_coupon_code) {
            navigator.clipboard.writeText(profile.welcome_coupon_code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-gold-500/20 border-t-gold-500 rounded-full animate-spin" />
            </div>
        );
    }

    const firstName = profile?.full_name?.split(' ')[0] || user?.user_metadata?.full_name?.split(' ')[0] || 'Member';

    return (
        <main className="min-h-screen bg-black pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

            <div className="max-w-6xl mx-auto relative z-10">
                <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-display text-white tracking-wide mb-2">
                            Bienvenido de nuevo, <span className="text-gold-500 italic font-serif">{firstName}</span>.
                        </h1>
                        <p className="text-white/40 font-light tracking-wide flex items-center gap-2">
                            <Shield className="w-4 h-4 text-gold-500/50" /> Miembro de Timeless Circle
                        </p>
                    </div>
                    <button
                        onClick={handleSignOut}
                        className="flex items-center gap-2 text-white/40 hover:text-white text-sm uppercase tracking-widest font-bold transition-colors"
                    >
                        Cerrar Sesión <LogOut className="w-4 h-4" />
                    </button>
                </header>

                {/* VIP Progress Bar Section */}
                {profile && (
                    <div className="mb-12">
                        {(() => {
                            const tier = profile.tier_level || 'Member';
                            const count = profile.completed_orders_count || 0;

                            let tierName = 'Member';
                            let nextTier = 'Collector';
                            let target = 3;
                            let theme = {
                                text: 'text-gold-500',
                                bg: 'bg-gold-500',
                                border: 'border-gold-500/20',
                                gradient: 'from-gold-500/10'
                            };

                            if (tier === 'Curator') {
                                tierName = 'Curator Circle';
                                target = 7;
                                theme = {
                                    text: 'text-zinc-400',
                                    bg: 'bg-zinc-700',
                                    border: 'border-zinc-700/30',
                                    gradient: 'from-zinc-800/50'
                                };
                            } else if (tier === 'Collector') {
                                tierName = 'Collector Status';
                                nextTier = 'Curator';
                                target = 7;
                                theme = {
                                    text: 'text-slate-300',
                                    bg: 'bg-slate-300',
                                    border: 'border-slate-300/30',
                                    gradient: 'from-slate-400/10'
                                };
                            } else {
                                target = 3;
                            }

                            const progress = Math.min(100, Math.max(0, (count / target) * 100));
                            const remaining = Math.max(0, target - count);

                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-8 border ${theme.border} bg-gradient-to-br ${theme.gradient} to-transparent relative overflow-hidden`}
                                >
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 mb-6">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <Crown className={`w-5 h-5 ${theme.text}`} />
                                                <h3 className={`text-sm uppercase tracking-[0.2em] font-bold ${theme.text}`}>
                                                    Nivel Actual: {tierName}
                                                </h3>
                                            </div>
                                            <p className="text-white/60 font-light text-sm max-w-lg">
                                                {tier === 'Curator'
                                                    ? 'Ha alcanzado el pináculo de Timeless Watches. Disfrute de sus privilegios Curador.'
                                                    : `Completa ${remaining} adquisiciones más para desbloquear el estatus ${nextTier} y beneficios permanentes.`}
                                            </p>
                                        </div>
                                        <div className="text-left md:text-right">
                                            <span className="text-3xl font-display text-white">{count}</span>
                                            <span className="text-white/40 text-sm italic font-serif"> / {target} Adquisiciones</span>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="relative h-1 bg-white/10 w-full overflow-hidden rounded-full">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${progress}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className={`absolute top-0 left-0 h-full ${theme.bg}`}
                                        />
                                    </div>
                                    {tier !== 'Curator' && (
                                        <div className="flex justify-between mt-3">
                                            <span className={`text-[9px] uppercase tracking-widest font-bold ${theme.text}`}>{tierName}</span>
                                            <span className="text-[9px] uppercase tracking-widest font-bold text-white/40">{nextTier}</span>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })()}
                    </div>
                )}

                {/* Welcome Benefit Card */}
                {timeLeft !== null && timeLeft > 0 && profile?.welcome_coupon_code && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-black border border-gold-500 border-dashed p-8 mb-12 relative overflow-hidden"
                    >
                        {/* Shimmer effect */}
                        <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] animate-[shimmer_3s_infinite]" />

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-xl md:text-2xl font-display text-white tracking-wide mb-2">
                                    Bienvenido, <span className="italic">{firstName}</span>. Su primer beneficio lo espera.
                                </h2>
                                <p className="text-white/60 font-light text-sm hidden md:block">
                                    Como agradecimiento por unirse, utilice este código confidencial para obtener un 10% de inversión preferencial en su primera adquisición.
                                </p>
                            </div>

                            <div className="flex flex-col md:items-end gap-3 flex-shrink-0">
                                <div className="bg-white/5 border border-white/10 p-4 flex items-center justify-between gap-6 group">
                                    <span className="text-gold-500 font-mono text-xl tracking-widest">{profile.welcome_coupon_code}</span>
                                    <button
                                        onClick={handleCopy}
                                        className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest"
                                    >
                                        {copied ? 'Copiado' : <><Copy className="w-4 h-4" /> Copiar</>}
                                    </button>
                                </div>
                                <div className="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase">
                                    <Clock className="w-3 h-3" />
                                    Expira en: <span className="text-gold-500 font-mono">
                                        {Math.floor(timeLeft / (1000 * 60 * 60))}h {Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))}m {Math.floor((timeLeft % (1000 * 60)) / 1000)}s
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Account Summary & Benefits */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-rich-black border border-white/10 p-8">
                            <h3 className="text-gold-500 tracking-[0.2em] text-xs uppercase font-bold mb-6 flex items-center gap-2">
                                <UserIcon className="w-4 h-4" /> Perfil de Cliente
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <span className="block text-white/30 text-[10px] uppercase tracking-widest mb-1">Nombre Completo</span>
                                    <span className="text-white text-lg">{profile?.full_name || user?.user_metadata?.full_name}</span>
                                </div>
                                <div>
                                    <span className="block text-white/30 text-[10px] uppercase tracking-widest mb-1">Email</span>
                                    <span className="text-white text-sm">{user?.email}</span>
                                </div>
                                <div>
                                    <span className="block text-white/30 text-[10px] uppercase tracking-widest mb-1">Miembro desde</span>
                                    <span className="text-white/80 font-mono text-sm">
                                        {new Date(profile?.created_at || user?.created_at).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20 p-8">
                            <h3 className="text-gold-500 tracking-[0.2em] text-xs uppercase font-bold mb-4">Timeless Circle</h3>
                            <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                                Como miembro exclusivo, cuenta con envío prioritario, acceso anticipado a nuevas colecciones y atención personalizada.
                            </p>
                            <Link href="/shop/in-stock" className="text-white text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:text-gold-500 transition-colors">
                                Explorar Colección <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Order History & Live Vault Tracking */}
                    <div className="lg:col-span-2">
                        <div className="flex border-b border-white/10 mb-8">
                            <button
                                onClick={() => setActiveTab('orders')}
                                className={`pb-4 px-4 text-sm tracking-[0.2em] uppercase font-bold transition-colors border-b-2 ${activeTab === 'orders'
                                    ? 'border-gold-500 text-gold-500'
                                    : 'border-transparent text-white/40 hover:text-white'
                                    }`}
                            >
                                Registro de Bóveda
                            </button>
                            <button
                                onClick={() => setActiveTab('wishlist')}
                                className={`pb-4 px-4 text-sm tracking-[0.2em] uppercase font-bold transition-colors border-b-2 flex items-center gap-2 ${activeTab === 'wishlist'
                                    ? 'border-gold-500 text-gold-500'
                                    : 'border-transparent text-white/40 hover:text-white'
                                    }`}
                            >
                                Mi Bóveda <Bookmark className="w-4 h-4" />
                            </button>
                        </div>

                        {activeTab === 'orders' ? (
                            orders.length === 0 ? (
                                <div className="border border-white/5 bg-white/[0.02] p-12 text-center rounded-sm">
                                    <Package className="w-12 h-12 text-white/10 mx-auto mb-4" />
                                    <h3 className="text-white font-medium mb-2 tracking-wide text-lg">Su bóveda de registro está vacía</h3>
                                    <p className="text-white/40 text-sm font-light mb-8 max-w-sm mx-auto">
                                        Sus adquisiciones y su estado de entrega aparecerán aquí en tiempo real.
                                    </p>
                                    <Link href="/shop/in-stock" className="inline-block bg-gold-500 text-black font-bold py-4 px-8 hover:bg-gold-400 transition-all tracking-[0.2em] uppercase text-xs">
                                        Adquirir una Pieza
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {orders.map((order) => (
                                        <motion.div
                                            key={order.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-rich-black border border-white/10 p-6 md:p-8"
                                        >
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                                <div>
                                                    <span className="text-gold-500/50 text-[10px] uppercase tracking-widest mb-1 block">Número de Seguimiento</span>
                                                    <span className="text-white font-mono text-xl tracking-wider select-all">{order.tracking_number}</span>
                                                </div>
                                                <div className="text-left md:text-right">
                                                    <span className="text-white/30 text-[10px] uppercase tracking-widest mb-1 block">Adquirido el</span>
                                                    <span className="text-white/80 text-sm">
                                                        {new Date(order.created_at).toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Status Progress Bar */}
                                            <div className="mb-8 relative hidden md:block">
                                                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2" />
                                                <div className="relative flex justify-between">
                                                    {ORDER_STATUS_STEPS.map((stepConfig, index) => {
                                                        const currentIndex = ORDER_STATUS_STEPS.findIndex(s => s.status === order.status);
                                                        const isCompleted = index <= currentIndex;
                                                        const isActive = index === currentIndex;

                                                        return (
                                                            <div key={stepConfig.status} className="flex flex-col items-center relative z-10 gap-3">
                                                                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center bg-rich-black transition-colors ${isActive ? 'border-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.4)]' :
                                                                    isCompleted ? 'border-gold-500/50 text-gold-500/50' :
                                                                        'border-white/10 text-white/20'
                                                                    }`}>
                                                                    {isCompleted && !isActive ? <CheckCircle2 className="w-4 h-4" /> : <span className="text-xs font-mono">{index + 1}</span>}
                                                                </div>
                                                                <span className={`text-[10px] tracking-widest uppercase font-bold text-center w-24 ${isActive ? 'text-gold-500' :
                                                                    isCompleted ? 'text-white/60' :
                                                                        'text-white/20'
                                                                    }`}>
                                                                    {stepConfig.status}
                                                                </span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {/* Items */}
                                            <div className="border-t border-white/5 pt-6 mt-6">
                                                <h4 className="text-white/40 tracking-[0.1em] text-[10px] uppercase font-bold mb-4">Piezas en este envío</h4>
                                                <div className="space-y-4">
                                                    {order.order_items.map((item: any, i: number) => (
                                                        <div key={i} className="flex items-center justify-between">
                                                            <div className="flex items-center gap-4">
                                                                <div className="w-12 h-16 bg-white/5 border border-white/10 flex-shrink-0 relative overflow-hidden flex items-center justify-center">
                                                                    {item.image ? (
                                                                        <img src={item.image} alt={item.model} className="object-cover w-full h-full" />
                                                                    ) : (
                                                                        <span className="text-[8px] text-white/20">IMG</span>
                                                                    )}
                                                                </div>
                                                                <div>
                                                                    <span className="text-gold-500 text-[10px] font-bold tracking-[0.2em] uppercase block mb-1">{item.brand}</span>
                                                                    <span className="text-white text-sm">{item.model}</span>
                                                                </div>
                                                            </div>
                                                            <div className="text-right">
                                                                <span className="text-white/60 text-sm block">x{item.quantity}</span>
                                                                <span className="text-white font-medium">${(item.price * item.quantity).toLocaleString()}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/5">
                                                    <span className="text-white/40 tracking-[0.1em] text-[10px] uppercase font-bold block">Inversión Total</span>
                                                    <span className="text-gold-500 font-display text-xl">${order.total_amount.toLocaleString()}</span>
                                                </div>
                                            </div>
                                            <div className="mt-8">
                                                <Link
                                                    href={`/track?id=${order.tracking_number}`}
                                                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 transition-colors text-white font-bold text-xs uppercase tracking-widest border border-white/10 py-3 px-6"
                                                >
                                                    Ver Detalles en Tiempo Real <ChevronRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )
                        ) : (
                            wishlist.length === 0 ? (
                                <div className="border border-white/5 bg-white/[0.02] p-12 text-center rounded-sm">
                                    <Bookmark className="w-12 h-12 text-white/10 mx-auto mb-4" />
                                    <h3 className="text-white font-medium mb-2 tracking-wide text-lg">Mi Bóveda está vacía</h3>
                                    <p className="text-white/40 text-sm font-light mb-8 max-w-sm mx-auto">
                                        Explore nuestra colección y guarde las piezas que más llamen su atención.
                                    </p>
                                    <Link href="/shop/in-stock" className="inline-block bg-gold-500 text-black font-bold py-4 px-8 hover:bg-gold-400 transition-all tracking-[0.2em] uppercase text-xs">
                                        Explorar Colección
                                    </Link>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {wishlist.map((watch) => (
                                        <motion.div
                                            key={watch.id}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="bg-rich-black border border-white/10 group flex flex-col h-full"
                                        >
                                            <div className="relative aspect-[3/4] bg-white/5 overflow-hidden flex items-center justify-center p-8">
                                                <img
                                                    src={watch.image}
                                                    alt={watch.model}
                                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                                                />
                                                <button
                                                    onClick={() => handleRemoveFromVault(watch.id)}
                                                    className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full text-white/40 hover:text-red-400 transition-colors"
                                                    title="Eliminar de Bóveda"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <h3 className="text-gold-500 font-bold tracking-[0.2em] uppercase text-[10px] mb-2">{watch.brand}</h3>
                                                <h4 className="text-white font-display text-lg tracking-wide mb-4 line-clamp-2">{watch.model}</h4>
                                                <div className="mt-auto">
                                                    {watch.price_hidden ? (
                                                        <span className="text-gold-500/70 text-sm font-medium tracking-widest uppercase">Precio Próximamente</span>
                                                    ) : watch.discount_price ? (
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-white/30 text-sm line-through">${watch.price.toLocaleString()}</span>
                                                            <span className="text-gold-500 font-medium">${watch.discount_price.toLocaleString()}</span>
                                                        </div>
                                                    ) : (
                                                        <span className="text-white/90 font-medium">${watch.price.toLocaleString()}</span>
                                                    )}
                                                </div>
                                                <Link
                                                    href={`/product/${watch.id}`}
                                                    className="w-full mt-6 py-3 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:border-gold-500 hover:text-gold-500 transition-colors flex items-center justify-center gap-2"
                                                >
                                                    Ver Pieza <ChevronRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

// Keep UserIcon declaration from AuthPage just locally 
function UserIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}
