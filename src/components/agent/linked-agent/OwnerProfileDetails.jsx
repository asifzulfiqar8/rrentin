import { MessageUser } from '@/assets/icon';
import Image from 'next/image';
import React from 'react';
import { BsChatSquareDotsFill, BsPatchCheckFill } from 'react-icons/bs';
import { FaBookmark } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';
import OwnerPaymentOverview from './OwnerPaymentOverview';
import RentOverview from '@/components/tenant/dashboard/RentOverview';
import { agentIncomeOverview } from '@/data/data';
import LinkPropertyCards from './LinkPropertyCards';

function OwnerProfileDetails() {
  return (
    <div>
      <div className="flex w-full flex-col gap-4 rounded-lg bg-white">
        <div className="h-full w-full rounded-lg bg-white p-3.5">
          {/* Header Image with Profile Overlay */}
          <div className="relative w-full">
            {/* Frame image with responsive layout */}
            <Image
              src="/images/agent/Frame.png"
              alt="Frame image"
              layout="responsive"
              width={1190}
              height={225}
              className="rounded-md object-cover"
            />
            {/* Profile image positioned relative to the frame image */}
            <div className="absolute -bottom-8 left-4 sm:-bottom-12 sm:left-15 md:-bottom-16 lg:-bottom-40 2xl:-bottom-28">
              <Image
                src="/images/agent/UserProfile.png"
                alt="User Profile"
                layout="intrinsic"
                width={226}
                height={226}
                className="h-20 w-20 rounded-full sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-56 lg:w-56"
              />
            </div>
          </div>

          {/* Agent Information */}
          <div className="w-full">
            <div className="mt-8 flex flex-col md:mt-0 md:ml-[250px] lg:ml-[290px]">
              <div className="flex w-full flex-col justify-between sm:flex-row">
                <div className="mt-5 flex flex-col gap-2">
                  <h1 className="text-3xl font-semibold">John Doe</h1>
                  <div className="text-primary flex items-center text-xl">
                    <IoHomeOutline />
                    <h1>123 Sukhumvit Rd, Bangkok, Thailand</h1>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-4 sm:mt-0">
                  <div className="flex size-9 items-center justify-center bg-[#E9F2FF]">
                    <BsChatSquareDotsFill className="text-[#0245A5]" />
                  </div>
                  <div className="flex size-9 items-center justify-center bg-[#E9F2FF]">
                    <FaBookmark className="text-[#0245A5]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4">
          <div className="col-span-12 h-[250px] rounded-lg bg-white p-3 shadow-xl lg:col-span-8">
            <OwnerPaymentOverview title="Payment Overview" />
          </div>
          <div className="col-span-12 h-[250px] rounded-lg bg-white shadow-xl lg:col-span-4">
            <RentOverview
              title={'Payment OverView'}
              data={agentIncomeOverview}
              totalTitle={'Total Payment'}
            />
          </div>
        </div>
        <div className="rounded-lg bg-white shadow-xl w-full">
          <LinkPropertyCards />
          {/* ouityfdrdf */}
        </div>
      </div>
    </div>
  );
}

export default OwnerProfileDetails;
