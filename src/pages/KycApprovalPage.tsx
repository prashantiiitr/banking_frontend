import { useQuery } from '@tanstack/react-query';

import DashboardLayout from '../layouts/DashboardLayout';

import api from '../api/axios';

function KycApprovalPage() {
  const { data } = useQuery({
    queryKey: ['pending-kyc'],

    queryFn: async () => {
      const response =
        await api.get(
          '/kyc/pending',
        );

      return response.data;
    },
  });

  const approve =
    async (id: string) => {
      await api.patch(
        `/kyc/${id}/verify`,
      );

      window.location.reload();
    };

  const reject =
    async (id: string) => {
      await api.patch(
        `/kyc/${id}/reject`,
      );

      window.location.reload();
    };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        KYC Approval
      </h1>

      {data?.map(
        (item: any) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-xl mb-4"
          >
            <h3>
              {item.panNumber}
            </h3>

            <button
              onClick={() =>
                approve(item.id)
              }
            >
              Approve
            </button>

            <button
              onClick={() =>
                reject(item.id)
              }
            >
              Reject
            </button>
          </div>
        ),
      )}
    </DashboardLayout>
  );
}

export default KycApprovalPage;