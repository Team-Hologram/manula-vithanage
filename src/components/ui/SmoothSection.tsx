'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';

interface SmoothSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function SmoothSection({
    children,
    className = '',
    delay = 0,
}: SmoothSectionProps) {
    const prefersReduced = useReducedMotion();

    if (prefersReduced) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
