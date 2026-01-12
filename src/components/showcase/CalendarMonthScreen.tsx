import { ChevronLeft, ChevronRight, Calendar, Plus } from 'lucide-react';
import { AppSidebar } from './AppSidebar';

export const CalendarMonthScreen = () => {
    const days = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'];

    // Generate calendar grid for January 2026
    const calendarDays = [
        [null, null, null, null, 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30, 31],
    ];

    // Appointments data
    const appointments = [
        { day: 5, time: '07:00', patient: 'Dotbin Patient 1', status: 'confirmado' },
        { day: 5, time: '09:30', patient: 'Dotbin Patient 2', status: 'completado' },
        { day: 8, time: '08:00', patient: 'Dotbin Patient 3', status: 'pendiente' },
        { day: 10, time: '07:00', patient: 'Dotbin Patient 4', status: 'confirmado' },
        { day: 10, time: '10:00', patient: 'Dotbin Patient 5', status: 'confirmado' },
        { day: 12, time: '14:00', patient: 'Dotbin Patient 6', status: 'cancelado' },
        { day: 15, time: '09:00', patient: 'Dotbin Patient 7', status: 'completado' },
        { day: 15, time: '11:30', patient: 'Dotbin Patient 8', status: 'completado' },
        { day: 15, time: '15:00', patient: 'Dotbin Patient 9', status: 'confirmado' },
        { day: 18, time: '08:00', patient: 'Dotbin Patient 10', status: 'pendiente' },
        { day: 20, time: '10:00', patient: 'Dotbin Patient 11', status: 'confirmado' },
        { day: 22, time: '07:30', patient: 'Dotbin Patient 12', status: 'completado' },
        { day: 24, time: '13:00', patient: 'Dotbin Patient 13', status: 'cancelado' },
        { day: 27, time: '09:00', patient: 'Dotbin Patient 14', status: 'confirmado' },
        { day: 27, time: '11:00', patient: 'Dotbin Patient 15', status: 'confirmado' },
        { day: 29, time: '08:30', patient: 'Dotbin Patient 16', status: 'pendiente' },
    ];

    const getAppointmentsByDay = (day: number) => {
        return appointments.filter(app => app.day === day);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completado':
                return 'bg-green-100 text-green-700';
            case 'confirmado':
                return 'bg-blue-100 text-blue-700';
            case 'cancelado':
                return 'bg-red-100 text-red-600 line-through opacity-70';
            default:
                return 'bg-primary-100 text-primary-700';
        }
    };

    const getCountColor = (dayAppointments: typeof appointments) => {
        if (dayAppointments.some(app => app.status === 'completado')) {
            return 'bg-green-500';
        }
        if (dayAppointments.some(app => app.status === 'confirmado')) {
            return 'bg-blue-500';
        }
        if (dayAppointments.some(app => app.status === 'cancelado')) {
            return 'bg-red-400';
        }
        return 'bg-primary-500';
    };

    return (
        <div className="flex h-full bg-gradient-to-br from-slate-50 via-white to-primary-50/30">
            <AppSidebar activeItem={1} />

            <div className="flex flex-1 flex-col overflow-hidden p-6">
                {/* Header */}
                <div className="mb-6 flex flex-shrink-0 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100">
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary-500" />
                            <span className="font-semibold text-slate-800">Enero De 2026</span>
                        </div>
                        <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100">
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* View Toggle */}
                        <div className="flex rounded-xl border border-slate-200 bg-white p-1">
                            <button className="rounded-lg px-3 py-1 text-xs font-medium text-slate-500 hover:bg-slate-50">
                                Día
                            </button>
                            <button className="rounded-lg px-3 py-1 text-xs font-medium text-slate-500 hover:bg-slate-50">
                                Semana
                            </button>
                            <button className="rounded-lg bg-primary-100 px-3 py-1 text-xs font-medium text-primary-600">
                                Mes
                            </button>
                        </div>

                        {/* Add Button */}
                        <button className="flex items-center gap-1.5 rounded-xl bg-slate-800 px-4 py-2 text-xs font-medium text-white shadow-lg transition-all hover:bg-slate-700">
                            <Plus className="h-3.5 w-3.5" />
                            Nuevo
                        </button>
                    </div>
                </div>

                {/* Calendar Grid */}
                <div className="glass-panel flex flex-1 flex-col overflow-hidden rounded-2xl">
                    {/* Day Headers */}
                    <div className="grid flex-shrink-0 grid-cols-7 border-b border-slate-100">
                        {days.map((day) => (
                            <div key={day} className="py-3 text-center text-[10px] font-semibold tracking-wider text-slate-400">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Days */}
                    <div className="flex flex-1 flex-col">
                        {calendarDays.map((week, weekIndex) => (
                            <div key={weekIndex} className="grid flex-1 grid-cols-7 border-b border-slate-100 last:border-b-0">
                                {week.map((day, dayIndex) => {
                                    const dayAppointments = day ? getAppointmentsByDay(day) : [];
                                    return (
                                        <div
                                            key={dayIndex}
                                            className={`group relative flex h-full flex-col border-r border-slate-100 p-2 last:border-r-0 transition-colors ${day ? 'hover:bg-primary-50/50' : 'bg-slate-50/50'
                                                }`}
                                        >
                                            {day && (
                                                <>
                                                    <span className={`text-sm font-medium ${day === 12 ? 'text-primary-600' : 'text-slate-600'
                                                        }`}>
                                                        {day}
                                                    </span>
                                                    {/* Appointment count badge */}
                                                    {dayAppointments.length > 0 && (
                                                        <div className={`absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full ${getCountColor(dayAppointments)} text-[8px] font-bold text-white`}>
                                                            {dayAppointments.length}
                                                        </div>
                                                    )}
                                                    {/* Display appointments */}
                                                    <div className="mt-1 space-y-1 overflow-hidden">
                                                        {dayAppointments.slice(0, 2).map((appointment, idx) => (
                                                            <div
                                                                key={idx}
                                                                className={`rounded px-1.5 py-0.5 text-[8px] font-medium ${getStatusColor(appointment.status)}`}
                                                            >
                                                                {appointment.time} - {appointment.patient.split(' ').slice(-1)}
                                                            </div>
                                                        ))}
                                                        {dayAppointments.length > 2 && (
                                                            <div className="px-1.5 text-[8px] font-medium text-slate-400">
                                                                +{dayAppointments.length - 2} más
                                                            </div>
                                                        )}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
