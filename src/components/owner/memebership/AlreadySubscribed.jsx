"use client";
import { alreadySubscribedData, tableStyles } from "@/data/data";
import DataTable from "react-data-table-component";

const AlreadySubscribed = () => {
  return (
    <section className="bg-white rounded-lg border p-4 lg:p-5 shadow-sm">
      <div className="text-sm text-textColor font-semibold">
        Proposal Summary
      </div>
      <DataTable
        data={alreadySubscribedData}
        columns={columns}
        selectableRowsHighlight
        customStyles={tableStyles}
        fixedHeader
        fixedHeaderScrollHeight="70vh"
      />
    </section>
  );
};

export default AlreadySubscribed;

const columns = [
  {
    name: "Plan Name",
    selector: (row) => row.planName,
  },
  {
    name: "Start Date",
    selector: (row) => row.startDate,
  },
  {
    name: "End Date",
    selector: (row) => row.endDate,
  },
  {
    name: "Status",
    selector: (row) => (
      <span
        className={`py-[3px] px-[10px] rounded-sm text-sm font-semibold capitalize ${
          row.status === "Active"
            ? "bg-[#34C7591A] text-[#34C759]"
            : "bg-[#FF3B301A] text-[#FF3B30]"
        }`}
      >
        {row.status}
      </span>
    ),
  },
  {
    name: "Actions",
    selector: (row) => (
      <button className="bg-primary py-[2px] px-4 rounded-[4px] text-white text-xs font-medium cursor-pointer">
        View
      </button>
    ),
  },
];
