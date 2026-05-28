
import { useQuery } from '@tanstack/react-query';

import DashboardLayout from '../layouts/DashboardLayout';

import api from '../api/axios';

function AccountsPage() {
  const { data } = useQuery({
    queryKey: ['accounts'],

    queryFn: async () => {
      const response =
        await api.get('/accounts');

      return response.data;
    },
  });

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Accounts
      </h1>

      <div className="grid grid-cols-2 gap-6">
        {data?.map((account: any) => (
          <div
            key={account.id}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            <h2 className="text-2xl font-bold">
              {account.type}
            </h2>

            <p className="mt-4 text-slate-500">
              Currency:
              {account.currency}
            </p>

            <p className="mt-2 text-3xl font-bold">
              ₹{account.balance}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export default AccountsPage;

