import ProposalSummary from "@/components/owner/proposals/ProposalSummary";

const Proposals = () => {
  return (
    <div>
      <h3 className="text-lg md:text-[22px] font-semibold text-textColor mb-4">
        Proposal Details
      </h3>
      <ProposalSummary />
    </div>
  );
};

export default Proposals;
