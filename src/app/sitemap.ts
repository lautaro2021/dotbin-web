import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;
    const currentDate = new Date();

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/#features`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#showcase`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // Puedes agregar más URLs aquí cuando tengas más páginas
        // Por ejemplo: páginas de blog, documentación, precios, etc.
    ];
}
