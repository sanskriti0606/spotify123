import React from 'react';
import Link from 'next/link';
import {
  HiHome,
  HiSearch,
  HiLibrary,
  HiPlusCircle,
  HiHeart,
} from 'react-icons/hi';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-60 bg-spotify-dark text-white p-4 space-y-6">
      <div className="mb-6">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/logo1.png"  // Ensure the logo image is placed in the public folder
            alt="Spotify"
            className="w-36"
          />
        </Link>
      </div>
      <ul className="space-y-4">
        <li>
          <Link href="/" className="flex items-center py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-spotify-gray group">
            <HiHome className="w-6 h-6 mr-3" />
            <span className="group-hover:text-spotify-green">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/search" className="flex items-center py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-spotify-gray group">
            <HiSearch className="w-6 h-6 mr-3" />
            <span className="group-hover:text-spotify-green">Search</span>
          </Link>
        </li>
        <li>
          <Link href="/library" className="flex items-center py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-spotify-gray group">
            <HiLibrary className="w-6 h-6 mr-3" />
            <span className="group-hover:text-spotify-green">Your Library</span>
          </Link>
        </li>
        <li>
          <Link href="/create-playlist" className="flex items-center py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-spotify-gray group">
            <HiPlusCircle className="w-6 h-6 mr-3" />
            <span className="group-hover:text-spotify-green">Create Playlist</span>
          </Link>
        </li>
        <li>
          <Link href="/liked-songs" className="flex items-center py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-spotify-gray group">
            <HiHeart className="w-6 h-6 mr-3" />
            <span className="group-hover:text-spotify-green">Liked Songs</span>
          </Link>
        </li>
      </ul>
      <div className="mt-auto space-y-2">
        <div className="border-t border-spotify-gray py-4">
          <p className="text-sm text-gray-400">
            <Link href="/legal" className="hover:underline">
              Legal
            </Link>{" "}
            ·{" "}
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link href="/cookies" className="hover:underline">
              Cookies
            </Link>{" "}
            ·{" "}
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </p>
        </div>
        <div className="text-sm text-gray-400">
          <Link href="/language" className="hover:underline">
            English
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
