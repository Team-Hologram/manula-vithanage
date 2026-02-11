import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
    title: 'About',
    description:
        'Meet Manula Vithanage — an international luxury photographer & videographer based in Sri Lanka, crafting cinematic stories and timeless frames.',
};

export default function AboutPage() {
    return <AboutContent />;
}
