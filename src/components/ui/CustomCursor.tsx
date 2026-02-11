'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const prefersReduced = useReducedMotion();

    const handleMouseMove = useCallback((e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        setVisible(true);
    }, []);

    const handleMouseLeave = useCallback(() => setVisible(false), []);

    useEffect(() => {
        if (prefersReduced) return;
        // Only show custom cursor on desktop
        if (typeof window !== 'undefined' && window.innerWidth < 1024) return;

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [prefersReduced, handleMouseMove, handleMouseLeave]);

    if (prefersReduced) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-3 h-3 rounded-full border border-luxury-champagne/60 pointer-events-none z-[9999] mix-blend-normal hidden lg:block"
            animate={{
                x: position.x - 6,
                y: position.y - 6,
                opacity: visible ? 1 : 0,
            }}
            transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
                mass: 0.2,
            }}
        />
    );
}
