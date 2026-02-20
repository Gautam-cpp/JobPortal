import { useAuth } from '../../context/AuthContext';
import { Bell, Search } from 'lucide-react';

const Topbar = () => {
    const { user } = useAuth();

    return (
        <div className="h-20 px-8 flex items-center justify-between bg-background z-10 sticky top-0">
            <div className="flex-1">
                <h1 className="text-2xl font-bold tracking-tight text-slate-800 hidden sm:block">Student Dashboard</h1>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search for jobs..."
                        className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-64 transition-all"
                    />
                </div>

                <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <img
                    src={user?.avatar || "https://i.pravatar.cc/150"}
                    alt="Profile"
                    className="w-9 h-9 rounded-full border border-slate-200 cursor-pointer hover:border-blue-500 transition-colors"
                />
            </div>
        </div>
    );
};

export default Topbar;
