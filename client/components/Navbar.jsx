import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import LoginButton from './Login';
import LogoutButton from './Logout';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar } from '@material-tailwind/react';

const Navbar = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  console.log(isAuthenticated, 'Navbar?');

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
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-2 text-white'>
        <Link href='/'>
          <div
            className='flex'
          >
            {/* <div className="mx-10">
              <Image className='rounded-2xl' src={"https://i.postimg.cc/jSZZtBM6/Whats-App-Image-2023-12-28-at-10-39-16-PM.jpg"} height={60} width={60} />
            </div> */}
            <h1
              style={{ color: `${textColor}` }}
              className='mt-2 font-bold text-4xl cursor-pointer'
            >
              PropertyVerse.
            </h1>
          </div>
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className='hidden sm:flex items-center'
        >
          <li className='p-4 hover:underline underline-offset-8 decoration-red-500 cursor-pointer'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4 hover:underline underline-offset-8 decoration-red-500 cursor-pointer'>
            <Link href='/blogs'>Knowledge Base</Link>
          </li>
          {isAuthenticated ? (
            <li className='p-4 hover:underline underline-offset-8 decoration-red-500 cursor-pointer'>
              <Link href='/properties'>Properties</Link>
            </li>
          ) : null}
          <li className='p-4'>
            {isAuthenticated == false ? (
              <LoginButton />
            ) : (
              <div className='flex items-center gap-4'>
                <Avatar
                  src={
                    user.picture
                      ? user.picture
                      : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'
                  }
                  alt='avatar'
                  size='sm'
                  withBorder={true}
                  color='white'
                  className='p-0.5'
                />
              </div>
            )}
          </li>
          {isAuthenticated ? (
            <li className='p-4'>
              <LogoutButton />
            </li>
          ) : undefined}
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `bg-gray-50` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `bg-gray-50` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-800 text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-800 text-center ease-in duration-300'
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className='p-4 text-2xl hover:text-gray-500'
            >
              <Link href='/'>Home</Link>
              <hr />
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-2xl hover:text-gray-500'
            >
              <Link href='/blogs'>Knowledge Base</Link>
              <hr />
            </li>
            {isAuthenticated ? (
              <li onClick={handleNav} className='p-4 text-2xl'>
                <Link href='/properties'>Properties</Link>
                <hr className='hover:w-full' />
              </li>
            ) : null}
            <li
              onClick={handleNav}
              className='p-4 text-2xl hover:text-gray-500'
            >
              {isAuthenticated === false ? <LoginButton /> : user.name}
              <hr />
            </li>
            {isAuthenticated ? (
              <li className='p-4 text-2xl bg-black hover:text-gray-500'>
                <LogoutButton />
              </li>
            ) : undefined}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
