"use client";

import { useEffect, useRef, useState } from 'react';
import { CalendarPlus, ClipboardCheck, ImagePlus, Eye } from 'lucide-react';

const steps = [
    {
        icon: CalendarPlus,
        number: '01',
        title: 'Agendá un turno',
        description: 'Creá turnos en segundos desde el calendario interactivo. Elegí fecha, horario y tratamiento con solo unos clics.',
    },
    {
        icon: ClipboardCheck,
        number: '02',
        title: 'Completá el turno',
        description: 'Registrá la asistencia del paciente y marcá el turno como completado. Todo queda registrado en el historial automáticamente.',
    },
    {
        icon: ImagePlus,
        number: '03',
        title: 'Agregá notas e imágenes',
        description: 'Documentá cada sesión con notas clínicas detalladas y fotografías del tratamiento. Creá un registro visual completo.',
    },
    {
        icon: Eye,
        number: '04',
        title: 'Visualizá el detalle del paciente',
        description: 'Accedé a la ficha completa del paciente con todo su historial, imágenes y evolución del tratamiento en un solo lugar.',
    },
];

export const HowItWorks = () => {
    const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        setVisibleSteps((prev) => new Set(prev).add(index));
                    }
                });
            },
            { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
        );

        stepRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="como-funciona" className="relative px-6 py-32">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <div className="mb-20 text-center">
                    <div className="mb-4 inline-block rounded-full border border-primary/30 bg-accent px-4 py-1.5 text-sm text-accent-foreground">
                        Simple y Efectivo
                    </div>
                    <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                        Cómo funciona Dotbin.
                        <br />
                        <span className="text-muted-foreground">En 4 simples pasos.</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Desde agendar un turno hasta visualizar el historial completo del paciente.
                        Un flujo pensado para que no pierdas tiempo.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Vertical connector line */}
                    <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 md:left-1/2 md:block" />

                    <div className="space-y-16 md:space-y-24">
                        {steps.map((step, index) => {
                            const isVisible = visibleSteps.has(index);
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={step.number}
                                    ref={(el) => { stepRefs.current[index] = el; }}
                                    data-index={index}
                                    className={`relative flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-12 transition-all duration-700 ease-out ${
                                        isVisible
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-12'
                                    } ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                    style={{ transitionDelay: `${100}ms` }}
                                >
                                    {/* Content card */}
                                    <div className="flex-1">
                                        <div className="glass-panel group rounded-2xl p-8 transition-all duration-300 hover:border-primary/30">
                                            <div className="mb-4 flex items-center gap-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-accent transition-colors group-hover:bg-primary/10">
                                                    <step.icon className="h-6 w-6 text-primary" />
                                                </div>
                                                <span className="text-sm font-semibold text-primary/60">
                                                    PASO {step.number}
                                                </span>
                                            </div>
                                            <h3 className="mb-3 text-2xl font-bold">{step.title}</h3>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center node (visible on md+) */}
                                    <div className="absolute left-8 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:left-1/2 md:block">
                                        <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                                            isVisible
                                                ? 'border-primary bg-primary text-white scale-100'
                                                : 'border-primary/30 bg-background text-primary/30 scale-75'
                                        }`}>
                                            <span className="text-xs font-bold">{step.number}</span>
                                        </div>
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden flex-1 md:block" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
