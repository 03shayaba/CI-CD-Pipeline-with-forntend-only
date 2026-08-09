import React from 'react'
import Article1 from '../assets/jo-article-1.jpg'
import Article2 from '../assets/jo-article-2.jpg'
import Article3 from '../assets/jo-article-3.jpg'
import { FiUser } from "react-icons/fi";
import { IoPricetagOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

const data =[
    {
        id: 1,
        img: Article1
    },
    {
        id: 2,
        img: Article2
    },
    {
        id: 3,
        img: Article3
    },
   
]

const Article = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-8 py-12 my-8'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 text-center text-gray-900'>
            Latest Articles &amp; News
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {data.map((item, index) => (
                <div key={index} className='p-4 border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col justify-between'>
                    <div>
                        <div className="rounded-xl overflow-hidden mb-4">
                            <img className='w-full h-52 object-cover hover:scale-105 transition-transform duration-500' src={item.img} alt={`Article ${item.id}`} />
                        </div>
                        
                        <div className='flex items-center gap-4 text-xs font-semibold text-gray-600 mb-2'>
                            <div className='flex items-center gap-1.5'>
                                <FiUser className='text-red-600 text-sm' />
                                <span>By Admin</span>
                            </div>
                            <div className='flex items-center gap-1.5'>
                                <IoPricetagOutline className='text-red-600 text-sm' />
                                <span>Music</span>
                            </div>
                        </div>

                        <a href="#">
                            <h2 className='text-base sm:text-lg font-bold text-gray-900 hover:text-red-600 transition-colors line-clamp-2 leading-snug'>
                                Many of those Products Offer the Potential
                            </h2>
                        </a>
                    </div>

                    <div className='mt-4 pt-3 border-t border-gray-100'>
                        <a href="#" className='inline-flex items-center text-sm font-semibold text-red-600 hover:text-gray-900 transition-colors gap-2'>
                            <span>Read More</span>
                            <FaArrowRight className="text-xs" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Article;