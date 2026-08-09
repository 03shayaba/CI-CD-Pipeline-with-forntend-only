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
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        rtl: true,
        pauseOnHover: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 640,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 3000,
                settings: { slidesToShow: 3, slidesToScroll: 1 }
            }
        ]
    };

    const [sliderKey, setSliderKey] = React.useState(0);

    React.useEffect(() => {
        const handleResize = () => {
            setSliderKey(Date.now());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-8 py-4 mb-16 overflow-hidden'>
            <div className='w-full'>
                <Slider key={sliderKey} {...settings}>
                    {data2.map((item, index) => (
                        <div key={index} className='px-2'>
                            <div className='relative rounded-3xl overflow-hidden group shadow-lg h-[360px] sm:h-[400px]'>
                                <img className='w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500' src={item.bgImage} alt="" />
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                                {/* Top Icons */}
                                <div className='absolute top-4 left-4 text-white text-4xl sm:text-5xl drop-shadow-md'>
                                    <IoPlayCircleOutline />
                                </div>
                                <div className='absolute top-4 right-4'>
                                    <FaCrown className='text-amber-500 w-9 h-9 p-2 rounded-full bg-white shadow-md' />
                                </div>

                                {/* Bottom Info */}
                                <div className='absolute bottom-4 left-4 right-4 text-white space-y-2 z-10'>
                                    <span className='inline-block bg-white text-red-600 font-bold text-xs px-3 py-1 rounded-full shadow-md'>
                                        $5.00
                                    </span>
                                    <a href="#" className="block">
                                        <h2 className='font-bold text-base sm:text-lg text-white hover:text-pink-300 transition-colors line-clamp-2 leading-snug'>
                                            Smiley woman pop party studio medium shot
                                        </h2>
                                    </a>
                                    <div className="flex items-center gap-2 text-xs text-gray-300">
                                        <span>16M views</span>
                                        <span>|</span>
                                        <span>49 minutes ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ImageSliderNext;