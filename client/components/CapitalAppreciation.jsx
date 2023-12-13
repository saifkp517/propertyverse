import { useState } from "react";
import { Typography } from "@material-tailwind/react";
import MyChart from "./MyChart";

export default function CapitalAppreciation({yr}) {

    const [value, setValue] = useState(1000000);
    const onUpdate = (e) => {
        setValue(Number(e.target.value));
    }

    const capitalappreciation = 10;

    return (
        <div className="lg:w-3/4 text-center  p-4 rounded overflow-hidden shadow-lg shadow-gray-600 card">
            <div className="lg:px-6 py-4 sm:p-0">
                <div className="font-bold text-xl mb-2">Capital Appreciation</div>
                <br />
                <div className="my-12">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className='lg:px-12 md:px-4 sm:px-0'>
                            <h1 className='lg:text-2xl sm:text-lg'>Property Pricing</h1>
                            <MyChart />
                        </div>
                        <div>
                            <br />
                            <input className="accent-red-500 w-10/12" type="range" value={value} onChange={onUpdate} min={1000000.00} max={10000000.00} />
                            <p className='text-center'>&nbsp;₹ {Math.round(value / 100000)} Lakhs</p>

                            <div className="grid grid-cols-2">
                                <h1 className=" w-9/12 text-left ">10Lakhs</h1>
                                <h1 className=" w-9/12 text-right ">1 CR</h1>
                            </div>
                            <div className="grid grid-cols-3 gap-4 w-full my-10">
                                <div className="col-span-3 text-start mx-6 my-2">
                                    <h1><b>Assured Return Rate (P.A): </b><span className=' text-red-400'> {capitalappreciation} %</span></h1>
                                    <h1><b>Time Period (P.A): </b><span className=' text-red-400'> {yr.length * 12} Months</span></h1>
                                    <h1>
                                        <Typography variant='h4' className=' text-gray-200'>₹  {(value / 100000).toFixed(2)} Lakhs</Typography>
                                        <h1><b>Investment Amount</b></h1>
                                    </h1>
                                    <h1>
                                        <Typography variant='h4' className='text-gray-200'>₹ {(value / 100000 * (capitalappreciation / 100)).toFixed(2)} Lakhs</Typography>
                                        <h1><b>Est. Returns</b></h1>
                                    </h1>
                                    <h1>
                                        <Typography variant='h4' className='text-gray-200'>₹ {((value / 100000 + value / 100000 * (capitalappreciation / 100)) * (yr.length)).toFixed(2)} Lakhs</Typography>
                                        <h1><b>Total Value </b></h1>
                                    </h1>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}