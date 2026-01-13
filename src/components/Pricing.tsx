import { Check, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
    {
        name: 'Básico',
        description: 'Acceso completo al software',
        price: '49',
        features: [
            'Gestión completa de pacientes',
            'Calendario y agenda digital',
            'Fichas clínicas ilimitadas',
            'Planes de tratamiento',
            'Historial odontológico',
            'Recordatorios manuales',
            'Soporte por email',
        ],
        cta: 'Comenzar Ahora',
        popular: false,
    },
    {
        name: 'Avanzado',
        description: 'Todo incluido + Asistente IA',
        price: '99',
        features: [
            'Todo lo del plan Básico',
            'Asistente IA para WhatsApp',
            'Gestión automática de turnos',
            'Reprogramación inteligente',
            'Respuestas automáticas 24/7',
            'Confirmaciones automáticas',
            'Soporte prioritario',
        ],
        cta: 'Comenzar con IA',
        popular: true,
        icon: Bot,
    },
];

export const Pricing = () => {
    return (
        <section id="precios" className="py-24 px-4 relative">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        Elige tu plan
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Planes flexibles que se adaptan a las necesidades de tu consultorio
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative glass-panel rounded-3xl p-8 transition-all duration-300 ${plan.popular
                                ? 'ring-2 ring-primary shadow-lg shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/50'
                                : 'hover:shadow-2xl'
                                }`}
                        >
                            {/* Plan Header */}
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-slate-600 mb-6">{plan.description}</p>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-4xl font-bold text-slate-800">
                                        ${plan.price}
                                    </span>
                                    <span className="text-slate-500">/mes</span>
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div
                                            className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.popular
                                                ? 'bg-primary-500 text-primary'
                                                : 'bg-primary-100 text-primary-600'
                                                }`}
                                        >
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-slate-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Button
                                className={`w-full py-6 text-base font-medium rounded-xl transition-all duration-300 ${plan.popular
                                    ? 'hover:from-primary-600 hover:to-primary-700 text-white shadow-lg shadow-primary-500/30 hover:shadow-primary-500/40'
                                    : 'bg-slate-800 hover:bg-slate-900 text-white'
                                    }`}
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <p className="text-center text-slate-500 mt-12">
                    Todos los planes incluyen 14 días de prueba gratis. Sin tarjeta de crédito.
                </p>
            </div>
        </section>
    );
};