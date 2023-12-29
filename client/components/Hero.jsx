import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Login';

const Hero = ({ message }) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  return (
    <div
      id='#hero'
      className='flex  items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'
    >
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 h-screen bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-z10rem]'>
        <h1 className='mb-4 text-3xl font-extrabold  text-gray-700 dark:text-white md:text-5xl lg:text-6xl drop-shadow-[1px_1px_2px_rgba(255,255,255,0.16)]'>
          Property
          <span className='bg-gradient-to-r from-red-500 via-red-700 to-red-900 text-transparent bg-clip-text'>
            Verse
          </span>
        </h1>
        <p className='w-4/5 py-2 text-xl text-gray-100 mb-4'>{message}</p>
        <Link href='/properties'>
          <button className='px-8 py-3 border-2 active:border-red-600 active:rounded-lg text-gray-100 hover:border-red-600 hover:text-red-600'>
            Explore Properties
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
