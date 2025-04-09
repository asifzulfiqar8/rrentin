"use client";
import SearchInput from '@/components/shared/small/SearchInput'
import Selector from '@/components/shared/small/Selector'
import Image from 'next/image'
import React, { useState } from 'react'

function MyTenantsHeader() {
    const [selectedStatus, setSelectedStatus] = useState("Status");
    return (
        <section className="flex flex-col md:flex-row items-center  justify-between gap-5 border-b border-[#395d8c4d] pb-4 px-3.5">
            <div className="flex items-center gap-[10px] text-sm font-semibold text-textColor">
                <Image
                    src="/images/dashboard/rental.png"
                    width={32}
                    height={32}
                    alt="icon"
                />
                My Tenants
            </div>
            <div className="flex items-center gap-6">
                <div className=' w-[150px] lg:w-[440px]'>
                    <SearchInput placeholder="properties" cn="w-[150px] lg:!w-[440px]" />
                </div>
                <Selector
                    lists={["All", "Active", "Inactive"]}
                    selectedOption={selectedStatus}
                    setSelectedOption={setSelectedStatus}
                />
            </div>
        </section>
    )
}

export default MyTenantsHeader