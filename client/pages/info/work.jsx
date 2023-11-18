import React, { useEffect, useState } from 'react'
import { Carousel, Progress, Typography } from "@material-tailwind/react";
import Hero2 from '../../components/Hero2'
import Footer from '../../components/Footer'
import MyChart from '../../components/MyChart';
import Image from 'next/image';

export default function Work() {

  const [value, setValue] = useState(1000000);

  const onUpdate = (e) => {
    setValue(Number(e.target.value));
  }

  return (
    <div>
      <Hero2 heading='Prestige Tech Platina' message='' />
      <div className='section1 text-gray-400'>

        <div className="flex md:flex-row flex-wrap">

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
              <br />
              <hr />
            </div>
            <div className="px-6 pt-4 pb-2">

              <button className="inline-block bg-red-500 hover:px-6 shadow-lg shadow-red-500/50 rounded-full px-5 py-3 text-sm font-semibold text-gray-700 mr-2 mb-2">Interested?</button>

            </div>
          </div>

        </div>
        <br />
        <div>
          <h1 className='font-sans text-4xl mx-10 py-10'>Investment Returns</h1>
          <div className="lg:w-3/4 md:w-1/4 my-72 p-4 rounded overflow-hidden shadow-lg shadow-gray-600 card">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Monthly Cash Flow</div>
              <br />
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography variant="h6">
                  MonthlyRent: ₹ 1,48,09,133
                </Typography>
              </div>
              <Progress size='lg' value={60} />

              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography variant="h6">
                  Property Management Fee: ₹ 1,48,09,133
                </Typography>
              </div>
              <Progress size='lg' value={90} color='brown' />

              <p className='float-right'>10% TDS <br /> <b>₹ 16,45,459</b> </p>

            </div>
          </div>
          <div className="lg:w-3/4 md:w-1/4  p-4 rounded overflow-hidden shadow-lg shadow-gray-600 card overflow-x-auto">
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
          <div className="lg:w-3/4 md:w-1/4 text-center  p-4 rounded overflow-hidden shadow-lg shadow-gray-600 card">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Capital Appreciation</div>
              <br />
              <div className="my-12">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className='lg:px-12 md:px-4'>
                    <h1 className='text-2xl'>Property Pricing</h1>
                    <MyChart />
                  </div>
                  <div>
                    <h1></h1>
                    <br />
                    <input className="accent-red-500 w-10/12" type="range" value={value} onChange={onUpdate} min={1000000} max={10000000} /><span className='text-end'>&nbsp;{Math.round(value/100000)} Lakhs</span>
                    <div className="grid grid-cols-3 gap-4 w-full my-10">
                      <div className='...'>
                        {Math.round(value/100000)} Lakhs
                        <h1><b>Investment Amount</b></h1>
                      </div>
                      <div className='...'>
                      {(value/100000 * 0.12).toFixed(2)} Lakhs
                      <h1><b>Est. Returns</b></h1>
                      </div>
                      <div className='...'>
                        {(value/100000 + value/100000 * 0.12).toFixed(2)} Lakhs
                        <h1><b>Total Value</b></h1>
                      </div>
                    </div>


                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="lg:w-3/4 md:w-1/4  p-4 rounded overflow-hidden shadow-lg shadow-gray-600 card">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Tenant Details</div>
              <br />
            </div>
            <div className="row sm:grid grid-cols-3 gap-1">

              <div className="...">
                <div className="flex flex-col">
                  <h4><u>Name</u></h4>
                  <h4><b>US-based Tech Company</b></h4>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col">
                  <h4><u>County</u></h4>
                  <h4><b>USA</b></h4>
                </div>
              </div>
              <div className="col-span-4 ...">
                <h4>Description</h4>
                <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto modi fugiat, aliquid est saepe excepturi minima? Hic magni quos illum rem doloremque? Dignissimos ab quibusdam necessitatibus numquam eligendi itaque.</b></p>
              </div>
              <h4 className=" col-span-4 ..."><u>Time Period</u></h4>
              <div className="flex flex-col ...">
                <h6>Lease Start Date</h6>
                <h4><b>01 Apr 2023</b></h4>
              </div>
              <div className="flex flex-col ...">
                <h6>Lock-in Period</h6>
                <h4><b>7 YEARS</b></h4>
              </div>
              <div className="flex flex-col ...">
                <h6>Lease End Date</h6>
                <h4><b>01 Apr 2032</b></h4>
              </div>
              <h4 className="col-span-4 ..."><u>Tenant Highlights</u></h4>
              <div className="w-1/4 flex flex-col ...">
                <h4><b>1,71,402 SF</b></h4>
                <h6>TOTAL AREA</h6>

              </div>
              <div className="w-1/4 flex flex-col ...">
                <h4><b>96</b></h4>
                <h6>RENT PER SF</h6>

              </div>
              <div className="w-1/4 flex flex-col ...">
                <h4><b>9 YEARS</b></h4>
                <h6>LEASE PERIOD</h6>

              </div>
              <div className="w-1/4 flex flex-col ...">
                <h4><b>15%</b></h4>
                <h6>ESCALATION</h6>

              </div>
            </div>
          </div>
          <div className="lg:w-3/4 md:w-1/4  p-4 rounded overflow-x-auto shadow-lg shadow-gray-600 card">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Location Highlights</div>
              <br />
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13834.255347225278!2d74.79663764409774!3d13.34364319791093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1699276791486!5m2!1sen!2sin" width={900} height={450} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}
