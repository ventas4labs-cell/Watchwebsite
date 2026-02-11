'use client';

import React from 'react';
import { Watch } from '@/lib/seed-data';
import { WatchGrid } from './WatchGrid';

interface WatchCategoryGridProps {
    title: string;
    watches: Watch[];
    id?: string;
}

export function WatchCategoryGrid({ title, watches, id }: WatchCategoryGridProps) {
    if (watches.length === 0) return null;

    return (
        <div className="mb-20 scroll-mt-32" id={id}>
            <h2 className="text-3xl font-display text-white mb-8 pl-6 border-l-4 border-gold-500">
                {title}
            </h2>
            <WatchGrid watches={watches} />
        </div>
    );
}
