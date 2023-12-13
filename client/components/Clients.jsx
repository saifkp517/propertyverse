import Link from "next/link"
import Image from "next/image"

export default function Clients() {
    return (
        <section className="bg-gradient-to-r from-red-500 via-red-700 to-red-900 py-20">
            <div data-aos="fade-up">
                <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">Clients who place their trust in us.</h2>
                    <div className="grid grid-cols-2  gap-8 text-gray-100 sm:gap-12 md:grid-cols-3 lg:grid-cols-3 dark:text-gray-400">
                        {/* <Image className="flex justify-center items-center" height={100} width={250} src="https://assetmonk.com/wp-content/uploads/Assetmonk-White-Logo.png" /> */}
                        <Image className="flex justify-center items-center" height={100} width={250} src="https://aurumwisex.com/images/WiseX/WiseX-Log.png" />
                        <Image className="flex justify-center items-center" height={100} width={250} src="https://media1.propertyshare.in/images/logos/property-share-white-logo.svg" />
                        <div className="logo" style={{height: "100px", width: "250px", background: "url(https://media.licdn.com/dms/image/C4E0BAQE6aHtSWnhajw/company-logo_200_200/0/1630498985220/hbits_official_logo?e=2147483647&v=beta&t=mXc7TRGf5H1ihrKMxbfPwFDcPGrFSXvHjDzJlBaKoNQ)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} />
                    </div>
                </div>
            </div>
        </section >
    )
}