'use client';

import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/motion';

interface PageTransitionProps {
    children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    return (
        <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
        >
            {children}
        </motion.div>
    );
}
