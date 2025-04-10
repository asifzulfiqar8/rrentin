import PropertiesImageSlider from '@/components/owner/properties/PropertiesImageSlider'
import PropertyDescription from '@/components/owner/properties/PropertyDescription'
import React from 'react'

function PropertyDetails() {
  return (
    <div className="flex flex-col gap-4">
      <h6 className="text-lg md:text-[22px] font-semibold text-textColor mb-[18px]">
        Property Details
      </h6>
      <PropertiesImageSlider />
      <PropertyDescription />

    </div>
  )
}

export default PropertyDetails