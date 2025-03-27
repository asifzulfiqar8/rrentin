import { subscriptionPlans } from "@/data/data";
import { FaCheck } from "react-icons/fa6";

const SubscriptionPlan = () => {
  return (
    <section className="bg-white py-6 px-5 md:px-[34px] rounded-xl shadow-custom">
      <h4 className="text-lg md:text-3xl font-bold text-[#474445] text-center">
        The Right Plan for Your Business
      </h4>
      <p className="text-sm md:text-base text-[#474445] text-center mt-2 mx-auto max-w-[580px]">
        We have several powerful plans to showcase your business and get
        discovered as a creative entrepreneurs. Everything you need.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
        {subscriptionPlans.map((plan, index) => (
          <div
            key={index}
            className={`w-full md:max-w-[320px] p-5 rounded-lg shadow-custom flex flex-col justify-between ${
              plan.name === "Plus" ? "bg-[#F2F5FA]" : "bg-white "
            }`}
          >
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-[#474445] mb-2">
                {plan.name}
              </h3>
              <p className="text-sm md:text-base text-[#474445]">
                {plan.description}
              </p>
              {/* Plan Features */}
              <ul className="my-8 md:my-[46px] space-y-2">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm md:text-base text-[#474445] flex items-center gap-3"
                  >
                    {/* Example check icon (optional). Replace or remove if not needed */}
                    <FaCheck className="text-[#505050] text-base" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.price === "no-pricing" ? (
                <span></span>
              ) : (
                <p
                  className={`text-lg font-semibold ${
                    plan.buttonType === "primary"
                      ? "text-[#E35454]"
                      : "text-[#474445]"
                  }`}
                >
                  <span className="text-xs">THB </span>
                  {plan.price}{" "}
                  <span className="text-xs font-normal">/month</span>
                </p>
              )}
              {plan.name === "Plus" && (
                <span className="text-sm md:text-base text-[#505050]">
                  (Excl . VAT)
                </span>
              )}
            </div>

            {/* Action Button */}
            <button
              className={`
          w-full py-2 rounded-lg font-medium mt-6 text-white text-lg cursor-pointer
          ${plan.buttonType === "disabled" ? "bg-[#969696]" : "bg-primary"}
        `}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubscriptionPlan;
