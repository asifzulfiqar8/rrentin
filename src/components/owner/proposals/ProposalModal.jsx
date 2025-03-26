import { RxCross2 } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
const ProposalModal = ({ onClose, children, width }) => {
  return (
    <div
      className="modal bg-[#000000c5] fixed top-0 left-0 inset-0 z-[99] p-6 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-[2px] shadow-lg overflow-y-auto custom-scroll h-fit max-h-full ${
          width ? width : "w-[300px] md:w-[400px] lg:w-[700px] xl:w-[900px]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mt-4 md:mt-6">{children}</div>
      </div>
    </div>
  );
};

export default ProposalModal;
