'use client';

import { useState } from 'react';
import { AddTimepieceForm } from '@/components/AddTimepieceForm';
import { InventoryVault } from '@/components/InventoryVault';
import { Plus, ArrowLeft } from 'lucide-react';

export default function InventoryPage() {
    const [isAddingNew, setIsAddingNew] = useState(false);

    return (
        <div className="container mx-auto max-w-7xl">
            <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-2">Inventario</h2>
                    <h1 className="text-4xl font-display text-white mb-2">
                        {isAddingNew ? 'Agregar ' : 'Colección '}
                        <span className="text-gold-500">{isAddingNew ? 'Nueva Pieza' : 'Maestra'}</span>
                    </h1>
                    <p className="text-white/40 font-light hidden md:block">
                        {isAddingNew
                            ? 'Complete el formulario para publicar un nuevo reloj.'
                            : 'Gestione el inventario global desde la bóveda segura.'}
                    </p>
                </div>

                <button
                    onClick={() => setIsAddingNew(!isAddingNew)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-sm font-bold uppercase tracking-widest text-xs transition-all ${isAddingNew
                            ? 'bg-white/10 text-white hover:bg-white/20'
                            : 'bg-gold-500 text-black hover:bg-gold-400'
                        }`}
                >
                    {isAddingNew ? (
                        <>
                            <ArrowLeft className="w-4 h-4" /> Cancelar
                        </>
                    ) : (
                        <>
                            <Plus className="w-4 h-4" /> Nuevo Reloj
                        </>
                    )}
                </button>
            </header>

            {isAddingNew ? (
                <div className="bg-white/[0.02] border border-white/5 p-8 rounded-sm backdrop-blur-sm max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <AddTimepieceForm />
                </div>
            ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <InventoryVault />
                </div>
            )}
        </div>
    );
}
