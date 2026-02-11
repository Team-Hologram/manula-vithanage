'use client';

import Link from 'next/link';

const navLinks = [
    { label: 'Works', href: '/works' },
    { label: 'Albums', href: '/albums' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
];

const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com/manulavithanage' },
    { label: 'YouTube', href: 'https://youtube.com/@manulavithanage' },
    { label: 'Vimeo', href: 'https://vimeo.com/manulavithanage' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/manulavithanage' },
];

export default function Footer() {
    return (
        <footer className="border-t border-luxury-sand/40">
            <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="font-display text-2xl text-luxury-graphite-deep mb-3">
                            Manula <span className="font-semibold">Vithanage</span>
                        </h3>
                        <p className="text-sm text-luxury-graphite-light leading-relaxed max-w-sm">
                            International luxury photographer & cinematic videographer.
                            Based in Sri Lanka, available worldwide.
                        </p>
                        <p className="mt-4 text-xs text-luxury-champagne tracking-[0.15em] uppercase">
                            Sri Lanka • Worldwide
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[11px] tracking-[0.2em] uppercase text-luxury-graphite-light/60 mb-4 font-sans">
                            Navigate
                        </h4>
                        <div className="flex flex-col gap-2.5">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-luxury-graphite-light hover:text-luxury-graphite-deep transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social + Legal */}
                    <div>
                        <h4 className="text-[11px] tracking-[0.2em] uppercase text-luxury-graphite-light/60 mb-4 font-sans">
                            Connect
                        </h4>
                        <div className="flex flex-col gap-2.5 mb-8">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-luxury-graphite-light hover:text-luxury-graphite-deep transition-colors duration-300"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <h4 className="text-[11px] tracking-[0.2em] uppercase text-luxury-graphite-light/60 mb-3 font-sans">
                            Legal
                        </h4>
                        <div className="flex flex-col gap-2.5">
                            <Link
                                href="/privacy"
                                className="text-sm text-luxury-graphite-light hover:text-luxury-graphite-deep transition-colors duration-300"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-sm text-luxury-graphite-light hover:text-luxury-graphite-deep transition-colors duration-300"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="hairline mb-6" />
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-luxury-graphite-light/50">
                        &copy; {new Date().getFullYear()} Manula Vithanage. All rights
                        reserved.
                    </p>
                    <p className="text-xs text-luxury-graphite-light/50">
                        Crafted with precision & passion
                    </p>
                </div>
            </div>
        </footer>
    );
}
