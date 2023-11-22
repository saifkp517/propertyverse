import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './Login';

const Hero = ({message}) => {

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  return (
    <div id="#hero" className='flex  items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 h-screen bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-z10rem]'>
      <h1 className="mb-4 text-3xl font-extrabold  text-gray-700 dark:text-white md:text-5xl lg:text-6xl"><span className="bg-gradient-to-r from-red-500 via-red-700 to-red-900 text-transparent bg-clip-text">Property</span>Verse</h1>
        <p className='py-2 text-xl text-gray-400'>{message}</p>
        {(isAuthenticated) ? <>
        <button className='px-8 py-3 border text-gray-400'><Link href="/properties">Explore Properties</Link></button>
          </> : <LoginButton/>}
      </div>
    </div>
  );
};

export default Hero;
