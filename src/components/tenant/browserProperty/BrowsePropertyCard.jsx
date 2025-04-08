import { Bath, BedIcons, SqftIcon } from '@/assets/icon'
import Image from 'next/image'
import React from 'react'
import { FaBookmark } from 'react-icons/fa'

function BrowsePropertyCard( {data}) {
    return (
        <div className="h-[440px] w-full bg-white rounded-md shadow-lg border">
            <div className='relative w-full h-[239px] '>
                <Image
                    src={data?.images[0]}
                    width={368}
                    height={239}
                    alt="icon"
                    className="rounded-tr-md h-full rounded-tl-md w-full object-cover"
                />
                <div className="absolute top-2 right-2">

                    <div className=" size-8 bg-[#E9F2FF]  scale-on-hover rounded-full flex items-center justify-center border text-primary px-2 py-1 text-sm shadow">
                        <FaBookmark className='text-primary' />
                    </div>
                    
                </div>

                <div className="absolute top-2 left-2">
                    <div className="bg-white rounded-md border text-primary px-1 py-[2px] text-sm shadow">
                        <p className='text-xs font-bold'>{data?.type}</p>
                    </div>


                </div>
                <div className="absolute bottom-2 right-2">
                    <div className="bg-[#32343C80] rounded-full  text-primary px-2.5 py-1 text-sm shadow">
                        <p className="text-white">
                            1/10
                        </p>
                    </div>
                </div>
            </div>
            <div className='p-5'>
                <div>
                    <p className='text-sm text-[#969696]'>{data?.address}</p>
                </div>
                <div className='flex flex-col mt-4'>
                    <div className='flex items-center justify-between'>
                        <p className='text-[22px] font-semibold'>
                            {data?.price}
                        </p>
                        <p className='text-[22px] font-semibold'>
                           {data?.rentPrice}
                            <span className='text-sm font-semibold text-[#C2C2C2]'>
                                /month
                            </span>
                        </p>
                    </div>
                    <div>
                        <p className='text-lg text-[#545454]'>Dream House</p>
                    </div>
                </div>
                <div className='border-b-2 mt-4 mb-4'></div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-center gap-2'>
                        <BedIcons />
                        <p className='text-sm font-semibold text-[#32343CCC]/50'>{data?.beds} Beds</p>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <Bath />
                        <p className='text-sm font-semibold text-[#32343CCC]/50'>{data?.baths} Bath</p>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <SqftIcon />
                        <p className='text-sm font-semibold text-[#32343CCC]/50'>{data?.area} Sqft</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BrowsePropertyCard