
import React from 'react'
import blog from '../assets/blog-1.jpg'
import blog2 from '../assets/blog-2.jpg'
import blog3 from '../assets/blog-3.jpg'
// import { FaArrowRightLong } from "react-icons/fa6";
// import { IoShareSocialSharp } from "react-icons/io5";
import img1 from '../assets/jo-article-1.jpg';
import img2 from '../assets/jo-article-2.jpg';
import img3 from '../assets/jo-article-3.jpg';
import { CiCalendar } from "react-icons/ci";
import { IoIosCheckmark } from "react-icons/io";
import { RiDoubleQuotesR } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { TbBrandInstagram } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa6";
import user1 from '../assets/user-5.png';
import user2 from '../assets/user-6.png';

const Blog_details = () => {
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
    const user = [
        { id: 1, img: user1 },
        { id: 2, img: user2 }
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl text-black font-bold text-center mb-8 sm:mb-12">
                Our Blog
            </h1>

            {/* Main Layout */}
            <div className="flex flex-col lg:flex-row gap-10">

                {/* LEFT SIDE – Blog Posts */}
                <div className="w-full lg:w-4/6 space-y-8 ">

                    <div

                        className=" p-6 bg-white text-black"
                    >
                        <img
                            src={blog}
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

                        <p className="text-gray-600 mb-10">
                            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>

                        <p className="text-gray-600">Vivamus condimentum a sem nec vehicula. In congue feugiat molestie. Aliquam nec nulla neque. Donec ac ipsum in neque efficitur pulvinar vitae sagittis tortor. Mauris ut fringilla quam, sit amet tempus lacus. Aliquam vitae tellus auctor, laoreet turpis commodo, condimentum neque. Maecenas congue accumsan eros non faucibus. Fusce dignissim mi eget magna ornare porttitor. Donec velit ligula, dignissim ut tortor vitae, viverra blandit turpis. Nunc vel dictum massa. Nam ut massa at metus placerat sagittis a semper elit.</p>
                        <br />
                        <div className='flex '>
                            <IoIosCheckmark className=' text-red-700' />
                            <p className='text-sm'>Technology Support Allows Erie non-profit to Serve.</p>
                        </div>
                        <div className='flex  '>
                            <br />
                            <IoIosCheckmark className='text-red-700' />
                            <p className='text-sm'>Web design done Delightful Visualization</p>
                        </div>
                        <div className='flex '>
                            <br />
                            <IoIosCheckmark className='text-red-700' />
                            <p className='text-sm'>Software Makes Your Profit Double if You Scale Properly.</p>
                        </div>

                        <p className='text-gray-600 mt-5'>Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi.</p>

                        <div className='mt-8 flex flex-col sm:flex-row gap-4'>
                            <img
                                src={blog2}
                                alt="Blog 2"
                                className="rounded-xl w-full sm:w-1/2 object-cover"
                            />
                            <img 
                                src={blog3} 
                                alt="Blog 3" 
                                className="rounded-xl w-full sm:w-1/2 object-cover" 
                            />
                        </div>

                        <p className='text-gray-600 mt-6'>The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.</p>

                        <div className='flex flex-col sm:flex-row items-center justify-between bg-[#ffe5e5] rounded-xl mt-8 mb-6 p-6 gap-4'>
                            <p className="text-sm text-gray-700 italic leading-relaxed">
                                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                            </p>
                            <RiDoubleQuotesR className='w-12 h-12 text-red-500 shrink-0' />
                        </div>

                        <p className='text-gray-500'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>
                        <br />
                        <hr className='border-gray-200 mt-5' />
                        
                        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-5'>
                            <div className='flex flex-wrap items-center gap-2'>
                                <h4 className='font-bold text-gray-800 text-sm'>Tags:</h4>
                                <button className='bg-red-50 text-xs font-semibold px-3 py-1 rounded-xl hover:bg-red-700 hover:text-white transition'>Reseller</button>
                                <button className='bg-red-50 text-xs font-semibold px-3 py-1 rounded-xl hover:bg-red-700 hover:text-white transition'>Hosting</button>
                                <button className='bg-red-50 text-xs font-semibold px-3 py-1 rounded-xl hover:bg-red-700 hover:text-white transition'>WP Hosting</button>
                            </div>
                            <div className='flex items-center gap-3'>
                                <h4 className='font-bold text-gray-800 text-sm'>Share:</h4>
                                <div className="flex gap-2 text-gray-700">
                                    <TiSocialFacebook className='w-5 h-5 hover:text-red-700 cursor-pointer' />
                                    <FaTwitter className='w-5 h-5 hover:text-red-700 cursor-pointer' />
                                    <TbBrandInstagram className='w-5 h-5 hover:text-red-700 cursor-pointer' />
                                    <FaYoutube className='w-5 h-5 hover:text-red-700 cursor-pointer' />
                                </div>
                            </div>
                        </div>
                        <hr className='border-gray-200 mt-5 mb-10' />

                        <div>
                            <h3 className='text-lg font-bold mb-4'>02 Comments</h3>
                            <div className='flex flex-col gap-6 mt-5'>
                                {user.map((u) => (
                                    <div key={u.id}>
                                        <div className='flex items-center gap-3'>
                                            <img src={u.img} alt="user" className='w-12 h-12 rounded-full object-cover' />
                                            <div>
                                                <h4 className='text-gray-900 font-bold text-sm'>Ralph Edwards</h4>
                                                <p className='text-gray-500 text-xs'>March 20, 2023 at 2:37 pm</p>
                                            </div>
                                        </div>

                                        <p className='mt-4 text-gray-600 text-sm leading-relaxed'>Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy</p>
                                        <button className='bg-red-50 text-red-600 font-bold text-xs rounded-xl px-3 py-1 mt-3 hover:bg-red-700 hover:text-white transition'>Reply</button>

                                        <hr className='border-gray-200 mt-5' />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form */}
                        <form action="" className="space-y-4 mt-8">
                            <h3 className='text-xl font-bold mb-4'>Leave a comment</h3>
                            
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div className='flex flex-col gap-1.5'>
                                    <label className="text-xs font-semibold text-gray-700">Your Name</label>
                                    <input className='border border-red-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400' type="text" placeholder='Enter your name' required />
                                </div>

                                <div className='flex flex-col gap-1.5'>
                                    <label className="text-xs font-semibold text-gray-700">Your Email</label>
                                    <input className='border border-red-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400' type="email" placeholder='Enter your email' required />
                                </div>
                            </div>

                            <div className='flex flex-col gap-1.5 pt-2'>
                                <label className='text-xs font-semibold text-gray-700'>Write Comment</label>
                                <textarea className='w-full border border-red-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400' rows="4" placeholder='Write your comment here' required></textarea>
                            </div>

                            <button className='bg-red-700 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-red-600 transition text-sm w-full sm:w-auto'>Post Comment</button>
                        </form>
                    </div>
                </div>

                {/* RIGHT SIDE – Sidebar */}
                <div className="w-full lg:w-2/6 space-y-8">
                    {/* Search */}
                    <div className="bg-[#ffe5e5] p-6 rounded-2xl py-8">
                        <label className="block mb-2 font-semibold">Search</label>
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none"
                        />
                    </div>

                    {/* Categories */}
                    <div className="bg-[#ffe5e5] p-6 rounded-2xl py-8">
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
                                className="flex justify-between text-gray-800 py-2 border border-gray-300 bg-white px-3 rounded-lg mb-2 hover:bg-red-700 hover:text-white cursor-pointer transition"
                            >
                                <p className="text-sm font-medium">{title}</p>
                                <p className="text-sm font-bold">{count}</p>
                            </div>
                        ))}
                    </div>

                    {/* Popular Posts */}
                    <div className="bg-[#ffe5e5] p-6 rounded-2xl py-8">
                        <h3 className="text-lg font-bold mb-4">Popular Posts</h3>
                        {popularPosts.map((post) => (
                            <div key={post.id} className="mb-4">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={post.img}
                                        alt="Popular Post"
                                        className="w-16 h-16 rounded-lg mr-4 object-cover shrink-0"
                                    />
                                    <div>
                                        <div className='flex items-center text-red-700 mb-1'>
                                            <CiCalendar className="inline-block mr-1 text-red-700" />
                                            <p className="text-xs text-red-700">14/03/2024</p>
                                        </div>
                                        <p className='text-black text-sm font-bold leading-snug line-clamp-2'>How to get the first 100 customers for your business</p>
                                    </div>
                                </div>
                                <hr className='border-gray-300 w-full' />
                            </div>
                        ))}
                    </div>

                    {/* Tags */}
                    <div className="bg-[#ffe5e5] p-6 rounded-2xl py-8">
                        <h3 className="text-lg font-bold mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Business", "Marketing", "Sales", "Finance", "Design", "Development", "Productivity"].map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-white text-gray-800 px-3 py-1 rounded-md text-sm hover:bg-red-700 hover:text-white cursor-pointer transition"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Blog_details