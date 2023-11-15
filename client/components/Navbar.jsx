import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import LoginButton from './Login';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  console.log(isAuthenticated)

  console.log(user)

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('red-500');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-${color}`}
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>
            PropertyVerse.
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4'>
            {(isAuthenticated === false) ? <LoginButton /> :
              <div className="flex items-center gap-4">
                <div className="font-medium dark:text-white">
                  <div>{user.name}</div>
                </div>
              </div>

            }
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery'>Gallery</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              {(isAuthenticated === false) ? <LoginButton /> :
                <div className="flex items-center gap-4">
                  <div className="font-medium dark:text-white">
                    <div>{user.name}</div>
                  </div>
                </div>
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
