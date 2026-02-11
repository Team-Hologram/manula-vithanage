'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Respect prefers-reduced-motion
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        });
        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        const handleScrollLock = (event: Event) => {
            const customEvent = event as CustomEvent<{ lock?: boolean }>;
            if (customEvent.detail?.lock) {
                lenis.stop();
                return;
            }
            lenis.start();
        };
        window.addEventListener('app:scroll-lock', handleScrollLock as EventListener);

        // Support anchor scroll
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                const target = document.querySelector(hash);
                if (target) {
                    lenis.scrollTo(target as HTMLElement);
                }
            }
        };
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            lenis.destroy();
            window.removeEventListener('hashchange', handleHashChange);
            window.removeEventListener(
                'app:scroll-lock',
                handleScrollLock as EventListener
            );
        };
    }, []);

    return <>{children}</>;
}
