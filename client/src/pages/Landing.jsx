import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowRight, Search, FileText, MonitorPlay, BookOpen, CheckCircle2, Star, Target, Sparkles, Building2, GraduationCap, Users2, ChevronRight } from 'lucide-react';

const Landing = () => {
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-blue-500/30">
            {/* Background Decorative Blur */}
            <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-400/20 blur-[120px] pointer-events-none" />

            {/* Sticky Navigation */}
            <nav className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-sm shadow-blue-500/30">
                            JP
                        </div>
                        <span className="text-xl font-extrabold tracking-tight text-slate-900">JobPortal</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                        <Link to={user ? "/app" : "/login"} className="hidden md:block text-slate-600 hover:text-slate-900 font-semibold transition-colors px-4 py-2">
                            {user ? "Dashboard" : "Sign In"}
                        </Link>
                        <Link to={user ? "/app" : "/login"} className="px-5 py-2 md:py-2.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all active:scale-95 text-sm md:text-base shadow-md">
                            {user ? "Go to Dashboard" : "Get Started"}
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 overflow-hidden">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs md:text-sm font-semibold text-slate-700 mb-6 md:mb-8 hover:border-blue-300 transition-colors animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                        <span className="hidden md:inline">Meet the next generation of career tools</span>
                        <span className="md:hidden">Next-Gen Career Tools</span>
                    </div>

                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 md:mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        Land Your Dream Job <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                            Twice As Fast.
                        </span>
                    </h1>

                    <p className="text-base md:text-2xl text-slate-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-2 md:px-0">
                        The all-in-one AI platform to discover hidden opportunities, build ATS-beating resumes, and ace every interview.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 w-full md:w-auto px-4 md:px-0">
                        <Link to={user ? "/app" : "/login"} className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 rounded-full bg-blue-600 text-white font-bold text-base md:text-lg hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-600/30 flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/20">
                            {user ? 'Go to Dashboard' : 'Start for free today'}
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 md:group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/login" className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 rounded-full bg-white text-slate-700 font-bold border border-slate-200 text-base md:text-lg hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2">
                            See how it works
                        </Link>
                    </div>

                    <div className="mt-10 pt-6 md:mt-12 md:pt-8 flex flex-col items-center w-full max-w-3xl mx-auto animate-in fade-in duration-1000 delay-500 overflow-hidden">
                        <p className="text-[10px] md:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 md:mb-6">Trusted by ambitious students from</p>

                        {/* Desktop View (Static) */}
                        <div className="hidden md:flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><GraduationCap className="w-6 h-6" /> Stanford</div>
                            <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><Building2 className="w-6 h-6" /> MIT</div>
                            <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><Users2 className="w-6 h-6" /> Harvard</div>
                        </div>

                        {/* Mobile View (Scrolling Marquee) */}
                        <div className="md:hidden relative w-full flex overflow-hidden group">
                            <div className="flex w-[200%] animate-[marquee_12s_linear_infinite] opacity-60 grayscale justify-around">
                                <div className="flex items-center gap-1.5 font-bold text-sm text-slate-800 pr-8"><GraduationCap className="w-5 h-5" /> Stanford</div>
                                <div className="flex items-center gap-1.5 font-bold text-sm text-slate-800 pr-8"><Building2 className="w-5 h-5" /> MIT</div>
                                <div className="flex items-center gap-1.5 font-bold text-sm text-slate-800 pr-8"><Users2 className="w-5 h-5" /> Harvard</div>
                                <div className="flex items-center gap-1.5 font-bold text-sm text-slate-800 pr-8"><GraduationCap className="w-5 h-5" /> Stanford</div>
                                <div className="flex items-center gap-1.5 font-bold text-sm text-slate-800 pr-8"><Building2 className="w-5 h-5" /> MIT</div>
                                <div className="flex items-center gap-1.5 font-bold text-sm text-slate-800 pr-8"><Users2 className="w-5 h-5" /> Harvard</div>
                            </div>
                            {/* Gradient edges for smooth fade */}
                            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F8FAFC] to-transparent"></div>
                            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#F8FAFC] to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bento Box Features Section */}
            <section className="py-12 md:py-32 bg-white relative overflow-hidden">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes marquee {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-50%); }
                    }
                `}} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 md:mb-24 px-2">
                        <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-2 md:mb-6 tracking-tight">Everything you need to succeed.</h2>
                        <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto hidden md:block">Skip the generic advice. Our AI analyzes your profile and automatically matches you with the right opportunities.</p>
                    </div>

                    <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 w-full max-w-5xl mx-auto px-1 sm:px-0">

                        {/* Feature 1 */}
                        <Link to="/login" className="group relative overflow-hidden rounded-[16px] md:rounded-[32px] bg-white border border-slate-200 hover:border-blue-300 transition-colors p-2 sm:p-4 md:p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md cursor-pointer hover:-translate-y-1 transform duration-300 active:scale-95 aspect-square">
                            <div className="absolute w-full h-full bg-blue-50/10 group-hover:bg-blue-50/40 transition-colors pointer-events-none"></div>
                            <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-[10px] md:rounded-[20px] bg-blue-50 flex items-center justify-center mb-2 sm:mb-3 md:mb-5 relative z-10 border border-blue-100 group-hover:scale-110 transition-transform">
                                <Search className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-blue-600" />
                            </div>
                            <div className="relative z-10 w-full px-0 sm:px-1">
                                <h3 className="text-[9px] min-[380px]:text-[11px] sm:text-sm md:text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight break-words">AI Job<br className="sm:hidden" /> Finder</h3>
                            </div>
                        </Link>

                        {/* Feature 2 */}
                        <Link to="/login" className="group relative overflow-hidden rounded-[16px] md:rounded-[32px] bg-white border border-slate-200 hover:border-purple-300 transition-colors p-2 sm:p-4 md:p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md cursor-pointer hover:-translate-y-1 transform duration-300 active:scale-95 aspect-square">
                            <div className="absolute w-full h-full bg-purple-50/10 group-hover:bg-purple-50/40 transition-colors pointer-events-none"></div>
                            <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-[10px] md:rounded-[20px] bg-purple-50 flex items-center justify-center mb-2 sm:mb-3 md:mb-5 relative z-10 border border-purple-100 group-hover:scale-110 transition-transform">
                                <FileText className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-purple-600" />
                            </div>
                            <div className="relative z-10 w-full px-0 sm:px-1">
                                <h3 className="text-[9px] min-[380px]:text-[11px] sm:text-sm md:text-xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors leading-tight break-words">ATS resume<br className="sm:hidden" /> builder</h3>
                            </div>
                        </Link>

                        {/* Feature 3 */}
                        <Link to="/login" className="group relative overflow-hidden rounded-[16px] md:rounded-[32px] bg-white border border-slate-200 hover:border-orange-300 transition-colors p-2 sm:p-4 md:p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md cursor-pointer hover:-translate-y-1 transform duration-300 active:scale-95 aspect-square">
                            <div className="absolute w-full h-full bg-orange-50/10 group-hover:bg-orange-50/40 transition-colors pointer-events-none"></div>
                            <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-[10px] md:rounded-[20px] bg-orange-50 flex items-center justify-center mb-2 sm:mb-3 md:mb-5 relative z-10 border border-orange-100 flex-col group-hover:scale-110 transition-transform">
                                <span className="text-[6px] sm:text-[8px] md:text-[10px] font-bold text-orange-600 uppercase tracking-widest leading-none pt-0.5">Soon</span>
                            </div>
                            <div className="relative z-10 w-full px-0 sm:px-1">
                                <h3 className="text-[9px] min-[380px]:text-[11px] sm:text-sm md:text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors leading-tight break-words">Interview<br className="sm:hidden" /> Prep</h3>
                            </div>
                        </Link>

                        {/* Feature 4 */}
                        <Link to="/login" className="group relative overflow-hidden rounded-[16px] md:rounded-[32px] bg-white border border-slate-200 hover:border-emerald-300 transition-colors p-2 sm:p-4 md:p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md cursor-pointer hover:-translate-y-1 transform duration-300 active:scale-95 aspect-square">
                            <div className="absolute w-full h-full bg-emerald-50/10 group-hover:bg-emerald-50/40 transition-colors pointer-events-none"></div>
                            <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-[10px] md:rounded-[20px] bg-emerald-50 flex items-center justify-center mb-2 sm:mb-3 md:mb-5 relative z-10 border border-emerald-100 flex-col group-hover:scale-110 transition-transform">
                                <span className="text-[6px] sm:text-[8px] md:text-[10px] font-bold text-emerald-600 uppercase tracking-widest leading-none pt-0.5">Soon</span>
                            </div>
                            <div className="relative z-10 w-full px-0 sm:px-1">
                                <h3 className="text-[9px] min-[380px]:text-[11px] sm:text-sm md:text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors leading-tight break-words">Skills<br className="sm:hidden" /> Learning</h3>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-12 md:py-24 bg-[#F8FAFC] border-t border-slate-200/50 text-center px-4">
                <div className="max-w-4xl mx-auto bg-white border border-slate-200 p-8 md:p-16 rounded-[32px] md:rounded-[40px] shadow-xl shadow-slate-200/50">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 leading-tight">
                        Stop searching.<br />Start landing.
                    </h2>
                    <p className="text-sm md:text-lg text-slate-600 mb-6 md:mb-10 max-w-xl mx-auto">Join thousands of students who have fast-tracked their careers using our intelligent portal.</p>
                    <Link to={user ? "/app" : "/login"} className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 md:px-10 md:py-4 rounded-full bg-blue-600 text-white font-bold text-sm md:text-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-1">
                        {user ? 'Go to Dashboard' : 'Create Your Free Account'}
                        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                    </Link>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="border-t border-slate-200 bg-white py-8 md:py-10 text-center text-slate-500 text-xs md:text-sm font-medium">
                <p>&copy; {new Date().getFullYear()} AI Job Portal. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Landing;
