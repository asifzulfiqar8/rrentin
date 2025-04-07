import SearchInput from '@/components/shared/small/SearchInput';
import Selector from '@/components/shared/small/Selector';
import { ListIcon } from "@/assets/icon";

const FiltersSection = ({
    selectedType,
    setSelectedType,
    selectedPrice,
    setSelectedPrice,
    selectedLocation,
    setSelectedLocation
}) => {
    return (
        <div className='flex flex-wrap gap-4 mt-4'>
            {/* Search Input - Larger */}
            <div className='flex-grow md:flex-grow-[2] w-full md:w-auto'>
                <SearchInput placeholder="properties" cn="!w-full" />
            </div>

            {/* Selectors */}
            <div className='flex-grow md:w-auto min-w-[150px]'>
                <Selector
                    cn='!w-full'
                    lists={["All", "Active", "Inactive"]}
                    selectedOption={selectedType}
                    setSelectedOption={setSelectedType}
                />
            </div>
            <div className='flex-grow md:w-auto min-w-[150px]'>
                <Selector
                    cn='!w-full'
                    lists={["All", "Active", "Inactive"]}
                    selectedOption={selectedPrice}
                    setSelectedOption={setSelectedPrice}
                />
            </div>
            <div className='flex-grow md:w-auto min-w-[150px]'>
                <Selector
                    cn='!w-full'
                    lists={["All", "Active", "Inactive"]}
                    selectedOption={selectedLocation}
                    setSelectedOption={setSelectedLocation}
                />
            </div>

            {/* Clear Filter Button */}
            <div className='w-[122px]'>
                <button className='bg-primary rounded-md flex p-2.5 px-4 items-center text-white gap-2'>
                    <ListIcon className="text-base" />
                    <div className='text-sm'>
                        Clear Filter
                    </div>
                </button>
            </div>
        </div>
    );
};

export default FiltersSection;
