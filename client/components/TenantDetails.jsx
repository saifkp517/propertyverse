import { Typography } from "@material-tailwind/react"

export default function TenantDetails({details}) {
    return (
        <div className="lg:w-3/4  p-4 rounded overflow-hidden shadow-lg shadow-gray-600 card">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Tenant Details</div>
                <br />
            </div>
            <div className="row sm:grid grid-cols-4 gap-4">

                <div className="flex col-span-2 flex-col">
                    <Typography variant='h4' className='my-2 text-xl text-red-400'>Name</Typography>
                    <h1><b className="text-gray-400 text-2xl " >{details.name}</b></h1>
                </div>
                <div className="flex col-span-2 flex-col">
                    <Typography variant='h4' className='my-2 text-xl text-red-400'>Country</Typography>
                    <h1><b className="text-gray-400 text-2xl" >{details.country}</b></h1>
                </div>
                <div className="col-span-4 ">
                    <Typography variant='h4' className='my-2 text-xl text-red-400'>Description</Typography>
                    <p className="text-gray-400">{details.description}</p>
                </div>
                <Typography variant='h4' className="col-span-4 text-xl text-red-400 ">Time Period</Typography>
                <div className="flex lg:col-span-1 sm:col-span-2">
                    <div className="m-4 border rounded-full  border-gray-600  p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                        </svg>
                    </div>
                    <div className='mt-4'>
                        <h6>Lease Start Date</h6>
                        <h4><b className="text-gray-400">{details.start}</b></h4>
                    </div>
                </div>
                <div className="flex lg:col-span-1 sm:col-span-2">
                    <div className="m-4 border rounded-full  border-gray-600  p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16">
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                        </svg>
                    </div>
                    <div className='mt-4'>
                        <h6>Lock-in Period</h6>
                        <h4><b className="text-gray-400" >{details.lockinperiod} YEARS</b></h4>
                    </div>
                </div>
                <div className="flex lg:col-span-1 sm:col-span-2">
                    <div className="m-4 border border-gray-600 rounded-full  p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                        </svg>
                    </div>
                    <div className='mt-4'>
                        <h6>Lease End Date</h6>
                        <h4><b className="text-gray-400" >{details.enddate}</b></h4>
                    </div>
                </div>
                <Typography variant='h4' className="col-span-4 text-xl text-red-400">Tenant Highlights</Typography>
                <div className="">
                    <h4><b className="text-gray-400" >{details.totalarea} SF</b></h4>
                    <h6>TOTAL AREA</h6>

                </div>
                <div className="">
                    <h4><b className="text-gray-400" >{details.rentpersf}</b></h4>
                    <h6>RENT PER SF</h6>

                </div>
                <div className="  ">
                    <h4><b className="text-gray-400" >{details.leaseperiod} YEARS</b></h4>
                    <h6>LEASE PERIOD</h6>

                </div>
                <div className="  ">
                    <h4><b className="text-gray-400" >{details.escalation} %</b></h4>
                    <h6>ESCALATION</h6>

                </div>
            </div>
        </div>
    )
}