
import DashboardLayout from '../layouts/DashboardLayout';

function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-10">
        <h1 className="text-4xl font-bold">
          Banking Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">
              Total Balance
            </h2>

            <p className="text-3xl mt-4">
              ₹1,20,000
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">
              Transactions
            </h2>

            <p className="text-3xl mt-4">
              24
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">
              Loans
            </h2>

            <p className="text-3xl mt-4">
              2
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashboardPage;

