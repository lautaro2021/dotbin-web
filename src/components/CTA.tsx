import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const CTA = () => {
    return (
        <section className="relative px-6 py-32">
            <div className="mx-auto max-w-4xl text-center">
                <div className="glass-panel-strong relative overflow-hidden p-12 md:p-16">
                    {/* Background glow */}
                    <div className="absolute inset-0 opacity-40">
                        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[100px]" />
                    </div>

                    <div className="relative z-10">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
                            ¿Listo para transformar
                            <br />
                            tu práctica?
                        </h2>
                        <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
                            Únete a miles de profesionales de la salud que confían en dotbin
                            para optimizar sus operaciones y mejorar los resultados de sus pacientes.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button size="lg" className="group gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90">
                                <Link href="/contacto" className="flex items-center gap-2">
                                    Comenzar prueba gratis
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                        <p className="mt-6 text-sm text-muted-foreground">
                            Sin tarjeta de crédito · 14 días gratis · Cancela cuando quieras
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
