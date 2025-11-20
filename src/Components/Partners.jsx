import React from 'react'
import contactbg from '../assets/contact-bg.jpg'
import Img from '../assets/contact-img.png'
import contactlogo from '../assets/contact-form-icon.svg'
import img1 from '../assets/partner-1.png'
import img2 from '../assets/partner-2.png'
import img3 from '../assets/partner-3.png'
import img4 from '../assets/partner-4.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const data = [
    {
        id: 1,
        img: img1
    },
    {
        id: 2,
        img: img2
    },
    {
        id: 3,
        img: img3
    },
    {
        id: 4,
        img: img4
    },{
        id: 1,
        img: img1
    },
    {
        id: 2,
        img: img2
    },
    {
        id: 3,
        img: img3
    },
    {
        id: 4,
        img: img4
    },
  
    

]

const Partners = () => {
    let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    customPaging: i => (
      <div  className="w-2 h-2 text-2xl  m-6 bg-gray-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-800 " 
        
      >
       
      </div>
    )
};
    return (
        <div className='bg-[#fff1f1] w-full h-260'>
            <div className=' h-190 mb-60   ' style={{ backgroundImage: `url(${contactbg}) `,  }}>
                <div className='flex justify-around items-center mx-20'>
                    <div className=' bg-white text-black w-140 h-210 mt-30 rounded-2xl shadow-2xl mx-auto'>
                        <form action="" className='mx-10 mt-5'>
                            <div >
                                <img className='' src={contactlogo} alt="" />
                                <h1 className='text-4xl font-semibold pt-5 pb-7'>Let’s Work Together on your next Project</h1>
                                <p className='text-gray-900 text-[16px] pb-5'>consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum</p>
                            </div>
                            <div className=''>

                                <label htmlFor="" className='text-[12px] font-bold  block mb-4 '>Your Name</label>
                                
                                <input type="text" placeholder='Enter your name' className='border border-gray-300  w-full h-11 rounded-xl text-start pl-3 bg-[#fafafa] mb-5 focus:outline-none focus:ring-0 focus:border-gray-300' />
                                <br />
                                <label htmlFor="" className='text-[12px] font-bold  block mb-4'>Your Email Address</label>
                               
                                <input type="email" placeholder='Enter your email address' className='border border-gray-300  w-full h-11 rounded-xl text-start pl-3 bg-[#fafafa] mb-5 focus:outline-none focus:ring-0 focus:border-gray-300' />
                                <br />
                                <label htmlFor="" className='text-[12px] font-bold  block mb-4'>Your Message</label>

                                <textarea placeholder='Enter your message' className='border border-gray-300  w-full h-30 rounded-xl text-start pl-3 bg-[#fafafa] mb-5 focus:outline-none focus:ring-0 focus:border-gray-300'></textarea>
                            </div>
                            <div>
                                <button className='bg-gradient-to-r from-yellow-500 to-pink-500 w-34 h-11 p-0.5 rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-pink-500 mt-5  '>
                                    Send Message
                                </button>
                            </div>

                        </form>
                    </div>

                    {/* right side */}
                    <div className='flex flex-col'>
                        <div className=''>
                            <img className='w-150 h-150 mt-30 mb-12' src={Img} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold text-center '>Trusted Partners</h1>
                            <div className='w-[500px] md:w-[600px] lg:w-[700px]  '>
                                {/* slider */}
                                <Slider {...settings}>
                                    {
                                        data.map((item) => (
                                            <div key={item.id} className=' flex justify-center items-center mt-10 mx-10 '>
                                                <img className=' ' src={item.img} alt="" />
                                            </div>
                                        ))
                                    }
                                </Slider>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners