import React from 'react'
import img from '../assets/intro-live-bg.png'
import img2 from '../assets/intro-vector.svg'
import img3 from '../assets/intro-img.jpg'
import img4 from '../assets/checkmark-badge.svg'
import Lives from './Lives';
const Influencer = () => {
  return (
    <div className=' w-full h-440  mb-10 bg-black text-white'
      style={{ backgroundImage: `url(${img})` }}>
      <div className='relative'>
        <div className='absolute top-25 -left-115'>
          <img className="w-auto h-140 animate-slow-spin" src={img2} alt="influencer" />
          <style>
            {`
          @keyframes slow-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-slow-spin {
            animation: slow-spin 5s linear infinite; /* 👈 10s = slow rotation */
          }
        `}
          </style>
        </div>
      </div>
      {/* main content */}
      <div className=' flex mx-auto justify-center items-center gap-20 '>
        <div className=' flex flex-col gap-6 mt-30 ml-38 w-1/2'>
          <h1 className='text-4xl font-semibold tracking-tighter'>I'm a Social Media influencer & digital content creator</h1>
          <p className='text-sm font-nano'>consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.</p>

          <div className=' flex'>
            <img src={img4} alt="" />
            <p className='text-sm pl-3 font-semibold'>Non mattis nulla, in ultrices diam</p>
          </div>
          <div className=' flex'>
            <img src={img4} alt="" />
            <p className='text-sm pl-3 font-semibold'>Web design done Delightful Visualization</p>
          </div>
          <div className=' flex'>
            <img src={img4} alt="" />
            <p className='text-sm pl-3 font-semibold'>Alienum phaedrum torquatos nec eu, vis detraxit periculis</p>
          </div>
          <div className=' flex'>
            <img src={img4} alt="" />
            <p className='text-sm pl-3 font-semibold'>Software Makes Your Profit Double if You Scale Properly.</p>
          </div>
          <div className='bg-gradient-to-r from-yellow-500 to-pink-500 w-34 h-11 p-0.5 rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-pink-500'>
            <button className='w-full h-full bg-black rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-pink-500'>Contact Me</button>
          </div>
        </div>
        <div className='mt-25'>
          <img className='rounded-l-full mx-auto ' src={img3} alt="influencer" />
        </div>
      </div>

      
      <div className='mt-30'>
        <hr className='mx-35 text-gray-500 shadow-4xl text-5xl ' />
        <h1 className='text-4xl font-bold text-center mt-10 mb-10'>My Upcoming Lives</h1>
        <hr className='mx-35 text-gray-500 shadow-4xl text-5xl ' /><Lives /></div>
    </div>
  )
}

export default Influencer