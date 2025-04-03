"use client";
import { proposalSummaryData, tableStyles } from "@/data/data";
import { useState } from "react";
import DataTable from "react-data-table-component";
import ProposalModal from "./ProposalModal";
import { GoArrowUpRight } from "react-icons/go";

const ProposalSummary = () => {
  const [modal, setModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const modalOpenHandler = (row) => {
    setSelectedRow(row);
    setModal(true);
  };
  const modalCloseHandler = () => {
    setSelectedRow(null);
    setModal(false);
  };
  return (
    <section className="bg-white rounded-lg border p-4 lg:p-5 shadow-sm">
      <div className="text-sm text-textColor font-semibold">
        Proposal Summary
      </div>
      <DataTable
        data={proposalSummaryData}
        columns={columns(modalOpenHandler)}
        selectableRowsHighlight
        customStyles={tableStyles}
        fixedHeader
        fixedHeaderScrollHeight="70vh"
      />
      <div className="flex justify-center mt-4">
        <button className="flex items-center gap-1 bg-primary py-[6px] px-2 rounded-sm text-white text-sm found-medium cursor-pointer">
          View more
          <GoArrowUpRight className="text-base text-white" />
        </button>
      </div>
      {modal && selectedRow && (
        <ProposalModal
          onClose={modalCloseHandler}
          title="Proposal Overview"
          width="w-[300px] md:w-[500px]"
        >
          <div>
            <p className="text-base md:text-2xl text-center text-textColor">
              <strong className="text-2xl font-semibold">
                Proposal Overview
              </strong>
            </p>
            <p className="text-base md:text-2xl text-center text-textColor">
              Proposal ID: {selectedRow.proposalId}
            </p>
            <p className="text-center text-textColor text-sm md:text-base">
              {selectedRow.dateSent} 10:54 PM
            </p>
            <hr className="my-2 border-textColor border-dashed" />
            <div className="space-y-2">
              <div className="px-8 py-6 border-[#32343C] border-b  ">
                <p className="flex justify-between">
                  <strong>Sent To:</strong>
                  <p>
                    {selectedRow.sentTo}
                  </p>
                </p>
              </div>
              <div className="px-8 py-6 border-[#32343C] border-b  ">
                <p className="flex justify-between">
                  <strong>Property Name:</strong>
                  <p>
                    {selectedRow.propertyName}
                  </p>
                </p>
              </div>
              <div className="px-8 py-6 border-[#32343C] border-b  ">
                <p className="flex justify-between">
                  <strong>Property Address:</strong>
                  <p>
                    {selectedRow.proposalType}
                  </p>
                </p>
              </div>
              <div className="px-8 py-6 border-[#32343C] border-b  ">
                <p className="flex justify-between">
                  <strong>Rent Amount:</strong>
                  <p>
                    {selectedRow.dateSent}
                  </p>
                </p>
              </div>
              <div className="px-8 py-6 border-[#32343C] border-b  ">
                <p className="flex justify-between">
                  <strong>Contact Duration:</strong>
                  <p>
                    {selectedRow.dateSent}
                  </p>
                </p>
              </div>
              <div className="px-8 py-6 border-[#32343C] border-b  ">
                <p className="flex justify-between">
                  <strong>Proposed Move-in Date:</strong>
                  <p>
                    {selectedRow.dateSent}
                  </p>
                </p>
              </div>
              <div className="px-8 py-6 border-[#32343C] border-b  ">
                <p className="flex justify-between">
                  <strong>Status:</strong>{" "}
                  <span
                    className={`capitalize ${selectedRow.status === "accepted"
                      ? "text-green-500"
                      : selectedRow.status === "pending"
                        ? "text-yellow-500"
                        : "text-red-500"
                      }`}
                  >
                    {selectedRow.status}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </ProposalModal>
      )}
    </section>
  );
};

export default ProposalSummary;

const columns = (modalOpenHandler) => [
  {
    name: "Proposal ID",
    selector: (row) => row.proposalId,
  },
  {
    name: "Property",
    selector: (row) => row.propertyName,
  },
  {
    name: "Proposal Type",
    selector: (row) => row.proposalType,
  },
  {
    name: "Sent To",
    selector: (row) => row.sentTo,
  },
  {
    name: "Date Sent",
    selector: (row) => row.dateSent,
  },
  {
    name: "Status",
    selector: (row) => (
      <span className="flex items-center gap-1 capitalize">
        {row.status === "accepted"
          ? "✅"
          : row.status === "pending"
            ? "⌛"
            : "❌"}{" "}
        {row.status}
      </span>
    ),
  },
  {
    name: "Actions",
    selector: (row) => (
      <button
        className="bg-primary py-[2px] px-4 rounded-[4px] text-white text-xs font-medium cursor-pointer"
        onClick={() => modalOpenHandler(row)}
      >
        View
      </button>
    ),
  },
];
