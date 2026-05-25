
import DashboardLayout from '../layouts/DashboardLayout';

function TransferPage() {
  return (
    <DashboardLayout>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-10">
          Transfer Money
        </h1>

        <div className="bg-white p-8 rounded-xl shadow w-[500px]">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Receiver Account ID"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="number"
              placeholder="Amount"
              className="w-full border p-3 rounded-lg"
            />

            <button
              className="w-full bg-black text-white p-3 rounded-lg"
            >
              Transfer
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default TransferPage;

