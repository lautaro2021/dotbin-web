import { useEffect, useState } from 'react';

export const BackgroundOrbs = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
            {/* Top right orb */}
            <div
                className="glow-orb h-[600px] w-[600px] animate-float"
                style={{
                    top: -100 + scrollY * 0.1,
                    right: -100,
                }}
            />

            {/* Center left orb */}
            <div
                className="glow-orb h-[800px] w-[800px] animate-float-delayed"
                style={{
                    top: 400 - scrollY * 0.15,
                    left: -200,
                }}
            />

            {/* Bottom right orb */}
            <div
                className="glow-orb h-[500px] w-[500px] animate-float-slow"
                style={{
                    bottom: -100 + scrollY * 0.05,
                    right: 100,
                }}
            />

            {/* Grid lines overlay */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `
            linear-gradient(hsl(215 25% 27%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(215 25% 27%) 1px, transparent 1px)
          `,
                    backgroundSize: '100px 100px',
                }}
            />
        </div>
    );
};
