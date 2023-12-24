import Head from 'next/head';
import Hero from '../components/Hero3';
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Link from 'next/link';
import Card from '../components/VillaCard';
// import { getDataFromWebsite } from '../lib/api';

export default function Home() {

  // const [apiProperties, setApiProperties] = useState([]); // for api implementation https://dev.to/alais29/building-a-real-time-search-filter-in-react-a-step-by-step-guide-3lmm


  const properties = [
    { name: "Villa Ananyata", location: "Thane , Mumbai", area: "35,802", BUA: "4000", img: "https://storage.googleapis.com/sharenest/properties/Villa%20ANANYATA/01%20(1)-min.jpg" },
    { name: "Oasis Deck", location: "Alibaug, Maharashtra", area: "965", BUA: "695", img: "/../public/ig-img-1.jpeg" },
  ]

  const [searchItem, setSearchItem] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {

    //   getDataFromWebsite().then(res => res.json())
    //     .then(data => {
    //       setApiProperties(data)
    //       setFilteredProperties(data)
    //     })

  }, [])

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    const filteredItems = properties.filter((property) =>
      property.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProperties(filteredItems);
  }


  return (
    <div>

      <Head>
        <title>PropertyVerse</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero message='Welcome to a redefinition of property management. Discover seamless solutions for property owners and tenants alike' />


      <div className='my-16'>
        <nav className="border-gray-200 px-2 mb-10">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <a href="#" className="flex">
            </a>
            <div className="flex md:order-2">
              <div className="relative mr-3 md:mr-0 hidden md:block">
              </div>
            </div>
            <div className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li style={{ display: "flex" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-buildings" viewBox="0 0 16 16">
                    <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
                    <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
                  </svg>
                  <Link href="/properties"><p style={{ cursor: "pointer" }} className='text-gray-600 hover:bg-gray-50  lg:text-xl border-gray-100 md:hover:bg-transparent block pl-3 ml-2 pr-4 py-2  md:hover:text-red-700 md:p-0'>Retail Properties</p></Link>
                </li>
                <li style={{ display: "flex" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="red" className="bi bi-house-door" viewBox="0 0 16 16">
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                  </svg>
                  <Link href="/timeshare" ><p style={{ cursor: "pointer" }} className='text-gray-600 hover:bg-gray-50 lg:text-xl  md:hover:bg-transparent block pl-3 ml-2 pr-4 py-2 border-b  border-red-500 md:hover:text-red-700 md:p-0'>Villa Properties</p></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <h1 className='font-sans text-center text-4xl my-10 text-gray-500'>All Properties</h1> */}
        <div className="mx-7 max-w-xs">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Search For Properties
          </label>
          <input className="shadow appearance-none bg-transparent rounded w-full py-2 px-3 text-gray-200 leading-tight outline-none focus-ring-dark" id="search" type="text" value={searchItem} onChange={handleInputChange} placeholder="Type to Search" />
        </div>
        <br />
        <div className="grid grid-cols-1  gap-1 md:grid-cols-2 lg:grid-cols-4">
          {filteredProperties.map(property => <div key={property.name} className="text-center"><Card name={property.name} location={property.location} area={property.area} bua={property.BUA} img={property.img} /></div>)}
        </div>
      </div>


      <div className='section6'>
        <Footer />
      </div>
    </div>
  );
}
