'use client';
import AgentPropertyDetails from '@/components/agent/propertiies/AgentPropertyDetails';
import PropertyOwnerDetails from '@/components/agent/propertiies/PropertyOwnerDetails';
import { useState } from 'react';
const PropertyDetails = () => {
  const [activeTab, setActiveTab] = useState('Linked Buildings');

  const renderComponent = () => {
    switch (activeTab) {
      case 'Basic Details':
        return <AgentPropertyDetails />;
      case 'Linked Buildings':
        return <PropertyOwnerDetails />;
      default:
        return null;
    }
  };

  const buttonStyle = (tab) =>
    ` hover:bg-secondary cursor-pointer  rounded w-[131px] ${
      activeTab === tab ? 'bg-primary text-white' : 'bg-transparent text-gray-400'
    }`;

  return (
    <div className="py-4 ">
      <div className="bg-white p-1 flex justify-center flex-col lg:flex-row space-x-2 w-[140px] lg:w-[276px] item-center  lg:h-10 rounded-md">
        <section className="flex flex-col md:gap-1  lg:flex-row">
          <button
            className={buttonStyle('Basic Details')}
            onClick={() => setActiveTab('Basic Details')}
          >
            Basic Details
          </button>
          <button
            className={buttonStyle('Linked Buildings')}
            onClick={() => setActiveTab('Linked Buildings')}
          >
            Owner Details
          </button>
        </section>
      </div>

      <div className="mt-5 flex">{renderComponent()}</div>
    </div>
  );
};

export default PropertyDetails;

// export default PropertyDetails;
