import Image from 'next/image';
import { useEffect } from 'react';
import { Typography } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Card as CardContainer,
  CardHeader,
  CardBody,
  CardFooter,
} from '@material-tailwind/react';

const Card = ({ name, location, area, bua, img }) => {
  const router = useRouter();

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const redirectUrl = '/PropertyDetails/' + name.split(' ').join('_');

  return (
    <div onClick={() => router.push(redirectUrl)}>
      <div className='flex-wrap'>
        <CardContainer className='card bg-shadow-gray-700'>
          <CardHeader>
            <img src={`${img}`} alt='Background img' />
          </CardHeader>
          <CardBody className='p-4'>
            <div className='m-2 text-gray-400'>
              {name} <br /> <sub>{location}</sub>{' '}
            </div>
            <hr />
            <ul role='list' className='divide-y divide-gray-100'>
              <li className='flex justify-between gap-x-6 py-5'>
                <div className='flex min-w-0 gap-x-4'>
                  <div className='min-w-0 text-left flex-auto'>
                    <Typography className='text-sm font-semibold leading-6 text-gray-400'>
                      Area
                    </Typography>
                    <Typography className='text-sm font-semibold leading-6 text-gray-400'>
                      BUA{' '}
                    </Typography>
                  </div>
                </div>
                <div className='shrink-0 sm:flex sm:flex-col sm:items-end '>
                  <Typography className='text-sm font-bold leading-6 text-gray-300'>
                    {area} SF
                  </Typography>
                  <Typography className='text-sm font-bold leading-6 text-gray-300'>
                    {bua} SF
                  </Typography>
                </div>
              </li>
            </ul>
          </CardBody>
          <CardFooter className='py-5 pt-0 pb-5'>
            {isAuthenticated ? (
              <Link href={`${redirectUrl}`}>
                <button
                  type='button'
                  className=' hover:transition ease-in-out w-full text-gray-200 tracking-widest font-extrabold bg-gradient-to-r from-red-500 via-red-700 to-red-900 hover:bg-gradient-to-br active:border focus:ring-4 focus:outline-none focus:ring-transparent dark:focus:ring-red-400 rounded-xl text-sm p-4 text-center mr-2 mb-0'
                >
                  View Opportunity
                </button>
              </Link>
            ) : (
              <button
                type='button'
                onClick={() => loginWithRedirect()}
                className='w-full text-gray-200 tracking-widest font-extrabold bg-gradient-to-r from-red-500 via-red-700 to-red-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-transparent dark:focus:ring-red-400 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-0'
              >
                View Opportunity
              </button>
            )}
          </CardFooter>
        </CardContainer>
      </div>
    </div>
  );
};

export default Card;
