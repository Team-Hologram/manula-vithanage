import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { albums } from '@/data/albums';
import AlbumDetailContent from './AlbumDetailContent';

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return albums.map((album) => ({ slug: album.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const album = albums.find((a) => a.slug === params.slug);
    if (!album) return { title: 'Album Not Found' };

    return {
        title: album.title,
        description: album.story,
        openGraph: {
            title: `${album.title} — Manula Vithanage`,
            description: album.story,
            images: [{ url: album.coverImage }],
        },
    };
}

export default function AlbumDetailPage({ params }: Props) {
    const album = albums.find((a) => a.slug === params.slug);
    if (!album) notFound();

    return <AlbumDetailContent album={album} />;
}
