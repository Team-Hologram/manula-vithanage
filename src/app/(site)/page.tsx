'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { gsap } from 'gsap';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import MagneticButton from '@/components/ui/MagneticButton';
import RevealText from '@/components/ui/RevealText';
import SmoothSection from '@/components/ui/SmoothSection';
import WorkCard from '@/components/portfolio/WorkCard';
import AlbumCard from '@/components/portfolio/AlbumCard';
import { works } from '@/data/works';
import { albums } from '@/data/albums';
import { testimonials } from '@/data/testimonials';
import { services, processSteps } from '@/data/services';
import { staggerContainer, fadeInUp } from '@/lib/motion';

const pressClients = [
    'Resplendent Ceylon',
    'Colombo Fashion Week',
    'Amanwella',
    'Jungle Beach',
    'Condé Nast Traveller',
    'ODEL Luxe',
    'Shangri-La',
    'Cinnamon Hotels',
];

export default function HomePage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const prefersReduced = useReducedMotion();

    useEffect(() => {
        if (prefersReduced || !heroRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(
                '.hero-image',
                { scale: 1.1, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.6 }
            )
                .fromTo(
                    '.hero-line-1',
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    '-=1'
                )
                .fromTo(
                    '.hero-line-2',
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    '-=0.7'
                )
                .fromTo(
                    '.hero-sub',
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    '-=0.4'
                )
                .fromTo(
                    '.hero-cta',
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6 },
                    '-=0.2'
                );
        }, heroRef);

        return () => ctx.revert();
    }, [prefersReduced]);

    const featuredWorksMobile = works.slice(0, 3);
    const featuredWorksDesktop = works.slice(0, 6);
    const featuredAlbumsMobile = albums.slice(0, 3);
    const featuredAlbumsDesktop = albums.slice(0, 6);

    return (
        <div>
            {/* ── HERO ── */}
            <div
                ref={heroRef}
                className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
            >
                <div className="hero-image absolute inset-0">
                    {/* Replace with your hero image */}
                    <Image
                        src="/hero-bgn.png"
                        alt="Manula Vithanage — Luxury Photography"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-luxury-alabaster/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-alabaster/90 via-luxury-alabaster/30 to-transparent" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <div className="overflow-hidden mb-2">
                        <h1 className="hero-line-1 font-display text-hero text-luxury-graphite-deep">
                            Cinematic Stories.
                        </h1>
                    </div>
                    <div className="overflow-hidden mb-8">
                        <p className="hero-line-2 font-display text-hero text-luxury-graphite-deep">
                            Timeless Frames.
                        </p>
                    </div>
                    <div className="overflow-hidden mb-10">
                        <p className="hero-sub text-sm md:text-base tracking-[0.3em] uppercase text-luxury-graphite-light">
                            Sri Lanka • Worldwide
                        </p>
                    </div>
                    <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
                        <MagneticButton href="/works" variant="primary">
                            View Works
                        </MagneticButton>
                        <MagneticButton href="/contact" variant="outline">
                            Book a Session
                        </MagneticButton>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className="w-px h-12 bg-gradient-to-b from-luxury-graphite/40 to-transparent" />
                </motion.div>
            </div>

            {/* ── FEATURED WORKS ── */}
            <Section id="featured-works">
                <Container>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
                        <SmoothSection>
                            <p className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne mb-3 font-sans">
                                Portfolio
                            </p>
                            <h2 className="font-display text-headline text-luxury-graphite-deep">
                                Featured Works
                            </h2>
                        </SmoothSection>
                        <Link
                            href="/works"
                            className="mt-4 md:mt-0 text-xs tracking-[0.15em] uppercase text-luxury-graphite-light hover:text-luxury-graphite-deep transition-colors group font-sans"
                        >
                            View All
                            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </div>
                    <div className="masonry-grid md:hidden">
                        {featuredWorksMobile.map((work, i) => (
                            <WorkCard key={work.slug} work={work} index={i} />
                        ))}
                    </div>
                    <div className="hidden md:block">
                        <div className="masonry-grid">
                            {featuredWorksDesktop.map((work, i) => (
                                <WorkCard key={work.slug} work={work} index={i} />
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ── SIGNATURE ALBUMS ── */}
            <Section className="bg-luxury-ivory/50">
                <Container>
                    <SmoothSection className="text-center mb-12 md:mb-16">
                        <p className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne mb-3 font-sans">
                            Collections
                        </p>
                        <h2 className="font-display text-headline text-luxury-graphite-deep">
                            Signature Albums
                        </h2>
                    </SmoothSection>
                    <div className="grid grid-cols-1 gap-6 md:hidden">
                        {featuredAlbumsMobile.map((album, i) => (
                            <AlbumCard key={album.slug} album={album} index={i} />
                        ))}
                    </div>
                    <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredAlbumsDesktop.map((album, i) => (
                            <AlbumCard key={album.slug} album={album} index={i} />
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ── SERVICES PREVIEW ── */}
            <Section>
                <Container>
                    <SmoothSection className="text-center mb-12 md:mb-16">
                        <p className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne mb-3 font-sans">
                            Services
                        </p>
                        <h2 className="font-display text-headline text-luxury-graphite-deep">
                            Crafted for You
                        </h2>
                        <p className="mt-4 text-luxury-graphite-light max-w-xl mx-auto text-sm leading-relaxed">
                            From intimate portraits to grand cinematic productions — every
                            project receives the same devotion to artistry and excellence.
                        </p>
                    </SmoothSection>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                    >
                        {services.slice(0, 3).map((s) => (
                            <motion.div
                                key={s.name}
                                variants={fadeInUp}
                                className="border border-luxury-sand/50 p-8 hover:border-luxury-champagne/60 transition-all duration-500 group"
                            >
                                <h3 className="font-display text-xl text-luxury-graphite-deep mb-3">
                                    {s.name}
                                </h3>
                                <p className="text-sm text-luxury-graphite-light leading-relaxed mb-4">
                                    {s.description.split('.')[0]}.
                                </p>
                                {s.startingPrice && (
                                    <p className="text-xs tracking-[0.15em] uppercase text-luxury-champagne font-sans mb-4">
                                        {s.startingPrice}
                                    </p>
                                )}
                                <Link
                                    href="/services"
                                    className="text-xs tracking-[0.15em] uppercase text-luxury-graphite-light hover:text-luxury-graphite-deep transition-colors font-sans"
                                >
                                    View Details →
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </Container>
            </Section>

            {/* ── TESTIMONIALS ── */}
            <Section className="bg-luxury-ivory/50">
                <Container>
                    <SmoothSection className="text-center mb-12 md:mb-16">
                        <p className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne mb-3 font-sans">
                            Testimonials
                        </p>
                        <h2 className="font-display text-headline text-luxury-graphite-deep">
                            Kind Words
                        </h2>
                    </SmoothSection>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    >
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="border-l border-luxury-champagne/40 pl-6"
                            >
                                <p className="text-luxury-graphite/70 leading-relaxed italic mb-4 text-sm">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                                <div>
                                    <p className="text-luxury-graphite-deep text-sm font-medium">
                                        {t.name}
                                    </p>
                                    <p className="text-luxury-graphite-light text-xs">
                                        {t.role} — {t.location}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </Container>
            </Section>

            {/* ── PROCESS TIMELINE ── */}
            <Section>
                <Container>
                    <SmoothSection className="text-center mb-12 md:mb-16">
                        <p className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne mb-3 font-sans">
                            Process
                        </p>
                        <h2 className="font-display text-headline text-luxury-graphite-deep">
                            How We Work
                        </h2>
                    </SmoothSection>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
                    >
                        {processSteps.map((step) => (
                            <motion.div key={step.step} variants={fadeInUp} className="text-center">
                                <span className="text-3xl md:text-4xl font-display text-luxury-champagne/40 block mb-3">
                                    {step.step}
                                </span>
                                <h3 className="font-display text-xl text-luxury-graphite-deep mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-luxury-graphite-light leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </Container>
            </Section>

            {/* ── PRESS / CLIENTS ── */}
            <Section className="bg-luxury-ivory/50">
                <Container>
                    <SmoothSection className="text-center mb-10">
                        <p className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne mb-3 font-sans">
                            Trusted By
                        </p>
                    </SmoothSection>
                    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 max-w-4xl mx-auto">
                        {pressClients.map((client) => (
                            <span
                                key={client}
                                className="text-sm tracking-[0.1em] text-luxury-graphite-light/50 font-sans uppercase whitespace-nowrap"
                            >
                                {client}
                            </span>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ── CONTACT CTA ── */}
            <Section>
                <Container>
                    <SmoothSection className="text-center max-w-2xl mx-auto">
                        <p className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne mb-3 font-sans">
                            Let&apos;s Create
                        </p>
                        <h2 className="font-display text-headline text-luxury-graphite-deep mb-6">
                            Your Story Awaits
                        </h2>
                        <p className="text-luxury-graphite-light mb-10 text-sm leading-relaxed">
                            Every great image begins with a conversation. Let&apos;s discuss
                            how we can bring your vision to life with artistry and intention.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <MagneticButton href="/contact" variant="primary">
                                Book a Session
                            </MagneticButton>
                            <MagneticButton href="/services" variant="outline">
                                View Services
                            </MagneticButton>
                        </div>
                    </SmoothSection>
                </Container>
            </Section>
        </div>
    );
}
