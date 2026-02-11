/**
 * Design System Tokens
 * Manula Vithanage — Luxury Portfolio
 */

export const colors = {
    // Luxury whites
    white: '#FEFDFB',
    alabaster: '#F8F6F1',
    ivory: '#F3F0E8',
    pearl: '#E8E4DA',
    sand: '#D4CFC3',

    // Accents
    champagne: '#C9B99A',
    champagneLight: '#E5D9C0',
    gold: '#B8A076',

    // Darks
    graphite: '#3A3A3C',
    graphiteLight: '#6B6B6D',
    graphiteDeep: '#1E1E20',
    black: '#18181A',
} as const;

export const typography = {
    display: {
        family: 'var(--font-cormorant)',
        weights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
    },
    body: {
        family: 'var(--font-inter)',
        weights: { regular: 400, medium: 500, semibold: 600 },
    },
    sizes: {
        hero: 'clamp(3rem, 8vw, 7.5rem)',
        headline: 'clamp(2rem, 5vw, 4rem)',
        subhead: 'clamp(1.25rem, 2.5vw, 1.75rem)',
        body: '1rem',
        small: '0.875rem',
        caption: '0.75rem',
        overline: '0.6875rem',
    },
} as const;

export const spacing = {
    section: 'clamp(5rem, 12vh, 10rem)',
    container: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
    },
    gap: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
    },
} as const;

export const radii = {
    none: '0',
    luxury: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
} as const;

export const shadows = {
    sm: '0 1px 3px rgba(24,24,26,0.04), 0 1px 2px rgba(24,24,26,0.02)',
    md: '0 4px 16px rgba(24,24,26,0.06), 0 1px 4px rgba(24,24,26,0.03)',
    lg: '0 12px 40px rgba(24,24,26,0.08), 0 4px 12px rgba(24,24,26,0.04)',
    xl: '0 24px 64px rgba(24,24,26,0.10), 0 8px 20px rgba(24,24,26,0.05)',
} as const;

export const transitions = {
    luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
    luxurySlow: 'cubic-bezier(0.22, 1, 0.36, 1)',
    duration: {
        fast: '200ms',
        normal: '400ms',
        slow: '600ms',
        slower: '800ms',
        slowest: '1200ms',
    },
} as const;
