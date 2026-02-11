'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';
import type { Album } from '@/data/albums';

interface AlbumCardProps {
    album: Album;
    index: number;
}

export default function AlbumCard({ album, index }: AlbumCardProps) {
    const prefersReduced = useReducedMotion();

    return (
        <motion.div
            variants={prefersReduced ? undefined : fadeInUp}
            initial={prefersReduced ? undefined : 'hidden'}
            whileInView={prefersReduced ? undefined : 'visible'}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
        >
            <Link href={`/albums/${album.slug}`} className="block">
                <div className="relative overflow-hidden aspect-[4/5]">
                    <Image
                        src={album.coverImage}
                        alt={album.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-graphite-deep/50 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-luxury-champagne-light font-sans mb-1">
                            {album.mood}
                        </p>
                        <h3 className="font-display text-xl text-white">{album.title}</h3>
                        <p className="text-xs text-white/60 mt-1">
                            {album.itemCount} images · {album.season}
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
