import React from 'react'
import logo from '../assets/logo.svg';
import { useState, useEffect } from "react";
// import './index.css'
const Navbar = () => {

  return (

    <div>
      <nav className='fixed w-full z-10 '>
        <div className='ml-10 mr-10  flex justify-between items-center p-5 bg-gradient-to-r from-[#efcce3] via-[#f6d3b4] to-[#ebccce]  shadow-2xl text-black   rounded-b-xl  '>
          <div className="flex items-center ">
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex  flex-row justify-between space-x-6">
            <ul className="flex space-x-4 justify-between pt-2 ">
              <li className='pr-6'><a href="/">Home</a></li>
              <li className='pr-6'><a href="/about">About Me</a></li>
              <li className="relative group pr-6 text-black cursor-pointer">
                <span className="hover:text-red-500">Streaming Videos</span>

                <ul className="absolute  hidden group-hover:block bg-white text-black mt-2 rounded-md shadow-lg w-50">
                  <li className="px-4 py-2 hover:text-pink-400 text-[14px]">
                    <a href="/streaming1">Streaming Video 1</a>
                  </li>
                  <hr className='text-gray-400' />
                  <li className="px-4 py-2 hover:text-pink-400 text-[14px]">
                    <a href="/streaming2">Streaming Video 2</a>
                  </li>
                  <hr className='text-gray-400' />
                  <li className="px-4 py-2 hover:text-pink-400 text-[14px]">
                    <a href="/streaming3">Streaming Video 3</a>
                  </li>
                   <hr className='text-gray-400' />
                  <li className="px-4 py-2 hover:text-pink-400 text-[14px]">
                    <a href="/streaming4">Streaming Video Details</a>
                  </li>

                </ul>
              </li>

              <li className='pr-6'><a href="#">Pages</a></li>
              <li className="relative group pr-6 text-black cursor-pointer">  
                <span  className="hover:text-red-500">Blog</span>
                <ul className="absolute  hidden group-hover:block bg-white text-black mt-2 rounded-md shadow-lg w-50">
                <li className="px-4 py-2 hover:text-pink-400 text-[14px]">
                    <a href="/blog">Blog</a>
                  </li>
                  <hr className='text-gray-400' />
                  <li className="px-4 py-2 hover:text-pink-400 text-[14px]">
                    <a href="/blog-details">Blog Details</a>
                  </li>
                  </ul>
                  
                  

              </li>
              <li className='pr-6'><a href="/contact">Contact</a></li>
            </ul>
            <button className="bg-gradient-to-r from-[#fea447] via-[#fc6f6c] to-[#f82c9a] text-white px-2 py-2 rounded w-40">+Follow button</button>
          </div>
        </div>
      </nav>

      {/* <aside className="flex md:hidden bg-white p-4 fixed right-0 top-0 h-full w-64">
    <nav className='h-full flex flex-col bg-white border-r shadow -sm'>
      <div  className='p-4 pb-2 flex justify-between items-center'>
         <img src={logo} alt="Logo" />
         <button className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
            {/* <ChevronFirst /> */}
      {/* </button>
      </div>

      <ul className='flex-1 px-3'>{children}</ul>
      <div className='border-t flex p-3'>
        <img src="" alt="" />
      </div>
    </nav> */}
      {/* // </aside> */}
    </div>

  )
}

export default Navbar