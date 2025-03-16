"use client";

import Link from 'next/link';
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for the menu

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${interSans.variable} ${interTight.variable} antialiased`}>
      
        <header className="w-full bg-primary md:bg-primary/60 backdrop-blur-sm text-white text-lg font-medium py-4 flex items-center justify-center space-x-20 md:space-x-0 md:justify-around fixed top-0 left-0 right-0 z-50">
          
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          
          <div className="flex items-center md:space-x-16">
            <Link href="/">
              <img src="/get_repo_crop.png" alt="Logo" className="h-10" />
            </Link>
            {/* Desktop Navigation 
            {/*
            <nav className="hidden md:flex">
            <ul className="flex space-x-16 pt-2">
              <li><a href="#" className="hover:text-gray-300 transition">Services</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Support</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Blog</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Contact</a></li>

            </ul>
          </nav>
          */}
          {/* Mobile Navigation (Hidden by default) */}
          {menuOpen && (
            <nav className="absolute top-16 left-0 w-full bg-primary flex flex-col items-center space-y-4 py-4 md:hidden border-t-1 border-b-4 border-actions">
              {/* <a href="#" className="hover:text-gray-300 transition">Services</a>
              <a href="#" className="hover:text-gray-300 transition">Pricing</a>
              <a href="#" className="hover:text-gray-300 transition">Support</a>
              <a href="#" className="hover:text-gray-300 transition">Blog</a>
              <a href="#" className="hover:text-gray-300 transition">Contact</a>
              <a href="#" className="hover:text-gray-300 transition">Login</a>*/}
              <Link href="/contact" className="px-6 py-3 w-full text-center bg-actions text-white rounded-xl hover:bg-actions-hover transition">
                Contact Us
              </Link>
            </nav>
          )}
          </div>
        
          {/* Navigation Links */}
          <Link href="/contact" className="hidden md:block px-6 py-2 bg-actions text-white rounded-xl hover:bg-actions-hover transition">
            Contact Us
          </Link>
        </header>
        {children}

        {/* Footer */}
        <footer className="w-full bg-primary text-white text-center py-3">
          &copy; {new Date().getFullYear()} Get Repo LLC. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
