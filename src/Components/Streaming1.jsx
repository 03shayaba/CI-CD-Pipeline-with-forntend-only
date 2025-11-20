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
        <div>
            <div className='flex gap-2 justify-center items-center mt-10'>
                {categories.map((category) => (
                    <div className='bg-gradient-to-r from-yellow-500 to-red-500 w-34 h-11 p-0.5 rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-pink-500'>
                        <button onClick={() => { setActiveCategory(category) }} className={`w-full h-full bg-white hover:text-white rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-red-500 text-red-600 ${activeCategory === category ? 'bg-gradient-to-r from-yellow-500 to-red-500 text-white' : 'bg-white'}`}>{category}</button>
                    </div>
                ))}
            </div>

            <div className=' p-10'>
                {cardToShow.map((card) => (
                    <div key={card.id} className="relative flex flex-col justify-center items-center bg-white rounded-lg overflow-hidden">
                        <img src={card.img} alt={card.title} className=" w-300 rounded-4xl object-cover" />
                        <div className="absolute top-90 left-40">
                            <IoPlay className=' border-1  border-white  text-white rounded-full p-3 hover:text-red-600 mb-2  w-12 h-12  text-5xl  hover:bg-white hover:border-1 hover:border-white' />
                            <p className=' text-[20px] font-bold text-white mb-4 hover:text-pink-700'>Smiley woman pop party studio medium shot</p>
                            <p className='text-white text-[18px] mb-5 font-semibold '>@facebook</p>


                        </div>
                    </div>
                ))}
            </div>

            <div>
                <div className='grid grid-cols-2 gap-6 justify-center items-center mb-10 mx-40'>
                    {vedios.map((item, index) => (
                        <div className='relative'>
                            <img key={index} src={item} alt={`Gallery item ${index + 1}`} className="inline-block  w-full h-full rounded-4xl" />
                            <div className="absolute top-65 left-10">
                                <IoPlay className=' border-1  border-white  text-white rounded-full p-3 hover:text-red-600 mb-2  w-12 h-12  text-5xl  hover:bg-white hover:border-1 hover:border-white' />
                                <p className=' text-[20px] font-bold text-white mb-4 hover:text-pink-700'>Smiley woman pop party studio medium shot</p>
                                <p className='text-white text-[18px] mb-5 font-semibold '>@facebook</p>


                            </div>
                        </div>
                    ))}
                </div>
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

export default Streaming1