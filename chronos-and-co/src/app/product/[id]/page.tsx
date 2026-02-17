import { notFound } from 'next/navigation';
import Image from 'next/image';
import { AddToCartButton } from '@/components/AddToCartButton';
import { Watch } from '@/lib/seed-data';
import { Navbar } from '@/components/Navbar';
import { CartDrawer } from '@/components/CartDrawer';
import { ProductGallery } from '@/components/ProductGallery';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function generateStaticParams() {
    if (!supabaseUrl || !supabaseKey) return [];

    const { data: watches } = await supabase.from('watches').select('id');
    return (watches || []).map((watch) => ({
        id: watch.id,
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    let watch;
    if (supabaseUrl && supabaseKey) {
        const { data } = await supabase
            .from('watches')
            .select('*')
            .eq('id', id)
            .single();
        watch = data as Watch | null;
    }

    if (!watch) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <CartDrawer />

            <div className="container mx-auto px-6 pt-32 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left: Product Gallery */}
                    <div className="relative lg:sticky lg:top-32">
                        <ProductGallery
                            mainImage={watch.image}
                            gallery={watch.gallery}
                            model={watch.model}
                        />
                    </div>

                    {/* Right: Details */}
                    <div className="space-y-10 lg:pt-8">
                        <div className="space-y-4 border-b border-white/10 pb-8">
                            <h2 className="text-gold-500 font-bold tracking-[0.2em] uppercase text-sm">{watch.brand}</h2>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">{watch.model}</h1>
                            <p className="text-3xl text-white/90 font-light font-sans">${watch.price.toLocaleString()}</p>
                        </div>

                        {/* Technical Specs - 2x2 Grid */}
                        <div className="py-2 space-y-6">
                            <h3 className="font-display text-lg tracking-wide text-white/80">Especificaciones Técnicas</h3>
                            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-sm">
                                {Object.entries(watch.details).map(([key, value]) => (
                                    <div key={key} className="flex flex-col p-6 bg-black hover:bg-white/[0.02] transition-colors">
                                        <dt className="text-gold-500/70 mb-2 uppercase tracking-widest text-[10px] font-bold">{key}</dt>
                                        <dd className="font-medium text-white text-sm">{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <AddToCartButton watch={watch} />
                            <p className="text-center text-white/40 text-xs mt-4 uppercase tracking-widest">
                                Envío Asegurado Global • Garantía de Autenticidad
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
