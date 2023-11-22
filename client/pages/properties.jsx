import Head from 'next/head';
import Hero from '../components/Hero3';
import Clients from '../components/Clients';
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import Section from '../components/Info';
import Card from '../components/Card';

export default function Home() {


  const properties = [
    { name: "Prestige Tech Platina", url: '/info/' },
    { name: "2", url: '/qed23fsdfkjad/' },
    { name: "3", url: '/293p8sjf;o2u3r/' },
    { name: "4", url: '/242liurwo87f/' },
    { name: "5", url: '/1239p87ualhjad/' }
  ]

  const [searchItem, setSearchItem] = useState('');
  // const [apiProperties, setApiProperties] = useState([]); for api implementation https://dev.to/alais29/building-a-real-time-search-filter-in-react-a-step-by-step-guide-3lmm
  const [filteredProperties, setFilteredProperties] = useState(properties);


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
        {/* <h1 className='font-sans text-center text-4xl my-10 text-gray-500'>All Properties</h1> */}
        <div className="mx-7 max-w-xs">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Search For Properties
          </label>
          <input className="shadow appearance-none bg-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:shadow-outline" id="search" type="text" value={searchItem} onChange={handleInputChange} placeholder="Type to Search" />
          

        </div>
        <br />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {filteredProperties.map(property => <div key={property.name} className="p-4 text-center md:p-1"><Card name={property.name} redirectUrl={property.url} /></div>)}
        </div>
      </div>


      <div className='section6'>
        <Footer />
      </div>
    </div>
  );
}

