import React from 'react'
import img1 from '../assets/umcoming-live-1.jpg'
import img2 from '../assets/umcoming-live-2.jpg'
import facebookIcon from '../assets/facebook.png'
import youtubeIcon from '../assets/youtube.png'

const livesData =[
    {
        id:1,
        img1:img1,
        title1:"Smiley woman pop party studio medium shot",
        img2:facebookIcon,
        title2:"Facebook Live",
        date:"25 Jun, 2024",
        desc:"consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus."
    },{
        id:2,
        img1:img2,
        title1:"Smiley woman pop party studio medium shot",     
        img2:youtubeIcon,
        title2:"Youtube Live",
        date:"30 Jun, 2024",
        desc:"consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus."
    }
]
const Lives = () => {
  return (
    <div className='text-white bg-transparent flex flex-col justify-center gap-8 max-w-5xl mx-auto my-8 px-2'>
      {livesData.map((item) => (
        <div className='flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 gap-6 shadow-xl border border-white/10' key={item.id}>
          <div className='w-full md:w-5/12 flex-shrink-0'>
            <img className='rounded-2xl w-full h-48 sm:h-56 object-cover' src={item.img1} alt={item.title1} />
          </div>
          <div className='w-full md:w-7/12 flex flex-col justify-between space-y-3'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-gray-800 w-fit shadow-sm'>
              <img className='w-5 h-5 object-contain' src={item.img2} alt={item.title2} />
              <span className='text-xs font-semibold'>{item.title2}</span>
            </div>
            
            <div>
              <h2 className='text-lg sm:text-xl font-bold text-white leading-snug'>{item.title1}</h2>
              <p className='text-xs text-pink-300 font-medium mt-1'>{item.date}</p>
            </div>

            <hr className='border-gray-700/60' />

            <p className='text-xs sm:text-sm text-gray-300 line-clamp-3 leading-relaxed'>{item.desc}</p>

            <div className='pt-2'>
              <button className='bg-gradient-to-r from-yellow-500 to-pink-500 text-white text-xs sm:text-sm font-semibold px-6 py-2 rounded-lg hover:brightness-110 transition shadow-md'>
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lives;