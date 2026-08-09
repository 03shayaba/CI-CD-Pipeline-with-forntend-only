import React from 'react'
import contactbg from '../assets/contact-bg.jpg'
import Img from '../assets/contact-img.png'
import contactlogo from '../assets/contact-form-icon.svg'
import img1 from '../assets/partner-1.png'
import img2 from '../assets/partner-2.png'
import img3 from '../assets/partner-3.png'
import img4 from '../assets/partner-4.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const data = [
    {
        id: 1,
        img: img1
    },
    {
        id: 2,
        img: img2
    },
    {
        id: 3,
        img: img3
    },
    {
        id: 4,
        img: img4
    },{
        id: 1,
        img: img1
    },
    {
        id: 2,
        img: img2
    },
    {
        id: 3,
        img: img3
    },
    {
        id: 4,
        img: img4
    },
  
    

]

const Partners = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 2 }
            }
        ]
    };
    return (
        <div className='bg-[#fff1f1] w-full py-12 px-4 sm:px-8'>
            <div className='max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 rounded-3xl p-6 sm:p-10 bg-cover bg-center' style={{ backgroundImage: `url(${contactbg})` }}>
                {/* Form Side */}
                <div className='bg-white text-black w-full lg:w-1/2 p-6 sm:p-10 rounded-2xl shadow-2xl'>
                    <form action="" className='space-y-4'>
                        <div>
                            <img className='w-10 h-10 mb-2' src={contactlogo} alt="Contact logo" />
                            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-gray-900 mb-2'>
                                Let’s Work Together on your next Project
                            </h1>
                            <p className='text-gray-600 text-xs sm:text-sm mb-4'>
                                Consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <label className='text-xs font-bold block text-gray-700 mb-1'>Your Name</label>
                                <input type="text" placeholder='Enter your name' className='border border-gray-300 w-full px-4 py-2.5 rounded-xl bg-[#fafafa] text-sm focus:outline-none focus:ring-2 focus:ring-pink-300' />
                            </div>
                            <div>
                                <label className='text-xs font-bold block text-gray-700 mb-1'>Your Email Address</label>
                                <input type="email" placeholder='Enter your email address' className='border border-gray-300 w-full px-4 py-2.5 rounded-xl bg-[#fafafa] text-sm focus:outline-none focus:ring-2 focus:ring-pink-300' />
                            </div>
                            <div>
                                <label className='text-xs font-bold block text-gray-700 mb-1'>Your Message</label>
                                <textarea placeholder='Enter your message' rows="3" className='border border-gray-300 w-full px-4 py-2.5 rounded-xl bg-[#fafafa] text-sm focus:outline-none focus:ring-2 focus:ring-pink-300'></textarea>
                            </div>
                        </div>
                        <div className="pt-2">
                            <button className='bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-semibold px-6 py-2.5 rounded-lg hover:brightness-105 transition shadow-md w-full sm:w-auto text-sm'>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Side Illustration & Slider */}
                <div className='w-full lg:w-1/2 flex flex-col items-center justify-center text-center'>
                    <img className='w-full max-w-sm sm:max-w-md h-auto mb-6 object-contain' src={Img} alt="Contact partner illustration" />
                    <div className='w-full max-w-md sm:max-w-lg'>
                        <h2 className='text-xl sm:text-2xl font-semibold text-gray-900 mb-4'>Trusted Partners</h2>
                        <Slider {...settings}>
                            {data.map((item, index) => (
                                <div key={index} className='p-4 flex justify-center items-center'>
                                    <img className='h-8 sm:h-10 w-auto mx-auto object-contain grayscale hover:grayscale-0 transition duration-300' src={item.img} alt={`Partner ${item.id}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;