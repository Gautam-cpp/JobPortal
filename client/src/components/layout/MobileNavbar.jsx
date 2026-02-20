import { Menu, Home, Briefcase, BookOpen, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import clsx from 'clsx';

const MobileNavbar = ({ toggleSidebar }) => {
    const location = useLocation();
    const { user } = useAuth();

    const bottomNavItems = [
        { name: 'Dashboard', path: '/app', icon: Home },
        { name: 'Jobs', path: '/app/jobs', icon: Briefcase },
        { name: 'Learn', path: '/app/learning', icon: BookOpen },
        { name: 'Community', path: '/app/community', icon: Users },
    ];

    return (
        <>
            {/* Top Mobile Header */}
            <div className="h-16 px-4 flex items-center justify-between bg-white border-b border-slate-200 sticky top-0 z-30">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3882F6] to-[#1D4ED8] flex items-center justify-center text-white font-bold shadow-sm shadow-blue-500/20">
                        JP
                    </div>
                    <span className="text-lg font-bold tracking-tight text-slate-800">AI Job Portal</span>
                </div>

                <div className="flex items-center gap-3">
                    <img
                        src={user?.avatar || "https://i.pravatar.cc/150"}
                        alt="Profile"
                        className="w-8 h-8 rounded-full border border-slate-200"
                    />
                    <button
                        onClick={toggleSidebar}
                        className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Bottom Mobile Navigation (Floating Snack Bar) */}
            <div className="fixed bottom-4 left-4 right-4 h-16 bg-white/90 backdrop-blur-md border border-slate-200/50 shadow-xl shadow-blue-900/10 rounded-2xl z-40 flex items-center justify-around px-2 pb-safe transition-all">
                {bottomNavItems.map((item) => {
                    const isActive = location.pathname === item.path || (item.path !== '/app' && location.pathname.startsWith(item.path));

                    return (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={clsx(
                                "flex flex-col items-center justify-center w-16 h-full gap-1 transition-all rounded-xl",
                                isActive ? "text-blue-600 bg-blue-50/50" : "text-slate-500 hover:text-slate-800"
                            )}
                        >
                            <item.icon className={clsx("w-5 h-5", isActive ? "stroke-[2.5px]" : "stroke-2")} />
                            <span className="text-[10px] font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default MobileNavbar;
