import { useQuery } from "@tanstack/react-query";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../api/axios";

function LoanApprovalPage() {
  const { data, refetch } =
    useQuery({
      queryKey: ["loans"],
      queryFn: async () => {
        const response =
          await api.get("/loans");

        return response.data;
      },
    });

  const approve =
    async (id: string) => {
      await api.patch(
        `/loans/${id}/approve`,
        {
          managerId: "ADMIN",
        }
      );

      refetch();
    };

  const reject =
    async (id: string) => {
      await api.patch(
        `/loans/${id}/reject`
      );

      refetch();
    };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Loan Approval
      </h1>

      {data?.map((loan: any) => (
        <div
          key={loan.id}
          className="bg-white p-5 rounded-xl shadow mb-4"
        >
          <h3>
            ₹{loan.amount}
          </h3>

          <p>
            Status:
            {loan.status}
          </p>

          <button
            onClick={() =>
              approve(loan.id)
            }
            className="bg-green-500 text-white px-4 py-2 rounded mr-3"
          >
            Approve
          </button>

          <button
            onClick={() =>
              reject(loan.id)
            }
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Reject
          </button>
        </div>
      ))}
    </DashboardLayout>
  );
}

export default LoanApprovalPage;