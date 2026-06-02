import { useState } from 'react';

import toast from 'react-hot-toast';

import DashboardLayout from '../layouts/DashboardLayout';

import api from '../api/axios';

function NomineePage() {
  const [accountId, setAccountId] =
    useState('');

  const [name, setName] =
    useState('');

  const [relation, setRelation] =
    useState('');

  const [phone, setPhone] =
    useState('');

  const submitNominee =
    async (
      e: React.FormEvent,
    ) => {
      e.preventDefault();

      try {
        await api.post(
          '/nominees',
          {
            accountId,
            name,
            relation,
            phone,
          },
        );

        toast.success(
          'Nominee Added',
        );
      } catch {
        toast.error(
          'Failed',
        );
      }
    };

  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6">
          Add Nominee
        </h1>

        <form
          className="space-y-4"
          onSubmit={
            submitNominee
          }
        >
          <input
            placeholder="Account ID"
            value={accountId}
            onChange={(e) =>
              setAccountId(
                e.target.value,
              )
            }
            className="w-full border p-3 rounded"
          />

          <input
            placeholder="Nominee Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value,
              )
            }
            className="w-full border p-3 rounded"
          />

          <input
            placeholder="Relation"
            value={relation}
            onChange={(e) =>
              setRelation(
                e.target.value,
              )
            }
            className="w-full border p-3 rounded"
          />

          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) =>
              setPhone(
                e.target.value,
              )
            }
            className="w-full border p-3 rounded"
          />

          <button className="bg-black text-white px-5 py-3 rounded">
            Add Nominee
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default NomineePage;