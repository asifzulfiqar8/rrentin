import { myPropertiesData } from '@/data/data';
import Image from 'next/image';
import React from 'react';
import LinkedOwnerPropertyCard from './LinkedOwnerPropertyCard';

function LinkPropertyCards() {
  return (
    <div className="w-full p-4">
      <div className="text-textColor flex items-center gap-[10px] text-sm font-semibold">
        <Image src="/images/dashboard/rental.png" width={32} height={32} alt="icon" priority />
        <p>My Properties</p>
      </div>
      <div className="flex w-full flex-row flex-wrap gap-6 overflow-auto p-4 pt-3">
        {myPropertiesData.slice(0, 4).map((card, i) => (
          <LinkedOwnerPropertyCard data={card} key={i} />
        ))}
      </div>
    </div>
  );
}

export default LinkPropertyCards;
