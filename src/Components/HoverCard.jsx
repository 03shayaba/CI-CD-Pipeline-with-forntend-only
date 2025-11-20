import React from "react";
import bgImage from "../assets/service.jpg"; // your background image

const HoverCard = () => {
    return (
    <div className="relative w-80 h-60 rounded-xl overflow-hidden group shadow-lg">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient Overlay (visible on hover) */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-t from-black/70 via-black/30 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
      ></div>

      {/* Bottom Text (hidden until hover) */}
      <div
        className="
          absolute bottom-4 left-4 right-4 
          text-white text-sm opacity-0 group-hover:opacity-100
          transition-all duration-500
        "
      >
        <p className="font-semibold">
          “This is the hover text — visible only on hover!”
        </p>
      </div>

      {/* Button (moves upward on hover) */}
      <button
        className="
          absolute bottom-3 left-1/2 -translate-x-1/2
          bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium
          transition-all duration-500
          group-hover:bottom-14
        "
      >
        View More
      </button>
    </div>
  );
};

export default HoverCard;
