import Image from "next/image"
import { useEffect } from "react"
import Link from "next/link";


const Card = ({ redirectUrl, image, name, }) => {
  return (
    <div>
      <div className="flex-wrap">

        <div className="sm:max-w-36 rounded overflow-hidden shadow-lg shadow-gray-600 card">
          <div className="p-6">
            <Image className="w-full" src="https://images.unsplash.com/photo-1481253127861-534498168948?auto=format&fit=crop&q=80&w=1973&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background img" width={100} height={60} layout='responsive' />
            <div className="font-bold text-xl mt-2 text-gray-300">{name}</div>

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
            <Link href={`${redirectUrl}`} >
              <button type="button" className="text-gray-900 tracking-widest font-extrabold bg-gradient-to-r from-red-500 via-red-700 to-red-900 shadow-lg shadow-gray-600/40 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-transparent dark:focus:ring-red-400 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-0">View Opportunity</button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Card