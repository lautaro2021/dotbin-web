import { useState, useEffect } from 'react';
import { DashboardScreen } from './showcase/DashboardScreen';
import { CalendarDayScreen } from './showcase/CalendarDayScreen';
import { CalendarMonthScreen } from './showcase/CalendarMonthScreen';
import { PatientProfileScreen } from './showcase/PatientProfileScreen';
import { TreatmentPlansScreen } from './showcase/TreatmentPlansScreen';
import { LayoutDashboard, Calendar, Users, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

const screens = [
    { component: DashboardScreen, label: 'Dashboard', icon: LayoutDashboard },
    { component: CalendarDayScreen, label: 'Agenda Diaria', icon: Calendar },
    { component: CalendarMonthScreen, label: 'Agenda Mensual', icon: Calendar },
    { component: PatientProfileScreen, label: 'Ficha Médica', icon: Users },
    { component: TreatmentPlansScreen, label: 'Planes', icon: FileText },
];

export const ProductShowcase = () => {
    const [activeScreen, setActiveScreen] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Auto-advance carousel every 5 seconds (pause on hover)
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setActiveScreen((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [isHovered]);

    const parallaxOffset = Math.min(scrollY * 0.15, 100);
    const ActiveComponent = screens[activeScreen].component;

    const handlePrev = () => {
        setActiveScreen((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveScreen((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="relative px-6 py-20">
            <div className="mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary-600">
                        PRODUCTO
                    </span>
                    <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
                        Una plataforma completa
                    </h2>
                    <p className="mb-4 mx-auto max-w-2xl text-slate-600">
                        Gestiona todo tu centro médico desde una única interfaz intuitiva y elegante.
                    </p>
                </div>

                {/* Screen Selector */}
                <div className="mb-8 flex flex-wrap justify-center gap-2">
                    {/* {screens.map((screen, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveScreen(index)}
                            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${activeScreen === index
                                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                                : 'glass-panel text-slate-600 hover:bg-primary-50 hover:text-primary-600'
                                }`}
                        >
                            <screen.icon className="h-4 w-4" />
                            {screen.label}
                        </button>
                    ))} */}
                </div>

                {/* Browser Window */}
                <div
                    className="mt-24 glass-panel-strong relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/10"
                    style={{
                        transform: `translateY(-${parallaxOffset}px)`,
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Browser chrome */}
                    <div className="flex items-center gap-2 border-b border-slate-200/50 bg-white/50 px-4 py-3">
                        <div className="flex gap-1.5">
                            <div className="h-3 w-3 rounded-full bg-red-400" />
                            <div className="h-3 w-3 rounded-full bg-amber-400" />
                            <div className="h-3 w-3 rounded-full bg-green-400" />
                        </div>
                        <div className="ml-4 flex-1">
                            <div className="mx-auto w-64 rounded-lg bg-slate-100 px-4 py-1.5 text-center text-xs text-slate-500">
                                dotbin.app
                            </div>
                        </div>
                    </div>

                    {/* App Preview */}
                    <div className="aspect-[16/10] overflow-hidden">
                        <ActiveComponent />
                    </div>
                </div>

                {/* Dots indicator */}
                <div className="mt-6 flex justify-center gap-2">
                    {screens.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveScreen(index)}
                            className={`h-2 rounded-full transition-all ${activeScreen === index
                                ? 'w-8 bg-primary'
                                : 'w-2 bg-slate-300 hover:bg-slate-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
