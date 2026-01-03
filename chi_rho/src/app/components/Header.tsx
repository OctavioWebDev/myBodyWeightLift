'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 200);
    };

    return (
        <header className="text-white py-3 p-5">
            <div className="container mx-auto space-x-3 flex justify-between items-center">
                <div className="logo">
                    <Image
                        src="/assets/logos/4885c978-6521-4cbf-85d6-fea7774ef2d9.png"
                        alt="Company Logo"
                        width={80}
                        height={50}
                    />
                </div>
                <nav className="flex space-x-2 items-center">
                    <Link href="/" aria-label="Home" className="flex items-center hover:text-gray-400">
                        <FontAwesomeIcon icon={faHome} className="mr-3" />
                    </Link>
                    <div
                        className="relative group"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button 
                            aria-label="Information" 
                            className="flex items-center hover:text-gray-400 p-2 rounded-full hover:bg-gray-800 transition-colors"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <FontAwesomeIcon icon={faCircleInfo} className="text-xl" />
                        </button>
                        <div 
                            className={`absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white text-black rounded-lg shadow-lg z-50 transition-all duration-200 ease-in-out transform ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{ minWidth: '14rem' }}
                        >
                            <div className="px-4 py-2 font-semibold text-gray-700 border-b border-gray-200">
                                Training
                            </div>
                            <Link href="/templates?type=strength" className="block px-4 py-2 hover:bg-gray-100">
                                Strength Training
                            </Link>
                            
                            <Link href="/coaching" className="block px-4 py-2 font-semibold text-gray-700 border-t border-b border-gray-200 mt-1 hover:bg-gray-100">
                                Coaching
                            </Link>
                            <Link href="/coaching/in-person" className="block px-4 py-2 hover:bg-gray-100">
                                In-Person Coaching
                            </Link>
                            <Link href="/coaching/online" className="block px-4 py-2 hover:bg-gray-100">
                                Online Coaching
                            </Link>
                            
                            <div className="border-t border-gray-200 mt-1">
                                <Link href="/book" className="block px-4 py-2 hover:bg-gray-100">
                                    The Book
                                </Link>
                                <Link href="/mystory" className="block px-4 py-2 hover:bg-gray-100">
                                    My Story
                                </Link>
                                <Link href="/faq" className="block px-4 py-2 hover:bg-gray-100">
                                    FAQ
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
