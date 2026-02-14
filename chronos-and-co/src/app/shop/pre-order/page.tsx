import { WATCHES } from '@/lib/seed-data';
import { Navbar } from '@/components/Navbar';
import { CartDrawer } from '@/components/CartDrawer';
import { ProductGrid } from '@/components/ProductGrid';
import { MobileStickyBar } from '@/components/MobileStickyBar';

export default function PreOrderPage() {
    const preOrderWatches = WATCHES.filter(w => w.availability === 'pre-order' || !w.availability);

    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            <CartDrawer />

            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1434056838489-29f41dc41970?q=80&w=2074&auto=format&fit=crop')" }}
                />

                <div className="relative z-20 text-center space-y-4 px-6">
                    <h1 className="text-4xl md:text-6xl font-display text-white font-medium tracking-tight">
                        Colección <span className="text-gold-200 italic font-serif">Pre-orden</span>
                    </h1>
                    <p className="text-white/60 max-w-xl mx-auto font-light">
                        Reserve las piezas más codiciadas antes que nadie. Calidad que vale la espera.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <ProductGrid watches={preOrderWatches} />
            </section>

            <MobileStickyBar />

            <footer className="py-20 border-t border-white/10 text-center">
                <h2 className="text-2xl font-display text-white mb-4">TIMELESS <span className="text-gold-500">WATCHES</span></h2>
                <p className="text-white/40 text-sm">© 2026 Timeless Watches. Todos los derechos reservados.</p>
            </footer>
        </main>
    );
}
