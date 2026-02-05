import { ChevronLeft, ChevronRight, Calendar, Users, Plus, MoreVertical, Clock } from 'lucide-react';
import { AppSidebar } from './AppSidebar';

export const CalendarDayScreen = () => {
    const timeSlots = ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'];

    const appointments = [
        {
            time: '07:00',
            patient: 'Dotbin Patient 1',
            doctor: 'Dr. Dotbin',
            treatment: 'Limpieza facial profunda',
            price: '25000',
            duration: '45',
            status: 'confirmado'
        },
        {
            time: '08:00',
            patient: 'Dotbin Patient 2',
            doctor: 'Dr. Martinez',
            treatment: 'Peeling químico',
            price: '32000',
            duration: '60',
            status: 'completado'
        },
        {
            time: '09:00',
            patient: 'Dotbin Patient 3',
            doctor: 'Dr. Dotbin',
            treatment: 'Botox facial',
            price: '45000',
            duration: '30',
            status: 'pendiente'
        },
        {
            time: '10:00',
            patient: 'Dotbin Patient 4',
            doctor: 'Dr. Rodriguez',
            treatment: 'Relleno de ácido hialurónico',
            price: '38000',
            duration: '45',
            status: 'cancelado'
        },
        {
            time: '11:00',
            patient: 'Dotbin Patient 5',
            doctor: 'Dr. Dotbin',
            treatment: 'Microdermoabrasión',
            price: '28000',
            duration: '50',
            status: 'confirmado'
        }
    ];

    const getAppointmentStyles = (status: string) => {
        switch (status) {
            case 'completado':
                return {
                    container: 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50/50',
                    statusText: 'text-green-600',
                    statusLabel: 'COMPLETADO'
                };
            case 'confirmado':
                return {
                    container: 'border-blue-500 bg-gradient-to-r from-blue-50 to-sky-50/50',
                    statusText: 'text-blue-600',
                    statusLabel: 'CONFIRMADO'
                };
            case 'cancelado':
                return {
                    container: 'border-red-400 bg-gradient-to-r from-red-50 to-rose-50/50 opacity-60',
                    statusText: 'text-red-600',
                    statusLabel: 'CANCELADO'
                };
            default:
                return {
                    container: 'border-primary-500 bg-gradient-to-r from-primary-50 to-pink-50/50',
                    statusText: 'text-primary-600',
                    statusLabel: 'PENDIENTE'
                };
        }
    };

    return (
        <div className="flex h-full bg-gradient-to-br from-slate-50 via-white to-primary-50/30">
            <AppSidebar activeItem={1} />

            <div className="flex-1 overflow-hidden p-3 sm:p-6 pb-3 sm:pb-6">
                {/* Header */}
                <div className="mb-3 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button className="rounded-lg p-1 sm:p-1.5 text-slate-400 hover:bg-slate-100">
                            <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                        </button>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-primary-500" />
                            <span className="text-xs sm:text-base font-semibold text-slate-800">9 De Enero De 2026</span>
                        </div>
                        <button className="rounded-lg p-1 sm:p-1.5 text-slate-400 hover:bg-slate-100">
                            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                        </button>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* View Toggle */}
                        <div className="flex rounded-lg sm:rounded-xl border border-slate-200 bg-white p-0.5 sm:p-1">
                            <button className="rounded-md sm:rounded-lg bg-primary-100 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-primary-600">
                                Día
                            </button>
                            <button className="rounded-md sm:rounded-lg px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-slate-500 hover:bg-slate-50">
                                Semana
                            </button>
                            <button className="rounded-md sm:rounded-lg px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-slate-500 hover:bg-slate-50">
                                Mes
                            </button>
                        </div>

                        {/* Add Button */}
                        <button className="flex items-center gap-1 sm:gap-1.5 rounded-lg sm:rounded-xl bg-slate-800 px-2 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium text-white shadow-lg transition-all hover:bg-slate-700">
                            <Plus className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                            <span className="hidden sm:inline">Nuevo</span>
                        </button>
                    </div>
                </div>

                {/* Calendar Grid */}
                <div className="glass-panel h-[calc(100%-4rem)] sm:h-[calc(100%-5rem)] overflow-y-auto rounded-xl sm:rounded-2xl">
                    {timeSlots.map((time) => {
                        const appointment = appointments.find(app => app.time === time);
                        return (
                            <div key={time} className="flex border-b border-slate-100 last:border-b-0">
                                <div className="w-10 sm:w-16 py-2 sm:py-3 pr-2 sm:pr-3 text-right text-[10px] sm:text-xs text-slate-400">{time}</div>
                                <div className="relative flex-1 border-l border-slate-100 py-1.5 sm:py-2 pl-2 sm:pl-3">
                                    {appointment && (
                                        <div className={`group relative rounded-lg sm:rounded-xl border-l-2 sm:border-l-4 ${getAppointmentStyles(appointment.status).container} p-2 sm:p-3 transition-all hover:shadow-md`}>
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h4 className="text-xs sm:text-base font-semibold text-slate-800">{appointment.patient}</h4>
                                                    <span className={`text-[8px] sm:text-[10px] font-medium tracking-wider ${getAppointmentStyles(appointment.status).statusText}`}>
                                                        {getAppointmentStyles(appointment.status).statusLabel}
                                                    </span>
                                                </div>
                                                <button className="opacity-0 transition-opacity group-hover:opacity-100">
                                                    <MoreVertical className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400" />
                                                </button>
                                            </div>
                                            <div className="mt-1 sm:mt-2 flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-slate-500">
                                                <div className="flex items-center gap-1">
                                                    <Users className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                                    <span className="truncate max-w-[60px] sm:max-w-none">{appointment.doctor}</span>
                                                </div>
                                                <span className="hidden sm:inline">{appointment.treatment}</span>
                                            </div>
                                            <div className="mt-1 sm:mt-2 flex items-center justify-between">
                                                <span className="text-xs sm:text-sm font-medium text-slate-700">$ {appointment.price}</span>
                                                <div className="flex items-center gap-1 text-slate-400">
                                                    <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                                    <span className="text-[10px] sm:text-xs">{appointment.duration}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
