import React from "react";
import Link from "next/link";
import Search from "./Search"; // Ensure path is correct

const Header = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/">
          <img
            src="/logo1.png"  // Ensure the logo image is placed in the public folder
            alt="Spotify"
            className="w-24 h-auto"  // Adjusted width to better match Spotify's logo size
          />
        </Link>

        {/* Search Bar */}
        <div className="flex-1 mx-6">
          <Search />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 items-center">
          <Link
            href="/premium"
            className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
          >
            Premium
          </Link>
          <Link
            href="/support"
            className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
          >
            Support
          </Link>
          <Link
            href="/download"
            className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
          >
            Download
          </Link>
          <div className="border-l border-gray-600 h-6 mx-4"></div>
          <Link
            href="/signup"
            className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
