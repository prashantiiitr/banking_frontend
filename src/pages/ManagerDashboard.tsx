import DashboardLayout from '../layouts/DashboardLayout';

import { useManagerStats } from '../hooks/useManagerStats';

function ManagerDashboard() {
  const { data } =
    useManagerStats();

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Manager Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-5">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3>
            Pending Accounts
          </h3>

          <p className="text-4xl font-bold">
            {data?.accounts || 0}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Pending KYC</h3>

          <p className="text-4xl font-bold">
            {data?.kyc || 0}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ManagerDashboard;