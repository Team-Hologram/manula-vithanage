'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FilterBarProps {
    categories: string[];
    active: string;
    onChange: (category: string) => void;
}

export default function FilterBar({ categories, active, onChange }: FilterBarProps) {
    return (
        <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onChange(cat)}
                    className={cn(
                        'relative px-4 py-2 text-xs tracking-[0.15em] uppercase font-sans transition-colors duration-300',
                        active === cat
                            ? 'text-luxury-graphite-deep'
                            : 'text-luxury-graphite-light hover:text-luxury-graphite'
                    )}
                >
                    {cat}
                    {active === cat && (
                        <motion.div
                            layoutId="filter-underline"
                            className="absolute bottom-0 left-0 right-0 h-px bg-luxury-champagne"
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        />
                    )}
                </button>
            ))}
        </div>
    );
}
