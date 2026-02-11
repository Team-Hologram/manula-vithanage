'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';
import type { Work } from '@/data/works';

interface WorkCardProps {
    work: Work;
    index: number;
}

export default function WorkCard({ work, index }: WorkCardProps) {
    const prefersReduced = useReducedMotion();

    return (
        <motion.div
            variants={prefersReduced ? undefined : fadeInUp}
            initial={prefersReduced ? undefined : 'hidden'}
            whileInView={prefersReduced ? undefined : 'visible'}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="masonry-item group"
        >
            <Link href={`/works/${work.slug}`} className="block">
                <div className="relative overflow-hidden">
                    <div className="aspect-[3/4] md:aspect-auto md:h-auto relative">
                        <Image
                            src={work.coverImage}
                            alt={work.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-luxury-graphite-deep/0 group-hover:bg-luxury-graphite-deep/20 transition-colors duration-500" />
                    </div>
                </div>
                <div className="pt-4 pb-2">
                    <div className="flex items-center gap-3 mb-1">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-luxury-champagne font-sans">
                            {work.category}
                        </span>
                        <span className="text-luxury-sand text-[10px]">·</span>
                        <span className="text-[10px] tracking-[0.15em] uppercase text-luxury-graphite-light font-sans">
                            {work.year}
                        </span>
                    </div>
                    <h3 className="font-display text-lg md:text-xl text-luxury-graphite-deep group-hover:text-luxury-graphite transition-colors">
                        {work.title}
                    </h3>
                    <p className="text-xs text-luxury-graphite-light mt-1">{work.location}</p>
                </div>
            </Link>
        </motion.div>
    );
}
