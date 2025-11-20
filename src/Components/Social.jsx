import React from 'react'
import img from '../assets/inner-about-left-bg.png'
import img2 from '../assets/inner-about-img.png'
import check from '../assets/checkmark-badge.svg'
import img4 from '../assets/signature.jpg'
const Social = () => {
    return (
        <div className='mb-15'>
            <div className=' flex mb-10  mt-20 border-gray-200 border rounded-xl shadow-xl justify-between mx-40'>
                <div style={{backgroundImage: `linear-gradient(to right, black, black), url(${img})`,  backgroundBlendMode: 'saturation',}} className='w-[880px] h-[500px] bg-cover bg-center rounded-xl '>
                <img className='mt-10 ml-20 border-9 rounded-full border-white ' src={img2} alt="social" />
                    <h2 className='text-white text-2xl text-center font-bold'>Silvia Pinho</h2>
                    <div className='flex flex-col justify-center items-center mt-2'>
                        <button className='mt-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full cursor-pointer hover:bg-gradient-to-l hover:from-pink-500 hover:to-yellow-500'>Get in Touch</button>
                        <h2 className='text-white text-lg mt-2'>typically response within 24 hours</h2>
                    </div>
                    
                 </div>
                <div className=' mx-10'>
                    <h1 className='text-3xl mt-8   font-bold'>I'm a Social Media influencer & digital content creator</h1>
                    <p className='text-sm text-black mt-6 mb-7 font-light'>consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.</p>


                    <div className=' flex mt-4'>
                        <img src={check} alt="" />
                        <p className='text-sm pl-3 font-semibold'>Non mattis nulla, in ultrices diam</p>
                    </div>
                    <div className=' flex mt-4'>
                        <img src={check} alt="" />
                        <p className='text-sm pl-3 font-semibold'>Web design done Delightful Visualization</p>
                    </div>
                    <div className=' flex mt-4'>
                        <img src={check} alt="" />
                        <p className='text-sm pl-3 font-semibold'>Alienum phaedrum torquatos nec eu, vis detraxit periculis</p>
                    </div>
                    <div className=' flex mt-4'>
                        <img src={check} alt="" />
                        <p className='text-sm pl-3 font-semibold'>Software Makes Your Profit Double if You Scale Properly.</p>
                    </div>

                    <div>
                        <img className='mt-14' src={img4} alt="social" />
                    </div>
                </div>
            </div>
            <h1 className='text-4xl mx-40'>jio helps agencies like yours operate at a much larger scale 
                <span className='text-yellow-500'> with a vital </span>
                <span className='text-pink-500'>Platform to Effectively Manage</span>  and grow your network</h1>
        </div>
    )
}

export default Social