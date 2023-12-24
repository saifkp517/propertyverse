import React, { useEffect, useState } from 'react'
import TenantDetails from '../../components/TenantDetails';
import CapitalAppreciation from '../../components/CapitalAppreciation';
import Footer from '../../components/Footer';
import MyModal from '../../components/Dialog';
import { Typography } from "@material-tailwind/react";
import Carousel from '../../components/Carousel';
import Hero2 from '../../components/Hero2';
import MyChart from '../../components/MyChart';
import Head from 'next/head';
import Image from 'next/image';

export default function Details() {

    const [value, setValue] = useState(1000000);
    const [loaded, setLoaded] = useState("animate-pulse");

    const images = [
        'https://propmedia2.propertyshare.in/website/property/QitVMVBpUjc4UnA0bElDS3dPZDN3Zz09/media-v2/images/main/1330x800/1578542217-miraya-rose-whitefield-bangalore-1.jpg',
        'https://propmedia2.propertyshare.in/website/property/QitVMVBpUjc4UnA0bElDS3dPZDN3Zz09/media-v2/images/main/1330x800/1578542220-miraya-rose-whitefield-bangalore-2.jpg',
        'https://propmedia1.propertyshare.in/website/property/QitVMVBpUjc4UnA0bElDS3dPZDN3Zz09/media-v2/images/main/1330x800/1578542223-miraya-rose-whitefield-bangalore-3.jpg',
        'https://propmedia2.propertyshare.in/website/property/QitVMVBpUjc4UnA0bElDS3dPZDN3Zz09/media-v2/images/main/1330x800/1578542226-miraya-rose-whitefield-bangalore-4.jpg',
        'https://propmedia1.propertyshare.in/website/property/QitVMVBpUjc4UnA0bElDS3dPZDN3Zz09/media-v2/images/main/1330x800/1578542229-miraya-rose-whitefield-bangalore-5.jpg',
        'https://propmedia2.propertyshare.in/website/property/QitVMVBpUjc4UnA0bElDS3dPZDN3Zz09/media-v2/images/main/1330x800/1578542232-miraya-rose-whitefield-bangalore-6.jpg',
        'https://propmedia2.propertyshare.in/website/property/QitVMVBpUjc4UnA0bElDS3dPZDN3Zz09/media-v2/images/main/1330x800/1578542235-miraya-rose-whitefield-bangalore-7.jpg',
        'https://propmedia2.propertyshare.in/website/property/QitVMVBpUjc4UnA0bElDS3dPZDN3Zz09/media-v2/images/main/1330x800/1578542238-miraya-rose-whitefield-bangalore-8.jpg',
        'https://propmedia2.propertyshare.in/website/property/QitVMVBpUjc4UnA0bElDS3dPZDN3Zz09/media-v2/images/main/1330x800/1578542241-miraya-rose-whitefield-bangalore-9.jpg',
        'https://propmedia2.propertyshare.in/website/property/QitVMVBpUjc4UnA0bElDS3dPZDN3Zz09/media-v2/images/main/1330x800/1578542244-miraya-rose-whitefield-bangalore-10.jpg',
        'https://propmedia2.propertyshare.in/website/property/QitVMVBpUjc4UnA0bElDS3dPZDN3Zz09/media-v2/images/main/1330x800/1578542247-miraya-rose-whitefield-bangalore-11.jpg',
    ]

    const capitalappreciation = 10;

    const tatacroma = ["80,99,987", "86,78,370", "92,56,643", "92,56,643", "99,17,574"]
    const urbanladder = ["53,99,444", "60,06,949", "62,09,377", "62,09,377", "69,07,969"]
    const naturesbasket = ["36,00,031", "36,00,031", "41,39,986", "41,39,986", "41,39,986"]
    const organicworld = ["25,20,011", "25,20,011", "27,08,973", "28,98,045", "28,98,045"]
    const rentaltopup = ["27,37,000", "", "", "", ""]

    const iod = "6,48,012", salevalue = "44,07,96,587"

    const prprtyname = "Miraya Rose", invamt = "27,37,00,000", mr = "15,20,061", pmf = "2,28,083", tds = "1,68,896"
        const purchasedetails = {
        Purchase_Price: 280202500,
        Legal_Expenses: 1500000,
        Acquisition_Fee: 9500000,
        Reserves: 164034,
        Stamp_Duty: 18633466
    }

    const details = {
        rentalyeild: 8.4,
        returns: 17.50,
        price: "11,059",
        location: "Tata Croma",
        name: "Tata Croma",
        country: "India",
        description: "Tata Croma is a large retail format chain for consumer electronics from Tata Group having 134 stores in 32 citites.",
        start: "01 Apr 2018",
        lockinperiod: 2,
        enddate: "01 May 2033",
        totalarea: "11,625",
        rentpersf: 58,
        leaseperiod: 15,
        escalation: 14.3
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
            <Hero2 heading={prprtyname} message='' imageurl={'https://propmedia1.propertyshare.in/website/property/QitVMVBpUjc4UnA0bElDS3dPZDN3Zz09/media-v2/images/banner/1440x300/1578542210-miraya-rose-whitefield-bangalore-1.jpg'} />
            <div className='section1 text-gray-400'>
                <div className="flex md:flex-row flex-wrap">

                    <div className="w-full md:3/4 lg:w-2/4 p-4 text-center">

                    <Carousel images={images} />
                    </div>
                    <div className="w-full lg:w-1/4 md:w-2/4  p-4 text-center rounded overflow-hidden shadow-lg shadow-gray-600 card">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{prprtyname}<br /></div>
                            <hr />
                        </div>
                        <div className="px-6 pt-4 pb-2 gap-2">
                            <div className="grid grid-cols-2 gap-0">
                                <div>
                                    <div className="w-24 mx-auto h-24 rounded bg-gray-900 p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-bar-chart" viewBox="0 0 16 16">
                                            <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
                                        </svg>
                                    </div>
                                    <h1><b className="text-gray-300" >{details.rentalyeild} %</b> <br /> HIGH RENTAL YEILD </h1>
                                </div>
                                <div>
                                    <div className="w-24 mx-auto h-24 rounded-xl bg-gray-900 p-4" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-graph-up" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
                                        </svg>
                                    </div>

                                    <h1><b className="text-gray-300" >{details.returns} %</b> <br /> HIGH RETURNS </h1>
                                </div>
                                <div className=''>
                                    <svg className="w-24 mx-auto h-24 rounded bg-gray-900 p-3" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                                    </svg>
                                    <h1><b className="text-gray-300" >₹ {details.price} psf</b> <br /> ATTRACTIVE PRICE </h1>
                                </div>
                                <div className=''>
                                    <svg className="w-24 mx-auto h-24 rounded bg-gray-900 p-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
                                        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                            <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
                                        </g>
                                    </svg>
                                    <h1><b className="text-gray-300" >{details.location}</b> <br />GRADE A TENANTS</h1>
                                </div>

                            </div>
                            <br />
                            <MyModal />

                        </div>
                    </div>

                </div>
                <br />
                <div>
                    <h1 className='font-sans text-4xl mx-10 py-10'>Investment Returns</h1>
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
                                    Monthly rent:<br /> <span className='text-gray-300 font-extrabold'>₹ {mr}</span>
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
                    </div>
                    <div className="lg:w-3/4 lg:p-4 p-0 rounded overflow-hidden shadow-lg shadow-gray-600 card overflow-x-auto">
                        <div className="px-6 py-4">
                            <div className="text-xl mb-2">Financial Model</div>
                            <br />



                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left rtl:text-right overflow-x-auto">
                                    <thead className="text-xs text-white bg-gray-700">
                                        <tr>
                                            <th scope="col" className="px-6 py-3"></th>
                                            <th scope="col" className="px-6 py-3">DAY 0</th>
                                            {
                                                tatacroma.map((year, index) => <th key={index} scope="col" className="px-6 py-3">Year {index + 1}</th>)
                                            }
                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                Investment
                                            </th>
                                            <th scope="col" className="px-6 py-4">₹ {invamt}</th>
                                            {
                                                tatacroma.map((year, index) => <td key={index} scope="col" className="px-6 py-4"></td>)
                                            }
                                        </tr>
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                Tata Croma
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">

                                            </th>
                                            {
                                                tatacroma.map((amt, index) => <td key={index} scope="col" className="px-6 py-4">₹ {amt}</td>)
                                            }
                                        </tr>
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                Urban Ladder
                                            </th>
                                            <td className="px-6 py-4">
                                            </td>
                                            {
                                                urbanladder.map((amt, index) => <td key={index} scope="col" className="px-6 py-4">₹ {amt}</td>)
                                            }
                                        </tr>

                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                Nature&apos;s Basket
                                            </th>
                                            <td className="px-6 py-4">
                                            </td>
                                            {
                                                naturesbasket.map((amt, index) => <td key={index} scope="col" className="px-6 py-4">₹ {amt}</td>)
                                            }
                                        </tr>


                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                Organic World
                                            </th>
                                            <td className="px-6 py-4">
                                            </td>
                                            {
                                                organicworld.map((amt, index) => <td key={index} scope="col" className="px-6 py-4">₹ {amt}</td>)
                                            }
                                        </tr>

                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                Rental Top-Up
                                            </th>
                                            <td className="px-6 py-4">
                                            </td>
                                            {
                                                rentaltopup.map((amt, index) => <td key={index} scope="col" className="px-6 py-4"> {
                                                    (index === 0) ? "₹" + amt : "-"
                                                }</td>)
                                            }
                                        </tr>

                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                Interest on Depost
                                            </th>
                                            <td className="px-6 py-4">
                                            </td>
                                            {
                                                naturesbasket.map((year, index) => <td key={index} scope="col" className="px-6 py-4">₹ {iod}</td>)
                                            }
                                        </tr>

                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                Sale Value
                                            </th>
                                            <td className="px-6 py-4">
                                            </td>
                                            {
                                                rentaltopup.map((amt, index) => <td key={index} scope="col" className="px-6 py-4"> {
                                                    (index === rentaltopup.length - 1) ? "₹" + salevalue : "-"
                                                }</td>)
                                            }
                                        </tr>

                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-large whitespace-nowrap dark:text-white">
                                                Total:
                                            </th>
                                            <td className="px-6 py-4">
                                            </td>
                                            {
                                                tatacroma.map((year, index) => <td key={index} scope="col" className="px-6 py-4">₹{
                                                    (index === tatacroma.length - 1)
                                                        ?
                                                        Number(tatacroma[index].replace(/\,/g, '')) + Number(urbanladder[index].replace(/\,/g, '')) + Number(naturesbasket[index].replace(/\,/g, '')) + Number(organicworld[index].replace(/\,/g, '')) + Number(rentaltopup[index].replace(/\,/g, '')) + Number(iod.replace(/\,/g, '')) + Number(salevalue.replace(/\,/g, ''))
                                                        :
                                                        Number(tatacroma[index].replace(/\,/g, '')) + Number(urbanladder[index].replace(/\,/g, '')) + Number(naturesbasket[index].replace(/\,/g, '')) + Number(organicworld[index].replace(/\,/g, '')) + Number(rentaltopup[index].replace(/\,/g, '')) + Number(iod.replace(/\,/g, ''))
                                                }</td>)
                                            }
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>
                    <CapitalAppreciation purchasedetails={purchasedetails} yr={tatacroma}/>
                    <TenantDetails details={details} />
                    <div className="lg:w-3/4 rounded overflow-x-auto shadow-lg shadow-gray-600 card">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl">Location Highlights</div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13834.255347225278!2d74.79663764409774!3d13.34364319791093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1699276791486!5m2!1sen!2sin" allowFullScreen={true} width={"100%"} height={"500"} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </div>

            </div>
            <Footer />

        </div>
    )
}
