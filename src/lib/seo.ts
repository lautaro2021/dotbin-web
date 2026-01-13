import { Metadata } from 'next';

export const siteConfig = {
    name: 'dotbin',
    title: 'dotbin - CRM y Software de Gestión para Medicina Estética y Salud',
    description:
        'Software de gestión médica y CRM especializado para clínicas de medicina estética, centros de salud y consultorios médicos. Gestiona pacientes, agenda turnos, historias clínicas y facturación en una sola plataforma.',
    url: 'https://dotbin.com',
    ogImage: 'https://dotbin.com/og-image.png',
    keywords: [
        'CRM para salud',
        'software médico',
        'software medicina estética',
        'gestión de pacientes',
        'software para clínicas',
        'agenda médica',
        'software salud',
        'CRM medicina',
        'historia clínica electrónica',
        'software para consultorios',
        'gestión de turnos médicos',
        'CRM clínicas estéticas',
        'software facturación médica',
        'plataforma gestión salud',
        'sistema gestión médica',
        'software centro médico',
        'CRM centros de estética',
        'gestión medicina privada',
    ],
};

export const defaultMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [
        {
            name: 'dotbin',
            url: siteConfig.url,
        },
    ],
    creator: 'dotbin',
    publisher: 'dotbin',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'es_ES',
        url: siteConfig.url,
        title: siteConfig.title,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: 'dotbin - Software de Gestión para Medicina Estética',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.title,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: '@dotbin',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: siteConfig.url,
    },
};

export function generateStructuredData() {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: siteConfig.name,
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Medical Practice Management Software',
        operatingSystem: 'Web',
        description: siteConfig.description,
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '250',
        },
        featureList: [
            'Gestión integral de pacientes y fichas médicas',
            'Agenda de turnos y calendario médico',
            'Historia clínica electrónica',
            'Facturación y gestión financiera',
            'Reportes y estadísticas en tiempo real',
            'CRM especializado para medicina estética',
            'Gestión de tratamientos y planes terapéuticos',
            'Dashboard intuitivo y análisis de datos',
        ],
        screenshot: siteConfig.ogImage,
        softwareVersion: '1.0',
        provider: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
        },
        audience: {
            '@type': 'Audience',
            audienceType: [
                'Médicos especializados en medicina estética',
                'Clínicas de medicina estética',
                'Centros de salud privados',
                'Consultorios médicos',
                'Profesionales de la salud',
            ],
        },
    };
}
