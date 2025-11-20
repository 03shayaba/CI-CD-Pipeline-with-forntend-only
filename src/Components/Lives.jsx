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
    <div className='text-white bg-transparent flex  flex-col justify-center gap-10 mx-20 my-20'>
     
    {livesData.map((item, index)=>(
        <div  className='flex  w-290 mx-30 h-85  bg-white/14  rounded-4xl' key={item.id}>
            <div key={index} className='w-240 pt-4 pl-4 pr-2 rounded-4xl '>
                <img className='rounded-xl w-full' src={item.img1} alt="" />
            </div>
            <div>
                <div className='mt-8 ml-5'>
                    <a href="#" className='flex items-center gap-2 mt-4 ml-4 w-32 p-1 h-8 rounded-full bg-white' w>
                    <img className='pl-3 w-7 h-4' src={item.img2} alt="" />
                    <h1 className='text-gray-700 text-[12px]'>{item.title2}</h1>
                    </a>
                </div>
                <div className='ml-10 mt-4'>
                    <h1 className='text-xl font-semibold py-2'>{item.title1}</h1>
                    <p className='text-[13px] pb-2'> {item.date}</p>
                    <hr className='text-gray-600  shadow-4xl text-4xl'/>
                    <p className='text-[14px] text-gray-400 mt-4'>{item.desc}</p>
                </div>
                <div className='ml-10 mt-8  flex justify-center items-center bg-gradient-to-r from-yellow-500 to-pink-500 w-28 h-10 p-0.5 rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-pink-500'>
                    <button> Book Now</button>
                </div>
            </div>
        </div>))}
    </div>
  )
}

export default Lives