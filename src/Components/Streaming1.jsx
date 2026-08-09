import React from 'react'
import videobig1 from '../assets/video-big-1.png'
import videobig2 from '../assets/video-big-2.png'
import videobig3 from '../assets/video-big-3.png'
import { IoPlay } from "react-icons/io5";
import video1 from '../assets/jo-video-1.jpg'
import video2 from '../assets/jo-video-2.jpg'
import video3 from '../assets/jo-video-3.jpg'
import video4 from '../assets/jo-video-4.jpg'
import video5 from '../assets/jo-video-5.jpg'
import video6 from '../assets/jo-video-6.jpg'
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

const vedios = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
]

const images = {
    "All Videos": [
        { id: 1, title: "Video 1", img: videobig1 },
    ],
    "Lifestyle": [
        { id: 2, title: "Lifestyle Video 1", img: videobig2 },
    ],
    "Fashion": [
        { id: 3, title: "Fashion Video 1", img: videobig3 },
    ],
    "Beauty": [
        { id: 4, title: "Beauty Video 1", img: videobig1 },
    ],
    "Fitness & Health": [
        { id: 5, title: "Fitness Video 1", img: videobig2 },
    ],
    "Recipe Videos": [
        { id: 6, title: "Recipe Video 1", img: videobig3 },
    ],
    "Travel": [
        { id: 7, title: "Travel Video 1", img: videobig1 },
    ],

}

const Streaming1 = () => {
    
    const [activeCategory, setActiveCategory] = React.useState('All Videos');

    const cardToShow = images[activeCategory];
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-8 py-8'>
            <div className='flex flex-wrap gap-2.5 justify-center items-center my-6'>
                {categories.map((category) => (
                    <div key={category} className='p-0.5 rounded-xl bg-gradient-to-r from-yellow-500 to-red-500'>
                        <button onClick={() => { setActiveCategory(category) }} className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${activeCategory === category ? 'bg-gradient-to-r from-yellow-500 to-red-500 text-white' : 'bg-white text-red-600 hover:bg-gray-50'}`}>{category}</button>
                    </div>
                ))}
            </div>

            <div className='py-6'>
                {cardToShow.map((card) => (
                    <div key={card.id} className="relative rounded-3xl overflow-hidden shadow-xl max-w-5xl mx-auto my-6">
                        <img src={card.img} alt={card.title} className="w-full h-64 sm:h-96 lg:h-[450px] object-cover rounded-3xl" />
                        <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                            <IoPlay className='border border-white text-white rounded-full p-3 hover:text-red-600 mb-2 w-12 h-12 text-4xl hover:bg-white transition cursor-pointer shadow-lg' />
                            <p className='text-base sm:text-xl font-bold text-white mb-1 hover:text-pink-300 transition-colors'>Smiley woman pop party studio medium shot</p>
                            <p className='text-xs sm:text-sm text-gray-200 font-semibold'>@facebook</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='my-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto'>
                    {vedios.map((item, index) => (
                        <div key={index} className='relative rounded-3xl overflow-hidden shadow-md group'>
                            <img src={item} alt={`Gallery item ${index + 1}`} className="w-full h-64 sm:h-80 object-cover rounded-3xl group-hover:scale-105 transition duration-500" />
                            <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                                <IoPlay className='border border-white text-white rounded-full p-2.5 hover:text-red-600 mb-2 w-10 h-10 text-3xl hover:bg-white transition cursor-pointer shadow-md' />
                                <p className='text-sm sm:text-base font-bold text-white mb-1 hover:text-pink-300 transition-colors line-clamp-1'>Smiley woman pop party studio medium shot</p>
                                <p className='text-xs text-gray-200 font-semibold'>@facebook</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex justify-center items-center gap-2 my-10'>
                <IoIosArrowBack className='text-red-700 w-6 h-6 cursor-pointer hover:scale-110 transition'/>
                <ul className='flex justify-center items-center gap-2 text-sm font-medium'>
                    <li className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-700 hover:text-white transition cursor-pointer'>1</li>
                    <li className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-700 hover:text-white transition cursor-pointer'>2</li>
                    <li className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-700 hover:text-white transition cursor-pointer'>3</li>
                    <li className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-700 hover:text-white transition cursor-pointer'>4</li>
                    <li className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-700 hover:text-white transition cursor-pointer'>5</li>
                </ul>
                <IoIosArrowForward className='text-red-700 w-6 h-6 cursor-pointer hover:scale-110 transition'/>
            </div>
        </div>
    );
};

export default Streaming1;