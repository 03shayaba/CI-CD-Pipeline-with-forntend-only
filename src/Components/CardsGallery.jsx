import React from 'react'
import reel1 from '../assets/jo-video-1.jpg'
import reel2 from '../assets/jo-video-2.jpg'
import reel3 from '../assets/jo-video-3.jpg'
import reel4 from '../assets/jo-video-4.jpg'
import reel5 from '../assets/jo-video-5.jpg'
import reel6 from '../assets/jo-video-6.jpg'
import { IoPlay } from "react-icons/io5";

import reels1 from '../assets/reel-thumb-1.jpg'
import reels2 from '../assets/reel-thumb-2.jpg'
import reels3 from '../assets/reel-thumb-3.jpg'
import reels4 from '../assets/reel-thumb-4.jpg'
import reels5 from '../assets/reel-thumb-5.jpg'
import videoProfile from '../assets/video-big-2.png'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const categories = [
  "All Videos",
  "Lifestyle",
  "Fashion",
  "Beauty",
  "Fitness & Health",
  "Recipe Videos",
  "Travel",
];
const CardSets = {
  "All Videos": [
    { id: 1, title: "Video 1", img: reel1 },
    { id: 2, title: "Video 2", img: reel2 },
    { id: 3, title: "Video 3", img: reel3 },
    { id: 4, title: "Video 4", img: reel4 },
    // { id: 5, title: "Video 5", newimg: videoProfile },
  ],
  Lifestyle: [
    { id: 5, title: "Lifestyle Video 1", img: reel5 },
    { id: 6, title: "Lifestyle Video 2", img: reel1 },
    { id: 7, title: "Lifestyle Video 3", img: reel2 },
    { id: 8, title: "Lifestyle Video 4", img: reel3 },
  ],
  Fashion: [
    { id: 9, title: "Fashion Video 1", img: reel4 },
    { id: 10, title: "Fashion Video 2", img: reel5 },
    { id: 11, title: "Fashion Video 3", img: reel1 },
    { id: 12, title: "Fashion Video 4", img: reel2 },
  ],
  Beauty: [
    { id: 13, title: "Beauty Video 1", img: reel3 },
    { id: 14, title: "Beauty Video 2", img: reel4 },
    { id: 15, title: "Beauty Video 3", img: reel5 },
    { id: 16, title: "Beauty Video 4", img: reel1 },
  ],
  "Fitness & Health": [
    { id: 17, title: "Fitness Video 1", img: reel2 },
    { id: 18, title: "Fitness Video 2", img: reel3 },
    { id: 19, title: "Fitness Video 3", img: reel4 },
    { id: 20, title: "Fitness Video 4", img: reel5 },
  ],
  "Recipe Videos": [
    { id: 21, title: "Recipe Video 1", img: reel1 },
    { id: 22, title: "Recipe Video 2", img: reel2 },
    { id: 23, title: "Recipe Video 3", img: reel5 },
    { id: 24, title: "Recipe Video 4", img: reel3 },
  ],
  Travel: [
    { id: 25, title: "Travel Video 1", img: reel4 },
    { id: 26, title: "Travel Video 2", img: reel5 },
    { id: 27, title: "Travel Video 3", img: reel2 },
    { id: 28, title: "Travel Video 4", img: reel1 },
  ],

}

const gallary =[
  reel6,
  reels1,
  reels2,
  reels3,
  reels4,
  reels5, 
  reel1,
  reel2,
  
]
const CardsGallery = () => {
  const [activeCategory, setActiveCategory] = React.useState('All Videos');

  const cardToShow = CardSets[activeCategory];
  return (
    <div>
      <div className='flex gap-2 justify-center items-center mt-10'>
        {categories.map((category) => (
          <div className='bg-gradient-to-r from-yellow-500 to-red-500 w-34 h-11 p-0.5 rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-pink-500'>
            <button className={`w-full h-full bg-white hover:text-white rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-red-500 text-red-600 ${activeCategory === category ? 'bg-gradient-to-r from-yellow-500 to-red-500 text-white' : 'bg-white'}`} onClick={() => { setActiveCategory(category) }}>{category}</button>
          </div>
        ))}
      </div>
      <div className=' flex justify-center gap-8  flex-wrap mt-8'>
        {cardToShow.map(card => (
          <div className='flex flex-col gap-4' key={card.id}>
              <div className='relative w-70 h-100 mb-30' key={card.id}>
                <img className='rounded-4xl  h-90' src={card.img} alt={card.title} />
                   <a href=""><p className=' text-[18px] font-semibold text-gray-800 mb-3 hover:text-red-700'>Smiley woman pop party studio medium shot</p>
               </a> <p className='text-gray-600 text-[17px] '>@facebook</p>

                <div className=''>
                    <a href=""> <IoPlay className='absolute top-40 left-30 bg-white  rounded-full p-3 hover:text-white   w-12 h-12 text-red-700 text-5xl  hover:bg-red-700 hover:border-1 hover:border-white' /></a>

                 </div>
              </div>
            
          </div>
        ))}
      </div>
          {activeCategory === 'All Videos' ?(
        <div className='relative flex justify-center items-center mb-10 '>
          <img className='rounded-xl w-300 h-120' src={videoProfile} alt="" />
          <div>
            <IoPlay className='absolute top-1/3 left-1/2 bg-white  rounded-full p-8 hover:text-white   w-22 h-22 text-red-700 text-5xl  hover:bg-red-700 hover:border-1 hover:border-white' />
          </div>
          </div>  
      ) : (
       <div className='relative flex justify-center items-center mb-10 '>
          <img  className='rounded-4xl w-300 h-120' src={reel5} alt="" />
          <div>
            <IoPlay className='absolute top-1/3 left-1/2 bg-white  rounded-full p-8 hover:text-white   w-22 h-22 text-red-700 text-5xl  hover:bg-red-700 hover:border-1 hover:border-white' />
          </div>
        </div>
      )}


      <div className='grid grid-cols-4 gap-6 justify-center items-center mb-10 mx-40'>
        {gallary.map((item, index) => (
          <div className='relative'>
          <img key={index} src={item} alt={`Gallery item ${index + 1}`} className="inline-block  w-full h-90 rounded-xl" />
          <a href=""><p className=' text-[18px] font-semibold text-gray-800 mb-3 hover:text-red-700'>Smiley woman pop party studio medium shot</p>
               </a>
           <p className='text-gray-600 text-[17px] mb-5'>@facebook</p>
                 <div className=''>
                    <a href=""> <IoPlay className='absolute top-40 left-30 bg-white  rounded-full p-3 hover:text-white   w-12 h-12 text-red-700 text-5xl  hover:bg-red-700 hover:border-1 hover:border-white' /></a>

                 </div>
          </div>
        ))}
      </div>

      <div className=' flex justify-center items-center mb-10'>
        <IoIosArrowBack  className=' text-red-700 w-8 h-8'/>
        <ul className='flex justify-center items-center gap-2'>
          <li className='w-10 h-10  p-1.5 rounded-full bg-[#f5f5f5] hover:text-white hover:bg-red-700 transition  text-center'>1</li>
          <li className='w-10 h-10  p-1.5 rounded-full bg-[#f5f5f5] hover:text-white hover:bg-red-700 transition text-center'>2</li>
          <li className='w-10 h-10  p-1.5 rounded-full bg-[#f5f5f5] hover:text-white hover:bg-red-700 transition  text-center'>3</li>
          <li className='w-10 h-10  p-1.5 rounded-full bg-[#f5f5f5] hover:text-white hover:bg-red-700 transition  text-center'>4</li>
          <li className='w-10 h-10  p-1.5 rounded-full bg-[#f5f5f5] hover:text-white hover:bg-red-700 transition  text-center'>5</li>
          
        </ul>
        <IoIosArrowForward  className=' text-red-700 w-8 h-8'/>
      </div>
    </div>
  )
}

export default CardsGallery