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
import { IoPlay } from "react-icons/io5";

const images1 = [
    {
        id: 1,
        bgImage: vedio1
    },
    {
        id: 2,
        bgImage: vedio2
    },
    {
        id: 3,
        bgImage: vedio3
    },
    {
        id: 1,
        bgImage: vedio1
    },
    {
        id: 2,
        bgImage: vedio2
    },
    {
        id: 3,
        bgImage: vedio3
    },

]

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`absolute top-140 left-192 z-10 bg-red-200 hover:bg-red-700 hover:text-white   text-red-700
                  font-bold w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-lg`}
            onClick={onClick}
            style={{ ...style, display: "flex" }}
        >
            {">"}
        </div>
    );
};

// Custom Prev Arrow
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`absolute top-140 right-192 z-10 bg-red-200 hover:bg-red-700 hover:text-white 
                 font-bold text-red-700 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-lg`}
            onClick={onClick}
            style={{ ...style, display: "flex" }}
        >
            {"<"}
        </div>
    );
};

const Slider_stream = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        centerMode: true,
        centerPadding: "20%",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: "10%"
                }
            },
            {
                breakpoint: 640,
                settings: {
                    centerPadding: "0px"
                }
            }
        ]
    };
    return (
        <div className='overflow-hidden py-12'>
            <div className='max-w-7xl mx-auto px-4 mb-20'>
                <Slider {...settings}>
                    {images1.map((item, index) => (
                        <div key={index} className='px-2'>
                            <div className='relative rounded-3xl overflow-hidden group h-[350px] sm:h-[450px] shadow-xl'>
                                <img className='w-full h-full object-cover rounded-3xl group-hover:scale-105 transition duration-500' src={item.bgImage} alt="" />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80'></div>

                                <div className='absolute bottom-6 left-6 right-6 text-white space-y-2 z-10'>
                                    <IoPlay className='border border-white text-white rounded-full p-3 hover:text-red-600 w-12 h-12 text-4xl hover:bg-white transition cursor-pointer shadow-lg' />
                                    <h2 className='text-lg sm:text-2xl font-bold text-white hover:text-pink-300 transition-colors line-clamp-1'>Smiley woman pop party studio medium shot</h2>
                                    <p className='text-xs sm:text-sm text-gray-200 font-semibold'>@facebook</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Slider_stream;