import Image from "next/image"

export default function Section() {
    return (
        <div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-32 gap-y-4 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
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
                <div className="gap-4 sm:gap-72 lg:gap-8">
                    <Image src="https://plus.unsplash.com/premium_photo-1678963247830-fc7a3ac060d5?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={100} width={100} layout="responsive" className="rounded-lg bg-gray-100" />
                </div>
            </div>
        </div>

    )
}