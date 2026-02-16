import { notFound } from 'next/navigation';
import Image from 'next/image';
import { AddToCartButton } from '@/components/AddToCartButton';
import { Watch } from '@/lib/seed-data';
import { Navbar } from '@/components/Navbar';
import { CartDrawer } from '@/components/CartDrawer';
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

            <div className="container mx-auto px-6 pt-32 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left: Image */}
                    <div className="flex flex-col gap-4 relative lg:sticky lg:top-24">
                        <div className="relative aspect-[3/4] lg:h-[80vh] bg-white/5 rounded-sm overflow-hidden">
                            <Image
                                src={watch.image}
                                alt={watch.model}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        {watch.gallery && (
                            <div className="grid grid-cols-2 gap-4">
                                {watch.gallery.map((img: string, i: number) => (
                                    <div key={i} className="relative aspect-square bg-white/5 rounded-sm overflow-hidden">
                                        <Image
                                            src={img}
                                            alt={`${watch.model} gallery ${i + 1}`}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 1024px) 50vw, 25vw"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Details */}
                    <div className="space-y-10 lg:pt-12">
                        <div className="space-y-4">
                            <h2 className="text-gold-500 font-bold tracking-[0.2em] uppercase text-sm">{watch.brand}</h2>
                            <h1 className="text-4xl md:text-6xl font-display leading-tight">{watch.model}</h1>
                            <p className="text-3xl text-white/90 font-light">${watch.price.toLocaleString()}</p>
                        </div>

                        <div className="prose prose-invert prose-lg text-white/60 font-light">
                            <p className="text-xl leading-relaxed">{watch.description}</p>
                            <p>
                                Experimente la cúspide de la artesanía. Este reloj representa un legado de ingeniería de precisión
                                y refinamiento estético. Diseñado para aquellos que aprecian el arte sutil de la relojería.
                            </p>
                        </div>

                        <div className="border-t border-white/10 pt-8 space-y-6">
                            <h3 className="font-display text-xl tracking-wide">Especificaciones Técnicas</h3>
                            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 text-sm">
                                <div className="flex flex-col">
                                    <dt className="text-white/40 mb-1 uppercase tracking-wider text-xs">Movimiento</dt>
                                    <dd className="font-medium text-white">{watch.details.movement}</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="text-white/40 mb-1 uppercase tracking-wider text-xs">Material de la Caja</dt>
                                    <dd className="font-medium text-white">Acero Inoxidable 316L</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="text-white/40 mb-1 uppercase tracking-wider text-xs">Resistencia al Agua</dt>
                                    <dd className="font-medium text-white">{watch.details.waterResistance}</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="text-white/40 mb-1 uppercase tracking-wider text-xs">Cristal</dt>
                                    <dd className="font-medium text-white">{watch.details.crystal}</dd>
                                </div>
                            </dl>
                        </div>

                        <div className="pt-8">
                            <AddToCartButton watch={watch} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
