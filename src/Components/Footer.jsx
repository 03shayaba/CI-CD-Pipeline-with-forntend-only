import React from 'react'
import { RiFacebookLine } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { LiaInstagram } from "react-icons/lia";
import { RiYoutubeFill } from "react-icons/ri";
import logo from '../assets/logo.svg'
import footer1 from '../assets/footer-img-1.jpg'
import footer2 from '../assets/footer-img-2.jpg'
import footer3 from '../assets/footer-img-3.jpg'
import footer4 from '../assets/footer-img-4.jpg'
const Footer = () => {
  return (
    <footer className='bg-black text-white pt-12 pb-8 px-4 sm:px-8'>
      {/* Newsletter Header Box */}
      <div className='max-w-7xl mx-auto bg-gradient-to-r from-[#ff1408] to-[#ff8a38] rounded-2xl p-6 sm:p-10 shadow-2xl'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
          <div className='flex-shrink-0'>
            <a href="/"><img className="h-8 sm:h-10 w-auto" src={logo} alt="Logo" /></a>
          </div>

          <div className='relative w-full lg:w-1/2 max-w-lg'>
            <input className='bg-white text-black w-full h-12 sm:h-14 rounded-full pl-5 pr-36 text-sm focus:outline-none shadow-md' type="text" placeholder='Enter Email Address' />
            <button className='absolute top-1 right-1 bottom-1 bg-gradient-to-r from-[#f8289d] to-[#ff8a38] text-white text-xs sm:text-sm font-semibold rounded-full px-4 sm:px-6 hover:brightness-110 transition'>
              Get Newsletter
            </button>
          </div>

          <div className='flex items-center gap-3 text-xl'>
            <a href="#" className='border border-white/40 p-2.5 rounded-full hover:bg-white hover:text-red-600 transition'><RiFacebookLine /></a>
            <a href="#" className='border border-white/40 p-2.5 rounded-full hover:bg-white hover:text-red-600 transition'><TiSocialTwitter /></a>
            <a href="#" className='border border-white/40 p-2.5 rounded-full hover:bg-white hover:text-red-600 transition'><LiaInstagram /></a>
            <a href="#" className='border border-white/40 p-2.5 rounded-full hover:bg-white hover:text-red-600 transition'><RiYoutubeFill /></a>
          </div>
        </div>
      </div>

      {/* Grid Links & Info */}
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-8'>
        <div>
          <h3 className='text-lg font-bold mb-3'>Get in touch</h3>
          <p className='text-gray-300 text-lg sm:text-xl font-medium hover:text-red-500 transition-colors'>
            <a href="mailto:contact.me@gmail.com">contact.me@gmail.com</a>
          </p>
        </div>

        <div>
          <h3 className='text-lg font-bold mb-3'>Browse Categories</h3>
          <div className='flex gap-8 text-sm text-gray-400'>
            <ul className='space-y-2'>
              <li><a href="#" className='hover:text-pink-400 transition-colors'>Music</a></li>
              <li><a href="#" className='hover:text-pink-400 transition-colors'>Gaming</a></li>
              <li><a href="#" className='hover:text-pink-400 transition-colors'>Art</a></li>
            </ul>
            <ul className='space-y-2'>
              <li><a href="#" className='hover:text-pink-400 transition-colors'>Sports</a></li>
              <li><a href="#" className='hover:text-pink-400 transition-colors'>Fashion</a></li>
              <li><a href="#" className='hover:text-pink-400 transition-colors'>Photography</a></li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className='text-lg font-bold mb-3'>Instagram Feed</h3>
          <div className='grid grid-cols-4 gap-2'>
            <img className='w-full h-16 sm:h-20 rounded-xl object-cover hover:opacity-80 transition cursor-pointer' src={footer1} alt="Instagram post" />
            <img className='w-full h-16 sm:h-20 rounded-xl object-cover hover:opacity-80 transition cursor-pointer' src={footer2} alt="Instagram post" />
            <img className='w-full h-16 sm:h-20 rounded-xl object-cover hover:opacity-80 transition cursor-pointer' src={footer3} alt="Instagram post" />
            <img className='w-full h-16 sm:h-20 rounded-xl object-cover hover:opacity-80 transition cursor-pointer' src={footer4} alt="Instagram post" />
          </div>
        </div>
      </div>

      <hr className='border-gray-800 max-w-7xl mx-auto my-6' />
      <p className='text-xs text-center text-gray-400 font-medium'>Copyright © 2024 Developed by Influtics</p>
    </footer>
  );
};

export default Footer;