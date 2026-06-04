import { useQuery } from "@tanstack/react-query";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../api/axios";

function FraudDashboard() {
  const { data } = useQuery({
    queryKey: ["fraud-alerts"],
    queryFn: async () => {
      const response = await api.get("/fraud-alerts");
      return response.data;
    },
  });

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Fraud Monitoring
      </h1>

      <div className="space-y-4">
        {data?.map((alert: any) => (
          <div
            key={alert.id}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h3 className="font-semibold">
              {alert.reason}
            </h3>

            <p>
              Account ID:
              {alert.accountId}
            </p>

            <p>
              Status:
              {alert.resolved
                ? "Resolved"
                : "Pending"}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export default FraudDashboard;