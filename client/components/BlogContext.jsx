import React, { useState, useEffect } from 'react';
import { Typography } from '@material-tailwind/react';
import Link from 'next/link';

export default function BlogContext({heading, date, subheading, description}) {

    return (
        <div className=" lg:mx-48 md:mx-16 sm:mx-8  px-5">
            <div className="grid grid-cols-3">
                <div className="lg:col-span-2 col-span-3 lg:text-lg text-xs">
                    <Typography className='' variant='h2'>{heading}</Typography>
                    <sub>{date}</sub>
                    <Typography className='text-red-400 py-3' >{subheading}</Typography>
                    <p className=' font-serif '>{description}</p>
                </div>
            </div>
            <Link href="/blog"><p className=' text-sm text-gray-500 my-4 hover:text-blue-500'>Read More...</p></Link>
            <hr className='my-6 line' />
        </div>
    );
}



