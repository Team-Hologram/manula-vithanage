import { Variants, Transition } from 'framer-motion';

/* ── Easing Constants ── */
export const EASE_LUXURY: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_LUXURY_SLOW: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_SMOOTH: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

/* ── Duration Constants ── */
export const DURATION = {
    fast: 0.3,
    normal: 0.5,
    slow: 0.7,
    slower: 1.0,
    slowest: 1.4,
} as const;

/* ── Transition Presets ── */
export const luxuryTransition: Transition = {
    duration: DURATION.slow,
    ease: EASE_LUXURY,
};

export const slowTransition: Transition = {
    duration: DURATION.slower,
    ease: EASE_LUXURY_SLOW,
};

/* ── Fade Variants ── */
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: DURATION.slow, ease: EASE_LUXURY } },
};

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: DURATION.slower, ease: EASE_LUXURY } },
};

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: DURATION.slow, ease: EASE_LUXURY } },
};

export const fadeInBlur: Variants = {
    hidden: { opacity: 0, filter: 'blur(8px)', y: 20 },
    visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: { duration: DURATION.slower, ease: EASE_LUXURY },
    },
};

/* ── Container Variants ── */
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
};

export const staggerContainerSlow: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

/* ── Scale Variants ── */
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: DURATION.slow, ease: EASE_LUXURY } },
};

/* ── Slide Variants ── */
export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: DURATION.slower, ease: EASE_LUXURY } },
};

export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: DURATION.slower, ease: EASE_LUXURY } },
};

/* ── Page Transition ── */
export const pageTransition = {
    initial: { opacity: 0, y: 12, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -8, filter: 'blur(4px)' },
    transition: { duration: DURATION.normal, ease: EASE_LUXURY },
};

/* ── Reduced Motion Fallbacks ── */
export const reducedFadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
};

/* ── Parallax Constants ── */
export const PARALLAX = {
    hero: { speed: 0.3, offset: 50 },
    section: { speed: 0.15, offset: 30 },
    subtle: { speed: 0.08, offset: 15 },
} as const;

/* ── Reveal Text Variants ── */
export const revealWord: Variants = {
    hidden: { opacity: 0, y: 20, rotateX: 45 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: DURATION.slow, ease: EASE_LUXURY },
    },
};

export const revealLine: Variants = {
    hidden: { opacity: 0, y: '100%' },
    visible: {
        opacity: 1,
        y: '0%',
        transition: { duration: DURATION.slower, ease: EASE_LUXURY },
    },
};
