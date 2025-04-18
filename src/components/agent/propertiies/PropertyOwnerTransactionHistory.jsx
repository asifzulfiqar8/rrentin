'use client';
import React, { useState, useMemo, useCallback } from 'react';
import { transactionHistoryData, transactionTableStyles } from '@/data/data';
import AgentTransactionSlip from '@/components/owner/agentProfile/AgentTransactionSlip';
import Modal from '@/components/shared/small/Modal';
import dynamic from 'next/dynamic';
const DataTable = dynamic(() => import('react-data-table-component'), {
  ssr: false,
});
// Status styling utility function
const getStatusStyle = (status) => {
  const statusMap = {
    pending: 'bg-yellow-500',
    rejected: 'bg-red-500',
    paid: 'bg-green-500',
  };
  return statusMap[status.toLowerCase()] || '';
};

function PropertyOwnerTransactionHistory() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const openModal = useCallback((row) => {
    setSelectedRow(row);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setSelectedRow(null);
  }, []);

  const handleViewClick = useCallback(
    (row) => {
      try {
        openModal(row);
      } catch (err) {
        setError('Failed to open transaction details');
        console.error('Error opening modal:', err);
      }
    },
    [openModal]
  );

  const columns = useMemo(
    () => [
      {
        name: 'Invoice Id',
        selector: (row) => row.invoiceID,
        sortable: true,
        width: '20%',
      },
      {
        name: 'Date',
        selector: (row) => row.date,
        sortable: true,
        width: '20%',
      },
      {
        name: 'Amount',
        selector: (row) => row.amount,
        sortable: true,
        width: '20%',
      },
      {
        name: 'Payment Status',
        cell: (row) => {
          const status = row.paymentStatus.toLowerCase();
          return (
            <span
              className={`px-2 py-1 w-[80px] text-center rounded text-white ${getStatusStyle(
                status
              )}`}
              role="status"
              aria-label={`Payment status: ${row.paymentStatus}`}
            >
              {row.paymentStatus}
            </span>
          );
        },
        width: '20%',
      },
      {
        name: 'Slip',
        cell: (row) => (
          <button
            onClick={() => handleViewClick(row)}
            className="underline text-[13px] font-medium text-primary cursor-pointer hover:text-primary-dark transition-colors"
            aria-label={`View transaction slip for invoice ${row.invoiceID}`}
          >
            View
          </button>
        ),
        width: '20%',
      },
    ],
    [handleViewClick]
  );

  if (error) {
    return (
      <div className="px-5 py-4">
        <div className="text-red-500 mb-4">{error}</div>
        <button
          onClick={() => setError(null)}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="px-5 py-4">
      <h1 className="text-sm font-semibold mb-2">Transaction History</h1>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : transactionHistoryData.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No transaction history available</p>
        </div>
      ) : (
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
          progressPending={isLoading}
          noDataComponent={
            <div className="text-center py-8">
              <p className="text-gray-500">No transaction history available</p>
            </div>
          }
        />
      )}
      {modalOpen && selectedRow && (
        <Modal onClose={closeModal} aria-labelledby="transaction-modal-title">
          <AgentTransactionSlip selectedRow={selectedRow} />
        </Modal>
      )}
    </div>
  );
}

export default React.memo(PropertyOwnerTransactionHistory);
