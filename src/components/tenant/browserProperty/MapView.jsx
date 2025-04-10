import React from 'react'
import BrowsePropertyCard from './BrowsePropertyCard'
import dynamic from 'next/dynamic';
import PropertyDetailsSlider from './PropertyDetailsSlider';
// import AreaMapLocation from './AreaMapLocation'
const AreaMapLocation = dynamic(() => import('./AreaMapLocation'), {
    ssr: false,
});
function MapView({handleCloseSlider,handleCardClick,selectedProperty, houses }) {
    return (
        <div className=''>
            <div className='grid  grid-cols-12 gap-4'>
                <div className=' md:col-span-4  col-span-12 space-y-3  rounded-md h-[calc(100vh-400px)] xl:h-[calc(100vh-355px)] overflow-auto'>
                    {houses?.map((property) => (
                        <div key={property.id}  onClick={() => handleCardClick(property)}>
                            <BrowsePropertyCard data={property} />
                        </div>
                    ))}
                    <div
                        className={`fixed top-24 right-0 w-full lg:w-1/3 xl:w-1/4 h-full bg-white shadow-lg transition-transform duration-300 ${selectedProperty ? 'translate-x-0' : 'translate-x-full'
                            } z-[401]`}
                    >
                        {selectedProperty && (
                            <PropertyDetailsSlider data={selectedProperty} onClose={handleCloseSlider} />
                        )}
                    </div>
                </div>
                <div className='md:col-span-8 col-span-12 h-[calc(100vh-400px)] xl:h-[calc(100vh-355px)]  rounded-md'>
                    <AreaMapLocation
                        houses={houses}
                        areaName="Bangkok',
"
                    />
                </div>
            </div>
        </div>
    )
}

export default MapView