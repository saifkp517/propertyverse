import Head from 'next/head';
import Hero from '../components/Hero3';
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Link from 'next/link';
import Card from '../components/Card';
// import { getDataFromWebsite } from '../lib/api';

export default function Home() {
  // const [apiProperties, setApiProperties] = useState([]); // for api implementation https://dev.to/alais29/building-a-real-time-search-filter-in-react-a-step-by-step-guide-3lmm

  const properties = [
    {
      name: 'Embassy Tech Square',
      location: 'Outer Ring Road, Bangalore',
      area: '84,512',
      pricesqf: '13,253',
      yeild: '8.62',
      returntarget: '15.9',
      img: 'https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/listingbanner/540x420/1638176089-embassy-tech-square-bangalore-1.jpg',
    },
    {
      name: 'Lodha iThink',
      location: 'Thane , Mumbai',
      area: '35,802',
      pricesqf: '10,000',
      yeild: '8.44',
      returntarget: '15',
      img: 'https://propmedia1.propertyshare.in/website/property/Mm1rMWthZHN1V0x3ejlWQlN5TmJCUT09/media-v2/images/listingbanner/540x420/1631124574-lodha-ithink-mumbai-1.jpg',
    },
    {
      name: 'Whitefield Tech Park',
      location: 'Whitefield, Bangalore',
      area: '1,28,027',
      pricesqf: '4,843',
      yeild: '8.51',
      returntarget: '19.4',
      img: 'https://propmedia1.propertyshare.in/website/property/YnlWOFlqaU1EbmRNayswTkR3SWY4dz09/media-v2/images/listingbanner/540x420/1622016030-whitefield-tech-park-bangalore-1.jpg',
    },
    {
      name: 'The Pavilion III',
      location: 'Outer Ring Road , Bangalore',
      area: '52,277',
      pricesqf: '12,338',
      yeild: '9.14',
      returntarget: '18.1',
      img: 'https://propmedia2.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/listingbanner/540x420/1601270012-the-pavilion-iii-bangalore-1.jpg',
    },
    {
      name: 'Miraya Rose',
      location: 'Whitefield, Bangalore',
      area: '22,588',
      pricesqf: '11,059',
      yeild: '8.4',
      returntarget: '17.5',
      img: 'https://propmedia1.propertyshare.in/website/property/QitVMVBpUjc4UnA0bElDS3dPZDN3Zz09/media-v2/images/listingbanner/540x420/1578542213-miraya-rose-whitefield-bangalore-1.jpg',
    },
    {
      name: 'Mindspace Business Park',
      location: 'HITEC City , Hyderabad',
      area: '96,950',
      pricesqf: '9,554',
      yeild: '9.5',
      returntarget: '19.3',
      img: 'https://propmedia1.propertyshare.in/website/property/Tk0xN01tTytJWmYxYUp5NWhYa1VnUT09/media-v2/images/listingbanner/540x420/1598784607-mindspace-business-park-hyderabad-1.jpg',
    },
    {
      name: 'IBC Knowledge Park',
      location: 'Bannerghatta Road , Bangalore',
      area: '32,277',
      pricesqf: '11,350',
      yeild: '9',
      returntarget: '18.2',
      img: 'https://propmedia1.propertyshare.in/website/property/NlNSVjFwQUdNR3pzQkF1ZGJ3Q0krdz09/media-v2/images/listingbanner/540x420/1578665086-ibc-knowledge-park-bangalore-1.jpg',
    },
    {
      name: 'The Pavilion I',
      location: 'Outer Ring Road, Bangalore',
      area: '29,185',
      pricesqf: '12,500',
      yeild: '9.36',
      returntarget: '17.8',
      img: 'https://propmedia2.propertyshare.in/website/property/RXdLZ002SnEzOXhjWnpnZE9lNDdhZz09/media-v2/images/listingbanner/540x420/1578542236-the-pavilion-i-bangalore-1.jpg',
    },
    {
      name: 'IBC Knowledge Park II',
      location: 'Bannerghatta Road , Bangalore',
      area: '22,392',
      pricesqf: '11,350',
      yeild: '9',
      returntarget: '18.2',
      img: 'https://propmedia2.propertyshare.in/website/property/dnpZMjJJNlVaZGsvNEI3RkZiMTRYUT09/media-v2/images/listingbanner/540x420/1578665089-ibc-knowledge-park-ii-bangalore-1.jpg',
    },
    {
      name: 'The Capital',
      location: 'Bandra Kurla Complex , Mumbai',
      area: '7,721',
      pricesqf: '34,646',
      yeild: '7.69',
      returntarget: '16.7',
      img: 'https://propmedia1.propertyshare.in/website/property/YzVrKzZZRkkzamh1MUU1dVFnQUxWZz09/media-v2/images/listingbanner/540x420/1578665092-the-capital-mumbai-1.jpg',
    },
    {
      name: 'Sky Vista',
      location: 'Viman Nagar, Pune',
      area: '8,944 ',
      pricesqf: '13,417',
      yeild: '8.5',
      returntarget: '16.9',
      img: 'https://propmedia1.propertyshare.in/website/property/T0o0SnBBdG5SNVlzNnJtUjNyMFRUZz09/media-v2/images/listingbanner/540x420/1578542226-sky-vista-pune-1.jpg',
    },
    {
      name: 'Brigade Tech Park',
      location: 'Whitefield, Bengaluru',
      area: '17,468',
      pricesqf: '8,675',
      yeild: '9',
      returntarget: '16.13',
      img: 'https://propmedia2.propertyshare.in/website/property/WVhlb0g4T3BvRS81UzlKQzFlSkNKZz09/media-v2/images/listingbanner/540x420/1578542194-brigade-tech-park-bangalore-1.jpg',
    },
  ];

  const [searchItem, setSearchItem] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    //   getDataFromWebsite().then(res => res.json())
    //     .then(data => {
    //       setApiProperties(data)
    //       setFilteredProperties(data)
    //     })
  }, []);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = properties.filter((property) =>
      property.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProperties(filteredItems);
  };

  return (
    <div>
      <Head>
        <title>PropertyVerse</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero message='Welcome to a redefinition of property management. Discover seamless solutions for property owners and tenants alike' />

      <div className='p-6'>
        <nav className='border-gray-200 mb-10'>
          <div className='container mx-auto flex flex-wrap items-center justify-between'>
            <a href='#' className='flex'></a>
            <div className='flex md:order-2'>
              <div className='relative mr-3 md:mr-0  md:block'></div>
            </div>
            <div
              className='md:flex justify-between items-center w-full md:w-auto md:order-1'
              id='mobile-menu-3'
            >
              <ul className='flex-row flex justify-between md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium'>
                <li style={{ display: 'flex' }}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    fill='red'
                    className='bi bi-buildings'
                    viewBox='0 0 16 16'
                  >
                    <path d='M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z' />
                    <path d='M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z' />
                  </svg>
                  <Link href='/properties'>
                    <p
                      style={{ cursor: 'pointer' }}
                      className='text-gray-600 hover:bg-gray-50 lg:text-xl  md:hover:bg-transparent block pl-3 ml-2 pr-4 py-2 border-b border-red-500 md:hover:text-red-700 md:p-0'
                    >
                      Retail Properties
                    </p>
                  </Link>
                </li>
                <li style={{ display: 'flex' }}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    fill='currentColor'
                    className='bi bi-house-door'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z' />
                  </svg>
                  <Link href='/timeshare'>
                    <p
                      style={{ cursor: 'pointer' }}
                      className='text-gray-600 hover:bg-gray-50 border-b lg:text-xl border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 ml-2 pr-4 py-2 md:hover:text-red-700 md:p-0'
                    >
                      Villa Properties
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <h1 className='font-sans text-center text-4xl my-10 text-gray-500'>All Properties</h1> */}
        <div className='w-full'>
          <label className='block text-gray-400 text-sm font-bold mb-2'>
            Search For Properties
          </label>
          <input
            className='shadow appearance-none bg-transparent rounded w-full py-2 px-3 text-gray-200 leading-tight outline-none focus-ring-dark'
            id='search'
            type='text'
            value={searchItem}
            onChange={handleInputChange}
            placeholder='Type to Search'
          />
        </div>
        <br />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {filteredProperties.map((property) => (
            <div key={property.name} className='text-center'>
              <Card
                name={property.name}
                location={property.location}
                area={property.area}
                pricesqf={property.pricesqf}
                yeild={property.yeild}
                returntarget={property.returntarget}
                img={property.img}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='section6'>
        <Footer />
      </div>
    </div>
  );
}
