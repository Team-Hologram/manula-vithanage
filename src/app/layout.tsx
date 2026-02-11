import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { FilmGrainProvider } from '@/components/providers/FilmGrainProvider';
import SmoothScroll from '@/components/providers/SmoothScroll';
import { generateJsonLd } from '@/lib/seo';

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-cormorant',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Manula Vithanage — Luxury Photography & Videography',
        template: '%s — Manula Vithanage',
    },
    description:
        'International luxury photographer & videographer based in Sri Lanka. Specializing in weddings, editorial, commercial, and cinematic storytelling.',
    metadataBase: new URL('https://manulavithanage.com'),
    openGraph: {
        title: 'Manula Vithanage — Luxury Photography & Videography',
        description:
            'International luxury photographer & videographer based in Sri Lanka.',
        url: 'https://manulavithanage.com',
        siteName: 'Manula Vithanage',
        images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Manula Vithanage — Luxury Photography & Videography',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = generateJsonLd();

    return (
        <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="bg-luxury-alabaster text-luxury-graphite font-sans overflow-x-hidden">
                <FilmGrainProvider>
                    <SmoothScroll>{children}</SmoothScroll>
                </FilmGrainProvider>
            </body>
        </html>
    );
}
