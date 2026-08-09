import React from 'react'
import img from '../assets/video-details-img.jpg'
import { IoPlay } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { LiaInstagram } from "react-icons/lia";
import { RiYoutubeFill } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
import { RiDoubleQuotesR } from "react-icons/ri";
import video1 from '../assets/jo-video-1.jpg'
import video2 from '../assets/jo-video-2.jpg'
import video3 from '../assets/jo-video-3.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const vedios = [
    video1,
    video2,
    video3,
]

// Custom Next Arrow
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute -top-20 left-325 z-10 bg-red-300 hover:bg-red-400  text-red-700
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
      className={`absolute -top-20 right-0 z-10 bg-red-300 hover:bg-red-400 
                 font-bold text-red-700 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-lg`}
      onClick={onClick}
      style={{ ...style, display: "flex" }}
    >
      {"<"}
    </div>
  );
};
const Stream_details = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };
    return (
        <div className='w-full py-8'>
            <div className='relative flex justify-center items-center max-w-5xl mx-auto px-4 my-6'>
                <img src={img} alt="Video Details" className='rounded-3xl w-full h-64 sm:h-96 lg:h-[450px] object-cover shadow-xl' />
                <div className='absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition rounded-3xl'>
                    <IoPlay className='border border-white text-white rounded-full p-4 hover:text-red-600 w-16 h-16 sm:w-20 sm:h-20 text-5xl hover:bg-white transition cursor-pointer shadow-2xl' />
                </div>
            </div>

            <div className='max-w-4xl mx-auto px-4 sm:px-8 space-y-6'>
                <div className='flex items-center gap-2 text-red-600 font-semibold text-xs sm:text-sm'>
                    <IoPricetagOutline className='text-base' />
                    <span>Brand Awareness</span>
                </div>

                <div>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>Dance Your Way to Brand Awareness</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-200">
                        <span className='font-semibold text-gray-700 text-sm'>Share Now</span>
                        <div className='flex items-center gap-2 text-xl text-gray-700'>
                            <a href="#" className='border border-gray-300 p-1.5 rounded-full hover:bg-red-600 hover:text-white transition'><RiFacebookLine /></a>
                            <a href="#" className='border border-gray-300 p-1.5 rounded-full hover:bg-red-600 hover:text-white transition'><TiSocialTwitter /></a>
                            <a href="#" className='border border-gray-300 p-1.5 rounded-full hover:bg-red-600 hover:text-white transition'><LiaInstagram /></a>
                            <a href="#" className='border border-gray-300 p-1.5 rounded-full hover:bg-red-600 hover:text-white transition'><RiYoutubeFill /></a>
                        </div>
                    </div>
                </div>

                <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.
                </p>

                <div className='bg-[#ffe5e5] rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 my-6 shadow-sm'>
                    <RiDoubleQuotesR className='w-12 h-12 text-red-500 flex-shrink-0' />
                    <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                </div>

                <div className='bg-gradient-to-r from-[#ff1408] to-[#ff8a38] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row justify-between items-center gap-4 shadow-xl my-8'>
                    <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-center sm:text-left'>Looking to Hire Influencers?</h2>
                    <button className='bg-white text-red-600 font-semibold px-6 py-2.5 rounded-xl hover:bg-black hover:text-white transition text-sm shadow-md flex-shrink-0'>
                        + Contact With Me
                    </button>
                </div>
            </div>

            {/* Related Posts */}
            <div className='bg-[#fff1f1] py-12 px-4 sm:px-8 mt-12'>
                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-6'>My Related Posts</h2>
                    <Slider {...settings}>
                        {vedios.map((item, index) => (
                            <div key={index} className='px-2'>
                                <div className='relative rounded-3xl overflow-hidden shadow-md group h-64 sm:h-80'>
                                    <img src={item} alt={`Gallery item ${index + 1}`} className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition duration-500" />
                                    <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                                        <IoPlay className='border border-white text-white rounded-full p-2.5 hover:text-red-600 mb-2 w-10 h-10 text-3xl hover:bg-white transition cursor-pointer shadow-md' />
                                        <p className='text-sm sm:text-base font-bold text-white mb-1 hover:text-pink-300 transition-colors line-clamp-1'>Smiley woman pop party studio medium shot</p>
                                        <p className='text-xs text-gray-200 font-semibold'>@facebook</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Stream_details;