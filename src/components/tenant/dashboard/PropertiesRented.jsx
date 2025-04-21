import Image from 'next/image';
import React from 'react';

function PropertiesRented() {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="rounded-md bg-white px-6 py-3.5 shadow-md">
        <p className="text-base font-medium">Total Properties Rented</p>
        <div className="flex items-center justify-between">
          <div className="text-5xl font-medium">03</div>
          <div>
            <Image
              src="/images/tenant/dashboard/Chart.png"
              width={48}
              height={70}
              className="h-full w-full object-cover"
              alt="property image"
            />
          </div>
        </div>
      </div>
      <div className="rounded-md bg-white px-6 py-3.5 shadow-md">
        <p className="text-sm text-[#76808D]">Overview</p>
        <div className="mt-3.5 flex items-center justify-between">
          <div className="flex">
            <div className="flex h-14 flex-col items-center">
              {/* Top Dot */}
              <div className="h-3 w-3 rounded-full bg-[#049478]"></div>

              {/* Line */}
              <div className="w-0.5 flex-1 bg-[#049478]"></div>

              {/* Bottom Dot */}
              <div className="h-3 w-3 rounded-full bg-[#049478]"></div>
            </div>

            <div className="ml-5 flex flex-col">
              <p className="text-4xl font-medium">02</p>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#049478]"></div>
                <p className="text-[#049478]">Paid Properties</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex h-14 flex-col items-center">
              {/* Top Dot */}
              <div className="h-3 w-3 rounded-full bg-[#FF8D42]"></div>

              {/* Line */}
              <div className="w-0.5 flex-1 bg-[#FF8D42]"></div>

              {/* Bottom Dot */}
              <div className="h-3 w-3 rounded-full bg-[#FF8D42]"></div>
            </div>

            <div className="ml-5 flex flex-col">
              <p className="text-4xl font-medium">02</p>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#FF8D42]"></div>
                <p className="text-[#FF8D42]">Paid Properties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertiesRented;
