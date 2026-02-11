import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { BrandSlider } from '@/components/BrandSlider';
import { ProductCard } from '@/components/ProductCard';
import { CartDrawer } from '@/components/CartDrawer';
import { WATCHES } from '@/lib/seed-data';
import { ConciergePhilosophy } from '@/components/ConciergePhilosophy';
import { CommissionCTA } from '@/components/CommissionCTA';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <CartDrawer />

      <Hero />
      <BrandSlider />

      <ConciergePhilosophy />
      <CommissionCTA />

      <section id="catalog" className="py-32 container mx-auto px-6">
        <div className="relative mb-20 text-center">
          <span className="text-gold-500 tracking-[0.3em] uppercase text-xs font-bold">El Catálogo</span>
          <h2 className="text-4xl md:text-5xl font-display text-white mt-4">Selección Curada</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {WATCHES.map((watch) => (
            <ProductCard key={watch.id} watch={watch} />
          ))}
        </div>
      </section>

      <footer className="py-20 border-t border-white/10 text-center">
        <h2 className="text-2xl font-display text-white mb-4">TIMELESS <span className="text-gold-500">WATCHES</span></h2>
        <p className="text-white/40 text-sm">© 2026 Timeless Watches. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
