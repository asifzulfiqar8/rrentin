const Button = ({ text, width, height, type = "button", cn, ...rest }) => {
  return (
    <button
      type={type}
      {...rest}
      className={`${cn} bg-[#0245A5] grid place-items-center text-white text-base lg:text-xl font-medium rounded-xl cursor-pointer ${
        width ? width : "w-full"
      } ${height ? height : "h-[56px]"}`}
    >
      {text}
    </button>
  );
};

export default Button;
