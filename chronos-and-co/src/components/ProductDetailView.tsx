
import { Watch } from '@/lib/seed-data';
import { AddToCartButton } from '@/components/AddToCartButton';
import { SaveToVaultButton } from '@/components/SaveToVaultButton';

interface ProductDetailViewProps {
    watch: Watch;
}

const SPEC_KEY_MAPPING: Record<string, string> = {
    "movement": "Movimiento",
    "caseSize": "Tamaño de Caja",
    "waterResistance": "Resistencia al Agua",
    "crystal": "Cristal",
    "caseMaterial": "Material de la Caja",
    // Keep legacy mappings just in case, though DB should be standardized now
    "Movimiento": "Movimiento",
    "Tamaño de Caja": "Tamaño de Caja",
    "Resistencia al Agua": "Resistencia al Agua",
    "Cristal": "Cristal",
    "Material de la Caja": "Material de la Caja"
};

export function ProductDetailView({ watch }: ProductDetailViewProps) {
    return (
        <div className="space-y-10 lg:pt-8 animate-in fade-in duration-500">
            <div className="space-y-4 border-b border-white/10 pb-8">
                <h2 className="text-gold-500 font-bold tracking-[0.2em] uppercase text-sm">{watch.brand}</h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">{watch.model}</h1>
                {watch.price_hidden ? (
                    <p className="text-xl md:text-2xl text-gold-500 font-light font-sans uppercase tracking-wider">
                        Precio Próximamente
                    </p>
                ) : watch.discount_price ? (
                    <div className="flex items-center gap-4">
                        <p className="text-xl md:text-2xl text-white/30 font-light font-sans line-through">
                            ${Number(watch.price).toLocaleString()}
                        </p>
                        <p className="text-3xl text-gold-500 font-bold font-sans">
                            ${Number(watch.discount_price).toLocaleString()}
                        </p>
                    </div>
                ) : (
                    <p className="text-3xl text-white/90 font-light font-sans">${Number(watch.price).toLocaleString()}</p>
                )}
                {watch.description && (
                    <p className="text-white/60 font-light leading-relaxed max-w-lg">
                        {watch.description}
                    </p>
                )}
            </div>

            {/* Technical Specs - 2x2 Grid */}
            <div className="py-2 space-y-6">
                <h3 className="font-display text-lg tracking-wide text-white/80">Especificaciones Técnicas</h3>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-sm">
                    {Object.entries(watch.details || {}).map(([key, value]) => {
                        // Skip empty values
                        if (!value) return null;

                        return (
                            <div key={key} className="flex flex-col p-6 bg-black hover:bg-white/[0.02] transition-colors">
                                <dt className="text-gold-500/70 mb-2 uppercase tracking-widest text-[10px] font-bold">
                                    {SPEC_KEY_MAPPING[key] || key}
                                </dt>
                                <dd className="font-medium text-white text-sm">{value}</dd>
                            </div>
                        );
                    })}
                </dl>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-4">
                <AddToCartButton watch={watch} />
                <SaveToVaultButton productId={watch.id} />
                <p className="text-center text-white/40 text-xs pt-4 uppercase tracking-widest">
                    Envío Asegurado • Garantía Oficial • Devolución Gratuita
                </p>
            </div>
        </div>
    );
}
