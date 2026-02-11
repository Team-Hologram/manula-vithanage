import type { Metadata } from 'next';
import AlbumsContent from './AlbumsContent';

export const metadata: Metadata = {
    title: 'Albums',
    description:
        'Browse curated photography albums by Manula Vithanage — from timeless weddings to editorial visions and island wanderings.',
};

export default function AlbumsPage() {
    return <AlbumsContent />;
}
