import { BarChart3, Calendar, Users, FileText, Stethoscope, Shield } from 'lucide-react';

const features = [
    {
        icon: BarChart3,
        title: 'Analíticas en Tiempo Real',
        description: 'Paneles completos con información accionable. Rastrea resultados de pacientes, métricas de ingresos y eficiencia operativa.',
    },
    {
        icon: Calendar,
        title: 'Agenda Inteligente',
        description: 'Gestión de citas potenciada por IA. Reduce las ausencias con recordatorios automáticos y optimización inteligente.',
    },
    {
        icon: Users,
        title: 'Base de Pacientes',
        description: 'Registros de pacientes centralizados con búsqueda avanzada. Acceso rápido a datos demográficos, historial y comunicaciones.',
    },
    {
        icon: FileText,
        title: 'Historial Clínico',
        description: 'Trazabilidad completa y datos históricos. Cada interacción, tratamiento y resultado documentado y buscable.',
    },
    {
        icon: Stethoscope,
        title: 'Planes de Tratamiento',
        description: 'Crea, personaliza y rastrea protocolos de tratamiento. Colabora con tu equipo de atención sin problemas.',
    },
    {
        icon: Shield,
        title: 'Seguridad Certificada',
        description: 'Seguridad de nivel empresarial con encriptación de extremo a extremo. Tus datos protegidos por estándares líderes.',
    },
];

export const Features = () => {
    return (
        <section id="features" className="relative px-6 py-32">
            <div className="mx-auto max-w-7xl">
                {/* Section header */}
                <div className="mb-16 text-center">
                    <div className="mb-4 inline-block rounded-full border border-primary/30 bg-accent px-4 py-1.5 text-sm text-accent-foreground">
                        Funcionalidades
                    </div>
                    <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                        Todo lo que necesitas.
                        <br />
                        <span className="text-muted-foreground">Nada que no.</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Diseñado para profesionales de la salud que exigen excelencia.
                        Cada función pensada para flujos de trabajo clínicos.
                    </p>
                </div>

                {/* Features grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="glass-panel group p-6 transition-all duration-300 hover:border-primary/30"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-accent transition-colors group-hover:bg-primary/10">
                                <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
