import React, { useEffect, useState } from 'react'
import MyModal from '../../components/Dialog';
import { Carousel, Typography } from "@material-tailwind/react";
import Hero2 from '../../components/Hero2'
import Footer from '../../components/Footer'
import MyChart from '../../components/MyChart';
import { useAuth0 } from "@auth0/auth0-react";
import Image from 'next/image';

export default function Work() {


  const [value, setValue] = useState(1000000);
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const onUpdate = (e) => {
    setValue(Number(e.target.value));
  }

  if (isAuthenticated) {

    return (
      <div>
        <Hero2 heading='Prestige Tech Platina' message='' />
        <div className='section1 text-gray-400'>

          <div className="flex md:flex-row  flex-wrap">

            <div className="w-full md:w-2/4 p-4 text-center" style={{ minHeight: "50vh" }}>
              <Carousel className="rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image 1"
                  className="h-full w-full object-cover"
                  layout='fill'
                />
                <Image
                  src="https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image 2"
                  className="h-full w-full object-cover"
                  layout='fill'
                />
                <Image
                  src="https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image 3"
                  className="h-full w-full object-cover"
                  layout='fill'
                />
              </Carousel>
            </div>
            <div className="w-full md:w-1/4  p-4 text-center rounded overflow-hidden shadow-lg shadow-gray-600 card">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Prestige Tech Platina<br /> <sub>Outer Ring Rd, Bangalore</sub></div>
                <hr />
              </div>
              <div className="px-6 pt-4 pb-2">
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <svg className="w-12 mx-auto h-12 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1v14h16m0-9-3-2-3 5-3-2-3 4" />
                    </svg>
                    <h1><b className="text-gray-300" >10.00%</b> <br /> HIGH RENTAL YEILD </h1>
                  </div>
                  <div className=''>
                    <svg className="w-12 mx-auto h-12 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 20">
                      <path d="M18.972.863a.913.913 0 0 0-.041-.207.956.956 0 0 0-.107-.19 1.01 1.01 0 0 0-.065-.116c-.008-.01-.02-.013-.028-.022a1.008 1.008 0 0 0-.174-.137 1.085 1.085 0 0 0-.141-.095 1.051 1.051 0 0 0-.171-.047.985.985 0 0 0-.207-.041C18.025.007 18.014 0 18 0h-3.207a1 1 0 1 0 0 2h.5l-4.552 3.9-3.5-.874a1 1 0 0 0-.867.189l-5 4a1 1 0 0 0 1.25 1.562L7.238 7.09l3.52.88a1 1 0 0 0 .892-.211L17 3.173v1.034a1 1 0 0 0 2 0V1a.9.9 0 0 0-.028-.137ZM13.5 9a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm.24 4.591a3.112 3.112 0 0 1 1.935 1.374 2.036 2.036 0 0 1 .234 1.584 2.255 2.255 0 0 1-1.374 1.469.982.982 0 0 1-1.953.09 2.943 2.943 0 0 1-1.475-.92 1 1 0 0 1 1.536-1.283.953.953 0 0 0 .507.29.778.778 0 0 0 .831-.18 1.108 1.108 0 0 0-.714-.481 3.105 3.105 0 0 1-1.934-1.374 2.042 2.042 0 0 1-.233-1.584 2.264 2.264 0 0 1 1.45-1.493v-.03a1 1 0 0 1 2 0c.517.159.98.457 1.337.862a1.002 1.002 0 1 1-1.524 1.3.962.962 0 0 0-.507-.286.775.775 0 0 0-.829.18 1.113 1.113 0 0 0 .713.482ZM6 20a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1Zm-4 0a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Z" />
                    </svg>
                    <h1><b className="text-gray-300" >17.5%</b> <br /> HIGH RETURNS </h1>
                  </div>
                  <div className=''>
                    <svg className=" w-12 mx-auto h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                    </svg>
                    <h1><b className="text-gray-300" >₹10,600 psf</b> <br /> ATTRACTIVE PRICE </h1>
                  </div>
                  <div className=''>
                    <svg className=" w-12 mx-auto h-12 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
                      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
                      </g>
                    </svg>
                    <h1><b className="text-gray-300" >Outer Ring Road</b> <br />LOCATION</h1>
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
            <div className="lg:w-3/4 my-72 p-4 rounded overflow-hidden shadow-lg shadow-gray-600 card">
              <div className="px-0 md:px-6 py-4">
                <div className="font-bold text-xl mb-2">Monthly Cash Flow</div>
                <br />
                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-emerald-200">
                  <div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                  <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
                  <div style={{ width: "10%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500"></div>
                </div>
                <div className="mb-2 flex items-center justify-between gap-4 overflow-auto">
                  <Typography>
                    MonthlyRent:<br /> <span className='text-gray-300 font-extrabold'>₹ 1,48,09,133</span>
                  </Typography>
                  <Typography>
                    Property Management Fee: <br /> <span className='text-gray-300 font-extrabold'>₹ 1,48,09,133</span>
                  </Typography>
                  <Typography>
                    10% TDS: <br /> <span className='text-gray-300 font-extrabold'>₹ 1,48,09,133</span>
                  </Typography>
                </div>

                <div className="mb-2 flex items-center justify-between gap-4">
                </div>



              </div>
            </div>
            <div className="lg:w-3/4  p-4 rounded overflow-hidden shadow-lg shadow-gray-600 card overflow-x-auto">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Financial Model</div>
                <br />



                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right overflow-x-auto">
                    <thead className="text-xs">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Year 1
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Year 2
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Year 3
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Year 4
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                          Investments
                        </th>
                        <td className="px-6 py-4">
                        </td>
                        <td className="px-6 py-4">
                        </td>
                        <td className="px-6 py-4">
                        </td>
                        <td className="px-6 py-4">
                        </td>
                      </tr>
                      <tr className="">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                          Rents
                        </th>
                        <td className="px-6 py-4">
                        </td>
                        <td className="px-6 py-4">
                        </td>
                        <td className="px-6 py-4">
                        </td>
                      </tr>
                      <tr className="">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                          Enhanced Yeild
                        </th>
                        <td className="px-6 py-4">
                        </td>
                        <td className="px-6 py-4">
                        </td>
                        <td className="px-6 py-4">
                        </td>
                        <td className="px-6 py-4">
                        </td>
                      </tr>
                      <tr className="">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                          Sale Value
                        </th>
                        <td className="px-6 py-4">
                        </td>
                        <td className="px-6 py-4">
                        </td>
                        <td className="px-6 py-4">
                        </td>
                        <td className="px-6 py-4">
                        </td>
                      </tr>
                      <tr className="">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                          Total
                        </th>
                        <td className="px-6 py-4">
                        </td>
                        <td className="px-6 py-4">
                        </td>
                        <td className="px-6 py-4">
                        </td>
                        <td className="px-6 py-4">
                        </td>
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
                      <input className="accent-red-500 w-10/12" type="range" value={value} onChange={onUpdate} min={1000000} max={10000000} />
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
                            <Typography variant='h4' className=' text-gray-200'>₹ {Math.round(value / 100000)}.00 Lakhs</Typography>
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
                  <h4><u>Name</u></h4>
                  <h4><b className="text-gray-300" >US-based Tech Company</b></h4>
                </div>
                <div className="flex col-span-2 flex-col">
                  <h4><u>County</u></h4>
                  <h4><b className="text-gray-300" >USA</b></h4>
                </div>
                <div className="col-span-4 ">
                  <h4>Description</h4>
                  <p><b className="text-gray-300" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto modi fugiat, aliquid est saepe excepturi minima? Hic magni quos illum rem doloremque? Dignissimos ab quibusdam necessitatibus numquam eligendi itaque.</b></p>
                </div>
                <h4 className="col-span-4 "><u>Time Period</u></h4>
                <div className=" ">
                  <h6>Lease Start Date</h6>
                  <h4><b className="text-gray-300" >01 Apr 2023</b></h4>
                </div>
                <div className=" ">
                  <h6>Lock-in Period</h6>
                  <h4><b className="text-gray-300" >7 YEARS</b></h4>
                </div>
                <div className=" ">
                  <h6>Lease End Date</h6>
                  <h4><b className="text-gray-300" >01 Apr 2032</b></h4>
                </div>
                <h4 className="col-span-4"><u>Tenant Highlights</u></h4>
                <div className="">
                  <h4><b className="text-gray-300" >1,71,402 SF</b></h4>
                  <h6>TOTAL AREA</h6>

                </div>
                <div className="">
                  <h4><b className="text-gray-300" >96</b></h4>
                  <h6>RENT PER SF</h6>

                </div>
                <div className="  ">
                  <h4><b className="text-gray-300" >9 YEARS</b></h4>
                  <h6>LEASE PERIOD</h6>

                </div>
                <div className="  ">
                  <h4><b className="text-gray-300" >15%</b></h4>
                  <h6>ESCALATION</h6>

                </div>
              </div>
            </div>
            <div className="lg:w-3/4 rounded overflow-x-auto shadow-lg shadow-gray-600 card">
              <div className="px-6 py-4">
                <div className="font-bold text-xl">Location Highlights</div>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13834.255347225278!2d74.79663764409774!3d13.34364319791093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1699276791486!5m2!1sen!2sin" allowFullScreen={true} width={"100%"} height={"500"} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
          </div>

        </div>
        <Footer />
      </div>
    )
  } else {
    loginWithRedirect();
  }
}
