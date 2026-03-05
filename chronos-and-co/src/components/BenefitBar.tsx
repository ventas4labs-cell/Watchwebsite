'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export function BenefitBar() {
    const [user, setUser] = useState<any>(null);
    const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);

    useEffect(() => {
        const checkUser = async () => {
            if (!supabase) return;
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                setUser(session.user);
            }

            const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
                setUser(session?.user || null);
            });

            return () => {
                authListener.subscription.unsubscribe();
            };
        };
        checkUser();
    }, []);

    useEffect(() => {
        if (!user) {
            setTimeLeft(null);
            return;
        }

        // Calculate countdown based on user creation time
        const createdAt = new Date(user.created_at || Date.now());
        const endDate = new Date(createdAt.getTime() + 48 * 60 * 60 * 1000); // 48 hours later

        const calculateTimeLeft = () => {
            const difference = endDate.getTime() - new Date().getTime();
            if (difference > 0) {
                setTimeLeft({
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + Math.floor(difference / (1000 * 60 * 60 * 24)) * 24,
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                setTimeLeft(null);
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [user]);

    if (!user || !timeLeft) return null;

    return (
        <div className="w-full bg-gold-500/10 border-b border-gold-500/20 py-2 px-4 text-center z-50 relative">
            <p className="text-gold-500 text-xs md:text-sm font-medium tracking-widest uppercase flex items-center justify-center gap-2">
                <span>Use su cupón de bienvenida del 10% de descuento. Finaliza en:</span>
                <span className="font-mono bg-black px-2 py-0.5 rounded border border-gold-500/30">
                    {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </span>
            </p>
        </div>
    );
}
