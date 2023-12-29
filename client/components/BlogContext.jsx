import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Typography } from '@material-tailwind/react';
import Link from 'next/link';

export default function BlogContext({ img, details }) {

    console.log(details)

    return (
        <div className=" lg:mx-72 md:mx-16 sm:mx-8  px-5">
            <div className="grid grid-cols-3">
                <div className="flex flex-col justify-between lg:col-span-2 col-span-3 lg:text-lg text-xs">
                    <Typography className='' variant='h2'>{details.fields.title}</Typography>
                    <sub>{new Date(details.fields.date).toDateString()}</sub>
                    <Typography className='text-gray-400 py-3' >{details.fields.subheading}</Typography>
                    <Link href="/blog"><p className=' text-sm text-gray-500 my-4 hover:text-blue-500'>Read More...</p></Link>
                </div>
                <div className='lg:col-span-1 px-5 col-span-3'>
                    <Image
                        className='rounded-xl'
                        src={'https:' + img.fields.file.url}
                        height={img.fields.file.details.image.height}
                        width={img.fields.file.details.image.width}
                    />
                </div>
            </div>
            <hr className='my-6 line' />

        </div>
    );
}



