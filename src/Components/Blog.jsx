import React from 'react'
import blog from '../assets/blog-1.jpg'
import blog2 from '../assets/blog-2.jpg'
import blog3 from '../assets/blog-3.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import img1 from '../assets/jo-article-1.jpg';
import img2 from '../assets/jo-article-2.jpg';
import img3 from '../assets/jo-article-3.jpg';
import { CiCalendar } from "react-icons/ci";
const Blog = () => {
  const blogPosts = [
    { id: 1, img: blog },
    { id: 2, img: blog2 },
    { id: 3, img: blog3 }
  ]

  const popularPosts = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 }
  ];

  return (
    <div className=" px-40 py-16">

      {/* Heading */}
      <h1 className="text-4xl text-black font-bold text-center mb-12">
        Our Blog
      </h1>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-10">

        {/* LEFT SIDE – Blog Posts */}
        <div className="w-full lg:w-4/6 space-y-8 ">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border border-gray-400 rounded-2xl p-6 bg-white text-black"
            >
              <img
                src={post.img}
                alt="Blog"
                className="rounded-xl mb-4 w-full"
              />

              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <p className='text-gray-600 text-sm font-bold'><span className="text-red-700">Written by:</span> Marry Biden</p>
                <p className='hover:text-red-700'>14/03/2024</p>
              </div>

              <h2 className="text-xl font-semibold mb-2">
                Life won’s one Beast air Over above all
              </h2>

              <p className="text-gray-600">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>

              <div className=' flex justify-between  '>
                <button className="mt-4 flex items-center text-red-700 font-semibold  bg-red-100 px-2 py-2 rounded-lg hover:bg-red-700 hover:text-white ">
                  <FaArrowRightLong className="" />
                </button>
                <button className=" group mt-4 ml-6 flex items-center text-gray-600 font-semibold   hover:text-white hover:bg-red-700 px-2 py-2 rounded-lg ">
                  Share Post <IoShareSocialSharp className="ml-2 text-red-700 group-hover:text-white" />
                </button>
              </div>


            </div>
          ))}
        </div>

        {/* RIGHT SIDE – Sidebar */}
        <div className="w-full lg:w-2/6 space-y-8">

          {/* Search */}
          <div className="bg-[#ffe5e5] p-6 rounded-2xl py-10">
            <label className="block mb-2 font-semibold">Search</label>
            <input
              type="text"
              placeholder="Search here..."
              className="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none"
            />
          </div>

          {/* Categories */}
          <div className="bg-[#ffe5e5] p-6 rounded-2xl py-8 ">
            <h3 className="text-lg font-bold mb-4">Categories</h3>

            {[
              ["Product Presentation", "08"],
              ["Dedicated Video Calls", "11"],
              ["Trending Challenge", "18"],
              ["Dance Awareness", "11"],
              ["Photography", "07"]
            ].map(([title, count]) => (
              <div
                key={title}
                className="flex justify-between text-gray-black py-2 border border-gray-300  bg-white px-3 rounded-lg mb-2 hover:bg-red-700 hover:text-white cursor-pointer"
              >
                <p>{title}</p>
                <p>{count}</p>
              </div>
            ))}
          </div>

          {/* Popular Posts */}
          <div className="bg-[#ffe5e5] p-6 rounded-2xl py-12">

            <h3 className="text-lg font-bold mb-4">Popular Posts</h3>
            {popularPosts.map((post) => (
              <div key={post.id} className="mb-4">
                <div key={post.id} className="flex items-center mb-4">
                  <img
                    src={post.img}
                    alt="Popular Post"
                    className="w-16 h-16 rounded-lg mr-4"
                  />
                  <div>
                    <div className='flex  text-red-700'><CiCalendar className="inline-block mr-2 text-red-700" />
                      <p className="text-sm text-red-700">14/03/2024</p>
                    </div>
                    <p className='text-black text-sm font-bold'>How to get the first 100 customers for your business</p>
                  </div>
                </div>
                <hr className='text-gray-400 w-86' />
              </div>

            ))}

          </div>

          {/* tags */}
          <div className="bg-[#ffe5e5] p-6 rounded-2xl py-10">
            <h3 className="text-lg font-bold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["Business", "Marketing", "Sales", "Finance", "Design", "Development", "Productivity"].map((tag) => (
                <span
                  key={tag}
                  className="bg-white text-gray-800 px-3 py-1 rounded-md text-sm hover:bg-red-700 hover:text-white cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>


        </div>
      </div>

      <div className=' flex gap-2 mt-10'>
        <h1 className='text-white bg-red-700 rounded-full w-10 h-10 px-4 py-2 hover:bg-red-300 cursor-pointer hover:text-black'>1</h1>
        <h1 className='text-white bg-red-700 rounded-full w-10 h-10 px-4 py-2 hover:bg-red-300 cursor-pointer hover:text-black'>2</h1>
        <h1 className='text-white bg-red-700 rounded-full w-10 h-10 px-4 py-2 hover:bg-red-300 cursor-pointer hover:text-black'>3</h1>
        <h1 className='text-white bg-red-700 rounded-full w-10 h-10 px-4 py-2 hover:bg-red-300 cursor-pointer hover:text-black'>4</h1>
        <h1 className='text-white bg-red-700 rounded-full w-10 h-10 px-4 py-2 hover:bg-red-300 cursor-pointer hover:text-black'>5</h1>
        <h1 className='text-white bg-red-700 rounded-full w-10 h-10 px-4 py-2 hover:bg-red-300 cursor-pointer hover:text-black'>6</h1>
      </div>
    </div>
  )
}

export default Blog
