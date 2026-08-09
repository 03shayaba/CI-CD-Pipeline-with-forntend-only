import React from 'react'
import vedio from '../assets/vedio1.mp4';
import poster1 from '../assets/reel-thumb-1.jpg'
import poster2 from '../assets/reel-thumb-2.jpg'
import poster3 from '../assets/reel-thumb-3.jpg'
import poster4 from '../assets/reel-thumb-4.jpg'
import poster5 from '../assets/reel-thumb-5.jpg'
import { FaCirclePlay } from "react-icons/fa6";
import Facebook from '../assets/facebook.png'
import { useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const vedioData = [
  {
    vedio: vedio,
    poster: poster1,
    title: "Can Robot Solve This...?",
    views: "16M views"
  },
  {
    vedio: vedio,
    poster: poster2,
    title: "Can Robot Solve This...?",
    views: "16M views"
  },
  {
    vedio: vedio,
    poster: poster3,
    title: "Can Robot Solve This...?",
    views: "16M views"
  },
  {
    vedio: vedio,
    poster: poster4,
    title: "Can Robot Solve This...?",
    views: "16M views"
  },
  {
    vedio: vedio,
    poster: poster5,
    title: "Can Robot Solve This...?",
    views: "16M views"
  }
  ,{
    vedio: vedio,
    poster: poster1,
    title: "Can Robot Solve This...?",
    views: "16M views"
  },
  {
    vedio: vedio,
    poster: poster2,
    title: "Can Robot Solve This...?",
    views: "16M views"
  }
 
 
 
  


]


// Custom Next Arrow
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute -top-20 left-290 z-10 bg-red-300 hover:bg-red-400  text-red-700
                  font-bold w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-lg`}
      onClick={onClick}
      style={{ ...style, display: "flex" }}
    >
      {">"}
    </div>
  );
};

// Custom Prev Arrow
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute -top-20 right-290 z-10 bg-red-300 hover:bg-red-400 
                 font-bold text-red-700 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-lg`}
      onClick={onClick}
      style={{ ...style, display: "flex" }}
    >
      {"<"}
    </div>
  );
};


const VedioCrowsel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const videoRefs = useRef([]);
  const [showIcons, setShowIcons] = useState(
    Array(vedioData.length).fill(true)
  );

  const playVid = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play()
        .then(() => updateIconVisibility(index, false))
        .catch((err) => console.error("Play error:", err));
    } else {
      video.pause();
      updateIconVisibility(index, true);
    }
  };

  const updateIconVisibility = (index, isVisible) => {
    setShowIcons((prev) => {
      const newIcons = [...prev];
      newIcons[index] = isVisible;
      return newIcons;
    });
  };

  const handleVideoEnd = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      updateIconVisibility(index, true);
    }
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-8 py-10'>
      <h1 className='text-center text-2xl sm:text-3xl text-gray-800 font-semibold mb-8'>
        Latest Video Reels
      </h1>
      <div className='w-full'>
        <Slider {...settings}>
          {vedioData.map((item, index) => (
            <div key={index} className='px-2'>
              <div className='relative rounded-2xl overflow-hidden shadow-md group'>
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full h-[360px] sm:h-[400px] object-cover rounded-2xl cursor-pointer"
                  poster={item.poster}
                  preload="metadata"
                  onClick={() => playVid(index)}
                  onEnded={() => handleVideoEnd(index)}
                  controls={false}
                >
                  <source src={item.vedio} type="video/mp4" />
                </video>

                {showIcons[index] && (
                  <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                    <button 
                      onClick={() => playVid(index)}
                      className='pointer-events-auto bg-white/90 text-red-600 text-4xl sm:text-5xl rounded-full p-1 shadow-lg hover:scale-110 transition duration-300'
                    >
                      <FaCirclePlay />
                    </button>
                  </div>
                )}

                <div className='absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-2 shadow-md'>
                  <img src={Facebook} alt="Facebook" className='w-4 h-4 object-contain' />
                  <span className='text-xs font-semibold text-gray-700'>Facebook Reels</span>
                </div>
              </div>

              <div className='pt-3 px-1'>
                <h2 className='text-sm sm:text-base font-bold text-gray-800 line-clamp-1'>{item.title}</h2>
                <p className='text-xs text-gray-500 font-medium mt-0.5'>{item.views}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VedioCrowsel;