import React from 'react'
import facebookLogo from '../assets/facebook.png'
import twitterLogo from '../assets/twitter.png'
import instagramLogo from '../assets/Insta.png'
import youtubeLogo from '../assets/youtube.png'

const data = [
    {
        name: 'Facebook',
        followers: '20.5k Followers',
        logo: facebookLogo
    },
    {
        name: 'Twitter',
        followers: '15.2k Followers',
        logo: twitterLogo
    },
    {
        name: 'Instagram',
        followers: '30.1k Followers',
        logo: instagramLogo
    },
    {
        name: 'YouTube',
        followers: '25.8k Followers',
        logo: youtubeLogo
    }
]
const Card = () => {
    return (
        // <div className='bg-white flex gap-6 flex-wrap justify-center py-10 mb-10 '>
        //     <div className='flex  bg-white w-[280px]  rounded-lg  border  border-gray-100 p-2 shadow-2xl  mt-10'>
        //         <div className=' flex  gap-1'>
        //             <div className=''>
        //                 <img src={facebookLogo} alt="Facebook Logo" />
        //             </div>
        //             <div>
        //                 <h1>FaceBook</h1>
        //                 <p>20.5k Followers</p>
        //             </div>

        //         </div>
        //         <div>
        //             <button>Follow Me</button>
        //         </div>
        //     </div>

        //     <div className='flex  bg-white w-[280px]  rounded-lg  border border-gray-100  p-2 shadow-2xl  mt-10'>
        //         <div className=' flex  gap-1'>
        //             <div className=''>
        //                 <img src={twitterLogo} alt="Twitter Logo" />
        //             </div>
        //             <div>
        //                 <h1>FaceBook</h1>
        //                 <p>20.5k Followers</p>
        //             </div>

        //         </div>
        //         <div>
        //             <button>Follow Me</button>
        //         </div>
        //     </div>
        //     <div className='flex  bg-white w-[280px]  rounded-lg  border border-gray-100   p-2 shadow-2xl mt-10'>
        //         <div className=' flex  gap-1'>
        //             <div className=''>
        //                 <img src={instagramLogo} alt="Instagram Logo" />
        //             </div>
        //             <div>
        //                 <h1>FaceBook</h1>
        //                 <p>20.5k Followers</p>
        //             </div>

        //         </div>
        //         <div>
        //             <button>Follow Me</button>
        //         </div>
        //     </div>
        //     <div className='flex  bg-white w-[280px]  rounded-lg  border border-gray-100  p-2 shadow-2xl  mt-10'>
        //         <div className=' flex  gap-1'>
        //             <div className=''>
        //                 <img src={youtubeLogo} alt="Facebook Logo" />
        //             </div>
        //             <div>
        //                 <h1>FaceBook</h1>
        //                 <p>20.5k Followers</p>
        //             </div>

        //         </div>
        //         <div>
        //             <button>Follow Me</button>
        //         </div>
        //     </div>

        // </div>   
        <div>
            <div className=' flex flex-wrap items-center gap-4 justify-center   py-10 mb-10 '>
                {data.map((item,index)=>(
                    <div key={index} className='flex  bg-white w-[280px]  rounded-lg  border  border-gray-100 p-2 shadow-2xl  mt-10'>
                        <div className=' flex  gap-1'>
                            <div className=''><img src={item.logo} alt={`${item.name} Logo`} /></div>
                            <div className='px-4'> 
                                <h1 className='text-lg font-semibold'>{item.name}</h1>
                                <p className='text-[11px]'>{item.followers}</p>
                            </div>

                        </div>
                        <div className='pl-3'>
                            <button className=' bg-gradient-to-r from-[#fe9651] via-[#fb6077] to-[#f8289c] text-white text-sm font-semibold rounded-md w-[90x] h-[30px] hover:bg-gradient-to-l hover:from-[#fe9651] hover:via-[#fb6077] hover:to-[#f8289c] '>Follow Me</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    )
}

export default Card