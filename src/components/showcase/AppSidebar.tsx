import { LayoutDashboard, Calendar, Users, Settings, Building2, LogOut } from 'lucide-react';

interface AppSidebarProps {
    activeItem?: number;
}

export const AppSidebar = ({ activeItem = 0 }: AppSidebarProps) => {
    const menuItems = [
        { icon: LayoutDashboard },
        { icon: Calendar },
        { icon: Users },
        { icon: Settings },
        { icon: Building2 },
    ];

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden sm:flex w-16 flex-col items-center border-r border-slate-200/50 bg-white/30 py-4">
                {/* Logo */}
                <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-accent">
                        <span className="font-bold text-primary">.b</span>
                    </div>
                </div>

                {/* Menu Items */}
                <div className="flex flex-1 flex-col gap-2">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${index === activeItem
                                ? 'bg-primary-100 text-primary-600'
                                : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                                }`}
                        >
                            <item.icon className="h-5 w-5" />
                        </button>
                    ))}
                </div>

                {/* Logout */}
                <button className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-600">
                    <LogOut className="h-5 w-5" />
                </button>
            </div>

            {/* Mobile Compact Sidebar */}
            <div className="sm:hidden flex w-10 flex-col items-center border-r border-slate-200/50 bg-white/30 py-2">
                {/* Logo */}
                <div className="mb-4 flex h-6 w-6 items-center justify-center rounded-lg border border-primary/30 bg-accent">
                    <span className="text-[10px] font-bold text-primary">.b</span>
                </div>

                {/* Menu Items */}
                <div className="flex flex-1 flex-col gap-1">
                    {menuItems.slice(0, 4).map((item, index) => (
                        <button
                            key={index}
                            className={`flex h-6 w-6 items-center justify-center rounded-lg transition-all ${index === activeItem
                                ? 'bg-primary-100 text-primary-600'
                                : 'text-slate-400'
                                }`}
                        >
                            <item.icon className="h-3 w-3" />
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};
