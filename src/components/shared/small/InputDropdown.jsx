import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";

const InputDropdown = ({
    label,
    type = "text",
    shadow = false,
    options = [],
    defaultText = "Select",
    onSelect,
    width,
    mainClassName,
    readOnly = false,
    dropdownIcon,
    ...rest
}) => {
    const [selected, setSelected] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const selectHandler = (option) => {
        if (readOnly) return;
        setSelected(option);
        setIsOpen(false);
        if (onSelect) onSelect(option);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        // If defaultText equals "Select Name", reset selected state
        if (defaultText === "Select Name") {
            setSelected(null);
        }
    }, [defaultText]);

    return (
        <div className="relative">
            {label && (
                <label className="text-sm lg:text-base text-[#666666]">{label}</label>
            )}
            <div className="mt-2 relative">
                <input
                    {...rest}
                    type={type}
                    className={`w-full pr-12 outline-none px-4 h-[56px] border-[0.5px] border-[#66666659] rounded-xl text-sm lg:text-base text-[#666666] ${shadow ? "shadow-input" : ""
                        }`}
                />
                {/* Dropdown toggle area */}
                <div className="absolute inset-y-0 right-0 flex items-center space-x-2 ">
                    {/* Conditionally render icon if provided */}
                    <div
                        className={`relative ${width ? width : "w-full"} bg-[#E9F2FF] rounded-tr-xl rounded-br-xl border-[0.5px]  border-[#66666659]`}
                        ref={dropdownRef}
                    >
                        <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-label={`Dropdown for ${label || "options"}`}
                            className={`${shadow ? "shadow-input" : ""
                                } ${readOnly ? "cursor-not-allowed" : "border-[#E0E0E9]"} ${mainClassName ? mainClassName : ""
                                }  px-2 h-[54px] gap-2  w-full text-sm lg:text-base text-[#666666] flex items-center justify-between`}
                            onClick={() => !readOnly && setIsOpen(!isOpen)}
                            disabled={readOnly}
                        >
                        {dropdownIcon && <div>{dropdownIcon}</div>}

                            <span className="text-sm text-[#383838E5] capitalize">
                                {selected ? (selected.label || selected.option) : defaultText}
                            </span>
                            <div
                                className={`transition-all duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                                    }`}
                            >
                                <GoChevronDown
                                    fontSize={20}
                                    color={readOnly ? "#999999" : "#292D3280"}
                                />
                            </div>
                        </button>
                        {isOpen && !readOnly && (
                            <ul className="absolute z-10 w-full rounded-md shadow-md cursor-pointer mt-1 bg-[#f7f7f7]">
                                {options.map((option) => (
                                    <li
                                        className="py-4 text-sm px-4 rounded-md border-b border-[#d3d3d3] hover:bg-[hsl(208,100%,95%)]"
                                        key={option.value}
                                        onClick={() => selectHandler(option)}
                                    >
                                        {option.label || option.option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputDropdown;
