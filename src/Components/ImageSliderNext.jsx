import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import vedio1 from '../assets/jo-video-1.jpg'
import vedio2 from '../assets/jo-video-2.jpg'
import vedio3 from '../assets/jo-video-3.jpg'
import vedio4 from '../assets/jo-video-4.jpg'
import vedio5 from '../assets/jo-video-5.jpg'
import vedio6 from '../assets/jo-video-6.jpg'
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaCrown } from "react-icons/fa6";


const data2 = [
    {
        id: 4,
        bgImage: vedio4
    },
    {
        id: 5,
        bgImage: vedio5
    },
    {
        id: 6,
        bgImage: vedio6
    },
    {
        id: 4,
        bgImage: vedio4
    },
    {
        id: 5,
        bgImage: vedio5
    },
    {
        id: 6,
        bgImage: vedio6
    },

]





const ImageSliderNext = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2.6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: "linear",
        rtl: true,
        pauseOnHover: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className='overflow-x-hidden mb-20'>

            <div className='w-full'>
                <Slider {...settings}>

                    {data2.map((item, index) => (
                        <div key={index} className=' relative    overflow-hidden group   '   >

                            <img className=' rounded-4xl  object-cover  h-100 ' src={item.bgImage} alt="" />
                            {/* Gradient Overlay (visible on hover) */}
                            <div
                                className="
                                            absolute inset-0  rounded-4xl
                                            bg-gradient-to-t from-yellow-500/70 to-pink-500/70 
                                            opacity-0 group-hover:opacity-100
                                            transition-opacity duration-800 mr-7"
                            ></div>

                            {/* Bottom Text (hidden until hover) */}
                            <div
                                className="
                                            absolute bottom-8 left-0 right-4 
                                             text-white text-sm opacity-0 group-hover:opacity-100
                                                transition-all duration-500 ml-8"
                            >
                              <a href="#" className="font-semibold text-xl   ">
                                <h1 className='hover:text-red-700 transition-colors duration-300 relative z-10'>Smiley woman pop party studio medium shot</h1>
                                </a>
                                <diV className="flex items-center gap-2 mt-1">
                                    <p className="text-[14px] ">
                                       16M views 
                                    </p>
                                    <p className='text-[14px] '>|</p>
                                    <p className='text-[14px]'>49 minutes ago</p>
                                </diV>
                            </div>

                            <div className=' absolute top-2 left-2 w-full h-full flex justify-center items-center '>
                                <IoPlayCircleOutline className='text-white text-6xl absolute top-0 left-2 ' />

                            </div>
                            <div className='text-sm   '>
                                <FaCrown className='text-gray-800 w-10 h-10 p-2 absolute top-3 right-16  rounded-full bg-white ' />
                            </div>

                                <button className='absolute  left-15 bottom-18 -translate-x-1/2 px-4 py-2 rounded-full text-sm bg-white text-red-700  text-[13px]  font-bold  transition-all duration-500 group-hover:bottom-23 '>$5.00</button>

                        </div>
                    ))}

                </Slider>
            </div>

        </div>
    )
}

export default ImageSliderNext