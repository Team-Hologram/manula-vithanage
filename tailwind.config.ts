import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        luxury: {
          white: '#FEFDFB',
          alabaster: '#F8F6F1',
          ivory: '#F3F0E8',
          pearl: '#E8E4DA',
          sand: '#D4CFC3',
          champagne: '#C9B99A',
          'champagne-light': '#E5D9C0',
          gold: '#B8A076',
          graphite: '#3A3A3C',
          'graphite-light': '#6B6B6D',
          'graphite-deep': '#1E1E20',
          black: '#18181A',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        hero: [
          'clamp(3rem, 8vw, 7.5rem)',
          { lineHeight: '0.95', letterSpacing: '-0.03em' },
        ],
        headline: [
          'clamp(2rem, 5vw, 4rem)',
          { lineHeight: '1.1', letterSpacing: '-0.02em' },
        ],
        subhead: [
          'clamp(1.25rem, 2.5vw, 1.75rem)',
          { lineHeight: '1.3', letterSpacing: '-0.01em' },
        ],
      },
      spacing: {
        section: 'clamp(5rem, 12vh, 10rem)',
      },
      borderRadius: {
        luxury: '2px',
      },
      boxShadow: {
        'luxury-sm': '0 1px 3px rgba(24,24,26,0.04), 0 1px 2px rgba(24,24,26,0.02)',
        'luxury-md': '0 4px 16px rgba(24,24,26,0.06), 0 1px 4px rgba(24,24,26,0.03)',
        'luxury-lg': '0 12px 40px rgba(24,24,26,0.08), 0 4px 12px rgba(24,24,26,0.04)',
        'luxury-xl': '0 24px 64px rgba(24,24,26,0.10), 0 8px 20px rgba(24,24,26,0.05)',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'luxury-slow': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        grain: 'grain 8s steps(10) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
