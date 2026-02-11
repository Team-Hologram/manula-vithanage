import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { works } from '@/data/works';
import WorkDetailContent from './WorkDetailContent';

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const work = works.find((w) => w.slug === params.slug);
    if (!work) return { title: 'Work Not Found' };

    return {
        title: work.title,
        description: work.description,
        openGraph: {
            title: `${work.title} — Manula Vithanage`,
            description: work.description,
            images: [{ url: work.coverImage }],
        },
    };
}

export default function WorkDetailPage({ params }: Props) {
    const work = works.find((w) => w.slug === params.slug);
    if (!work) notFound();

    return <WorkDetailContent work={work} />;
}
