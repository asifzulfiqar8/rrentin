'use client';
import React, { useState, useMemo } from 'react';
import { transactionHistoryData, transactionTableStyles } from '@/data/data';
import AgentTransactionSlip from '@/components/owner/agentProfile/AgentTransactionSlip';
// at the top of your file
import dynamic from 'next/dynamic';

const DataTable = dynamic(() => import('react-data-table-component'), {
  ssr: false,
});

function PropertyOwnerPaymentDetails() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const openModal = (row) => {
    setSelectedRow(row);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const columns = useMemo(
    () => [
      {
        name: 'Invoice Id',
        selector: (row) => row.invoiceID,
        // width: '40%',
      },
      {
        name: 'Date',
        selector: (row) => row.date,
      },
      {
        name: 'Amount',
        selector: (row) => row.amount,
      },
      {
        name: 'Payment Status',
        cell: (row) => {
          const status = row.paymentStatus.toLowerCase();
          const bgClass =
            status === 'pending'
              ? 'bg-yellow-500'
              : status === 'rejected'
              ? 'bg-red-500'
              : status === 'paid'
              ? 'bg-green-500'
              : '';
          return (
            <span className={`px-2 py-1 w-[80px] text-center rounded text-white ${bgClass}`}>
              {row.paymentStatus}
            </span>
          );
        },
      },
      {
        name: 'Slip',
        cell: (row) => (
          <span
            onClick={() => openModal(row)}
            className="underline text-[13px] font-medium text-primary cursor-pointer"
          >
            View
          </span>
        ),
      },
    ],
    []
  );

  return (
    <div className="px-5 py-4  w-full  rounded-lg shadow-lg">
      <h1 className="text-sm font-semibold mb-2">Payment History</h1>
      <DataTable
        data={transactionHistoryData.slice(0, 5)}
        columns={columns}
        selectableRowsHighlight
        customStyles={transactionTableStyles}
        fixedHeader
        fixedHeaderScrollHeight="70vh"
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15]}
        // progressPending={isLoading}
        noDataComponent={
          <div className="text-center py-8">
            <p className="text-gray-500">No transaction history available</p>
          </div>
        }
      />
      {modalOpen && selectedRow && (
        <Modal onClose={closeModal}>
          <AgentTransactionSlip selectedRow={selectedRow} />
        </Modal>
      )}
    </div>
  );
}

export default PropertyOwnerPaymentDetails;

const Modal = ({ onClose, children, width }) => {
  return (
    <div
      className="modal bg-[#000000c5] fixed top-0 left-0 inset-0 z-[99] p-6 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-[12px] shadow-lg overflow-hidden ${
          width ? width : 'w-[500px]'
        } h-[488px]`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
