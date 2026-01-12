import { useEffect, useState } from 'react';

export const MouseFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div
            className="pointer-events-none fixed z-40 h-[400px] w-[400px] rounded-full opacity-30 transition-transform duration-300 ease-out"
            style={{
                left: mousePosition.x - 200,
                top: mousePosition.y - 200,
                background: 'radial-gradient(circle at center, hsl(270 91% 65% / 0.25), transparent 70%)',
                filter: 'blur(40px)',
            }}
        />
    );
};
