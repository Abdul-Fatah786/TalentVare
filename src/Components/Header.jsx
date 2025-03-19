import React, { useState } from "react";
import { Search } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 h-[70px] w-full z-50 relative">
            {/* Left Side - Logo and Mobile Menu */}
            <div className="flex items-center space-x-6">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center">
                        <svg width="42" height="39" viewBox="0 0 42 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.2435 0.803527C36.8887 2.41541 37.7919 6.04216 36.2435 8.79579L23.4697 31.2951C21.9214 34.0486 18.4378 34.989 15.7926 33.3771C13.1475 31.7652 12.2443 28.1383 13.7927 25.3847L26.5665 2.88555C28.1146 0.0647459 31.534 -0.808357 34.2435 0.803527Z" fill="#01274E" />
                            <path d="M3.78354 34.8787C7.42862 39.4615 15.2489 39.528 23.0031 35.6758C16.9058 38.2661 11.0073 38.0003 8.15762 34.4137C4.31373 29.5653 7.62743 20.4663 15.6466 14.0237C23.6659 7.58118 33.2755 6.31925 37.1857 11.1677C38.975 13.4259 39.24 16.5475 38.1797 19.9348C40.0354 15.352 39.9693 10.902 37.5171 7.84684C32.9441 2.06854 21.6113 3.4633 12.3329 10.9685C2.98826 18.3407 -0.855634 29.1004 3.78354 34.8787Z" fill="#0154AA" />
                            <path d="M37.7659 21.3668C37.7659 21.3668 40.4716 17.8283 41.1896 14.5337C41.1896 14.5337 40.4716 15.8149 39.312 16.3641C39.312 16.3641 38.1524 20.6348 37.7659 21.3668Z" fill="#0154AA" />
                            <path d="M4.95434 16.2407C6.80554 13.8339 9.06808 11.4938 11.6734 9.48817C12.3591 8.9533 13.1132 8.41846 13.7989 7.95047L11.262 3.73853C9.54805 0.930577 5.91422 0.0614539 3.03459 1.66599C0.223527 3.27053 -0.736354 6.88076 0.909153 9.62187L4.95434 16.2407Z" fill="#0154AA" />
                            <path d="M13.749 32.1378C14.2581 33.0137 14.8944 33.6873 15.7217 34.2261C18.3308 35.8428 21.7671 34.9671 23.2944 32.1378L23.4218 31.8686L27.4946 24.5263C27.0492 25.2671 24.6945 28.3658 22.5308 24.9304L18.4581 17.6554L17.6945 16.2409C17.5671 16.3757 17.4399 16.443 17.3126 16.5776C14.0036 19.4069 11.5216 22.9095 10.3762 26.1428L13.749 32.1378Z" fill="#0154AA" />
                        </svg>
                    </div>
                </div>

                {/* Hamburger Menu (Mobile Only) */}
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="#" className="text-[#0154AA] font-semibold text-sm">
                        Find Jobs
                    </a>
                    <a href="#" className="text-gray-500 font-semibold text-sm">
                        Top Companies
                    </a>
                    <a href="#" className="text-gray-500 font-semibold text-sm">
                        Job Tracker
                    </a>
                    <a href="#" className="text-gray-500 font-semibold text-sm">
                        My Calendar
                    </a>
                    <a href="#" className="text-gray-500 font-semibold text-sm">
                        Documents
                    </a>
                    <a href="#" className="text-gray-500 font-semibold text-sm">
                        Messages
                    </a>
                    <a href="#" className="text-gray-500 font-semibold text-sm">
                        Notifications
                    </a>
                </div>
            </div>

            {/* Middle - Search (Desktop) */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full pl-10 pr-3 py-1.5 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search"
                    />
                </div>
            </div>

            {/* Right Side - Desktop Items */}
            <div className="flex items-center space-x-4">
                <button className="bg-[#0154AA] hover:bg-[#01408A] text-white font-medium text-sm px-4 py-2 rounded-md">
                    Resume Builder
                </button>
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/62d2/428b/cb73207b8b2bb07f3ab9c3d4131e734f?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hFmxAz62hGNmB8Mt0LzbZ4LB7KCzapbR3V0zQ5eHYOd0LknO2j5tq2jZrd2y2g8rDYnqfuWQaWyTY8gKGU7bx8TlgNB1oKRs8fM7QWcpePdGyvbp~MbVnKk~4iqWQRDpipJeJcR3IEvliyeBWz2trutfJR~JEdv6Cx290qVorOYvgstZZIgkXHZAsU8T~OFnLTQ4Kuf~NCX0y00g-0hUUJ4dVzU5KdYVdguihjTIvisS9clu7jjWFt~byjq92eLyFJqTOuWPRtTL2fiasz4~C4kElU5SuBc7~YHgkXCj88YTiywRgQJvGtxmX-M-naWIddNyvaEHxisB14ROH9HZIA__" alt="Profile" className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
                    {/* Mobile Search */}
                    <div className="p-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <Search className="h-4 w-4 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full pl-10 pr-3 py-2"
                                placeholder="Search"
                            />
                        </div>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="px-4 pb-4">
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="text-[#0154AA] font-semibold text-sm py-2">
                                Find Jobs
                            </a>
                            <a href="#" className="text-gray-500 font-semibold text-sm py-2">
                                Top Companies
                            </a>
                            <a href="#" className="text-gray-500 font-semibold text-sm py-2">
                                Job Tracker
                            </a>
                            <a href="#" className="text-gray-500 font-semibold text-sm py-2">
                                My Calendar
                            </a>
                            <a href="#" className="text-gray-500 font-semibold text-sm py-2">
                                Documents
                            </a>
                            <a href="#" className="text-gray-500 font-semibold text-sm py-2">
                                Messages
                            </a>
                            <a href="#" className="text-gray-500 font-semibold text-sm py-2">
                                Notifications
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}