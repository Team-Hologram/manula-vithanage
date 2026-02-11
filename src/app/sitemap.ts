import { MetadataRoute } from 'next';
import { works } from '@/data/works';
import { albums } from '@/data/albums';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://manulavithanage.com';

    const staticPages = [
        '',
        '/about',
        '/works',
        '/albums',
        '/services',
        '/contact',
        '/journal',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
        priority: route === '' ? 1 : route === '/works' ? 0.9 : 0.7,
    }));

    const workPages = works.map((work) => ({
        url: `${baseUrl}/works/${work.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const albumPages = albums.map((album) => ({
        url: `${baseUrl}/albums/${album.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...workPages, ...albumPages];
}
