
import DashboardLayout from '../layouts/DashboardLayout';

function BeneficiariesPage() {
  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            Beneficiaries
          </h1>

          <button className="bg-black text-white px-5 py-3 rounded-xl">
            Add Beneficiary
          </button>
        </div>

        <div className="mt-8 space-y-4">
          <div className="border p-5 rounded-xl flex justify-between">
            <div>
              <h2 className="font-semibold">
                Rahul Sharma
              </h2>

              <p className="text-slate-500">
                ICICI Bank
              </p>
            </div>

            <button className="bg-slate-100 px-4 rounded-lg">
              Transfer
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default BeneficiariesPage;

