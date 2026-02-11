export interface Service {
    name: string;
    startingPrice?: string;
    description: string;
    deliverables: string[];
    timeline: string;
    addOns: string[];
}

export interface FAQ {
    question: string;
    answer: string;
}

export const services: Service[] = [
    {
        name: 'Wedding Photography',
        startingPrice: 'From $2,500',
        description: 'Bespoke wedding photography that captures the poetry of your day — from quiet preparations to grand celebrations. Every moment preserved with artistry and intention.',
        deliverables: [
            'Full-day coverage (up to 12 hours)',
            '2 photographers',
            '400+ professionally edited images',
            'Engagement / pre-wedding session',
            'Private online gallery',
            'Print-ready high-resolution files',
            'Premium leather-bound album',
        ],
        timeline: '4–6 weeks delivery, 48-hour sneak peek',
        addOns: ['Drone aerial coverage', 'Second shooter', 'Rush delivery (48h)', 'Fine art prints', 'Additional album'],
    },
    {
        name: 'Cinematic Videography',
        startingPrice: 'From $3,500',
        description: 'Cinematic storytelling that transforms your moments into moving pictures worthy of the silver screen. Every frame crafted with intention and emotion.',
        deliverables: [
            '10–15 minute feature film',
            '3–5 minute highlight reel',
            'Full day coverage',
            '2 videographers',
            'Drone aerial footage',
            'Professional color grading',
            'Licensed music',
            '4K delivery',
        ],
        timeline: '6–8 weeks delivery, same-day preview available',
        addOns: ['Custom soundtrack', 'Behind-the-scenes reel', 'Social media cuts', 'Extended coverage', 'Same-day edit'],
    },
    {
        name: 'Editorial & Fashion',
        startingPrice: 'From $1,500',
        description: 'High-fashion editorial photography for publications, designers, and brands. Where artistic vision meets commercial impact.',
        deliverables: [
            'Half-day or full-day session',
            'Creative direction & concept development',
            'Professional retouching',
            '50+ final images',
            'Publication-ready formats',
            'Digital delivery',
        ],
        timeline: '2–3 weeks delivery',
        addOns: ['Styling coordination', 'Location scouting', 'Models casting', 'Behind-the-scenes video'],
    },
    {
        name: 'Commercial & Brand',
        startingPrice: 'From $2,000',
        description: 'Premium brand photography and videography for hospitality, luxury, and lifestyle clients. Elevating your brand\'s visual identity.',
        deliverables: [
            'Brand consultation & brief',
            'Location photography or studio session',
            'Product & lifestyle imagery',
            '80+ edited images',
            'Usage rights for web & print',
            'Brand guidelines alignment',
        ],
        timeline: '3–4 weeks delivery',
        addOns: ['Brand video (30s/60s)', 'Social media content pack', 'Aerial photography', 'Annual retainer'],
    },
    {
        name: 'Portrait Sessions',
        startingPrice: 'From $800',
        description: 'Intimate portrait sessions that reveal character, confidence, and beauty. From professional headshots to personal artistic portraits.',
        deliverables: [
            '2-hour session',
            'Location of your choice',
            '30+ edited portraits',
            '5 artist-retouched images',
            'Online gallery & digital download',
        ],
        timeline: '1–2 weeks delivery',
        addOns: ['Hair & makeup artist', 'Additional locations', 'Wardrobe changes', 'Fine art prints'],
    },
];

export const processSteps = [
    {
        step: '01',
        title: 'Discover',
        description: 'We begin with a conversation to understand your vision, style, and the story you want to tell.',
    },
    {
        step: '02',
        title: 'Plan',
        description: 'Every detail is carefully planned — from locations and lighting to mood boards and timelines.',
    },
    {
        step: '03',
        title: 'Shoot',
        description: 'The magic happens. With an eye for beauty and a passion for storytelling, we capture your moments.',
    },
    {
        step: '04',
        title: 'Deliver',
        description: 'Your images are meticulously edited, curated, and delivered in a premium gallery experience.',
    },
];

export const faqs: FAQ[] = [
    {
        question: 'How far in advance should I book?',
        answer: 'For weddings and large events, I recommend booking at least 3–6 months in advance. For portrait sessions and commercial work, 2–4 weeks notice is usually sufficient.',
    },
    {
        question: 'Do you travel for destination shoots?',
        answer: 'Absolutely. I regularly work across Sri Lanka and accept international commissions. Travel costs within Sri Lanka are included in premium packages. International travel is quoted separately.',
    },
    {
        question: 'How long does editing take?',
        answer: 'Standard turnaround is 4–6 weeks for weddings and 2–3 weeks for portrait and commercial work. Rush delivery is available. You\'ll receive a sneak peek within 48 hours.',
    },
    {
        question: 'What is your cancellation policy?',
        answer: 'A 30% non-refundable retainer is required to secure your booking. Cancellations more than 60 days before the event are eligible for a partial refund.',
    },
    {
        question: 'Can I request specific editing styles?',
        answer: 'While I maintain a consistent signature aesthetic, I welcome mood boards and references during our consultation to ensure alignment with your vision.',
    },
    {
        question: 'Do you provide raw/unedited files?',
        answer: 'Raw files are not included in standard packages. However, they can be made available upon special request for an additional fee.',
    },
];
