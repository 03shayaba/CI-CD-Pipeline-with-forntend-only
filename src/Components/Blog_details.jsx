
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
        <div className=" px-40 py-16">

            {/* Heading */}
            <h1 className="text-4xl text-black font-bold text-center mb-12">
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

                        <div className='mt-10 flex gap-2 '>

                            <img
                                src={blog2}
                                alt="Blog"
                                className="rounded-xl my-4  w-1/2"
                            />
                            <img src={blog3} alt="" className="rounded-xl my-4  w-1/2 " />
                        </div>


                        <p className='text-gray-600'>The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.</p>

                        <div className=' flex items-center   justify-center bg-[#ffe5e5] rounded-xl mt-10 mb-5 p-5'>

                            <p className="mr-10  text-sm text-gray-600  italic">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</p>
                            <RiDoubleQuotesR className='ml-5 w-30 h-30 text-red-500' />
                        </div>

                        <p className='text-gray-500'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>
                        <br />
                        <hr className='text-gray-200 mt-5' />
                        <div className='flex justify-between mt-5 '>
                            <div className='flex gap-4'>
                                <h1>Tags:</h1>
                                <button className='bg-red-50 rounded-xl p-1 hover:bg-red-700 hover:text-white'>Reseller</button>
                                <button className='bg-red-50 rounded-xl p-1 hover:bg-red-700 hover:text-white'>Hosting</button>
                                <button className='bg-red-50 rounded-xl p-1 hover:bg-red-700 hover:text-white'>WP Hosting</button>
                            </div>
                            <div className='flex gap-2 mt-2'>
                                <h1 className=''>Share:</h1>
                                <TiSocialFacebook className='w-5 h-5' />
                                <FaTwitter className='w-5 h-5' />
                                <TbBrandInstagram className='w-5 h-5' />
                                <FaYoutube className='w-5 h-5' />

                            </div>
                        </div>
                        <hr className='text-gray-200 mt-5 mb-10' />


                        <div>
                            <h1>O2 Comments</h1>
                            <div className='flex flex-col gap-4 mt-5'>
                                {user.map((u) => (
                                    <div key={u.id}>
                                        <div className='flex '>
                                            <img src={u.img} alt="user" className='w-12 h-12 rounded-full' />
                                            <div className='pl-2'>
                                                <h1 className='text-gray-600'>Ralph edwards</h1>
                                                <p className='text-gray-600 text-[12px]'>March 20, 2023 at 2:37 pm</p>
                                            </div>


                                        </div>

                                        <p className='mt-6 text-gray-600'>Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy</p>
                                        <button className='bg-red-50 text-red-600 rounded-xl px-2 py-1 mt-3 hover:bg-red-700 hover:text-white'>Retry</button>

                                        <hr className='text-gray-200 mt-5' />
                                    </div>
                                ))}
                                <div>

                                </div>
                            </div>

                        </div>


                        {/* form */}

                        <form action="">

                            <h1 className='text-xl font-bold mb-10 mt-10'>Leave a comment</h1>
                            
                            <div className=' flex justify-between'>
                            <div className='flex gap-3 '>
                                <label htmlFor="">Your Name</label>
                                
                                <input className='border border-red-300 rounded-lg px-3 py-2 focus:outline-none' type="text" placeholder='Enter your name' />
                            </div>

                            <div className='flex gap-3'>
                                <label htmlFor="">Your Email</label>
                                
                                <input className='border border-red-300 rounded-lg px-3 py-2 focus:outline-none' type="email" placeholder='Enter your email' />
                            </div>
                            </div>
                            <br />
                            <br />
                            <label className='mt-5 text-bold' htmlFor=""> Write Comment</label>
                            <textarea className='w-full border border-red-300 rounded-lg px-3 py-2 focus:outline-none mt-5' rows="5" placeholder='Write your comment here'></textarea>
                            <br />
                            <button className='bg-red-700 text-white px-4 py-2 rounded-lg mt-5 hover:bg-red-500'>Post Comment</button>
                        </form>


                    </div>




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


        </div>
    )
}

export default Blog_details