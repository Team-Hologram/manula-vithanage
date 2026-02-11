import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms of service for Manula Vithanage Photography.',
};

export default function TermsPage() {
    return (
        <article className="prose-luxury">
            <h1 className="font-display text-headline text-luxury-graphite-deep mb-8">
                Terms of Service
            </h1>
            <p className="text-xs text-luxury-graphite-light mb-8">
                Last updated: January 2025
            </p>

            <h2 className="font-display text-xl text-luxury-graphite-deep mt-10 mb-4">
                1. Services
            </h2>
            <p className="text-sm text-luxury-graphite/80 leading-relaxed mb-4">
                Manula Vithanage Photography provides professional photography and
                videography services as described on this website. All services are
                subject to availability and confirmation.
            </p>

            <h2 className="font-display text-xl text-luxury-graphite-deep mt-10 mb-4">
                2. Booking & Payment
            </h2>
            <p className="text-sm text-luxury-graphite/80 leading-relaxed mb-4">
                A 30% non-refundable retainer is required to secure your booking
                date. The remaining balance is due 14 days before the event or
                session date. Payment methods and specific terms will be outlined
                in your individual contract.
            </p>

            <h2 className="font-display text-xl text-luxury-graphite-deep mt-10 mb-4">
                3. Cancellations & Rescheduling
            </h2>
            <p className="text-sm text-luxury-graphite/80 leading-relaxed mb-4">
                Cancellations made more than 60 days before the event date are
                eligible for a partial refund (minus the retainer). Cancellations
                within 60 days are non-refundable. Rescheduling is subject to
                availability and must be communicated in writing.
            </p>

            <h2 className="font-display text-xl text-luxury-graphite-deep mt-10 mb-4">
                4. Copyright & Usage
            </h2>
            <p className="text-sm text-luxury-graphite/80 leading-relaxed mb-4">
                All photographs and videos remain the intellectual property of
                Manula Vithanage Photography. Clients receive a personal usage
                license. Commercial usage rights may be negotiated separately.
                Portfolio usage by the photographer is retained unless specifically
                agreed otherwise in writing.
            </p>

            <h2 className="font-display text-xl text-luxury-graphite-deep mt-10 mb-4">
                5. Delivery
            </h2>
            <p className="text-sm text-luxury-graphite/80 leading-relaxed mb-4">
                Delivery timelines are specified per service type and outlined in
                your individual contract. While we strive to meet all deadlines,
                delivery times are estimates and not guarantees.
            </p>

            <h2 className="font-display text-xl text-luxury-graphite-deep mt-10 mb-4">
                6. Liability
            </h2>
            <p className="text-sm text-luxury-graphite/80 leading-relaxed mb-4">
                Manula Vithanage Photography shall not be liable for any failure to
                perform due to unforeseen circumstances beyond our control.
                Liability is limited to the total fees paid for the specific
                service.
            </p>

            <h2 className="font-display text-xl text-luxury-graphite-deep mt-10 mb-4">
                7. Contact
            </h2>
            <p className="text-sm text-luxury-graphite/80 leading-relaxed mb-4">
                For questions about these terms, contact us at
                hello@manulavithanage.com.
            </p>
        </article>
    );
}
