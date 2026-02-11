import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
    title: 'Contact',
    description:
        'Get in touch with Manula Vithanage for luxury photography and videography bookings, collaborations, and inquiries.',
};

export default function ContactPage() {
    return <ContactContent />;
}
