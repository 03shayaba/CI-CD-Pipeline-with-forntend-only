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
        className: "center",
        centerMode: true,
        centerPadding: "468px",
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className='overflow-x-hidden pt-20'>

            <div className='w-full mb-40'>
                <Slider {...settings}>

                    {images1.map((item, index) => (
                        <div key={index} className=' relative  overflow-hidden group  '   >

                            <img className=' rounded-4xl  h-120 w-140 ' src={item.bgImage} alt="" />
                            {/* Gradient Overlay (visible on hover) */}





                            <div className='absolute  left-50 bottom-6 -translate-x-1/2 px-2 py-2 rounded-full text-sm  text-pink-500  text-[13px]  font-bold  transition-all duration-500 '>
                                <IoPlay className=' border-1  border-white  text-white rounded-full p-3 hover:text-red-600   w-12 h-12  text-5xl  hover:bg-white hover:border-1 hover:border-white' />
                                <p className=' text-[20px] font-bold text-white  hover:text-pink-700'>Smiley woman pop party studio medium shot</p>
                                <p className='text-white text-[18px] mb-5 font-semibold '>@facebook</p>

                            </div>


                        </div>
                    ))}

                </Slider>
            </div>

        </div>
    )
}

export default Slider_stream