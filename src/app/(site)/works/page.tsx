import type { Metadata } from 'next';
import WorksContent from './WorksContent';

export const metadata: Metadata = {
    title: 'Works',
    description:
        'Explore the portfolio of Manula Vithanage — luxury photography and cinematic videography across weddings, editorial, commercial, and travel.',
};

export default function WorksPage() {
    return <WorksContent />;
}
