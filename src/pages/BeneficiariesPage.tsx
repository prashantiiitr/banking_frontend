import DashboardLayout from '../layouts/DashboardLayout';

import { useBeneficiaries } from '../hooks/useBeneficiaries';

function BeneficiariesPage() {
  const {
    data,
    isLoading,
  } = useBeneficiaries();

  if (isLoading) {
    return (
      <DashboardLayout>
        <h1>Loading...</h1>
      </DashboardLayout>
    );
  }

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
          {data?.map(
            (beneficiary: any) => (
              <div
                key={beneficiary.id}
                className="border rounded-xl p-5"
              >
                <div className="flex justify-between">
                  <div>
                    <h2 className="font-bold text-lg">
                      {beneficiary.name}
                    </h2>

                    <p className="text-slate-500">
                      {
                        beneficiary.bankName
                      }
                    </p>

                    <p className="text-slate-500">
                      A/C:
                      {
                        beneficiary.accountNumber
                      }
                    </p>

                    <p className="text-slate-500">
                      IFSC:
                      {
                        beneficiary.ifscCode
                      }
                    </p>
                  </div>

                  <div>
                    {beneficiary.isApproved ? (
                      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                        Approved
                      </span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
                        Pending
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default BeneficiariesPage;