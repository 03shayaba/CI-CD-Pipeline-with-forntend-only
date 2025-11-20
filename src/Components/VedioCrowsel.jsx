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
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
 
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

  };

  const videoRefs = useRef([]); // ✅ Create array of refs
  const [showIcons, setShowIcons] = useState(
    Array(vedioData.length).fill(true)
  );

  const playVid = (index) => {
    const video = videoRefs.current[index];
    // if (!video) return;

    if (video.paused) {
      // video.style.visibility = "visible";
      // video.style.opacity = "1";
      // video.style.display = "block";
      // video.offsetHeight; // 🧠 force browser repaint

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

  // ✅ Reset video when it finishes
  const handleVideoEnd = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      // video.currentTime = 0; // reset to beginning
      updateIconVisibility(index, true); // Show icon when video ends
    }
  };
  return (

    <div className=' '>
      <h1 className='text-center text-2xl text-gray-800 font-semibold'>Latest Video Reels</h1>
      <div className=' mt-10 mb-10   ' >
        <Slider {...settings} className='ml-10 mr-10'>
          {vedioData.map((item, index) => (
            <div key={index} className=''>
              <div className='relative px-2   mb-2'>
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full h-[400px] object-cover rounded-2xl transition-opacity duration-300 ease-in-out"
                  poster={item.poster}
                  preload="metadata"
                  onClick={() => playVid(index)}
                  onEnded={() => handleVideoEnd(index)}
                  controls={false}
                  style={{ visibility: "visible", opacity: 1, display: "block" }}
                >
                  <source src={item.vedio} type="video/mp4" />
                </video>

                <div>
                  {showIcons[index] && (
                    <div className=' absolute top-45 right-32  bg-white border border-red-700 text-5xl rounded-full text-red-700'>
                      <FaCirclePlay onClick={() => playVid(index)} />
                    </div>
                  )}

                  <div className='absolute top-75 left-15 rounded-4xl bg-white w-35 h-10 flex items-center justify-center '>
                      <a href="#">
                          <img src={Facebook} className='w-4 h-4  absolute top-2  left-0 mt-1 ml-3' />
                          <h1 className='ml-5 text-[12px] text-gray-700'>Facebook Reels</h1>
                      </a>
                  </div>

                </div>
              </div>
              <div className='px-3 '>
                <h1 className='text-md  font-bold mt-3 '>{item.title}</h1>
                <p className='text-sm text-gray-500 font-semibold'>{item.views}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default VedioCrowsel