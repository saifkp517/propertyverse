import React from 'react'
import { Carousel, Progress, Typography } from "@material-tailwind/react";
import Hero2 from '../components/Hero2'
import Footer from '../components/Footer'
import Image from 'next/image';


const work = () => {
  return (
    <div>
      <Hero2 heading='Prestige Tech Platina' message='' />
      <div className='section1'>

        <div class="flex md:flex-row flex-wrap">

          <div class="w-full md:w-2/4 p-4 mx-10 text-center ">
            <Carousel className="rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image 1"
                className="h-full w-full object-cover"
                layout='fill'
              />
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>
          <div class="w-full md:w-1/4  p-4 text-center rounded overflow-hidden shadow-lg card">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Prestige Tech Platina<br /> <sub>Outer Ring Rd, Bangalore</sub></div>
              <br />
              <hr />
            </div>
            <div class="px-6 pt-4 pb-2">

              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Fully Funded</span>
            </div>
          </div>

        </div>
        <br />
        <div className='mx-14'>
          <h1 className='font-sans text-4xl py-10'>Investment Returns</h1>
          <div class="w-full md:w-3/4  p-4 rounded overflow-hidden shadow-lg card">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Monthly Cash Flow</div>
              <br />
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="h6">
                  MonthlyRent: ₹ 1,48,09,133
                </Typography>
              </div>
              <Progress size='lg' value={60} />

              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="h6">
                  Property Management Fee: ₹ 1,48,09,133
                </Typography>
              </div>
              <Progress size='lg' value={90} color='brown' />

              <p className='float-right'>10% TDS <br /> <b>₹ 16,45,459</b> </p>

            </div>
          </div>
          <div class="w-full md:w-3/4  p-4 rounded overflow-hidden shadow-lg card overflow-x-auto">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Financial Model</div>
              <br />
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th class="px-6 py-3"></th>
                    <th class="px-6 py-3">Day 0</th>
                    <th class="px-6 py-3">Year 1</th>
                    <th class="px-6 py-3">Year 2</th>
                    <th class="px-6 py-3">Year 3</th>
                    <th class="px-6 py-3">Year 4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Investments</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Rents</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Enhanced Yeild</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Sale Value</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="w-full md:w-3/4 text-center  p-4 rounded overflow-hidden shadow-lg card">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Capital Appreciation</div>
              <br />
              <hr />
            </div>
          </div>
          <div class="w-full md:w-3/4  p-4 rounded overflow-hidden shadow-lg card">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Tenant Details</div>
              <br />
            </div>
            <div class="row sm:grid grid-cols-3 gap-1">

              <div class="...">
                <div className="flex flex-col">
                  <h4><u>Name</u></h4>
                  <h4><b>US-based Tech Company</b></h4>
                </div>
              </div>
              <div class="col-span-2 ...">
                <div className="flex flex-col">
                  <h4><u>County</u></h4>
                  <h4><b>USA</b></h4>
                </div>
              </div>
              <div class="col-span-4 ...">
                <h4>Description</h4>
                <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto modi fugiat, aliquid est saepe excepturi minima? Hic magni quos illum rem doloremque? Dignissimos ab quibusdam necessitatibus numquam eligendi itaque.</b></p>
              </div>
              <h4 class=" col-span-4 ..."><u>Time Period</u></h4>
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
              <h4 class="col-span-4 ..."><u>Tenant Highlights</u></h4>
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
          <div class="w-full md:w-3/4  p-4 rounded overflow-hidden shadow-lg card">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Location Highlights</div>
              <br />
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13834.255347225278!2d74.79663764409774!3d13.34364319791093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1699276791486!5m2!1sen!2sin" width={900} height={450} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default work