import React from 'react'
import breadcrumb from '../assets/breadcrumb-bg.jpg'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/Insta.png'
import Youtube from '../assets/youtube.png'

const About = ({ about, title }) => {
  return (
    <div className="relative w-full h-[280px] sm:h-[380px] flex items-center justify-center text-white overflow-hidden pt-16">
      {/* Background Image */}
      <img
        src={breadcrumb}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      {/* Floating social icons - visible on tablet/desktop */}
      <div className="hidden sm:block absolute top-[20%] left-[5%] w-[70px] h-[70px]">
        <div className="relative w-full h-full animate-orbit">
          <img src={facebook} alt="Facebook" className="w-[40px] h-[40px]" />
        </div>
      </div>
      
      <div className="hidden sm:block absolute top-[45%] left-[15%] w-[70px] h-[70px]">
        <div className="relative w-full h-full animate-orbits">
          <img src={instagram} alt="Instagram" className="w-[40px] h-[40px]" />
        </div>
      </div>

      <div className="hidden sm:block absolute top-[20%] right-[15%] w-[70px] h-[70px]">
        <div className="relative w-full h-full animate-orbit">
          <img src={twitter} alt="Twitter" className="w-[40px] h-[40px]" />
        </div>
      </div>

      <div className="hidden sm:block absolute top-[20%] right-[5%] w-[70px] h-[70px]">
        <div className="relative w-full h-full animate-orbit2">
          <img src={Youtube} alt="Youtube" className="w-[40px] h-[40px]" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, rgba(234,62,166,0.6), rgba(235,135,105,0.6))`,
          mixBlendMode: 'overlay',
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{about || "About Me"}</h1>
        <p className="mt-2 text-xs sm:text-base text-gray-100 font-medium">{title || "Home / About Me"}</p>
      </div>

      {/* Inline animation styles */}
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(280deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-orbit {
          animation: orbit 5s linear infinite alternate;
          transform-origin: bottom center;
        }

        @keyframes orbits {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(280deg); }
        }
        .animate-orbits {
          animation: orbits 5s linear infinite alternate;
          transform-origin: bottom center;
        }

        @keyframes orbit2 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(180deg); }
        }
        .animate-orbit2 {
          animation: orbit2 5s linear infinite alternate;
          transform-origin: bottom center;
        }
      `}
      </style>
    </div>
  );
};

export default About;
