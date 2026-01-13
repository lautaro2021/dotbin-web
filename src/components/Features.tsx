import { BarChart3, Calendar, Users, FileText, Stethoscope, Shield } from 'lucide-react';

const features = [
    {
        icon: BarChart3,
        title: 'Dashboard y Analíticas Médicas',
        description: 'Dashboard integral para centros médicos con métricas en tiempo real. Rastrea resultados de pacientes, ingresos de tratamientos estéticos y eficiencia operativa de tu clínica.',
    },
    {
        icon: Calendar,
        title: 'Agenda de Turnos Médicos',
        description: 'Sistema de gestión de turnos optimizado para clínicas de medicina estética. Reduce ausencias con recordatorios automáticos y optimización inteligente de citas.',
    },
    {
        icon: Users,
        title: 'CRM y Gestión de Pacientes',
        description: 'Software CRM especializado para medicina con base de datos centralizada. Gestiona fichas de pacientes, historial de tratamientos y comunicaciones desde un solo lugar.',
    },
    {
        icon: FileText,
        title: 'Historia Clínica Electrónica',
        description: 'Sistema de historia clínica digital completo. Documenta cada consulta, tratamiento estético y resultado con trazabilidad total y acceso instantáneo.',
    },
    {
        icon: Stethoscope,
        title: 'Gestión de Tratamientos Estéticos',
        description: 'Crea, personaliza y gestiona planes de tratamiento personalizados. Software diseñado para flujos de trabajo de medicina estética y cosmética.',
    },
    {
        icon: Shield,
        title: 'Seguridad y Cumplimiento Médico',
        description: 'Cumple con normativas de protección de datos médicos. Encriptación de extremo a extremo y seguridad certificada para centros de salud.',
    },
];

export const Features = () => {
    return (
        <section id="features" className="relative px-6 py-32">
            <div className="mx-auto max-w-7xl">
                {/* Section header */}
                <div className="mb-16 text-center">
                    <div className="mb-4 inline-block rounded-full border border-primary/30 bg-accent px-4 py-1.5 text-sm text-accent-foreground">
                        Software Completo para Medicina Estética
                    </div>
                    <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                        Todo lo que tu clínica necesita.
                        <br />
                        <span className="text-muted-foreground">En un solo lugar.</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Software médico diseñado para profesionales de la medicina estética que exigen excelencia.
                        Cada funcionalidad pensada para optimizar la gestión de tu centro de salud.
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
