"use client";

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductShowcase } from '@/components/ProductShowcase';
import { Features } from '@/components/Features';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { BackgroundOrbs } from '@/components/BackgroundOrbs';
import { MouseFollower } from '@/components/MouseFollower';
import { HowItWorks } from '@/components/HowItWorks';

const Index = () => {
    return (
        <div className="relative min-h-screen overflow-x-hidden">
            {/* Background effects */}
            <div className="mesh-bg" />
            <BackgroundOrbs />
            <MouseFollower />
            <div className="noise-overlay" />

            {/* Content */}
            <Navbar />
            <Hero />
            <ProductShowcase />
            <Features />
            <HowItWorks />
            <CTA />
            <Footer />
        </div>
    );
};

export default Index;
