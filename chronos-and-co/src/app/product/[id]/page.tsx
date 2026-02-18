
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { CartDrawer } from '@/components/CartDrawer';
import { ProductGallery } from '@/components/ProductGallery';
import { ProductDetailView } from '@/components/ProductDetailView';
import { createClient } from '@supabase/supabase-js';
import { Watch } from '@/lib/seed-data';

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

                    {/* Right: Details (Reusable Component) */}
                    <ProductDetailView watch={watch} />
                </div>
            </div>
        </main>
    );
}
