const IconButton = ({
    text,
    width,
    height,
    type = "button",
    cn = "",
    leftIcon,
    rightIcon,
    ...rest
  }) => {
    // If a left icon exists, remove the default horizontal padding.
    const paddingClass = leftIcon ? "" : "px-4";
  
    return (
      <button
        type={type}
        {...rest}
        className={`${cn} bg-primary grid place-items-center text-white text-base lg:text-xl font-medium  rounded-sm cursor-pointer ${width ? width : "w-full"} ${height ? height : "h-[56px]"} ${paddingClass}`}
      >
        <div className="flex items-center justify-center">
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {text}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </div>
      </button>
    );
  };
  
  export default IconButton;
  
// export default IconIconButton