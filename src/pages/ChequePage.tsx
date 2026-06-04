import { useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";
import api from "../api/axios";

function ChequePage() {
  const [accountId, setAccountId] =
    useState("");

  const [
    chequeNumber,
    setChequeNumber,
  ] = useState("");

  const [amount, setAmount] =
    useState("");

  const [
    payeeName,
    setPayeeName,
  ] = useState("");

  const submitCheque =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {
        await api.post(
          "/cheques",
          {
            accountId,
            chequeNumber,
            amount:
              Number(amount),
            payeeName,
          }
        );

        toast.success(
          "Cheque Created"
        );
      } catch {
        toast.error(
          "Failed"
        );
      }
    };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6">
          Cheque Request
        </h1>

        <form
          onSubmit={
            submitCheque
          }
          className="space-y-4"
        >
          <input
            placeholder="Account ID"
            value={accountId}
            onChange={(e) =>
              setAccountId(
                e.target.value
              )
            }
            className="w-full border p-3 rounded"
          />

          <input
            placeholder="Cheque Number"
            value={
              chequeNumber
            }
            onChange={(e) =>
              setChequeNumber(
                e.target.value
              )
            }
            className="w-full border p-3 rounded"
          />

          <input
            placeholder="Amount"
            value={amount}
            onChange={(e) =>
              setAmount(
                e.target.value
              )
            }
            className="w-full border p-3 rounded"
          />

          <input
            placeholder="Payee Name"
            value={payeeName}
            onChange={(e) =>
              setPayeeName(
                e.target.value
              )
            }
            className="w-full border p-3 rounded"
          />

          <button className="bg-black text-white px-5 py-3 rounded">
            Create Cheque
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default ChequePage;