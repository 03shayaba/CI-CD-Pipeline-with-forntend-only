import React from 'react'
import banner from '../assets/banner-2-img.png'
import userDP from '../assets/user-dp-2.png'
import love from '../assets/love.svg'
const Home = () => {
    return (
        <div className='bg-gradient-to-r from-[#f48cd0] via-[#fec592] to-[#f5bbbf]    '>


            <div className='  flex flex-col pl-2 pr-4 md:flex-row items-center  pt-15 md:pl-15 md:pr-15 mx-10' >
                <div className='flex-col mt-20  '>
                    <div className='w-[140px] h-[49px] md:w-[150px] md:h-[55px]  bg-white rounded-full'>
                        <div className='flex items-center mb-5  relative'>
                            <h1>CD working  Successfully</h1>
                            <img src={userDP} alt="User DP" className='w-10 h-10 md:w-12 md:h-12 m-1  rounded-full border-2 border-white ' />
                            <div className='ml-1 text-gray-700'>
                                <p className='text-sm'>Bryan has</p>
                                <p className='font-bold'>liked</p>
                            </div>
                            <div className='ml-4  absolute right-3 -top-3'>
                                <img src={love} alt="Love Icon" className='w-6 h-6' />
                            </div>
                        </div>
                    </div>
                    <div className=' text-white tracking-tighter font-bold   text-4xl  md:text-6xl  xl:text-8xl xl:font-semibold  lg:tracking-tighter ' >
                        <h1 >I'm Linda Susan</h1>
                        <h1>Beauty & Lifestyle</h1>
                        <h1> Influencer</h1>
                    </div>

                    {/* buttons */}
                    <div className='mt-4 flex gap-3'>
                        <button className=' bg-gradient-to-r from-[#fe9651] via-[#fb6077] to-[#f8289c] text-white text-lg font-semibold rounded-md w-[130px] h-[42px] hover:bg-gradient-to-l hover:from-[#fe9651] hover:via-[#fb6077] hover:to-[#f8289c] '>About Me</button>

                        <div className="p-[1px] rounded-md bg-gradient-to-r from-[#f8289c] to-white inline-block">
                            <button className="bg-[#fac1b7] md:bg-[#f7a1bd] text-white text-lg font-semibold rounded-md w-[130px] h-[40px]  hover:bg-[#f8289c]  transition-all duration-300">
                                Contact Me
                            </button>
                        </div>

                    </div>
                </div>
               <div className='w-[800] relative'>
                <div className='  pt-4 pl-30'>
                    <img className='w-[200px] sm:w-[300px] md:w-[500px] pt-4 md:pt-18 ml-0 lg:ml-0  ' src={banner} alt="Banner" />
                </div>

                <div className='absolute  w-27 h-21 top-[52px] right-[-79px]  md:top-[195px] md:right-[1px]   xl:top-83 xl:right-20 2xl:right-[5px]  2xl:top-[258px] md:w-32 md:h-23 rounded-[50%] bg-white bg-opacity-70  rotate-[-20deg] backdrop-blur-md  p-4 flex flex-col items-center shadow-lg'>
                    <h1 className='rotate-[19deg]  text-2xl text-red-700 font-bold'>74K</h1>
                    <p className='rotate-[19deg]'>Followers</p>
                </div>

                
                    <div className="absolute  top-[65%] left-[-65px] md:left-[-45px] xl:top-[69%] xl:left-[20] 2xl:top-[65%] 2xl:left-[20%]  w-[140px] h-[49px] md:w-[150px] md:h-[55px] bg-white rounded-full shadow-lg">
                        <div className="flex items-center relative px-2 py-1">
                            <img
                                src={userDP}
                                alt="User DP"
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white"
                            />
                            <div className="ml-2 text-gray-700">
                                <p className="text-sm leading-tight">Bryan has</p>
                                <p className="font-bold leading-tight">liked</p>
                            </div>
                            <div className="absolute right-2 -top-3">
                                <img src={love} alt="Love Icon" className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home