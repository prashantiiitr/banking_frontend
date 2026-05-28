
import { useQuery } from '@tanstack/react-query';

import DashboardLayout from '../layouts/DashboardLayout';

import api from '../api/axios';

function LoansPage() {
  const { data } = useQuery({
    queryKey: ['loans'],

    queryFn: async () => {
      const response =
        await api.get('/loans');

      return response.data;
    },
  });

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Loans
      </h1>

      <div className="space-y-6">
        {data?.map((loan: any) => (
          <div
            key={loan.id}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            <h2 className="text-2xl font-bold">
              ₹{loan.amount}
            </h2>

            <p className="mt-4">
              EMI:
              ₹{loan.monthlyEmi}
            </p>

            <p className="mt-2">
              Status:
              {loan.status}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export default LoansPage;

