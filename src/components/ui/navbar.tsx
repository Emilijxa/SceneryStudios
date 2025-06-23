"use client"

import Link from "next/link"
import { SignedIn, SignedOut, SignInButton, SignOutButton, useUser } from "@clerk/nextjs"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export const Navbar = () => {
    const { isSignedIn } = useUser();
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <nav className="md:relative text-white fixed top-0 left-0 right-0 w-full z-50 h-16 bg-black/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-between items-center h-full w-full">
                    <div className="flex-1"></div>
                    
                    <div className="flex items-center space-x-4 h-full">
                        {isSignedIn ? (
                            <Link href="/dashboard" className="p-2 font-medium text-white/80 hover:text-white transition-colors duration-200">Dashboard</Link>
                        ) : null}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden fixed top-0 right-0 z-50 p-4 bg-[#2c2c2c] border border-white/5 backdrop-blur-sm rounded-bl-[100px]">
                    <button
                        onClick={toggleMenu}
                        className=""
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6"/>
                        ) : (
                            <Menu className="h-6 w-6"/>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden fixed inset-0 z-40 ${isOpen ? "" : "pointer-events-none"}`}>
                    <div className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isOpen? "opacity-100" : "opacity-0"}`} />
                    
                    <div className={`absolute top-0 left-0 right-0 bg-gradient-to-b from-zinc-900/95 to-zinc-900/98 border-b border-white/10 shadow-2xl transition-all duration-500 ease-out
                                    ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
                        <div className="px-6 pt-20 pb-6 space-y-4 flex flex-col">
                            <Link 
                                href="/" 
                                onClick={closeMenu}
                                className="p-3 font-medium text-lg tracking-wide bg-gradient-to-r from-white/5 to-white/10 rounded-2xl hover:from-white/10 hover:to-white/20 transition-all duration-300"
                            >
                                Home
                            </Link>
                            {isSignedIn ? (
                                <Link 
                                    href="/dashboard"
                                    onClick={closeMenu}
                                    className="p-3 font-medium text-lg tracking-wide bg-gradient-to-r from-white/5 to-white/10 rounded-2xl hover:from-white/10 hover:to-white/20 transition-all duration-300"
                                >
                                    Dashboard
                                </Link>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
