"use client"
import Image from 'next/image';
import { FaBookmark } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';
import { BsPatchCheckFill } from 'react-icons/bs';
import { GoArrowUpRight } from 'react-icons/go';
import { MessageUser } from '@/assets/icon';
import { useRouter } from 'next/navigation';


const InspectionCard = ({ data }) => {
    const router = useRouter()
    // Destructure the data object
    const {
        inspectionImage,
        userImage,
        name,
        address,
        role,
        service,
        price,
        id
    } = data;

    return (
        <div className="p-2 relative border min-h-[283px] bg-white w-full h-full rounded-md">
            <div className="relative h-[93px] overflow-visible">
                <Image
                    src={inspectionImage}
                    width={270}
                    height={93}
                    alt="Property Background"
                    className="mx-auto object-contain rounded-t-lg"
                />
                <div className="absolute w-[75px] h-[75px] z-10 -bottom-5 left-1/2 transform -translate-x-1/2">
                    <Image
                        src={data.userImage}
                        width={75}
                        height={75}
                        alt="Profile Image"
                        className="rounded-full w-[75px] h-[75px] border-4 border-white shadow-md"
                    />
                </div>
            </div>
            {/* Additional card content */}
            <div className="flex flex-col mt-4 gap-1 w-full">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-base font-semibold">{name}</p>
                    </div>
                    <div className="w-3.5 h-w-3.5 cursor-pointer flex items-center justify-center rounded-[2px] bg-[#E9F2FF]">
                        <FaBookmark className="text-primary" />
                    </div>
                </div>
                <div className="text-primary flex items-center gap-1">
                    <IoHomeOutline />
                    <span className="text-xs font-medium">{address}</span>
                </div>
                <div className="flex items-center gap-2">
                    <h1 className="text-xs font-medium">{role}</h1>
                    <BsPatchCheckFill className="text-primary" />
                </div>
                <div>
                    <p className="text-xs font-medium">{service}</p>
                </div>
                <div>
                    <p className="text-base font-medium">{price}</p>
                </div>
                <div className="flex items-center justify-center mt-3 gap-4">
                    <div className="h-6 flex items-center justify-end rounded-[2px]">
                        <Button
                            onClick={() => router.push(`/owner/agent/agent-profile/${id}`)}
                            className="!bg-[#A4A9B0]"
                            text={'View Profile'}
                            icon={<GoArrowUpRight />}
                        />
                    </div>
                    <div className="h-6 flex items-center justify-end rounded-[2px]">
                        <Button
                            // onClick={() => router.push(`/owner/tenants/tenants-profile/${tenant?.id}`)}
                            text={'Hire Agent'}
                            icon={<MessageUser />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InspectionCard;

const Button = ({ className, text, icon, ...rest }) => {
    return (
        <button
            {...rest}
            className={`${className} flex items-center gap-2 bg-primary p-2 rounded-[4px] text-white font-medium text-sm cursor-pointer`}
        >
            {text}
            {icon}
        </button>
    );
};