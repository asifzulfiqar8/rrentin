import EarningsChart from "@/components/owner/payments/EarningsChart";
import PaymentOverview from "@/components/owner/payments/PaymentOverview";
import PaymentTransactionHistory from "@/components/owner/payments/PaymentTransactionHistory";
import Sales from "@/components/owner/payments/Sales";
import Stripe from "@/components/owner/payments/Stripe";
import TenantPayment from "@/components/owner/payments/TenantPayment";
import TransactionHistory from "@/components/owner/payments/TransactionHistory";

const Payments = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg md:text-[22px] font-semibold text-textColor">
        Transactions Details
      </h3>
      <div className="grid grid-cols-12 w-full gap-4 ">
        <div className="col-span-12 lg:col-span-7 bg-white rounded-md">
          <EarningsChart />
        </div>
        <div className="col-span-12 lg:col-span-5 bg-white rounded-md">
          <Stripe />
        </div>
      </div>
      <div className="grid  grid-cols-12 w-full gap-4 ">
        <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-md">
          <PaymentOverview />

        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-md">
          <TransactionHistory />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-md">
          <Sales />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-md">
          <TenantPayment />
        </div>
      </div>
      <div className="grid grid-cols-1 w-full">
        <div className=" bg-white rounded-md">
          <PaymentTransactionHistory />
        </div>
      </div>

    </div>
  );
};

export default Payments;
