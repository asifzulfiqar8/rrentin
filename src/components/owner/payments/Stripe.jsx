'use client'
import Input from '@/components/shared/small/Input';
import Modal from '@/components/shared/small/Modal';
import Image from 'next/image';
import React, { useState } from 'react';
import { BiLogOut } from "react-icons/bi";

function Stripe() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='flex flex-col gap-3 items-center h-full justify-center'>
            <Image
                src="/images/payment/Stripe.png"
                width={354}
                height={107}
                alt="icon"
            />
            <div className='flex items-center gap-3 flex-col'>
                <p className='text-lg font-bold'>Available Balance</p>
                <p className='text-[34px] font-bold'>$144,000.00</p>
            </div>
            <div className='mb-3.5'>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className='px-3 py-2 bg-primary rounded-md text-white'
                >
                    <div className='flex items-center gap-1'>
                        <p className='text-sm font-medium'>Connect Account</p>
                        <BiLogOut />
                    </div>
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <Modal>
                    <div className="p-5 flex flex-col items-center">
                        <Image
                            src="/images/payment/Stripe.png"
                            width={354}
                            height={107}
                            alt="icon"
                        />
                        <Input
                            placeholder="Enter amount"
                        />
                        <div className="flex gap-3 mt-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-400 text-white rounded-md"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => alert("Amount Confirmed!")}
                                className="px-4 py-2 bg-primary text-white rounded-md"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default Stripe;
