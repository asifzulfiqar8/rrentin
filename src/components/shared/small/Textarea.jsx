const Textarea = ({ label, shadow = false, ...rest }) => {
    return (
      <>
        <label className="text-sm lg:text-base text-[#666666]">{label}</label>
        <textarea
          {...rest}
          className={`mt-2 outline-none px-4 border-[0.5px] border-[#66666659] rounded-xl w-full text-sm lg:text-base text-[#666666] resize-y min-h-[151px] ${
            shadow && "shadow-input"
          }`}
        />
      </>
    );
  };
  
  export default Textarea;
  