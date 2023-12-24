import React, { useEffect, useState } from 'react'
import MyModal from '../../components/Dialog';
import { Typography } from "@material-tailwind/react";
import Carousel from '../../components/VillaCarousel';
import Hero2 from '../../components/Hero2';
import MyChart from '../../components/MyChart';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../../components/Footer'

export default function Details() {

    const [value, setValue] = useState(1000000);
    const [loaded, setLoaded] = useState("animate-pulse");

    const images = [
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/01%20(1)-min.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/01-min.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/01DWD-min.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/01_CShading_LightMix-min.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/02%20(1)-min.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/02-min.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/03-min.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/03ERUAJT-min.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/04%20(1)-min.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/04-min.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/BD%20VIEW%203.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/BEDROOM%20SIDE%20VIEW-min.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/ERGUV-min.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/KITCHEN2407%20PSD-min.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/ONLY%20CHAIR-min.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/PS1-min.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/VIEW%202%20DRM.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/VIEW%20BD%201-min.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/WhatsApp%20Image%202023-02-17%20at%201.34.59%20PM-min.jpeg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/bar%20pps-min.jpg',
        'https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/psd%20kitchen%202-min.jpg'
    ]

    const capitalappreciation = 10;

    const yr = ["6,16,59,908", "5,66,58,703", "5,91,52,456", "6,17,58,607", "6,44,81,911"]
    const prprtyname = "Villa Ananyata", invamt = "69,90,00,000", mr = "42,67,814", pmf = "5,82,500", tds = "4,74,202"
        const purchasedetails = {
        Purchase_Price: 280202500,
        Legal_Expenses: 1500000,
        Acquisition_Fee: 9500000,
        Reserves: 164034,
        Stamp_Duty: 18633466
    }

    const details = {
        rentalyeild: 9.14,
        returns: 18,
        price: "12,338",
        location: "ORR",
        name: "Aurbis Business Park",
        country: "Singapore",
        description: "Singapore-based Aurbis is a managed offices provider backed by Avila Capital which was founded by the Chairman of Assetz Property Group Singapore",
        start: "01 Oct 2019",
        lockinperiod: 5,
        enddate: "30 Sep 2029",
        totalarea: "52,277",
        rentpersf: 89,
        leaseperiod: 10,
        escalation: 4.5
    }


    const onUpdate = (e) => {
        setValue(Number(e.target.value));
    }

    return (

        <div>
            <Head>
                <title>{prprtyname}</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Hero2 heading={prprtyname} message='' imageurl={'https://propmedia1.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/banner/1440x300/1601270009-the-pavilion-iii-bangalore-1.jpg'} />
            <div className='section1 text-gray-400'>
                <div className="flex md:flex-row  flex-wrap">

                    <div className="w-full p-4 text-center" style={{ minHeight: "5" }}>

                        <Carousel images={images} />
                    </div>


                </div>
                <br />
                <div>
                    {/* <h1 className='font-sans text-4xl mx-10 py-10'>Investment Returns</h1>
                    <h1 className='text-2xl mx-10' >Investment Amount:  <span className='bg-gray-500 p-2 ml-2 text-gray-900'>₹ {invamt}</span></h1>
                    <div className="lg:w-3/4 my-72 p-4 rounded overflow-hidden shadow-lg shadow-gray-600 card">
                        <div className="px-0 md:px-6 py-4">
                            <div className="font-bold text-xl mb-2">Monthly Cash Flow</div>
                            <br />
                            <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-emerald-200">
                                <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                                <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
                                <div style={{ width: "10%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500"></div>
                            </div>
                            <div className="mb-2 flex items-center justify-between gap-4 overflow-auto">
                                <Typography>
                                    MonthlyRent:<br /> <span className='text-gray-300 font-extrabold'>₹ {mr}</span>
                                </Typography>
                                <Typography>
                                    Property Management Fee: <br /> <span className='text-gray-300 font-extrabold'>₹ {pmf}</span>
                                </Typography>
                                <Typography>
                                    10% TDS: <br /> <span className='text-gray-300 font-extrabold'>₹ {tds}</span>
                                </Typography>
                            </div>

                            <div className="mb-2 flex items-center justify-between gap-4">
                            </div>



                        </div>
                    </div> */}
                    <div className="lg:w-3/4 px-6 py-4 ">
                        <Typography variant='h1' className="text-2xl text-red-500 mb-2">Financial Model</Typography>
                        <br />
                        <Typography className='lg:text-lg md:text-base text-sm' >Bringing you the opportunity to own a peice of paradise located in Mandrem, Goa. This stunning property offers the ultimate comfort and style, with its spacious interiors. modern amenties and breathtaking views. Easily accessible from the most pristine and popular beaches of Goa, the location is just one of the top features of this villa. This 4 BHK villa comes with a private pool and car park while also being full furnished and maintained</Typography>
                        <Typography className='lg:text-lg md:text-base text-sm' >As soon as you step inside, you&apos;ll find a spacious layout with high ceilings and large windows that flood the space with natural light. The fully equipped kitchen, dining area and outdoor seating make it the perfect spot for memorable meals with friends and family</Typography>
                        <div className="mt-10 object-center w-2/4 text-center grid grid-cols-3 gap-x-8 gap-y-12">
                            <div className='flex flex-col items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                                </svg>
                                <p className='font-sans text-sm mt-2'>Curated Properties</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-gear-wide-connected" viewBox="0 0 16 16">
                                    <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z" />
                                </svg>
                                <p className='font-sans text-sm mt-2'>End-to-end Property Management</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                                </svg>
                                <p className='font-sans text-sm mt-2'>24*7 Concierge Services</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-lamp" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M5.04.303A.5.5 0 0 1 5.5 0h5c.2 0 .38.12.46.303l3 7a.5.5 0 0 1-.363.687h-.002c-.15.03-.3.056-.45.081a32.731 32.731 0 0 1-4.645.425V13.5a.5.5 0 1 1-1 0V8.495a32.753 32.753 0 0 1-4.645-.425c-.15-.025-.3-.05-.45-.08h-.003a.5.5 0 0 1-.362-.688l3-7ZM3.21 7.116A31.27 31.27 0 0 0 8 7.5a31.27 31.27 0 0 0 4.791-.384L10.171 1H5.83L3.209 7.116Z" />
                                    <path d="M6.493 12.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.052.075l-.001.004-.004.01V14l.002.008a.147.147 0 0 0 .016.033.62.62 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.62.62 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411" />
                                </svg>
                                <p className='font-sans text-sm mt-2'>Fully Furnished & managed Homes</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-clipboard2-data" viewBox="0 0 16 16">
                                    <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                                    <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                                    <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1" />
                                </svg>
                                <p className='font-sans text-sm mt-2'>Capital Appreciation</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-credit-card-2-front" viewBox="0 0 16 16">
                                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                                    <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" />
                                </svg>
                                <p className='font-sans text-sm mt-2'>Curated Properties</p>
                            </div>
                        </div>
                        <MyModal />



            </div>

            <div className="lg:w-3/4 rounded overflow-x-auto shadow-lg shadow-gray-600 card">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl">Location Highlights</div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13834.255347225278!2d74.79663764409774!3d13.34364319791093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1699276791486!5m2!1sen!2sin" allowFullScreen={true} width={"100%"} height={"500"} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>

            </div >
        <Footer />
        </div >
    )
}