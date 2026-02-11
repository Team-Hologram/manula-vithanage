'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Works', href: '/works' },
    { label: 'Albums', href: '/albums' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury',
                    scrolled
                        ? 'bg-luxury-alabaster/95 backdrop-blur-xl shadow-luxury-sm'
                        : 'bg-transparent'
                )}
            >
                <nav className="max-w-[1440px] mx-auto h-16 md:h-20 px-6 md:px-10 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="font-display text-lg md:text-xl tracking-wide text-luxury-graphite-deep whitespace-nowrap"
                    >
                        Manula{' '}
                        <span className="font-semibold">Vithanage</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-7 xl:gap-9">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    'relative text-[13px] tracking-[0.08em] uppercase font-sans transition-colors duration-300 py-1',
                                    pathname === link.href
                                        ? 'text-luxury-graphite-deep'
                                        : 'text-luxury-graphite-light hover:text-luxury-graphite-deep'
                                )}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <motion.span
                                        layoutId="nav-indicator"
                                        className="absolute -bottom-0.5 left-0 right-0 h-px bg-luxury-champagne"
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <Link
                        href="/contact"
                        className="hidden lg:inline-flex text-[11px] tracking-[0.2em] uppercase font-sans px-5 py-2.5 border border-luxury-graphite/20 text-luxury-graphite-deep hover:bg-luxury-graphite-deep hover:text-luxury-alabaster transition-all duration-400 rounded-full"
                    >
                        Book
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                    >
                        <span
                            className={cn(
                                'w-6 h-px transition-all duration-300 bg-luxury-graphite-deep',
                                mobileOpen && 'rotate-45 translate-y-[3.5px]'
                            )}
                        />
                        <span
                            className={cn(
                                'w-6 h-px transition-all duration-300 bg-luxury-graphite-deep',
                                mobileOpen && '-rotate-45 -translate-y-[3.5px]'
                            )}
                        />
                    </button>
                </nav>
            </header>

            {/* Mobile Menu — Full-screen luxury overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-luxury-alabaster/98 backdrop-blur-2xl flex flex-col items-center justify-center lg:hidden"
                    >
                        <nav className="flex flex-col items-center gap-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: i * 0.06 + 0.1,
                                        duration: 0.5,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            'font-display text-3xl tracking-wide transition-colors',
                                            pathname === link.href
                                                ? 'text-luxury-graphite-deep'
                                                : 'text-luxury-graphite-light'
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.55, duration: 0.5 }}
                                className="mt-6"
                            >
                                <Link
                                    href="/contact"
                                    className="text-xs tracking-[0.2em] uppercase font-sans px-8 py-3 border border-luxury-graphite/20 text-luxury-graphite-deep hover:bg-luxury-graphite-deep hover:text-luxury-alabaster transition-all duration-300"
                                >
                                    Book a Session
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
