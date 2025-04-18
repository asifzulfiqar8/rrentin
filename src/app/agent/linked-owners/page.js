import LinkedAgentHeader from '@/components/agent/linked-agent/LinkedAgentHeader';
import LinkedOwnerCard from '@/components/agent/linked-agent/LinkedOwnerCard';
import React from 'react';

function LinkedOwners() {
  const cardsData = [
    {
      id: 1,
      inspectionImage: '/images/inspection/Inspection.png',
      userImage: '/images/agent/UserProfile.png',
      name: 'John Doe',
      address: '123 Sukhumvit Rd, Bangkok, Thailand',
      service: 'Property Inspection',
      role: 'Property Showing',
      price: '3,000$',
    },
    {
      id: 2,
      inspectionImage: '/images/inspection/Inspection.png',
      userImage: '/images/agent/UserProfile.png',
      name: 'Jane Smith',
      address: '456 Rama IX Rd, Bangkok, Thailand',
      service: 'Building Inspection',
      role: 'Property Showing',
      price: '3,500$',
    },
    {
      id: 3,
      inspectionImage: '/images/inspection/Inspection.png',
      userImage: '/images/agent/UserProfile.png',
      name: 'Robert Johnson',
      address: '789 Silom Rd, Bangkok, Thailand',
      service: 'Electrical Inspection',
      role: 'Property Showing',
      price: '2,800$',
    },
    {
      id: 4,
      inspectionImage: '/images/inspection/Inspection.png',
      userImage: '/images/agent/UserProfile.png',
      name: 'Alice Brown',
      address: '101 Ploenchit Rd, Bangkok, Thailand',
      service: 'Safety Inspection',
      role: 'Property Showing',
      price: '4,000$',
    },
    {
      id: 5,
      inspectionImage: '/images/inspection/Inspection.png',
      userImage: '/images/agent/UserProfile.png',
      name: 'Charlie Wilson',
      address: '202 Asoke Rd, Bangkok, Thailand',
      service: 'Structural Inspection',
      role: 'Property Showing',
      price: '3,200$',
    },
    {
      id: 6,
      inspectionImage: '/images/inspection/Inspection.png',
      userImage: '/images/agent/UserProfile.png',
      name: 'Emma Davis',
      address: '303 Sathorn Rd, Bangkok, Thailand',
      service: 'HVAC Inspection',
      role: 'Property Showing',
      price: '3,700$',
    },
    {
      id: 7,
      inspectionImage: '/images/inspection/Inspection.png',
      userImage: '/images/agent/UserProfile.png',
      name: 'Liam Anderson',
      address: '404 Ratchadaphisek Rd, Bangkok, Thailand',
      service: 'Fire Safety Inspection',
      role: 'Property Showing',
      price: '4,200$',
    },
  ];

  return (
    <div>
      <h3 className="text-lg md:text-[22px] font-semibold text-textColor">Owner List</h3>
      <div className="bg-white rounded-lg p-4 mt-4">
        <LinkedAgentHeader />
        <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 max-h-[800px] ">
          {cardsData.map((data, index) => (
            <LinkedOwnerCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LinkedOwners;
