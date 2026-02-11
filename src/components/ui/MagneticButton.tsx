'use client';

import { useRef, useState, ReactNode } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
    children: ReactNode;
    href?: string;
    variant?: 'primary' | 'outline';
    type?: 'button' | 'submit';
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

export default function MagneticButton({
    children,
    href,
    variant = 'primary',
    type = 'button',
    onClick,
    className = '',
    disabled = false,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const prefersReduced = useReducedMotion();

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        if (prefersReduced || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPosition({ x: x * 0.15, y: y * 0.15 });
    };

    const handleLeave = () => setPosition({ x: 0, y: 0 });

    const baseClasses = cn(
        'inline-flex items-center justify-center text-[11px] tracking-[0.2em] uppercase font-sans px-7 py-3.5 transition-all duration-500',
        variant === 'primary'
            ? 'bg-luxury-graphite-deep text-luxury-alabaster hover:bg-luxury-graphite border border-luxury-graphite-deep'
            : 'border border-luxury-graphite/20 text-luxury-graphite-deep hover:bg-luxury-graphite-deep hover:text-luxury-alabaster hover:border-luxury-graphite-deep',
        disabled && 'opacity-50 cursor-not-allowed',
        className
    );

    const inner = (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.5 }}
            className="inline-block"
        >
            {href ? (
                <Link href={href} className={baseClasses}>
                    {children}
                </Link>
            ) : (
                <button
                    type={type}
                    onClick={onClick}
                    disabled={disabled}
                    className={baseClasses}
                >
                    {children}
                </button>
            )}
        </motion.div>
    );

    return inner;
}
