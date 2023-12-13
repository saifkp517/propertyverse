
import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from 'next/router'

const Hero = ({ heading, message, imageurl }) => {

  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const router = useRouter()

  useEffect(() => {
    if(!isAuthenticated) {
      loginWithRedirect();
    }
  }, [])

  return (

    <div>
      <div className='flex items-center justify-center h-72 mb-12 bg-fixed bg-center bg-cover' style={{background: `url(${imageurl})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 h-72 bg-black/40 z-[2]' />
        <div className='p-5 text-white z-[2] mt-[-z10rem]'>
          <h2 className='text-5xl font-bold'>{heading}</h2>
        </div>
      </div>
    </div>

  );
};

export default Hero;
