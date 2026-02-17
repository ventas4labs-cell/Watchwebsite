import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { BrandSlider } from '@/components/BrandSlider';
import { CartDrawer } from '@/components/CartDrawer';
import { ConciergePhilosophy } from '@/components/ConciergePhilosophy';
import { FeaturedWatches } from '@/components/FeaturedWatches';
import { MobileStickyBar } from '@/components/MobileStickyBar';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <CartDrawer />
      <MobileStickyBar />

      <Hero />
      <BrandSlider />

      <ConciergePhilosophy />

      <FeaturedWatches />


      <footer className="py-20 border-t border-white/10 text-center">
        <h2 className="text-2xl font-display text-white mb-4">TIMELESS <span className="text-gold-500">WATCHES</span></h2>
        <p className="text-white/40 text-sm">© 2026 Timeless Watches. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
