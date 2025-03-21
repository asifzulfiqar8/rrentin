import { IoHomeOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import Image from "next/image";

const UserPropertyCard = () => {
    return (
        <section className='relative flex flex-col gap-8 border-[#D5E0F6] shadow-lg rounded-lg p-4'>
            <div className='relative'>
                <Image
                    src='/images/properties/Bg.png'
                    width={378}
                    height={94}
                    alt='Property Background'
                    className='mx-auto w-full h-auto rounded-t-lg'
                />
                <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 size-[103px]'>
                    <Image
                        src='/images/properties/Buildings.png'
                        width={103}
                        height={103}
                        alt='Profile Image'
                        className='rounded-full h-full w-full border-4 border-white shadow-md'
                    />
                </div>
            </div>
            <div className='flex flex-col px-3.5 mt-8'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-xs font-semibold'>John Doe</h1>
                        <div className='text-[#0245A5] flex items-center gap-1'>
                            <IoHomeOutline /> <span className="text-xs">
                                123 Sukhumvit Rd, Bangkok, Thailand
                                </span> 
                        </div>
                    </div>
                    <div className='size-8 flex items-center justify-center rounded-[2px] bg-[#E9F2FF]'>
                        <FaBookmark className='text-[#0245A5]' />
                    </div>
                </div>
                <div className='flex flex-col mt-2'>
                    <h1 className='text-xs font-semibold'>Buildings</h1>
                    <div className='text-[#0245A5] text-xs flex'>5 Buildings</div>
                    <div className='flex gap-3 mt-2 mb-8'>
                        {[...Array(3)].map((_, index) => (
                            <Image
                                key={index}
                                src='/images/properties/Buildings.png'
                                width={78}
                                height={43}
                                alt='Building'
                                className='w-[78px] h-[43px] rounded-sm'
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserPropertyCard;
