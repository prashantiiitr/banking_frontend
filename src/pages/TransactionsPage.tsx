
import DashboardLayout from '../layouts/DashboardLayout';

function TransactionsPage() {
  return (
    <DashboardLayout>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-10">
          Transactions
        </h1>

        <div className="bg-white p-6 rounded-xl shadow">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">
                  Type
                </th>

                <th className="text-left">
                  Amount
                </th>

                <th className="text-left">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Transfer</td>
                <td>₹5000</td>
                <td>Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default TransactionsPage;

