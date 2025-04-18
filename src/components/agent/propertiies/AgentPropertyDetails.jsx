import PropertiesImageSlider from '@/components/owner/properties/PropertiesImageSlider';
import PropertyDescription from '@/components/owner/properties/PropertyDescription';
import React from 'react';

function AgentPropertyDetails() {
  return (
    <div className="flex flex-col gap-4">
      <PropertiesImageSlider />
      <PropertyDescription />
    </div>
  );
}

export default AgentPropertyDetails;
