import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';

const InputDropdown = ({
  label,
  type = 'text',
  shadow = false,
  options = [],
  defaultText = 'Select',
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

  const selectHandler = option => {
    if (readOnly) return;
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = e => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // If defaultText equals "Select Name", reset selected state
    if (defaultText === 'Select Name') {
      setSelected(null);
    }
  }, [defaultText]);

  return (
    <div className="relative">
      {label && <label className="text-sm text-[#666666] lg:text-base">{label}</label>}
      <div className="relative mt-2">
        <input
          {...rest}
          type={type}
          className={`h-[56px] w-full rounded-xl border-[0.5px] border-[#66666659] px-4 pr-12 text-sm text-[#666666] outline-none lg:text-base ${
            shadow ? 'shadow-input' : ''
          }`}
        />
        {/* Dropdown toggle area */}
        <div className="absolute inset-y-0 right-0 flex items-center space-x-2">
          {/* Conditionally render icon if provided */}
          <div
            className={`relative ${width ? width : 'w-full'} rounded-tr-xl rounded-br-xl border-[0.5px] border-[#66666659] bg-[#E9F2FF]`}
            ref={dropdownRef}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-label={`Dropdown for ${label || 'options'}`}
              className={`${
                shadow ? 'shadow-input' : ''
              } ${readOnly ? 'cursor-not-allowed' : 'border-[#E0E0E9]'} ${
                mainClassName ? mainClassName : ''
              } flex h-[54px] w-full items-center justify-between gap-2 px-2 text-sm text-[#666666] lg:text-base`}
              onClick={() => !readOnly && setIsOpen(!isOpen)}
              disabled={readOnly}
            >
              {dropdownIcon && <div>{dropdownIcon}</div>}

              <span className="text-sm text-[#383838E5] capitalize">
                {selected ? selected.label || selected.option : defaultText}
              </span>
              <div className={`transition-all duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                <GoChevronDown fontSize={20} color={readOnly ? '#999999' : '#292D3280'} />
              </div>
            </button>
            {isOpen && !readOnly && (
              <ul className="absolute z-10 mt-1 w-full cursor-pointer rounded-md bg-[#f7f7f7] shadow-md">
                {options.map(option => (
                  <li
                    className="rounded-md border-b border-[#d3d3d3] px-4 py-4 text-sm hover:bg-[hsl(208,100%,95%)]"
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
