
interface Props {
  totalBalance: number;

  transactionCount: number;

  loanCount: number;
}

function DashboardCards({
  totalBalance,
  transactionCount,
  loanCount,
}: Props) {
  const cards = [
    {
      title: 'Total Balance',

      value: `₹${totalBalance.toLocaleString()}`,
    },

    {
      title: 'Transactions',

      value: transactionCount,
    },

    {
      title: 'Loans',

      value: loanCount,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white p-8 rounded-2xl shadow-sm"
        >
          <h2 className="text-slate-500">
            {card.title}
          </h2>

          <p className="text-3xl font-bold mt-4">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;

