import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
    return (
        <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
            <div className="relative z-10 mx-auto max-w-5xl text-center">
                {/* Main heading */}
                <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
                    <span className="text-gradient">Software CRM</span>
                    <br />
                    <span className="text-foreground">para Medicina Estética</span>
                </h1>

                {/* Subtitle */}
                <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
                    La plataforma integral de gestión médica para clínicas de medicina estética y centros de salud.
                    CRM especializado, agenda de turnos, historias clínicas electrónicas y gestión de pacientes —
                    todo en un software médico unificado.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button variant="outline" size="lg" className="gap-2 border-foreground/20 px-8 hover:bg-foreground/5" asChild>
                        <Link href="/contacto">
                            <Play className="h-4 w-4" />
                            Agendar una demo
                        </Link>
                    </Button>
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-3 gap-8 border-t border-border pt-10">
                    <div>
                        <div className="text-3xl font-bold text-foreground md:text-4xl">2.5M+</div>
                        <div className="mt-1 text-sm text-muted-foreground">Pacientes gestionados</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-foreground md:text-4xl">99.9%</div>
                        <div className="mt-1 text-sm text-muted-foreground">Tiempo de actividad</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-foreground md:text-4xl">50+</div>
                        <div className="mt-1 text-sm text-muted-foreground">Integraciones</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
