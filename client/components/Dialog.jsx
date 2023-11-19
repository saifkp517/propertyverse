import { Dialog, Transition } from '@headlessui/react'
import { Typography } from '@material-tailwind/react';
import { init } from 'aos';
import { Fragment, useState } from 'react'
import { sendContactForm } from '../lib/api';

export default function MyModal() {
    let [isOpen, setIsOpen] = useState(false)
    let [err, setError] = useState("");

    const initValues = { phoneno: "", amt: 0 };

    const initState = { values: initValues }

    const [state, setState] = useState(initState);

    const { values } = state;

    const handleInputChange = ({ target }) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: (target.value),
        }
    }))


    function closeModal() {
        setIsOpen(false)
    }

    function checkValue(e) {

        if (e.target.value < 1000000) {
            setError("Minimum Investment Value is 10 Lakh")
        }
        else {
            setError("")
        }
    }

    async function closeSubmitModal(e) {
        e.preventDefault();
        setIsOpen(false)

        const dataArray = [e.target[0].value, e.target[1].value]
        await sendContactForm(dataArray)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div>
            <button
                type="button"
                onClick={openModal}
                className="inline-block  bg-red-500 hover:px-6 tracking-widest shadow-lg shadow-red-500/50 rounded-full px-5 py-3 text-sm font-semibold text-gray-900 mr-2 mb-2"
            >
                Interested?
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full bg-gradient-to-r popupform max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-400"
                                    >
                                        Get In Touch With Us!
                                    </Dialog.Title>
                                    <div className="mt-2">

                                        {/* <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p> */}

                                        <form className='my-8' onSubmit={closeSubmitModal} >
                                            <Typography className=' text-red-600'>{err}</Typography>
                                            <br />
                                            <input onChange={handleInputChange} value={values.phoneno} type="tel" name="phoneno" className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Phone Number" required />
                                            <br />
                                            <input onChange={checkValue} type="number" name="amt" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Investment Amount" required />  
                                            <button
                                                type="submit" 
                                                className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                            >
                                                Submit!
                                            </button>
                                        </form>
                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}