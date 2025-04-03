"use client"
import React from 'react';
import MyTenantsHeader from './MyTenantsHeader';
import Image from 'next/image';
import { IoHomeOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import Agents from '@/assets/Tenants/Agents';
import LeaseList from './LeaseList';
import { GoArrowUpRight } from "react-icons/go";
import { tenants } from '@/data/data';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

function MyTenants() {
    const router = useRouter();

    return (
        <section
            className="bg-white rounded-lg p-4 mt-4"
            style={{ boxShadow: "0px 2px 12px 0px #3582E71A" }}
        >
            <MyTenantsHeader />
            <div className="grid grid-cols-1 mg:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-h-[800px] overflow-y-scroll scroll-0">
                {tenants.map((tenant, index) => (
                    <div
                        key={`${tenant.id}-${index}`}
                        className='min-w-[360px]  bg-white border border-[#D5E0F6] min-h-[330px] w-full h-full rounded-md px-[9px] py-[5px]'
                    >
                        <div className="relative overflow-visible">
                            <Image
                                src={tenant.bgImage}
                                width={340}
                                height={110}
                                alt="Property Background"
                                className="mx-auto w-full h-auto rounded-t-lg"
                            />
                            <div className="absolute -bottom-10 left-6 top-3.5 3 size-[103px] z-10">
                                <Image
                                    src={tenant.profileImage}
                                    width={103}
                                    height={103}
                                    alt="Profile Image"
                                    className="rounded-full h-full w-full border-4 border-white shadow-md"
                                />
                            </div>
                        </div>

                        <div className='flex flex-col px-3.5 mt-8'>
                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='text-base font-semibold'>{tenant.name}</h1>
                                    <div className='text-[#0245A5] flex items-center gap-1'>
                                        <IoHomeOutline />
                                        <span className="text-xs">
                                            {tenant.address}
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <BiPhoneCall />
                                        <span className="text-xs">
                                            {tenant.phone}
                                        </span>
                                    </div>
                                    <div className='text-[#0245A5] flex items-center gap-1'>
                                        <Agents />
                                        <span className="text-xs">
                                            {tenant.agentName}
                                        </span>
                                    </div>
                                </div>
                                <div className='h-6 flex justify-end rounded-[2px]'>
                                    <Button
                                        onClick={() => router.push(`/owner/tenants/tenants-profile/${tenant?.id}`)}

                                        text={'View Profile'} icon={<GoArrowUpRight />}
                                    />
                                </div>
                            </div>

                            <LeaseList />
                            <div className='flex items-center justify-center gap-8'>
                                <span className='text-base font-semibold'>RENT</span>
                                <span className='text-lg font-semibold'> {tenant.rent}<span className='text-xs font-semibold text-[#1F242F]'>per month</span></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MyTenants;

const Button = ({ className, text, icon, ...rest }) => {
    return (
        <button
            {...rest}
            className={`${className} flex items-center gap-2 bg-[#0571ED] p-2 rounded-[4px] text-white font-medium text-sm cursor-pointer`}
        >
            {text}
            {icon}
        </button>
    );
};
