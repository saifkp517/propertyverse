import Image from "next/image"
import { useState } from "react"
import Link from "next/link";

export default function Section() {


    let properties = [
        { name: "Embassy Tech Square", location: "Outer Ring Road, Bangalore", area: "84,512", pricesqf: "13,253", yeild: "8.62", returntarget: "15.9", img: "https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/listingbanner/540x420/1638176089-embassy-tech-square-bangalore-1.jpg" },
        { name: "Lodha iThink", location: "Thane , Mumbai", area: "35,802", pricesqf: "10,000", yeild: "8.44", returntarget: "15", img: "https://propmedia1.propertyshare.in/website/property/Mm1rMWthZHN1V0x3ejlWQlN5TmJCUT09/media-v2/images/listingbanner/540x420/1631124574-lodha-ithink-mumbai-1.jpg" },
        { name: "Whitefield Tech Park", location: "Whitefield, Bangalore", area: "1,28,027", pricesqf: "4,843", yeild: "8.51", returntarget: "19.4", img: "https://propmedia1.propertyshare.in/website/property/YnlWOFlqaU1EbmRNayswTkR3SWY4dz09/media-v2/images/listingbanner/540x420/1622016030-whitefield-tech-park-bangalore-1.jpg" },
        { name: "The Pavilion III", location: "Outer Ring Road , Bangalore", area: "52,277", pricesqf: "12,338", yeild: "9.14", returntarget: "18.1", img: "https://propmedia2.propertyshare.in/website/property/YXgrbVI5NXJabk9IbFNHbkIzRmlqQT09/media-v2/images/listingbanner/540x420/1601270012-the-pavilion-iii-bangalore-1.jpg" },
        { name: "Miraya Rose", location: "Whitefield, Bangalore", area: "22,588", pricesqf: "11,059", yeild: "8.4", returntarget: "17.5", img: "https://propmedia1.propertyshare.in/website/property/QitVMVBpUjc4UnA0bElDS3dPZDN3Zz09/media-v2/images/listingbanner/540x420/1578542213-miraya-rose-whitefield-bangalore-1.jpg" },
        { name: "Mindspace Business Park", location: "HITEC City , Hyderabad", area: "96,950", pricesqf: "9,554", yeild: "9.5", returntarget: "19.3", img: "https://propmedia1.propertyshare.in/website/property/Tk0xN01tTytJWmYxYUp5NWhYa1VnUT09/media-v2/images/listingbanner/540x420/1598784607-mindspace-business-park-hyderabad-1.jpg" },
        { name: "IBC Knowledge Park", location: "Bannerghatta Road , Bangalore", area: "32,277", pricesqf: "11,350", yeild: "9", returntarget: "18.2", img: "https://propmedia1.propertyshare.in/website/property/NlNSVjFwQUdNR3pzQkF1ZGJ3Q0krdz09/media-v2/images/listingbanner/540x420/1578665086-ibc-knowledge-park-bangalore-1.jpg" },
        { name: "The Pavilion I", location: "Outer Ring Road, Bangalore", area: "29,185", pricesqf: "12,500", yeild: "9.36", returntarget: "17.8", img: "https://propmedia2.propertyshare.in/website/property/RXdLZ002SnEzOXhjWnpnZE9lNDdhZz09/media-v2/images/listingbanner/540x420/1578542236-the-pavilion-i-bangalore-1.jpg" },
        { name: "IBC Knowledge Park II", location: "Bannerghatta Road , Bangalore", area: "22,392", pricesqf: "11,350", yeild: "9", returntarget: "18.2", img: "https://propmedia2.propertyshare.in/website/property/dnpZMjJJNlVaZGsvNEI3RkZiMTRYUT09/media-v2/images/listingbanner/540x420/1578665089-ibc-knowledge-park-ii-bangalore-1.jpg" },
        { name: "The Capital", location: "Bandra Kurla Complex , Mumbai", area: "7,721", pricesqf: "34,646", yeild: "7.69", returntarget: "16.7", img: "https://propmedia1.propertyshare.in/website/property/YzVrKzZZRkkzamh1MUU1dVFnQUxWZz09/media-v2/images/listingbanner/540x420/1578665092-the-capital-mumbai-1.jpg" },
        { name: "Sky Vista", location: "Viman Nagar, Pune", area: "8,944 ", pricesqf: "13,417", yeild: "8.5", returntarget: "16.9", img: "https://propmedia1.propertyshare.in/website/property/T0o0SnBBdG5SNVlzNnJtUjNyMFRUZz09/media-v2/images/listingbanner/540x420/1578542226-sky-vista-pune-1.jpg" },
    ]

    let [count, setCount] = useState(0);

    setTimeout(() => {
        if (count === properties.length - 1) {
            setCount(0)
        }
        else { setCount(count + 1) }
    }, 5000)


    return (
        <div>
            <div className="mx-auto grid max-w-xl grid-cols-1 items-center gap-x-0 gap-y-4 px-4 py-16 sm:px-6 sm:py-32 lg:max-w-full lg:grid-cols-2 lg:px-8 ">
                <div className="top-0 left-0 gap-4 sm:gap-72 lg:gap-8 mb-14 ">
                    <div className="transition  flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-gray-200 box-shadow-lg">
                        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                            <Image
                                src={properties[count].img}
                                alt="image"
                                layout="fill"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-red-500 antialiased">
                                {properties[count].location}
                            </h6>
                            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {properties[count].name}
                            </h4>
                            <p className="mb-4 block font-sans text-base font-semibold leading-relaxed text-red-500 antialiased">Yeild - <span className="text-gray-500">{properties[count].yeild}%</span></p>
                            <p className="mb-4 block font-sans text-base font-semibold leading-relaxed text-red-500 antialiased">Return Target - <span className="text-gray-500">{properties[count].returntarget}%</span></p>
                            <Link className="inline-block" href={`/PropertyDetails/${properties[count].name.split(" ").join("_")}`}>
                                <button
                                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    Interested?
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        ></path>
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">Diversified Investment Opportunities</h2>
                    <p className="mt-4 text-gray-500">Explore a diverse range of fractional ownership opportunities in premium real estate.</p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-600">Diversified Investment Opportunities</dt>
                            <dd className="mt-2 text-sm text-gray-500">Explore a diverse range of fractional ownership opportunities in premium real estate.</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-600">Risk Mitigation and Affordability</dt>
                            <dd className="mt-2 text-sm text-gray-500">Experience the benefits of real estate investment without the burden of full ownership.</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-600">Expertly Vetted Properties</dt>
                            <dd className="mt-2 text-sm text-gray-500">Invest with confidence in meticulously vetted and high-potential properties.</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-600">User-Friendly Platform</dt>
                            <dd className="mt-2 text-sm text-gray-500">Navigate seamlessly through our intuitive platform designed for your convenience.</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-600">Responsive Customer Support</dt>
                            <dd className="mt-2 text-sm text-gray-500">Enjoy responsive customer support for a hassle-free investing experience.</dd>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-600">Expertly Vetted Properties</dt>
                            <dd className="mt-2 text-sm text-gray-500">Invest with confidence in meticulously vetted and high-potential properties.</dd>
                        </div>
                    </dl>
                </div>

            </div>
        </div>

    )
}