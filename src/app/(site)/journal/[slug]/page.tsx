import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { journalPosts } from '@/data/journal';
import Container from '@/components/ui/Container';

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = journalPosts.find((p) => p.slug === params.slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: `${post.title} — Manula Vithanage`,
            description: post.excerpt,
            images: [{ url: post.coverImage }],
        },
    };
}

export default function JournalPostPage({ params }: Props) {
    const post = journalPosts.find((p) => p.slug === params.slug);
    if (!post) notFound();

    return (
        <div className="pt-32 pb-20 md:pt-40 md:pb-28">
            <Container>
                <div className="max-w-2xl mx-auto">
                    <Link
                        href="/journal"
                        className="text-xs tracking-[0.15em] uppercase text-luxury-graphite-light hover:text-luxury-graphite-deep transition-colors font-sans mb-8 inline-block"
                    >
                        ← Back to Journal
                    </Link>

                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] tracking-[0.15em] uppercase text-luxury-champagne font-sans">
                            {post.readTime}
                        </span>
                        <span className="text-luxury-sand text-[10px]">·</span>
                        <span className="text-[10px] tracking-[0.15em] uppercase text-luxury-graphite-light font-sans">
                            {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </span>
                    </div>

                    <h1 className="font-display text-headline text-luxury-graphite-deep mb-8">
                        {post.title}
                    </h1>

                    <div className="relative aspect-[3/2] overflow-hidden mb-10">
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 680px"
                            priority
                        />
                    </div>

                    <div className="prose-luxury">
                        {post.content.split('\n\n').map((paragraph, i) => (
                            <p
                                key={i}
                                className="text-sm text-luxury-graphite/80 leading-relaxed mb-6"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="border-t border-luxury-sand/40 mt-12 pt-8">
                        <Link
                            href="/journal"
                            className="text-xs tracking-[0.15em] uppercase text-luxury-graphite-light hover:text-luxury-graphite-deep transition-colors font-sans"
                        >
                            ← All Articles
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}
