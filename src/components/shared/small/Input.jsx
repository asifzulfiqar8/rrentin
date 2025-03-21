const Input = ({ label, type = "text", ...rest }) => {
  return (
    <>
      <label className="text-sm lg:text-base text-[#666666]">{label}</label>
      <input
        {...rest}
        type={type}
        className="mt-2 outline-none px-4 h-[56px] border border-[#66666659] rounded-xl w-full text-sm lg:text-base text-[#666666]"
      />
    </>
  );
};

export default Input;
