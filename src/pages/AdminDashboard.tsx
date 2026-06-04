import { useQuery } from "@tanstack/react-query";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../api/axios";

function AdminDashboard() {
  const { data } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const response = await api.get("/admin/stats");
      return response.data;
    },
  });

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Total Users</h3>
          <p className="text-4xl font-bold">
            {data?.users || 0}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Total Accounts</h3>
          <p className="text-4xl font-bold">
            {data?.accounts || 0}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Total Loans</h3>
          <p className="text-4xl font-bold">
            {data?.loans || 0}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Total Transactions</h3>
          <p className="text-4xl font-bold">
            {data?.transactions || 0}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Fraud Alerts</h3>
          <p className="text-4xl font-bold text-red-500">
            {data?.fraudAlerts || 0}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;