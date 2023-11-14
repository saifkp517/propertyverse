import Image from "next/image"
import { useEffect } from "react"
import Link from "next/link";


const Card = ({redirectUrl, image, name, }) => {
  return (
    <div className="flex-wrap">

      <div className="sm:max-w-36 rounded overflow-hidden shadow-lg shadow-gray-600 card">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-500">Prestige Tech Platina</div>
          <Image src="https://images.unsplash.com/photo-1481253127861-534498168948?auto=format&fit=crop&q=80&w=1973&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background img" width={100} height={60} layout='responsive' />
          <ul role="list" className="divide-y divide-gray-100">

            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-500">Area</p>
                  <p className="text-sm font-semibold leading-6 text-gray-500">Price psf</p>
                  <p className="text-sm font-semibold leading-6 text-gray-500">Yield</p>
                  <p className="text-sm font-semibold leading-6 text-gray-500">Return Targe</p>
                </div>
              </div>
              <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-500">1,71,231 SF</p>
                <p className="text-sm leading-6 text-gray-500">1,71,231 SF</p>
                <p className="text-sm leading-6 text-gray-500">1,71,231 SF</p>
                <p className="text-sm leading-6 text-gray-500">1,71,231 SF</p>
                
              </div>
            </li>
          </ul>
          <Link href={`${redirectUrl}`} >
          <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-0">View Opportunity</button>
          </Link>
          
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Fully Funded</span>
        </div>
      </div>
    </div>
  )
}

export default Card