'use client';

import { useState } from 'react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import PageTransition from '@/components/ui/PageTransition';
import SmoothSection from '@/components/ui/SmoothSection';
import FilterBar from '@/components/portfolio/FilterBar';
import WorkCard from '@/components/portfolio/WorkCard';
import { works, WorkCategory } from '@/data/works';

const categories: string[] = [
    'All',
    'Weddings',
    'Editorial',
    'Commercial',
    'Travel',
    'Photo',
    'Video',
];

export default function WorksContent() {
    const [active, setActive] = useState('All');

    const filtered =
        active === 'All'
            ? works
            : works.filter((w) => {
                if (active === 'Photo') return w.type === 'photo';
                if (active === 'Video') return w.type === 'video';
                return w.category === (active as WorkCategory);
            });

    return (
        <PageTransition>
            <div className="pt-32 pb-8 md:pt-40 md:pb-12">
                <Container>
                    <p className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne mb-3 font-sans">
                        Portfolio
                    </p>
                    <h1 className="font-display text-headline text-luxury-graphite-deep mb-8">
                        Works
                    </h1>
                    <FilterBar
                        categories={categories}
                        active={active}
                        onChange={setActive}
                    />
                </Container>
            </div>

            <Section className="!pt-0">
                <Container>
                    <div className="masonry-grid">
                        {filtered.map((work, i) => (
                            <WorkCard key={work.slug} work={work} index={i} />
                        ))}
                    </div>
                    {filtered.length === 0 && (
                        <SmoothSection className="text-center py-20">
                            <p className="text-luxury-graphite-light text-sm">
                                No works found in this category.
                            </p>
                        </SmoothSection>
                    )}
                </Container>
            </Section>
        </PageTransition>
    );
}
