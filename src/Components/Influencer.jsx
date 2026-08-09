import React from 'react'
import img from '../assets/intro-live-bg.png'
import img2 from '../assets/intro-vector.svg'
import img3 from '../assets/intro-img.jpg'
import img4 from '../assets/checkmark-badge.svg'
import Lives from './Lives';
const Influencer = () => {
  return (
    <div className='w-full py-16 px-4 sm:px-8 bg-black text-white relative overflow-hidden'
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
      
      {/* Background vector decoration */}
      <div className='absolute top-10 -left-20 opacity-20 pointer-events-none hidden md:block'>
        <img className="w-96 h-96 animate-slow-spin" src={img2} alt="influencer vector" />
        <style>
          {`
            @keyframes slow-spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .animate-slow-spin {
              animation: slow-spin 15s linear infinite;
            }
          `}
        </style>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 z-10 relative'>
        <div className='w-full lg:w-1/2 flex flex-col gap-6 text-left'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight'>
            I'm a Social Media influencer &amp; digital content creator
          </h1>
          <p className='text-xs sm:text-sm text-gray-300 leading-relaxed font-light'>
            Consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.
          </p>

          <div className='space-y-3.5'>
            <div className='flex items-center gap-3'>
              <img src={img4} alt="" className="w-5 h-5 flex-shrink-0" />
              <p className='text-xs sm:text-sm font-semibold text-gray-200'>Non mattis nulla, in ultrices diam</p>
            </div>
            <div className='flex items-center gap-3'>
              <img src={img4} alt="" className="w-5 h-5 flex-shrink-0" />
              <p className='text-xs sm:text-sm font-semibold text-gray-200'>Web design done Delightful Visualization</p>
            </div>
            <div className='flex items-center gap-3'>
              <img src={img4} alt="" className="w-5 h-5 flex-shrink-0" />
              <p className='text-xs sm:text-sm font-semibold text-gray-200'>Alienum phaedrum torquatos nec eu, vis detraxit periculis</p>
            </div>
            <div className='flex items-center gap-3'>
              <img src={img4} alt="" className="w-5 h-5 flex-shrink-0" />
              <p className='text-xs sm:text-sm font-semibold text-gray-200'>Software Makes Your Profit Double if You Scale Properly.</p>
            </div>
          </div>

          <div className='bg-gradient-to-r from-yellow-500 to-pink-500 w-36 h-11 p-0.5 rounded-lg hover:brightness-110 transition mt-2'>
            <button className='w-full h-full bg-black text-white font-semibold rounded-lg hover:bg-transparent transition duration-300 text-sm'>
              Contact Me
            </button>
          </div>
        </div>

        <div className='w-full lg:w-1/2 flex justify-center'>
          <img className='w-full max-w-md lg:max-w-full rounded-3xl lg:rounded-l-full object-cover shadow-2xl' src={img3} alt="influencer" />
        </div>
      </div>

      {/* Upcoming Lives */}
      <div className='max-w-7xl mx-auto mt-16 sm:mt-24 px-2 sm:px-4'>
        <hr className='border-gray-800 my-6' />
        <h1 className='text-2xl sm:text-4xl font-bold text-center my-6'>My Upcoming Lives</h1>
        <hr className='border-gray-800 my-6' />
        <Lives />
      </div>
    </div>
  );
};

export default Influencer