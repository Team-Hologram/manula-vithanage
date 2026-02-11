'use client';

import Image from 'next/image';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import PageTransition from '@/components/ui/PageTransition';
import SmoothSection from '@/components/ui/SmoothSection';
import RevealText from '@/components/ui/RevealText';
import MagneticButton from '@/components/ui/MagneticButton';

const stats = [
    { label: 'Years of Experience', value: '8+' },
    { label: 'Projects Delivered', value: '500+' },
    { label: 'Countries', value: '12+' },
    { label: 'Awards', value: '15+' },
];

export default function AboutContent() {
    return (
        <PageTransition>
            {/* Header */}
            <div className="pt-32 pb-12 md:pt-40 md:pb-16">
                <Container>
                    <p className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne mb-3 font-sans">
                        About
                    </p>
                    <h1
                        className="font-display text-headline text-luxury-graphite-deep"
                    >
                        The Artist Behind the Lens
                    </h1>
                </Container>
            </div>

            {/* Portrait + Bio */}
            <Section className="!pt-0">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Portrait */}
                        <SmoothSection>
                            <div className="relative aspect-[3/4] overflow-hidden">
                                {/* Replace with your portrait */}
                                <Image
                                    src="/hero-bgr.png"
                                    alt="Manula Vithanage"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </SmoothSection>

                        {/* Bio */}
                        <SmoothSection delay={0.15}>
                            <div className="space-y-6">
                                <p className="font-display text-subhead text-luxury-graphite-deep leading-relaxed">
                                    I&apos;m Manula Vithanage — a photographer and videographer
                                    based in Sri Lanka, dedicated to crafting cinematic stories
                                    and timeless visual art.
                                </p>
                                <p className="text-sm text-luxury-graphite-light leading-relaxed">
                                    With over eight years of experience, I specialize in luxury
                                    wedding photography, editorial work, commercial brand
                                    campaigns, and cinematic videography. My work has been
                                    featured in international publications and trusted by
                                    premium brands across the Indian Ocean region.
                                </p>
                                <p className="text-sm text-luxury-graphite-light leading-relaxed">
                                    Every project begins with understanding the story waiting to
                                    be told. I believe photography is more than documentation —
                                    it&apos;s the art of seeing beauty in the ordinary and
                                    elevating it into something extraordinary. My approach is
                                    deliberate, unhurried, and always focused on creating images
                                    that transcend trends.
                                </p>
                                <p className="text-sm text-luxury-graphite-light leading-relaxed">
                                    Based in Colombo, I work across Sri Lanka and accept
                                    international commissions. Whether it&apos;s a destination
                                    wedding in the hills of Kandy, a brand campaign on the
                                    southern coast, or an editorial session in the heart of the
                                    city — I bring the same passion and precision to every frame.
                                </p>

                                {/* Stats */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-luxury-sand/40">
                                    {stats.map((stat) => (
                                        <div key={stat.label}>
                                            <p className="font-display text-2xl md:text-3xl text-luxury-champagne">
                                                {stat.value}
                                            </p>
                                            <p className="text-xs text-luxury-graphite-light mt-1">
                                                {stat.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <MagneticButton href="/contact" variant="primary">
                                        Get in Touch
                                    </MagneticButton>
                                </div>
                            </div>
                        </SmoothSection>
                    </div>
                </Container>
            </Section>

            {/* Philosophy */}
            <Section className="bg-luxury-ivory/50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <SmoothSection>
                            <p className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne mb-3 font-sans">
                                Philosophy
                            </p>
                            <blockquote className="font-display text-subhead md:text-headline text-luxury-graphite-deep leading-relaxed italic">
                                &ldquo;I don&apos;t just take photographs. I create visual
                                stories that honour the beauty, emotion, and authenticity of
                                every moment.&rdquo;
                            </blockquote>
                            <p className="mt-6 text-sm text-luxury-graphite-light tracking-[0.15em] uppercase font-sans">
                                — Manula Vithanage
                            </p>
                        </SmoothSection>
                    </div>
                </Container>
            </Section>

            {/* Equipment & Approach */}
            <Section>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <SmoothSection>
                            <h3 className="font-display text-xl text-luxury-graphite-deep mb-4">
                                Equipment
                            </h3>
                            <ul className="space-y-2 text-sm text-luxury-graphite-light">
                                <li>Sony Alpha series (A7IV, A7SIII)</li>
                                <li>Premium cinema lenses (Sigma Art, Sony G Master)</li>
                                <li>DJI Drone for aerial cinematography</li>
                                <li>Professional lighting and grip</li>
                                <li>4K / 6K cinema-quality video</li>
                            </ul>
                        </SmoothSection>
                        <SmoothSection delay={0.1}>
                            <h3 className="font-display text-xl text-luxury-graphite-deep mb-4">
                                Approach
                            </h3>
                            <ul className="space-y-2 text-sm text-luxury-graphite-light">
                                <li>Natural light mastery with controlled studio work</li>
                                <li>Documentary-cinematic hybrid style</li>
                                <li>Emphasis on authentic emotion and connection</li>
                                <li>Meticulous post-production and color science</li>
                                <li>Personal attention to every client</li>
                            </ul>
                        </SmoothSection>
                    </div>
                </Container>
            </Section>
        </PageTransition>
    );
}
