import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy policy for Manula Vithanage Photography.',
};

export default function PrivacyPage() {
    return (
        <article className="prose-luxury">
            <h1 className="font-display text-headline text-luxury-graphite-deep mb-8">
                Privacy Policy
            </h1>
            <p className="text-xs text-luxury-graphite-light mb-8">
                Last updated: January 2025
            </p>

            <h2 className="font-display text-xl text-luxury-graphite-deep mt-10 mb-4">
                1. Information We Collect
            </h2>
            <p className="text-sm text-luxury-graphite/80 leading-relaxed mb-4">
                We collect information you voluntarily provide when you contact us
                through our website, including your name, email address, phone
                number, and details about your project or event. We also
                automatically collect certain information about your device and
                browsing behaviour through cookies and similar technologies.
            </p>

            <h2 className="font-display text-xl text-luxury-graphite-deep mt-10 mb-4">
                2. How We Use Your Information
            </h2>
            <p className="text-sm text-luxury-graphite/80 leading-relaxed mb-4">
                Your information is used to respond to your inquiries, provide
                photography and videography services, send relevant updates (with
                your consent), improve our website experience, and comply with
                legal obligations.
            </p>

            <h2 className="font-display text-xl text-luxury-graphite-deep mt-10 mb-4">
                3. Data Sharing
            </h2>
            <p className="text-sm text-luxury-graphite/80 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information. We may
                share your data with trusted third-party service providers who
                assist us in operating our website and delivering our services,
                subject to confidentiality agreements.
            </p>

            <h2 className="font-display text-xl text-luxury-graphite-deep mt-10 mb-4">
                4. Data Security
            </h2>
            <p className="text-sm text-luxury-graphite/80 leading-relaxed mb-4">
                We implement reasonable security measures to protect your personal
                information. However, no method of transmission over the Internet
                is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-display text-xl text-luxury-graphite-deep mt-10 mb-4">
                5. Your Rights
            </h2>
            <p className="text-sm text-luxury-graphite/80 leading-relaxed mb-4">
                You have the right to access, correct, or delete your personal
                information. You may also withdraw consent for data processing at
                any time. To exercise these rights, contact us at
                hello@manulavithanage.com.
            </p>

            <h2 className="font-display text-xl text-luxury-graphite-deep mt-10 mb-4">
                6. Contact
            </h2>
            <p className="text-sm text-luxury-graphite/80 leading-relaxed mb-4">
                For privacy-related inquiries, please reach out to
                hello@manulavithanage.com.
            </p>
        </article>
    );
}
