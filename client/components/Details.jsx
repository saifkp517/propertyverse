import React, { useEffect, useState } from 'react'
import MyModal from './Dialog';
import { Carousel, Typography } from "@material-tailwind/react";
import Hero2 from './Hero2'
import MyChart from './MyChart';
import Image from 'next/image';

export default function Details({ data }) {

    const [value, setValue] = useState(1000000);
    const [loaded, setLoaded] = useState("animate-pulse");

    if(data === undefined) {
        return (
            <div>
                <p style={{minHeight: "100vh", textAlign: "center", padding: "40vh 0"}}>property not found</p>
            </div>
        );
    }

    const onUpdate = (e) => {
        setValue(Number(e.target.value));
    }

    alert(data.fm.developerfees)


    const name = data.url.split("_").join(" ");

    return (
        <div>
            <Hero2 heading={name} message='' />
            <div className='section1 text-gray-400'>
                <div className="flex md:flex-row  flex-wrap">

                    <div className="w-full md:3/4 lg:w-2/4 p-4 text-center" style={{ minHeight: "5" }}>

                        <Carousel className="rounded-xl">
                            {
                                data.images.map(img =>
                                    <Image
                                        key={img}
                                        src={img}
                                        onLoad={() => setLoaded("")}
                                        alt="Loading"
                                        className={`${loaded} bg-gray-700 h-full w-full object-cover`}
                                        height={100}
                                        width={100}
                                        layout='responsive'
                                    />
                                )
                            }
                        </Carousel>
                    </div>
                    <div className="w-full lg:w-1/4 md:w-2/4  p-4 text-center rounded overflow-hidden shadow-lg shadow-gray-600 card">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{name}<br /></div>
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
                                    <h1><b className="text-gray-300" >{data.ry} %</b> <br /> HIGH RENTAL YEILD </h1>
                                </div>
                                <div>
                                    <div className="w-24 mx-auto h-24 rounded-xl bg-gray-900 p-4" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-graph-up" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
                                        </svg>
                                    </div>

                                    <h1><b className="text-gray-300" >{data.ret} %</b> <br /> HIGH RETURNS </h1>
                                </div>
                                <div className=''>
                                    <svg className="w-24 mx-auto h-24 rounded bg-gray-900 p-3" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                                    </svg>
                                    <h1><b className="text-gray-300" >₹ {data.psf} psf</b> <br /> ATTRACTIVE PRICE </h1>
                                </div>
                                <div className=''>
                                    <svg className="w-24 mx-auto h-24 rounded bg-gray-900 p-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
                                        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                            <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
                                        </g>
                                    </svg>
                                    <h1><b className="text-gray-300" >{data.loc}</b> <br />LOCATION</h1>
                                </div>

                            </div>
                            <br />
                           <MyModal name={prprtyname} />

                        </div>
                    </div>

                </div>
                <br />
                <div>
                    <h1 className='font-sans text-4xl mx-10 py-10'>Investment Returns</h1>
                    <h1 className='text-2xl mx-10' >Investment Amount:  <span className='bg-gray-500 p-2 ml-2 text-gray-900'>₹ {data.invamt}</span></h1>
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
                                    MonthlyRent:<br /> <span className='text-gray-300 font-extrabold'>₹ {data.mr}</span>
                                </Typography>
                                <Typography>
                                    Property Management Fee: <br /> <span className='text-gray-300 font-extrabold'>₹ {data.pmf}</span>
                                </Typography>
                                <Typography>
                                    10% TDS: <br /> <span className='text-gray-300 font-extrabold'>₹ {data.tds}</span>
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
                                                data.fm.yr.map((year, index) => <th key={index} scope="col" className="px-6 py-3">Year {index + 1}</th>)
                                            }
                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                Investments
                                            </th>
                                            <th scope="col" className="px-6 py-4">₹ {data.invamt}</th>
                                            {
                                                data.fm.yr.map((year, index) => <td key={index} scope="col" className="px-6 py-4"></td>)
                                            }
                                        </tr>
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                Rents
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">

                                            </th>
                                            {
                                                data.fm.yr.map((amt, index) => <td key={index} scope="col" className="px-6 py-4">₹ {amt}</td>)
                                            }
                                        </tr>
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                Interest on Depost
                                            </th>
                                            <td className="px-6 py-4">
                                            </td>
                                            {
                                                data.fm.yr.map((year, index) => <td key={index} scope="col" className="px-6 py-4">₹ {data.fm.iod}</td>)
                                            }
                                        </tr>
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                Developer Fees
                                            </th>
                                            <td className="px-6 py-4">
                                            </td>
                                            {
                                                data.fm.yr.map((year, index) => <td key={index} scope="col" className="px-6 py-4">{(index == data.fm.yr.length - 1) ? <>{data.fm.developerfees}</> : undefined}</td>)
                                            }

                                        </tr>
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                                Sale Value
                                            </th>
                                            <td className="px-6 py-4">
                                            </td>
                                            {
                                                data.fm.yr.map((year, index) => <td key={index} scope="col" className="px-6 py-4">{(index == data.fm.yr.length - 1) ? <>{data.fm.sv}</> : undefined}</td>)
                                            }
                                        </tr>

                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-large whitespace-nowrap dark:text-white">
                                                Total:
                                            </th>
                                            <td className="px-6 py-4">
                                            </td>
                                            {
                                                data.fm.yr.map((year, index) => <td key={index} scope="col" className="px-6 py-4">₹{
                                                    index === data.fm.yr.length - 1
                                                    ?
                                                    Number(data.fm.sv.replace(/\,/g, '')) + Number(year.replace(/\,/g, '')) + Number(data.fm.iod.replace(/\,/g, '')) 
                                                    :
                                                    Number(year.replace(/\,/g, '')) + Number(data.fm.iod.replace(/\,/g, '')) 
                                                }</td>)
                                            }
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>
                    <div className="lg:w-3/4 text-center  p-4 rounded overflow-hidden shadow-lg shadow-gray-600 card">
                        <div className="lg:px-6 py-4 sm:p-0">
                            <div className="font-bold text-xl mb-2">Capital Appreciation</div>
                            <br />
                            <div className="my-12">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className='lg:px-12 md:px-4 sm:px-0'>
                                        <h1 className='lg:text-2xl sm:text-lg'>Property Pricing</h1>
                                        <MyChart />
                                    </div>
                                    <div>
                                        <br />
                                        <input className="accent-red-500 w-10/12" type="range" value={value} onChange={onUpdate} min={1000000.00} max={10000000.00} />
                                        <p className='text-center'>&nbsp;₹ {Math.round(value / 100000)} Lakhs</p>

                                        <div className="grid grid-cols-2">
                                            <h1 className=" w-9/12 text-left ">10Lakhs</h1>
                                            <h1 className=" w-9/12 text-right ">1 CR</h1>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 w-full my-10">
                                            <div className="col-span-3 text-start mx-6 my-2">
                                                <h1><b>Assured Return Rate (P.A): </b><span className=' text-red-400'> 12 %</span></h1>
                                                <h1><b>Time Period (P.A): </b><span className=' text-red-400'> 48 Months</span></h1>
                                                <h1>
                                                    <Typography variant='h4' className=' text-gray-200'>₹  {(value / 100000).toFixed(2)} Lakhs</Typography>
                                                    <h1><b>Investment Amount</b></h1>
                                                </h1>
                                                <h1>
                                                    <Typography variant='h4' className='text-gray-200'>₹ {(value / 100000 * 0.12).toFixed(2)} Lakhs</Typography>
                                                    <h1><b>Est. Returns</b></h1>
                                                </h1>
                                                <h1>
                                                    <Typography variant='h4' className='text-gray-200'>₹ {((value / 100000 + value / 100000 * 0.12) * 4).toFixed(2)} Lakhs</Typography>
                                                    <h1><b>Total Value</b></h1>
                                                </h1>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="lg:w-3/4  p-4 rounded overflow-hidden shadow-lg shadow-gray-600 card">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Tenant Details</div>
                            <br />
                        </div>
                        <div className="row sm:grid grid-cols-4 gap-4">

                            <div className="flex col-span-2 flex-col">
                                <Typography variant='h4' className='my-2 text-xl text-red-400'>Name</Typography>
                                <h1><b className="text-gray-300 text-2xl " >{data.td.name}</b></h1>
                            </div>
                            <div className="flex col-span-2 flex-col">
                                <Typography variant='h4' className='my-2 text-xl text-red-400'>Country</Typography>
                                <h1><b className="text-gray-300 text-2xl" >{data.td.country}</b></h1>
                            </div>
                            <div className="col-span-4 ">
                                <Typography variant='h4' className='my-2 text-xl text-red-400'>Description</Typography>
                                <p className="text-gray-300">{data.td.desc}</p>
                            </div>
                            <Typography variant='h4' className="col-span-4 text-xl text-red-400 ">Time Period</Typography>
                            <div className="flex lg:col-span-1 sm:col-span-2">
                                <div className="m-4 border rounded-full  border-gray-600  p-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                    </svg>
                                </div>
                                <div className='mt-4'>
                                    <h6>Lease Start Date</h6>
                                    <h4><b className="text-gray-300">{data.td.strt}</b></h4>
                                </div>
                            </div>
                            <div className="flex lg:col-span-1 sm:col-span-2">
                                <div className="m-4 border rounded-full  border-gray-600  p-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16">
                                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                </div>
                                <div className='mt-4'>
                                    <h6>Lock-in Period</h6>
                                    <h4><b className="text-gray-300" >{data.td.lockperiod} YEARS</b></h4>
                                </div>
                            </div>
                            <div className="flex lg:col-span-1 sm:col-span-2">
                                <div className="m-4 border border-gray-600 rounded-full  p-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                    </svg>
                                </div>
                                <div className='mt-4'>
                                    <h6>Lease End Date</h6>
                                    <h4><b className="text-gray-300" >{data.td.end}</b></h4>
                                </div>
                            </div>
                            <Typography variant='h4' className="col-span-4 text-xl text-red-400">Tenant Highlights</Typography>
                            <div className="">
                                <h4><b className="text-gray-300" >{data.td.highlights.totalarea} SF</b></h4>
                                <h6>TOTAL AREA</h6>

                            </div>
                            <div className="">
                                <h4><b className="text-gray-300" >{data.td.highlights.rentpersf}</b></h4>
                                <h6>RENT PER SF</h6>

                            </div>
                            <div className="  ">
                                <h4><b className="text-gray-300" >{data.td.highlights.leaseperiod} YEARS</b></h4>
                                <h6>LEASE PERIOD</h6>

                            </div>
                            <div className="  ">
                                <h4><b className="text-gray-300" >{data.td.highlights.escalation} %</b></h4>
                                <h6>ESCALATION</h6>

                            </div>
                        </div>
                    </div>
                    <div className="lg:w-3/4 rounded overflow-x-auto shadow-lg shadow-gray-600 card">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl">Location Highlights</div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13834.255347225278!2d74.79663764409774!3d13.34364319791093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1699276791486!5m2!1sen!2sin" allowFullScreen={true} width={"100%"} height={"500"} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </div>

            </div>
        </div>
    )
}
