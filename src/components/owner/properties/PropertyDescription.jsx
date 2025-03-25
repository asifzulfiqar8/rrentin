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