import React from 'react'
import breadcrumb from '../assets/breadcrumb-bg.jpg'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/insta.png'
import Youtube from '../assets/youtube.png'

const About = ({ about, title }) => {
  return (
    <div className="relative w-full h-[490px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={breadcrumb}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute top-[25%] left-[1%] w-[200px] h-[100px]">
        <div className="relative w-full h-full">
          {/* This container rotates */}
          <div className="absolute w-full h-full animate-orbit">
            {/* This is the orbiting image */}
            <img
              src={facebook}
              alt="Facebook"
              className="absolute left-1/2 top-0 w-[60px] h-[60px] -translate-x-1/2"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute top-[45%] left-[20%] w-[200px] h-[100px]">
        <div className="relative w-full h-full">
          {/* This container rotates */}
          <div className="absolute w-full h-full animate-orbits">
            {/* This is the orbiting image */}
            <img
              src={instagram}
              alt="Instagram"
              className="absolute left-1/2 top-0 w-[60px] h-[60px] -translate-x-1/2"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[25%] left-[70%] w-[200px] h-[100px]">
        <div className="relative w-full h-full">
          {/* This container rotates */}
          <div className="absolute w-full h-full animate-orbit">
            {/* This is the orbiting image */}
            <img
              src={twitter}
              alt="Twitter"
              className="absolute left-1/2 top-0 w-[60px] h-[60px] -translate-x-1/2"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[25%] right-[1%] w-[200px] h-[100px]">
        <div className="relative w-full h-full">
          {/* This container rotates */}
          <div className="absolute w-full h-full animate-orbit2">
            {/* This is the orbiting image */}
            <img
              src={Youtube}
              alt="Youtube"
              className="absolute left-1/2 top-0 w-[60px] h-[60px] -translate-x-1/2"
            />
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, rgb(234,62,166), rgb(235,135,105))`,
          mixBlendMode: 'overlay',
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl font-bold">{about}</h1>
        <p className="mt-3 text-lg text-gray-100">{title}</p>
      </div>

      {/* Image moving in half-circle path */}
      

      {/* Inline animation styles */}
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(280deg); }
          100% { transform: rotate(0deg); } /* half circle */
        }
        .animate-orbit {
          animation: orbit 5s linear infinite alternate; /* alternate = go back and forth */
          transform-origin: bottom center; /* rotation center point */
        }
      `}

      {`
        @keyframes orbits {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(280deg); } /* half circle */
        }
        .animate-orbits {
          animation: orbits 5s linear infinite alternate; /* alternate = go back and forth */
          transform-origin: bottom center; /* rotation center point */
        }
      `}
      {`
        @keyframes orbit2 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(180deg); } /* half circle */
        }
        .animate-orbit2 {
          animation: orbit2 5s linear infinite alternate; /* alternate = go back and forth */
          transform-origin: bottom center; /* rotation center point */
        }
      `}
      </style>
    </div>
  )
}

export default About
