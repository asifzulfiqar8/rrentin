import { Balcony, Barbeque, Bath, Canal, Cctv, City, Furnished, Garden,  GreenView, Guard, Gym, Internet, Maids, Parking, Pool, Private, Renovated, Security, Study, Theatre, Wardrobe } from '@/assets/icon';
import ShowMap from '@/components/shared/ShowMap';
import ReviewsCard from './ReviewsCard';
import UserPropertyCard from './UserPropertyCard';
import UserReviewsCard from './UserReviewsCard';
import Description from './Description';

function PropertyDescription() {
    return (
        <section className=" grid grid-cols-1 lg:grid-cols-12 gap-4">

            <section className='bg-white rounded-lg  lg:col-span-8  px-5 py-3.5 '>
                <Description/>
                {/* <h1 className='text-[18px] font-semibold mb-3.5'>Description</h1>
                <p className='text-[#5F5F5FCC] text-sm'>Experience unparalleled luxury and sophistication at The Crest Sukhumvit 34, located in one of Bangkok’s most sought-after neighborhoods. This exceptional residence effortlessly blends contemporary design with timeless elegance, offering a lifestyle of comfort and refinement in the heart of the city.</p>
                <section className='mt-5'>
                    🏡
                    <span className='text-base ml-1.5 font-semibold '>
                        Key Features:
                    </span>
                    <section className='px-5 flex flex-col gap-2 mt-3.5'>
                        <section>
                            <h1 className='text-sm font-semibold'>Rental Agreement Details</h1>
                            <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 mt-[17.5px]'>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex justify-between '>
                                            <p className='text-xs text-[#5F5F5F]'>Monthly Rent</p>
                                            <p className='text-xs text-[#5F5F5F] font-medium'>$1,500</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex justify-between '>
                                            <p className='text-xs text-[#5F5F5F]'>Monthly Rent</p>
                                            <p className='text-xs text-[#5F5F5F] font-medium'>$1,500</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex justify-between '>
                                            <p className='text-xs text-[#5F5F5F]'>Monthly Rent</p>
                                            <p className='text-xs text-[#5F5F5F] font-medium'>$1,500</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex justify-between '>
                                            <p className='text-xs text-[#5F5F5F]'>Monthly Rent</p>
                                            <p className='text-xs text-[#5F5F5F] font-medium'>$1,500</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex justify-between '>
                                            <p className='text-xs text-[#5F5F5F]'>Monthly Rent</p>
                                            <p className='text-xs text-[#5F5F5F] font-medium'>$1,500</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h1 className='text-sm font-semibold'>Payment History & Dues</h1>
                            <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 mt-[17.5px]'>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex justify-between '>
                                            <p className='text-xs text-[#5F5F5F]'>Last Payment Date</p>
                                            <p className='text-xs text-[#5F5F5F] font-medium'>5th Jan 2024</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex justify-between '>
                                            <p className='text-xs text-[#5F5F5F]'>Total Amount Paid</p>
                                            <p className='text-xs text-[#5F5F5F] font-medium'>$1,500</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>

                                </div>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex justify-between '>
                                            <p className='text-xs text-[#5F5F5F]'>Next Due Date</p>
                                            <p className='text-xs text-[#5F5F5F] font-medium'>5th Jan 2024</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex justify-between '>
                                            <p className='text-xs text-[#5F5F5F]'>Pending Amount</p>
                                            <p className='text-xs text-[#5F5F5F] font-medium'>$1,500</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h1 className='text-sm font-semibold'>Amenities</h1>
                            <div className='grid gap-5 grid-cols-1 lg:grid-cols-4 mt-[17.5px]'>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Balcony/>
                                            <p className='text-xs text-[#5F5F5F]'>Balcony</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Balcony/>
                                            <p className='text-xs text-[#5F5F5F]'>Big Balcony</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Parking/>
                                            <p className='text-xs text-[#5F5F5F]'>Parking</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Garden/>
                                            <p className='text-xs text-[#5F5F5F]'>Garden</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Gym/>
                                            <p className='text-xs text-[#5F5F5F]'>Gym</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Maids/>
                                            <p className='text-xs text-[#5F5F5F]'>Maids Room</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Pool/>
                                            <p className='text-xs text-[#5F5F5F]'>Swimming Pool</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Internet/>
                                            <p className='text-xs text-[#5F5F5F]'>Hi Speed Internet</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Private/>
                                            <p className='text-xs text-[#5F5F5F]'>Private Garden</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Study/>
                                            <p className='text-xs text-[#5F5F5F]'>Study Room</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Bath/>
                                            <p className='text-xs text-[#5F5F5F]'>Bathtub</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Barbeque/>
                                            <p className='text-xs text-[#5F5F5F]'>Barbecue Area</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h1 className='text-sm font-semibold'>Furnishing</h1>
                            <div className='grid gap-5 grid-cols-1 lg:grid-cols-4 mt-[17.5px]'>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Wardrobe/>
                                            <p className='text-xs text-[#5F5F5F]'>Build in Wardrobe</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>

                                </div>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Furnished/>
                                            <p className='text-xs text-[#5F5F5F]'>Fully Furnished</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>

                                </div>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Renovated/>
                                            <p className='text-xs text-[#5F5F5F]'>Renovated</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>

                                </div>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Theatre/>
                                            <p className='text-xs text-[#5F5F5F]'>TV/Home Theatre</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <section>
                            <h1 className='text-sm font-semibold'>Security and Safety</h1>
                            <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 mt-[17.5px]'>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Guard/>
                                            <p className='text-xs text-[#5F5F5F]'>Security Guard</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>

                                </div>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Security/>
                                            <p className='text-xs text-[#5F5F5F]'>24-hour Security</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>

                                </div>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Cctv/>
                                            <p className='text-xs text-[#5F5F5F]'>Cctv</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <section>
                            <h1 className='text-sm font-semibold'>Views and Direction</h1>
                            <div className='grid gap-5 grid-cols-1 lg:grid-cols-4 mt-[17.5px]'>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Canal/>
                                            <p className='text-xs text-[#5F5F5F]'>Canal View</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>

                                </div>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <City/>
                                            <p className='text-xs text-[#5F5F5F]'>City View</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>

                                </div>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <Garden/>
                                            <p className='text-xs text-[#5F5F5F]'>Garden View</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>

                                </div>
                                <div className='flex flex-col gap-2.5'>
                                    <div className=' flex flex-col gap-2.5'>

                                        <div className='flex gap-2 '>
                                            <GreenView/>
                                            <p className='text-xs text-[#5F5F5F]'>Green View</p>
                                        </div>
                                        <div className='border-t-1 border-[#5F5F5F]'></div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </section>
                </section> */}
            </section>
            <section className='bg-white rounded-lg  lg:col-span-4  px-6 py-10  gap-4'>
                <UserPropertyCard />
                <ReviewsCard />
                <UserReviewsCard />
            </section>
            <section className='bg-white rounded-lg  lg:col-span-12  px-6 py-10  gap-4'>
                <div className='pb-3'>
                    <h1 className='text-sm font-semibold'>Map View</h1>
                </div>
                <div className='border-t  border-[#32343C] py-3'></div>
                <ShowMap />
            </section>
        </section>
    )
}

export default PropertyDescription