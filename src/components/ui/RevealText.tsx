'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE_LUXURY, DURATION } from '@/lib/motion';

interface RevealTextProps {
    children: string;
    as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
    className?: string;
    delay?: number;
    mode?: 'word' | 'line';
}

export default function RevealText({
    children,
    as: Tag = 'p',
    className = '',
    delay = 0,
    mode = 'word',
}: RevealTextProps) {
    const prefersReduced = useReducedMotion();

    if (prefersReduced) {
        return <Tag className={className}>{children}</Tag>;
    }

    if (mode === 'line') {
        return (
            <Tag className={className}>
                <span className="overflow-hidden inline-block">
                    <motion.span
                        className="inline-block"
                        initial={{ y: '100%', opacity: 0 }}
                        whileInView={{ y: '0%', opacity: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{
                            duration: DURATION.slower,
                            ease: EASE_LUXURY,
                            delay,
                        }}
                    >
                        {children}
                    </motion.span>
                </span>
            </Tag>
        );
    }

    const words = children.split(' ');

    return (
        <Tag className={className}>
            {words.map((word, i) => (
                <span key={i} className="overflow-hidden inline-block mr-[0.25em]">
                    <motion.span
                        className="inline-block"
                        initial={{ y: '100%', opacity: 0, rotateX: 45 }}
                        whileInView={{ y: '0%', opacity: 1, rotateX: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{
                            duration: DURATION.slow,
                            ease: EASE_LUXURY,
                            delay: delay + i * 0.04,
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </Tag>
    );
}
