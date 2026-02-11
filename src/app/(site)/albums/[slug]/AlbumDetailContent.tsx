'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import PageTransition from '@/components/ui/PageTransition';
import SmoothSection from '@/components/ui/SmoothSection';
import Lightbox from '@/components/portfolio/Lightbox';
import type { Album } from '@/data/albums';

interface Props {
    album: Album;
}

export default function AlbumDetailContent({ album }: Props) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <PageTransition>
            {/* Header */}
            <div className="pt-32 pb-8 md:pt-40 md:pb-12">
                <Container>
                    <Link
                        href="/albums"
                        className="text-xs tracking-[0.15em] uppercase text-luxury-graphite-light hover:text-luxury-graphite-deep transition-colors font-sans mb-6 inline-block"
                    >
                        ← Back to Albums
                    </Link>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                        <p className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne font-sans">
                            {album.mood}
                        </p>
                        <span className="text-luxury-sand text-[10px]">·</span>
                        <p className="text-[11px] tracking-[0.2em] uppercase text-luxury-graphite-light font-sans">
                            {album.season}
                        </p>
                    </div>
                    <h1 className="font-display text-headline text-luxury-graphite-deep mb-4">
                        {album.title}
                    </h1>
                    <p className="text-sm text-luxury-graphite-light max-w-xl leading-relaxed">
                        {album.story}
                    </p>
                    <p className="mt-4 text-xs text-luxury-graphite-light/60">
                        {album.itemCount} photographs
                    </p>
                </Container>
            </div>

            {/* Gallery Grid */}
            <Section className="!pt-0">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {album.images.map((img, i) => (
                            <SmoothSection key={i} delay={i * 0.04}>
                                <button
                                    onClick={() => openLightbox(i)}
                                    className="block w-full relative aspect-[4/5] overflow-hidden group cursor-pointer"
                                >
                                    <Image
                                        src={img}
                                        alt={`${album.title} image ${i + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-luxury-graphite-deep/0 group-hover:bg-luxury-graphite-deep/10 transition-colors duration-300" />
                                </button>
                            </SmoothSection>
                        ))}
                    </div>
                </Container>
            </Section>

            <Lightbox
                images={album.images}
                initialIndex={lightboxIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
            />
        </PageTransition>
    );
}
