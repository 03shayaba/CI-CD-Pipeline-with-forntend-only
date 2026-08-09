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
    <div className='max-w-7xl mx-auto px-4 sm:px-8 py-8'>
      {/* Category Buttons */}
      <div className='flex flex-wrap gap-2.5 justify-center items-center my-6'>
        {categories.map((category) => (
          <div key={category} className='p-0.5 rounded-xl bg-gradient-to-r from-yellow-500 to-red-500'>
            <button 
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeCategory === category 
                  ? 'bg-gradient-to-r from-yellow-500 to-red-500 text-white' 
                  : 'bg-white text-gray-800 hover:text-red-600'
              }`} 
              onClick={() => { setActiveCategory(category) }}
            >
              {category}
            </button>
          </div>
        ))}
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8'>
        {cardToShow.map(card => (
          <div className='relative group rounded-3xl overflow-hidden shadow-md bg-white p-3 flex flex-col justify-between' key={card.id}>
            <div className='relative rounded-2xl overflow-hidden mb-3 h-72 sm:h-80'>
              <img className='w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500' src={card.img} alt={card.title} />
              <a href="#" className='absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition'>
                <IoPlay className='bg-white text-red-600 rounded-full p-3 w-12 h-12 text-4xl shadow-lg group-hover:scale-110 transition' />
              </a>
            </div>
            <div>
              <a href="#">
                <p className='text-sm sm:text-base font-bold text-gray-900 line-clamp-2 hover:text-red-600 transition-colors'>Smiley woman pop party studio medium shot</p>
              </a>
              <p className='text-xs text-gray-500 font-medium mt-1'>@facebook</p>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Big Banner */}
      <div className='relative flex justify-center items-center my-10 rounded-3xl overflow-hidden shadow-xl max-w-5xl mx-auto'>
        <img className='rounded-3xl w-full h-64 sm:h-96 lg:h-[450px] object-cover' src={activeCategory === 'All Videos' ? videoProfile : reel5} alt="" />
        <a href="#" className='absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition'>
          <IoPlay className='bg-white text-red-600 rounded-full p-4 w-16 h-16 sm:w-20 sm:h-20 text-5xl shadow-2xl hover:scale-110 transition' />
        </a>
      </div>

      {/* Bottom Gallery Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
        {gallary.map((item, index) => (
          <div key={index} className='relative group rounded-3xl overflow-hidden shadow-md bg-white p-3 flex flex-col justify-between'>
            <div className='relative rounded-2xl overflow-hidden mb-3 h-72 sm:h-80'>
              <img src={item} alt={`Gallery item ${index + 1}`} className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" />
              <a href="#" className='absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition'>
                <IoPlay className='bg-white text-red-600 rounded-full p-3 w-12 h-12 text-4xl shadow-lg group-hover:scale-110 transition' />
              </a>
            </div>
            <div>
              <a href="#">
                <p className='text-sm sm:text-base font-bold text-gray-900 line-clamp-2 hover:text-red-600 transition-colors'>Smiley woman pop party studio medium shot</p>
              </a>
              <p className='text-xs text-gray-500 font-medium mt-1'>@facebook</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='flex justify-center items-center gap-2 my-10'>
        <IoIosArrowBack className='text-red-600 w-6 h-6 cursor-pointer hover:scale-110 transition' />
        <ul className='flex justify-center items-center gap-2 text-sm font-medium'>
          {['1','2','3','4','5'].map(num => (
            <li key={num} className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition cursor-pointer text-gray-700'>
              {num}
            </li>
          ))}
        </ul>
        <IoIosArrowForward className='text-red-600 w-6 h-6 cursor-pointer hover:scale-110 transition' />
      </div>
    </div>
  );
};

export default CardsGallery;