
import DashboardLayout from '../layouts/DashboardLayout';

function ApplyLoanPage() {
  return (
    <DashboardLayout>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-10">
          Apply Loan
        </h1>

        <div className="bg-white p-8 rounded-xl shadow w-[500px]">
          <form className="space-y-4">
            <input
              type="number"
              placeholder="Loan Amount"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="number"
              placeholder="Interest Rate"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="number"
              placeholder="Tenure Months"
              className="w-full border p-3 rounded-lg"
            />

            <button
              className="w-full bg-black text-white p-3 rounded-lg"
            >
              Apply Loan
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ApplyLoanPage;

