import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
    title: 'Services',
    description:
        'Explore luxury photography and videography services by Manula Vithanage — weddings, editorial, commercial, portraits, and cinematic storytelling.',
};

export default function ServicesPage() {
    return <ServicesContent />;
}
