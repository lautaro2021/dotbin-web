import { ChevronLeft, Pencil, Phone, Mail, CreditCard, Calendar } from 'lucide-react';
import { AppSidebar } from './AppSidebar';

interface PatientProfileScreenProps {
    activeTab?: number;
}

export const PatientProfileScreen = ({ activeTab = 0 }: PatientProfileScreenProps) => {
    const tabs = ['Ficha Médica', 'Historial de Tratamientos', 'Planes de Tratamiento', 'Consentimientos'];

    return (
        <div className="flex h-full bg-gradient-to-br from-slate-50 via-white to-primary-50/30">
            <AppSidebar activeItem={2} />

            <div className="flex-1 overflow-hidden p-6">
                {/* Header */}
                <div className="mb-6 flex items-center gap-4">
                    <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100">
                        <ChevronLeft className="h-4 w-4" />
                    </button>

                    {/* Avatar */}
                    <div className="h-12 w-12 flex items-center justify-center overflow-hidden rounded-full border border-primary/30 bg-accent shadow-lg">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full">
                            <span className="font-bold text-primary">.b</span>
                        </div>
                    </div>


                    <div>
                        <h1 className="text-xl font-bold text-slate-800">Dotbin Patient</h1>
                        <p className="text-sm text-slate-500">ventas@dotbin.com • 5550000</p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="mb-6 flex gap-6 border-b border-slate-200">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab}
                            className={`relative pb-3 text-sm font-medium transition-colors ${index === activeTab
                                ? 'text-primary-600'
                                : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            {tab}
                            {index === activeTab && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="grid grid-cols-3 gap-6">
                    {/* Medical Info */}
                    <div className="col-span-2">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-slate-800">Información Médica</h2>
                            <button className="flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2 text-xs font-medium text-white shadow-lg transition-all hover:bg-slate-700">
                                <Pencil className="h-3 w-3" />
                                Editar ficha médica
                            </button>
                        </div>

                        <div className="glass-panel rounded-2xl p-4 mb-4">
                            <div className="mb-2 text-[10px] font-medium tracking-wider text-slate-400">Alergias</div>
                            <div className="font-medium text-slate-800">Penicilina</div>
                        </div>

                        <div className="glass-panel rounded-2xl p-4">
                            <div className="mb-2 text-[10px] font-medium tracking-wider text-slate-400">Cirugias</div>
                            <div className="font-medium text-slate-800">Apendicectomía</div>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h2 className="mb-4 text-lg font-semibold text-slate-800">Detalles de contacto</h2>
                        <div className="space-y-3">
                            {[
                                { label: 'TELÉFONO', value: '55500000', icon: Phone },
                                { label: 'DNI', value: '00000001', icon: CreditCard },
                                { label: 'EMAIL', value: 'ventas@dotbin.com', icon: Mail },
                                { label: 'VISITAS TOTALES', value: '12', icon: Calendar },
                            ].map((item) => (
                                <div key={item.label} className="glass-panel rounded-xl p-3">
                                    <div className="mb-1 text-[10px] font-medium tracking-wider text-slate-400">{item.label}</div>
                                    <div className="text-sm font-medium text-slate-800">{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
