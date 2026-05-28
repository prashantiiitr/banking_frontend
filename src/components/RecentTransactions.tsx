
interface Props {
  transactions: any[];
}

function RecentTransactions({
  transactions,
}: Props) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Recent Transactions
      </h2>

      <div className="space-y-4">
        {transactions.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b pb-3"
          >
            <div>
              <p className="font-semibold">
                {item.description}
              </p>

              <p className="text-slate-500 text-sm">
                {item.status}
              </p>
            </div>

            <p className="font-semibold">
              ₹{item.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentTransactions;

