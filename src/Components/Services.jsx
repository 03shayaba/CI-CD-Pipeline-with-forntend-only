import React from 'react'
import Service from '../assets/service.jpg'
import { useState } from 'react';
import Lives from './Lives';
const Services = () => {
    const [active, setActive] = useState(null) // track which button is clicked

    // Services data (dynamic render)
    const servicesData = [
        {
            id: 1,
            title: "Brand Collaborations",

        },
        {
            id: 2,
            title: "Empowering Creators",

        },
        {
            id: 3,
            title: "Content Planner",

        },
        {
            id: 4,
            title: "Relevant Content",

        },
        {
            id: 5,
            title: "Social Media Management",

        },
    ]

    return (
        <div className='mx-40 h-[500px] my-20 bg-[#fff1f1] rounded-xl '>
            <div className='flex justify-between items-center p-4'>
                <h1 className='text-4xl font-bold pl-5'>what will I give You?</h1>
                <button className='w-35 bg-red-700 rounded mr-10  bg-gradient-to-r from-[#fe9651] via-[#fb6077] to-[#f8289c] text-white text-sm font-semibold  h-[30px] hover:bg-gradient-to-l hover:from-[#fe9651] hover:via-[#fb6077] hover:to-[#f8289c]'>View All Services</button>
            </div>
            <hr className='mx-10 text-gray-400 shadow-4xl text-5xl' />

            <div className='flex justify-between items-center'>
                <div className='flex flex-col ml-10 mt-10 text-lg'>
                    {servicesData.map((item) => (
                        <button ket={item.id} onClick={() => setActive(item.id)}
                            className={`w-80 h-15 rounded-lg my-1 pl-2 text-start transition-all duration-300 
                ${active === item.id
                                    ? 'bg-gradient-to-r from-[#fe9651] via-[#fb6077] to-[#f8289c] text-white'
                                    : 'bg-white text-gray-800'
                                }`}
                        >{item.title}</button>
                    ))}
                </div>
                <div className='flex bg-white rounded-lg py-6 mt-11 gap-4 ml-8  shadow-lg mr-8'>
                    <div className=' h-70 ml-8 mb-2 '>
                        <img className=' w-300 h-73 rounded-lg' src={Service} alt="" />
                    </div>
                    <div>
                        <h1 className='text-lg font-bold'>Strategy Development</h1>
                        <p className='text-sm text-gray-400 font-medium'>consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.</p>


                    </div>
                </div>
            </div>
            
                
        </div>
    )
}

export default Services