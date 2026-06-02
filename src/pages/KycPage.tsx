import { useState } from 'react';

import toast from 'react-hot-toast';

import DashboardLayout from '../layouts/DashboardLayout';

import api from '../api/axios';

function KycPage() {
  const [userId, setUserId] =
    useState('');

  const [panNumber, setPanNumber] =
    useState('');

  const [aadhaar, setAadhaar] =
    useState('');

  const [address, setAddress] =
    useState('');

  const submitKyc =
    async (
      e: React.FormEvent,
    ) => {
      e.preventDefault();

      try {
        await api.post('/kyc', {
          userId,
          panNumber,
          aadhaar,
          address,
        });

        toast.success(
          'KYC Submitted',
        );
      } catch {
        toast.error(
          'Submission Failed',
        );
      }
    };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6">
          KYC Verification
        </h1>

        <form
          className="space-y-4"
          onSubmit={submitKyc}
        >
          <input
            placeholder="User ID"
            value={userId}
            onChange={(e) =>
              setUserId(
                e.target.value,
              )
            }
            className="w-full border p-3 rounded"
          />

          <input
            placeholder="PAN Number"
            value={panNumber}
            onChange={(e) =>
              setPanNumber(
                e.target.value,
              )
            }
            className="w-full border p-3 rounded"
          />

          <input
            placeholder="Aadhaar Number"
            value={aadhaar}
            onChange={(e) =>
              setAadhaar(
                e.target.value,
              )
            }
            className="w-full border p-3 rounded"
          />

          <textarea
            placeholder="Address"
            value={address}
            onChange={(e) =>
              setAddress(
                e.target.value,
              )
            }
            className="w-full border p-3 rounded"
          />

          <button className="bg-black text-white px-5 py-3 rounded">
            Submit KYC
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default KycPage;