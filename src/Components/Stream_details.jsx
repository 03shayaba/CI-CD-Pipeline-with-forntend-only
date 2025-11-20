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
     nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
    return (
        <div>
            <div className=' relative flex justify-center items-center'>
                <img src={img} alt="Video Details" className=' rounded-4xl mt-15 w-250 mb-15' />
                <div className='absolute top-65 left-1/2'>
                    <IoPlay className=' border  border-gray-300  text-white rounded-full  hover:text-red-600 p-8  w-22 h-22  text-5xl  hover:bg-white hover:border-1 hover:border-white' />
                </div>
            </div>


            <div className='mx-50 flex '>
                <IoPricetagOutline className='mx-2 text-xl text-red-700' />
                <p className='text-gray-800 text-[14px] font-semibold'>brand Awareness</p>
            </div>

            <div className='flex flex-col mx-50'>
                <div className='text-2xl font-semibold'>Dance Your Way to Brand Awareness</div>
                <div className=" flex justify-between mx-0 mt-5">
                    <h1>Share Now</h1>
                    <div className='flex justify-end mt-2 text-3xl gap-1 '>
                        <RiFacebookLine className='border  w-7 h-7 rounded-full p-1  ' />
                        <TiSocialTwitter className='border  w-7 h-7 rounded-full p-1  ' />
                        <LiaInstagram className='border  w-7 h-7 rounded-full p-1  ' />
                        <RiYoutubeFill className='border  w-7 h-7 rounded-full p-1  ' />
                    </div>
                </div>
                <p className=' text-[16px] text-gray-500 mb-8'>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ontrary to popular belief
                </p>
                <p className=' text-[16px] text-gray-500 mb-5' >Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>

                <h1 className='text-2xl font-semibold mb-2'>Dance Your Way to Brand Awareness</h1>
                <p className=' text-[16px] text-gray-500 mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                <div>
                    <div className=' flex  gap-2 mb-3'>
                        <IoMdCheckmark className='text-red-700 ' />
                        <p className=' text-[14px] font-semibold ' >Technology Support Allows Erie non-profit to Serve.</p>

                    </div>
                    <div className=' flex  gap-2 mb-3'>
                        <IoMdCheckmark className='text-red-700' />
                        <p className=' text-[14px] font-semibold' >Web design done Delightful Visualization</p>

                    </div>
                    <div className=' flex  gap-2 mb-3'>
                        <IoMdCheckmark className='text-red-700' />
                        <p className=' text-[14px] font-semibold' >Software Makes Your Profit Double if You Scale Properly.</p>

                    </div>
                </div>


                <div className=' flex items-center   justify-center bg-[#ffe5e5] rounded-4xl mt-10 mb-5 p-5'>
                    <RiDoubleQuotesR className='ml-5 w-30 h-30 text-red-500' />
                    <p className="mr-10  text-[18px] text-gray-400  italic">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</p>
                </div>

                <div>
                    <h1 className='text-xl font-bold mb-3'>Why do we use it?</h1>
                    <p className=' text-[16px] text-gray-500 mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    <p className=' text-[16px] text-gray-500 mb-5'>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ontrary to popular belief
                    </p>
                    <p className=' text-[16px] text-gray-500 mb-5'>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                </div>

                <div className='flex  justify-between items-center bg-gradient-to-r from-[#ff1408] to-[#ff8a38] rounded-lg p-10 mb-20'>
                    <div className='text-4xl text-white pl-5'>Looking to Hire Influencers?</div>
                    <button>+ Contact With Me </button>
                </div>
                </div>
               
                <div className='bg-[#fff1f1]'>
                <div className=' pt-20 pb-30'>
                    <div className='text-4xl pl-20 font-bold mb-5'>
                        My Related Post
                    </div>
                   <div className='mx-30'>
                         <Slider {...settings}>
                        {
                            vedios.map((item, index) => (
                                <div className='relative pl-10 mb-10 mt-5'>
                                    <img key={index} src={item} alt={`Gallery item ${index + 1}`} className="inline-block    rounded-4xl" />
                                    <div className="absolute top-75 left-20">
                                        <IoPlay className=' border-1  border-white  text-white rounded-full p-3 hover:text-red-600 mb-2  w-12 h-12  text-5xl  hover:bg-white hover:border-1 hover:border-white' />
                                        <p className=' text-[20px] font-bold text-white mb-4 hover:text-pink-700'>Smiley    woman pop party studio medium shot</p>
                                        <p className='text-white text-[18px] mb-5 font-semibold '>@facebook</p>
                                    </div>
                                </div>
                            ))
                        }
                           </Slider>
                        </div>
                
                </div>
                </div>
             
            
        </div>
    )
}

export default Stream_details