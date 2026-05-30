import { useState } from 'react';

import toast from 'react-hot-toast';

import DashboardLayout from '../layouts/DashboardLayout';

import api from '../api/axios';

function TransferPage() {
  const [
    fromAccountId,
    setFromAccountId,
  ] = useState('');

  const [
    toAccountId,
    setToAccountId,
  ] = useState('');

  const [amount, setAmount] =
    useState('');

  const [
    transferType,
    setTransferType,
  ] = useState('IMPS');

  const [remarks, setRemarks] =
    useState('');

  const handleTransfer = async (
    e: React.FormEvent,
  ) => {
    e.preventDefault();

    try {
      await api.post(
        '/transactions/transfer',
        {
          fromAccountId,

          toAccountId,

          amount:
            Number(amount),

          transferType,

          remarks,

          description:
            remarks,
        },
      );

      toast.success(
        'Transfer Successful',
      );

      setAmount('');

      setRemarks('');
    } catch (error: any) {
      toast.error(
        error?.response?.data
          ?.message ||
          'Transfer Failed',
      );
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-2xl shadow-sm w-[600px]">
        <h1 className="text-3xl font-bold mb-8">
          Fund Transfer
        </h1>

        <form
          className="space-y-4"
          onSubmit={handleTransfer}
        >
          <input
            type="text"
            placeholder="From Account ID"
            value={
              fromAccountId
            }
            onChange={(e) =>
              setFromAccountId(
                e.target.value,
              )
            }
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="To Account ID"
            value={toAccountId}
            onChange={(e) =>
              setToAccountId(
                e.target.value,
              )
            }
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) =>
              setAmount(
                e.target.value,
              )
            }
            className="w-full border p-4 rounded-xl"
          />

          <select
            value={transferType}
            onChange={(e) =>
              setTransferType(
                e.target.value,
              )
            }
            className="w-full border p-4 rounded-xl"
          >
            <option value="IMPS">
              IMPS
            </option>

            <option value="NEFT">
              NEFT
            </option>

            <option value="RTGS">
              RTGS
            </option>
          </select>

          <input
            type="text"
            placeholder="Remarks"
            value={remarks}
            onChange={(e) =>
              setRemarks(
                e.target.value,
              )
            }
            className="w-full border p-4 rounded-xl"
          />

          <button className="w-full bg-black text-white p-4 rounded-xl">
            Transfer Funds
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default TransferPage;