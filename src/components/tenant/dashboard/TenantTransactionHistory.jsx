"use client";
import React, { useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import { paymentTransactionData, transactionTableStyles } from "@/data/data";
// import PaymentTransactionSlip from "./PaymentTransactionSlip";
import { CiFilter } from "react-icons/ci";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import PaymentTransactionSlip from "@/components/owner/payments/PaymentTransactionSlip";

function TenantTransactionHistory() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [filterOption, setFilterOption] = useState("weekly");

    const openModal = (row) => {
        setSelectedRow(row);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    // Simulated filtering logic: Adjust slices or filtering based on actual criteria.
    const filteredData = useMemo(() => {
        if (filterOption === "weekly") {
            return paymentTransactionData.slice(0, 5);
        } else if (filterOption === "monthly") {
            return paymentTransactionData.slice(0, 7);
        } else if (filterOption === "yearly") {
            return paymentTransactionData;
        }
        return paymentTransactionData;
    }, [filterOption]);

    const columns = useMemo(
        () => [
            {
                name: "Invoice ID",
                selector: (row) => row.invoiceHistory,
                width: "50%",
            },
            {
                name: "Property Name",
                selector: (row) => row.accountDetails,
            },
            {
                name: "Due Date",
                selector: (row) => row.amount,
            },
            {
                name: "amount",
                selector: (row) => row.date,
            },
            {
                name: "Payment Status",
                cell: (row) => {
                    const status = row.paymentStatus.toLowerCase();
                    const bgClass =
                        status === "pending"
                            ? "bg-yellow-500"
                            : status === "rejected"
                                ? "bg-red-500"
                                : status === "paid"
                                    ? "bg-green-500"
                                    : "";
                    return (
                        <div className="flex gap-2 items-center">
                            <div className={`${bgClass} w-2.5 h-2.5 rounded-full`}></div>
                            <span>{row.paymentStatus}</span>
                        </div>
                    );
                },
            },
            {
                name: "Slip",
                cell: (row) => (
                    <span
                        onClick={() => openModal(row)}
                        className="w-[60px] flex items-center justify-center h-[23px] text-primary underline  text-[13px] font-medium  cursor-pointer"
                    >
                        View
                    </span>
                ),
            },
        ],
        []
    );

    return (
        <div className="px-5 py-4 h-[299px] ">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0  items-center justify-center md:justify-between mb-4">
                <h1 className="text-lg font-semibold">Transaction History</h1>
                <div className="flex gap-4">
                    <button className="bg-primary text-white rounded-md p-2 flex items-center gap-1">
                        <CiFilter />
                        <span>Filter</span>
                    </button>
                    <div className=" flex items-center rounded-md text-white p-2 bg-gray-500">
                        <HiOutlineAdjustmentsHorizontal />
                        <select
                            className="  flex items-center text-white"
                            value={filterOption}
                            onChange={(e) => setFilterOption(e.target.value)}
                        >
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                    </div>
                </div>
            </div>
            <DataTable
                data={filteredData}
                columns={columns}
                selectableRowsHighlight
                customStyles={transactionTableStyles}
                fixedHeader
                fixedHeaderScrollHeight="70vh"
            />
            {modalOpen && selectedRow && (
                <Modal onClose={closeModal}>
                    <PaymentTransactionSlip selectedRow={selectedRow} />
                </Modal>
            )}
        </div>
    );
}

export default TenantTransactionHistory;

const Modal = ({ onClose, children, width }) => {
    return (
        <div
            className="modal bg-[#000000c5] fixed top-0 left-0 inset-0 z-[99] p-6 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className={`bg-white rounded-[12px] shadow-lg overflow-hidden ${width ? width : "w-[500px]"
                    } h-[488px]`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

