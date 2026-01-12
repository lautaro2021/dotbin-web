import { ChevronLeft, Plus, MoreVertical, Calendar, Clock } from 'lucide-react';
import { AppSidebar } from './AppSidebar';

export const TreatmentPlansScreen = () => {
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
                        <p className="text-sm text-slate-500">ventas@dotbin.com • 55550000</p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="mb-6 flex gap-6 border-b border-slate-200">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab}
                            className={`relative pb-3 text-sm font-medium transition-colors ${index === 2
                                ? 'text-primary-600'
                                : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            {tab}
                            {index === 2 && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-slate-800">Planes Activos</h2>
                    <button className="flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2 text-xs font-medium text-white shadow-lg transition-all hover:bg-slate-700">
                        <Plus className="h-3.5 w-3.5" />
                        Nuevo Plan
                    </button>
                </div>

                {/* Treatment Plan Card */}
                <div className="glass-panel rounded-2xl border-l-4 border-l-primary-500 p-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <span className="mb-1 inline-block rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-green-600">
                                EN CURSO
                            </span>
                            <h3 className="text-base font-semibold text-slate-800">Mesoterapia Capilar</h3>
                            <div className="mt-1 flex items-center gap-3 text-xs text-slate-500">
                                <span className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    2026-01-10
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    Quincenal
                                </span>
                            </div>
                        </div>
                        <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100">
                            <MoreVertical className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Progress */}
                    <div className="mt-4">
                        <div className="mb-2 flex items-center justify-between text-xs">
                            <span className="font-medium text-slate-700">Progreso</span>
                            <span className="text-slate-500">0 / 25 Sesiones</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                            <div className="h-full w-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-500" />
                        </div>
                        <div className="mt-1 text-right text-xs text-slate-400">0% Completado</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
