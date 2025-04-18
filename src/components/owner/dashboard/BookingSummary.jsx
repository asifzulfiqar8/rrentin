"use client";
import { bookingSummaryData, tableStyles } from "@/data/data";
import Link from "next/link";
import React from "react";
import DataTable from "react-data-table-component";

const BookingSummary = () => {
  return (
    <section className="bg-white rounded-lg border p-4 lg:p-5 shadow-sm">
      <div className="text-sm text-textColor font-semibold">
        Booking Summary
      </div>
      <DataTable
        data={bookingSummaryData.slice(0, 5)}
        columns={columns}
        selectableRowsHighlight
        customStyles={tableStyles}
        fixedHeader
        fixedHeaderScrollHeight="70vh"
      />
    </section>
  );
};

export default BookingSummary;

const columns = [
  {
    name: "Tenant Name",
    selector: (row) => row.tenantName,
  },
  {
    name: "Property Name",
    selector: (row) => row.propertyName,
  },
  {
    name: "Agent Involved",
    selector: (row) => row.agentInvolved,
  },
  {
    name: "Lease Period ",
    selector: (row) => row.leasePeriod,
  },
  {
    name: "Monthly Rent",
    selector: (row) => row.monthlyRent,
  },
  {
    name: "Total Charges",
    selector: (row) => row.totalCharges,
  },
  {
    name: "Actions",
    selector: () => (
      <Link href="" className="underline text-[13px] font-medium text-primary">
        View contract
      </Link>
    ),
  },
];
