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
    <nav className="fixed w-full z-50 top-0 left-0 px-2 sm:px-6 lg:px-10 pt-2 sm:pt-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-3 sm:p-4 bg-gradient-to-r from-[#efcce3] via-[#f6d3b4] to-[#ebccce] shadow-2xl text-black rounded-xl backdrop-blur-md">
        <div className="flex items-center">
          <a href="/"><img src={logo} alt="Logo" className="h-8 sm:h-9 w-auto" /></a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex items-center space-x-6 font-medium text-sm">
            <li><a href="/" className="hover:text-red-500 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-red-500 transition-colors">About Me</a></li>

            {/* Streaming Videos Dropdown */}
            <li className="relative group text-black cursor-pointer py-2">
              <span className="hover:text-red-500 flex items-center gap-1">
                Streaming Videos <IoChevronDown className="text-xs" />
              </span>
              <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-lg shadow-xl w-52 py-2 z-50 border border-gray-100">
                <li className="px-4 py-2 hover:bg-pink-50 hover:text-pink-500 text-sm">
                  <a href="/streaming1" className="block">Streaming Video 1</a>
                </li>
                <hr className="border-gray-100" />
                <li className="px-4 py-2 hover:bg-pink-50 hover:text-pink-500 text-sm">
                  <a href="/streaming2" className="block">Streaming Video 2</a>
                </li>
                <hr className="border-gray-100" />
                <li className="px-4 py-2 hover:bg-pink-50 hover:text-pink-500 text-sm">
                  <a href="/streaming3" className="block">Streaming Video 3</a>
                </li>
                <hr className="border-gray-100" />
                <li className="px-4 py-2 hover:bg-pink-50 hover:text-pink-500 text-sm">
                  <a href="/streaming4" className="block">Streaming Video Details</a>
                </li>
              </ul>
            </li>

            {/* Pages Dropdown */}
            <li className="relative group text-black cursor-pointer py-2">
              <span className="hover:text-red-500 flex items-center gap-1">
                Pages <IoChevronDown className="text-xs" />
              </span>
              <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-lg shadow-xl w-44 py-2 z-50 border border-gray-100">
                <li className="px-4 py-2 hover:bg-pink-50 hover:text-pink-500 text-sm">
                  <a href="/signuppages" className="block">Sign Up</a>
                </li>
                <hr className="border-gray-100" />
                <li className="px-4 py-2 hover:bg-pink-50 hover:text-pink-500 text-sm">
                  <a href="/signinpage" className="block">Sign In</a>
                </li>
              </ul>
            </li>

            {/* Blog Dropdown */}
            <li className="relative group text-black cursor-pointer py-2">
              <span className="hover:text-red-500 flex items-center gap-1">
                Blog <IoChevronDown className="text-xs" />
              </span>
              <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-lg shadow-xl w-44 py-2 z-50 border border-gray-100">
                <li className="px-4 py-2 hover:bg-pink-50 hover:text-pink-500 text-sm">
                  <a href="/blog" className="block">Blog</a>
                </li>
                <hr className="border-gray-100" />
                <li className="px-4 py-2 hover:bg-pink-50 hover:text-pink-500 text-sm">
                  <a href="/blog-details" className="block">Blog Details</a>
                </li>
              </ul>
            </li>

            <li><a href="/contact" className="hover:text-red-500 transition-colors">Contact</a></li>
          </ul>

          <button className="bg-gradient-to-r from-[#fea447] via-[#fc6f6c] to-[#f82c9a] text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all text-sm">
            + Follow button
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-800 p-1.5 focus:outline-none rounded-lg bg-white/40 hover:bg-white/60 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 bg-white text-black rounded-xl shadow-2xl p-4 border border-gray-100 animate-fadeIn">
          <ul className="flex flex-col space-y-3 font-medium text-sm">
            <li>
              <a href="/" className="block py-2 px-3 rounded-lg hover:bg-pink-50 hover:text-pink-600">Home</a>
            </li>
            <li>
              <a href="/about" className="block py-2 px-3 rounded-lg hover:bg-pink-50 hover:text-pink-600">About Me</a>
            </li>

            {/* Mobile Streaming Dropdown */}
            <li>
              <button
                onClick={() => toggleSubmenu('streaming')}
                className="w-full flex justify-between items-center py-2 px-3 rounded-lg hover:bg-pink-50 hover:text-pink-600"
              >
                Streaming Videos <IoChevronDown className={`transition-transform ${openSubmenu === 'streaming' ? 'rotate-180' : ''}`} />
              </button>
              {openSubmenu === 'streaming' && (
                <ul className="pl-4 mt-1 space-y-1 text-gray-700 bg-gray-50 rounded-lg p-2">
                  <li><a href="/streaming1" className="block py-1.5 px-3 hover:text-pink-600">Streaming Video 1</a></li>
                  <li><a href="/streaming2" className="block py-1.5 px-3 hover:text-pink-600">Streaming Video 2</a></li>
                  <li><a href="/streaming3" className="block py-1.5 px-3 hover:text-pink-600">Streaming Video 3</a></li>
                  <li><a href="/streaming4" className="block py-1.5 px-3 hover:text-pink-600">Streaming Video Details</a></li>
                </ul>
              )}
            </li>

            {/* Mobile Pages Dropdown */}
            <li>
              <button
                onClick={() => toggleSubmenu('pages')}
                className="w-full flex justify-between items-center py-2 px-3 rounded-lg hover:bg-pink-50 hover:text-pink-600"
              >
                Pages <IoChevronDown className={`transition-transform ${openSubmenu === 'pages' ? 'rotate-180' : ''}`} />
              </button>
              {openSubmenu === 'pages' && (
                <ul className="pl-4 mt-1 space-y-1 text-gray-700 bg-gray-50 rounded-lg p-2">
                  <li><a href="/signuppages" className="block py-1.5 px-3 hover:text-pink-600">Sign Up</a></li>
                  <li><a href="/signinpage" className="block py-1.5 px-3 hover:text-pink-600">Sign In</a></li>
                </ul>
              )}
            </li>

            {/* Mobile Blog Dropdown */}
            <li>
              <button
                onClick={() => toggleSubmenu('blog')}
                className="w-full flex justify-between items-center py-2 px-3 rounded-lg hover:bg-pink-50 hover:text-pink-600"
              >
                Blog <IoChevronDown className={`transition-transform ${openSubmenu === 'blog' ? 'rotate-180' : ''}`} />
              </button>
              {openSubmenu === 'blog' && (
                <ul className="pl-4 mt-1 space-y-1 text-gray-700 bg-gray-50 rounded-lg p-2">
                  <li><a href="/blog" className="block py-1.5 px-3 hover:text-pink-600">Blog</a></li>
                  <li><a href="/blog-details" className="block py-1.5 px-3 hover:text-pink-600">Blog Details</a></li>
                </ul>
              )}
            </li>

            <li>
              <a href="/contact" className="block py-2 px-3 rounded-lg hover:bg-pink-50 hover:text-pink-600">Contact</a>
            </li>

            <li className="pt-2">
              <button className="w-full bg-gradient-to-r from-[#fea447] via-[#fc6f6c] to-[#f82c9a] text-white font-semibold py-2.5 rounded-lg shadow-md hover:opacity-95 transition">
                + Follow button
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;