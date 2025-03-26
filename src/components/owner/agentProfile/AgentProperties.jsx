import Image from 'next/image'
import React from 'react'

const properties = [
  {
    id: 1,
    image: "/images/properties/PropertyView.png",
    title: "Charming Homes in Thailand",
    address: "123 Sunset Road, Phuket, Thailand",
    price: "$243",
    period: "per month",
    monthlyRent: "$45,000",
    startDate: "Apr 29, 2024",
    endDate: "Apr 29, 2024",
    Role: "Inspection",
    commission: "$250",
    paymentStatus: 'pending' // Change this to "paid" or "reject" to test different colors
  },
  {
    id: 1,
    image: "/images/properties/PropertyView.png",
    title: "Charming Homes in Thailand",
    address: "123 Sunset Road, Phuket, Thailand",
    price: "$243",
    period: "per month",
    monthlyRent: "$45,000",
    startDate: "Apr 29, 2024",
    endDate: "Apr 29, 2024",
    Role: "Inspection",
    commission: "$250",
    paymentStatus: 'paid' // Change this to "paid" or "reject" to test different colors
  },
  {
    id: 1,
    image: "/images/properties/PropertyView.png",
    title: "Charming Homes in Thailand",
    address: "123 Sunset Road, Phuket, Thailand",
    price: "$243",
    period: "per month",
    monthlyRent: "$45,000",
    startDate: "Apr 29, 2024",
    endDate: "Apr 29, 2024",
    Role: "Inspection",
    commission: "$250",
    paymentStatus: 'Rejected' // Change this to "paid" or "reject" to test different colors
  },
];

function AgentProperties() {
  return (
    <div>
      {/* Header Section */}
      <div className='flex flex-col gap-2.5'>
        <section className="grid grid-cols-12 gap-4">
          <div className='col-span-6'>
            <span className='text-sm font-semibold'>Properties</span>
          </div>
          <div className='col-span-6 grid grid-cols-5 '>
            <div className='flex items-center justify-center'>Monthly Rent</div>
            <div className='flex items-center justify-center'>Start - End</div>
            <div className='flex items-center justify-center'>Role</div>
            <div className='flex items-center justify-center'>Commission</div>
            <div className='flex items-center justify-center'>Payment Status</div>
          </div>
        </section>
        <section className='border-t'></section>
      </div>

      {/* Properties List */}
      <div className='flex flex-col h-[460px] overflow-auto gap-2'>
        {properties.map((property) => {
          // Determine background color based on payment status
          const statusLower = property.paymentStatus.toLowerCase();
          const statusClass =statusLower === 'pending' ? 'bg-yellow-300' :
              statusLower === 'paid' ? 'bg-green-300' :
                statusLower === 'rejected' ? 'bg-red-300' : 'bg-gray-300';

          return (
            <div key={property.id} className='flex flex-col gap-2.5'>
              <section className="grid grid-cols-12 gap-4">
                {/* Left Section: Image and Details */}
                <div className='col-span-6'>
                  <div className='flex gap-3.5'>
                    <div>
                      <Image
                        src={property.image}
                        width={182}
                        height={100}
                        alt="Property View"
                      />
                    </div>
                    <div className='flex flex-col justify-between p-1'>
                      <div>
                        <h1 className='text-base font-semibold text-[#32343C]'>
                          {property.title}
                        </h1>
                      </div>
                      <div>
                        <h6 className='text-xs font-normal text-[#969696]'>
                          {property.address}
                        </h6>
                      </div>
                      <div>
                        <span className='text-base font-semibold'>
                          {property.price}
                          <span className='text-[8px] text-[#969696] font-semibold'>
                            {property.period}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section: Monthly Rent, Dates, Role, Commission, Payment Status */}
                <div className='col-span-6 grid grid-cols-5'>
                  <div className='flex items-center justify-center'>
                    {property.monthlyRent}
                  </div>
                  <div className='flex items-center justify-center'>
                    <div className='flex flex-col'>
                      <div>{property.startDate}</div>
                      <div>{property.endDate}</div>
                    </div>
                  </div>
                  <div className='flex items-center justify-center'>
                    {property.Role}
                  </div>
                  <div className='flex items-center justify-center'>
                    {property.commission}
                  </div>
                  <div className='flex items-center justify-center'>
                    <div className={`${statusClass} px-2 flex rounded-md items-center justify-center`}>
                      {property.paymentStatus}
                    </div>
                  </div>
                </div>
              </section>
              <section className='border-t'></section>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AgentProperties;
