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
        <div className='max-w-7xl mx-4 sm:mx-8 lg:mx-auto my-12 bg-[#fff1f1] rounded-2xl p-4 sm:p-8 shadow-sm'>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-gray-300'>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900'>What will I give You?</h1>
                <button className='bg-gradient-to-r from-[#fe9651] via-[#fb6077] to-[#f8289c] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg hover:brightness-105 transition'>
                    View All Services
                </button>
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-start gap-8 mt-6 sm:mt-8'>
                {/* Services list */}
                <div className='w-full lg:w-1/3 flex flex-col gap-2.5'>
                    {servicesData.map((item) => (
                        <button key={item.id} onClick={() => setActive(item.id)}
                            className={`w-full py-3.5 px-4 rounded-xl text-left font-medium text-sm sm:text-base transition-all duration-300 shadow-sm 
                ${active === item.id
                                    ? 'bg-gradient-to-r from-[#fe9651] via-[#fb6077] to-[#f8289c] text-white shadow-md'
                                    : 'bg-white text-gray-800 hover:bg-gray-50'
                                }`}
                        >{item.title}</button>
                    ))}
                </div>

                {/* Service Card */}
                <div className='w-full lg:w-2/3 bg-white rounded-2xl p-5 sm:p-8 flex flex-col md:flex-row gap-6 shadow-md items-center'>
                    <div className='w-full md:w-1/2 h-52 sm:h-64 flex-shrink-0'>
                        <img className='w-full h-full object-cover rounded-xl' src={Service} alt="Service" />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-3'>Strategy Development</h2>
                        <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
                            Consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;