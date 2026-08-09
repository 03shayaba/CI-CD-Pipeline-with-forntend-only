import React from 'react'
import img from '../assets/inner-about-left-bg.png'
import img2 from '../assets/inner-about-img.png'
import check from '../assets/checkmark-badge.svg'
import img4 from '../assets/signature.jpg'
const Social = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-8 py-12'>
            <div className='flex flex-col lg:flex-row border border-gray-200 rounded-3xl shadow-xl overflow-hidden mb-12'>
                {/* Left Profile Card */}
                <div 
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} 
                  className='w-full lg:w-1/2 p-8 sm:p-12 text-white flex flex-col items-center justify-center text-center'
                >
                    <img className='w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white object-cover shadow-md mb-4' src={img2} alt="social profile" />
                    <h2 className='text-2xl sm:text-3xl font-bold'>Silvia Pinho</h2>
                    <div className='flex flex-col items-center mt-3 space-y-2'>
                        <button className='px-6 py-2.5 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold rounded-full hover:brightness-110 transition shadow-md text-sm'>
                            Get in Touch
                        </button>
                        <p className='text-xs sm:text-sm text-gray-300 font-light'>typically responds within 24 hours</p>
                    </div>
                </div>

                {/* Right Content */}
                <div className='w-full lg:w-1/2 p-6 sm:p-10 bg-white flex flex-col justify-center'>
                    <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 leading-snug'>
                        I'm a Social Media influencer &amp; digital content creator
                    </h1>
                    <p className='text-xs sm:text-sm text-gray-600 my-4 leading-relaxed font-light'>
                        Consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.
                    </p>

                    <div className='space-y-3 mb-6'>
                        <div className='flex items-center gap-3'>
                            <img src={check} alt="" className="w-5 h-5 flex-shrink-0" />
                            <p className='text-xs sm:text-sm font-semibold text-gray-800'>Non mattis nulla, in ultrices diam</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src={check} alt="" className="w-5 h-5 flex-shrink-0" />
                            <p className='text-xs sm:text-sm font-semibold text-gray-800'>Web design done Delightful Visualization</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src={check} alt="" className="w-5 h-5 flex-shrink-0" />
                            <p className='text-xs sm:text-sm font-semibold text-gray-800'>Alienum phaedrum torquatos nec eu, vis detraxit periculis</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img src={check} alt="" className="w-5 h-5 flex-shrink-0" />
                            <p className='text-xs sm:text-sm font-semibold text-gray-800'>Software Makes Your Profit Double if You Scale Properly.</p>
                        </div>
                    </div>

                    <div>
                        <img className='h-12 w-auto object-contain' src={img4} alt="signature" />
                    </div>
                </div>
            </div>

            <h2 className='text-xl sm:text-3xl lg:text-4xl text-gray-900 text-center font-semibold leading-relaxed max-w-5xl mx-auto px-4'>
                Jio helps agencies like yours operate at a much larger scale 
                <span className='text-yellow-500 font-bold'> with a vital </span>
                <span className='text-pink-500 font-bold'>Platform to Effectively Manage</span> and grow your network
            </h2>
        </div>
    );
};

export default Social;