import Image from 'next/image'
import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { MessageUser } from '@/assets/icon';

function BasicDetails() {
    return (
        <div
            className=" w-full flex flex-col gap-4"
        >
            <div className='p-3.5 bg-white rounded-lg w-full h-full'>
                <div className=''>
                    <Image
                        src='/images/agent/Frame.png'
                        width={1190}
                        height={225}
                        className=" object-cover w-full rounded-md"
                        alt="property image"
                    />
                </div>
                <div className='relative w-full mt-5'>
                    <div className='absolute ml-16 top-[-70px] size-[226px]'>
                        <Image
                            src='/images/agent/UserProfile.png'
                            width={226}
                            height={226}
                            className="  rounded-full"
                            alt="property image"
                        />
                    </div>
                    <div className='flex ml-[300px] flex-col '>
                        <div className='flex w-full justify-between'>
                            <div className='flex gap-2 flex-col'>
                                <h1 className='text-3xl font-semibold'>John Doe</h1>
                                <div className='flex  items-center gap-2'>

                                    <h1 className='text-base font-medium'>
                                        Certified Inspection Officer
                                    </h1>
                                    <BsPatchCheckFill className='text-primary' />
                                </div>
                                <div className='flex items-center text-xl text-primary'>
                                    <IoHomeOutline />
                                    <h1>123 Sukhumvit Rd, Bangkok, Thailand</h1>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-4">
                                <div className="size-9 flex items-center justify-center  bg-[#E9F2FF]"> <BsChatSquareDotsFill className="text-[#0245A5]" /></div>
                                <div className="size-9 flex items-center justify-center  bg-[#E9F2FF]"><FaBookmark className="text-[#0245A5]" /> </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex items-center justify-end'><p className='text-primary'>9 Am - 6 Pm</p></div>
                            <div className='flex mt-3 items-center justify-between'>
                                <button className=' py-3 px-5 bg-primary rounded-md text-white '>
                                    <div className='flex  items-end gap-2'>
                                        <p>
                                            Message
                                        </p>
                                        <MessageUser />
                                    </div>
                                </button>
                                <div className='flex gap-2'>
                                    <div className='size-8 bg-primary flex items-center rounded-md justify-center'><p className='text-white'>M</p></div>
                                    <div className='size-8 bg-primary flex items-center rounded-md justify-center'><p className='text-white'>M</p></div>
                                    <div className='size-8 bg-primary flex items-center rounded-md justify-center'><p className='text-white'>M</p></div>
                                    <div className='size-8 bg-primary flex items-center rounded-md justify-center'><p className='text-white'>M</p></div>
                                    <div className='size-8 bg-primary flex items-center rounded-md justify-center'><p className='text-white'>M</p></div>
                                    <div className='size-8 bg-primary flex items-center rounded-md justify-center'><p className='text-white'>M</p></div>
                                    <div className='size-8 bg-primary flex items-center rounded-md justify-center'><p className='text-white'>M</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-4'>
                <div className='grid col-span-8 p-6 bg-white rounded-lg'>
                    <div className='flex '>

                        <div>
                            <h1 className='text-xl font-medium'>Certification</h1>
                            <div className='w-[249px] mt-5 h-[219px] bg-gray-400'>

                            </div>
                        </div>
                        <div className='ml-[53px]'>
                            <div>
                                <h1 className='text-xl font-medium'>Experience & Services</h1>
                                <div className='mt-5 '>
                                    <h1 className='text-xl font-medium'>
                                        Experience
                                    </h1>
                                    <h1 className='text-xl font-medium'>
                                        t is a long established fact that a reader
                                        will be distracted by the readable
                                        content of a page when looking at its
                                        layout
                                    </h1>
                                </div>
                            </div>
                            <div>
                                <div className='mt-2 '>
                                    <h1 className='text-xl font-medium'>
                                        Service Charges

                                    </h1>
                                    <ul className="list-disc pl-5 text-xl font-medium">
                                        <li>Property Showing ( Base price ): ฿$200</li>
                                        <li>Inspection Fee ( Base price ): ฿$900</li>
                                    </ul>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='grid col-span-4 bg-white rounded-lg'>
                    sydgi
                </div>
            </div>
        </div>
    )
}

export default BasicDetails