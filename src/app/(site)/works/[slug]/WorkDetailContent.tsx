'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import PageTransition from '@/components/ui/PageTransition';
import SmoothSection from '@/components/ui/SmoothSection';
import Lightbox from '@/components/portfolio/Lightbox';
import MagneticButton from '@/components/ui/MagneticButton';
import type { Work } from '@/data/works';

interface Props {
    work: Work;
}

export default function WorkDetailContent({ work }: Props) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <PageTransition>
            {/* Hero */}
            <div className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
                <Image
                    src={work.coverImage}
                    alt={work.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-alabaster via-luxury-alabaster/30 to-transparent" />
                <Container className="relative z-10 pb-12">
                    <Link
                        href="/works"
                        className="text-xs tracking-[0.15em] uppercase text-luxury-graphite-light hover:text-luxury-graphite-deep transition-colors font-sans mb-6 inline-block"
                    >
                        ← Back to Works
                    </Link>
                    <p className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne mb-2 font-sans">
                        {work.category} · {work.year}
                    </p>
                    <h1 className="font-display text-headline md:text-[3.5rem] text-luxury-graphite-deep">
                        {work.title}
                    </h1>
                    <p className="text-sm text-luxury-graphite-light mt-2">
                        {work.location}
                    </p>
                </Container>
            </div>

            {/* Description + Meta */}
            <Section>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
                        <SmoothSection className="lg:col-span-2">
                            <p className="font-display text-subhead text-luxury-graphite-deep leading-relaxed mb-6">
                                {work.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {work.servicesUsed.map((s) => (
                                    <span
                                        key={s}
                                        className="text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 border border-luxury-sand/60 text-luxury-graphite-light font-sans"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </SmoothSection>

                        <SmoothSection delay={0.1}>
                            {/* Metrics */}
                            {work.highlightMetrics && work.highlightMetrics.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-[11px] tracking-[0.2em] uppercase text-luxury-graphite-light/60 mb-4 font-sans">
                                        Highlights
                                    </h3>
                                    <div className="space-y-3">
                                        {work.highlightMetrics.map((m) => (
                                            <div key={m.label} className="flex justify-between items-baseline">
                                                <span className="text-xs text-luxury-graphite-light">
                                                    {m.label}
                                                </span>
                                                <span className="font-display text-lg text-luxury-champagne">
                                                    {m.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Credits */}
                            <div>
                                <h3 className="text-[11px] tracking-[0.2em] uppercase text-luxury-graphite-light/60 mb-4 font-sans">
                                    Credits
                                </h3>
                                <div className="space-y-2">
                                    {work.credits.map((c, i) => (
                                        <div key={i} className="flex justify-between text-sm">
                                            <span className="text-luxury-graphite-light">{c.role}</span>
                                            <span className="text-luxury-graphite-deep">{c.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SmoothSection>
                    </div>
                </Container>
            </Section>

            {/* Gallery */}
            <Section className="bg-luxury-ivory/50">
                <Container>
                    <SmoothSection className="mb-10">
                        <h2 className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne font-sans">
                            Gallery
                        </h2>
                    </SmoothSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {work.gallery.map((img, i) => (
                            <SmoothSection key={i} delay={i * 0.05}>
                                <button
                                    onClick={() => openLightbox(i)}
                                    className="block w-full relative aspect-[4/3] overflow-hidden group cursor-pointer"
                                >
                                    <Image
                                        src={img}
                                        alt={`${work.title} gallery ${i + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-luxury-graphite-deep/0 group-hover:bg-luxury-graphite-deep/10 transition-colors duration-300" />
                                </button>
                            </SmoothSection>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section>
                <Container className="text-center">
                    <SmoothSection>
                        <p className="font-display text-subhead text-luxury-graphite-deep mb-6">
                            Interested in a similar project?
                        </p>
                        <MagneticButton href="/contact" variant="primary">
                            Get in Touch
                        </MagneticButton>
                    </SmoothSection>
                </Container>
            </Section>

            <Lightbox
                images={work.gallery}
                initialIndex={lightboxIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
            />
        </PageTransition>
    );
}
