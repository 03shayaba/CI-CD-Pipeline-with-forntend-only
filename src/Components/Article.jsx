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
    <div className='mb-30'>
        <h1 className='text-4xl font-bold mt-20 mb-10 text-center'>Latest Articles & News</h1>
        <div className=' flex   mx-32'>
            {
                data.map((item, index) =>(
                    <div key={index} className='w-full  p-5 m-5 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 '>
                        <div>
                            <img className='w-full  mx-auto' src={item.img} alt={`Article ${item.id}`} />
                        
                        <div className='flex flex-col mt-5'>
                            <div className='flex '>
                                <FiUser className='mr-2 text-xl text-red-700' />
                                <p className='text-sm text-gray-800 font-bold'>By Admin</p>
                                <IoPricetagOutline className='mx-2 text-xl text-red-700' />
                                <p className='text-sm text-gray-800 font-bold'>Music</p>
                            </div>
                        </div>
                      
                       <a href="#">
                        <h2 className='mt-3 text-lg text-gray-800 font-bold'>Many of those Products Offer the Potential</h2>
                       </a>

                       <div className='flex items-center mt-2 text-red-700 font-semibold  cursor-pointer hover:text-black'>
                        <a href="#" className='mr-2 flex items-center'>
                        <h2 className='mr-2'>Read More</h2>
                        <FaArrowRight />
                        </a>
                        </div>
                    </div>
                      </div>
                ))
            }
        

        </div>
    </div>
  )
}

export default Article