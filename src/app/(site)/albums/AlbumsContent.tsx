'use client';

import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import PageTransition from '@/components/ui/PageTransition';
import SmoothSection from '@/components/ui/SmoothSection';
import AlbumCard from '@/components/portfolio/AlbumCard';
import { albums } from '@/data/albums';

export default function AlbumsContent() {
    return (
        <PageTransition>
            <div className="pt-32 pb-8 md:pt-40 md:pb-12">
                <Container>
                    <p className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne mb-3 font-sans">
                        Collections
                    </p>
                    <h1 className="font-display text-headline text-luxury-graphite-deep mb-4">
                        Albums
                    </h1>
                    <p className="text-sm text-luxury-graphite-light max-w-lg leading-relaxed">
                        Curated collections that tell stories through carefully sequenced
                        photographs. Each album is a visual journey.
                    </p>
                </Container>
            </div>

            <Section className="!pt-0">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {albums.map((album, i) => (
                            <AlbumCard key={album.slug} album={album} index={i} />
                        ))}
                    </div>
                </Container>
            </Section>
        </PageTransition>
    );
}
