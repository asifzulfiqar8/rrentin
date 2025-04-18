'use client';

import SearchInput from '@/components/shared/small/SearchInput';
import Selector from '@/components/shared/small/Selector';
import Image from 'next/image';
import { useState } from 'react';

const LinkedAgentHeader = ({ tabView, setTabView }) => {
  const [selectedLocation, setLocation] = useState('Location');
  const [selectedPrice, setSelectedPrice] = useState('Price range');
  const [Favorite, setFavorite] = useState('Favorite');

  return (
    <section className="flex flex-col md:flex-row w-full items-center justify-between gap-5 border-b border-[#395d8c4d] pb-4">
      <div className="flex items-center gap-[10px] text-sm font-semibold text-textColor">
        <Image src="/images/dashboard/rental.png" width={32} height={32} alt="icon" />
        Linked Owners
      </div>
      <div className="flex flex-col w-full md:flex-row justify-end items-center gap-2 md:gap-6">
        <div className="w-full lg:w-[440px]">
          <SearchInput placeholder="properties" cn="!w-full md:!w-[200px] lg:!w-[440px]" />
        </div>
        <Selector
          cn="!w-full md:!w-[110px]"
          lists={['All', 'Active', 'Inactive']}
          selectedOption={selectedLocation}
          setSelectedOption={setLocation}
        />
        <Selector
          cn="!w-full md:!w-[110px]"
          lists={['Rented', 'Free']}
          selectedOption={selectedPrice}
          setSelectedOption={setSelectedPrice}
        />
        <Selector
          cn="!w-full md:!w-[110px]"
          lists={['Rented', 'Free']}
          selectedOption={Favorite}
          setSelectedOption={setFavorite}
        />
      </div>
    </section>
  );
};

export default LinkedAgentHeader;
