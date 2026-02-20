import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import MobileNavbar from './MobileNavbar';
import Topbar from './Topbar';

const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close sidebar on mobile route change
    useEffect(() => {
        if (isMobile) {
            setIsSidebarOpen(false);
        }
    }, [location.pathname, isMobile]);

    return (
        <div className="flex h-screen overflow-hidden bg-background print:h-auto print:bg-white print:overflow-visible">
            {/* Desktop/Tablet Sidebar */}
            {!isMobile && (
                <div className="print:hidden h-full">
                    <Sidebar
                        isOpen={isSidebarOpen}
                        setIsOpen={setIsSidebarOpen}
                    />
                </div>
            )}

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col relative w-full h-full overflow-hidden print:overflow-visible">
                {/* Mobile Navbar / Topbar */}
                <div className="print:hidden">
                    {isMobile ? (
                        <MobileNavbar toggleSidebar={() => setIsSidebarOpen(true)} />
                    ) : (
                        <Topbar />
                    )}
                </div>

                {/* Main Application Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-24 md:pb-6 relative scroll-smooth print:p-0 print:overflow-visible print:bg-white">
                    <Outlet />
                </main>
            </div>

            {/* Mobile Fullscreen Slide Drawer Overlay */}
            {isMobile && isSidebarOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-[#0F172A]/40 backdrop-blur-sm z-40"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                    <div className="fixed inset-y-0 right-0 w-[280px] bg-[#0F172A] z-50 transform transition-transform duration-300 ease-in-out shadow-2xl">
                        <Sidebar isOpen={true} setIsOpen={setIsSidebarOpen} isMobile={true} />
                    </div>
                </>
            )}

        </div>
    );
};

export default MainLayout;
