export interface Album {
    slug: string;
    title: string;
    mood: string;
    season: string;
    coverImage: string;
    images: string[];
    story: string;
    itemCount: number;
}

/* Replace placeholder images with your real photos */
export const albums: Album[] = [
    {
        slug: 'timeless-weddings',
        title: 'Timeless Weddings',
        mood: 'Romantic & Warm',
        season: 'All Seasons',
        coverImage: '/portfolio/wedding-01.jpg',
        images: ['/portfolio/wedding-01.jpg', '/portfolio/wedding-02.jpg', '/portfolio/wedding-03.jpg', '/portfolio/wedding-04.jpg', '/portfolio/portrait-01.jpg', '/portfolio/portrait-02.jpg'],
        story: 'A curated collection of luxury wedding moments — from intimate beachside ceremonies to grand celebrations in the hills. Each image is a testament to the art of storytelling through light and emotion.',
        itemCount: 48,
    },
    {
        slug: 'portraits-of-soul',
        title: 'Portraits of Soul',
        mood: 'Intimate & Soulful',
        season: 'Golden Hour',
        coverImage: '/portfolio/portrait-01.jpg',
        images: ['/portfolio/portrait-01.jpg', '/portfolio/portrait-02.jpg', '/portfolio/portrait-03.jpg', '/portfolio/editorial-01.jpg', '/portfolio/editorial-02.jpg'],
        story: 'Every face tells a story. This collection explores the depth of human expression through carefully crafted portraiture — from editorial to deeply personal sessions.',
        itemCount: 36,
    },
    {
        slug: 'editorial-visions',
        title: 'Editorial Visions',
        mood: 'Bold & Refined',
        season: 'Year-round',
        coverImage: '/portfolio/editorial-01.jpg',
        images: ['/portfolio/editorial-01.jpg', '/portfolio/editorial-02.jpg', '/portfolio/editorial-03.jpg', '/portfolio/editorial-04.jpg'],
        story: 'High-fashion editorial photography that bridges the gap between commercial appeal and artistic expression. Collaborations with leading stylists, designers, and publications.',
        itemCount: 32,
    },
    {
        slug: 'island-wanderings',
        title: 'Island Wanderings',
        mood: 'Wanderlust & Serenity',
        season: 'Dry Season',
        coverImage: '/portfolio/travel-01.jpg',
        images: ['/portfolio/travel-01.jpg', '/portfolio/travel-02.jpg', '/portfolio/travel-03.jpg', '/portfolio/travel-04.jpg', '/portfolio/commercial-01.jpg'],
        story: 'From the ancient ruins of Anuradhapura to the untouched beaches of the east coast — a visual journey through one of the world\'s most photogenic islands.',
        itemCount: 54,
    },
    {
        slug: 'commercial-works',
        title: 'Commercial Works',
        mood: 'Polished & Premium',
        season: 'Year-round',
        coverImage: '/portfolio/commercial-01.jpg',
        images: ['/portfolio/commercial-01.jpg', '/portfolio/commercial-02.jpg', '/portfolio/commercial-03.jpg', '/portfolio/commercial-04.jpg'],
        story: 'Premium commercial photography and brand campaigns for hospitality, fashion, and luxury lifestyle clients across Sri Lanka and the Indian Ocean region.',
        itemCount: 28,
    },
    {
        slug: 'cinematic-stories',
        title: 'Cinematic Stories',
        mood: 'Dramatic & Filmic',
        season: 'Monsoon',
        coverImage: '/portfolio/cinematic-01.jpg',
        images: ['/portfolio/cinematic-01.jpg', '/portfolio/cinematic-02.jpg', '/portfolio/cinematic-03.jpg', '/portfolio/wedding-film-01.jpg'],
        story: 'Stills from cinematic projects — wedding films, brand documentaries, and artistic short films. Each frame designed to stand alone as a work of visual art.',
        itemCount: 24,
    },
    {
        slug: 'sacred-heritage',
        title: 'Sacred Heritage',
        mood: 'Spiritual & Majestic',
        season: 'Poya Days',
        coverImage: '/portfolio/travel-02.jpg',
        images: ['/portfolio/travel-02.jpg', '/portfolio/travel-03.jpg', '/portfolio/travel-04.jpg'],
        story: 'Sri Lanka\'s ancient temple cities and sacred spaces, photographed in the quiet hours of dawn. A visual meditation on faith, architecture, and timelessness.',
        itemCount: 18,
    },
    {
        slug: 'ocean-blues',
        title: 'Ocean Blues',
        mood: 'Calm & Expressive',
        season: 'Summer',
        coverImage: '/portfolio/portrait-02.jpg',
        images: ['/portfolio/portrait-02.jpg', '/portfolio/portrait-03.jpg', '/portfolio/editorial-02.jpg', '/portfolio/editorial-03.jpg'],
        story: 'The Indian Ocean serves as both backdrop and muse in this collection of coastal portraits and editorial work. Salt, sand, and stories.',
        itemCount: 22,
    },
];
