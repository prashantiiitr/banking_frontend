
import DashboardLayout from '../layouts/DashboardLayout';

function AdminPage() {
  return (
    <DashboardLayout>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-10">
          Admin Panel
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold">
              Fraud Alerts
            </h2>

            <p className="mt-4">
              3 suspicious activities
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold">
              System Health
            </h2>

            <p className="mt-4 text-green-600">
              All services operational
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminPage;

