import Image from "next/image"
import { useEffect } from "react"
import Link from "next/link";

function openAnsSection(val) {
  var p = document.getElementById("para" + val);
  var svg = document.getElementById("path" + val);

  if (p.classList.contains("hidden")) {
    p.classList.remove("hidden");
    p.classList.add("block");
  } else {
    p.classList.remove("block");
    p.classList.add("hidden");
  }

  if (svg.classList.contains("hidden")) {
    svg.classList.remove("hidden");
    svg.classList.add("block");
  } else {
    svg.classList.remove("block");
    svg.classList.add("hidden");
  }
}

const Card = () => {
  return (
    <div class="flex-wrap">

      <div class="w-xl sm:max-w-sm rounded overflow-hidden shadow-lg card">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Prestige Tech Platina</div>
          <Image src="https://images.unsplash.com/photo-1481253127861-534498168948?auto=format&fit=crop&q=80&w=1973&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={100} height={60} layout='responsive' />
          <ul role="list" class="divide-y divide-gray-100">

            <li class="flex justify-between gap-x-6 py-5">
              <div class="flex min-w-0 gap-x-4">
                <div class="min-w-0 flex-auto">
                  <p class="text-sm font-semibold leading-6 text-gray-900">Area</p>
                  <p class="text-sm font-semibold leading-6 text-gray-900">Price psf</p>
                  <p class="text-sm font-semibold leading-6 text-gray-900">Yield</p>
                  <p class="text-sm font-semibold leading-6 text-gray-900">Return Targe</p>
                  <p class="mt-1 truncate text-xs leading-5 text-gray-500">courtney.henry@example.com</p>
                </div>
              </div>
              <div class="shrink-0 sm:flex sm:flex-col sm:items-end">
                <p class="text-sm leading-6 text-gray-900">1,71,231 SF</p>
                <p class="text-sm leading-6 text-gray-900">1,71,231 SF</p>
                <p class="text-sm leading-6 text-gray-900">1,71,231 SF</p>
                <p class="text-sm leading-6 text-gray-900">1,71,231 SF</p>
                
              </div>
            </li>
          </ul>
          <Link href='/work' >
          <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-0">View Opportunity</button>
          </Link>
          
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Fully Funded</span>
        </div>
      </div>
    </div>
  )
}

export default Card