
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

          description:
            'Bank Transfer',
        },
      );

      toast.success(
        'Transfer successful',
      );
    } catch (error) {
      toast.error(
        'Transfer failed',
      );
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-2xl shadow-sm w-[500px]">
        <h1 className="text-3xl font-bold mb-8">
          Transfer Money
        </h1>

        <form
          className="space-y-4"
          onSubmit={handleTransfer}
        >
          <input
            type="text"
            placeholder="From Account ID"
            className="w-full border p-4 rounded-xl"
            value={
              fromAccountId
            }
            onChange={(e) =>
              setFromAccountId(
                e.target.value,
              )
            }
          />

          <input
            type="text"
            placeholder="To Account ID"
            className="w-full border p-4 rounded-xl"
            value={toAccountId}
            onChange={(e) =>
              setToAccountId(
                e.target.value,
              )
            }
          />

          <input
            type="number"
            placeholder="Amount"
            className="w-full border p-4 rounded-xl"
            value={amount}
            onChange={(e) =>
              setAmount(
                e.target.value,
              )
            }
          />

          <button className="w-full bg-black text-white p-4 rounded-xl">
            Transfer
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default TransferPage;

