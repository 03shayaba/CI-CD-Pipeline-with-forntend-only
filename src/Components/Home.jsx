import React from 'react';
import banner from '../assets/banner-2-img.png';
import userDP from '../assets/user-dp-2.png';
import love from '../assets/love.svg';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-[#f48cd0] via-[#fec592] to-[#f5bbbf] overflow-hidden pt-24 sm:pt-28 pb-12 lg:pb-20'>
            <div className='max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10'>
                {/* Left Text Content */}
                <div className='flex flex-col mt-4 sm:mt-8 text-center lg:text-left items-center lg:items-start z-10'>
                    <div className='inline-block bg-white rounded-full px-3 py-1.5 shadow-md mb-4'>
                        <div className='flex items-center gap-2 relative pr-4'>
                            <img src={userDP} alt="User DP" className='w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white' />
                            <div className='text-gray-700 text-left'>
                                <p className='text-xs leading-tight'>Bryan has</p>
                                <p className='font-bold text-xs leading-tight'>liked</p>
                            </div>
                            <div className='absolute right-0 -top-1'>
                                <img src={love} alt="Love Icon" className='w-5 h-5' />
                            </div>
                        </div>
                    </div>
                    <div className='text-white font-bold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight space-y-1 sm:space-y-2'>
                        <h1>I'm Linda Susan</h1>
                        <h1>Beauty &amp; Lifestyle</h1>
                        <h1>Influencer</h1>
                    </div>

                    {/* Buttons */}
                    <div className='mt-6 flex flex-wrap justify-center lg:justify-start gap-4'>
                        <button className='bg-gradient-to-r from-[#fe9651] via-[#fb6077] to-[#f8289c] text-white text-base font-semibold rounded-lg px-6 py-2.5 shadow-lg hover:brightness-110 transition'>
                            About Me
                        </button>
                        <div className="p-[1px] rounded-lg bg-gradient-to-r from-[#f8289c] to-white inline-block">
                            <button className="bg-[#fac1b7] hover:bg-[#f8289c] text-white text-base font-semibold rounded-lg px-6 py-2.5 transition-all duration-300">
                                Contact Me
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Image Container */}
                <div className='relative w-full max-w-[500px] lg:max-w-[550px] flex justify-center mt-4 lg:mt-0'>
                    <div className='w-full flex justify-center'>
                        <img className='w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[480px] h-auto object-contain' src={banner} alt="Banner" />
                    </div>

                    {/* Followers Badge */}
                    <div className='absolute top-2 right-2 sm:top-10 sm:right-6 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white/80 backdrop-blur-md p-2 flex flex-col items-center justify-center shadow-xl rotate-[-12deg]'>
                        <h1 className='text-lg sm:text-2xl text-red-600 font-bold leading-none'>74K</h1>
                        <p className='text-[10px] sm:text-xs text-gray-800 font-medium'>Followers</p>
                    </div>

                    {/* Liked Badge */}
                    <div className="absolute bottom-4 left-2 sm:left-6 bg-white rounded-full shadow-xl px-3 py-1.5 flex items-center gap-2">
                        <img src={userDP} alt="User DP" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white" />
                        <div className="text-gray-700 text-xs">
                            <p className="leading-tight">Bryan has</p>
                            <p className="font-bold leading-tight">liked</p>
                        </div>
                        <img src={love} alt="Love Icon" className="w-5 h-5 ml-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;