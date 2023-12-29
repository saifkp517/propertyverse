import React, { useEffect, useState } from 'react'
import MyModal from '../../components/Dialog';
import CapitalAppreciation from '../../components/CapitalAppreciation';
import TenantDetails from '../../components/TenantDetails';
import { Typography } from "@material-tailwind/react";
import Carousel from '../../components/Carousel';
import Hero2 from '../../components/Hero2';
import MyChart from '../../components/MyChart';
import Head from 'next/head';
import Footer from '../../components/Footer'
import Image from 'next/image';

export default function Details() {

    const [value, setValue] = useState(1000000);
    const [loaded, setLoaded] = useState("animate-pulse");

    const images = [
        'https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176093-embassy-tech-square-bangalore-1.jpg',
        'https://propmedia2.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176096-embassy-tech-square-bangalore-2.jpg',
        'https://propmedia2.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176099-embassy-tech-square-bangalore-3.jpg',
        'https://propmedia2.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176102-embassy-tech-square-bangalore-4.jpg',
        'https://propmedia2.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176105-embassy-tech-square-bangalore-5.jpg',
        'https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176111-embassy-tech-square-bangalore-7.jpg',
        'https://propmedia2.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176114-embassy-tech-square-bangalore-8.jpg',
        'https://propmedia2.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176117-embassy-tech-square-bangalore-9.jpg',
        'https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176120-embassy-tech-square-bangalore-10.jpg',
        'https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176123-embassy-tech-square-bangalore-11.jpg',
        'https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176129-embassy-tech-square-bangalore-13.jpg'
    ]

    const yr = ["10,35,32,808", "", "8,87,36,808", "9,31,73,648", "10,20,47,329"]
    const prprtyname = "Embassy Tech Square", invamt = "68,60,00,000", mr = "38,62,500", pmf = "5,71,667", tds = "4,29,167"
        const purchasedetails = {
        Purchase_Price: 280202500,
        Legal_Expenses: 1500000,
        Acquisition_Fee: 9500000,
        Reserves: 164034,
        Stamp_Duty: 18633466
    }

    const details = {
        rentalyeild: 8.62,
        returns: 15.9,
        price: "13,253",
        location: "ORR",
        name: "LG Soft India",
        country: "South Korea",
        description: "Leading globals manufacturer",
        start: "01 Oct 2021",
        lockinperiod: 3,
        enddate: "01 Oct 2026",
        totalarea: "84,512",
        rentpersf: 88,
        leaseperiod: 5,
        escalation: 15
    }

    const onUpdate = (e) => {
        setValue(Number(e.target.value));
    }

    return (

        <div>
            <Head>
                <title>Embassy_Tech_Square</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Hero2 heading={prprtyname} message='' imageurl={'https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/banner/1440x300/1638176086-embassy-tech-square-bangalore-1.jpg'}/>
            <div className='section1 text-gray-400'>
                <div className="flex md:flex-row  flex-wrap">

                    <div className="w-full md:3/4 lg:w-2/4 p-4 text-center" style={{ minHeight: "5" }}>

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
                                    <h1><b className="text-gray-300" >{8.62} %</b> <br /> HIGH RENTAL YEILD </h1>
                                </div>
                                <div>
                                    <div className="w-24 mx-auto h-24 rounded-xl bg-gray-900 p-4" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-graph-up" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
                                        </svg>
                                    </div>

                                    <h1><b className="text-gray-300" >{15.9} %</b> <br /> HIGH RETURNS </h1>
                                </div>
                                <div className=''>
                                    <svg className="w-24 mx-auto h-24 rounded bg-gray-900 p-3" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                                    </svg>
                                    <h1><b className="text-gray-300" >₹ {"13,253"} psf</b> <br /> ATTRACTIVE PRICE </h1>
                                </div>
                                <div className=''>
                                    <svg className="w-24 mx-auto h-24 rounded bg-gray-900 p-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
                                        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                            <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
                                        </g>
                                    </svg>
                                    <h1><b className="text-gray-300" >{"ORR"}</b> <br />LOCATION</h1>
                                </div>

                            </div>
                            <br />
                            <MyModal name={prprtyname} />>

                        </div>
                    </div>

                </div>
                <br />
                <div>
                    <h1 className='font-sans text-4xl mx-10 py-10'>Investment Returns</h1>
                    <h1 className='text-2xl mx-10' >Investment Amount:  <span className='bg-gray-500 p-2 ml-2 text-gray-900'>₹ 1,23,30,00,000</span></h1>
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
                                    MonthlyRent:<br /> <span className='text-gray-300 font-extrabold'>₹ {"70,48,111"}</span>
                                </Typography>
                                <Typography>
                                    Property Management Fee: <br /> <span className='text-gray-300 font-extrabold'>₹ {"10,27,500"}</span>
                                </Typography>
                                <Typography>
                                    10% TDS: <br /> <span className='text-gray-300 font-extrabold'>₹ {"7,83,123"}</span>
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
                                                yr.map((year, index) => <th key={index} scope="col" className="px-6 py-3">Year {index + 1}</th>)
                                            }
                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                Investments
                                            </th>
                                            <th scope="col" className="px-6 py-4">₹ {"1,23,30,00,000"}</th>
                                            {
                                                yr.map((year, index) => <td key={index} scope="col" className="px-6 py-4"></td>)
                                            }
                                        </tr>
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                Rents
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">

                                            </th>
                                            {
                                                yr.map((amt, index) => <td key={index} scope="col" className="px-6 py-4">₹ {amt}</td>)
                                            }
                                        </tr>
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                Interest on Depost
                                            </th>
                                            <td className="px-6 py-4">
                                            </td>
                                            {
                                                yr.map((year, index) => <td key={index} scope="col" className="px-6 py-4">₹ {"27,71,994"}</td>)
                                            }
                                        </tr>
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                Developer Fees
                                            </th>
                                            <td className="px-6 py-4">
                                            </td>
                                            {
                                                yr.map((year, index) => <td key={index} scope="col" className="px-6 py-4">{(index == yr.length - 1) ? <>{"30,61,420"}</> : undefined}</td>)
                                            }

                                        </tr>
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                Sale Value
                                            </th>
                                            <td className="px-6 py-4">
                                            </td>
                                            {
                                                yr.map((year, index) => <td key={index} scope="col" className="px-6 py-4">{(index == yr.length - 1) ? <>{"1,69,30,69,151"}</> : undefined}</td>)
                                            }
                                        </tr>

                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-large whitespace-nowrap dark:text-white">
                                                Total:
                                            </th>
                                            <td className="px-6 py-4">
                                            </td>
                                            {
                                                yr.map((year, index) => <td key={index} scope="col" className="px-6 py-4">₹{
                                                    index === yr.length - 1
                                                        ?
                                                        Number("1,69,30,69,151".replace(/\,/g, '')) + Number(year.replace(/\,/g, '')) + Number("27,71,994".replace(/\,/g, ''))
                                                        :
                                                        Number(year.replace(/\,/g, '')) + Number("27,71,994".replace(/\,/g, ''))
                                                }</td>)
                                            }
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>
                    <CapitalAppreciation purchasedetails={purchasedetails} yr={yr} />
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
