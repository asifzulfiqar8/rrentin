'use client';
import {
  Balcony,
  Barbeque,
  Bath,
  Canal,
  Cctv,
  City,
  Furnished,
  Garden,
  GreenView,
  Guard,
  Gym,
  Internet,
  Maids,
  Parking,
  Pool,
  Private,
  Renovated,
  Security,
  Study,
  Theatre,
  Wardrobe,
} from '@/assets/icon';
// import ShowMap from '@/components/shared/ShowMap';
import ReviewsCard from './ReviewsCard';
import UserPropertyCard from './UserPropertyCard';
import UserReviewsCard from './UserReviewsCard';
import Description from './Description';
import dynamic from 'next/dynamic';
// import HouseMap from '../../tenant/browserProperty/HouseMap';
const HouseMap = dynamic(() => import('../../tenant/browserProperty/HouseMap'), {
  ssr: false, // Disable SSR for this component (client-side rendering only)
});

function PropertyDescription() {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <section className="rounded-lg bg-white px-5 py-3.5 lg:col-span-8">
        <Description />
      </section>
      <section className="gap-4 rounded-lg bg-white px-6 py-10 lg:col-span-4">
        <UserPropertyCard />
        <ReviewsCard />
        <UserReviewsCard />
      </section>
      <section className="gap-4 rounded-lg bg-white px-6 py-10 lg:col-span-12">
        <div className="pb-3">
          <h1 className="text-sm font-semibold">Map View</h1>
        </div>
        <div className="border-t border-[#32343C] py-3"></div>
        {/* <ShowMap /> */}
        <HouseMap
          location={'lahore'}
          image={'/images/browser-property/Properties.png'}
          name={'Dream house'}
          status={'free'}
        />
      </section>
    </section>
  );
}

export default PropertyDescription;
