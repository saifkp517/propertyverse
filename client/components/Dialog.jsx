import { Dialog, Transition } from '@headlessui/react'
import { Typography } from '@material-tailwind/react';
import { init } from 'aos';
import { Fragment, useState } from 'react'
import { sendContactForm } from '../lib/api';

export default function MyModal({name}) {
    let [isOpen, setIsOpen] = useState(false)
    let [isOpen2, setIsOpen2] = useState(false);
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

    function closeModal2() {
        setIsOpen2(false)
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
        setIsOpen2(true)

        const dataArray = [e.target[0].value, e.target[1].value, name]
        await sendContactForm(dataArray)
    }

    function openModal() {
        setIsOpen(true)
    }

    function openModal2() {
        setIsOpen2(true)
    }

    return (
        <div>
            <button
                type="button"
                onClick={openModal}
                className="w-full text-gray-200 tracking-widest font-extrabold bg-gradient-to-r from-red-500 via-red-700 to-red-900 shadow-lg shadow-gray-600/40 hover:bg-gradient-to-bl  focus:ring-4 focus:outline-none focus:ring-transparent dark:focus:ring-red-400 rounded-lg text-xl px-5 py-4 text-center mr-2 mt-8 mb-0"
            >
                Interested?
            </button>

            <Transition appear show={isOpen2} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal2}>
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
                                        Your Details have been Successfully submitted!
                                    </Dialog.Title>
                                    <div className="mt-2 ">

                                        <p className="text-sm text-gray-500">
                                            Your details have been successfully submitted!. Please wait for a while until we get back to you.
                                        </p>

                                    </div>
                                    <div className="mt-2">
                                        <button
                                            className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200  focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                            onClick={closeModal2}
                                        >
                                            Got it. Thanks!
                                        </button>
                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>


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
                                    <div className="mt-2 ">
                                        <form className='p-4' onSubmit={closeSubmitModal} >
                                            <Typography className=' text-red-600'>{err}</Typography>
                                            <br />
                                            <input onChange={handleInputChange} value={values.phoneno} type="tel" name="phoneno" className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Phone Number" required />
                                            <br />
                                            <input onChange={checkValue} type="number" name="amt" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Investment Amount" required />
                                            <button
                                                type="submit"
                                                className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                            >
                                                SUBMIT
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