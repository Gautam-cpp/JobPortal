import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import {
    Search, FileText, MonitorPlay, BookOpen,
    MapPin, DollarSign, ExternalLink
} from 'lucide-react';

const Dashboard = () => {
    const { user } = useAuth();
    const [recommendedJobs, setRecommendedJobs] = useState([]);
    const [loadingJobs, setLoadingJobs] = useState(true);

    useEffect(() => {
        const fetchRecommended = async () => {
            try {
                // Fetch real jobs, defaulting to intern/entry level roles to fit the "Student" dash context
                const res = await axios.get('/api/jobs/search?role=Intern&location=Remote&type=Internship');
                if (res.data.success && res.data.jobs) {
                    setRecommendedJobs(res.data.jobs.slice(0, 3));
                }
            } catch (error) {
                console.error("Failed to load recommended jobs", error);
            } finally {
                setLoadingJobs(false);
            }
        };
        fetchRecommended();
    }, []);

    const features = [
        { title: 'AI Job Search', desc: 'Find Best Matches', icon: Search, color: 'text-blue-500', bg: 'bg-blue-100', link: '/app/jobs' },
        { title: 'AI Resume Builder', desc: 'Optimized for ATS', icon: FileText, color: 'text-purple-500', bg: 'bg-purple-100', link: '/app/resume' },
        { title: 'Mock Interviews', desc: 'Practice with AI', icon: MonitorPlay, color: 'text-orange-500', bg: 'bg-orange-100', link: '/app/interview' },
        { title: 'Skill Learning', desc: 'Browse Courses', icon: BookOpen, color: 'text-emerald-500', bg: 'bg-emerald-100', link: '/app/learning' },
    ];

    // Features array unchanged


    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">

            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8 flex items-center justify-between border border-blue-100 overflow-hidden relative">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 w-full md:w-2/3">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                        Welcome back, {user?.name.split(' ')[0]}! 👋
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-4 tracking-tight">
                        One-Year Mock Test <br className="hidden md:block" /> & Exam Mastery
                    </h3>
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl font-medium shadow-md shadow-blue-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                        Get Access Now
                    </button>

                    {/* Mobile decorative element */}
                    <div className="absolute right-0 bottom-0 md:hidden opacity-80 pointer-events-none">
                        <div className="w-16 h-16 bg-blue-100 rounded-tl-full rounded-br-2xl flex items-center justify-center p-2 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                            <span className="text-2xl filter drop-shadow-sm transform -rotate-12 translate-x-1 translate-y-1">🚀</span>
                        </div>
                    </div>
                </div>

                {/* Decorative graphic hidden on small screens */}
                <div className="hidden md:flex relative z-10 w-1/3 justify-end pr-8">
                    <div className="w-32 h-40 bg-white rounded-2xl shadow-xl border border-slate-100 rotate-12 flex flex-col items-center justify-center p-4">
                        <div className="w-12 h-12 rounded-full border-4 border-blue-500 flex items-center justify-center mb-2">
                            <span className="text-blue-600 font-bold text-sm">80%</span>
                        </div>
                        <p className="text-[10px] text-center text-slate-500 font-medium">Better chances to crack exams</p>
                    </div>
                </div>
            </div>

            {/* AI Career Tools */}
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-4 h-4 rounded-sm bg-blue-500 rotate-45"></span>
                    <h3 className="text-lg font-bold text-slate-800">AI-Powered Career Tools</h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {features.map((feature, i) => (
                        <Link
                            key={i}
                            to={feature.link}
                            className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
                        >
                            <div className={`w-10 h-10 md:w-10 md:h-10 rounded-lg ${feature.bg} ${feature.color} flex items-center justify-center mb-2 mx-auto md:mb-3 group-hover:scale-110 transition-transform`}>
                                <feature.icon className="w-5 h-5 md:w-5 md:h-5" />
                            </div>
                            <h4 className="font-semibold text-slate-800 text-xs md:text-sm mb-0.5 md:mb-1 text-center">{feature.title}</h4>
                            <p className="text-[10px] md:text-xs text-slate-500 text-center leading-tight">{feature.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Recommended Internships/Jobs */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-sm bg-purple-500 rotate-45"></span>
                        <h3 className="text-lg font-bold text-slate-800">Recommended Internships</h3>
                    </div>
                    <button className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {loadingJobs ? (
                        <>
                            {[1, 2].map(i => (
                                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 flex items-start sm:items-center justify-between gap-4 animate-pulse">
                                    <div className="flex items-start sm:items-center gap-4 flex-1">
                                        <div className="w-12 h-12 rounded-xl bg-slate-200 shrink-0"></div>
                                        <div className="flex-1 space-y-2">
                                            <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                                            <div className="flex gap-2">
                                                <div className="h-3 bg-slate-200 rounded w-16"></div>
                                                <div className="h-3 bg-slate-200 rounded w-16"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 shrink-0">
                                        <div className="w-16 h-6 bg-slate-200 rounded-full hidden sm:block"></div>
                                        <div className="w-7 h-7 bg-slate-200 rounded-lg"></div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : recommendedJobs.length > 0 ? (
                        recommendedJobs.map((job, i) => {
                            const colors = ['bg-red-100 text-red-600 border-red-200', 'bg-blue-100 text-blue-600 border-blue-200', 'bg-green-100 text-green-600 border-green-200', 'bg-purple-100 text-purple-600 border-purple-200', 'bg-orange-100 text-orange-600 border-orange-200'];
                            const fbColor = colors[job.company.length % colors.length];

                            return (
                                <a href={job.link} target="_blank" rel="noopener noreferrer" key={i} className="bg-white p-4 rounded-2xl border border-slate-200 flex items-start sm:items-center justify-between hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group gap-4">
                                    <div className="flex items-start sm:items-center gap-4 flex-1 min-w-0">
                                        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-xl font-bold shadow-sm transition-colors overflow-hidden shrink-0 ${job.logo ? 'bg-white border-slate-200' : fbColor}`}>
                                            {job.logo ? <img src={job.logo} alt={job.company} className="w-full h-full object-cover p-1" /> : job.company.charAt(0).toUpperCase()}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug">{job.title}</h4>
                                            <div className="flex items-center flex-wrap gap-2 text-xs text-slate-500 mt-1.5">
                                                <span className="font-medium">{job.company}</span>
                                                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                                <span>{job.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 shrink-0">
                                        <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                                            {job.type}
                                        </span>
                                        <button className="p-1.5 text-blue-500 hover:text-blue-700 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                                            <ExternalLink className="w-4 h-4" />
                                        </button>
                                    </div>
                                </a>
                            );
                        })
                    ) : (
                        <div className="col-span-1 lg:col-span-2 text-center py-6 text-slate-500">No recommended internships available right now. Try searching for roles directly!</div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
