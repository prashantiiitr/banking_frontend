
import DashboardLayout from '../layouts/DashboardLayout';

function AccountsPage() {
  return (
    <DashboardLayout>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-10">
          Accounts
        </h1>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold">
            Savings Account
          </h2>

          <p className="mt-4 text-xl">
            Balance: ₹50,000
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AccountsPage;

