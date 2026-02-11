'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import PageTransition from '@/components/ui/PageTransition';
import SmoothSection from '@/components/ui/SmoothSection';
import { journalPosts } from '@/data/journal';
import { staggerContainer, fadeInUp } from '@/lib/motion';

export default function JournalContent() {
    return (
        <PageTransition>
            <div className="pt-32 pb-8 md:pt-40 md:pb-12">
                <Container>
                    <p className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne mb-3 font-sans">
                        Journal
                    </p>
                    <h1 className="font-display text-headline text-luxury-graphite-deep mb-4">
                        Behind the Lens
                    </h1>
                    <p className="text-sm text-luxury-graphite-light max-w-lg leading-relaxed">
                        Thoughts, tips, and stories from the field — insights into the
                        art and craft of luxury photography and cinematic storytelling.
                    </p>
                </Container>
            </div>

            <Section className="!pt-0">
                <Container>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {journalPosts.map((post) => (
                            <motion.article key={post.slug} variants={fadeInUp} className="group">
                                <Link href={`/journal/${post.slug}`}>
                                    <div className="relative aspect-[3/2] overflow-hidden mb-4">
                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[10px] tracking-[0.15em] uppercase text-luxury-champagne font-sans">
                                            {post.readTime}
                                        </span>
                                        <span className="text-luxury-sand text-[10px]">·</span>
                                        <span className="text-[10px] tracking-[0.15em] uppercase text-luxury-graphite-light font-sans">
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                year: 'numeric',
                                            })}
                                        </span>
                                    </div>
                                    <h2 className="font-display text-xl text-luxury-graphite-deep group-hover:text-luxury-graphite transition-colors mb-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-luxury-graphite-light leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                </Link>
                            </motion.article>
                        ))}
                    </motion.div>
                </Container>
            </Section>
        </PageTransition>
    );
}
