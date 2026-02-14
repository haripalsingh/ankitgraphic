import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container mx-auto">
      <header className="fixed top-0 left-0 w-full z-50 bg-white  border-blue-600 border-b">
        <div className="max-w-7xl mx-auto px-6  border-l border-r border-blue-600">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">
                Ankitgraphic
              </span>
            </div>

            {/* Menu */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Work
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                About
              </Link>
              <Link
                href="#"
                className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
