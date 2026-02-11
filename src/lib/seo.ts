export function generateJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                name: 'Manula Vithanage',
                jobTitle: 'Photographer & Videographer',
                url: 'https://manulavithanage.com',
                sameAs: [
                    'https://instagram.com/manulavithanage',
                    'https://youtube.com/@manulavithanage',
                    'https://vimeo.com/manulavithanage',
                    'https://linkedin.com/in/manulavithanage',
                ],
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Colombo',
                    addressCountry: 'LK',
                },
                image: 'https://manulavithanage.com/about-portrait.jpg',
            },
            {
                '@type': 'ProfessionalService',
                name: 'Manula Vithanage Photography',
                description:
                    'International luxury photographer & videographer based in Sri Lanka. Specializing in weddings, editorial, commercial, and cinematic storytelling.',
                url: 'https://manulavithanage.com',
                telephone: '+94771234567',
                email: 'hello@manulavithanage.com',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: '42 Marine Drive',
                    addressLocality: 'Colombo',
                    postalCode: '00300',
                    addressCountry: 'LK',
                },
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 6.9271,
                    longitude: 79.8612,
                },
                areaServed: [
                    { '@type': 'Country', name: 'Sri Lanka' },
                    { '@type': 'Place', name: 'Worldwide' },
                ],
                serviceType: [
                    'Wedding Photography',
                    'Cinematic Videography',
                    'Editorial Photography',
                    'Commercial Photography',
                    'Portrait Photography',
                ],
                priceRange: '$$$$',
            },
        ],
    };
}
