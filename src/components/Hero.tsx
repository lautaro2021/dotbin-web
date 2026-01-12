import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
            <div className="relative z-10 mx-auto max-w-5xl text-center">
                {/* Main heading */}
                <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
                    <span className="text-gradient">Salud</span>
                    <br />
                    <span className="text-foreground">reimaginada.</span>
                </h1>

                {/* Subtitle */}
                <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
                    La plataforma integral para clínicas modernas. Analíticas, agenda,
                    fichas de pacientes y planes de tratamiento — todo en una experiencia unificada.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" className="group gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90">
                        Comenzar prueba gratis
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" size="lg" className="gap-2 border-foreground/20 px-8 hover:bg-foreground/5">
                        <Play className="h-4 w-4" />
                        Ver demo
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
