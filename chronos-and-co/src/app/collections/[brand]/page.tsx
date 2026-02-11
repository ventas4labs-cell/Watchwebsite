import { WATCHES } from '@/lib/seed-data';
import { BrandHero } from '@/components/BrandHero';
import { WatchGrid } from '@/components/WatchGrid';
import { WatchCategoryGrid } from '@/components/WatchCategoryGrid';
import { Navbar } from '@/components/Navbar';
import { CartDrawer } from '@/components/CartDrawer';
import { CategoryNav } from '@/components/CategoryNav';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const brands = Array.from(new Set(WATCHES.map(w => w.brand.toLowerCase())));
    return brands.map((brand) => ({
        brand: brand,
    }));
}

const BRAND_DESCRIPTIONS: Record<string, string> = {
    tissot: "Innovadores por tradición. Desde las montañas del Jura suizo hasta su muñeca, Tissot encarna la esencia del lujo accesible.",
    seiko: "Siempre un paso adelante. Precisión japonesa, maestría artística y una dedicación inquebrantable a la perfección.",
    orient: "Arraigados en la artesanía, la fiabilidad y la precisión. Un legado de relojería mecánica por más de 70 años.",
    bulova: "Una historia de primicias. Desde la luna hasta la vanguardia de la frecuencia, Bulova define la destreza técnica estadounidense.",
    stauer: "Dando vida a la historia. Diseños inspirados en lo vintage que celebran la edad de oro de la relojería a un precio accesible.",
    timex: "Diseño honrado por el tiempo. Duradero, icónico y decididamente clásico, contando la historia de la relojería estadounidense.",
};

const BRAND_IMAGES: Record<string, string> = {
    tissot: "/brand-assets/tissot-hero.jpg",
    seiko: "https://www.danwerkejewelers.com/cdn/shop/files/PSX_sje099_seikotop_pc_2.jpg?v=1726008488&width=1920",
    orient: "https://cdn.shopify.com/s/files/1/0026/4978/4385/files/Jan_Desktop.png?v=1767204777",
    // Fallbacks or generic images for others if specific high-res ones aren't perfect hero material
    // but we can try to find some.
};

const BRAND_BG_SIZES: Record<string, string> = {
    tissot: 'contain',
    seiko: 'contain',
    orient: 'contain',
};

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
    const { brand } = await params;

    // Normalize case for comparison
    const brandName = brand.charAt(0).toUpperCase() + brand.slice(1);
    const watches = WATCHES.filter((w) => w.brand.toLowerCase() === brand.toLowerCase());
    const description = BRAND_DESCRIPTIONS[brand.toLowerCase()] || `Explora la exquisita colección de ${brandName}.`;
    const backgroundImage = BRAND_IMAGES[brand.toLowerCase()];
    const backgroundSize = BRAND_BG_SIZES[brand.toLowerCase()] || 'cover';

    if (watches.length === 0) {
        // Optional: Handle unknown brands gracefully or 404
        // notFound(); 
        // For now, let's allow empty pages but they will show "No timepieces found"
    }

    // Grouping logic for Seiko
    if (brand.toLowerCase() === 'seiko') {
        const categories: Record<string, typeof watches> = {};

        watches.forEach(w => {
            const match = w.model.match(/^([A-Z]+)/);
            const prefix = match ? match[1] : 'Other';
            const groupName = `Series ${prefix}`; // e.g., "Series SSK"

            if (!categories[groupName]) {
                categories[groupName] = [];
            }
            categories[groupName].push(w);
        });

        // Ensure "Other" is last if it exists, otherwise sort alphabetically
        const sortedKeys = Object.keys(categories).sort((a, b) => {
            if (a === 'Series Other') return 1;
            if (b === 'Series Other') return -1;
            return a.localeCompare(b);
        });

        return (
            <main className="bg-black min-h-screen">
                <Navbar />
                <CartDrawer />

                <BrandHero brand={brandName} description={description} backgroundImage={backgroundImage} backgroundSize={backgroundSize} />

                <section className="container mx-auto px-6 py-20">
                    {sortedKeys.map((title) => (
                        <WatchCategoryGrid key={title} title={title} watches={categories[title]} />
                    ))}
                </section>

                <footer className="py-20 border-t border-white/10 text-center">
                    <h2 className="text-2xl font-display text-white mb-4">TIMELESS <span className="text-gold-500">WATCHES</span></h2>
                    <p className="text-white/40 text-sm">© 2026 Timeless Watches. Todos los derechos reservados.</p>
                </footer>
            </main>
        );
    }

    // Grouping logic for Tissot
    if (brand.toLowerCase() === 'tissot') {
        const categories = {
            "PRX Collection": watches.filter(w => w.model.toLowerCase().includes('prx')),
            "Gentleman Collection": watches.filter(w => w.model.toLowerCase().includes('gentleman')),
            "Seastar Collection": watches.filter(w => w.model.toLowerCase().includes('seastar')),
            "Le Locle Collection": watches.filter(w => w.model.toLowerCase().includes('le locle')),
            "Chemin des Tourelles": watches.filter(w => w.model.toLowerCase().includes('chemin des tourelles')),
            "Supersport Collection": watches.filter(w => w.model.toLowerCase().includes('supersport')),
            "Heritage Collection": watches.filter(w => {
                const m = w.model.toLowerCase();
                return m.includes('heritage') || m.includes('visodate') || m.includes('telemeter') || m.includes('1938');
            }),
            "Classic Collection": watches.filter(w => {
                const m = w.model.toLowerCase();
                return m.includes('carson') || m.includes('tradition') || m.includes('everytime') || m.includes('classic dream') || m.includes('pr 100') || m.includes('ballade');
            }),
            "Sport Collection": watches.filter(w => {
                const m = w.model.toLowerCase();
                return m.includes('prc 200') || m.includes('pr516') || m.includes('chrono xl') || m.includes('t-touch') || m.includes('couturier');
            }),
        };

        // Catch-all for others
        const categorizedIds = new Set(Object.values(categories).flat().map(w => w.id));
        const otherWatches = watches.filter(w => !categorizedIds.has(w.id));

        return (
            <main className="bg-black min-h-screen">
                <Navbar />
                <CartDrawer />

                <BrandHero brand={brandName} description={description} backgroundImage={backgroundImage} backgroundSize={backgroundSize} />

                <section className="container mx-auto px-6 py-20">
                    {Object.entries(categories).map(([title, group]) => (
                        <WatchCategoryGrid key={title} title={title} watches={group} />
                    ))}
                    {otherWatches.length > 0 && (
                        <WatchCategoryGrid title="Other Models" watches={otherWatches} />
                    )}
                </section>

                <footer className="py-20 border-t border-white/10 text-center">
                    <h2 className="text-2xl font-display text-white mb-4">TIMELESS <span className="text-gold-500">WATCHES</span></h2>
                    <p className="text-white/40 text-sm">© 2026 Timeless Watches. Todos los derechos reservados.</p>
                </footer>
            </main>
        );
    }


    // Grouping logic for Orient
    if (brand.toLowerCase() === 'orient') {
        const categories = {
            "Bambino Collection": watches.filter(w => w.model.includes('Bambino')),
            "Sun & Moon Collection": watches.filter(w => w.model.includes('Sun & Moon') || w.model.includes('Day & Night')),
            "Classic Skeleton": watches.filter(w => w.model.includes('Semi-Skeleton')),
            "Classic Collection": watches.filter(w => w.model.includes('Classic & Simple Style') || w.model.includes('Classic Design')),
            "Sports Collection": watches.filter(w => w.model.includes('Mako') || w.model.includes('Kamasu') || w.model.includes('Kanno') || w.model.includes('Triton') || w.model.includes('Neptune') || w.model.includes('Diver') || w.model.includes('Sport')),
        };

        const categorizedIds = new Set(Object.values(categories).flat().map(w => w.id));
        const otherWatches = watches.filter(w => !categorizedIds.has(w.id));

        // Filter out empty categories
        const validCategories = Object.keys(categories).filter(key => categories[key as keyof typeof categories].length > 0);
        if (otherWatches.length > 0) validCategories.push("Other Models");

        // Orient specific styles
        const bgClass = "bg-black min-h-screen";
        const footerTextClass = "text-white";
        const footerBorderClass = "border-white/10";
        const footerCopyrightClass = "text-white/40";

        return (
            <main className={bgClass}>
                <Navbar />
                <CartDrawer />

                <BrandHero brand={brandName} description={description} backgroundImage={backgroundImage} backgroundSize={backgroundSize} />

                <CategoryNav categories={validCategories} />

                <section className="container mx-auto px-6 py-20">
                    {Object.entries(categories).map(([title, group]) => (
                        <WatchCategoryGrid
                            key={title}
                            title={title}
                            watches={group}
                            id={title.toLowerCase().replace(/\s+/g, '-')}
                        />
                    ))}
                    {otherWatches.length > 0 && (
                        <WatchCategoryGrid
                            title="Other Models"
                            watches={otherWatches}
                            id="other-models"
                        />
                    )}
                </section>

                <footer className={`py-20 border-t ${footerBorderClass} text-center`}>
                    <h2 className={`text-2xl font-display ${footerTextClass} mb-4`}>TIMELESS <span className="text-gold-500">WATCHES</span></h2>
                    <p className={`${footerCopyrightClass} text-sm`}>© 2026 Timeless Watches. Todos los derechos reservados.</p>
                </footer>
            </main>
        );
    }

    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            <CartDrawer />

            <BrandHero brand={brandName} description={description} backgroundImage={backgroundImage} backgroundSize={backgroundSize} />
            <WatchGrid watches={watches} />

            <footer className="py-20 border-t border-white/10 text-center">
                <h2 className="text-2xl font-display text-white mb-4">TIMELESS <span className="text-gold-500">WATCHES</span></h2>
                <p className="text-white/40 text-sm">© 2026 Timeless Watches. Todos los derechos reservados.</p>
            </footer>
        </main>
    );
}



