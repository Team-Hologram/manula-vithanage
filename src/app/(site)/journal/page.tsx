import type { Metadata } from 'next';
import JournalContent from './JournalContent';

export const metadata: Metadata = {
    title: 'Journal',
    description:
        'Insights, tips, and stories from behind the lens by Manula Vithanage — luxury photography, cinematic wedding films, and travel photography in Sri Lanka.',
};

export default function JournalPage() {
    return <JournalContent />;
}
