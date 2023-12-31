import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Typography } from '@material-tailwind/react';
import Link from 'next/link';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Card as CardContainer,
  CardHeader,
  CardBody,
  CardFooter,
} from '@material-tailwind/react';

const Card = ({ name, location, area, pricesqf, yeild, returntarget, img }) => {
  const router = useRouter();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const redirectUrl = '/PropertyDetails/' + name.split(' ').join('_');

  return (
    <div onClick={() => router.push(redirectUrl)}>
      <div className='flex-wrap'>
        <CardContainer shadow-lg className='card bg-shadow-gray-700'>
          <CardHeader className=''>
            <img src={`${img}`} alt='Background img' />
          </CardHeader>
          <CardBody className='p-4'>
            <div className=' text-gray-400'>
              {name} <br /> <sub>{location}</sub>{' '}
            </div>
            <hr />
            <ul role='list' className='divide-y divide-gray-900'>
              <li className='flex justify-between gap-x-6 pt-4'>
                <div className='flex min-w-0 gap-x-4'>
                  <div className='min-w-0 text-left flex-auto'>
                    <Typography className='text-sm font-semibold leading-6 text-gray-400'>
                      Area
                    </Typography>
                    <Typography className='text-sm font-semibold leading-6 text-gray-400'>
                      Price psf
                    </Typography>
                    <Typography className='text-sm font-semibold leading-6 text-gray-400'>
                      Yield
                    </Typography>
                    <Typography className='text-sm font-semibold leading-6 text-gray-400'>
                      Return Targe
                    </Typography>
                  </div>
                </div>
                <div className='shrink-0 sm:flex sm:flex-col sm:items-end '>
                  <Typography className='text-sm leading-6 font-bold text-gray-300'>
                    {area} SF
                  </Typography>
                  <Typography className='text-sm leading-6 font-bold text-gray-300'>
                    {' '}
                    ₹{pricesqf}
                  </Typography>
                  <Typography className='text-sm leading-6 font-bold text-gray-300'>
                    {yeild} %
                  </Typography>
                  <Typography className='text-sm leading-6 font-bold text-gray-300'>
                    {returntarget} %
                  </Typography>
                </div>
              </li>
            </ul>
          </CardBody>
          <CardFooter className='py-5 pt-0 pb-5'>
            <button
              type='button'
              className=' hover:transition ease-in-out w-full text-white tracking-widest font-extrabold bg-gradient-to-r from-red-500 via-red-500 to-red-600 hover:bg-gradient-to-br active:border focus:ring-4 focus:outline-none focus:ring-transparent dark:focus:ring-red-400 rounded-xl text-sm p-4 text-center'
            >
              View Opportunity
            </button>
          </CardFooter>
        </CardContainer>
      </div>
    </div>
  );
};

export default Card;
