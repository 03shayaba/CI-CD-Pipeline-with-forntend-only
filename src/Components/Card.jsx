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
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 my-4">
            <div className='flex flex-wrap items-center gap-4 sm:gap-6 justify-center'>
                {data.map((item, index) => (
                    <div key={index} className='flex items-center justify-between bg-white w-full sm:w-[280px] rounded-xl border border-gray-100 p-3.5 shadow-xl hover:shadow-2xl transition-all duration-300'>
                        <div className='flex items-center gap-3'>
                            <img src={item.logo} alt={`${item.name} Logo`} className="w-9 h-9 object-contain" />
                            <div> 
                                <h1 className='text-base font-semibold text-gray-900'>{item.name}</h1>
                                <p className='text-xs text-gray-500'>{item.followers}</p>
                            </div>
                        </div>
                        <button className='bg-gradient-to-r from-[#fe9651] via-[#fb6077] to-[#f8289c] text-white text-xs font-semibold px-3 py-1.5 rounded-md hover:brightness-105 transition'>
                            Follow Me
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card