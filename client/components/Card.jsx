import Image from "next/image"
import { useEffect } from "react"
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";

const Card = ({ redirectUrl, image, name, }) => {

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div>
      <div className="flex-wrap">

        <div className="sm:max-w-36 rounded-2xl overflow-hidden shadow-lg shadow-gray-600 card">
          <div className="p-6">
            <Image className="w-full rounded-xl" src={`${image}`} alt="Background img" width={100} height={60} layout='responsive' />
            <div className="font-bold text-xl m-2 text-gray-300">{name} <br /> <sub>Outer Ring Road</sub> </div>
      <hr />
            <ul role="list" className="divide-y divide-gray-100">

              <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 text-left flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-400">Area</p>
                    <p className="text-sm font-semibold leading-6 text-gray-400">Price psf</p>
                    <p className="text-sm font-semibold leading-6 text-gray-400">Yield</p>
                    <p className="text-sm font-semibold leading-6 text-gray-400">Return Targe</p>
                  </div>
                </div>
                <div className="shrink-0 sm:flex sm:flex-col sm:items-end ">
                  <p className="text-sm leading-6 font-extrabold text-gray-500">1,71,231 SF</p>
                  <p className="text-sm leading-6 font-extrabold text-gray-500">1,71,231 SF</p>
                  <p className="text-sm leading-6 font-extrabold text-gray-500">1,71,231 SF</p>
                  <p className="text-sm leading-6 font-extrabold text-gray-500">1,71,231 SF</p>

                </div>
              </li>
            </ul>
            {
              (isAuthenticated) ? 
              <Link href={`${redirectUrl}`} >
              <button type="button" className=" hover:transition ease-in-out w-full text-gray-200 tracking-widest font-extrabold bg-gradient-to-r from-red-500 via-red-700 to-red-900 shadow-lg shadow-gray-600/40 hover:bg-gradient-to-br active:border focus:ring-4 focus:outline-none focus:ring-transparent dark:focus:ring-red-400 rounded-xl text-sm p-4 text-center mr-2 mb-0">View Opportunity</button>
            </Link> :
              <button type="button" onClick={() => loginWithRedirect()} className="w-full text-gray-200 tracking-widest font-extrabold bg-gradient-to-r from-red-500 via-red-700 to-red-900 shadow-lg shadow-gray-600/40 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-transparent dark:focus:ring-red-400 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-0">View Opportunity</button>
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Card