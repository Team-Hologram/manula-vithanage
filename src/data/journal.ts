export interface JournalPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    coverImage: string;
    content: string;
}

/* Replace placeholder images with your real photos */
export const journalPosts: JournalPost[] = [
    {
        slug: 'art-of-golden-hour',
        title: 'The Art of Golden Hour Photography',
        excerpt: 'Why the fleeting moments before sunset produce the most magical photographs, and how to make the most of them.',
        date: '2024-12-15',
        readTime: '5 min read',
        coverImage: '/portfolio/portrait-01.jpg',
        content: 'Golden hour — that ethereal window of warm, diffused light just after sunrise or before sunset — is every photographer\'s most treasured time. The light becomes a collaborator, painting subjects in amber and gold, softening harsh shadows, and creating an atmosphere of quiet magic.\n\nIn my years of shooting across Sri Lanka, I\'ve learned that golden hour is not just about the light. It\'s about the feeling. The way the world seems to slow down, the way people naturally relax into their own beauty. This is when the most authentic moments emerge.\n\nFor portrait sessions, I always recommend scheduling during these hours. The results are transformative — skin glows, backgrounds soften into dreamlike bokeh, and every frame carries an emotional weight that midday light simply cannot achieve.',
    },
    {
        slug: 'destination-wedding-guide',
        title: 'Planning a Destination Wedding in Sri Lanka',
        excerpt: 'Everything you need to know about creating your dream wedding in one of the world\'s most beautiful islands.',
        date: '2024-11-28',
        readTime: '7 min read',
        coverImage: '/portfolio/wedding-01.jpg',
        content: 'Sri Lanka offers an unparalleled canvas for destination weddings: pristine beaches, misty hill country, ancient temples, and luxury resorts that rival the world\'s finest.\n\nHaving photographed weddings across the island for years, I\'ve witnessed the magic that happens when couples choose Sri Lanka as their backdrop. From the golden shores of Bentota to the cool elegance of Nuwara Eliya, each location tells a different love story.\n\nKey considerations: the best months for beach weddings are December through April. Hill country weddings work beautifully year-round. Always book your photographer early — the best dates fill up 6-12 months in advance.',
    },
    {
        slug: 'behind-the-lens',
        title: 'Behind the Lens: My Creative Process',
        excerpt: 'A glimpse into how I approach each project — from initial concept to final delivery.',
        date: '2024-10-10',
        readTime: '6 min read',
        coverImage: '/portfolio/cinematic-01.jpg',
        content: 'Every project begins with a conversation. Before I pick up a camera, I want to understand the story — who you are, what moves you, and what you want to remember.\n\nMy process is deliberately slow and intentional. I don\'t believe in rushing art. From scouting locations to understanding the play of light throughout the day, every detail is considered before the first frame is captured.\n\nPost-production is where the artistic vision fully materializes. My editing style leans towards timeless warmth — images that feel both contemporary and classic. I want your photographs to look as beautiful in 50 years as they do today.',
    },
    {
        slug: 'cinematic-wedding-films',
        title: 'Why Cinematic Wedding Films Matter',
        excerpt: 'Photography freezes a moment; cinematography brings it to life. Here\'s why every couple deserves both.',
        date: '2024-09-05',
        readTime: '4 min read',
        coverImage: '/portfolio/wedding-film-01.jpg',
        content: 'A photograph captures a moment. A film captures a feeling — the quiver in a voice during vows, the laughter that echoes through a reception hall, the first dance as the world fades away.\n\nCinematic wedding films are not just documentation. They are storytelling at its most intimate. When I direct a wedding film, I approach it with the same care as a narrative filmmaker: establishing shots, character moments, emotional arcs.\n\nThe couples who invest in both photography and videography tell me, years later, that the film is what they watch again and again. It\'s the medium that transports them back to that day completely.',
    },
    {
        slug: 'travel-photography-tips',
        title: 'Travel Photography: Capturing Sri Lanka\'s Soul',
        excerpt: 'Tips and insights for photographing the Pearl of the Indian Ocean in all its diversity.',
        date: '2024-08-20',
        readTime: '5 min read',
        coverImage: '/portfolio/travel-01.jpg',
        content: 'Sri Lanka is a photographer\'s paradise. Within a single day, you can move from ancient temple ruins to tropical beaches, from bustling markets to serene tea plantations.\n\nThe key to photographing Sri Lanka is patience. The most beautiful moments often come unplanned — a fisherman casting his net at dawn, monks walking in single file through morning mist, a sudden explosion of color at a temple festival.\n\nMy advice: slow down, observe, and let the island reveal itself to you. The best photographs are not taken; they are received.',
    },
    {
        slug: 'luxury-brand-photography',
        title: 'Elevating Brands Through Visual Storytelling',
        excerpt: 'How premium photography transforms brand perception and drives meaningful engagement.',
        date: '2024-07-12',
        readTime: '6 min read',
        coverImage: '/portfolio/commercial-01.jpg',
        content: 'In the luxury market, perception is everything. The images you use to represent your brand are not just photographs — they are promises of experience, quality, and exclusivity.\n\nWhen I work with hospitality and luxury brands, my goal is to create imagery that feels aspirational yet authentic. Every photograph should make the viewer feel something — the warmth of tropical sunlight, the comfort of fine linens, the thrill of an unspoiled vista.\n\nThe investment in professional brand photography pays dividends far beyond the shoot day. These images become the foundation of your visual identity across every touchpoint.',
    },
];
