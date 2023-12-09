import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Footer from '../../components/Footer'
import Details from '../../components/Details';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Work() {

  const router = useRouter()
  const { id } = router.query;

  const data = [
    {
      url: "Embassy_Tech_Square", ry: "8.62", ret: "15.9", psf: "13,253", loc: "ORR", invamt: "1,23,30,00,000", mr: "70,48,111", pmf: "10,27,500", tds: "7,83,123",
      fm: {
        yr: ["10,35,32,808", "8,87,36,808", "9,31,73,648", "10,20,47,329"],
        iod: "27,71,994",
        developerfees: "30,61,420",
        sv: "1,69,30,69,151"
      },
      images: [
        'https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/665x400/1638176092-embassy-tech-square-bangalore-1.jpg',
        'https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/665x400/1638176095-embassy-tech-square-bangalore-2.jpg',
        'https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/665x400/1638176098-embassy-tech-square-bangalore-3.jpg',
        'https://propmedia2.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176102-embassy-tech-square-bangalore-4.jpg',
        'https://propmedia2.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176105-embassy-tech-square-bangalore-5.jpg',
        'https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176111-embassy-tech-square-bangalore-7.jpg',
        'https://propmedia2.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176114-embassy-tech-square-bangalore-8.jpg',
        'https://propmedia2.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176117-embassy-tech-square-bangalore-9.jpg',
        'https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176120-embassy-tech-square-bangalore-10.jpg',
        'https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176123-embassy-tech-square-bangalore-11.jpg',
        'https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/main/1330x800/1638176129-embassy-tech-square-bangalore-13.jpg'
      ],
      td: {
        name: "LG Soft India",
        country: "South Korea",
        desc: "Leading automotive finance provider for commercial and personal vehicles",
        strt: "01 Nov 2021",
        lockperiod: "3",
        end: "31 Oct 2026",
        highlights: {
          totalarea: "84,512",
          rentpersf: "88",
          leaseperiod: "5",
          escalation: "15"
        },
        propertypricing: {
          purchaseprice: "1,12,00,00,000",
          stampduty: "7,39,20,000",
          brokerage: "3,36,00,000",
          legalfee: "20,00,000",
          reserves: "34,80,000"
        }
      },
      location: ""
    },
    {
      url: "Lodha_iThink", ry: "8.44", ret: "15.0", psf: "10,000", loc: "MUMBAI", invamt: "39,60,00,000", mr: "22,10,818", pmf: "3,30,000", tds: "2,45,647",
      fm: {
        yr: ["3,26,58,883", "2,86,98,883", "2,86,98,883", "3,33,71,044", "3,33,71,044"],
        iod: "7,78,694",
        developerfees: "",
        sv: "56,85,93,701"
      },
      images: [
        'https://propmedia1.propertyshare.in/website/property/Mm1rMWthZHN1V0x3ejlWQlN5TmJCUT09/media-v2/images/main/665x400/1631124577-lodha-ithink-mumbai-1.jpg',
        'https://propmedia2.propertyshare.in/website/property/Mm1rMWthZHN1V0x3ejlWQlN5TmJCUT09/media-v2/images/main/665x400/1631124580-lodha-ithink-mumbai-2.jpg',
        'https://propmedia2.propertyshare.in/website/property/Mm1rMWthZHN1V0x3ejlWQlN5TmJCUT09/media-v2/images/main/665x400/1631124583-lodha-ithink-mumbai-3.jpg',
        'https://propmedia1.propertyshare.in/website/property/Mm1rMWthZHN1V0x3ejlWQlN5TmJCUT09/media-v2/images/main/665x400/1631124586-lodha-ithink-mumbai-4.jpg',
        'https://propmedia2.propertyshare.in/website/property/Mm1rMWthZHN1V0x3ejlWQlN5TmJCUT09/media-v2/images/main/665x400/1631124589-lodha-ithink-mumbai-5.jpg',
        'https://propmedia2.propertyshare.in/website/property/Mm1rMWthZHN1V0x3ejlWQlN5TmJCUT09/media-v2/images/main/665x400/1631124592-lodha-ithink-mumbai-6.jpg',
        'https://propmedia1.propertyshare.in/website/property/Mm1rMWthZHN1V0x3ejlWQlN5TmJCUT09/media-v2/images/main/665x400/1631124595-lodha-ithink-mumbai-7.jpg',
        'https://propmedia1.propertyshare.in/website/property/Mm1rMWthZHN1V0x3ejlWQlN5TmJCUT09/media-v2/images/main/665x400/1631124595-lodha-ithink-mumbai-7.jpg',
        'https://propmedia1.propertyshare.in/website/property/Mm1rMWthZHN1V0x3ejlWQlN5TmJCUT09/media-v2/images/main/665x400/1631124598-lodha-ithink-mumbai-8.jpg',
        'https://propmedia1.propertyshare.in/website/property/Mm1rMWthZHN1V0x3ejlWQlN5TmJCUT09/media-v2/images/main/665x400/1631124601-lodha-ithink-mumbai-9.jpg',
        'https://propmedia1.propertyshare.in/website/property/Mm1rMWthZHN1V0x3ejlWQlN5TmJCUT09/media-v2/images/main/665x400/1631124604-lodha-ithink-mumbai-10.jpg',
        'https://propmedia1.propertyshare.in/website/property/Mm1rMWthZHN1V0x3ejlWQlN5TmJCUT09/media-v2/images/main/665x400/1631124607-lodha-ithink-mumbai-11.jpg',

      ], td: { name: "Tata Motors Finance",
        country: "India",
        desc: "Leading automotive finance provider for commercial and personal vehicles",
        strt: "01 Nov 2021",
        lockperiod: "3",
        end: "31 Oct 2026",
        highlights: {
          totalarea: "35,802",
          rentpersf: "67",
          leaseperiod: "5",
          escalation: "15"
        },
        propertypricing: {
          purchaseprice: "35,80,20,000",
          stampduty: "2,14,81,200",
          brokerage: "1,07,40,600",
          legalfee: "15,00,000",
          reserves: "42,58,200"
        }
      },
      location: ""
    },
    {
      url: "Whitefield_Tech_Park", ry: "8.51", ret: "19.4", psf: "4,843", loc: "WHITEFIELD", invamt: "68,60,00,000", mr: "38,62,500", pmf: "5,71,667", tds: "4,29,167",
      fm: {
        yr: ["5,72,60,000", "5,22,90,000", "5,79,60,000", "5,79,60,000", "6,01,33,500"],
        iod: "11,00,000",
        developerfees: "",
        sv: "1,20,89,66,395"
      },
      images: [
        'https://propmedia2.propertyshare.in/website/property/YnlWOFlqaU1EbmRNayswTkR3SWY4dz09/media-v2/images/main/665x400/1622016033-whitefield-tech-park-bangalore-1.jpg',
        'https://propmedia2.propertyshare.in/website/property/YnlWOFlqaU1EbmRNayswTkR3SWY4dz09/media-v2/images/main/665x400/1622016036-whitefield-tech-park-bangalore-2.jpg',
        'https://propmedia2.propertyshare.in/website/property/YnlWOFlqaU1EbmRNayswTkR3SWY4dz09/media-v2/images/main/1330x800/1622016040-whitefield-tech-park-bangalore-3.jpg',
        'https://propmedia2.propertyshare.in/website/property/YnlWOFlqaU1EbmRNayswTkR3SWY4dz09/media-v2/images/main/1330x800/1622016043-whitefield-tech-park-bangalore-4.jpg',
        'https://propmedia2.propertyshare.in/website/property/YnlWOFlqaU1EbmRNayswTkR3SWY4dz09/media-v2/images/main/1330x800/1622016046-whitefield-tech-park-bangalore-5.jpg',
        'https://propmedia1.propertyshare.in/website/property/YnlWOFlqaU1EbmRNayswTkR3SWY4dz09/media-v2/images/main/1330x800/1622016049-whitefield-tech-park-bangalore-6.jpg',
        'https://propmedia2.propertyshare.in/website/property/YnlWOFlqaU1EbmRNayswTkR3SWY4dz09/media-v2/images/main/1330x800/1622016052-whitefield-tech-park-bangalore-7.jpg',
        'https://propmedia1.propertyshare.in/website/property/YnlWOFlqaU1EbmRNayswTkR3SWY4dz09/media-v2/images/main/1330x800/1622016055-whitefield-tech-park-bangalore-8.jpg',
        'https://propmedia2.propertyshare.in/website/property/YnlWOFlqaU1EbmRNayswTkR3SWY4dz09/media-v2/images/main/1330x800/1622016058-whitefield-tech-park-bangalore-9.jpg',
        'https://propmedia2.propertyshare.in/website/property/YnlWOFlqaU1EbmRNayswTkR3SWY4dz09/media-v2/images/main/1330x800/1622016061-whitefield-tech-park-bangalore-10.jpg'
      ],
      td: {
        name: "ISDC",
        country: "UK",
        desc: "UK-based skill development and training provider",
        strt: "01 Aug 2020",
        lockperiod: "4",
        end: "31 Jul 2030",
        highlights: {
          totalarea: "1,28,027",
          rentpersf: "33",
          leaseperiod: "10",
          escalation: "15"
        },
        propertypricing: {
          purchaseprice: "62,00,00,000",
          stampduty: "4,09,20,000",
          brokerage: "1,86,00,000",
          legalfee: "15,00,000",
          reserves: "49,80,000"
        }
      },
      location: ""
    },
    {
      url: "The_Pavilion_III", ry: "9.14", ret: "18", psf: "12,338", loc: "ORR", invamt: "69,90,00,000", mr: "42,67,814", pmf: "5,82,500", tds: "4,74,202",
      fm: {
        yr: ["6,16,59,908",  "5,66,58,703", "5,91,52,456", "6,17,58,607", "6,44,81,911"],
        iod: "22,34,284",
        developerfees: "",
        sv: "1,12,57,46,490"
      },
      images: [
        'https://propmedia2.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270016-the-pavilion-iii-bangalore-1.jpg',
        'https://propmedia2.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270019-the-pavilion-iii-bangalore-2.jpg',
        'https://propmedia2.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270022-the-pavilion-iii-bangalore-3.jpg',
        'https://propmedia2.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270025-the-pavilion-iii-bangalore-4.jpg',
        'https://propmedia2.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270028-the-pavilion-iii-bangalore-5.jpg',
        'https://propmedia1.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270031-the-pavilion-iii-bangalore-6.jpg',
        'https://propmedia2.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270034-the-pavilion-iii-bangalore-7.jpg',
        'https://propmedia2.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270037-the-pavilion-iii-bangalore-8.jpg',
        'https://propmedia2.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270040-the-pavilion-iii-bangalore-9.jpg',
        'https://propmedia1.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270043-the-pavilion-iii-bangalore-10.jpg',
        'https://propmedia1.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270046-the-pavilion-iii-bangalore-11.jpg',
        'https://propmedia1.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270049-the-pavilion-iii-bangalore-12.jpg',
        'https://propmedia1.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270052-the-pavilion-iii-bangalore-13.jpg',
        'https://propmedia1.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270058-the-pavilion-iii-bangalore-15.jpg'
      ],
      td: {
        name: "Aurbis Business Park",
        country: "Singapore",
        desc: "Singapore-based Aurbis is a managed offices provider backed by Avila Capital which was founded by the Chairman of Assetz Property Group Singapore",
        strt: "01 Oct 2019",
        lockperiod: "5",
        end: "30 Sep 2029",
        highlights: {
          totalarea: "52,277",
          rentpersf: "89",
          leaseperiod: "10",
          escalation: "4.5"
        },
        propertypricing: {
          purchaseprice: "64,25,00,000",
          stampduty: "3,97,24,025",
          brokerage: "1,28,50,000",
          legalfee: "10,00,000",
          reserves: "29,25,975"
        }
      },
      location: ""
    },
    {
      url: "The_Pavilion_III", ry: "9.14", ret: "18", psf: "12,338", loc: "ORR", invamt: "69,90,00,000", mr: "42,67,814", pmf: "5,82,500", tds: "4,74,202",
      fm: {
        yr: ["6,16,59,908",  "5,66,58,703", "5,91,52,456", "6,17,58,607", "6,44,81,911"],
        iod: "22,34,284",
        developerfees: "",
        sv: "1,12,57,46,490"
      },
      images: [
        'https://propmedia2.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270016-the-pavilion-iii-bangalore-1.jpg',
        'https://propmedia2.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270019-the-pavilion-iii-bangalore-2.jpg',
        'https://propmedia2.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270022-the-pavilion-iii-bangalore-3.jpg',
        'https://propmedia2.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270025-the-pavilion-iii-bangalore-4.jpg',
        'https://propmedia2.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270028-the-pavilion-iii-bangalore-5.jpg',
        'https://propmedia1.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270031-the-pavilion-iii-bangalore-6.jpg',
        'https://propmedia2.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270034-the-pavilion-iii-bangalore-7.jpg',
        'https://propmedia2.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270037-the-pavilion-iii-bangalore-8.jpg',
        'https://propmedia2.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270040-the-pavilion-iii-bangalore-9.jpg',
        'https://propmedia1.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270043-the-pavilion-iii-bangalore-10.jpg',
        'https://propmedia1.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270046-the-pavilion-iii-bangalore-11.jpg',
        'https://propmedia1.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270049-the-pavilion-iii-bangalore-12.jpg',
        'https://propmedia1.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270052-the-pavilion-iii-bangalore-13.jpg',
        'https://propmedia1.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/main/1330x800/1601270058-the-pavilion-iii-bangalore-15.jpg'
      ],
      td: {
        name: "Aurbis Business Park",
        country: "Singapore",
        desc: "Singapore-based Aurbis is a managed offices provider backed by Avila Capital which was founded by the Chairman of Assetz Property Group Singapore",
        strt: "01 Oct 2019",
        lockperiod: "5",
        end: "30 Sep 2029",
        highlights: {
          totalarea: "52,277",
          rentpersf: "89",
          leaseperiod: "10",
          escalation: "4.5"
        },
        propertypricing: {
          purchaseprice: "64,25,00,000",
          stampduty: "3,97,24,025",
          brokerage: "1,28,50,000",
          legalfee: "10,00,000",
          reserves: "29,25,975"
        }
      },
      location: ""
    },

  ]

  return (
    <div>
      <Head>
        <title>{id}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Details data={data.find(details => details.url === id)} />
      <Footer />
    </div>
  )
}
