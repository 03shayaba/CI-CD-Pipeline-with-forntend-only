import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { IoMenu, IoClose, IoChevronDown } from 'react-icons/io5';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-10 pt-2 sm:pt-4 pointer-events-none">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#efcce3] via-[#f6d3b4] to-[#ebccce] bg-opacity-95 shadow-xl border border-white/60 rounded-2xl p-3 sm:px-6 sm:py-3.5 flex justify-between items-center backdrop-blur-lg pointer-events-auto transition-all duration-300">
        
        {/* Brand Logo */}
        <a href="/" className="flex items-center flex-shrink-0 hover:opacity-90 transition">
          <img src={logo} alt="Influtics Logo" className="h-7 sm:h-8 lg:h-9 w-auto object-contain" />
        </a>

        {/* Desktop Navigation (Visible on lg and above) */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
          <ul className="flex items-center space-x-3 xl:space-x-6 text-xs xl:text-sm font-semibold text-gray-900">
            <li>
              <a href="/" className="hover:text-red-500 transition-colors py-2 px-1">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-red-500 transition-colors py-2 px-1">About Me</a>
            </li>

            {/* Streaming Videos Dropdown */}
            <li className="relative group py-2 cursor-pointer">
              <span className="hover:text-red-500 transition-colors flex items-center gap-1">
                Streaming Videos <IoChevronDown className="text-xs text-gray-700 group-hover:rotate-180 transition-transform duration-200" />
              </span>
              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full pt-1 hidden group-hover:block z-50">
                <ul className="bg-white text-gray-800 rounded-xl shadow-2xl border border-gray-100 py-2 w-52 overflow-hidden animate-fadeIn">
                  <li>
                    <a href="/streaming1" className="block px-4 py-2.5 hover:bg-pink-50 hover:text-pink-600 font-medium text-xs xl:text-sm transition">Streaming Video 1</a>
                  </li>
                  <hr className="border-gray-100 my-0.5" />
                  <li>
                    <a href="/streaming2" className="block px-4 py-2.5 hover:bg-pink-50 hover:text-pink-600 font-medium text-xs xl:text-sm transition">Streaming Video 2</a>
                  </li>
                  <hr className="border-gray-100 my-0.5" />
                  <li>
                    <a href="/streaming3" className="block px-4 py-2.5 hover:bg-pink-50 hover:text-pink-600 font-medium text-xs xl:text-sm transition">Streaming Video 3</a>
                  </li>
                  <hr className="border-gray-100 my-0.5" />
                  <li>
                    <a href="/streaming4" className="block px-4 py-2.5 hover:bg-pink-50 hover:text-pink-600 font-medium text-xs xl:text-sm transition">Streaming Video Details</a>
                  </li>
                </ul>
              </div>
            </li>


            {/* Blog Dropdown */}
            <li className="relative group py-2 cursor-pointer">
              <span className="hover:text-red-500 transition-colors flex items-center gap-1">
                Blog <IoChevronDown className="text-xs text-gray-700 group-hover:rotate-180 transition-transform duration-200" />
              </span>
              <div className="absolute left-0 top-full pt-1 hidden group-hover:block z-50">
                <ul className="bg-white text-gray-800 rounded-xl shadow-2xl border border-gray-100 py-2 w-44 overflow-hidden animate-fadeIn">
                  <li>
                    <a href="/blog" className="block px-4 py-2.5 hover:bg-pink-50 hover:text-pink-600 font-medium text-xs xl:text-sm transition">Blog</a>
                  </li>
                  <hr className="border-gray-100 my-0.5" />
                  <li>
                    <a href="/blog-details" className="block px-4 py-2.5 hover:bg-pink-50 hover:text-pink-600 font-medium text-xs xl:text-sm transition">Blog Details</a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a href="/contact" className="hover:text-red-500 transition-colors py-2 px-1">Contact</a>
            </li>
          </ul>

          {/* Follow Button */}
          <button className="bg-gradient-to-r from-[#fea447] via-[#fc6f6c] to-[#f82c9a] text-white font-bold text-xs xl:text-sm px-4 xl:px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition transform duration-200 cursor-pointer whitespace-nowrap flex-shrink-0">
            + Follow button
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-white/50 text-gray-800 hover:bg-white transition text-xl focus:outline-none shadow-sm"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 bg-white/95 text-gray-900 rounded-2xl shadow-2xl p-4 border border-gray-100 backdrop-blur-xl pointer-events-auto animate-fadeIn space-y-2">
          <ul className="flex flex-col space-y-1 text-sm font-semibold">
            <li>
              <a href="/" className="block py-2.5 px-4 rounded-xl hover:bg-pink-50 hover:text-pink-600 transition">Home</a>
            </li>
            <li>
              <a href="/about" className="block py-2.5 px-4 rounded-xl hover:bg-pink-50 hover:text-pink-600 transition">About Me</a>
            </li>

            {/* Mobile Submenu: Streaming */}
            <li>
              <button
                onClick={() => toggleSubmenu('streaming')}
                className="w-full flex justify-between items-center py-2.5 px-4 rounded-xl hover:bg-pink-50 hover:text-pink-600 transition text-left"
              >
                <span>Streaming Videos</span>
                <IoChevronDown className={`transition-transform duration-200 ${openSubmenu === 'streaming' ? 'rotate-180' : ''}`} />
              </button>
              {openSubmenu === 'streaming' && (
                <ul className="pl-4 mt-1 space-y-1 bg-gray-50 rounded-xl p-2 font-normal text-xs text-gray-700">
                  <li><a href="/streaming1" className="block py-2 px-3 hover:text-pink-600 rounded-lg">Streaming Video 1</a></li>
                  <li><a href="/streaming2" className="block py-2 px-3 hover:text-pink-600 rounded-lg">Streaming Video 2</a></li>
                  <li><a href="/streaming3" className="block py-2 px-3 hover:text-pink-600 rounded-lg">Streaming Video 3</a></li>
                  <li><a href="/streaming4" className="block py-2 px-3 hover:text-pink-600 rounded-lg">Streaming Video Details</a></li>
                </ul>
              )}
            </li>


            {/* Mobile Submenu: Blog */}
            <li>
              <button
                onClick={() => toggleSubmenu('blog')}
                className="w-full flex justify-between items-center py-2.5 px-4 rounded-xl hover:bg-pink-50 hover:text-pink-600 transition text-left"
              >
                <span>Blog</span>
                <IoChevronDown className={`transition-transform duration-200 ${openSubmenu === 'blog' ? 'rotate-180' : ''}`} />
              </button>
              {openSubmenu === 'blog' && (
                <ul className="pl-4 mt-1 space-y-1 bg-gray-50 rounded-xl p-2 font-normal text-xs text-gray-700">
                  <li><a href="/blog" className="block py-2 px-3 hover:text-pink-600 rounded-lg">Blog</a></li>
                  <li><a href="/blog-details" className="block py-2 px-3 hover:text-pink-600 rounded-lg">Blog Details</a></li>
                </ul>
              )}
            </li>

            <li>
              <a href="/contact" className="block py-2.5 px-4 rounded-xl hover:bg-pink-50 hover:text-pink-600 transition">Contact</a>
            </li>

            <li className="pt-2">
              <button className="w-full bg-gradient-to-r from-[#fea447] via-[#fc6f6c] to-[#f82c9a] text-white font-bold py-3 rounded-xl shadow-md hover:opacity-95 transition text-sm">
                + Follow button
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;