'use client';

import { motion } from 'framer-motion';

interface CategoryNavProps {
    categories: string[];
}

export function CategoryNav({ categories }: CategoryNavProps) {
    const scrollToCategory = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Adjust for sticky header if needed
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    if (categories.length === 0) return null;

    return (
        <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 py-4 mb-12">
            <div className="container mx-auto px-6 overflow-x-auto">
                <div className="flex gap-4 min-w-max">
                    {categories.map((category, index) => (
                        <motion.button
                            key={category}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => scrollToCategory(category.toLowerCase().replace(/\s+/g, '-'))}
                            className="px-6 py-2 border border-white/20 rounded-full text-white/70 text-sm uppercase tracking-wider hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>
            </div>
        </div>
    );
}
