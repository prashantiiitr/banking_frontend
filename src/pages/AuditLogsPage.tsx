import { useQuery } from "@tanstack/react-query";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../api/axios";

function AuditLogsPage() {
  const { data } = useQuery({
    queryKey: ["audit-logs"],
    queryFn: async () => {
      const response =
        await api.get(
          "/audit-logs"
        );

      return response.data;
    },
  });

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Audit Logs
      </h1>

      {data?.map(
        (log: any) => (
          <div
            key={log.id}
            className="bg-white p-4 rounded-xl shadow mb-3"
          >
            <h3 className="font-semibold">
              {log.action}
            </h3>

            <p>
              Entity:
              {log.entityId}
            </p>

            <p>
              {new Date(
                log.createdAt
              ).toLocaleString()}
            </p>
          </div>
        )
      )}
    </DashboardLayout>
  );
}

export default AuditLogsPage;