export type WorkCategory = 'Photo' | 'Video' | 'Commercial' | 'Weddings' | 'Editorial' | 'Travel';

export interface Work {
    slug: string;
    title: string;
    category: WorkCategory;
    type: 'photo' | 'video';
    year: number;
    location: string;
    coverImage: string;
    gallery: string[];
    description: string;
    servicesUsed: string[];
    credits: { role: string; name: string }[];
    highlightMetrics?: { label: string; value: string }[];
}

/* Replace placeholder images with your real photos */
export const works: Work[] = [
    {
        slug: 'eternal-vows-kandy',
        title: 'Eternal Vows',
        category: 'Weddings',
        type: 'photo',
        year: 2024,
        location: 'Kandy, Sri Lanka',
        coverImage: '/portfolio/wedding-01.jpg',
        gallery: ['/portfolio/wedding-01.jpg', '/portfolio/wedding-02.jpg', '/portfolio/wedding-03.jpg', '/portfolio/wedding-04.jpg'],
        description: 'An ethereal celebration of love set against the misty hills of Kandy. Every frame captures the quiet intimacy and grandeur of a ceremony where tradition meets timeless elegance.',
        servicesUsed: ['Photography', 'Photo Editing', 'Album Design'],
        credits: [
            { role: 'Photographer', name: 'Manula Vithanage' },
            { role: 'Assistant', name: 'Kasun Perera' },
            { role: 'Floral Design', name: 'Bloom Studio' },
        ],
        highlightMetrics: [
            { label: 'Photos Delivered', value: '480+' },
            { label: 'Hours of Coverage', value: '12' },
            { label: 'Locations', value: '3' },
        ],
    },
    {
        slug: 'golden-hour-portraits',
        title: 'Golden Hour',
        category: 'Editorial',
        type: 'photo',
        year: 2024,
        location: 'Mirissa, Sri Lanka',
        coverImage: '/portfolio/portrait-01.jpg',
        gallery: ['/portfolio/portrait-01.jpg', '/portfolio/portrait-02.jpg', '/portfolio/portrait-03.jpg'],
        description: 'A portrait session bathed in the warm, amber light of the southern coast. Intimate compositions that reveal the quiet strength and vulnerability of the human form.',
        servicesUsed: ['Portrait Photography', 'Retouching'],
        credits: [
            { role: 'Photographer', name: 'Manula Vithanage' },
            { role: 'Styling', name: 'Nadia Fernando' },
        ],
    },
    {
        slug: 'colombo-fashion-week',
        title: 'Colombo Fashion Week',
        category: 'Editorial',
        type: 'photo',
        year: 2024,
        location: 'Colombo, Sri Lanka',
        coverImage: '/portfolio/editorial-01.jpg',
        gallery: ['/portfolio/editorial-01.jpg', '/portfolio/editorial-02.jpg', '/portfolio/editorial-03.jpg', '/portfolio/editorial-04.jpg'],
        description: 'Behind the curtain at Colombo Fashion Week — raw energy, meticulous artistry, and the electric pulse of Sri Lankan haute couture captured in a series of editorial moments.',
        servicesUsed: ['Event Photography', 'Editorial Photography'],
        credits: [
            { role: 'Photographer', name: 'Manula Vithanage' },
            { role: 'Client', name: 'CFW' },
        ],
        highlightMetrics: [
            { label: 'Designers Covered', value: '18' },
            { label: 'Published In', value: '4 magazines' },
        ],
    },
    {
        slug: 'ceylon-tea-trails',
        title: 'Ceylon Tea Trails',
        category: 'Commercial',
        type: 'video',
        year: 2023,
        location: 'Nuwara Eliya, Sri Lanka',
        coverImage: '/portfolio/commercial-01.jpg',
        gallery: ['/portfolio/commercial-01.jpg', '/portfolio/commercial-02.jpg', '/portfolio/commercial-03.jpg'],
        description: 'A cinematic brand film for Ceylon Tea Trails, showcasing the heritage and luxury of Sri Lanka\'s most iconic tea experience. Aerial cinematography meets intimate storytelling.',
        servicesUsed: ['Cinematography', 'Drone Footage', 'Color Grading', 'Sound Design'],
        credits: [
            { role: 'Director', name: 'Manula Vithanage' },
            { role: 'Client', name: 'Resplendent Ceylon' },
            { role: 'Sound', name: 'Audio Lanka' },
        ],
        highlightMetrics: [
            { label: 'Film Duration', value: '4:30' },
            { label: 'Shoot Days', value: '5' },
            { label: 'Views', value: '120K+' },
        ],
    },
    {
        slug: 'wanderlust-sigiriya',
        title: 'Wanderlust: Sigiriya',
        category: 'Travel',
        type: 'photo',
        year: 2023,
        location: 'Sigiriya, Sri Lanka',
        coverImage: '/portfolio/travel-01.jpg',
        gallery: ['/portfolio/travel-01.jpg', '/portfolio/travel-02.jpg', '/portfolio/travel-03.jpg', '/portfolio/travel-04.jpg'],
        description: 'The ancient rock fortress of Sigiriya, captured at dawn. A meditation on scale, history, and the quiet power of landscapes that have witnessed millennia.',
        servicesUsed: ['Travel Photography', 'Drone Photography'],
        credits: [{ role: 'Photographer', name: 'Manula Vithanage' }],
    },
    {
        slug: 'monsoon-cinema',
        title: 'Monsoon Cinema',
        category: 'Editorial',
        type: 'video',
        year: 2024,
        location: 'Galle, Sri Lanka',
        coverImage: '/portfolio/cinematic-01.jpg',
        gallery: ['/portfolio/cinematic-01.jpg', '/portfolio/cinematic-02.jpg', '/portfolio/cinematic-03.jpg'],
        description: 'A visual poem set during the monsoon season in Galle Fort. Rain-soaked streets, colonial architecture, and the rhythm of life distilled into cinematic frames.',
        servicesUsed: ['Cinematography', 'Editing', 'Color Grading'],
        credits: [
            { role: 'Director', name: 'Manula Vithanage' },
            { role: 'Music', name: 'Original Score' },
        ],
    },
    {
        slug: 'royal-wedding-bentota',
        title: 'A Royal Affair',
        category: 'Weddings',
        type: 'video',
        year: 2024,
        location: 'Bentota, Sri Lanka',
        coverImage: '/portfolio/wedding-film-01.jpg',
        gallery: ['/portfolio/wedding-film-01.jpg', '/portfolio/wedding-film-02.jpg'],
        description: 'A cinematic wedding film that unfolds like a feature. Two families, one beachfront estate, and a celebration that redefined luxury in the southern coast.',
        servicesUsed: ['Wedding Film', 'Drone', 'Same-day Edit'],
        credits: [
            { role: 'Director', name: 'Manula Vithanage' },
            { role: 'Second Camera', name: 'Ravindu Silva' },
        ],
        highlightMetrics: [
            { label: 'Film Duration', value: '18 min' },
            { label: 'Cameras', value: '3' },
        ],
    },
    {
        slug: 'heritage-hotel-campaign',
        title: 'Heritage Reimagined',
        category: 'Commercial',
        type: 'photo',
        year: 2023,
        location: 'Trincomalee, Sri Lanka',
        coverImage: '/portfolio/commercial-02.jpg',
        gallery: ['/portfolio/commercial-02.jpg', '/portfolio/commercial-03.jpg', '/portfolio/commercial-04.jpg'],
        description: 'A luxury hospitality campaign for a heritage boutique hotel, blending architectural photography with lifestyle imagery to convey understated tropical elegance.',
        servicesUsed: ['Hospitality Photography', 'Architectural Photography'],
        credits: [
            { role: 'Photographer', name: 'Manula Vithanage' },
            { role: 'Client', name: 'Jungle Beach Resort' },
        ],
    },
    {
        slug: 'lakeside-dreams',
        title: 'Lakeside Dreams',
        category: 'Weddings',
        type: 'photo',
        year: 2024,
        location: 'Beira Lake, Colombo',
        coverImage: '/portfolio/wedding-02.jpg',
        gallery: ['/portfolio/wedding-02.jpg', '/portfolio/wedding-03.jpg', '/portfolio/wedding-04.jpg'],
        description: 'An intimate lakeside wedding ceremony with golden hour light painting every moment in warmth. Minimalist decor elevated by the natural beauty of the setting.',
        servicesUsed: ['Wedding Photography', 'Pre-wedding Shoot'],
        credits: [
            { role: 'Photographer', name: 'Manula Vithanage' },
            { role: 'Decor', name: 'Petals & Co.' },
        ],
    },
    {
        slug: 'coastal-editorial',
        title: 'Between Sea & Sky',
        category: 'Editorial',
        type: 'photo',
        year: 2024,
        location: 'Arugam Bay, Sri Lanka',
        coverImage: '/portfolio/editorial-02.jpg',
        gallery: ['/portfolio/editorial-02.jpg', '/portfolio/editorial-03.jpg', '/portfolio/editorial-04.jpg'],
        description: 'An editorial fashion series shot on the raw, untamed coastline of Arugam Bay. Sun-bleached textures and ocean mist create a dreamlike visual narrative.',
        servicesUsed: ['Fashion Photography', 'Creative Direction'],
        credits: [
            { role: 'Photographer', name: 'Manula Vithanage' },
            { role: 'Model', name: 'Shanaya De Silva' },
            { role: 'Wardrobe', name: 'ODEL Luxe' },
        ],
    },
    {
        slug: 'temple-of-light',
        title: 'Temple of Light',
        category: 'Travel',
        type: 'photo',
        year: 2023,
        location: 'Anuradhapura, Sri Lanka',
        coverImage: '/portfolio/travel-02.jpg',
        gallery: ['/portfolio/travel-02.jpg', '/portfolio/travel-03.jpg', '/portfolio/travel-04.jpg'],
        description: 'Sacred spaces bathed in golden light. A photographic exploration of Sri Lanka\'s ancient temple cities, where spirituality and architecture converge in quiet magnificence.',
        servicesUsed: ['Travel Photography', 'Documentary'],
        credits: [{ role: 'Photographer', name: 'Manula Vithanage' }],
    },
    {
        slug: 'luxury-resort-film',
        title: 'Paradise Found',
        category: 'Commercial',
        type: 'video',
        year: 2024,
        location: 'Tangalle, Sri Lanka',
        coverImage: '/portfolio/commercial-03.jpg',
        gallery: ['/portfolio/commercial-03.jpg', '/portfolio/commercial-04.jpg'],
        description: 'A cinematic brand film for an ultra-luxury beachfront resort. Capturing the essence of barefoot luxury through sweeping drone shots and intimate guest experiences.',
        servicesUsed: ['Brand Film', 'Drone Cinematography', 'Color Grading'],
        credits: [
            { role: 'Director', name: 'Manula Vithanage' },
            { role: 'Client', name: 'Amanwella' },
        ],
        highlightMetrics: [
            { label: 'Film Duration', value: '3:45' },
            { label: 'Platforms', value: 'Web, Social, TV' },
        ],
    },
];
