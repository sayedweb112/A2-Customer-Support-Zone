import React from 'react';
import bgImage from "../assets/background-wave-dots.png/vector1.png";

const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto">
      {/* In-Progress Card */}
      <div
        className="relative overflow-hidden rounded-2xl shadow-xl text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-indigo-600/30"></div>
        <div className="relative z-10 p-8 flex flex-col items-center justify-center h-64 md:h-80">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-wide">In-Progress</h2>
          <p className="text-7xl md:text-9xl font-extrabold drop-shadow-lg">{inProgress}</p>
        </div>
      </div>

      {/* Resolved Card */}
      <div
        className="relative overflow-hidden rounded-2xl shadow-xl text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/40 to-emerald-600/30"></div>
        <div className="relative z-10 p-8 flex flex-col items-center justify-center h-64 md:h-80">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-wide">Resolved</h2>
          <p className="text-7xl md:text-9xl font-extrabold drop-shadow-lg">{resolved}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;