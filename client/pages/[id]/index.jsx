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
      url: "Lodha_iThink", ry: "8.75", ret: "15.9", psf: "13,253", loc: "ORR", invamt: "1,23,30,00,000", mr: "70,48,111", pmf: "10,27,500", tds: "7,83,123",
      fm: {
        yr: ["10,35,32,808", "8,87,36,808", "9,31,73,648", "10,20,47,329"],
        iod: "27,71,994",
        developerfees: "30,61,420",
        sv: "1,69,30,69,151"
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
