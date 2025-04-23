'use client';
import PropTypes from 'prop-types';

const Step = ({ step, index, currentStep, setCurrentStep, stepsLength }) => {
  return (
    <div
      className={`relative z-10 flex flex-col items-center gap-2 ${
        currentStep >= index
          ? 'cursor-pointer opacity-100'
          : 'pointer-events-none opacity-95 grayscale'
      }`}
      onClick={() => setCurrentStep(index)}
    >
      <span className="bg-primary grid size-[30px] place-items-center rounded-full text-base font-semibold text-white md:size-[50px] md:text-2xl">
        {index + 1}
      </span>
      <p className="text-primary text-[8px] font-medium md:text-sm">{step}</p>
      <div className="hidden lg:block">
        {index < stepsLength - 1 && (
          <span className="absolute top-[30%] left-[67%] z-0">
            <svg
              width="200"
              height="2"
              viewBox="0 0 200 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1L200 0.999989" stroke="#0245A5" strokeWidth="1.7" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );
};

Step.propTypes = {
  step: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  stepsLength: PropTypes.number.isRequired,
};

export default Step;
