import React from 'react'
import InnerContact from '../assets/inner-contact-img.png';
import contactbg from '../assets/inner-contact-img-vector.svg'

const Contact = () => {
    return (
        <div className=' bg-[#fff2f2] pb-30'>
        <div className='pt-20 mx-40  flex justify-between '>
            <div  className='w-200 h-100 '>
                <h2 className='text-4xl  mb-5 font-semibold'>Request a Consultation</h2>
                <div  className='relative' >
                    <img src={contactbg} alt="Contact Background" />
                    <div className='absolute top-5 left-15'>
                   
                     <img src={InnerContact} alt="Inner Contact" />
                     </div>
                </div>
               
            </div>
            <div className='bg-white w-150 h-140 rounded-2xl shadow-2xl   '>
                <form action="">
                    <h2 className='text-xl mb-5 text-center mt-2'>Get In touch</h2>
                    <div className=' flex mx-10 justify-between'>
                    <input type="text" placeholder='full Name' className='border border-gray-400 p-3 rounded-xl focus:outline-none focus:ring-0 focus:border-gray-300' />
                    <input type="text" placeholder='full Name' className='border border-gray-400 p-3 rounded-xl focus:outline-none focus:ring-0 focus:border-gray-300' />
                    </div>
                    <div  className=' flex mx-10 justify-between mt-2'>
                    <input type="text" placeholder='full Name' className='border border-gray-400 p-3 rounded-xl focus:outline-none focus:ring-0 focus:border-gray-300' />
                    <select required className='border border-gray-400 p-3 rounded-xl px-15  text-start'>
                        <option value="">Subject 1</option>
                        <option value="1">Subject 2</option>
                        <option value="2">Subject 3</option>
                        <option value="3">Subject 4</option>
                    </select>
                    </div>
                    <div className='mx-10 mt-5'>
                    <textarea placeholder='Your Message' className='border border-gray-400 w-full h-50 rounded-xl pt-2 pl-2  focus:outline-none focus:ring-0 focus:border-gray-300' required></textarea>
                    </div>
                    <div className=' flex mx-10'>
                        <input type="radio" required  className='text-red mt-1 ml-1'/>
                        <p className='mt-7 text-md font-semibold ml-2'>Collaboratively formulate principle capital. Progressively evolve user</p>
                    </div>
                    <div className=' flex mx-10'>
                    <button className='text-center text-white w-full bg-red-500 h-10 rounded-xl mt-5 hover:bg-black'>Submit Now</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Contact