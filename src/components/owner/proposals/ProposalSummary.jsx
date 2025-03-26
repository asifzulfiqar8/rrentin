"use client";
import { proposalSummaryData, tableStyles } from "@/data/data";
import { useState } from "react";
import DataTable from "react-data-table-component";
import ProposalModal from "./ProposalModal";

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
      {modal && selectedRow && (
        <ProposalModal
          onClose={modalCloseHandler}
          title="Proposal Overview"
          width="w-[300px] md:w-[500px]"
        >
          <div>
            <p className="text-base md:text-2xl text-center text-textColor">
              Proposal ID: {selectedRow.proposalId}
            </p>
            <p className="text-center text-textColor text-sm md:text-base">
              {selectedRow.dateSent} 10:54 PM
            </p>
            <hr className="my-2 border-textColor border-dashed" />
            <div className="space-y-2">
              <p>
                <strong>Sent To:</strong> {selectedRow.sentTo}
              </p>
              <p>
                <strong>Property Name:</strong> {selectedRow.propertyName}
              </p>
              <p>
                <strong>Proposal Type:</strong> {selectedRow.proposalType}
              </p>
              <p>
                <strong>Date Sent:</strong> {selectedRow.dateSent}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`capitalize ${
                    selectedRow.status === "accepted"
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
