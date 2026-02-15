
'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function VerifyPage() {
    const [status, setStatus] = useState('Checking Supabase connection...');
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        async function check() {
            if (!supabase) {
                setStatus('error');
                setStatus('Supabase client not initialized (missing env vars)');
                return;
            }
            try {
                const { count, error } = await supabase
                    .from('orders')
                    .select('*', { count: 'exact', head: true });

                if (error) {
                    setStatus('Error connecting: ' + error.message);
                    console.error(error);
                } else {
                    setStatus('Connection Successful');
                    setCount(count);
                }
            } catch (e: any) {
                setStatus('Exception: ' + e.message);
            }
        }
        check();
    }, []);

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-4">
            <h1 className="text-2xl font-bold">Supabase Verification</h1>
            <div className={`p-4 rounded border ${status.includes('Success') ? 'border-green-500 text-green-400' : 'border-red-500 text-red-400'}`}>
                {status}
            </div>
            {count !== null && (
                <div className="text-xl">
                    Orders Row Count: <span className="font-bold">{count}</span>
                </div>
            )}
        </div>
    );
}
