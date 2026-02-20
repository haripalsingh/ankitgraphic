"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ankitgraphic from '../../public/images/Ankitgraphic 1.png'

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const pathname = usePathname();


  
  return (
    <div className="container mx-auto">
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-blue-600 border-b">
        <div className="max-w-7xl mx-auto px-6 border-l border-r border-blue-600">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                <img src={ankitgraphic.src} alt="Ankit Graphic" width={296} height={61} />
              </Link>
            </div>

            {/* Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={
                      isActive
                        ? "px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
                        : "text-sm font-medium text-gray-700 hover:text-blue-600"
                    }
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
