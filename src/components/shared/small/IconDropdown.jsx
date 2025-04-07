'use client'
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const IconDropdown = ({
    lists,
    icon,
    containerClass = '',
    buttonClass = '',
    optionClass = '',
    selectedOption,
    setSelectedOption,
    defaultOption = 'Select'
}) => {
    const [isOptionOpen, setIsOptionOpen] = useState(false)

    const selectHandler = (option) => {
        setSelectedOption(option)
        setIsOptionOpen(false)
    }

    const optionsHandler = () => setIsOptionOpen(!isOptionOpen)

    return (
        <div className={`relative z-50 ${containerClass}`}>
            <div
                className={`flex items-center justify-between text-sm gap-2 cursor-pointer p-2 rounded-[4px] text-nowrap transition-all duration-200 ${buttonClass}`}
                onClick={optionsHandler}
            >
                <div className="flex-shrink-0 w-4 h-4">
                    {icon}
                </div>
                <span className="truncate">{selectedOption || defaultOption}</span>
                <div
                    className={`transition-all duration-300 ${isOptionOpen ? 'rotate-180' : 'rotate-0'}`}
                >
                    <IoIosArrowDown fontSize={18} />
                </div>
            </div>
            {isOptionOpen && (
                <ul className={`flex flex-col rounded-lg shadow-md absolute top-[40px] left-0 w-full bg-white ${optionClass}`}>
                    {lists.map((list, i) => (
                        <li
                            key={i}
                            className="py-1 px-2 border-b text-sm cursor-pointer text-[#00000099] hover:bg-gray-100"
                            onClick={() => selectHandler(list)}
                        >
                            {list}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default IconDropdown
