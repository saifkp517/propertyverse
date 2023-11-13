import Image from "next/image"

export default function Section() {
    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-32 gap-y-4 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
                    <p className="mt-4 text-gray-500">The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.</p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Origin</dt>
                            <dd className="mt-2 text-sm text-gray-500">Designed by Good Goods, Inc.</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Material</dt>
                            <dd className="mt-2 text-sm text-gray-500">Solid walnut base with rare earth magnets and powder coated steel card cover</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Dimensions</dt>
                            <dd className="mt-2 text-sm text-gray-500">6.25&quot; x 3.55&quot; x 1.15&quot;</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Finish</dt>
                            <dd className="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Includes</dt>
                            <dd className="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Considerations</dt>
                            <dd className="mt-2 text-sm text-gray-500">Made from natural materials. Grain and color vary with each item.</dd>
                        </div>
                    </dl>
                </div>
                <div className="gap-4 sm:gap-72 lg:gap-8">
                    <Image src="https://plus.unsplash.com/premium_photo-1678963247830-fc7a3ac060d5?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Walnut card tray filled with cards and card angled in dedicated groove." layout='responsive' height={100} width={120} className="rounded-lg bg-gray-100" />
                </div>
            </div>
        </div>

    )
}