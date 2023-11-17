import React from 'react';

const Hero = ({message}) => {
  return (
    <div className='flex items-center justify-center h-96 mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 h-96 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-z10rem]'>
      <h1 className="mb-4 text-3xl font-extrabold  text-gray-700 dark:text-white md:text-5xl lg:text-6xl"><span className="bg-gradient-to-r from-red-500 via-red-700 to-red-900 text-transparent bg-clip-text"> All Properties</span></h1>
        {/* <p className='py-2 text-xl text-gray-400'>{message}</p> */}
        {/* <button className='px-8 py-3 border text-gray-400'><a href="#section2">Read More</a></button> */}
      </div>
    </div>
  );
};

export default Hero;
