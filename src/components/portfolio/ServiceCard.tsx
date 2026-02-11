'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';

interface ServiceCardProps {
    name: string;
    description: string;
    startingPrice?: string;
    deliverables: string[];
    index: number;
}

export default function ServiceCard({
    name,
    description,
    startingPrice,
    deliverables,
    index,
}: ServiceCardProps) {
    const prefersReduced = useReducedMotion();

    return (
        <motion.div
            variants={prefersReduced ? undefined : fadeInUp}
            initial={prefersReduced ? undefined : 'hidden'}
            whileInView={prefersReduced ? undefined : 'visible'}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group border border-luxury-sand/60 p-8 md:p-10 hover:border-luxury-champagne transition-all duration-500"
        >
            <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-xl md:text-2xl text-luxury-graphite-deep">
                    {name}
                </h3>
                {startingPrice && (
                    <span className="text-xs tracking-[0.15em] uppercase text-luxury-champagne font-sans whitespace-nowrap ml-4">
                        {startingPrice}
                    </span>
                )}
            </div>
            <p className="text-sm text-luxury-graphite-light leading-relaxed mb-6">
                {description}
            </p>
            <ul className="space-y-2">
                {deliverables.slice(0, 5).map((item, i) => (
                    <li
                        key={i}
                        className="text-sm text-luxury-graphite/80 flex items-start gap-2"
                    >
                        <span className="text-luxury-champagne mt-1 text-[10px]">◆</span>
                        {item}
                    </li>
                ))}
                {deliverables.length > 5 && (
                    <li className="text-xs text-luxury-graphite-light">
                        + {deliverables.length - 5} more deliverables
                    </li>
                )}
            </ul>
        </motion.div>
    );
}
