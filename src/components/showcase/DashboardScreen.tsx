import { DollarSign, Calendar, Users, TrendingUp, Activity, BarChart3 } from 'lucide-react';
import { AppSidebar } from './AppSidebar';

export const DashboardScreen = () => {
    const stats = [
        { label: 'FACTURACIÓN', value: '$100', icon: DollarSign, color: 'bg-green-100 text-green-600' },
        { label: 'TURNOS', value: '120', icon: Calendar, color: 'bg-blue-100 text-blue-600' },
        { label: 'NUEVOS', value: '+25', icon: Users, color: 'bg-amber-100 text-amber-600' },
        { label: 'TOP SERVICE', value: 'Botox', icon: TrendingUp, color: 'bg-pink-100 text-pink-600' },
    ];

    const chartBars = [40, 65, 45, 80, 55, 70, 60, 85, 50, 75, 65, 90];

    const services = [
        { name: 'Botox', value: 35, color: 'bg-pink-400' },
        { name: 'Rellenos', value: 25, color: 'bg-purple-400' },
        { name: 'Limpieza Facial', value: 20, color: 'bg-blue-400' },
        { name: 'Peeling', value: 12, color: 'bg-amber-400' },
        { name: 'Otros', value: 8, color: 'bg-slate-400' },
    ];

    const monthlyTrend = [
        { month: 'Ene', patients: 45, revenue: 5200 },
        { month: 'Feb', patients: 52, revenue: 6100 },
        { month: 'Mar', patients: 48, revenue: 5800 },
        { month: 'Abr', patients: 61, revenue: 7200 },
        { month: 'May', patients: 58, revenue: 6900 },
        { month: 'Jun', patients: 72, revenue: 8500 },
    ];

    const maxPatients = Math.max(...monthlyTrend.map(m => m.patients));

    return (
        <div className="flex h-full bg-gradient-to-br from-slate-50 via-white to-primary-50/30">
            <AppSidebar activeItem={0} />

            <div className="flex flex-1 flex-col overflow-hidden p-3 sm:p-6 pb-3 sm:pb-6">
                {/* Header */}
                <div className="mb-3 sm:mb-6 shrink-0">
                    <h1 className="text-lg sm:text-2xl font-bold text-slate-800">Hola, Doctor</h1>
                    <p className="text-xs sm:text-sm text-slate-500">Resumen de actividad del centro</p>
                </div>

                {/* Stats Cards */}
                <div className="mb-3 sm:mb-6 grid shrink-0 grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="glass-panel rounded-xl sm:rounded-2xl p-2 sm:p-4 transition-all hover:shadow-lg"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="text-[8px] sm:text-[10px] font-medium tracking-wider text-slate-400">
                                        {stat.label}
                                    </span>
                                    <p className="mt-0.5 sm:mt-1 text-base sm:text-xl font-bold text-slate-800">{stat.value}</p>
                                </div>
                                <div className={`rounded-lg sm:rounded-xl p-1.5 sm:p-2 ${stat.color}`}>
                                    <stat.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Charts Section - Takes remaining height */}
                <div className="grid min-h-0 flex-1 grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 overflow-auto">
                    {/* Occupation Chart */}
                    <div className="glass-panel flex flex-col rounded-xl sm:rounded-2xl p-2 sm:p-4">
                        <div className="mb-2 sm:mb-4 flex shrink-0 items-center justify-between">
                            <span className="text-xs sm:text-base font-semibold text-slate-800">Ocupación</span>
                            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400" />
                        </div>
                        <div className="flex flex-1 items-end gap-1 sm:gap-1.5">
                            {chartBars.map((height, i) => (
                                <div
                                    key={i}
                                    className="flex-1 rounded-t bg-gradient-to-t from-primary-400 to-primary-300 transition-all hover:from-primary-500 hover:to-primary-400"
                                    style={{ height: `${height}%` }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Weekly Revenue */}
                    <div className="glass-panel flex flex-col rounded-xl sm:rounded-2xl p-2 sm:p-4">
                        <div className="mb-2 sm:mb-4 flex shrink-0 items-center justify-between">
                            <span className="text-xs sm:text-base font-semibold text-slate-800">Ingresos Semanales</span>
                            <span className="rounded-full bg-green-100 px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[10px] font-medium text-green-600">
                                EN VIVO
                            </span>
                        </div>
                        <div className="flex flex-1 flex-col justify-center space-y-1.5 sm:space-y-3">
                            {['Lun', 'Mar', 'Mie', 'Jue', 'Vie'].map((day, i) => (
                                <div key={day} className="flex items-center gap-1.5 sm:gap-2">
                                    <span className="w-6 sm:w-8 text-[10px] sm:text-xs text-slate-400">{day}</span>
                                    <div className="h-1.5 sm:h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-primary-400 to-primary-500"
                                            style={{ width: `${[70, 85, 60, 90, 75][i]}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Services Distribution - Hidden on mobile to save space */}
                    <div className="hidden sm:flex glass-panel flex-col rounded-xl sm:rounded-2xl p-2 sm:p-4">
                        <div className="mb-2 sm:mb-4 flex shrink-0 items-center justify-between">
                            <span className="text-xs sm:text-base font-semibold text-slate-800">Servicios Más Solicitados</span>
                            <Activity className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400" />
                        </div>
                        <div className="flex flex-1 flex-col justify-center space-y-1.5 sm:space-y-3">
                            {services.map((service, i) => (
                                <div key={i} className="flex items-center gap-2 sm:gap-3">
                                    <div className="flex w-20 sm:w-28 items-center gap-1.5 sm:gap-2">
                                        <div className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full ${service.color}`} />
                                        <span className="text-[10px] sm:text-xs text-slate-600 truncate">{service.name}</span>
                                    </div>
                                    <div className="h-1.5 sm:h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                                        <div
                                            className={`h-full rounded-full ${service.color}`}
                                            style={{ width: `${service.value}%` }}
                                        />
                                    </div>
                                    <span className="w-6 sm:w-8 text-right text-[10px] sm:text-xs font-medium text-slate-700">
                                        {service.value}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Monthly Trend - Hidden on mobile to save space */}
                    <div className="hidden sm:flex glass-panel flex-col rounded-xl sm:rounded-2xl p-2 sm:p-4">
                        <div className="mb-2 sm:mb-4 flex shrink-0 items-center justify-between">
                            <span className="text-xs sm:text-base font-semibold text-slate-800">Tendencia Mensual</span>
                            <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400" />
                        </div>
                        <div className="flex flex-1 items-end gap-1.5 sm:gap-2">
                            {monthlyTrend.map((data, i) => (
                                <div key={i} className="flex flex-1 flex-col items-center gap-1 sm:gap-2">
                                    <div className="relative flex w-full flex-1 items-end">
                                        <div
                                            className="w-full rounded-t-lg bg-gradient-to-t from-blue-400 to-blue-300 transition-all hover:from-blue-500 hover:to-blue-400"
                                            style={{ height: `${(data.patients / maxPatients) * 100}%` }}
                                        />
                                    </div>
                                    <span className="text-[8px] sm:text-[10px] text-slate-400">{data.month}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-2 sm:mt-3 flex shrink-0 items-center justify-center gap-4 border-t border-slate-100 pt-2 sm:pt-3">
                            <div className="flex items-center gap-1 sm:gap-1.5">
                                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-400" />
                                <span className="text-[8px] sm:text-[10px] text-slate-500">Pacientes/mes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
