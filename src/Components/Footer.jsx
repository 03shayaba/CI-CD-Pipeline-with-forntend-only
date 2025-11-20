import React from 'react'
import { RiFacebookLine } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { LiaInstagram } from "react-icons/lia";
import { RiYoutubeFill } from "react-icons/ri";
import logo from '../assets/logo.svg'
import footer1 from '../assets/footer-img-1.jpg'
import footer2 from '../assets/footer-img-2.jpg'
import footer3 from '../assets/footer-img-3.jpg'
import footer4 from '../assets/footer-img-4.jpg'
const Footer = () => {
  return (
    <div className=' bg-black pb-8 '>
    <div className=' mx-40  bg-gradient-to-r from-[#ff1408] to-[#ff8a38] rounded-lg p-15  '>
        <div className=' text-white flex justify-between  '>
            <div className='relative mt-2'>
                <img  className=" " src={logo} alt="Logo" />
               

            </div>
            <div className='relative'>
                <input className='bg-white text-black w-150  h-14 shadow-2xl rounded-4xl pl-3' type="text" placeholder='Enter Email' />
                <div className='absolute top-1 right-2 bg-gradient-to-r from-[#f8289d] to-[#ff8a38] text-white rounded-4xl px-4 py-3 cursor-pointer hover:bg-gradient-to-l hover:from-[#f8289d] hover:to-[#ff8a38] '>
                    <button>Get NewsLetter</button>
                </div>
            </div>
            <div className='flex justify-between  mt-2 text-3xl gap-5 '>
                <RiFacebookLine className='border  w-10 h-10 rounded-full  p-2 ' />
                <TiSocialTwitter  className='border  w-10 h-10 rounded-full  p-2 '/>
                <LiaInstagram className='border  w-10 h-10 rounded-full  p-2 '/>
                <RiYoutubeFill className='border  w-10 h-10 rounded-full  p-2 '/>
            </div>
        </div>
        </div>
        <div className=' flex justify-between text-white mx-40 mt-5 text-lg font-bold '>
            <h2>Get in touch</h2>
            <h2>Browse Categories</h2>
            <h2>Instagram feed</h2>
        </div>
         <div className='mt-3'>
        <div className='flex justify-between text-white mx-40'>
            <h1 className='text-gray-200 text-3xl '> <a href="#" className=''>contact.me@gmail.com</a></h1>
            <div className='flex  text-white'>
                <ul className='ml-5 text-gray-500 text-[14px] mt-2'>
                    <li> <a href="#" className='hover:text-red-700'>Music</a></li>
                    <li><a href="#" className='hover:text-red-700'>Gaming</a></li>
                    <li><a href="#" className='hover:text-red-700'>Art</a></li>
                </ul>
                <ul className='ml-5 text-gray-500 text-[14px] mt-2'>
                    <li><a href="#" className='hover:text-red-700'>Sports</a></li>
                    <li><a href="#" className='hover:text-red-700'>Fashion</a></li>
                    <li><a href="#" className='hover:text-red-700'>Photography</a></li>
                </ul>
            </div>
            <div className=' flex '>
                <img className='w-20 h-20 rounded-2xl ml-2' src={footer1} alt="" />
                <img className='w-20 h-20 rounded-2xl ml-2' src={footer2} alt="" />
                <img className='w-20 h-20 rounded-2xl ml-2' src={footer3} alt="" />
                <img className='w-20 h-20 rounded-2xl ml-2' src={footer4} alt="" />
            </div>
            </div>
        </div>

        <hr className='border-gray-600 mx-40 mt-7' />
        <h2 className='text-[12px] text-center font-semibold cursor-pointer text-gray-200 mt-7'>Copyright ©2024 Developed by Influtics</h2>
    </div>

  )
}

export default Footer