import React from 'react'
import InnerContact from '../assets/inner-contact-img.png';
import contactbg from '../assets/inner-contact-img-vector.svg'

const Contact = () => {
    return (
        <div className='bg-[#fff2f2] py-16 px-4 sm:px-8'>
            <div className='max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12'>
                {/* Left Banner Info */}
                <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left'>
                    <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>Request a Consultation</h2>
                    <div className='relative max-w-md w-full flex justify-center'>
                        <img src={contactbg} alt="Contact Background" className="w-full h-auto object-contain" />
                        <div className='absolute inset-0 flex items-center justify-center p-4'>
                            <img src={InnerContact} alt="Inner Contact" className="max-w-[80%] h-auto rounded-xl" />
                        </div>
                    </div>
                </div>

                {/* Right Form Card */}
                <div className='bg-white w-full lg:w-1/2 p-6 sm:p-10 rounded-3xl shadow-2xl border border-gray-100'>
                    <form action="" className="space-y-4">
                        <h2 className='text-2xl font-bold text-gray-900 mb-6 text-center'>Get In Touch</h2>
                        
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <input type="text" placeholder='First Name' className='border border-gray-300 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-400' required />
                            <input type="text" placeholder='Last Name' className='border border-gray-300 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-400' required />
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <input type="email" placeholder='Email Address' className='border border-gray-300 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-400' required />
                            <select required className='border border-gray-300 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-400 bg-white text-gray-700'>
                                <option value="">Select Subject</option>
                                <option value="1">Brand Collaboration</option>
                                <option value="2">Social Management</option>
                                <option value="3">Sponsorship</option>
                                <option value="4">General Query</option>
                            </select>
                        </div>

                        <div>
                            <textarea placeholder='Your Message' rows="4" className='border border-gray-300 w-full p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-400' required></textarea>
                        </div>

                        <div className='flex items-start gap-2 pt-2'>
                            <input type="radio" required className='mt-1 text-red-600 focus:ring-red-500'/>
                            <p className='text-xs text-gray-600 font-medium leading-tight'>Collaboratively formulate principle capital. Progressively evolve user-centric solutions.</p>
                        </div>

                        <div className='pt-2'>
                            <button className='text-center text-white font-semibold w-full bg-red-600 hover:bg-black p-3 rounded-xl shadow-lg transition-colors text-sm'>
                                Submit Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;